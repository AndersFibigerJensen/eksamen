import { AppDataSource } from "../data-source";
import { User } from "../output/entities/User";
import { comparePassword, hashPassword } from "../utils/passwordUtils";
import jwt from "jsonwebtoken";

const JWT_Secret = process.env.JWT_SECRET;

export class AuthService {
    private static get userrepository() {
        return AppDataSource.getRepository("User");
    }

    static async register(UserData:Partial<User>)
    {
        console.log(UserData)
        const userdata= UserData
        const {username,password,email,createdAt}=userdata
        const existingusername = await this.userrepository.findOneBy({ username });
        if (existingusername) {
            throw new Error("Username already exists");
        }
        if(!password)
        {
            throw Error("password not existing")
        }
        const passwordHash = await hashPassword(password)
        const newuser = this.userrepository.create({
            username:username,
            password:passwordHash,
            email:email,
            createdAt:createdAt
        });
         await this.userrepository.save(newuser);
         return {id:newuser.id,username:newuser.username};
    }

    static async login(
        username: string,
        password: string
    ) {
        const user = await this.userrepository.findOneBy({ username });
        if (!user) {
            throw new Error("Invalid username or password");
        }
        
        const valid= await comparePassword(password,user.password);
        if (!valid) {
            console.log('Hash type:', typeof user.passwordHash, user.passwordHash);
            throw new Error("Invalid username or password");

        }
 
        console.log(user.userid)
        const token= jwt.sign(
            {userid:user.userid,username:user.username},
            JWT_Secret as string,
            {expiresIn:"1d"}
        );
        return {token,user};
    }
}

export const Authservice= new AuthService()


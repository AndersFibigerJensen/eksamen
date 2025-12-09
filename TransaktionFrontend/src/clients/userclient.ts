import { axiosInstance } from "../Services/api-client";
import type { User } from "../Services/userService";


export class UserClient {
    private basepath= "authRouter";

    login= async (
        username: string,
        password: string
    ): Promise<{token:string; user:User}> => { 
            const res= await axiosInstance.post(`/${this.basepath}/login`,{
                username,
                password});
            return res.data;
    }

    register= async (Userdata:Partial<User>): Promise<User> => { 
         console.log(Userdata)
            const res= await axiosInstance.post(`/${this.basepath}/register`,
                {username:Userdata.username,
                 password:Userdata.password,
                 email:Userdata.email,
                 createdAt:Userdata.createdAt
                }
            );
            return res.data;
    }
}

const userClient= new UserClient();
export default userClient;
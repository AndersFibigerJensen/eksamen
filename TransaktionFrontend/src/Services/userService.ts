import userClient from "../clients/userclient";
import ApiClient from "./api-client"; 
import { isTokenValid} from "../hooks/useAuth";


export interface User {
    id:number
    username:string
    password:string
    email:string
    createdAt:string
}

const Tokenkey= "token"

const apiClient= new ApiClient<User>("/users")

const userService= {
    
    getAll:apiClient.getAll,

    get:(id:number)=> apiClient.get(id),

    delete:(id:number)=> apiClient.delete(id),

    create:(data:Partial<User>)=> apiClient.create(data),

    update:(id:number|string,data:Partial<User>)=> apiClient.update(id,data),

    login: async (username:string,password:string) => {
        const data = await userClient.login(username,password);
        userService.saveToken(data.token)
        return data;
    },

    register: async (userdata:Partial<User>) => {
        const data = await userClient.register(userdata);
        return data;
    },

    saveToken:(token:string)=> {
        localStorage.setItem(Tokenkey,token)
    },

    getToken:()=>localStorage.getItem(Tokenkey),

    ensureAuthenticated:():number => {
        const token= userService.getToken();
        if(!isTokenValid(token))
        {
            throw new Error("authentication required")
        }
        const userid= userService.getUserIdFromToken()
        if(!userid)
            throw new Error()
        return userid
    },

    getUserIdFromToken:():number|null=>{
        const token=localStorage.getItem(Tokenkey);
        if(!token) return null
        try {
            const [,payloadBase64]=token.split(".")
            const payload = JSON.parse(atob(payloadBase64))
            return payload.userid ?? null;
        } catch {
            return null
        }
    }
}

export default userService;
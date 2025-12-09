import { useMutation, useQueryClient} from "@tanstack/react-query";
import userService from "../Services/userService";
import useAuthStore from "../queries/AuthStore";





const UseLogin=() => 
{
    const queryclient= useQueryClient();
      const setUser = useAuthStore(s => s.setUser);
      const setToken = useAuthStore(s => s.setToken);
    return useMutation({
        mutationFn:({ username, password }: { username: string; password: string })=>userService.login(username,password),
        onSuccess:(data)=> {
            setUser(data.user)
            setToken(data.token)
            queryclient.invalidateQueries({queryKey:["authRouter/login"]})
        }
    })
}

export default UseLogin


import { useMemo } from "react";
import useAuthStore from "../queries/AuthStore";
import type { User } from "../Services/userService";



export function UseAuth() {
    const token= useAuthStore((state) => state.token);
    const setToken= useAuthStore((state) => state.setToken);
    const resetToken= useAuthStore((state) => state.resetToken);
    const user= useAuthStore((state) => state.user);
    const setUser= useAuthStore((state) => state.setUser);
    const ResetUser= useAuthStore((state) => state.ResetUser);

    const saveToken= (newToken: string)=> {
        setToken(newToken);
    }

    const saveUser= (user:User)=> { 
        setUser(user);
    }

    const logout= () => {
        resetToken();
        ResetUser();
    }

    const isAuthenticated= useMemo(() => isTokenValid(token), [token]);
    return {token,saveToken,user,saveUser,logout,isAuthenticated};
}

    export function isTokenValid(token: string|null): boolean {
        if (!token) return false;
        try {
            const [,payloadBase64]= token.split(".");
            if(!payloadBase64) return false;
            const payload= JSON.parse(atob(payloadBase64));
            if(!payload.exp) return false;
            return Date.now() < payload.exp * 1000;
        } catch {
            return false;
        }
    }

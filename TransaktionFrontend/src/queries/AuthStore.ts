import { create } from "zustand";
import type { User } from "../Services/userService";


interface AuthStore {
    user:User;
    token: string;
    setUser: (user: User) => void;
    ResetUser: () => void;
    setToken: (token: string) => void;
    resetToken: () => void; 
}

const getInitialToken= () => 
localStorage.getItem("authToken") || "";

const getInitialTUser= () => {
    const userData= localStorage.getItem("authUser");
    return userData ? JSON.parse(userData) : ({} as User);
}

const useAuthStore= create<AuthStore>((set) => ({
    user: getInitialTUser(),
    token: getInitialToken(),
    setUser: (user: User) => set(() => {
        localStorage.setItem("authUser", JSON.stringify(user));
        return { user };
    }),
    ResetUser: () => {
        localStorage.removeItem("authUser");
        set(()=>({user:{} as User}));
    },
    setToken: (token) => {
        localStorage.setItem("authToken",token);
        set(()=>({token}));
    },
    resetToken: () => {
        localStorage.removeItem("authToken");
        set(()=>({token:""}));
    },
}));

export default useAuthStore;
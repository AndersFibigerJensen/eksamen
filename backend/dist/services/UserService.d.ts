import { User } from "../output/entities/User";
export declare const GetUser: (usernameid: string, passwordid: string) => Promise<User>;
export declare const deleteUserById: (UserId: number) => Promise<void>;
export declare const createUser: (UserData: Partial<User>) => Promise<User>;
export declare const updateUser: (UserId: number, UserData: Partial<User>) => Promise<User>;
//# sourceMappingURL=UserService.d.ts.map
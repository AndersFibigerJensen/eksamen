export declare class AuthService {
    private static get userrepository();
    static register(username: string, password: string): Promise<{
        id: any;
        username: any;
    }>;
    static login(username: string, password: string): Promise<{
        token: any;
        user: import("typeorm").ObjectLiteral;
    }>;
}
export declare const Authservice: AuthService;
//# sourceMappingURL=AuthService.d.ts.map
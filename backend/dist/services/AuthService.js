"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authservice = exports.AuthService = void 0;
const data_source_1 = require("../data-source");
const passwordUtils_1 = require("../utils/passwordUtils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_Secret = process.env.JWT_SECRET;
if (!JWT_Secret) {
    throw new Error("JWT_Secret not defined");
}
class AuthService {
    static get userrepository() {
        return data_source_1.AppDataSource.getRepository("User");
    }
    static async register(username, password) {
        const existingusername = await this.userrepository.findOneBy({ username });
        if (existingusername) {
            throw new Error("Username already exists");
        }
        const passwordHash = await (0, passwordUtils_1.hashPassword)(password);
        const newuser = this.userrepository.create({
            username,
            passwordHash,
        });
        await this.userrepository.save(newuser);
        return { id: newuser.id, username: newuser.username };
    }
    static async login(username, password) {
        const user = await this.userrepository.findOneBy({ username });
        if (!user) {
            throw new Error("Invalid username or password");
        }
        const valid = await (0, passwordUtils_1.comparePassword)(password, user.passwordHash);
        if (!valid) {
            throw new Error("Invalid username or password");
        }
        const token = jsonwebtoken_1.default.sign({ userid: user.userid, username: username }, JWT_Secret, { expiresIn: "1d" });
        return { token, user };
    }
}
exports.AuthService = AuthService;
exports.Authservice = new AuthService();
//# sourceMappingURL=AuthService.js.map
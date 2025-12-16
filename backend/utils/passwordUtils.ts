import bcrypt from 'bcrypt';


export function hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}


export function comparePassword(
    password: string,
     hashedPassword: string): Promise<boolean>
      {
    return bcrypt.compare(password, hashedPassword);
}

export function hashuserid(id:string):Promise<string>
{
    const saltRounds =10;
    return bcrypt.hash(id,saltRounds)
}

export function compareUserId(id:string,hashuserid):Promise<string>
{
    return 
}
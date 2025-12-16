import { AppDataSource } from "../data-source";
import { User } from "../output/entities/User";
import { hashuserid } from "../utils/passwordUtils";


const UserRepository= AppDataSource.getRepository(User);

export const GetUser= async (usernameid:string,passwordid:string) =>
{
    try {
        const user= await UserRepository.findOne({
            where:{username:String(usernameid),password:(passwordid)},
        })
        return user
    }catch(error)
    {
        throw new Error(`user with username ${usernameid} and password ${passwordid}
            cannot be found`)
    }
}

export const deleteUserById = async (UserId: number) => {
  try {
    await UserRepository.delete(UserId);
  } catch (error) {
    throw new Error(`Failed to delete game with ID ${UserId}.`);
  }
};


export const createUser = async (UserData: Partial<User>) => {
  const User = UserRepository.create(UserData);
  return await UserRepository.save(User);
};

export const updateUser = async (
  UserId: number,
  UserData: Partial<User>
) => {
  await UserRepository.update(UserId, UserData);
  const updatedBudget = await UserRepository.findOneBy({ idUser: UserId });
    if (!updatedBudget) { }
    return updatedBudget;
};
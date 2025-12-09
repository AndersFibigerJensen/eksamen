import { SelectQueryBuilder } from "typeorm/query-builder/SelectQueryBuilder.js";
import { AppDataSource } from "../data-source";
import { Goal } from "../output/entities/Goal";
import {DEFAULT_PAGE_SIZE, START_PAGE,MAX_PAGE_SIZE} from "../routers/goalRouter";
import { Max_Page_size } from "../routers/categoryRouter";




const GoalRepository= AppDataSource.getRepository(Goal)

const addGoalFilter= (
    queryBuilder:SelectQueryBuilder<Goal>,
    UserId:number|undefined
)=>
{ 
    if(UserId)
        {
            queryBuilder.andWhere((qb)=>
            {
                const subQuery=qb
                .subQuery()
                .select("Goal.idGoal")
                .from(Goal,"Goal")
                .leftJoin("Goal.userIdUser2","User")
                .where("Goal.userIdUser2= :UserId")
                .getQuery();
                return "Goal.idGoal in " + subQuery
            })
            .setParameter("UserId",UserId)
        }
}

const sortorder = (
    QueryBuilder:SelectQueryBuilder<Goal>,
    sortorder:string|undefined
) =>
{
    if(!sortorder) QueryBuilder.orderBy("Goal.idGoal","ASC");
    if(sortorder=="low") QueryBuilder.orderBy("Goal.idGoal","DESC");
}

const buildGoalQuery = (req:any) =>
{
    const goalId =req.query.userId ? Number(req.query.userId) : undefined
    const querybuilder= GoalRepository.createQueryBuilder("Goal")
    .leftJoinAndSelect("Goal.userIdUser2","user");
    addGoalFilter(querybuilder,goalId)
    sortorder(querybuilder,req.query.sortorder);
    return querybuilder;
}

export const GetGoals = async(req:any)=> {
        const page= req.query.page ? Number(req.query.page) :START_PAGE;
        let pagesize= req.query.pagesize ? Number(req.query.pagesize) :DEFAULT_PAGE_SIZE;
    
        if(pagesize>MAX_PAGE_SIZE) {
            pagesize=Max_Page_size;
        }
    const querybuilder= await buildGoalQuery(req)
    try {
                querybuilder.skip((page-1)*pagesize).take(pagesize);
        const [goals,totalcount]= await querybuilder.getManyAndCount();
        return {
            count: totalcount,
            next: totalcount > page * pagesize ? `?page=${page + 1}&pagesize=${pagesize}` : null,
            results: goals.map((goal) => ({
                ...goal,
                userIdUser2: goal.userIdUser2
            })),
        }}
        catch(error)
        {
            
        }

}


export const GetGoal= async (Goalid:string)=>
{
    try{
        const Goal= await GoalRepository.findOne({
            where:{idGoal:Number(Goalid)},
            relations:["userIdUser2"]
        });
        return {
            ...Goal,
            useridUser2:Goal.userIdUser2
        };
    } catch(error)
    {
        throw new Error(`Goal with ID ${Goalid} not found`)
    }
};

export const deleteGoalById = async (GoalId: number) => {
  try {
    await GoalRepository.delete(GoalId);
  } catch (error) {
    throw new Error(`Failed to delete game with ID ${GoalId}.`);
  }
};


export const createGoal = async (GoalData: Partial<Goal>) => {
  const Goal = GoalRepository.create(GoalData);
  return await GoalRepository.save(Goal);
};

export const updateGoal = async (
  GoalId: number,
  GoalData: Partial<Goal>
) => {
  await GoalRepository.update(GoalId, GoalData);
  const updatedGoal = await GoalRepository.findOneBy({ idGoal: GoalId });
    if (!updatedGoal) { }
    return updatedGoal;
};
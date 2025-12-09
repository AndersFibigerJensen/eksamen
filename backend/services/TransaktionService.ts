import { QueryBuilder, SelectQueryBuilder } from "typeorm";
import { Transaktion } from "../output/entities/Transaktion";
import { AppDataSource } from "../data-source";


const TransaktionRepository= AppDataSource.getRepository(Transaktion)

const addCategoryFilter= (
    queryBuilder:SelectQueryBuilder<Transaktion>,
    categoryId:number|undefined
)=>
{ 
    if(categoryId)
        {
            queryBuilder.andWhere((qb)=>
            {
                const subQuery=qb
                .subQuery()
                .select("Transaktion.idTransaktion")
                .from(Transaktion,"Transaktion")
                .leftJoin("Transaktion.categoryIdCategory2","category")
                .where("Transaktion.categoryIdCategory2= :categoryId")
                .getQuery();
                return "Transaktion.idTransaktion in " + subQuery
            })
            .setParameter("categoryId",categoryId)
        }
}

const addAccountFilter= (
    queryBuilder:SelectQueryBuilder<Transaktion>,
    AccountId:number|undefined
)=>
{ 
    if(AccountId)
        {
            queryBuilder.andWhere((qb)=>
            {
                const subQuery=qb
                .subQuery()
                .select("Transaktion.idTransaktion")
                .from(Transaktion,"Transaktion")
                .leftJoin("Transaktion.accountIdAccount2","account")
                .where("Transaktion.accountIdAccount2= :AccountId")
                .getQuery();
                return "Transaktion.idTransaktion in " + subQuery
            })
            .setParameter("AccountId",AccountId)
        }
}

const addDateFiltering= (
    QueryBuilder:SelectQueryBuilder<Transaktion>,
    TransaktionDateHigh:string|undefined,
    TransaktionDateLow:string|undefined
) =>
{
    if (TransaktionDateLow) {
        QueryBuilder.andWhere("Transaktion.date >= :TransaktionDateLow", { TransaktionDateLow});
    }

    if (TransaktionDateHigh) {
        QueryBuilder.andWhere("Transaktion.date <= :TransaktionDateHigh", {TransaktionDateHigh});
    }
}

const addOrdering= (
    QueryBuilder:SelectQueryBuilder<Transaktion>,
    ordering:string|undefined
) =>
{
    switch(ordering)
    {
        case "amountHigh":
            QueryBuilder.orderBy("Transaktion.amount","DESC")
            break;
        case "amountLow":
            QueryBuilder.orderBy("Transaktion.amount","ASC")
            break;
        case "datelatest":
            QueryBuilder.orderBy("Transaktion.date","DESC")
            break;
        case "datelow":
            QueryBuilder.orderBy("Transaktion.date","ASC")
            break;
        
    }
}

const buildTransaktionQuery = (req:any) =>
{
    //get query params
    const categoryId=req.query.categoryId ? Number(req.query.categoryId) : undefined
    const accountId =req.header.accountId ? Number(req.query.accountId) : undefined
    const TransaktionDateHigh=req.query.TransaktionDateHigh ? String(req.query.TransaktionDateHigh) : undefined
    const TransaktionDateLow= req.query.TransaktionDateLow ? String(req.query.TransaktionDateLow) : undefined
    const TransaktionOrder=req.query.ordering ? String(req.query.ordering) : undefined

    //querybuilder
    const querybuilder= TransaktionRepository.createQueryBuilder("Transaktion")
    .leftJoinAndSelect("Transaktion.accountIdAccount2", "account")
    .leftJoinAndSelect("Transaktion.categoryIdCategory2", "category");

    //filtering functions
    addCategoryFilter(querybuilder,categoryId)
    addAccountFilter(querybuilder,accountId)
    addDateFiltering(querybuilder,TransaktionDateHigh,TransaktionDateLow)
    addOrdering(querybuilder,TransaktionOrder)
    return querybuilder;
}

export const GetTransaktions= async (req:any)=>
{
    const page= req.query.page ? Number(req.query.page) : 1;
    let pagesize= req.query.pagesize ? Number(req.query.pagesize) : 10;

    if(pagesize>100) {
        pagesize=100;
    }
    const querybuilder= buildTransaktionQuery(req);
    try {
        querybuilder.skip((page-1)*pagesize).take(pagesize);
        const [transaktions,totalcount]= await querybuilder.getManyAndCount();
        return {
            count: totalcount,
            next: totalcount > page * pagesize ? `?page=${page + 1}&pagesize=${pagesize}` : null,
            results: transaktions.map((transaktion) => ({
                ...transaktion,
                accountIdAccount2: transaktion.accountIdAccount2,
                categoryIdCategory2: transaktion.categoryIdCategory2,
            })),
        }}catch(error)
        {
            throw new Error("Failed to get Transaktions.")
        }
};
   

export const GetTransaktion= async (transaktionid:string)=>
{
    try{
        const transakion= await TransaktionRepository.findOne({
            where:{idTransaktion:Number(transaktionid)},
            relations:["accountIdAccount2","categoryIdCategory2"]
        });
        return {
            ...transakion,
            accountIdAccount2:transakion.accountIdAccount2,
            categoryIdCategory2:transakion.categoryIdCategory2
        };
    } catch(error)
    {
        throw new Error(`Transaktion with ID ${transaktionid} not found`)
    }
};

export const deleteTransaktionById = async (TransaktionId: number) => {
  try {
    await TransaktionRepository.delete(TransaktionId);
  } catch (error) {
    throw new Error(`Failed to delete game with ID ${TransaktionId}.`);
  }
};


export const createTransaktion = async (TransaktionData: Partial<Transaktion>) => {
  const Transaktion = TransaktionRepository.create(TransaktionData);
  return await TransaktionRepository.save(Transaktion);
};

export const updateTransaktion = async (
  TransaktionId: number,
  TransaktionData: Partial<Transaktion>
) => {
  await TransaktionRepository.update(TransaktionId, TransaktionData);
  const updatedBudget = await TransaktionRepository.findOneBy({ idTransaktion: TransaktionId });
    if (!updatedBudget) { }
    return updatedBudget;
};



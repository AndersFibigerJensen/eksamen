import { useNavigate, useParams } from "react-router";
import BudgetForm from "../../Components/Forms/BudgetForm"
import UseBudget from "../../hooks/getbyhook/budgethook";
import useUpdateBudget from "../../hooks/update/updateBudgethook";
import { UseAuth } from "../../hooks/useAuth";
import { useEffect } from "react";




const EditBudget = () => {
    const { id } = useParams();
    const {data} = UseBudget(Number(id))
    const {user,isAuthenticated} = UseAuth()
    const {mutate} = useUpdateBudget()
    const navigate =useNavigate();
    useEffect(()=>{
        if(!isAuthenticated) {
            navigate("/")
        }
    })
    return (
        <BudgetForm initialValues={{
            amount:data?.amount,
            budgetDate:data?.budgetDate,
            categoryIdCategory:data?.categoryIdCategory,
            CategoryIdCategory2:data?.CategoryIdCategory2,
            userIdUser:user.id,
            userIdUser2:user
        }}
        onSubmit={(values)=>mutate(values)}
        />
    )
    
}

export default EditBudget
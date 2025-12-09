import { useNavigate } from "react-router"
import BudgetForm from "../../Components/Forms/BudgetForm"
import useCreateBudget from "../../hooks/post/createBudgethook"
import { UseAuth } from "../../hooks/useAuth"
import { useEffect } from "react"



const PostBudget = () => {
    const {user,isAuthenticated} = UseAuth()
    const {mutate}= useCreateBudget()
    const navigate =useNavigate();
    useEffect(()=>{
        if(!isAuthenticated) {
            navigate("/")
        }
    })
    return (
        <BudgetForm initialValues={{
            amount:0,
            budgetDate:"",
            categoryIdCategory:0,
            userIdUser:user.id,
            userIdUser2:user
        }}
        onSubmit={(values)=>mutate(values)}/>
    )
}

export default PostBudget
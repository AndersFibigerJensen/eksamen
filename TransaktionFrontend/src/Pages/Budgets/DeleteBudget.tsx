import { useNavigate, useParams } from "react-router";
import BudgetForm from "../../Components/Forms/BudgetForm";
import UseBudget from "../../hooks/getbyhook/budgethook";
import { UseAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import useDeleteBudget from "../../hooks/deletehook/budgethook";



const DeleteBudget = () => {
    const { id } = useParams();
    const {data,isLoading,isError} = UseBudget(Number(id))
    const {isAuthenticated} = UseAuth()
    const {mutate} = useDeleteBudget()
    const navigate =useNavigate();
    useEffect(()=>{
        if(!isAuthenticated) {
            navigate("/")
        }
    })

            // show loading until data exists
    if (isLoading) return <p>Loading...</p>;

    // optional: handle query error
    if (isError || !data) return <p>Transaction not found.</p>;
        if (!id) {
        navigate("/");
        return null;
    }
    return (
        <BudgetForm initialValues={{
            budgetid:data?.idBudget,
            amount:data?.amount,
            budgetDate:data?.budgetDate,
            categoryIdCategory:data?.categoryIdCategory,
            CategoryIdCategory2:data?.CategoryIdCategory2,
            userIdUser:data.userIdUser,
            userIdUser2:data.UserIdUser2
        }}
        onSubmit={values=>mutate(values)}
        />
    )
    
}

export default DeleteBudget
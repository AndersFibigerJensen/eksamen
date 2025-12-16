import { useEffect } from "react"
import GoalForm from "../../Components/Forms/GoalForm"
import useCreateGoal from "../../hooks/post/createGoalhook"
import { UseAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"


const CreateGoal = () => {
    const {user,isAuthenticated}= UseAuth();
    const {mutate} =useCreateGoal();
    const navigate =useNavigate();
    useEffect(()=>{
        if(!isAuthenticated) {
            navigate("/")
        }
    })
    return (
        <GoalForm initialValues={{
            id:0,
            name:"",
            currentamount:0,
            targetamount:0,
            status:"in progress",
            userIdUser:user.id
        }} onSubmit={(values)=>mutate(values)}/>
    )

}

export default CreateGoal
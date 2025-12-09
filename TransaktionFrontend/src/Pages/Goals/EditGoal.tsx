import { useNavigate, useParams } from "react-router"
import GoalForm from "../../Components/Forms/GoalForm"
import UseGoal from "../../hooks/getbyhook/goalhook"
import useUpdateGoal from "../../hooks/update/updateGoalhook"
import { UseAuth } from "../../hooks/useAuth"
import { useEffect } from "react"


const EditGoal = () => {
    const {id}= useParams()
    const {data,isLoading,isError}=UseGoal(Number(id))
    const {user,isAuthenticated}= UseAuth()
    const {mutate} = useUpdateGoal()
    const navigate =useNavigate();
    useEffect(()=>{
        if(!isAuthenticated) {
            navigate("/")
        }
    })
    if (isLoading) return <p>Loading...</p>;
    if (isError || !data) return <p>Goal not found.</p>;
    return (
        <GoalForm initialValues={{
            id:data.idGoal,
            name:data.name,
            currentamount:data.currentAmount,
            targetamount:data.targetAmount,
            status:data.status,
            userIdUser:user.id
        }}
        onSubmit={(values)=>mutate(values)}/>
    )

}

export default EditGoal
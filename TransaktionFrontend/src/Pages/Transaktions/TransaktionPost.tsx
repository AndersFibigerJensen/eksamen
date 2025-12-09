import { useNavigate } from "react-router";
import TransaktionForm from "../../Components/Forms/TransaktionForm"
import { useEffect } from "react";
import { UseAuth } from "../../hooks/useAuth";
import useCreateTransaktion from "../../hooks/post/createTransactionHook";




const TransaktionPost = () => {
    const {isAuthenticated}=UseAuth()
    const {mutate} = useCreateTransaktion();
    const navigate =useNavigate();
    useEffect(()=>{
        if(!isAuthenticated) {
            navigate("/")
        }
    })

    return (
        <TransaktionForm initialValues={{
            transaktionid:0,
            amount:0,
            date:"0",
            description:"",
            type:"income",
            accountIdAccount:0,
            categoryIdCategory:0,
            
        }} onSubmit={(values)=>mutate(values)}>

        </TransaktionForm>

    )
}

export default TransaktionPost
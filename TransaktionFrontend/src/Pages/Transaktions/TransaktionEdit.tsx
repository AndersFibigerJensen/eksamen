import { useNavigate, useParams } from "react-router"
import TransaktionForm from "../../Components/Forms/TransaktionForm"
import useTransaktion from "../../hooks/getbyhook/transaktionhook"
import useUpdateTransaktion from "../../hooks/update/updateTransaction"
import { UseAuth } from "../../hooks/useAuth"
import { useEffect } from "react"



const TransaktionEdit = () => {
    const {isAuthenticated}=UseAuth()
    const {id}= useParams()
    const {data,isLoading,isError}= useTransaktion(Number(id))
    const {mutate} = useUpdateTransaktion()
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
        <TransaktionForm initialValues={{
            transaktionid:data.idTransaktion,
            amount:data.amount,
            date:data?.date,
            description:data?.description,
            accountIdAccount:data?.accountIdAccount,
            categoryIdCategory:data?.categoryIdCategory2.idCategory,
            type:"income"
        }}
        onSubmit={(values) => mutate(values) }/>
    )
}

export default TransaktionEdit
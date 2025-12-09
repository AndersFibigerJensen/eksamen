import { useNavigate, useParams } from "react-router-dom"
import TransaktionForm from "../../Components/Forms/TransaktionForm"
import { UseAuth } from "../../hooks/useAuth"
import { useEffect } from "react"
import useDeleteTransaktion from "../../hooks/deletehook/transaktionhook"
import useTransaktion from "../../hooks/getbyhook/transaktionhook"


const TransaktionDelete = () => {
    const {id}= useParams()
    const {data,isLoading,isError}= useTransaktion(Number(id))
    const {isAuthenticated}=UseAuth()
    const {mutate} = useDeleteTransaktion()
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
            date:data.date,
            description:data?.description,
            accountIdAccount:data.accountIdAccount,
            categoryIdCategory:data.categoryIdCategory2.idCategory,
            type:data.type
        }}
        onSubmit={(values) =>
            mutate(values)
        }/>
    )
}

export default TransaktionDelete
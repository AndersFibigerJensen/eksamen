import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Layout from "./Pages/Layout";
import TransaktionList from "./Pages/TransaktionList";
import LoginPage from "./Pages/User/LoginPage";
import AccountPage from "./Pages/AccountPage";
import RegisterPage from "./Pages/User/RegisterPage";
import GoalPage from "./Pages/GoalPage";
import TransaktionEdit from "./Pages/Transaktions/TransaktionDelete";
import CreateGoal from "./Pages/Goals/CreateGoal";
import EditGoal from "./Pages/Goals/EditGoal";
import TransaktionDelete from "./Pages/Transaktions/TransaktionDelete";
import TransaktionPost from "./Pages/Transaktions/TransaktionPost";
import DeleteGoal from "./Pages/Goals/DeleteGoal";
import EditBudget from "./Pages/Budgets/EditBudget";
import PostBudget from "./Pages/Budgets/PostBudget";
import BudgetList from "./Components/BudgetList";
import DeleteBudget from "./Pages/Budgets/DeleteBudget";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {path: "/", element: <LoginPage/> },
            {path: "/transaktion", element: <TransaktionList/> },
            {path: "/AccountPage", element: <AccountPage/> },
            {path: "/register", element: <RegisterPage/>},
            {path: "/goals", element:<GoalPage/>},
            {path: "/budget", element:<BudgetList/>},
            {path: "/TransaktionEdit/:id", element:<TransaktionEdit/>},
            {path: "/TransaktionDelete/:id", element:<TransaktionDelete/>},
            {path: "/TransaktionPost", element:<TransaktionPost/>},
            {path: "/CreateGoal",element:<CreateGoal/>},
            {path: "/EditGoal/:id",element:<EditGoal/>},
            {path: "/DeleteGoal/:id",element:<DeleteGoal/>},
            {path: "/EditBudget/:id",element:<EditBudget/>},
            {path: "/DeleteBudget/:id",element:<DeleteBudget/>},
            {path: "/PostBudget",element:<PostBudget/>}

        ],
    }
 ]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage"; 
import { CreditsPage } from "./pages/CreditsPage";
import { LoginPage, } from "./pages/LoginPage";
import {  RequestPage } from "./pages/RequestPage";
import { Layout } from "./layout";
import { FormFillingPage } from "./pages/FormFillingPage";
import { CreditPaymentModul } from "./pages/CreditPaymentModul";
const router = createBrowserRouter([
   { path: "/",
    element: <Layout />,
    children:[
        {
            path : "/",
            element : <WelcomePage/>
        },
        {
            path : "/credit-payment-modul",
            element : <CreditPaymentModul/>
        },
        {
            path : "/form-filling-page",
            element : <FormFillingPage/>
        },
        {
            path : "/credits-page",
            element : <CreditsPage/>
        },
        {
            path : "/login-page",
            element : <LoginPage/>
        },
        {
            path : "/request-page",
            element : <RequestPage/>
        },

    ]
   }
])
export {router}
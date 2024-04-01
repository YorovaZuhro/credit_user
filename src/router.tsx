import { createBrowserRouter } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage"; 
import { CreditsPage } from "./pages/CreditsPage";
import { LoginPage, } from "./pages/LoginPage";
import { Layout } from "./layout";
import { FormFillingPage } from "./pages/FormFillingPage";
const router = createBrowserRouter([
   { path: "/",
    element: <Layout />,
    children:[
        {
            path : "/",
            element : <WelcomePage/>
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


    ]
   }
])
export {router}
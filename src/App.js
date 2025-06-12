import './App.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import FilterPage from './pages/FilterPage';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import VerifyPage from "./pages/VerifyPage";
import HomePage from "./pages/HomePage";
import Filter2page from './pages/Filter2Page';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/verify",
        element: <VerifyPage/>,
    },
    {
        path: "/home",
        element: <HomePage/>,
    },
    {
        path: "/filter",
        element: <FilterPage/>,
    },
    {
        path: "/filter2",
        element: <Filter2page/>
    }
]);

function App() {
    return (
        <div className="max-w-[390px] mx-auto">
           <RouterProvider router={router} />
           {/*<LoginPage />*/}
           {/* <VerifyPage/>*/}
           {/* <MainPage/> */}
           {/* <HomePage/> */}
           {/* <FilterPage/> */}
           {/* <Filter2page/> */}



        </div>
    );
}

export default App;

import './App.css';
<<<<<<< HEAD
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import FilterPage from './pages/FilterPage';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import VerifyPage from "./pages/VerifyPage";
import HomePage from "./pages/HomePage";

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
]);
=======
import Filter2page from './pages/Filter2Page';
// import HomePage from './pages/HomePage';
// import MainPage from "./pages/MainPage";
// import FilterPage from './pages/FilterPage';
>>>>>>> div

function App() {
    return (
        <div className="max-w-[390px] mx-auto">
<<<<<<< HEAD
            <RouterProvider router={router}/>
=======
            {/*<LoginPage />*/}
           {/* <VerifyPage/>*/}
           {/* <MainPage/> */}
           {/* <HomePage/> */}
           {/* <FilterPage/> */}
           <Filter2page/>


>>>>>>> div
        </div>
    );
}

export default App;

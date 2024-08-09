import { RouterProvider, createBrowserRouter } from "react-router-dom"
import  HomePage from "../pages/HomePage"
import  ProductListPage from "../pages/ProductListPage"
import ProductViewPage from "../pages/ProductViewPage"

const router = createBrowserRouter ([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/product",
        element: <ProductViewPage/>
    },
    {
        path: "/productlist",
        element: <ProductListPage/>
    },


]); 

export const RoutesApp = () => {
    return <RouterProvider router={router} />;
  };

//OBS: export defalt sem as chaves

// export antes da função, usar chaves.
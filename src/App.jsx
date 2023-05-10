import Root from "./routes/root";
import ErrorPage from "./error-page";
import Empanada from "./routes/Empanada";
import Pizza from "./routes/Pizza";
import Bocadito from "./routes/Bocadito";
import Principal from "./routes/Principal";

import {
  createBrowserRouter,
  RouterProvider,  
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",        
        element: <Principal />,
        
      },
      {
        path: "/empanada",
        element: <Empanada />,
      },
      {
        path: "/pizza",
        element: <Pizza />,
      },
      {
        path: "/bocadito",
        element: <Bocadito />,
      }
    ] 
  },
  
]);



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

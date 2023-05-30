import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home, {loader as homeloader} from "./pages/Home"
import HomeDetail from "./components/HomeDetail";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
  
  export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={homeloader} />
          <Route path="/product/:id" component={HomeDetail} />
          <Route path="login" element={ <LogIn />} />
          <Route path="kontakt" element={ <ContactUs />} />
          <Route path="register" element={ <Register />} />
          
          <Route path="*" element={ <NotFound /> } />
      </Route>
    )
  );
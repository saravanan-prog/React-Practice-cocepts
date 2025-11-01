import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/home/HomePage";
import { AboutPage } from "../Pages/about/AboutPage";
import { BlogPage } from "../Pages/blogs/BlogPage";
import { ContactPage } from "../Pages/contact/ContactPage";
import { NoPagefound } from "../core/components/NoPagefound/NoPagefound";
import { ProductListing } from "../Pages/productListing/ProductListing";
import { ViewProduct } from "../Pages/productListing/viewProduct/ViewProrduct";

export function RouterOutlet() {
  return (
    <div >
     
        
        <Routes>
           {/* Default Page - setting - start */}
            <Route 
                index 
                element={<HomePage />} 
            />
            <Route 
                path="/" 
                element={<HomePage />} 
            />

             <Route 
                path = "home"
                element = {<HomePage />}
            />
            {/* Default Page - setting -  end*/}
            <Route 
                path = "about"
                element = {<AboutPage />}
            />

            <Route 
                path = "blog"
                element = {< BlogPage />}
            />

            <Route 
                path = "contact"
                element = {< ContactPage />}
            />

            <Route 
                path = "*"
                element = {< NoPagefound />}
            />

            <Route 
                path="products"
                element = {<ProductListing />}
            />

            
            <Route 
                path="viewProduct"
                element = {<ViewProduct />}
            />

            <Route 
                path="viewProduct/:id"
                element = {<ViewProduct />}
            />

             <Route 
                path="viewProduct/:id/:name"
                element = {<ViewProduct />}
            />



        </Routes>
      
    </div>
  );
}

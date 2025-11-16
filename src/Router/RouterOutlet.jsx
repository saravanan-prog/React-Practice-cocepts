import { React } from "react";
import { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";
import  ProtectRoute  from "./ProtectRoute";

const HomePage = lazy(() => import("../Pages/home/HomePage"));
const AboutPage = lazy(() => import("../Pages/about/AboutPage"));
const BlogPage = lazy(() => import("../Pages/blogs/BlogPage"));
const ContactPage = lazy(() => import("../Pages/contact/ContactPage"));
const ProductListing = lazy(() =>
  import("../Pages/productListing/ProductListing")
);
const ViewProduct = lazy(() => import("../Pages/viewProduct/ViewProrduct"));
const NoPagefound = lazy(() =>
  import("../core/components/NoPagefound/NoPagefound")
);
const LoginPage = lazy(()=>import("../Pages/login/LoginPage"))
const DashboardPage = lazy(() => import("../Pages/dashboard/DashboardPage"));

export function RouterOutlet() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NoPagefound />} />
          <Route path="products" element={<ProductListing />} />
          <Route path="viewProduct" element={<ViewProduct />} />
          <Route path="viewProduct/:id" element={<ViewProduct />} />
          <Route path="viewProduct/:id/:name" element={<ViewProduct />} />
          <Route path="login" element={<LoginPage/>}/>
          <Route
            path="dashboard"
            element={
              <ProtectRoute>
                <DashboardPage />
              </ProtectRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

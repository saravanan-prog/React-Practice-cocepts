import { useState,useEffect,Fragment } from "react";
import { getallProdcuts } from "./actions/prodcutlist_action";
import { ProductShow } from "./components/ProductsShow";

export default function ProductListing(){

     const [products, setProducts] = useState();
      
    
      useEffect(() => {
        getallProdcuts(setProducts);
      }, []);
    
      return (
        <div>
          <div className="heading">
            <h1 class="text-center text-secondary"> Our Products</h1>
          </div>
    
          <div className="mx-5 product-Listing d-flex flex-wrap gap-5 mt-5" >
          
            {products &&
              products.length != 0 &&
              products.map((value, index) => {
                const { id, image, category, price, title } = value;
    
                return (
                  <Fragment key={index} >
                   
                    <ProductShow 
                        id = {id}
                        image = {image}
                        category = {category}
                        price = {price}
                        title = {title}
                    />
                  </Fragment>
                );
              })}
          </div>
        </div>
      );
}
import { Fragment, useEffect, useState } from "react";
import { getallProdcuts } from "./prodcutlist_action";

export function ProductListing() {
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
            const { image, category, price, title } = value;

            return (
              <Fragment key={index} >
                <div className="card " style={{width:"18rem"}}>
                  
                  <div className="card-header">
                     <div className="card-image">
                        <img src={image}
                             className="img-fluid card-img-top" 
                             
                              style={{height: "200px",objectFit: "cover"}}
                        />
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="title">
                      <p className="h2">{title.substring(0,5)}</p>
                    </div>
                    <div className="card-text">
                      <p>{category}</p>
                      <p> Rs. {price}</p>
                     
                    </div>
                  </div>
                  <div className="card-footer">
                         <button className="btn btn-primary ms-4">Buy Now</button>
                  </div>
                </div>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}

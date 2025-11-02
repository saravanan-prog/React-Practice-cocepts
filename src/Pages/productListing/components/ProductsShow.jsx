import { Link } from "react-router-dom";

export function ProductShow(
    {   
        id,
        title,
        image,
        category,
        price

    }
){

    return <div>
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
                        
                         {/* <Link to = { `/viewProduct/${id}` } >View Product</Link> */}
                         <Link to = { `/viewProduct?productId=${id}&productName=${title}` } >View Product</Link>
                         <button className="btn btn-primary ms-5">Buy Now</button>
                  </div>
                </div>
    </div>
}
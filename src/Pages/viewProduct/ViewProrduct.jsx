import { useParams,useLocation } from "react-router-dom"
import {useState,useEffect} from 'react'


export default function ViewProduct(){

     const [productData,setProductData] = useState()
     
     const { search } = useLocation()
     const {id} = useParams();

     if(search) {
          const query = new URLSearchParams(search)
          var productID = query.get("productId")
          console.log("productID=====>",productID)
     }
     else{
                    
          console.log("id=====>",id)
     }



     useEffect(()=>{
         
          let products = JSON.parse(localStorage.getItem('Products'))
          let filterProduct = products.filter( data =>  data.id == productID)
          setProductData(filterProduct[0])

          console.log("filterProduct===>",filterProduct)
         
     },[])

    return <div>
         <div className="heading text-center">
              <span className = "text-secondary">View Full Information</span>
         </div>

         <div className="card d-flex flex-row p-5">
            <div className="card-img">
               <img src = {productData?.image} 
                    className="img-fluid" />
            </div>
            <div className="card-body m-5">
               <section className="p-3"> 
                    <span className="h6 text-primary"> Name :</span> 
                    <span className="text-center">{productData?.title} </span>
               </section> 

                <section className="p-3"> 
                   <span className="h6 text-primary">Description :</span> 
                     <span className="text-center">{productData?.description} </span>
               </section> 
                <section className="p-3"> 
                    <span className="h6 text-primary"> Rating :</span> 
                    <span>{productData?.rating?.rate} </span>
                </section> 
            </div>
         </div>






    </div>
}
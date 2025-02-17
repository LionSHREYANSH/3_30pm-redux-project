import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal , removeItem , increaseItemQuantity , decreaseItemQuantity } from '../features/cartSlice'

const Cartpage = () => {

  const {cart ,totalQuantity , totalPrice }  = useSelector((state)=>(state.allCard))

 const dispatch =  useDispatch()

useEffect(()=>{
    dispatch(getCartTotal())
},[cart])
  



  
  return (
    <div>
    <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - {cart.length} items</h5>
          </div>
          <div className="card-body">
       
       {cart.map((data)=>(

  
                           <div className="row">
                            
                           <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        
                             <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                               <img src={data.img} className="w-100" alt="Blue Jeans Jacket" />
                               <a href="#!">
                                 <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                               </a>
                             </div>
                       
                           </div>
                           <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                       
                             <p><strong>{data.title}</strong></p>
               
                             <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init title="Remove item" >
                               <i className="fas fa-trash" onClick={()=>{dispatch(removeItem(data.id))}} />
                             </button>
                             <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init title="Move to the wish list">
                               <i className="fas fa-heart" />
                             </button>
                 
                           </div>
                           <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          
                             <div className="d-flex mb-4" style={{maxWidth: 300}}>
                               <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 me-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                     
                               >
                                 <i className="fas fa-minus"     
                              onClick={() => {
                                if (data.quantity > 1) {
                                  dispatch(decreaseItemQuantity(data.id));
                                }
                              }} />
                               </button>
                               <div data-mdb-input-init className="form-outline">
                                 <input id="form1" min={0} name="quantity" Value={data.quantity} type="number" className="form-control"  />
                                 <label className="form-label" htmlFor="form1">Quantity</label>
                               </div>
                               <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 ms-2" >
                                 <i className="fas fa-plus"  
                                 onClick={()=>{dispatch(increaseItemQuantity(data.id))}}
                                 />
                               </button>
                             </div>
                        
                             <p className="text-start text-md-center">
                               <strong>${data.price}</strong>
                             </p>
                       
                           </div>
                         </div>
                        
                        
                    ))
         
}


            <hr className="my-4" />
    
            
          </div>
        </div>
      
     
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0" style={{textAlign : "center"}}>Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
            
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total Price</strong>
                 
                </div>
                <span><strong>${ totalPrice}</strong></span>
              </li>

              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total Quantity</strong>
                 
                </div>
                <span><strong>{totalQuantity}</strong></span>
              </li>
            </ul>
            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Cartpage
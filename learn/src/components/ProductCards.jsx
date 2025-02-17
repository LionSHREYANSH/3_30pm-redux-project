import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addtocart } from '../features/cartSlice';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

const ProductCards = () => {

    const [inputtext, setInputtext] = useState(""); 

    const inputhandler = (e) => {
        setInputtext(e.target.value.toLowerCase());
      };
  


    const dispatch = useDispatch()

            const item = useSelector((state)=>(state.allCard.items))
            // console.log(data)
    return (

        <div>
            
        
            <MDBContainer> 
             <input id="search"
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={inputhandler}
        value={inputtext} // Use 'value' instead of 'val'
     
      />
                <MDBRow>
                {item
                  .filter((el) => el.title.toLowerCase().includes(inputtext))
                .map((data , key)=>(
                     <MDBCol size='md-4 mt-2'>
                     <MDBCard>
                         <MDBCardImage src={data.img} style={{ height: "20rem" }} position='top' alt='...' />
                         <MDBCardBody>
                             <MDBCardTitle>{data.title}</MDBCardTitle>
                             <MDBCardTitle>{data.price}</MDBCardTitle>
                             <MDBCardText>
                                 Some quick example text to build on the card title and make up the bulk of the card's content.
                             </MDBCardText>
                             <MDBBtn href='#'onClick={()=>{dispatch(addtocart(data))}}>Add To Cart</MDBBtn>
                         </MDBCardBody>
                     </MDBCard>
                 </MDBCol>
                ))}
                   
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default ProductCards
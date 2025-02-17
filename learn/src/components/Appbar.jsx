// import React from 'react';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBBtn,

// } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// export default function Appbar() {

//   const {cart}  = useSelector((state)=>(state.allCard))
//   console.log(cart)
//   return (
//     <MDBNavbar light bgColor='light' id="nav">
//       <MDBContainer fluid>
//         <MDBNavbarBrand>Navbar</MDBNavbarBrand>
//         <MDBBtn color='primary' rippleColor='dark'>
//         <Link to = "/" style={{color : "white"}}>All Products</Link>
//       </MDBBtn>
//       <MDBBtn color='dark'>
//       <Link to = "/cartpage"  style={{color : "white"}}>Cart({cart.length})</Link>
//       </MDBBtn>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }

// -------------------------------------------------------------

// import React from 'react';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBBtn,

// } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// export default function Navbar() {

//   const {cart}  = useSelector((state)=>(state.allCard))
//   console.log(cart)



//   return (
//     <MDBNavbar light bgColor='light' id="navbar">
//       <MDBContainer fluid>
//         <MDBNavbarBrand>Navbar</MDBNavbarBrand>

//         <MDBBtn color='light' rippleColor='dark'>
//        <Link to="/" > <span style={{color : "black"}}>All Products</span> </Link>
//       </MDBBtn>
//       <MDBBtn color='dark'>

//         <Link to = "/cartpage"><span style={{color : "white"}}>Cart({cart.length})</span> </Link>
//       </MDBBtn>
     
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }

//--------------------------------------------------------------


import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,

} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Appbar() {

  const {cart}  = useSelector((state)=>(state.allCard))



  return (
    <MDBNavbar light bgColor='light' id="navbar">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
      helloo
        <MDBBtn color='light' rippleColor='dark'>
       <Link to="/" > <span style={{color : "black"}}>All Products</span> </Link>
      </MDBBtn>
      <MDBBtn color='dark'>

        <Link to = "/cartpage"><span style={{color : "white"}}>Cart({cart.length})</span> </Link>
      </MDBBtn>
     
      </MDBContainer>
    </MDBNavbar>
  );
}
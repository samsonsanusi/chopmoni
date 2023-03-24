import React from "react"
import { Page, Button, Row, Column } from 'framework7-react'

const VendorLandingPage = () =>{
 <Block strong>
   <Row>
     <Col width='50'>
       <Button fill raised popupOpen='#my-popup'>
         Popup
       </Button>
     </Col>
     <Col width='50'>
       <Button fill raised loginScreenOpen='#my-login-screen'>
         Login Screen
       </Button>
     </Col>
   </Row>
 </Block>
}
export default VendorLandingPage;
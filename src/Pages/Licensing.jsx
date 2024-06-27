import React from 'react';
import license from "../assets/license.jpeg";
import {Container} from "react-bootstrap";

export default function Licensing() {
  return (
    <Container>
        <div className='row px-5 py-5'>
            <img src={license} alt="license" className='' />
        </div>
    </Container>
  )
}

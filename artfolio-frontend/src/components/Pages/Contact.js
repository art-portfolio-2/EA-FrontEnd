import React from 'react';
import styled from 'styled-components'

const ContactDiv = styled.div`
border: 1px solid red;


`
const ContactSection = styled.section`
border: 1px solid red;
display: flex;
flex-direction: row;

`

const Form = styled.div`
border: 1px solid red;
height: 700px;
width: 80%;
`
const Social = styled.div`
border: 1px solid red;
height: 700px;
`
    

const Contact = () => {
    return ( 
        <ContactDiv>
            <h2>Contact</h2>
            <ContactSection>
                <Form></Form>
                <Social></Social>
            </ContactSection>
        </ContactDiv>
     );
}
 
export default Contact;
import React, { useState } from 'react';
import { Button,Form, FormGroup, Input, } from 'reactstrap';

const Contact = () => {

    const [input,setinput]=useState({
        name:"",
        email:"",
        number:"",
        area:""
    })

    const Update=(eve)=>{
        const name = eve.target.name;
        const value = eve.target.value;

        setinput((events)=>{
            return{
                ...events,
                [name]:value
            }
        })
    }

    const Submit = (e)=>{
        e.preventDefault();
        alert(`Thankyou ${input.name}. Form Submitted Successfully!`);
    };
    return (
        <>
        <div className="my-3">
            <h1 className="text-center mb-5">Contact Us</h1>
        </div>
        <div className="contact">
            <Form onSubmit={Submit}>
            <FormGroup className="input">
                    
                    <Input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={Update}
                        id="examplename"
                        placeholder="Name"
                    />
                </FormGroup>
                <FormGroup>
                    
                    <Input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={Update}
                        id="exampleEmail"
                        placeholder="Email"
                    />
                </FormGroup>
                <FormGroup>
                    
                    <Input
                        type="text"
                        name="number"
                        value={input.number}
                        onChange={Update}
                        id="examplenumber"
                        placeholder="Contact"
                    />
                </FormGroup>
                <FormGroup>
                   
                    <Input
                        type="textarea"
                        name="area"
                        value={input.area}
                        onChange={Update}
                        id="examplearea"
                        placeholder="Message"
                    />
                </FormGroup>
                <Button outline color="info">Submit</Button>
                </Form>
                </div>
        </>
    )
}

export default Contact;
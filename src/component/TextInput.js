import React, {useEffect} from "react";
import Form from 'react-bootstrap/Form';

export const TextInput =()=>{
    const useRef = React.useRef();

    useEffect(()=>{
        useRef.current.focus();
    },[])

    return(
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                {/*<Form.Label>Example textarea</Form.Label>*/}
                <Form.Control as="textarea" rows={3} maxlength={1000}/>
            </Form.Group>
        </Form>
    )
}

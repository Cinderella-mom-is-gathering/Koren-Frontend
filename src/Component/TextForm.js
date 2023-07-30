import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";

const TextForm=({content,value,onChange})=> {


    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder={content} value={value} onChange={onChange}/>
            </Form.Group>
        </Form>
    );
}

export default TextForm;
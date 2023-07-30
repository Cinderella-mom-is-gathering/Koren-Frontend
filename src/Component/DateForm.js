import React from "react";
import Form from "react-bootstrap/Form";

const DateForm=({value,onChange})=>{
    return(
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="date" value={value} onChange={onChange}/>
            </Form.Group>
        </Form>

    )
}

export default DateForm;
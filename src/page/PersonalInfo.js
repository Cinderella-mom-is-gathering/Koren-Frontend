import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import Title from "../Component/Title";
import SubTitle from "../Component/SubTitle";
import ItemLabel from "../Component/ItemLabel";
import TextForm from "../Component/TextForm";
import DateForm from "../Component/DateForm";
import SubmitButton from "../Component/SubmitButton";
import AddressSelect from "../Component/AddressSelect";

const Wrapper = styled.div`
margin:20px;
  position: relative;
  
  display: flex;
  flex-direction:column;
`
const PersonalInfoPage=()=> {
    const [name, setName] = useState("")
    const [birth,setBirth]=useState("")
    const onNameChange=(event)=>{
        setName(event.target.value)
    }
    const onBirthChange=(event)=>{
        setBirth(event.target.value)
    }

    return (
        <Wrapper>
            <Title content="나의 정보"/>
            <SubTitle content="서비스에 필요한 정보"/>
            <ItemLabel content="이름"/>
            <TextForm content="홍길동" onChange={onNameChange} value={name}/>
            <ItemLabel content="생년월일"/>
            <DateForm value={birth} onChage={onBirthChange}/>
            <ItemLabel content="거주지"/>
            <AddressSelect/>
            <div style={{flex:1}}></div>
            <SubmitButton content="등록하기"/>

        </Wrapper>
    );
}

export default PersonalInfoPage;
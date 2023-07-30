import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import Title from "../component/Title";
import SubTitle from "../component/SubTitle";
import ItemLabel from "../component/ItemLabel";
import TextForm from "../component/TextForm";
import DateForm from "../component/DateForm";
import SubmitButton from "../component/SubmitButton";
import AddressSelect from "../component/AddressSelect";

const MainWrapper = styled.div`
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
        <div>
        <MainWrapper>
            <Title content="나의 정보"/>
            <SubTitle content="서비스에 필요한 정보"/>
            <ItemLabel content="이름"/>
            <TextForm content="홍길동" onChange={onNameChange} value={name}/>
            <ItemLabel content="생년월일"/>
            <DateForm value={birth} onChage={onBirthChange}/>
            <ItemLabel content="거주지"/>
            <AddressSelect/>

        </MainWrapper>

            <SubmitButton content="등록하기"/>

    </div>
    );
}

export default PersonalInfoPage;
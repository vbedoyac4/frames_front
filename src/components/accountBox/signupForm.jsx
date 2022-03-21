import React, { useContext } from "react";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common"
import { Marginer} from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props){

    const {switchToLogin} =useContext(AccountContext);

    return(
        <BoxContainer>
            <FormContainer>
                <Input type= "text" placeholder="Nombre"></Input>
                <Input type= "text" placeholder="User"></Input>
                <Input type= "password" placeholder="Password"></Input>
                <Marginer direction= "vertical" margin={15}/>
                <SubmitButton type="submit">Crear</SubmitButton>
                <Marginer direction= "vertical" margin={15}/>
                <MutedLink href="#" onClick={switchToLogin}>Login</MutedLink>
            </FormContainer>
          </BoxContainer>   
    ); 
}
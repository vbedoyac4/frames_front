import React, { useContext } from "react";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common"
import { Marginer} from "../marginer"
import { AccountContext } from "./accountContext";

export function LoginForm(props){

    const {switchToSignup} =useContext(AccountContext);

    return(
        <BoxContainer>
            <FormContainer>
                <Input type= "text" placeholder="User"></Input>
                <Input type= "password" placeholder="Password"></Input>
                <Marginer direction= "vertical" margin={15}/>
                <MutedLink type="submit">Olvide mi contraseña</MutedLink>
                <SubmitButton type="submit">Ingresar</SubmitButton>
                <Marginer direction= "vertical" margin={15}/>
                <MutedLink href="#" onClick={switchToSignup}>Crear Usuario</MutedLink>
            </FormContainer>
          </BoxContainer>    
    );
}
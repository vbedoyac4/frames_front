import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -75px;
    margin-left: -27px;`;

export const FormContainer = styled.form`
    width: 80%;
    border-left: 25px;
    display: flex;
    flex-direction: column;
    `;
    
export const MutedLink = styled.a`
    font-size: 12px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none; `;

export const BoldLink = styled.a`
    font-size: 12px;
    color: rgb(2, 99, 176);//azul oscuro
    font-weight: 500;
    text-decoration: none; 
    margin: 0 4px;`;

export const Input = styled.input`
    width: 90%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.3);//gris
    //border-bottom: 1.4px solid transparent;
    padding: 0px 10px;
    font-size: 12px;
    transition: all 200ms ease-in-out ;

    &::placeholder{
        color: rgb(2, 99, 176);//azul oscuro
    }

    &:not(:last-of-type){
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }

    &:focus{
        outline: none;
        border-bottom: 2px solid rgb(2, 99, 176);
    }`;

export const SubmitButton = styled.button`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(5,120,210);
    background: linear-gradient(58deg, rgba(5,120,210,1) 26%, rgba(2,69,121,1) 100%);
    
    &:hover{
        filter: brightness(1.03);
    }`;


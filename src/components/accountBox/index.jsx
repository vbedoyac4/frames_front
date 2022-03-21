import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
width: 280px;
min-height: 550px;
display: flex;
flex-direction: column;
border-radius: 19px;
background-color: #fff;
box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
`;

const TopContainer = styled.div`
width: 100%;
height: 250px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0 1.8em;
padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
width: 160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
transform: rotate(60deg);
top: -290px;
left: -70px;
background: rgb(5,120,210);
background: linear-gradient(58deg, rgba(5,120,210,1) 26%, rgba(2,69,121,1) 100%);

`;

const HeaderContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const HeaderText = styled.h2`
font-size: 30px;
font-weight: 600;
line-height: 6.24;
color: #fff;
z-index: 10;
margin: 0;
`;

const InnerContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 0 1.8em;
`;

const backdropVariants = {
expanded: {
width: "233%",
height: "1050px",
borderRadius: "20%",
transform: "rotate(60deg)",
},
collapsed: {
width: "160%",
height: "550px",
borderRadius: "50%",
transform: "rotate(60deg)",
},
};

const expandingTransition = {
type: "spring",
duration: 2.3,
stiffness: 30,
};

export function AccountBox(props) {
const [isExpanded, setExpanded] = useState(false);
const [active, setActive] = useState("login");

const playExpandingAnimation = () => {
setExpanded(true);
setTimeout(() => {
  setExpanded(false);
}, expandingTransition.duration * 1000 - 1500);
};

const switchToSignup = () => {
playExpandingAnimation();
setTimeout(() => {
  setActive("signup");
}, 400);
};

const switchToLogin = () => {
playExpandingAnimation();
setTimeout(() => {
  setActive("login");
}, 400);
};

const contextValue = { switchToSignup, switchToLogin };

return (
<AccountContext.Provider value={contextValue}>
  <BoxContainer>
    <TopContainer>
      <BackDrop
        initial={false}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={backdropVariants}
        transition={expandingTransition}
      />
      {active === "login" && (
        <HeaderContainer>
          <HeaderText>Bienvenido!</HeaderText>
        </HeaderContainer>
      )}
      {active === "signup" && (
        <HeaderContainer>
          <HeaderText>Crear Usuario</HeaderText>
        </HeaderContainer>
      )}
    </TopContainer>
    <InnerContainer>
      {active === "login" && <LoginForm />}
      {active === "signup" && <SignupForm />}
    </InnerContainer>
  </BoxContainer>
</AccountContext.Provider>
);
}


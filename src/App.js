import './App.css';
import styled from "styled-components";
import { AccountBox } from './components/accountBox';

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


function App(props) {
  if (props.loading) {

    return null;
  }
return <AppContainer>
    <AccountBox/>
  </AppContainer>
  
}

export default App;

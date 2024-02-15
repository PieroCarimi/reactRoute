import { useContext } from "react";
import { AppContext } from "../Context";
import styled from "styled-components";

const ButtonAndTextareaContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '50px',
    marginTop: '50px',
    flexDirection: 'column',
});

const LoginButton = styled.button({
    padding: '4px 20px',
    textAlign: 'center',
    fontSize: '16px',
    transitionDuration: '0.4s',
    cursor: 'pointer',
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid black',

    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
    }
    });

export function Button(){
    const { isLogged, handleLoginClick } = useContext(AppContext);

    return (
        <ButtonAndTextareaContainer>
    <LoginButton onClick={handleLoginClick}>
        {isLogged ? "Logout" : "Login"}
    </LoginButton>
    </ButtonAndTextareaContainer>
    )
}
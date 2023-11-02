import styled from 'styled-components'

import background from '../../assets/background.svg'
import loginback from '../../assets/login-back.svg'

export const Container = styled.div`
  display: flex;
  width: 99vw;
  height: 97vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

export const BackgroundLogin = styled.div`
  display: flex;
  background-image: url(${loginback});
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 526px;
  height: 90%;
  border-radius: 10px 0 0 10px;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: 90%;
  background-color: #373737;
  border-radius: 0 10px 10px 0;
  padding: 25px 75px;

  img {
    width: 70%;
  }

  h1 {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-top: 70px;
  }
`

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  margin-top: 28px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  width: 390px;
  height: 38px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;

  a {
    color: #fff;
    cursor: pointer;
  }
`

export const ErrorMessage = styled.p`
  color: #cc1717;
  font-size: 14px;
  font-weight: 400;
  margin-top: 2px;
`

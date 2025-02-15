'use client'

import { useState } from 'react';
import styled from 'styled-components';
import CinemaIcon from 'assets/cinema.svg'
import Link from 'next/link';

const SignInWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 340px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const SignInBox = styled.div`
  width: 100%;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const WelcomeText = styled.h3`
  font-size: 25px;
  color: black;
  margin: 12px;
  align-self: center;
`

const LoginInput = styled.input`
  width: 85%;
  padding: 5px;
  height: 30px;
  border-radius: 8px;
  border-style: none;
  margin: 10px 15px;
  outline: none;
  background-color: black;
  font-size: 15px;
`

const LoginInputLabel = styled.label`
  color: black;
  margin-left: 20px;
  font-size: 15px;
  
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const SignInButton = styled.button`
  width: 85%;
  margin: 10px 15px;
  height: 35px;
  background-color: #238636;
  outline: none;
  border: none;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    background-color: #389c4b
  }
`

const RegisterWrapper = styled.div`
  border: 1px solid #1e3c72;
  width: 85%;
  height: 55px;
  margin: 10px 15px;
  text-align: center;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 8px;
`

const RegisterText = styled.div`
  color: black;
`

const Login = () => {

  return (
    <SignInWrapper>
      <CinemaIcon />
      <SignInBox>
        <WelcomeText>Sign in to Flixnote</WelcomeText>
        <InputWrapper>
          <LoginInputLabel htmlFor='username'>Username</LoginInputLabel>
          <LoginInput type='text' id='username' />
          <LoginInputLabel htmlFor='password'>Password</LoginInputLabel>
          <LoginInput type='password' id='password' />
          <Link href='/'>
            <SignInButton>Sign in</SignInButton>
          </Link>
        </InputWrapper>
        <RegisterWrapper>
          <RegisterText>New to Flixnote? <Link style={{color:'blue'}} href='/'>Create an account</Link></RegisterText>
        </RegisterWrapper>
      </SignInBox>
    </SignInWrapper>
  );
};

export default Login;


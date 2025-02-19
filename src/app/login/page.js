'use client'

import { useState } from 'react';
import Background from '@components/Background'
import ContentWrapper from '@components/ContentWrapper';
import Login from '@components/Login';
import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const LoginPage = () => {

  return (
    <Background>
      <LoginContainer>
        <Login />
      </LoginContainer>
    </Background>
  );
};

export default LoginPage;


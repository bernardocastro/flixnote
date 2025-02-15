'use client'

import { useState } from 'react';
import Background from '@components/Background'
import ContentWrapper from '@components/ContentWrapper';
import Login from '@components/Login';

const LoginPage = () => {

  return (
    <Background>
      <ContentWrapper>
        <Login />
      </ContentWrapper>
    </Background>
  );
};

export default LoginPage;


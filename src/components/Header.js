// components/Header.js
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: #fff;
    width: 100%;
`;

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-right: 25px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 15px;
`;

const SignInButton = styled.button`
    padding: 10px 20px;
    background-color: #238636;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #389c4b;
    }
`;

const RegisterButton = styled.button`
    padding: 10px 20px;
    background-color: #2a5298;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const SearchBar = styled.input`
    padding: 7px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 250px;
    font-size: 16px;
    margin-right: 10px;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const  GroupItem = styled.p`
    color: white;
    margin: 0 10px 0 10px;
    font-weight: bold;
`

const Header = ({ fillSearchWordState }) => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Link href='/'><Logo>Flixnote</Logo></Link>
                <Link href='/topRated'><GroupItem>Top rated</GroupItem></Link>
                <GroupItem>|</GroupItem>
                <Link href='/upcoming'><GroupItem>Upcoming</GroupItem></Link>
            </LogoContainer>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <SearchBar onChange={(e) => fillSearchWordState(e.target.value)} type="text" placeholder="Search..." />
                <ButtonContainer>
                    <Link href='/login'><SignInButton>Sign In</SignInButton></Link>
                    <RegisterButton>Create Account</RegisterButton>
                </ButtonContainer>
            </div>
        </HeaderContainer>
    );
};

export default Header;

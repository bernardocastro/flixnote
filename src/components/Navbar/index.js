'use client'

import styled, { keyframes, css } from "styled-components";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import NavItem from "@components/NavItem";
import MenuIcon from '@mui/icons-material/Menu';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 3%;
    background-color: #13131d;
    box-shadow: 0px 15px 16px -7px rgba(0, 0, 0, 0.1);
`
const NavItemsList = styled.ul`
    display: flex;
    gap: 32px;
    align-items: center;
    list-style: none;

    @media (max-width: 765px) {
        display: none;   
    }
`

const LoginBtn = styled.button`
    background-color: green;
    border: none;
    width: 70px;
    height: 26px;
    border-radius: 4px;

    @media (max-width: 765px) {
        display: none;   
    }
`

const MobileMenuContainer = styled.div`
    text-align: center;
    position: absolute;
    top: 15%;
    left: 15%;
    background-color: #13131d;
    width: 315px;
    height: 315px;
    z-index: 50;
    transition: width 2s, height 2s;

    @media (min-width: 765px) {
        display: none;   
    }
`

const rotate = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(90deg);
    }
`;

const rotateBack = keyframes`
    0% {
    transform: rotate(90deg);
    }
    100% {
    transform: rotate(0deg);
    }
`;

const MobileMenuIcon = styled.button`
  background: none;
  border: none;
  
  ${(props) =>
        props.isRotated
            ? css`
            animation: ${rotate} 0.2s forwards;
        `
            : css`
            animation: ${rotateBack} 0.2s forwards;
        `
    }

  @media (min-width: 765px) {
    display: none;
  }
`;

const MobileMenu = styled.ul`
    position: relative;
    list-style: none;

    @media (min-width: 765px) {
        display: none;   
    }
`
const MobileMenuItem = styled.li`
    padding: 35px;
    text-decoration: underline;
    text-underline-position: under;

    @media (min-width: 765px) {
        display: none;   
    }
`

export default function Navbar() {
    const items = [
        {
            url: '/',
            label: 'Home'
        },
        {
            url: '/topRated',
            label: 'Top rated'
        },
        {
            url: '/upcoming',
            label: 'Upcoming'
        },
    ]

    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState(false);

    const [isRotated, setIsRotated] = useState(false);

    const handleMenuIconClick = () => {
        setIsRotated(!isRotated);
        setOpenMenu(!openMenu);
    };

    return (
        <header style={{ width: '100%' }}>
            <Nav className="navbar">
                <Link href="/">
                    <h1>Flixnote</h1>
                </Link>

                <NavItemsList>
                    {items.map((item, index) => (
                        <NavItem
                            key={index}
                            url={item.url}
                            label={item.label}
                            isActive={pathname === item.url}
                        />
                    ))}
                </NavItemsList>

                <div>
                    <MobileMenuIcon $isRotated={isRotated} onClick={handleMenuIconClick}>
                        <MenuIcon />
                    </MobileMenuIcon>

                    {
                        openMenu &&
                        <MobileMenuContainer>
                            <MobileMenu>
                                {items.map((item, index) => (
                                    <MobileMenuItem key={index}>
                                        <Link href={item.url}>
                                            {item.label}
                                        </Link>
                                    </MobileMenuItem>
                                ))}
                            </MobileMenu>
                        </MobileMenuContainer>
                    }

                    <Link href='/login'>
                        <LoginBtn>
                            Sign in
                        </LoginBtn>
                    </Link>
                </div>
            </Nav>
        </header>
    );
}
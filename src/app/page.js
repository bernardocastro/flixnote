'use client'

import styled from "styled-components"
import Link from 'next/link'
import Background from "../components/Background"
import ContentWrapper from "../components/ContentWrapper"
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import useEmblaCarousel from 'embla-carousel-react'

const SignInButton = styled.button`
    width: 80px;
    background-color: #0a55ab;
    padding: 5px;
    align-items: center;
    color: white;
    height: 30px;
    border-radius: 5px;
    border-style: none;
    border-color: #0a55ab;
    margin: 15px;
    &:hover {
    cursor: pointer;
    background-color: #3d83d4
    }
`
const CardsWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto auto auto ;
`

export default function Home() {

    const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjFkZjkyNGY3NzE2ZTg3OWI2YWFiNDdlYzkxYWUzMiIsIm5iZiI6MTY2MzcxNTg5OS4xMDgsInN1YiI6IjYzMmE0YTNiZWY5ZDcyMDA5MjE5NzZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sou27BKy_0tGNGM9bJbs0bcIZ-R37IApCkA51r2EljE'

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${TMDB_TOKEN}`
                }
            });
            const data = await response.json()
            setMovies(data.results)
        }

        fetchMovies();
    }, [])
    
    return (
        <Background>
            <ContentWrapper>
                <CardsWrapper>
                    {
                        movies.map((movie, index) => (
                            <MovieCard key={index} title={movie.original_title} poster={movie.poster_path} />
                        ))
                    }
                    <Link href="/login">
                        <SignInButton>
                            Sign in
                        </SignInButton>
                    </Link>
                </CardsWrapper>
            </ContentWrapper>
        </Background>
    )
}

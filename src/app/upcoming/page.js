'use client'

import ContentWrapper from "@components/ContentWrapper"
import MovieCard from "@components/MovieCard"
import Navbar from "@components/Navbar"
import { CircularProgress } from "@mui/material"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { fetchTMDB } from "@utils/apiService";
import Link from "next/link"

const CardsWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto auto auto ;
    justify-content: center;

    @media (max-width: 900px) {
        grid-template-columns: auto auto ;  
        grid-gap: 5px;
        justify-content: center;
    }

    @media (max-width: 595px) {
        grid-template-columns: auto ;  
        grid-gap: 5px;
        justify-content: center;
    }
`

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MovieGroup = styled.h2`
    color: white
`

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export default function Upcoming() {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchTMDB('/movie/upcoming')
        .then(setMovies, setIsLoading(false));
    }, [])

    return (
        <PageContent>
            <Navbar />
            <ContentWrapper>
                <MovieGroup>Upcoming |</MovieGroup>
                <CardsWrapper>
                    {
                        movies && movies.map((movie) => {                        
                            return (
                                <Link key={movie.id} href={`/details/${movie.id}`}>
                                    <MovieCard title={movie.title} poster={movie.poster_path} />
                                </Link>
                            )
                        })
                    }
                    {
                        isLoading &&
                        <LoadingContainer>
                            <CircularProgress size="80px" color="inherit" />
                        </LoadingContainer>
                    }
                </CardsWrapper>
            </ContentWrapper>
        </PageContent>
    )
}

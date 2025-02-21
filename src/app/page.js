'use client'

import Background from "@components/Background"
import ContentWrapper from "@components/ContentWrapper"
import MovieCard from "@components/MovieCard"
import Header from "@components/Header"
import NotFoundMessage from "@components/NotFoundMessage"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { fetchTMDB } from "@utils/apiService";
import Link from "next/link"

const CardsWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto auto auto ;
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

export default function Home() {

    const [movies, setMovies] = useState([])
    const [searchWord, setSearchWord] = useState('');

    useEffect(() => {
        fetchTMDB('/movie/popular')
            .then(setMovies);
    }, [])

    function fillSearchWordState(word) {
        setSearchWord(word);
    }

    return (
        <Background>
            <PageContent>
                <Header fillSearchWordState={fillSearchWordState} />
                <ContentWrapper>
                    <MovieGroup>Top Rated |</MovieGroup>
                    <CardsWrapper>
                        {
                            movies && movies.map((movie) => {
                                if (searchWord && !movie.title.toLowerCase().includes(searchWord)) {
                                    return null;
                                }

                                return (
                                    <Link key={movie.id} href={`/details/${movie.id}`}>
                                        <MovieCard title={movie.title} poster={movie.poster_path} />
                                    </Link>
                                )
                            })
                        }
                    </CardsWrapper>
                    {!(movies.some((movie) => movie.title.toLowerCase().includes(searchWord))) && <NotFoundMessage>Sorry, we couldn't find what you are looking for.</NotFoundMessage>}
                </ContentWrapper>
            </PageContent>
        </Background>
    )
}

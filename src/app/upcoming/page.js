'use client'

import Background from "@components/Background"
import ContentWrapper from "@components/ContentWrapper"
import MovieCard from "@components/MovieCard"
import Header from "@components/Header"
import NotFoundMessage from "@components/NotFoundMessage"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { fetchMovies } from "@utils/apiService";

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

export default function Upcoming() {

    const [movies, setMovies] = useState([])
    const [searchWord, setSearchWord] = useState('');

    useEffect(() => {
        fetchMovies('/movie/upcoming')
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
                    <MovieGroup>Upcoming |</MovieGroup>
                    <CardsWrapper>
                        {
                            movies && movies.map((movie, index) => {

                                return (
                                    searchWord ? (movie.title.toLowerCase().includes(searchWord) ? <MovieCard key={index} title={movie.title} poster={movie.poster_path} /> : null) :
                                        movie.title.includes(searchWord) ? <MovieCard key={index} title={movie.title} poster={movie.poster_path} /> : null
                                )
                            })

                        }
                    </CardsWrapper>
                    { !(movies.some((movie)=> movie.title.toLowerCase().includes(searchWord))) && <NotFoundMessage>Sorry, we couldn't find what you are looking for.</NotFoundMessage> }
                </ContentWrapper>
            </PageContent>
        </Background>
    )
}

'use client'

import { useParams } from 'next/navigation'
import Background from '@components/Background';
import { useState, useEffect } from 'react';
import { fetchTMDB } from '@utils/apiService';
import styled from 'styled-components';
import { NEXT_PUBLIC_TMDB_IMG_URL } from '@utils/config';
import Header from '@components/Header';

const ContentContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 2fr;
    max-width: 1200px; /* Definindo um limite de largura */
    margin: 0 auto; /* Centraliza horizontalmente */
    padding: 0 20px; /* Adiciona algum espaçamento nas laterais em telas grandes */

    @media (max-width: 975px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;   
    }
`

const Poster = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

const PosterContainer = styled.div`
    width: 400px;
    margin: 40px 20px;
`

const DescritiveTextContainer = styled.div`
    margin: 40px 40px 40px 0;

    @media (max-width: 975px) {
        margin: 30px 30px 30px 30px;
        text-align: center;
    }
`

const MovieDetails = () => {
    const { movieId } = useParams();

    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        fetchTMDB(`/movie/${movieId}`)
            .then(setMovieDetails);
    }, [])

    console.log(movieDetails)

    return (
        <Background>
            <Header />
            <ContentContainer>
                <PosterContainer>
                    <Poster src={NEXT_PUBLIC_TMDB_IMG_URL + movieDetails.poster_path} />
                </PosterContainer>
                <DescritiveTextContainer>
                    <h1>{movieDetails.original_title}</h1>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', padding: '25px 15px 15px 0', fontFamily: 'monospace' }}>
                        {movieDetails.tagline}
                    </p>
                    <p style={{ fontSize: '20px', fontWeight: 'lighter', padding: '10px 15px 15px 0', fontFamily: 'monospace' }}>{movieDetails.overview}</p>
                </DescritiveTextContainer>
            </ContentContainer>
        </Background>
    );
};

export default MovieDetails;
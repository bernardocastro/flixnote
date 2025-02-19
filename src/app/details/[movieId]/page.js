'use client'

import { useParams } from 'next/navigation'
import Background from '@components/Background';

const MovieDetails = () => {
    const { movieId } = useParams();

    return (
        <Background>
            <div>
                <h1>Detalhes do Filme com o ID: {movieId}</h1>
            </div>
        </Background>
    );
};

export default MovieDetails;
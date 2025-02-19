'use client'

import { useSearchParams } from 'next/navigation'

const MovieDetails = () => {
    const movieId = useSearchParams();

    return (
        <div>
            <h1>Detalhes do Filme com o ID: {movieId}</h1>
        </div>
    );
};

export default MovieDetails;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import {
    FaArrowRight,
    FaStar,
    FaTrophy
} from 'react-icons/fa6';

const AnimeCatalog = ({ searchTerm }) => {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

            setLoading(true);
            axios.get(`https://api.jikan.moe/v4/anime?q=${searchTerm}`)
                .then(response => {
                    setAnimes(response.data.data);
                    setLoading(false);
                })
                .catch(err => {
                    setError(err);
                    setLoading(false);
                });
        
    }, [searchTerm]);

    if (loading) return <Loading />;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='wrapper'>
            <h1 className='font-bold text-3xl my-5'>Animes:</h1>
            <ul className='grid grid-cols-4 gap-5'>
                {animes.map((anime) => (
                    <li key={anime.mal_id}>
                        <div className="w-10/12 p-3 shadow-md rounded">
                            <div className='w-full h-80'>
                                <img className='w-full h-full object-cover rounded' src={anime.images.jpg.image_url} alt={anime.title} />
                            </div>
                            <h2 className='text-nowrap text-ellipsis overflow-hidden font-bold my-2'>{anime.title}</h2>
                            <p>Episodes: {anime.episodes}</p>
                            <a href={anime.url} className='flex items-center rounded gap-2 bg-violet-400 p-2'>
                                Ver no MAL <FaArrowRight />
                            </a>
                            <p className='flex items-center gap-1 mt-2'><FaStar /> <span className="translate-y-px">{anime.score}</span> {anime.score >= 7 && <FaTrophy />} </p>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnimeCatalog;

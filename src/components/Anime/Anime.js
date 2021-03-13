import React, {useEffect, useState} from 'react';

const animeId = 'https://api.jikan.moe/v3/anime/';

const Anime = ({match}) => {

    const [anime, setAnime] = useState(null)

    useEffect(() => {
        const id = match.params.anime;
		// const url = `${animeUrl}
		fetch(animeId + id)
			.then((res) => res.json())
			.then((res) => {
                setAnime(res)
			})
			.catch((err) => {
				console.log(err);
			});
	}, );
    if(anime == null){
        return null
    }
	return (
		<div className='animedetail'>
			<h1 className='anime'>{anime.title}</h1>
			<h2>
				Rank:
				{anime.rank}
				<br></br>
				Rating:
				{anime.rating}
			</h2>
			<div className='anime'>
				<img src={anime.image_url} alt='' className='anime' />
				<h2>Synopsis:</h2>
				<div className='synopsis'>{anime.synopsis}</div>
			</div>
		</div>
	);
};

export default Anime;

// Anime Detail

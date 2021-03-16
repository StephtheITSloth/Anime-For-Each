import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Animes.css'

const animeUrl = 'https://api.jikan.moe/v3/top/anime';

const Animes = () => {
	const [anime, setAnime] = useState([]);

	useEffect(() => {
		// const url = `${animeUrl}
		fetch(animeUrl)
			.then((res) => res.json())
			.then((res) => {
				let newAnime = res.top;
				setAnime(newAnime);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className='main'>
			<h1>List of Animes</h1>
			<section className='grid'>
				{anime.map((item) => {
					return (
						<div className='grid1'>
							<Link to={`/animes/${item.mal_id}`}>
								<h3 className='item'>{item.title}</h3>
							</Link>
							<img src={item.image_url} alt='anime' />
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default Animes;

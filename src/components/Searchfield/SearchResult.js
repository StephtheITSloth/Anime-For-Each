import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Animes.css'


const SearchResult = () => {
    const [animes, setAnimes] = useState([]);
    
    const [searchTerm, setSearchTerm] = useState('')
    
	const getResult = (event)=> {
        
        const animeUrl = `https://api.jikan.moe/v3/search/anime?q=${searchTerm}&page=1`;

        event.preventDefault()
            fetch(animeUrl)
			.then((res) => res.json())
			.then((res) => {
               setAnimes(res.results)
			})
			.catch((err) => {
				console.log(err);
			});
    }
		// const url = `${animeUrl}
		
	

	return (
		<div className='main'>
			<h1>List of Animes</h1>
			<div>
				<form onSubmit={getResult}>
					<label forHTML='input'>Search here!</label>
					<input type='text' required onChange={(event)=>setSearchTerm(event.target.value)}/>
					<button type='submit'>Submit</button>
				</form>
			</div>
			<section className='grid'>
				{animes.map((item) => {
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

export default SearchResult;

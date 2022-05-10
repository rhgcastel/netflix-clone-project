import React, { useEffect, useState } from 'react';
import './App.css';
import {getHomeList, getMovieInfo} from '../../Tmdb';
import MovieRow from '../MovieRow/MovieRow'
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie';
import Header from '../Header/Header';

function App() {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);
    
    useEffect(() => {
        //Fetching the whole list
        const loadAll = async () => {
            let list = await getHomeList();
            setMovieList(list)


            //Fetching the "Trending now" category to use it on the featured section
            let originals = list.filter(i => i.slug === 'originals');
            let randomMovie = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomMovie];
            let chosenInfo = await getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }

        loadAll();
    }, [])

    useEffect(() => {
        //The header becomes black when the page is scrolled down
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, [])

    return (
        <div className='page'>

            <Header black={blackHeader} />

            {featuredData &&
                <FeaturedMovie item={featuredData} />
            }

            <section className='lists'>
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>

            <footer style={{margin: 50, textAlign: 'center'}}>
                - Data fetched from themoviedb.org -
            </footer>


            {movieList.length <= 0 &&
                <div className='loading'>
                    <img src='https://pa1.narvii.com/7724/02d6be6c9b9ca850006adc3fa77d9e4088c9c959r1-2000-1000_hq.gif' alt='Loading'></img>
                </div>
            }
        </div>
    );
}

export default App;
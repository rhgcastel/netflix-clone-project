import React from 'react';
import './FeaturedMovie.css';

function FeaturedMovie({ item }) {

    let firstDate = new Date(item.first_air_date);

    //The description text becomes limited to 200 characters
    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200) + '...';
    }

    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}`
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{item.original_name}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{item.vote_average} points</div>
                        <div className='featured--year'>{firstDate.getFullYear()}</div>
                        <div className='featured--seasons'>{item.number_of_seasons} season{item.number_of_seasons !== 1 ? 's' : ''} </div>
                        <div className='featured--description'>{description}</div>
                        <div className='featured--buttons'>
                            <a href={`/watch/${item.id}`} className='featured--playbutton'>▶ Play</a>
                            <a href={`/list/add/${item.id}`} className='featured--moreinfobutton'>ⓘ More Info</a>                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie;
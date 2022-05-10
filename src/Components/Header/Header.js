import React from 'react';
import './Header.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

function Header({ black }) {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='netflix-logo' />
                </a>
            </div>

            <div className='header--leftside'>
                <div>
                    <strong>Home</strong>
                </div>
                <div>
                    TV Shows
                </div>
                <div>
                    Movies
                </div>
                <div>
                    New & Popular
                </div>
                <div>
                    My List
                </div>
            </div>


            <div className='header--rightside'>
                <div className='header--search'>
                    <SearchIcon style={{ fontSize: 28 }} />
                </div>

                <div className='header--kids'>
                    KIDS
                </div>

                <div className='header--bell'>
                    <NotificationsIcon style={{ fontSize: 28 }} />
                </div>

                <div className='header--user'>
                    <a href='/'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar' />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
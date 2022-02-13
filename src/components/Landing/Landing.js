import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MenuItem, Menu } from '@mui/material'; 
import { HiMenuAlt3 } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

import './Landing.css'

import landingImg from '../../assets/png/landingImg.png'
import review from '../../assets/png/review.png'
import dish1 from '../../assets/png/dish1.png'
import dish2 from '../../assets/png/dish2.png'
import dish3 from '../../assets/png/dish3.png'
import dish4 from '../../assets/png/dish4.png'


const dishes = [
    {
        id: 1,
        name: 'Pappardelle',
        caption: 'With Vegetable',
        image: dish1,
        price: '35.00'
    },
    {
        id: 2,
        name: 'Pappardelle',
        caption: 'With Vegetable',
        image: dish2,
        price: '35.00'
    },
    {
        id: 3,
        name: 'Pappardelle',
        caption: 'With Vegetable',
        image: dish3,
        price: '35.00'
    },
    {
        id: 4,
        name: 'Pappardelle',
        caption: 'With Vegetable',
        image: dish4,
        price: '35.00'
    },
]

function Landing() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    let navigate = useNavigate()

    const goToReview = () => {
        navigate('/reviews')
    }

    
    return (
        <div className='landing'>
            <div className='landing__nav'>
                <h1>F<span className='tertiary'>oo</span>dtopia</h1>

                <div className='landing__nav_btns'>
                    <Link to='/login'>
                        <button className='login_btn'>Login</button>
                    </Link>
                    <Link to='/register'>
                        <button className='menu_btn'>Register</button>
                    </Link>
                </div>
                <div className='mob__nav_btns'>
                    <HiMenuAlt3 onClick={handleClick} size={30} color='#D96098'/>
                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    disableScrollLock={true}
                    PaperProps={{  
                        style: {  
                            width: 250, 
                            height: 300,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },  
                    }} 
                >
                    <MenuItem style={{marginBottom: '1rem'}}>
                        <Link to='/login'>
                            <button className='navmenu_btn login_btn'>Login</button>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/register'>
                            <button className='navmenu_btn menu_btn'>Register</button>
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
            <div className='landing__container'>
                <div className='landing__containerLeft'>
                    <h1>it's not just a Food, it's an Experience.</h1>

                    <div className='landing_btns'>
                        <Link to='/menu'>
                            <button className='menu_btn'>View Menu</button>
                        </Link>
                        <Link to='/book'>
                            <button className='about_btn'>About</button>
                        </Link>
                    </div>
                    <div className='landing__review'>
                        <h3>Reviews</h3>
                        <img onClick={goToReview} src={review} alt='' />
                        <div className='landing__stars'>
                            <AiFillStar color='#ffcc00' size={20}/>
                            <AiFillStar color='#ffcc00' size={20}/>
                            <AiFillStar color='#ffcc00' size={20}/>
                            <AiFillStar color='#ffcc00' size={20}/>
                            <AiFillStar color='#ffcc00' size={20}/>
                        </div>
                    </div>
                </div>
                <div className='landing__containerRight'>
                    <img src={landingImg} alt="" />
                </div>
            </div>
            <div className='landing__cards'>
                {dishes.map((dish) => (
                    <div key={dish.id} className='landing__food_card'>
                        <img src={dish.image} alt="" />
                        <div className='lfc__content'>
                            <h2>{dish.name}</h2>
                            <p>{dish.caption}</p>

                            <h6>${dish.price}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Landing
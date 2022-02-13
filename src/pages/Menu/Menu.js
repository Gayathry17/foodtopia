import React from 'react'
import { IoArrowBackOutline, IoCartOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';

import './Menu.css'
import MenuCard from './MenuCard'

import burger from '../../assets/png/menu/burger.png'
import hotdog from '../../assets/png/menu/hotdog.png'
import pizza from '../../assets/png/menu/pizza.png'
import pepsi from '../../assets/png/menu/pepsi.png'
import sandwich from '../../assets/png/menu/sandwich.png'
import sushi from '../../assets/png/menu/sushi.png'



const menuItems = [
  {
    id: 1,
    name: 'Chicken Burger',
    desc: 'Bread crumbs and milk keep these chicken burgers unbelievably moist and flavourful. Try them at your next barbeque!',
    price: '99',
    image: burger
  },
  {
    id: 2,
    name: 'Hotdog',
    desc: '1/4 lb. all-beef hot dog topped with shredded lettuce, crispy bacon, bleu cheese crumbles and drizzled with ranch dressing.',
    price: '79',
    image: hotdog
  },
  {
    id: 3,
    name: 'Pizza',
    desc: 'San Marzano tomato sauce, fresh mozzarella, grated parmesan and Italian sausage from Il Mondo Vecchio',
    price: '150',
    image: pizza
  },
  {
    id: 4,
    name: 'Pepsi',
    desc: 'Refreshing soda drink',
    price: '30',
    image: pepsi
  },
  {
    id: 5,
    name: 'Sandwich',
    desc: 'Give mince a makeover with this American-inspired favourite. Known as a ‘loose meat’ sandwich, this saucy, savoury filling can be adapted to your tastes',
    price: '99',
    image: sandwich
  },
    {
    id: 6,
    name: 'Sushi',
    desc: 'This traditional Japanese dish will leave wanting more',
    price: '199',
    image: sushi
  },
]

function Menu() {
  return (
    <div className='menu'>
      <Link to='/'>
        <IoArrowBackOutline className='menu_back'/>
      </Link>
      <Link to='/cart'>
        <IoCartOutline className='cart-icon'/>
      </Link>
      <div className='menu_header'>
        <h1>Our Menu</h1>
      </div>
      <div className='menu_container'>
        {menuItems.map((menu) => (
          <MenuCard 
            id={menu.id}
            key={menu.id}
            name={menu.name}
            desc={menu.desc}
            price={menu.price}
            image={menu.image}
          />
        ))}
      </div>
    </div>
  )
} 

export default Menu

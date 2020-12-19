import React from 'react';
import { ReactComponent as LogoPlaceholder } from '../images/logo-placeholder.svg';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='flex-initial w-full bg-blue-700'>
      <nav className='w-full flex lg:flex-row flex-col justify-center items-center'>
        <div
          id='shop-nav'
          className='flex-1 flex flex-row justify-end space-x-6'
        >
          <NavLink
            className='w-auto px-6 py-2 flex items-center justify-center rounded-md hover:bg-blue-500 text-white'
            activeClassName='bg-blue-500'
            exact
            to='/stores'
          >
            Stores
          </NavLink>
          <NavLink
            className='w-auto px-6 py-2 flex items-center justify-center rounded-md hover:bg-blue-500 text-white'
            activeClassName='bg-blue-500'
            exact
            to='/menu'
          >
            Menu
          </NavLink>
          <NavLink
            className='w-auto px-6 py-2 flex items-center justify-center rounded-md hover:bg-blue-500 text-white'
            activeClassName='bg-blue-500'
            exact
            to='/order'
          >
            Place an Order
          </NavLink>
          <NavLink
            className='w-auto px-6 py-2 flex items-center justify-center rounded-md hover:bg-blue-500 text-white'
            activeClassName='bg-blue-500'
            exact
            to='/'
          >
            Data
          </NavLink>
        </div>
        <div id='logo-nav' className='flex justify-center flex-initial w-32'>
          <NavLink to='/' exact>
            <LogoPlaceholder className='h-20 w-20' />
          </NavLink>
        </div>
        <div
          id='class-nav'
          className='flex-1 flex flex-row justify-start space-x-6'
        >
          <NavLink
            className='w-auto px-6 py-2 flex items-center justify-center rounded-md hover:bg-blue-500 text-white'
            activeClassName='bg-blue-500'
            exact
            to='/'
          >
            Class Weeks
          </NavLink>
          <NavLink
            className='w-auto px-6 py-2 flex items-center justify-center rounded-md hover:bg-blue-500 text-white'
            activeClassName='bg-blue-500'
            exact
            to='/'
          >
            Data Visualization Concepts
          </NavLink>
          <NavLink
            className='w-auto px-6 py-2 flex items-center justify-center rounded-md hover:bg-blue-500 text-white'
            activeClassName='bg-blue-500'
            exact
            to='/'
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

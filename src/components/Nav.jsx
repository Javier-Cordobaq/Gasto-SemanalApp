import React from 'react';
import Home from '../Media/home.svg'
import List from '../Media/list.svg'
import Form from '../Media/form.svg'
import { Link } from 'react-router-dom';
import '../Styles/Nav.css'

const Nav = () => {

  return (
  <div className='cont-nav'>
    <Link to='/'>
        <div className='home'>
                <img className='img' src={Home} height='30px' alt="Not Found"/>
                <span className='tooltip'>Home</span>
        </div>
    </Link> 
    <div className='home'>
        <Link to='/App'>
            <img className='img' src={Form} height='30px' alt="Not Found"/>
            <span className='tooltip'>Gastos</span>
        </Link> 
    </div>
    <div className='home'>
        <Link to='/list'>
            <img className='img' src={List} height='30px' alt="Not Found"/>
            <span className='tooltip'>Listado diario</span>
        </Link> 
    </div>
  </div>
  );
};

export default Nav;

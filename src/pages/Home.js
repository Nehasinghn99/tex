import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';

function Home() {
  return (
    <div>
     <Navbar/>
     <Announcement/>
     <Slider/>
     <Categories/>
    </div>
  )
}

export default Home

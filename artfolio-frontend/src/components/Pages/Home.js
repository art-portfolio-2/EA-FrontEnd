import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src:
      'https://parryspizza.com/wp-content/uploads/ParrysPizza-Food38-800x200.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
  },
  {
    src:
      'https://parryspizza.com/wp-content/uploads/Parrys-Pizza-calzone-800x200.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
  },
  {
    src:
      'https://uucolumbia.net/wp-content/uploads/2017/06/ananas-fresh-table-picjumbo-com-800x200.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
  },
  {
    src:
      'https://www.fairfieldunitedchurch.com/wp-content/uploads/2018/06/southwest-turkey-tacos-800x200.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4',
    header: 'Slide 4 Header',
  },
];

const Home = () => {
  return (
    <div className='homeContainer' >
      <UncontrolledCarousel className='homeCarousel' items={items} />

      <h1>Home</h1>
    </div>
  );
};

export default Home;

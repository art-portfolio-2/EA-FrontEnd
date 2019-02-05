import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src:
      'https://parryspizza.com/wp-content/uploads/ParrysPizza-Food38-800x200.jpg',
    altText: 'Slide 1',

  },
  {
    src:
      'https://parryspizza.com/wp-content/uploads/Parrys-Pizza-calzone-800x200.jpg',
    altText: 'Slide 2',

  },
  {
    src:
      'https://uucolumbia.net/wp-content/uploads/2017/06/ananas-fresh-table-picjumbo-com-800x200.jpg',
    altText: 'Slide 3',

  },
  {
    src:
      'https://www.fairfieldunitedchurch.com/wp-content/uploads/2018/06/southwest-turkey-tacos-800x200.jpg',
    altText: 'Slide 4',

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

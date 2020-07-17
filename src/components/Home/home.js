import React from 'react';
import NewsSlider from '../Widgets/Slider/slider'
import NewsList from '../Widgets/NewsList/newsList'

const Home = () => {
  return (
    <div>
      <NewsSlider
        type='articles'
        start={0}
        amount={3}
        settings={{}}
      />
      <NewsList
        type='card'
        loadMore={true}
        start={3}
        amount={3}
      />
    </div>
  );
};

export default Home;

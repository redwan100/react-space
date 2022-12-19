import React from 'react'
import Item from '../shared/Item'
import imgUrl from '../assets/space5.jpg'
import SectionTitle from '../shared/SectionTitle'
const desc = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis perspiciatis laudantium voluptatem nostrum porro odit at quos deserunt, animi optio saepe nisi aperiam voluptatum quam consectetur, doloribus, tempora minima?'
const Planets = () => {
  return (
    <div className="planet p-5 space-y-8" id="planets">
      <SectionTitle title="history of exploration" />
      <Item desc={desc} imgUrl={imgUrl} />
    </div>
  );
}

export default Planets
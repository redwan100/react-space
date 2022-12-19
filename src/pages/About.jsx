import React from 'react'
import Slider from '../components/Slider';
import Item from '../shared/Item';
import SectionTitle from '../shared/SectionTitle'
import imgUrl from '../assets/space6.jpg'
const desc =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis tenetur neque non voluptatum dolore ducimus saepe, nesciunt repellendus veniam nisi.";

const About = () => {
  return (
    <div className="about" id='about'>
      <div className=" container px-5 mx-auto py-[3rem] text-white space-y-8">
        <SectionTitle title='history of exploration'/>
        <Item desc={desc} imgUrl={ imgUrl} />

        <div className="p-5 mt-5">
          <div className=' my-[2rem] text-center max-w-[500px] mx-auto space-y-3'>

            <SectionTitle title="explorers of space" />
            <p className='text-gray-300 text-xs md:text-sm'>{desc}</p>
          </div>
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default About
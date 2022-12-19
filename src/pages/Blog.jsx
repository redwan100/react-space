import React from 'react'
import ProjectItem from '../components/ProjectItem'
import SectionTitle from '../shared/SectionTitle';
const Project = () => {
  return (
    <div className="blog py-8" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center py-6">
          <SectionTitle title="lates space blog" />
        </div>

        <div className="flex justify-around flex-col sm:flex-row gap-4 ">
          <div className="space-y-8">
            <ProjectItem />
            <ProjectItem />
          </div>

          <div className="blog__img h-[450px] flex flex-col items-start justify-end">
            <div className='relative p-4 max-w-[500px] w-[98%]'>
              <div className="text-white space-y-3 text-left py-4">
                <button className="border-2 border-blue-500 py-1 px-2 bg-blue-500">
                  See More
                </button>
                <h1 className="text-2xl">
                  history of exploration target of exploration
                </h1>
                <p className="text-xs text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto sed quae nobis libero beatae quis natus non a neque
                  facere provident blanditiis deleniti dolores itaque sint eaque
                  pariatur, doloremque ipsum.
                </p>
                <button className="border-2 border-blue-500 px-3 py-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project
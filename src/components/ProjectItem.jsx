import img1 from '../assets/space4.jpg'
const ProjectItem = () => {
  return (
      <div className='flex flex-col sm:flex-row sm:gap-6'>
          <div className='max-w-[300px] w-[97%] h-[330px]'>
              <img src={img1} alt="" />
          </div>
          <div className='text-white space-y-3 max-w-[300px] md:max-w-[400px]'>
              <button className='border-2 border-blue-500 py-1 px-2 bg-blue-500 hover:text-blue-500 hover:bg-transparent rounded duration-300'>See 
              More</button>
              <h1 className='text-2xl'>history of exploration target of exploration</h1>
              <p className='text-xs text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed quae nobis libero beatae quis natus non a neque facere provident blanditiis deleniti dolores itaque sint eaque pariatur, doloremque ipsum.</p>
              <button className='border-2 border-blue-500 px-3 py-2 text-blue-500 rounded'>Learn More</button>
          </div>
    </div>
  )
}

export default ProjectItem
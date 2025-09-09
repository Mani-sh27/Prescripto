import { assets, doctors } from '../assets/assets_frontend/assets';

const Doctors = () => {
  return (
    <div>
      <p className='sm:text-center mt-30'>Top Doctors</p>
      <p className='sm:text-center'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-[850px] gap- grid grid-cols-2  sm:gap-5 sm:grid sm:w-[1240px] mt-10 relative left-32 sm:grid-cols-5'>
        {
          doctors.slice(0,10).map((item,index)=>(
              <div className='rounded-2xl border-blue-200 shadow-sm '>
                <img className='bg-blue-50 rounded-2xl' src={item.image}  />
                <div>
                  <p className='my-3 ms-3'>Available</p>
                  <p className='-mt-3 ms-3 text-md font-semibold'>{item.name}</p>
                  <p className='text-xs ms-3 mb-3 text-gray-500'>{item.speciality}</p>
                </div>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Doctors
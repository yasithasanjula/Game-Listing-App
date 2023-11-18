import GenreList from "../Components/GenreList"

const Home = () => {


  return (
    <>
      <div className='grid grid-cols-4'>
        <div className="bg-red-600 h-full hidden md:block"> 
        <GenreList/>
        </div>
        <div className=' col-span-3 md:col-span-3 bg-blue-400'>Game List</div>
      </div>
    
    
    
    </>
    
  )
}

export default Home
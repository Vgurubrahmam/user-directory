import { useState,useEffect } from 'react'
import { ModeToggle } from "../components/mode-toggle"
import { Button } from '../components/ui/button'
import { userUser } from './UserContext'
import { useNavigate } from 'react-router-dom'
const  Home=()=> {
const [user, setUser] = useState([])
const [search, setSearch] = useState('')
const [loading,setLoading]=useState(false)
const {setUserDetails}=userUser()
const navigate=useNavigate()
const fetchUser=async()=>{
  const response=await fetch('https://jsonplaceholder.typicode.com/users')
  if(!response.ok){
    setLoading(true)
    const message=`An error has occured: ${response.status}`
    throw new Error(message)
  }else{
    const data=await response.json()
    // console.log(data);
    setLoading(false)
    setUser(data)
  }
}
useEffect(()=>{ 
  fetchUser()
},[])
const handleSearchUser=(event)=>{
  setSearch(event.target.value)
  
}
const renderLoader = () => (
  <div className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
  </div>
)
const handleCardDatails=(user)=>{
  setUserDetails(user)
  console.log(user);
  
  navigate("/user-details");
}
const filteredUser=user.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()))
  return (
   <div>
   <div className="flex justify-between items-start h-[10%] py-5 mb-5 px-12 ">

   <img src="https://i.ibb.co/HB94PKs/Screenshot-2025-01-19-114522.png" className="h-16 w-16 rounded-md"/>
    <ModeToggle />
   </div>
   <div className='px-14 pb-5  max-sm:px-6'>

<input type='search' placeholder='Search User' className='p-2 px-4 rounded-lg font-semibold bg-white-700 shadow w-64 text-black hover:bg-gray-200 outline-none max-sm:p-4 max-sm:w-full ' value={search} onChange={handleSearchUser}/>
   </div>

   <div className="flex flex-wrap justify-center items-center gap-4 max-sm:m-6">
        
        {loading ?(
          renderLoader()
        ):(

          filteredUser.map((user) => (
          <div
            key={user.id}
            className="bg-white-200 rounded-2xl shadow-md bg-gray-200
                       w-full sm:w-[48%] md:w-[30%] lg:w-[22%] h-64"
                       
          >
          <div className='flex  flex-col justify-center items-center rounded-2xl rounded-b-none p-2 h-[50%]'>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="h-16 w-16 rounded-full bg-gray"/>
            <h1 className="text-lg font-bold text-gray-700">{user.name}</h1>
          </div>
          <div className='pl-6 h-[50%] rounded-b-2xl gap-y-3'>
            <p className="text-sm font-semibold text-gray-600"><span className='font-bold text-gray-700'>Email :</span> {user.email}</p>
            {/* <p className='font-bold text-gray-700'>Address : </p> */}
            <p className="text-sm text-gray-600 font-semibold "><span className='font-bold text-gray-700'>City : </span>{user.address.city}</p>
            <p className="text-sm text-gray-600 font-semibold "><span className='font-bold text-gray-700'>Street : </span> {user.address.street}</p>

            <div className='flex  justify-end  px-6'>
          <Button className=' bg-gray-700 hover:bg-gray-300 text-white font-bold py-0 px-4 my-3 rounded-full' onClick={()=>handleCardDatails(user)} >View More</Button>
            </div>

          </div>
          </div>
        ))
        )}
      </div>
   <div>
  
   </div>
   </div>
  )
}

export default Home

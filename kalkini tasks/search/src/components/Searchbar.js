import React, { useEffect, useState } from 'react'

const Searchbar = () => {
  const [search,setSearch] = useState("")
  
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    
  },[])

  return (
    <div className='flex-auto'>
    <h1 className='text-center'>Search Anime Characters</h1>
        <input className="m-5 py-5  w-fit"
          type="text" 
          placeholder = "Search Here"
          onChange={handleChange}
          value={search}
          />
    </div>
  )
}

export default Searchbar

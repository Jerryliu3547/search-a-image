import React from 'react'

const SearchBar = ({searchBar, setText}) => {

  return (
    <form onSubmit={searchBar} className='container mx-auto flex flex-col md:flex-row items-center justify-center my-10 gap-y-4 md:gap-x-8'>
        <input
            type="text"
            className='py-3 px-20 shadow-lg border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="search image... " onChange={e => setText(e.target.value)}
        />
        <button
            className='py-3 px-6 border-2 border-black rounded-full bg-black text-white hover:bg-gray-800 transition duration-300' type='submit'
        >
            Search
        </button>
    </form>

  )
}

export default SearchBar

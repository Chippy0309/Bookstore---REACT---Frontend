import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'

const AllBooks = () => {
  const [filterOpen, setFilterOpen] = useState(false)

  const books = [
    {
      id: 1,
      title: 'Becoming Michelle Obama',
      author: 'Michelle Obama',
      price: '₹499',
      img: 'https://bookbins.b-cdn.net/wp-content/uploads/2024/04/Becoming-Michelle-Obama-Buy-Online-Bookbins-1-500x536.jpg',
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: '₹399',
      img: 'https://m.media-amazon.com/images/I/61M6KzUbf7L._UF350,350_QL80_.jpg',
    },
    {
      id: 3,
      title: 'It Ends With Us',
      author: 'Colleen Hoover',
      price: '₹299',
      img: 'https://m.media-amazon.com/images/I/81s0B6NYXML.jpg',
    },
    {
      id: 4,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      price: '₹350',
      img: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg',
    },
  ]

  return (
    <>
      <Header />

      {/* Main Section */}
      <div className="w-full px-4 md:px-10 py-8 bg-gray-100">
        
        {/* Collections Heading */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Collections
        </h2>

        {/* Content Wrapper */}
        <div className="md:grid md:grid-cols-[1fr_4fr] gap-8 w-full max-w-7xl mx-auto">
          
          {/* Filters Section */}
          <div className="bg-white p-5 rounded shadow">
            
            {/* Mobile Toggle */}
            <div
              className="md:hidden flex justify-between items-center cursor-pointer"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <h1 className="text-xl font-medium">Filters</h1>
              <span className="text-lg">{filterOpen ? '▲' : '▼'}</span>
            </div>

            {/* Filters Content */}
            <div className={`${filterOpen ? 'block' : 'hidden'} md:block mt-4`}>
              <h1 className="text-2xl font-medium mb-5 hidden md:block">Filters</h1>
              <div className="space-y-4 mb-6 md:mb-0">
                {[
                  { id: 'Literature', label: 'Literary Fiction' },
                  { id: 'Philosophy', label: 'Philosophy' },
                  { id: 'Romance', label: 'Romance' },
                  { id: 'AutoBiography', label: 'Autobiography' },
                  { id: 'SelfHelp', label: 'Self Help' },
                  { id: 'Politics', label: 'Politics' },
                  { id: 'Horror', label: 'Horror' },
                ].map((filter) => (
                  <div key={filter.id} className="flex items-center">
                    <input 
                      type="radio" 
                      id={filter.id} 
                      name="filter" 
                      className="cursor-pointer"
                    />
                    <label htmlFor={filter.id} className="ml-3 cursor-pointer">
                      {filter.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Books Section */}
          <div>
            {/* Search Bar */}
            <div className="flex justify-center items-center mt-4 mb-8">
              <input 
                type="text" 
                placeholder="Search By Title" 
                className="border border-gray-300 placeholder-gray-400 p-2 w-1/3 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <button className="bg-blue-900 text-white py-2 px-4 ml-3 rounded shadow hover:bg-blue-700">
                Search
              </button>
            </div>

            {/* Books Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col"
                >
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">by {book.author}</p>
                    <div className="mt-auto">
                      <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                        Buy {book.price}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default AllBooks

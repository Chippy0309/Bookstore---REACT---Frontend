import React from 'react';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick'; // ✅ For testimonials carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Home = () => {
  // Sample book data with prices
  const newArrivals = [
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
  ];

  // Featured Author
  const featuredAuthor = {
    name: 'J.K. Rowling',
    about:
      'J.K. Rowling is the author of the much-loved Harry Potter series. Her magical storytelling has inspired millions worldwide and redefined modern fantasy literature. With her unique characters and world-building, she has created a timeless treasure for readers of all ages.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg',
  };

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Ananya Sharma',
      text: 'This bookstore is my happy place! The collection is amazing and prices are so reasonable.',
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      id: 2,
      name: 'Rohan Mehta',
      text: 'I found my favorite books here. The delivery was fast and the quality exceeded my expectations.',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 3,
      name: 'Priya Verma',
      text: 'Such a wonderful experience! The New Arrivals section is always fresh and exciting.',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 4,
      name: 'Aman Gupta',
      text: 'I bought books for my family and they absolutely loved them. Highly recommend this store!',
      img: 'https://randomuser.me/api/portraits/men/41.jpg',
    },
  ];

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <header
        id="main"
        className="flex-grow flex justify-center items-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white"
      >
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Wonderful Gifts
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
            Give your family and friends the timeless treasure of a book.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center">
            <div className="flex w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Search Books"
                className="flex-grow p-2 text-gray-700 placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-yellow-400 px-4 flex items-center justify-center hover:bg-yellow-500 transition">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-blue-800"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* New Arrivals Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-center mb-4 text-gray-800">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {newArrivals.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600">by {book.author}</p>
                  <p className="text-md font-bold text-blue-900 mt-2">
                    {book.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Explore Now Button */}
          <div className="flex justify-center mt-10">
            <Link to={'/all-Books'}>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition">
              EXPLORE NOW
            </button></Link>
          </div>
        </div>
      </section>

      {/* Featured Author Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* About Author */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Featured Author
            </h2>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              {featuredAuthor.name}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {featuredAuthor.about}
            </p>
          </div>

          {/* Author Image */}
          <div>
            <img
              src={featuredAuthor.img}
              alt={featuredAuthor.name}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-center mb-8 text-gray-800">
            What Our Readers Say
          </h2>

          <Slider {...sliderSettings}>
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-xl shadow-md mx-3 text-center"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 italic mb-3">“{t.text}”</p>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

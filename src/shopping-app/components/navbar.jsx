
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass, ShoppingCart, User, List, X } from "phosphor-react";
import { useSelector } from 'react-redux';



const Navbar = ({PRODUCTS}) => {
  const quantity = useSelector(state => state.cart.totalQuantity)
  
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [isOpen, setIsOpen] = useState(false) ;
   

 const toggleNavbar = () =>{
  setIsOpen(!isOpen);
 };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [emptyInput, setEmptyInput] = useState(false);
  const [noResults, setNoResults] = useState(false);
   const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      alert('Please input something.');
    setNoResults(false)
    }
     else {
    setEmptyInput(false);
      const filteredProducts = PRODUCTS.filter(product =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filteredProducts.length === 0) {
        setSearchResults(['No items match your search.']);
        setNoResults(true);
        
      } else {
        setSearchResults(filteredProducts);
        setNoResults(false)
        setSearching(true)
      }
    }
  };
  const handleInputChange = (e) =>{
    setSearchTerm(e.target.value);
     const filteredProducts = PRODUCTS.filter(product =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredProducts)
      setSearching(true)
       if (searchTerm.trim() === '') {
        setSearchResults([])}
  };
     const clear =() => {
        setSearchTerm("")
        setSearchResults([])
        setSearching(false)
        setNoResults(false)
        setEmptyInput(false)
     };
  return (
    <nav className="bg-blue-700 fixed top-0 w-full flex justify-between items-center h-20 z-20">
      {/* Left side links */}
         <div className=" my-element  ">
        <button onClick={toggleNavbar} className="text-white hover:text-gray-300  lg:hidden sm:ml-2 md:hidden"><List size={28} /></button>
       </div>
        {isOpen && (
      <div className="lg:hidden ">
        
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
 
  <div class="items-center mt-80 -mb-6 ml-4 absolute left-0 justify-between gap-5 w-full flex order-1 ">
    <ul class="flex flex-col p-4 md:p-0 font-medium -ml-4 -mt-9 bg-gray-50 md:flex-row md:space-x-16 md:mt-0  md:bg-white dark:bg-gray-800 md:dark:bg-gray-900  ">
         <li>
        <Link to="/" href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 focus:text-blue-500" aria-current="page">Home</Link>
      </li>
        <li>
        <Link to="/shop" href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 focus:text-blue-500" aria-current="page">Shop</Link>
      </li>
     
      <li>
        <Link to="/about" href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 focus:text-blue-500" aria-current="page">About</Link>
      </li>
      <li>
         <Link to="/contact" href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 focus:text-blue-500" aria-current="page">Services</Link>
      </li>
      <li>
        <Link to="/contact" href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 focus:text-blue-500" aria-current="page">Contact</Link>
      </li>
       
    </ul>
  </div>
  </div>

      
      </div>
    )}
       
      <div className="hidden md:flex">
         <ul className="flex flex-col ml-8 p-2 sm:mt-64 md:p-0 sm:p-0 order-1 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row sm:flex-row md:space-x-8 sm:space-x-4 md:mt-0  md:border-0 md:bg-transparent sm:bg-transparent">
      <li>
        <Link to="/" href="#" className="block px-3 py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white focus:text-blue-500" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/shop" href="#" className="block px-3 py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white focus:text-blue-500" aria-current="page">Shop</Link>
      </li>
      <li>
        <Link to="/about" href="#" className="block px-3 py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 focus:text-blue-500">About</Link>
      </li>
      <li>
        <a href="#" className="block px-3 py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 sm:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 focus:text-blue-500">Services</a>
      </li>
      <li>
        <Link to="/contact" href="#" className="block px-3 py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 focus:text-blue-500" aria-current="page">Contact</Link>
      </li>
        </ul>
      
      </div>

      {/* Right side buttons */}
      <div className="flex justify-center items-center sm:ml-24 lg:-ml-48 sm:fixed lg:relative ">
        <input
          type="text"
          placeholder="Search..."
          className="text-black relative bg-dark-blue border-none rounded-md w-full sm:w-48 px-3 py-2 "
          value={searchTerm}
        onChange={handleInputChange}
        />
        
          <button onClick={searching ? clear : handleSearch } className="text-white border-none rounded-md ml-2" >
         { searching ? <X size={28} /> : <MagnifyingGlass size={28}/> }
      </button>
      
        </div>
         <div className=" sm:ml-36 sm:-mt-4 absolute top-full lg:right-96">
         {searchResults.map((product, index) => (
            <ul className='bg-white border-2 border-y-black top-full flex flex-row '>
             <li key={index} >
            <Link to={`/product/${product.id}`}>{product.productName}</Link>
          </li>
          </ul>
         
        ))}</div>
     
      <div className="flex justify-end items-center lg:mr-24 sm:mr-12 space-x-4">
        <button className="text-white bg-blue-700 border-none rounded-md mr-2">
          <Link to="/cart" ><ShoppingCart size={38} className="" /></Link>
          <span className="absolute top-0 ml-5 mt-5 bg-red-500 rounded-full w-5 h-5 flex justify-center items-center text-white">
            { quantity }
          </span>
        </button>



        <button className="text-white bg-dark-blue border-none rounded-md sm:-ml-4 " onClick={toggleDropdown}>
          <User size={38} className="" />
        </button>
        {isDropdownOpen && (
      <div className="origin-top-right absolute right-0 mt-64 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
           <div class="px-4 py-3 text-sm text-gray-900 dark:text-black">
             <div>Rufai Abdulrahman</div>
             <div class="font-medium truncate">rufaiabdulrahman21@gmail.com</div>
           </div>
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">  Settings </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Sign out </a>
          </div>
      </div>
     )}
      </div>
      
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import '../assets/styles/search.scss';
import { IoSearchCircle } from "react-icons/io5";

const Search = ({ setSearch }) => {
  const [kitapAdi, setKitapAdi] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    kitapAra(kitapAdi);
  };

  const handleChange = (event) => {
    setKitapAdi(event.target.value);
  };

  return (
    <>

      <div className='search'>
        <input type="text" placeholder="Ara.." onChange={e => setSearch(e.target.value)} />

        <span className='span'> <IoSearchCircle size={30} /> </span>

      </div>

    </>
  );
};

export default Search;

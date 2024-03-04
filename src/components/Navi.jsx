import React, { useState } from 'react';
import '../assets/styles/navi.scss';
import liblogo from '../assets/img/liblogo.png';

const Navi = ({ kategoriler, setSecilenKategori }) => {

    return (
        <nav>
            <div className='brand'>
                <img src={liblogo} alt="logo" />
                <h3>boots-online-6</h3>
            </div>
            <ul>
                {kategoriler.map(item => (
                    <li key={item.id} onClick={(e) => setSecilenKategori(e.target.innerText)}>{item.kategoriAdi}</li>
                ))}
            </ul>
        </nav>
    );
}

export default Navi;

import React from 'react';
import '../assets/styles/card.scss'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Card = ({ kitap, kitapSil, cardDuzenle }) => {
  return (
    <div key={kitap.id} className='card'>
      <button onClick={() => kitapSil(kitap.id)} className='delete'><MdDelete /></button>
      <button className='edit' onClick={() => cardDuzenle(kitap.id)}><FaRegEdit /></button>
      <img src={kitap.kitapResmi ? kitap.kitapResmi : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} alt=' kitap' />
      <div className='card-body'>

        <p>{kitap.kitapAdi}</p>
        <p>Kitap Yazarı: {kitap.kitapYazari}</p>
        <p>Kitap Kategorisi: {kitap.kitapKategorisi}</p>
        <p>Sayfa Sayısı: {kitap.kitapSayfaSayisi} </p>
        <p>Sayfa Açıklaması:
          {
            kitap.kitapAciklamasi.length < 170 ? kitap.kitapAciklamasi : kitap.kitapAciklamasi.substring(0, kitap.kitapAciklamasi.substring(0, 100).lastIndexOf(" ")) + "..."
          }
        </p>
      </div>
    </div>
  )
};
export default Card;
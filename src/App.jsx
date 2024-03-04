import React, { useState, useEffect } from 'react'
import './App.css'
import Cardlist from './components/Cardlist';
import Form from './components/Form';
import Navi from './components/Navi';
import Search from './components/Search';
import axios from 'axios';
// import { data, kategori } from './assets/data/data';

function App() {
  // const [stateAdi,setState] = useState(initialvalue);
  const [kitaplik, setkitaplik] = useState([]);
  const [kategoriler, setkategoriler] = useState([]);
  const [search, setSearch] = useState("");
  const [secilenKategori, setSecilenKategori] = useState(null);
  const [secilenKitap, setSecilenKitap] = useState("");

  // const [bilgeAdam, setBilgeAdam] = useState("");
  //yeni kitap ekleme
  const yeniKitapEkleDuzenle = async (yeni) => {
    // setkitaplik([...kitaplik,yeni]);
    let url = "http://localhost:3005/kitaplar";
    if (!secilenKitap) {
      setkitaplik(prev => [...prev, yeni])  //ön yüze ekleme
      //apiye ekleme
      const response = await axios.post(url, yeni);
      // kitapGetir(); hatalı gereksiz get isteği
    }
    else {
      url += `/${secilenKitap.id}`;
      const response2 = await axios.patch(url, yeni);
      setSecilenKitap("");
      //arayüz için. performans kaybı olmadan yalnzıca güncellenen kitap bilgileri değişir. diğer kitaplar tekrar render edilmez.
      // => ..
      setkitaplik(prev =>
        prev.map(kitap => {
          if (kitap.id == secilenKitap.id) {
            return { ...response2.data }
          }
          else {
            return { ...kitap }
          }
        }
        ))
    }
  }

  //kitap silme
  const kitapSil = async (id) => {
    setkitaplik(kitaplik.filter(statedenGelen => statedenGelen.id !== id)) //önyüz
    const url = `http://localhost:3005/kitaplar/${id}`; // apiden silmek için
    // const response = await axios.delete(url);
    const response = await axios.patch(url, { isDeleted: true })
  }

  // kitapları getirme
  const kitapGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    // const url = "http://localhost:3005/kitaplar?kitapKategorisi=statedengelen"
    if (secilenKategori && secilenKategori !== "Tüm Kitaplar") {
      url += `?kitapKategorisi=${secilenKategori}`;
    }
    const response = await fetch(url);
    const kitaplar = await response.json();
    setkitaplik(kitaplar);
  }

  const kategoriGetir = async () => {
    const url = "http://localhost:3005/kategoriler";
    const response = await fetch(url);
    const kategoriler = await response.json();
    setkategoriler(kategoriler);
  }

  useEffect(() => {
    kitapGetir();
  }, [secilenKategori, secilenKitap])
  useEffect(() => {
    kategoriGetir();
  }, [])

  // car düzenle
  const cardDuzenle = async (id) => {
    const url = `http://localhost:3005/kitaplar/${id}`;
    const response = await axios.get(url);
    const duzenlenecekKitap = response.data;
    setSecilenKitap(duzenlenecekKitap);
  }

  return (
    <>
      <Navi kategoriler={kategoriler} setSecilenKategori={setSecilenKategori} />
      <Form yeniKitapEkleDuzenle={yeniKitapEkleDuzenle} secilenKitap={secilenKitap} kitaplik={kitaplik} />
      <Search setSearch={setSearch} />
      <Cardlist cardDuzenle={cardDuzenle} data={kitaplik} kitapSil={kitapSil} search={search} />
    </>
  )
}
export default App;

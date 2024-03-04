
import React, { useEffect, useState } from 'react'
import '../assets/styles/form.scss'
import { IoHandLeft } from 'react-icons/io5';

const Form = ({ yeniKitapEkleDuzenle, kitaplik, secilenKitap }) => {

  const [kitapAdi, setKitapAdi] = useState("");
  const [kitapYazari, setKitapYazari] = useState("");
  const [kitapKategorisi, setkitapKategorisi] = useState("Kategori Seçiniz");
  const [kitapResmi, setkitapResmi] = useState();
  const [kitapSayfaSayisi, setkitapSayfaSayisi] = useState(0);
  const [kitapAciklamasi, setkitapAciklamasi] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    yeniKitapEkleDuzenle({
      id: kitaplik.length > 0 ? (+kitaplik[kitaplik.length - 1].id + 1).toString() : "1",
      kitapAdi: kitapAdi,
      kitapYazari: kitapYazari,
      kitapKategorisi: kitapKategorisi,
      kitapResmi: kitapResmi,
      kitapSayfaSayisi: kitapSayfaSayisi,
      kitapAciklamasi: kitapAciklamasi
    });

    setKitapAdi("");
    setKitapYazari("");
    setkitapKategorisi("");
    setkitapResmi("");
    setkitapSayfaSayisi("");
    setkitapAciklamasi("");
  }

  useEffect(() => {
    if (secilenKitap) {
      setKitapAdi(secilenKitap.kitapAdi);
      setKitapYazari(secilenKitap.kitapYazari);
      setkitapKategorisi(secilenKitap.kitapKategorisi);
      setkitapResmi(secilenKitap.kitapResmi);
      setkitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
      setkitapAciklamasi(secilenKitap.kitapAciklamasi);
    }
  }, [secilenKitap]);

  return (
    <div className='container-form'>
      <h3>{secilenKitap ? "Kitap Düzenle" : "Kitap Ekle"}</h3>
      <form className='form' onSubmit={handleSubmit}>
        <input value={kitapAdi} onChange={(e) => { setKitapAdi(e.target.value) }} type="text" placeholder='Kitap Adı' />
        <input value={kitapYazari} onChange={(e) => { setKitapYazari(e.target.value) }} type="text" placeholder='kitap Yazarı' />
        <select value={kitapKategorisi} onChange={(e) => { setkitapKategorisi(e.target.value) }} className='form-select' name="kategori" id="kategori">
          <option value="Kategori Seçiniz">Kategori Seçiniz</option>
          <option value="Yazılım">Yazılım</option>
          <option value="Edebiyat">Edebiyat</option>
          <option value="Romantik">Romantik</option>
          <option value="Diğer">Diğer</option>
        </select>
        <input value={kitapSayfaSayisi} onChange={(e) => { setkitapSayfaSayisi(e.target.value) }} type="number" placeholder='Sayfa Sayısı' />
        <input value={kitapResmi} onChange={(e) => { setkitapResmi(e.target.value) }} type="text" placeholder='Kitap Resmi' />
        <textarea value={kitapAciklamasi} onChange={(e) => { setkitapAciklamasi(e.target.value) }} placeholder='Kitap Açıklaması' />
        <div className='submitDiv'>
          <input disabled={kitapAdi === "" || kitapYazari === "" || kitapKategorisi === "" || kitapAciklamasi === "" || kitapSayfaSayisi === 0} type="submit" value={secilenKitap ? "Düzenle" : "Ekle"} />
        </div>
      </form>
    </div>
  )
}

export default Form
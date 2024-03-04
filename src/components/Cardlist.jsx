
import Card from './Card'
import '../assets/styles/cardlist.scss'


const Cardlist = ({ data, kitapSil, search , cardDuzenle}) => {


    return (
        <div className='card-list'>
            {
                data.map(kitap =>
                    !kitap.isDeleted &&
                    (
                        kitap.kitapYazari.toLowerCase().startsWith(search.toLowerCase())
                        ||
                        kitap.kitapAdi.toLowerCase().startsWith(search.toLowerCase())
                    )
                    &&
                    < Card key={kitap.id} kitap={kitap} kitapSil={kitapSil} cardDuzenle={cardDuzenle} />
                )
            }
        </div>
    )
}

export default Cardlist
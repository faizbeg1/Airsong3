
import './card.css';
//import FOOTER from "./footer";
import AudioPlayer from "material-ui-audio-player";



function CARD (props) {
  const { value,PlaySong } = props;
  
  return (
        
    <div className="card" onClick={()=> PlaySong(value)} >
        <div className="card-img" >
        <img
          src={value.artworkUrl100}
          alt="mypic"
        />
        <div className="card-titel"> <h5>{value.collectionName}</h5></div>
      <div className="info">
        <p>{value.artistName}</p>
       
        </div>
      </div>
    </div>
  );
}

export default CARD;

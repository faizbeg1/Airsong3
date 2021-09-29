import "../spotify/header.css"
import { COLORS } from '../../utils/constants';
// import { Link } from "react-router-dom";
function HEADER() {
  return (
      
    <div className="header" style={{ backgroundColor: COLORS.headerColor }}>
        <h3 className="site-titel">Air Song </h3>
        <a href="##">  SIGN UP</a>
        
        <button className="login" >LOG IN</button>
      
    </div>
    
  );
}

export default HEADER;

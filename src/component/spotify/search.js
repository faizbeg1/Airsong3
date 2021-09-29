// import { ListItem } from "@material-ui/core";
// import SelectInput from "@material-ui/core/Select/SelectInput";
import React from "react";


const Search=(props)=>{
    // const {value}=props;
        function getData(event){
           // console.log(event.target.value);
            const input=event.target.value
            return input
            //console.log(input)
        }
        

    return(
        <div className="Search-container">
            <input className="Search-bar" type="text" placeholder="Artist Name" onChange={getData}></input>
            <button className="Submit" type="submit"  > 🔎</button>

        </div>
    )


}
export default Search
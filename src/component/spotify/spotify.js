import React, { useEffect, useState } from "react";
import HEADER from "./header";
import FOOTER from "./footer";
import CARD from "./card";
import "./spotify.css";
import Search from "./search";
import { itune } from "./api";
// import { Input } from "@material-ui/core";


function SPOTIFY(){
    const [currentSong,setCurrentSong]=useState({})
    const PlaySong=(Song)=>{
        setCurrentSong(Song)
       // console.log(Song);
    }
    
    //const [currentInput,setInput]=useState("Atif aslam")    
        // function StartSearch(input){
        //     setInput(input)
        //     console.log('input')
        // }
    
    
    
    const [results, setResults] = useState([])
    // let results = [];
    useEffect(() => {
        itune("Atif aslam").then(res => {
            console.log(res);
            // results = res.results;
            setResults(res.results);
        })
        //console.log(data);
        // setResults(data.results);
    }, [])
        
    return(
        <div className="spotify_container">
        <HEADER />
        <div className="frame">
            <hr/>
            <h2 className="second-head"> Hear what’s trending for free in the Air Song community</h2>
            <Search  />
            
            
            
            
            {/* {console.log(results)} */}
            <div className="card_list">
                {results.map(
                    (value)=>(
                        <CARD value={value}
                        PlaySong={PlaySong}
                         />
                    )
                )}
            </div>
        
        </div>

        
        <FOOTER  value={currentSong}/>
        </div>
    )
};

export default SPOTIFY;
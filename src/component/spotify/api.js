export async function itune(input) {
      const url=`https://itunes.apple.com/search?term=${input}`
    // const url=`https://itunes.apple.com/lookup?amgArtistId=468749&entity=album&limit=5`
    
    console.log(url);

    const res= await fetch(url);
    const actual_data=await res.json();
    // console.log(actual_data.results);
    return actual_data;
}
//promise
//async.await

//component life cycle method
//https://music.apple.com/us/artist/emiway-bantai/1450594347  //artist id=1368102340
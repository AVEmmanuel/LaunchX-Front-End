const fetchPokemon =() =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=>{
        if(res.status != 200){
            console.log(res);
            pokeImage("./img/pokemon-sad.gif");
        }else{
            return res.json();
        }
        
    }).then((data)=>{
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);

        pokeInfo(data);

    });
}

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeInfo =(url)=>{
    let info='Name: '+  url.name+"\nWeigth: "+url.weight+"\nHeight: "+url.height;
    const pokeInfo = document.getElementById("pokeInfo");
    pokeInfo.innerText = info;
   
   
}
//fetchPokemon();

const imprimir = ()  => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("hey! "+ pokeInput);
}
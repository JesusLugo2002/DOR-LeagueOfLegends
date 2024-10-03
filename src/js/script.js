const champions = [];

async function getChampions() {
    const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json";
    let champions = await fetch(url)
    .then(async (response) => {return (await response.json()).data})
    
    for (const key in champions) {
        console.log(key);
    }
}

getChampions();
console.log(champions);
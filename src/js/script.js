import Champion from "./Champion.js";

let champions = [];
const loadingDataText = document.getElementById('loading-data-text');

// Get champions from API
async function getChampions() {
    const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json";
    const response = await fetch(url);
    const data = (await response.json()).data;
    for (let champion in data) {
        champions.push(new Champion(data[champion]));
    }
    loadingDataText.remove();
}

getChampions();

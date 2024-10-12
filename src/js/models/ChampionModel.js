import Champion from "./Champion.js";

export default class ChampionModel {
    constructor() {
        this.champions = [];
    }

    async fetchData() {
        try {            
            const url = "https://ddragon.leagueoflegends.com/cdn/14.20.1/data/en_US/champion.json";
            const response = await fetch(url);
            const data = (await response.json()).data;
            for (let champ in data) {
                this.champions.push(new Champion(data[champ]));
            }
        } catch (e) {
            console.error(`Error fetching data from Champions API: ${e}`)
        }
    }

    getChampions() {
        return this.champions;
    }
}
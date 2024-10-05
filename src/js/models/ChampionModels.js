import Champion from "./Champion.js";

export default class ChampionModel {
    constructor() {
        this.champions = []
    }

    async fetchChampionsFromApi() {
        const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json";
        const response = await fetch(url)
        const data = (await response.json()).data
        for (let champ in data) {
            this.champions.push(new Champion(data[champ]));
        }
    }

    getChampions() {
        return this.champions;
    }
}

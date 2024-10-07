export default class Champion {
    constructor(data) {
        this.name = data.name;
        this.image = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + data.id + "_0.jpg";
        this.title = data.title;
        this.hp = data.stats.hp;
        this.mp = data.stats.mp;
    }
}
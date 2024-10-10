export default class Champion {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.image = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + this.id + "_0.jpg";
        this.title = data.title;
        this.hp = data.stats.hp;
        this.mp = data.stats.mp;
    }
}
export default class Champion {
    constructor(data) {
        this.name = data.name;
        this.image = "https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/" + data.image.full;
        this.title = data.title;
        this.tags = data.tags;
        this.hp = data.stats.hp;
        this.mp = data.stats.mp;
    }
}
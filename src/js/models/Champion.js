export default class Champion {
    constructor(data) {
        this.id = data.id
        this.name = data.name;
        this.title = data.title;
        this.image = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.id}_0.jpg`;
        this.tags = data.tags;
        this.hp = data.stats.hp;
        this.mp = data.stats.mp;
        this.attack = data.info.attack;
        this.defense = data.info.defense;
        this.magic = data.info.magic;
        this.difficulty = data.info.difficulty;
    }
}
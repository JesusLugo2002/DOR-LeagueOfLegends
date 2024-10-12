import ChampionModel from "../models/ChampionModel.js";
import View from "../views/View.js";


export default class Controller {
    constructor() {
        this.model = new ChampionModel();
        this.view = new View();

        this.init();
    }

    async init() {
        this.view.switchLoading(true);
        await this.model.fetchData();
        this.view.switchLoading(false);
        this.view.displayChampions(this.model.getChampions());
    }
}
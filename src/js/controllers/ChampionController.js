import ChampionModel from "../models/ChampionModels.js";
import ChampionView from "../views/ChampionViews.js";

export default class ChampionController {
    constructor() {
        this.model = new ChampionModel()
        this.view = new ChampionView()
    }

    async init() {
        await this.model.fetchChampionsFromApi();
        this.view.removeLoadingData();
        this.view.createGallery(this.model.getChampions());
    }
}
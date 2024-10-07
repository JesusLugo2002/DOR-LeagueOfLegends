import ChampionModel from "../models/ChampionModels.js";
import ChampionView from "../views/ChampionViews.js";

export default class ChampionController {
    constructor() {
        this.model = new ChampionModel();
        this.view = new ChampionView();
        this.init();
    }

    async init() {
        await this.model.fetchChampionsFromApi();
        this.wait(5000)
        this.view.removeLoadingData();
        this.view.createGallery(this.model.getChampions());
    }

    wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }
}
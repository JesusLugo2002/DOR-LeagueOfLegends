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
        this.wait(3000);
        this.view.removeLoadingData();
        this.view.createGallery(this.model.getChampions());
        this.bindingEvents();
    }

    wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
    }

    async bindingEvents() {
        const cards = document.getElementsByClassName("champ-container")
        for (const card of cards) {
            card.addEventListener("click", this.getChampionDetail.bind(this, card.id))
        }
    }

    getChampionDetail(champId) {
        for (let champ of this.model.getChampions()) {
            if (champ.id === champId) {
                this.view.showChampionDetail(champ);
                return;
            }
        }
    }
}
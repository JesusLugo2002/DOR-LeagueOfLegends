import ChampionController from "./controllers/ChampionController.js";

document.addEventListener('DOMContentLoaded', () => {
    const controller = new ChampionController();
    controller.init();
});
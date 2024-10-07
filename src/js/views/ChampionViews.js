export default class ChampionView {
    constructor() {
        this.loadingDataText = document.getElementById("loading-data-text");
        this.mainContainer = document.getElementById("main-container");
    }

    removeLoadingData() {
        this.loadingDataText.remove();
    }

    createGallery(data) {
        for (let champ of data) {
            console.log(champ);
            this.mainContainer.innerHTML += `
            <div class="champ-container">
                <p class="champ-name">${champ.name}, ${champ.title}</p>
                <img class="champ-image" src="${champ.image}" width="70%" alt="logo-${champ.name}"/>
                <div class="champ-stats">
                    <p class="champ-hp">HP: ${champ.hp}</p>
                    <p class="champ-mp">MP: ${champ.mp}</p>
                </div>
            </div>
            `
        }
    }
}  
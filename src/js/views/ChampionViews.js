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
            this.mainContainer.innerHTML += `
            <div class="champ-container" id="${champ.id}">
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

    showChampionDetail(data) {
        const container = document.getElementById("champ-detail-container")
        container.innerHTML = `
        <div id='detail-main-container'>
            <div class='left-detail-side'>
                <img src="${data.image}">
            </div>
            <div class='right-detail-side'>
                <div class='detail-header'>
                    <p>${data.name}, ${data.title}</p>
                    <p class="close-detail" onclick="document.getElementById('detail-main-container').remove()">Cerrar</p>
                </div>
            </div>
        </div>
        `
    }
}  
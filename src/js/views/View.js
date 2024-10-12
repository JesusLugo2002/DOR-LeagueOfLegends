export default class View {
    constructor() {
        this.gallery = document.getElementById("champions-gallery");
        this.loading = document.getElementById("loading-header")
    }

    displayChampions(champions) {
        for (const champ of champions) {
            this.gallery.innerHTML += `
            <div class="champion" id="${champ.id}">
                <div class="champion-image">
                    <img src="${champ.image}">
                </div>
                <div class="champion-content">
                    <div class="champion-name"><h4>${champ.name}, ${champ.title}</h4></div>
                    <div class="champion-tags">
                        ${this.getTags(champ.tags)}
                    </div>
                    <div class="champion-energy">
                        <p class="champion-hp">HP: ${champ.hp}</p>
                        <p class="champion-mp">MP: ${champ.mp}</p>
                    </div>
                    <div class="champion-stats">
                        <p class="champion-attack">Attack: ${this.getBar(champ.attack)}</p>
                        <p class="champion-defense">Defense: ${this.getBar(champ.defense)}</p>
                        <p class="champion-magic">Magic: ${this.getBar(champ.magic)}</p>
                        <p class="champion-difficulty">Difficulty: ${this.getBar(champ.difficulty)}</p>
                    </div>
                </div>
            </div>
            `
        }
    }

    getBar(number) {
        let result = '';
        for (let i = 0; i < number; i++) {
            result += '❚';
        }
        return result
    }

    getTags(array) {
        let result = '';
        array.forEach(tag => {
            result += `<span class="champion-tag">${tag} </span>`
        });
        return result.trim()
    }

    switchLoading(isLoading) {
        this.loading.style.display = isLoading ? "block" : "none";
    }
}
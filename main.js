// User Interaction
const randomHeroButton = document.getElementById('random-hero-button');
const heroByNameInput = document.getElementById('hero-name-input');
const heroByNameButton = document.getElementById('hero-name-button');
const heroCard = document.querySelector('.hero-card')

// Hero Card Elements
const heroName = document.getElementById('hero-name');
const heroImage = document.getElementById('hero-image');
const heroCombatStat = document.getElementById('hero-combat-value');
const heroDurabilityStat = document.getElementById('hero-durability-value');
const heroIntelligenceStat = document.getElementById('hero-intelligence-value');
const heroPowerStat = document.getElementById('hero-power-value');
const heroSpeedStat = document.getElementById('hero-speed-value');
const heroStrengthStat = document.getElementById('hero-strength-value');


async function getRandomHero() {
    const url = 'http://localhost:3000/getRandomHero';
    const response = await fetch(url);
    const data = await response.json();

    updateHeroCard(data);
    console.log(data);

}

async function getHeroByName() {
    const name = heroByNameInput.value;

    const url = `http://localhost:3000/getHeroByName/${name}`;
    const response = await fetch(url);
    const data = await response.json();

    // Since a search can come with several results, I want to allow for displaying the other results
    if (data.results) {
        const randIndex = Math.floor(Math.random() * data.results.length);
        updateHeroCard(data.results[randIndex]);
    } else {
        updateHeroCard(data);
    }

    console.log(data);


}

function updateHeroCard(data) {
    if (!data.image) {
        return
    } else {
        heroName.textContent = data.name;
        heroImage.src = data.image.url;
        heroCombatStat.textContent = data.powerstats.combat;
        heroDurabilityStat.textContent = data.powerstats.durability;
        heroIntelligenceStat.textContent = data.powerstats.intelligence;
        heroPowerStat.textContent = data.powerstats.power;
        heroSpeedStat.textContent = data.powerstats.speed;
        heroStrengthStat.textContent = data.powerstats.strength;
    }

}

function flipCard() {
    console.log('Flipped')
}

randomHeroButton.addEventListener('click', getRandomHero);
heroByNameButton.addEventListener('click', getHeroByName);
heroCard.addEventListener('click', flipCard)
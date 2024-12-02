const quarterFinal = [
    { home: 'Barcelona*', away: 'Paris Saint.G', homeScore: 5, awayScore: 1, homeLogo: 'barcelona.jpeg', awayLogo: 'psg.jpeg' },
    { home: 'Real Madrid', away: 'Atletico md', homeScore: 1, awayScore: 0, homeLogo: 'real_madrid.jpeg', awayLogo: 'atletico_madrid.jpeg' },
    { home: 'Juventus', away: 'Monacoo', homeScore: 2, awayScore: 1, homeLogo: 'juventus.jpeg', awayLogo: 'Monaco.jpeg' },
    { home: 'Bayern', away: 'Porto', homeScore: 7, awayScore: 4, homeLogo: 'bayern_munich.jpeg', awayLogo: 'porto.jpeg' },
];

const semiFinalMatches = [
    { home: 'Barcelona*', away: 'Bayern Mun', homeScore: 5, awayScore: 3, homeLogo: 'barcelona.jpeg', awayLogo: 'bayern_munich.jpeg' },
    { home: 'Real Mad', away: 'Juventus', homeScore: 2, awayScore: 3, homeLogo: 'real_madrid.jpeg', awayLogo: 'juventus.jpeg' },
];

const finalMatch = [
    { home: 'Barcelona*', away: 'Juventus{2}', homeScore: 3, awayScore: 1, homeLogo: 'barcelona.jpeg', awayLogo: 'juventus.jpeg' },
];
function renderMatches(containerId, matches, title) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    // Add the section title dynamically
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = title;  // Set the title (Knockout, Semi-Final, etc.)
    container.appendChild(sectionTitle);

    // Render the match cards
    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.classList.add('match-card');
        matchCard.innerHTML = `
            <div class="match-header">
                <img src="${match.homeLogo}" alt="${match.home}" class="team-logo">
                <span class="team-name">${match.home}</span> <!-- Home team name -->
                <span class="vs">VS</span>
                <span class="team-name">${match.away}</span> <!-- Away team name -->
                <img src="${match.awayLogo}" alt="${match.away}" class="team-logo">
            </div>
            <div class="match-details">
                <span class="score">${match.homeScore} - ${match.awayScore}</span>
            </div>
        `;
        container.appendChild(matchCard);
    });
}

// Render knockout matches
window.addEventListener("load", () => {
    renderMatches('quarter-final', quarterFinal, 'quarter-finals');
    renderMatches('semi-final', semiFinalMatches, 'Semi-Finals');
    renderMatches('final', finalMatch, 'Final');
});

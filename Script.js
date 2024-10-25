const monsters = [];

function addMonster() {
    const monster = {
        id: monsters.length + 1,
        type: "Raro",
        status: "Saludable",
        earnings: 0
    };
    monsters.push(monster);
    renderMonsters();
}

function renderMonsters() {
    const container = document.getElementById("monsterContainer");
    container.innerHTML = "";
    monsters.forEach(monster => {
        const div = document.createElement("div");
        div.className = "monster";
        div.innerHTML = `
            <h2>Monstruo ${monster.type}</h2>
            <p>Estado: ${monster.status}</p>
            <button onclick="feedMonster(${monster.id})">Alimentar</button>
            <button onclick="cureMonster(${monster.id})">Curar</button>
        `;
        container.appendChild(div);
    });
}

function feedMonster(id) {
    alert(`Alimentaste al monstruo con ID: ${id}`);
}

function cureMonster(id) {
    alert(`Curaste al monstruo con ID: ${id}`);
}

function retirar() {
    alert("Retiro procesado.");
}
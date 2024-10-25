let monsters = [
    { id: "health1", health: 100 },
    { id: "health2", health: 100 },
    { id: "health3", health: 100 }
];

function log(message) {
    const logDiv = document.getElementById('log');
    logDiv.innerHTML = `<p>${message}</p>` + logDiv.innerHTML;
}

function updateHealth(monsterIndex) {
    const monster = monsters[monsterIndex];
    const healthFill = document.getElementById(monster.id);
    healthFill.textContent = monster.health;
    healthFill.style.color = monster.health > 60 ? "#4caf50" : monster.health > 30 ? "#ffeb3b" : "#f44336";
}

function feedMonster(monsterIndex) {
    const monster = monsters[monsterIndex];
    if (monster.health > 0) {
        const feedOutcome = Math.random();
        if (feedOutcome > 0.5) {
            monster.health = Math.min(100, monster.health + 10);
            log(`El monstruo ${monsterIndex + 1} ha sido alimentado con éxito.`);
        } else {
            monster.health = Math.max(0, monster.health - 10);
            log(`La alimentación falló y el monstruo ${monsterIndex + 1} perdió salud.`);
        }
        updateHealth(monsterIndex);
    } else {
        log(`El monstruo ${monsterIndex + 1} está muerto. Compra uno nuevo para continuar.`);
    }
}

// Inicializar el estado de salud en la interfaz
monsters.forEach((_, index) => updateHealth(index));
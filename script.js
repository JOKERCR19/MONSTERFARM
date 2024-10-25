let health = 100;
let balance = 0;

function log(message) {
    const logDiv = document.getElementById('log');
    logDiv.innerHTML = `<p>${message}</p>` + logDiv.innerHTML;
}

function updateHealthBar() {
    const healthFill = document.getElementById('health-fill');
    healthFill.style.width = health + "%";
    healthFill.style.backgroundColor = health > 60 ? "#4caf50" : health > 30 ? "#ffeb3b" : "#f44336";
}

function buyMonster() {
    const monsterCost = 50;
    if (balance >= monsterCost) {
        balance -= monsterCost;
        health = 100;
        log("Has comprado un nuevo monstruo. ¡Cuídalo bien!");
    } else {
        log("No tienes suficiente saldo para comprar un monstruo.");
    }
    updateDisplay();
}

function feedMonster() {
    if (health > 0) {
        const feedOutcome = Math.random();
        if (feedOutcome > 0.5) {
            health = Math.min(100, health + 10);
            log("El monstruo ha sido alimentado con éxito.");
        } else {
            health = Math.max(0, health - 10);
            log("La alimentación falló y el monstruo perdió salud.");
        }
        updateHealthBar();
    } else {
        log("Tu monstruo está muerto. Compra uno nuevo para continuar.");
    }
    updateDisplay();
}

function cureMonster() {
    const cureCost = 5;
    if (balance >= cureCost && health > 0) {
        balance -= cureCost;
        health = 100;
        log("Tu monstruo ha sido curado a plena salud.");
    } else {
        log("No tienes suficiente saldo para curar al monstruo.");
    }
    updateDisplay();
}

function withdraw() {
    if (balance > 0) {
        log(`Has retirado ${balance} TON.`);
        balance = 0;
        updateDisplay();
    } else {
        log("No tienes saldo suficiente para retirar.");
    }
}

function updateDisplay() {
    document.getElementById('health').textContent = health;
    document.getElementById('balance').textContent = balance;
    updateHealthBar();
}

updateDisplay();
let balance = 100;
let monster = null;
let earningsInterval;
const isAdmin = true;  // Cambia a `true` para activar modo administrador, `false` para desactivar

let monsters = [
    { type: "Común", image: "monster-common.png", health: 100, earnings: 2 },
    { type: "Raro", image: "monster-rare.png", health: 100, earnings: 5 },
    { type: "Legendario", image: "monster-legendary.png", health: 100, earnings: 10 }
];

function buyBox() {
    if (isAdmin || balance >= 50) {
        if (!isAdmin) balance -= 50;
        document.getElementById("balance").textContent = balance;
        openBox();
    } else {
        log("No tienes suficiente saldo para comprar una caja.");
    }
}

function openBox() {
    let randomMonster = monsters[Math.floor(Math.random() * monsters.length)];
    monster = { ...randomMonster };
    
    document.getElementById("monster-container").style.display = "flex";
    document.getElementById("monster-image").src = monster.image;
    document.getElementById("monster-type").textContent = `Tipo: ${monster.type}`;
    document.getElementById("health").textContent = monster.health;
    document.getElementById("earnings").textContent = 0;
    
    startEarnings();
    updateHealthBar();
}

function startEarnings() {
    if (earningsInterval) clearInterval(earningsInterval);
    earningsInterval = setInterval(() => {
        if (monster.health > 0) {
            balance += monster.earnings;
            document.getElementById("balance").textContent = balance;
            document.getElementById("earnings").textContent = parseInt(document.getElementById("earnings").textContent) + monster.earnings;
            
            monster.health -= 5;
            if (monster.health <= 0) {
                monster.health = 0;
                log("Tu monstruo ha muerto. Compra uno nuevo.");
                clearInterval(earningsInterval);
            }
            updateHealthBar();
        }
    }, 5000);
}

function feedMonster() {
    if (monster.health > 0) {
        monster.health = Math.min(100, monster.health + 10);
        log("El monstruo ha sido alimentado.");
        updateHealthBar();
    } else {
        log("Tu monstruo está muerto. Compra uno nuevo.");
    }
}

function cureMonster() {
    if (isAdmin || balance >= 5) {
        if (!isAdmin) balance -= 5;
        document.getElementById("balance").textContent = balance;
        monster.health = 100;
        log("Tu monstruo ha sido curado a plena salud.");
        updateHealthBar();
    } else {
        log("No tienes suficiente saldo para curar al monstruo.");
    }
}

function updateHealthBar() {
    document.getElementById("health").textContent = monster.health;
    const healthFill = document.getElementById("health-fill");
    healthFill.style.width = monster.health + "%";
    healthFill.style.backgroundColor = monster.health > 60 ? "#4caf50" : monster.health > 30 ? "#ffeb3b" : "#f44336";
}

function log(message) {
    const logDiv = document.getElementById('log');
    logDiv.innerHTML = `<p>${message}</p>` + logDiv.innerHTML;
}

// Función para reiniciar las estadísticas del administrador
function resetAdmin() {
    if (isAdmin) {
        balance = 100;
        monster = null;
        clearInterval(earningsInterval);
        document.getElementById("balance").textContent = balance;
        document.getElementById("monster-container").style.display = "none";
        log("Estadísticas de administrador reiniciadas para pruebas.");
    }
}

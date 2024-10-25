body, html {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    color: #fff;
    text-align: center;
    overflow: hidden;
}

.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.85;
}

header {
    color: #ffeb3b;
    margin: 20px 0;
    text-shadow: 2px 2px #000;
}

.button-container {
    margin: 20px;
    display: flex;
    justify-content: center;
    gap: 15px;
}

.button-container button {
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #4caf50;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button-container button:hover {
    background-color: #3a8c41;
}

#monster-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.monster-card {
    background: rgba(34, 34, 34, 0.9);
    border-radius: 10px;
    padding: 15px;
    width: 250px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
    color: #fff;
    text-align: center;
    animation: fadeIn 1.5s;
}

.monster-image {
    width: 120px;
    margin-top: 10px;
    animation: float 3s ease-in-out infinite;
}

.health-bar {
    background: #444;
    border-radius: 5px;
    overflow: hidden;
    margin: 10px 0;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.health-fill {
    height: 20px;
    width: 100%;
    background: #4caf50;
    transition: width 0.5s, background-color 0.5s;
}

#actions button {
    padding: 8px 15px;
    margin: 5px;
    font-size: 14px;
    color: #fff;
    background-color: #2196F3;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#actions button:hover {
    background-color: #1976D2;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

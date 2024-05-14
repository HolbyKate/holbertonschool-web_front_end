// Changing DOM with closure //

function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
    }
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    
    const para = document.createElement("p");
    const node = document.createTextNode("Welcome Holberton!");
    para.appendChild(node);
    document.body.appendChild(para);

    const spookyButton = document.createElement("button");
    const darkButton = document.createElement("button");
    const screamButton = document.createElement("button");

    spookyButton.innerHTML = "Spooky";
    darkButton.innerHTML = "Dark mode";
    screamButton.innerHTML = "Scream mode";

    document.body.appendChild(spookyButton);
    document.body.appendChild(darkButton);
    document.body.appendChild(screamButton);
}

main();


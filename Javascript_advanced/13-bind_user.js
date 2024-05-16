// Write an object and closure //

const user = {
    hobby : "Calligraphy",
    favoriteSport : "Hockey",
    astrologicalSign : "Aurias",
    firstName : "Buillaume",
    lastName : "Johns",
    location : "Netherlands",
    occupation : "Engineer",
}

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`)
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);

bindLogWelcomeUser("Welcome");
bindLogWelcomeUser("Hello");

// Create function named welcome and test in inpector //

function welcome(firstName, lastName) {
    let fullName = firstName + " " + lastName;

    function displayFullName() {
        alert("Welcome " + fullName + "!");
    }
    displayFullName();
}

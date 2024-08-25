function visit() {
  let name = prompt("What is your name?");
  if (name) {
    alert(
      "Thank you, " +
        name +
        "! We will be in touch, meanwhile enjoy the nature around you!🐸"
    );
  } else {
    alert("No name 🙃 anyway you are very welcome to visit!🐟");
  }
}

let visitButton = document.querySelector(".visit-button");
visitButton.addEventListener("click", visit);

let enigmes = [];
let indexActuel = 0;

async function chargerEnigmes() {
  const response = await fetch('enigmes.json');
  enigmes = await response.json();
  afficherEnigme();
}

function afficherEnigme() {
  const img = document.getElementById("image");
  const enigme = enigmes[indexActuel];
  document.getElementById('titre').innerText = enigme.titre;
  document.getElementById('description').innerText = enigme.description;
  document.getElementById('solution').innerText = enigme.solution;
  document.getElementById('solution').style.display = "none";
  if (enigme.image) {
    img.src = enigme.image;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}

function reveler() {
  document.getElementById('solution').style.display = "block";
}

function suivant() {
  indexActuel = (indexActuel + 1) % enigmes.length;
  afficherEnigme();
}

chargerEnigmes();

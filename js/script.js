const livres = [
    { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
    { titre: "Le Seigneur des anneaux", auteur: "J.R.R. Tolkien", annee: 1954, disponible: false },
    { titre: "Dune", auteur: "Frank Herbert", annee: 1965, disponible: true },
    { titre: "Fahrenheit 451", auteur: "Ray Bradbury", annee: 1953, disponible: true },
    { titre: "Le messie de Dune", auteur: "Frank Herbert", annee: 1969, disponible: true },
];
// console.log(livres[0].titre);

// console.log(livres.length);
// console.table(livres);


let index = livres.findIndex(livre => livre.titre == "Fahrenheit 451");
//console.log(index);
livres.splice(index, 1, { titre: "Neuromancien", auteur: "William Gibson", annee: 1984, disponible: false });

//console.table(livres);
// for (let i = 0; i < livres.length; i++) {
//     console.log(livres[i].titre, livres[i].auteur);
// }

let livresDisponible = livres.filter((livre) => {
    return livre.disponible == true;
})
//console.table(livresDisponible);

let livresVieux = livresDisponible.filter((livre) => {
    return livre.annee < 1960;
}).map((livre) => {
    return livre.titre;
})
console.log(livresVieux);
let trouver = true;
livres.forEach(livre => {
    if (livre.auteur == "Frank Herbert") {
        trouver = true;
    }
});
if (trouver) {
    console.log("Livres trouvés : Dune, Le messie de Dune");
}
else {
    console.log("Aucun livre de Frank Herbert trouvé.");
}
/**
 * affiche un catalogue de livre en ordre croissant des annees
 * @param {object} livres titre ,auteur,annee de publication, disponibilite,
 */
function afficherCatalogue(livres) {
    let livresEnOrdre = livres.sort((a, b) => a.annee - b.annee);
    let catalogue = livresEnOrdre.map((livre) => {
        let disponible = "Non Disponible";
        if (livre.disponible) {
            disponible = "Disponible";
        }
        else {
            disponible = "Non Disponible";
        }
        return console.log(livre.titre + " ( " + livre.auteur + ", " + livre.annee + ") " + "- " + disponible);
    })
}
//afficherCatalogue(livres);

/**
 * permet de chercher un livre par son auteur et d'afficher les titres des livres fait par cet auteur
 */
function RechercherLivre() {
    let auteurRecherche = prompt("Entrez le nom de l'auteur");
    let livreChercher = livres.filter((livre) => {
        return livre.auteur == auteurRecherche;
    });
    alert(livreChercher.map((livre) => {
        return livre.titre;
    }).join(" et "));

}

const titre = document.querySelector('#titre-principal');

titre.addEventListener('click', () => { 
  titre.textContent = 'Vous avez cliqué sur le titre !';     // console faux ..... 
});


const premierParagraphe = document.querySelector('p');


const titrePrincipal = document.querySelector('#main-title');


const boutonPrincipal = document.querySelector('.btn-primary');


tousLesTitresH2.forEach(titre => {
  console.log(titre.textContent); 
});
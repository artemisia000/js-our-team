
//crea la struttura dati delle card

const cards = [
    {
        image: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        profession: 'Founder & CEO',
    },

    {
        image: 'img/angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        profession: 'Chef Editor',
    },

    {
        image: 'img/walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        profession: 'Office Manager',
    },

    {
        image: 'img/angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        profession: 'Social Media Menager',
    },

    {
        image: 'img/scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        profession: 'Developer',
    },

    {
        image: 'img/barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        profession: 'Graphic Designer',
    },


];

console.log(cards);
console.table(cards);

//creare un contenitore per tutti i dati delle cards

const teamContainer = document.querySelector('.team-container');

genera(cards,teamContainer);


//generare i markup delle con i dati delle cards

function genera(cards,teamContainer){

for(let i = 0; i <= cards.length ; i++){ 

    let cardItem = cards[i];
    console.log(cardItem);


//aggiungere le specifiche alle cards

    teamContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
          <img
          src="img/wayne-barnett-founder-ceo.jpg"
          alt="Wayne Barnett" />
        </div>
        <div class="card-text">
          <h3>${cardItem.name}</h3>
          <p>${cardItem.profession}</p>
        </div>
  </div>
    `
}
};

//inserisci dati nuovi utenti

const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputImage = document.getElementById('image');


const btnMember = document.getElementById(`addMemberButton`);

//generare ascolto bottone

btnMember.addEventListener(`click`, function(){

    console.log(`click`);
})







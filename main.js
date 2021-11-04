
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
        image: 'barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        profession: 'Graphic Designer',
    },


];

console.log(cards);
console.table(cards);

//creare un contenitore per tutti i dati delle cards

const teamContainer = document.querySelector('.team-container');

//generare i markup delle con i dati delle cards

for(let i = 0; i = cards.length ; i++){
    let cardsItem = cards[i];
    console.log(cardsItem);


//aggiungere le specifiche alle cards



    teamContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
          <img
          src="img/wayne-barnett-founder-ceo.jpg"
          alt="Wayne Barnett" />
        </div>
        <div class="card-text">
          <h3>${cardsItem.name} </h3>
          <p>${cardsItem.profession} </p>
        </div>
  </div>
    `
}
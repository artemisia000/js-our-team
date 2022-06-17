
//crea la struttura dati delle card

const team = [
    {
        image: 'wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
    },

    {
        image: 'angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        role: 'Chef Editor',
    },

    {
        image: 'walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        role: 'Office Manager',
    },

    {
        image: 'angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        role: 'Social Media Menager',
    },

    {
        image: 'scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        role: 'Developer',
    },

    {
        image: 'barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
    },

];

console.table(team);

//2.renderizzare team iniziale
//-ottenere il container
//-loop per generare dati
//-generazione nostro membere
//-aggiunta conatiner team

const container = document.querySelector('.team-container');

//ren team
drawTeam(team , container);


//3.aggiungere nuovo membro
//-ref bottone per creazione
//-ref inputa valori
//-creazione nuovo membro
//-aggiungi membro al team
//-rend al nuovo Team

const addBtn = document.getElementById('addMemberButton');
const nameInput = document.getElementById('name');
const roleInput = document.getElementById('role');
const imageInput = document.getElementById('image');


addBtn.addEventListener('click', () => {
    //gen nuovo oggetto
    const newMember = genNewMember(nameInput, roleInput, imageInput);

    //push nel team 
    team.push(newMember);

    //re-render del nuovo team con aggiunta card nuova
    drawTeam(team , container);

    

})



/**
 ***FUNCTION***
 */


//Gen team e print in schermo
function drawTeam(team, container) {
    for (let i = 0; i < team.length; i++){
        const member = team[i];
        console.log(member);

        container.innerHTML += `
        <div class="team-card">
            <div class="card-image">
              <img
                src="img/${member.image}"
                alt="${member.name}"
              />
            </div>
            <div class="card-text">
              <h3>${member.name}</h3>
              <p>${member.role}</p>
            </div>
          </div>
        </div>      
        `
    }
}


function genNewMember(name, role, image) {
    //ottenere valori input
    //crea obj
    const newTeamMember = {
        name: name.value,
        role: role.value,
        image: image.value
    };

    //reset valori input
    name.value = '';
    role.value = '';
    image.value = '';

    //return nuovo member
    return newTeamMember;

}
































const form = document.getElementById('form-contact');
const contactsNames = [];
const phoneNumber = [];

let lines = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    addLine();
    updateContacts();
})

function addLine(){
    const inputName = document.getElementById('nome');
    const inputTel = document.getElementById('telefone');

    if(phoneNumber.includes(inputTel.value)){
        alert(`Este número de telefone já foi inserido e está atribuido à: ${inputName.value} - ${inputTel.value} .`)
    }else {
        contactsNames.push(inputName.value);
        phoneNumber.push(inputTel.value);

        let line = '<tr>';
        line += `<td>${inputName.value}</td>`;
        line += `<td>${inputTel.value}</td>`;
        line += '</tr>';

        lines += line;
    };

    inputTel.value = '';
    inputName.value = '';
};

function updateContacts(){
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = lines;
}
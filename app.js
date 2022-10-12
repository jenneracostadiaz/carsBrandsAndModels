const myListMakes = document.querySelector('#make');
const myListModels = document.querySelector('#models');
const mymakes = new Request('data/makes.json');
const myModels = new Request('data/models.json');
const myYear = new Request('data/year.json');

fetch(mymakes)
  .then((response) => response.json())
  .then((data) => {
        data.forEach(e => {
            let listItem = document.createElement('option');
            listItem.textContent = e.make;
            listItem.setAttribute('value',  e.id);
            myListMakes.appendChild(listItem);
        });
  })
  .catch(console.error);

const selectModelo = () =>{
    let idMake = document.querySelector('#make').value
    let dropdown = document.getElementById('models');
    dropdown.length = 0;

    let dropdownyear = document.getElementById('year');
    dropdownyear.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Seleccionar Modelo';
    
    let twodefaultOption = document.createElement('option');
    twodefaultOption.text = '-';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;
    dropdownyear.add(twodefaultOption);
    dropdownyear.selectedIndex = 0;

    fetch(myModels)
    .then((response) => response.json())
    .then((data) => {
        let option;
        data.forEach(e => {
            if(e.idmake == idMake){
                option = document.createElement('option');
                option.text = e.model;
                option.value = e.id;
                dropdown.add(option);
            }
          });
    })
    .catch(console.error);
}

const selectYear = () =>{
    let dropdown = document.getElementById('year');
    dropdown.length = 0;
    
    let defaultOption = document.createElement('option');
    defaultOption.text = 'Seleccionar Año';
    
    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;
    
    let idModel = document.querySelector('#models').value

    fetch(myYear)
    .then((response) => response.json())
    .then((data) => {
        let option;
        data.forEach(e => {
            if(e.idmodel == idModel){
                option = document.createElement('option');
                option.text = e.year;
                option.value = e.id;
                dropdown.add(option);
            }
          });
    })
    .catch(console.error);
}



function populateUfs() {
    const ufSelect =  document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res =>  res.json())
    .then(states => {
        for(const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUfs();

function getCities(event) {
    const citySelect =  document.querySelector("select[name=city]");
    const stateInput =  document.querySelector("input[name=state]");

    const ufValue = event.target.value;

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    citySelect.innerHTML = "<option value>Selecione a Cidade</option>";
    citySelect.disabled = true

    fetch(url)
    .then(res =>  res.json())
    .then(cities => {
        for(const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities);

//Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}


const collectedItems = document.querySelector("input[name=items]");

let selectedItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target;

    // Add or remove a selected class
    itemLi.classList.toggle("selected");

    const itemId = itemLi.dataset.id;

    // check if exists selected items, case exists get the selected ones
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId; // this is true or false
        return itemFound
    })

    // If it is already selected, take of the selection
    if(alreadySelected >= 0) {
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems;
    } else {
        // If it is not selected, add the selection
        selectedItems.push(itemId);
    }

    // Update the hidden field with the selected data
    collectedItems.value = selectedItems;
}

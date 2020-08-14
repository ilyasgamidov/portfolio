"use strict";

const result = document.querySelector('.calc-total span');
let gender = 'female',
ratio = 1.375,
height, weight, age;

function getTotal() {
    if (!gender || !height || !weight || !age || !ratio){
        result.textContent = '____';
        return;
    }

    if (gender === 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}

getTotal();

function getStaticInfo(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`);

    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
            } else {
                gender = e.target.getAttribute('id');
            }
            console.log(ratio, gender);
        
            elements.forEach(elem => {
                elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);

            getTotal();
        }); 
    });

}

getStaticInfo('.gender', 'gender__choose_active');
getStaticInfo('.activity', 'gender__choose_active');

function getDinamicInfo(selector) {
    let input = document.querySelector(selector);

    input.addEventListener('input', () => {

        if (input.value.match(/\D/g)) {
            input.style.border = '1px solid red';
        } else {
            input.style.border = '1px solid #444';
        }

        switch (input.getAttribute('id')) {
            case 'height' :
                height = +input.value;
                break;
            case 'weight' :
                weight = +input.value;
                break;
            case 'age' :
                age = +input.value;
                break;
        }

        getTotal();
    });
}    

getDinamicInfo('#height');
getDinamicInfo('#weight');
getDinamicInfo('#age');



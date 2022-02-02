import createElement from "./creatElement.js";

const createFormPerson = (n) => {
    const form = createElement('form', {
        className: 'person',
    });

    const title = createElement('h2', {
        className: 'person__title',
        textContent: `пассажир #${n + 1}`,
    });

    const fildName = createElement('div', {
        className: 'field',
    });

    const labelName = createElement('label', {
        className: 'field__label',
        for: `name${n}`,
        textContent: 'ФИО',
    });

    const inputName = createElement('input', {
        className: "field__input",
        id: `name${n}`,
        name: 'name',
        type: "text",
        placeholder: "Введите ваше ФИО",
        required: true,
    });

//new


    const fildTicket = createElement('div', {
        className: 'field',
    });

    const labelTicket = createElement('label', {
        className: 'field__label',
        //for: `name${n}`,
        textContent: 'Номер билета (10 цифр)',
    });

    const inputTicket = createElement('input', {
        className: "field__input",
        id:'ticket',     //`name${n}`,
        name: 'ticket',
        type: "text",
        placeholder: "Номер билета",
        required: true,
        minLength: "10",
        maxLength: "10",
    });





    fildName.append(labelName, inputName,labelTicket, inputTicket);

    const button = createElement('button', {
        className: 'btn-confirm',
        type: 'submit',
        textContent: 'Подтвердить',
    })

    form.append(title, fildName, button);

    return form;
};


const getFormPerson = (count) => {
    const forms = [];
    if (count > 6) count = 6;
    for (let i = 0; i < count; i++){
        forms.push(createFormPerson(i))
    }
    return forms;
};

export default getFormPerson
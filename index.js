import { el, setChildren } from "./node_modules/redom/dist/redom.es.js";

function wrapper() {
    const cardNumberInput = el("input.input.input__number#cardNumber", {
        id: "cardNumber",
        oninput: updateCardNumber,
        maxlength: 16,
    });

    const cardHolderInput = el("input.input.input__holder#cardHolder", {
        id: "cardHolder",
        oninput: updateCardHolder,
    });

    const cardExpiryInput = el("input.input.input__date#cardExpiry", {
        id: "cardExpiry",
        oninput: updateCardExpiry,
        placeholder: "MM/YY",
        maxlength: 4, // Для формата "MM/YY"
    });

    const cardCvvInput = el("input.input.input__cvv#cardCvv", {
        id: "cardCvv",
        oninput: updateCardCvv,
        maxlength: 3, // Для трехзначного CVV
    });

    const card = el("div.card", [
        el("p.secure", "Secure Checkout"),
        el("div.credit-card", [
            el(
                "span.card__number",
                { id: "displayCardNumber" },
                "xxxx xxxx xxxx xxxx"
            ),
            el("div.card__personal", [
                el("span.card__name", { id: "displayCardHolder" }, "John Doe"),
                el("span.card__date", { id: "displayCardExpiry" }, "04/24"),
            ]),
        ]),
        el("form.form#form", [
            el("div.form__input-wrap.form__input-wrap_holder", [
                el("label.form__label.form__holder-label", "Card Holder"),
                cardHolderInput,
            ]),
            el("div.form__input-wrap.form__input-wrap_number", [
                el("label.form__label.form__number-label", "Card Number"),
                cardNumberInput,
            ]),
            el("div.form__input-wrap.form__input-wrap_date", [
                el("label.form__label.form__date-label", "Card Expiry"),
                cardExpiryInput,
            ]),
            el("div.form__input-wrap.form__input-wrap_cvv", [
                el("label.form__label.form__cvv-label", "CVV"),
                cardCvvInput,
            ]),
            el("button.form__button", "CHECK OUT"),
        ]),
    ]);

    return el("div.wrapper", card);
}

setChildren(document.body, wrapper());

// // Обработчики событий для обновления данных на карточке
// function updateCardNumber(event) {
//     const cardNumber = document.getElementById("displayCardNumber");
//     const input = event.target;
//     cardNumber.textContent = input.value;
// }

// function updateCardHolder(event) {
//     const cardHolder = document.getElementById("displayCardHolder");
//     const input = event.target;
//     cardHolder.textContent = input.value;
// }

// function updateCardExpiry(event) {
//     const cardExpiry = document.getElementById("displayCardExpiry");
//     const input = event.target;
//     cardExpiry.textContent = input.value;
// }

//*Номер карты
function updateCardNumber(event) {
    const cardNumber = document.getElementById("displayCardNumber");
    const input = event.target;
    let value = input.value.replace(/\D/g, ""); // Удалить все буквы

    // Добавить пробел каждые 4 цифры,  $1 будет представлять четыре цифры
    value = value.replace(/(\d{4})/g, "$1 ");
    cardNumber.textContent = value;
}

//*Имя
function updateCardHolder(event) {
    const cardHolder = document.getElementById("displayCardHolder");
    const input = event.target;
    cardHolder.textContent = input.value;
}
//*год карты
function updateCardExpiry(event) {
    const cardExpiry = document.getElementById("displayCardExpiry");
    const input = event.target;
    let value = input.value.replace(/\D/g, ""); // Удалить все не цифровые символы
    if (value.length >= 3) {
        value = value.slice(0, 2) + "/" + value.slice(2);
    }
    cardExpiry.textContent = value;
}

function updateCardCvv(event) {
    // Добавьте логику для обновления CVV, если это необходимо
}

let amountZlotyToConverted = document.querySelector(".js-amountZlotyToConverted");
let formConverted = document.querySelector(".js-formConverted");
let score = document.querySelector(".js-score");
let currencySelector = document.querySelector(".js-currencySelector");

formConverted.addEventListener("submit", (event) => {
    event.preventDefault();
    if (currencySelector.value === "USD") {
        let converter = (amountZlotyToConverted.value * 0.2526)
        score.innerText = `${amountZlotyToConverted.value} zł możesz wymienić na ${converter.toFixed(2)} USD`
    } else if (currencySelector.value === "GBP") {
        let converter = (amountZlotyToConverted.value * 0.2039)
        score.innerText = `${amountZlotyToConverted.value} zł możesz wymienić na ${converter.toFixed(2)} GBP`
    } else {
        let converter = (amountZlotyToConverted.value * 0.2237)
        score.innerText = `${amountZlotyToConverted.value} zł możesz wymienić na ${converter.toFixed(2)} EURO`
    }
});
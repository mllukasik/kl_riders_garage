const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// document.querySelector('html').classList.add('dark')

window.addEventListener("load", (event) => {
    for(const elem of $$(".page")) {
        elem.style = "height: " + window.innerHeight + "px;";
    }
});

function moveTo(name) {
    window.location = name;
}

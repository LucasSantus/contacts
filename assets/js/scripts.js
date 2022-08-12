const body = document.querySelector("body")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => window
    .getComputedStyle(element)
    .getPropertyValue(style)

const light_mode = {
    bg: getStyle(body, "--bg"),
    colorPrimary: getStyle(body, "--color-primary"),
    colorSecondary: getStyle(body, "--color-secondary"),
    colorText: getStyle(body, "--color-text"),
}

const dark_mode = {
    bg: "#202124",
    colorPrimary: "#333333",
    colorSecondary: "#434343",
    colorText: "white"
}

const transformKey = key => "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()

const changeColors = (colors) => Object.keys(colors).map(key => body.style.setProperty(transformKey(key), colors[key]))

checkbox.addEventListener("change", ({target}) => target.checked ? changeColors(dark_mode) : changeColors(light_mode))

const isExistLocalStorage = (key) => localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))

const getValeuLocalStorage = (key) => JSON.parse(localStorage.getItem(key))

checkbox.addEventListener("change", ({target}) => {
    if (target.checked) {
        changeColors(dark_mode) 
        createOrEditLocalStorage('theme', 'dark_mode')
    }
    else {
        changeColors(light_mode)
        createOrEditLocalStorage('theme', 'light_mode')
    }
})

if (!isExistLocalStorage('theme')) createOrEditLocalStorage('theme', 'light_mode')

if (getValeuLocalStorage('theme') === "light_mode") {
    checkbox.removeAttribute('checked')
    changeColors(light_mode);
}
else {
    checkbox.setAttribute('checked', "")
    changeColors(dark_mode);
}
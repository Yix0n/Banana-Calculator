// Theme
let theme = window.localStorage.getItem("theme");

window.onload = () => {
    loadTheme()
    loadLocale()
}

document.getElementById("theme_button").onclick = () => {
    changeTheme()
}

const loadTheme = () => {
    if(theme == undefined) {
        theme = window.localStorage.getItem("theme") || window.matchMedia("(prefers-color-scheme: light)").matches ? "cancer" : "amoled";
    }
    window.localStorage.setItem("theme", theme)
    document.getElementById("themeLink").setAttribute("href", `css/${theme}.css`)
}

const changeTheme = () => {
    if(theme == "cancer") {theme = "amoled"} else
    if(theme == "amoled") {theme = "cancer"} else {
        theme = "amoled"
    }

    document.getElementById("themeLink").setAttribute("href", `css/${theme}.css`)
    window.localStorage.setItem("theme", theme)

}

// Locale

// Locale

const ids = [
    "bth_title",
    "bth_label",
    "bth_button",
    "bth_banana",
    "btw_title",
    "btw_label",
    "btw_button",
    "btw_banana",
    "wtb_title",
    "wtb_label", 
    "wtb_button",
    "htb_title",
    "htb_label",
    "htb_button",
    "theme_button",
    "locale_label",
    "dyk",
    "cm",
    "mm",
    "m",
    "feet",
    "inch",
    "kg",
    "g",
    "t",
    "pound",
    "ounce"
];

const locales = {
    en,
    jp,
    pl,
    de,
};

let locale = window.localStorage.getItem("locale");

const loadLocale = () => {
    if (locale == null) locale = "en";
    changeLocale(locale)
};

const changeLocale = (locale = "en") => {
    document.getElementById("locale_selector").value = locale;
    window.localStorage.setItem("locale", locale)
    ids.forEach((id)=> {
        document.getElementById(id).innerText = locales[locale][id]
    })
};

document.getElementById("locale_selector").onchange = function() {
    locale = this.value
    changeLocale(this.value);
};
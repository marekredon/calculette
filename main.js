// DOM SELECTORS 
const themeSelectors = document.querySelectorAll('input[name="ritem"]')
const keys = document.querySelectorAll('button')
const screen = document.querySelector('.screen')
const root = document.documentElement;
let operatorClicked = false;

// MAIN
// Update colors for each theme
themeSelectors.forEach(e => {
    e.addEventListener("click", () => {
        switch (e.id) {
            case "ritema":
                handleColors(1)
                break;
            case "ritemb":
                handleColors(2)
                break;
            case "ritemc":
                handleColors(3)
                break;
            default:
                console.log("Nope")
        }
    })
})

// Log button clicked
keys.forEach(k => {
    k.addEventListener("click", () => {
        switch (k.value) {
            case "=":
                if(operatorClicked){
                    screen.value = eval(screen.value);
                }
                break;
            case "DEL":
                screen.value = screen.value.slice(0, -1)
                break;
            case "RESET":
                screen.value = "0"
                break;
            default:
                if (screen.value === "0") {
                    return screen.value = k.value
                }
                // Check if operator was clicked
                if(ifOperators(k.value)){
                    operatorClicked = true;
                    // Check if operator is last character
                    if (ifOperators(screen.value.slice(-1))){
                        screen.value = screen.value.slice(0, -1)
                    }
                }
                // Write new character in screen
                screen.value = screen.value + k.value
                break;
        }
    })
})

// SHORTHANDS
const setStyle = (vr, vl) => root.style.setProperty(vr, vl);

function ifOperators (operator) {
    return ["+","-","/","*"].includes(operator)
}

// LIBRARY 

function handleColors(theme) {
    let color = {};
    if (theme === 1) {
        color = colors.first;
    } else if (theme === 2) {
        color = colors.second;
    } else if (theme === 3) {
        color = colors.third;
    } else {
        return 0;
    }
    setStyle('--background-color', color.bg)
    setStyle('--main-color', color.bg_keyboard)
    setStyle('--tab-color', color.btn)
    setStyle('--reset-del-color', color.reset_del)
    setStyle('--reste-del-shadow', color.reste_del_shadow)
    setStyle('--equal-color', color.equal)
    setStyle('--equal-shadow', color.equal_shadow)
    setStyle('--text-btn', color.text_btn)
    setStyle('--contrast-color', color.text_header)
    setStyle('--bg-screen', color.bg_screen)
}


// VARIABLES

const colors = {
    first: {
        bg: "#3b4664",
        bg_keyboard: "#252d44",
        bg_screen: "#181f32",
        btn: "#eae3db",
        reset_del: "#647299",
        equal: "#d13f30",
        text_header: "#ffffff",
        text_reset_del: "#ffffff",
        text_equal: "#ffffff",
        text_btn: "#4b4f5b",
        btn_shadow: "#aea39d",
        reste_del_shadow: "#424e74",
        equal_shadow: "#8f2316"
    },
    second: {
        bg: "#e6e6e6",
        bg_keyboard: "#d3cdcd",
        bg_screen: "#eeeeee",
        btn: "#e5e4e0",
        reset_del: "#388187",
        equal: "#c85401",
        text_header: "#2e2f27",
        text_reset_del: "#ffffff",
        text_equal: "#ffffff",
        text_btn: "#2f2f27",
        btn_shadow: "#a79f94",
        reste_del_shadow: "#1a5d65",
        equal_shadow: "#873b01"
    },
    third: {
        bg: "#17062a",
        bg_keyboard: "#1e0836",
        bg_screen: "#1e0836",
        btn: "#331b4d",
        reset_del: "#56077c",
        equal: "#00decf",
        text_header: "#ffe643",
        text_reset_del: "#ffffff",
        text_equal: "#000000",
        text_btn: "#ffe643",
        btn_shadow: "#851c9c",
        reste_del_shadow: "#ba14f4",
        equal_shadow: "#6dfaf1"
    }
}

//Marek 
/*
Boucles

for (let i = 0; i < themeSelectors.length; i++) {
    console.log(themeSelectors[i]);

}
console.log("For each");
themeSelectors.forEach( e => {
    console.log(e)
})
*/



/*
Calculating
    Number case
    Operator case
    Del case
    Reset case
    Equal case
*/
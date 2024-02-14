const bananaHeight = 20 // cm
const bananaWeight = 0.125 // kg

/**
 * Converts height to another unit
 * @param {number} height - height to be converted
 * @param {string} sourceUnit - source unit
 * @param {string} targetUnit - target unit
 * @returns {number} - recalculated height
 */
const convertHeight = (amount, fromUnit, toUnit) => {
    const lengthConversions = {
        cm: {
            m: amount / 100,
            mm: amount * 10,
            feet: amount * 0.0328084,
            inch: amount * 0.393701,
            banana: amount / bananaWeight,
        },
        m: {
            cm: amount * 100,
            mm: amount * 1000,
            feet: amount * 3.28084,
            inch: amount * 39.3701,
            banana: amount / (bananaHeight * 100),
        },
        mm: {
            cm: amount / 10,
            m: amount / 1000,
            feet: amount * 0.00328084,
            inch: amount * 0.0393701,
            banana: amount / (bananaHeight * 10),
        },
        feet: {
            cm: amount * 30.48,
            m: amount * 0.3048,
            mm: amount * 304.8,
            inch: amount * 12,
            banana: amount / (bananaHeight * 0.393701),
        },
        inch: {
            cm: amount * 2.54,
            m: amount * 0.0254,
            mm: amount * 25.4,
            feet: amount * 0.0833333,
            banana: amount / (bananaHeight * 0.393701),
        },
        banana: {
            cm: amount * bananaHeight,
            m: amount * bananaHeight / 100,
            mm: amount * bananaHeight * 10,
            feet: amount * bananaHeight / 0.0328084,
            inch: amount * bananaHeight / 0.393701,
        }
    };
    
    return lengthConversions[fromUnit][toUnit];
}

/**
 * Converts weight to another unit
 * @param {number} amount - weight to be converted
 * @param {string} fromUnit - source unit
 * @param {string} targetUnit - target unit
 * @returns {number} - recalculated weight
 */
const convertWeight = (amount, fromUnit = "kg", toUnit = "kg") => {
    const weightConversions = {
        kg: {
            g: amount * 1000,
            t: amount / 1000,
            pound: amount * 2.20462,
            ounce: amount * 35.274,
            banana: amount / bananaWeight
        },
        g: {
            kg: amount / 1000,
            t: amount / 1000000,
            pound: amount * 0.00220462,
            ounce: amount * 0.035274,
            banana: amount / (bananaWeight * 1000)
        },
        t: {
            kg: amount * 1000,
            g: amount * 1000000,
            pound: amount * 2204.62,
            ounce: amount * 35274,
            banana: amount / (1000 * bananaWeight)
        },
        pound: {
            kg: amount * 0.453592,
            g: amount * 453.592,
            t: amount * 0.000453592,
            ounce: amount * 16,
            banana: amount / (bananaWeight * 2.20462)
        },
        ounce: {
            kg: amount * 0.0283495,
            g: amount * 28.3495,
            t: amount * 0.0000283495,
            pound: amount * 0.0625,
            banana: amount / (bananaWeight * 35.274)
        },
        banana: {
            kg: amount * bananaWeight,
            g: amount * bananaWeight * 1000,
            t: amount * bananaWeight / 1000,
            pound: amount * bananaWeight * 2.20462,
            ounce: amount * bananaWeight * 35.274
        }
    };
    
    return weightConversions[fromUnit][toUnit];
};

// Obsługa interakcji użytkownika
const htbButton = document.getElementById("htbButton");
const bthButton = document.getElementById("bthButton");
const wtbButton = document.getElementById("wtbButton");
const btwButton = document.getElementById("btwButton");

const factPara = document.getElementById("factPara");

htbButton.onclick = () => { 
    const htbResult = document.getElementById("htbResult");
    const htbInput = document.getElementById("htbInput").value;
    const htbFrom = document.getElementById("htbFrom").value;

    const result = convertHeight(Number(htbInput), htbFrom, "banana");
    
    htbResult.innerText = `= ${result / bananaHeight} bananas`;
};

bthButton.onclick = () => { 
    const bthResult = document.getElementById("bthResult");
    const bthInput = document.getElementById("bthInput").value;
    const bthTo = document.getElementById("bthTo").value;

    const result = convertHeight(Number(bthInput) * bananaHeight, "banana", bthTo);

    bthResult.innerText = `= ${result} ${bthTo}`;
};

wtbButton.onclick = () => {
    const wtbResult = document.getElementById("wtbResult");
    const wtbInput = document.getElementById("wtbInput").value;
    const wtbFrom = document.getElementById("wtbFrom").value;

    const result = convertWeight(Number(wtbInput), wtbFrom, "banana");

    wtbResult.innerText = `= ${result / bananaWeight} bananas`;
};

btwButton.onclick = () => { 
    const btwResult = document.getElementById("btwResult");
    const btwInput = document.getElementById("btwInput").value;
    const btwTo = document.getElementById("btwTo").value;

    const result = convertWeight(Number(btwInput) * bananaWeight, "banana", btwTo);

    btwResult.innerText = `= ${result} ${btwTo}`;
};

factPara.innerText = factList[Math.floor(Math.random() * factList.length)];
 
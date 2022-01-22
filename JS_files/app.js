import DonutMaker from "./DonutMaker";


renderPager();

function renderPage(){
    runMyDonuts();
}

function runMyDonuts(){

    //create donut obj
    const myDonutMakerObj = new DonutMaker();

    //declare all const button var's 
    const donutButton = document.querySelector('#donutButton');
    const autoClickButton = document.querySelector('#buyAutoClick');
    const donutMultiplierButton = document.querySelector('#buyMulitplierButton');
    const buyBakerButton = document.querySelector('#buybaker');
    const buyBakeryButton = document.querySelector('#buybakery');
    const resetButton = document.querySelector('#resetButton');

    //add in all event listeners below for all the buttons createde from above

    donutButton.addEventListener("click", () => {
        
        //display donuts
        const donutSection = document.createElement('section');
        const diplayAllDonuts = document.createElement('p');
        diplayAllDonuts.innerText = "Donuts: " + myDonutMakerObj.donutCount;
        donutSection.appendChild(diplayAllDonuts);
    });

    autoClickButton.addEventListener("click", () => {
        
        //display autoClicker
        const autoClickSection = document.createElement('section');
        const diplayAllAutoClickers = document.createElement('p');
        diplayAllAutoClickers.innerText = "AutoClickers: " + myDonutMakerObj.autoClickerCount;
        displayAllAutoClickers.innerText = "AutoClicker price: " + myDonutMakerObj.getAutoClickersCost
        autoClickSection.appendChild(diplayAllDonuts);
    });

    donutMultiplierButton.addEventListener("click", () => {
        
        //display multiplier 
        const multiplierSection = document.createElement('section');
        const diplayAllMultipliers = document.createElement('p');
        diplayAllMultipliers.innerText = "AutoClickers: " + myDonutMakerObj.getDonutMultiplierCount;
        diplayAllMultipliers.innerText = "AutoClicker price: " + myDonutMakerObj.getDonutMultipliersCost
        multiplierSection.appendChild(diplayAllMultipliers);
    });

    buyBakerButton.addEventListener("click", () => {
        
        //display bakers
        const bakersSection = document.createElement('section');
        const diplayAllBakers = document.createElement('p');
        diplayAllBakers.innerText = "AutoClickers: " + myDonutMakerObj.getBakerCount;
        diplayAllBakers.innerText = "AutoClicker price: " + myDonutMakerObj.getBakerCost;
        bakersSection.appendChild(diplayAllBakers);
    });

    buyBakeryButton.addEventListener("click", () => {
        
        //display bakeries 
        const bakerySection = document.createElement('section');
        const diplayAllBakeries = document.createElement('p');
        diplayAllBakeries.innerText = "AutoClickers: " + myDonutMakerObj.getBakerCount;
        diplayAllBakeries.innerText = "AutoClicker price: " + myDonutMakerObj.getBakerCost;
        bakerySection.appendChild(diplayAllBakeries);
    });

    resetButton.addEventListener('click', () => {
        //reset 
        myDonutMakerObj.resetGame;
    });
}


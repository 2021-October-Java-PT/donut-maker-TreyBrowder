import DonutMaker from "./DonutMaker";

renderPage();

function renderPage(){
    runMyDonuts();
}

function runMyDonuts(){

    //create donut obj
    const myDonutMakerObj = new DonutMaker();
    
    //declare all const button var's 
    const donutButton = document.querySelector('#donutButton');
    const donutDisplay = document.querySelector('#donutDisplay');

    const autoClickButton = document.querySelector('#buyAutoClick');
    const autoClickerDisplay = document.querySelector('#autoClickerDisplay');

    const donutMultiplierButton = document.querySelector('#buyMultiplierButton');
    const multiplerDisplay = document.querySelector('#multiplierDisplay');

    const buyBakerButton = document.querySelector('#buyBakerButton');
    const bakerDisplay = document.querySelector('#bakersDisplay');

    const buyBakeryButton = document.querySelector('#buyBakeryButton');
    const bakeryDisplay = document.querySelector('#bakeriesDisplay');

    const resetButton = document.querySelector('#resetButton');

    //add in all event listeners below for all the buttons createde from above

    donutButton.addEventListener("click", () => {
        //display donuts
        myDonutMakerObj.addDonut();
        donutDisplay.innerText = myDonutMakerObj.donutCount;

        //autoclicker fuctionality
        myDonutMakerObj.autoClickFunction();
        
        //baker functionality
        myDonutMakerObj.autoBakerFunction();

        //bakery functionality
        myDonutMakerObj.autoBakeryFunction();
    });

    autoClickButton.addEventListener("click", () => {
        //display autoClicker
        myDonutMakerObj.addAutoClicker();
        autoClickerDisplay.innerText = myDonutMakerObj.autoClickerCount;
    });

     
    
    donutMultiplierButton.addEventListener("click", () => {  
        //display multiplier 
        myDonutMakerObj.addDonutMultipliers();
        multiplerDisplay.innerText = myDonutMakerObj.donutMultipliersCount;
    });

    buyBakerButton.addEventListener("click", () => {
        
        console.log('buy baker button firing!');
        
        //display bakers
        myDonutMakerObj.addBaker();
        bakerDisplay.innerText = myDonutMakerObj.bakerCount;  
    });

    buyBakeryButton.addEventListener("click", () => {
        //display bakeries
        myDonutMakerObj.addBakery();
        bakeryDisplay.innerText = myDonutMakerObj.bakeryCount; 
    });

    resetButton.addEventListener('click', () => {
        //reset 
        myDonutMakerObj.resetGame();
        window.location.reload();
    });
  
}

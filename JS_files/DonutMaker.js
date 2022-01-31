class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickersCost = 20;
        this.donutMultipliersCount = 0;
        this.donutMultipliersCost = 30;
        this.donutsPerMin = 0;
        this.bakerCount = 0;
        this.bakerCost = 100;
        this.bakeryCount = 0;
        this.bakeryCost = 1000;
    }

    resetGame(){
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickersCost = 20;
        this.donutMultipliersCount = 0;
        this.donutMultipliersCost = 10;
        this.donutsPerMin = 0;
        this.bakerCount = 0;
        this.bakerCost = 100;
        this.bakeryCount = 0;
        this.bakeryCost = 1000;
        }
        
        addDonut(){
            if (this.donutMultipliersCount == 0) {
                this.donutCount += 1;
            }
            else {
                this.donutCount += Math.pow(1.2, this.donutMultipliersCount);
                this.donutCount = Math.round(this.donutCount);
            }
        }

        getDonutCount(){
            if (this.donutCount < 0) {
                this.donutCount = 0;
                return this.donutCount;
            }
            else {
                return this.donutCount;
            }
        }
       
        addAutoClicker(){
            if (this.donutCount >= this.autoClickersCost) {
                this.donutCount -= this.autoClickersCost;
                this.autoClickerCount += 1;
                this.autoClickersCost *= 1.15;
                this.autoClickersCost = Math.round(this.autoClickersCost);
            }
            else {
                console.log('You can not afford it ):');
            }
        }

        getAutoClickerCount(){
            if (this.autoClickerCount < 0) {
                return this.autoClickerCount = 0;
            }
            else {
                return this.autoClickerCount;
            }
        }

        getAutoClickersCost(){
            return this.autoClickersCost;
        }

        autoClickFunction() {
            if (this.autoClickerCount >= 1) {
              setInterval(() => {
                this.donutCount += (1 * this.autoClickerCount);
              }, 20000);
            }
          }

        addDonutMultipliers(){
            if (this.donutCount >= this.donutMultipliersCost) {
                this.donutCount -= this.donutMultipliersCost;
                this.donutMultipliersCount += 1;
                this.donutMultipliersCost *= 1.35;
                this.donutMultipliersCost = Math.round(this.donutMultipliersCost);
            }
            else {
                console.log('You can not afford it ):');
            }
        }

        getDonutMultiplierCount(){
            if (this.donutMultiplierCount < 0) {
                this.donutMultiplierCount = 0;
                return this.donutMultiplierCount;
            }
            else {
                return this.donutMultiplierCount;
            }
        }

        getDonutMultipliersCost(){
            return this.donutMultipliersCost;
        }

        addBaker(){
            if (this.donutCount >= this.bakerCost) {
                this.donutCount -= this.bakerCost;
                this.bakerCount += 1;
                this.bakerCost *= 1.35;
                this.bakerCost = Math.round(this.bakerCost);
            }
            else {
                console.log('You can not afford it ):');
            }
        }

        getBakerCount(){
            return this.bakerCount;
        }

        getBakerCost(){
            return this.bakerCost;
        }

        autoBakerFunction() {
            if (this.BakerCount >= 1) {
              setInterval(() => {
                this.donutCount += (1 * this.autoBakerCount);
              }, 10000);
            }
          }

        addBakery(){
            if (this.donutCount >= this.bakeryCost) {
                this.donutCount -= this.bakeryCost;
                this.bakeryCount += 1;
                this.bakeryCost *= 1.75;
                this.bakeryCost = Math.round(this.bakeryCost);
            }
            else {
                console.log('You can not afford it ):');
            }
        }

        getBakeryCount(){
            return this.bakeryCount;
        }

        getBakeryCost(){
            return this.bakeryCost;
        }

        autoBakeryFunction() {
            if (this.BakeryCount >= 1) {
              setInterval(() => {
                this.donutCount += (1 * this.autoBakeryCount);
              }, 5000);
            }
          }
    
}

export default DonutMaker;
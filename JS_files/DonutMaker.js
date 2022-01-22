class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickersCost = 20;
        this.donutMultiplierCount = 0;
        this.donutMultipliersCost = 10;
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
        this.donutMultiplierCount = 0;
        this.donutMultipliersCost = 10;
        this.donutsPerMin = 0;
        this.bakerCount = 0;
        this.bakerCost = 100;
        this.bakeryCount = 0;
        this.bakeryCost = 1000;
        }

        clickDonut(){
            this.donutCount += 1 * this.donutMultiplierCount;
        }
        
        addDonut(){
            if (this.donutMultiplierCount == 0) {
                this.donutCount += 1;
            }
            else {
                this.donutCount += Math.pow(1.2, this.donutMultiplierCount);
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
            if (this.donutCount >= this.autoClickerCost) {
                this.donutCount -= this.autoClickerCost;
                this.myAutoClickers += 1;
                this.autoClickersCost *= .15;
                this.autoClickersCost = Math.round(this.autoClickerCost);
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
              }, 15000);
            }
          }

        addDonutMultiplier(){
            if (this.donutCount >= this.donutMultipliersCost) {
                this.donutCount -= this.donutMultipliersCost;
                this.donutMultiplierCount += 1;
                this.donutMultipliersCost *= .2;
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

        getDonutsPerMin(){
            if (this.donutMultiplierCount == 0) {
                this.donutsPerMin = this.myAutoClickers * 60;
                return this.donutsPerMin;
            }
            else {
                this.donutsPerMin = this.autoClickerCount * Math.pow(1.2, this.donutMultiplierCount) * 60;
                return this.donutsPerMin;
            }
        }

        addBaker(){
            if (this.donutCount >= this.bakerCost) {
                this.donutCount -= this.bakerCost;
                this.baker += 1;
                this.bakerCost *= .2;
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
            if (this.autoBakerCount >= 1) {
              setInterval(() => {
                this.donutCount += (1 * this.autoBakerCount);
              }, 2000);
            }
          }

        addBakery(){
            if (this.donutCount >= this.bakeryCost) {
                this.donutCount -= this.bakeryCost;
                this.bakeryCount += 1;
                this.bakeryCost *= .5;
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
            if (this.autoBakeryCount >= 1) {
              setInterval(() => {
                this.donutCount += (1 * this.autoBakeryCount);
              }, 500);
            }
          }
    
}

export default DonutMaker;
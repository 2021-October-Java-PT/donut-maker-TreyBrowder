class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickersCost = 20;
        this.donutMultiplierCount = 0;
        this.donutMultipliersCost = 10;
        this.donutsPerClick = 1;
        this.donutsPerMin = 0;
        this.bakerCount = 0;
        this.bakerCost = 100;
        this.bakeryCount = 0;
        this.bakeryCost = 1000;
    }

    resetGame(){
        this.donutCount = 0;
        this.myAutoClickers = 0;
        this.autoClickersCost = 100;
        this.donutMultiplierCount = 0;
        this.donutMultipliersCost = 10;
        this.donutsPerClick = 1;
        this.donutsPerMin = 0;
        this.bakery = 0;
        this.myBakeries = 0;
        this.bakeryUpgradeCost = 1000;
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

        autoAddDonut(obj){
            if (obj.donutMultiplierCount == 0) {
                obj.donutCount += obj.autoClickerCount;
            }
            else {
                obj.donutCount += (obj.autoClickerCount * Math.pow(1.2, obj.donutMultiplierCount));
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

        addDonutMultiplier(){
            if (this.donutCount >= this.donutMultipliersCost && this.donutMultiplierCount < 11) {
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

        getDonutsPerClick(){
            if (this.donutMultiplierCount == 0) {
                this.donutsPerClick = 1;
                return this.donutsPerClick;
            }
            else {
                this.donutsPerClick = Math.pow(1.2, this.donutMultiplierCount);
                return this.donutsPerClick;
            }
        }

        getDonutsPerMin(){
            if (this.donutMultiplierCount == 0) {
                this.donutsPerMin = this.myAutoClickers * 60;
                return this.donutsPerMin;
            }
            else {
                this.donutsPerMin = this.myAutoClickers * Math.pow(1.2, this.donutMultiplierCount) * 60;
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

        getBakerCost(){
            return this.bakerCost;
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
    
}

export default DonutMaker;
class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.myAutoClickers = 0;
        this.autoClickersCost = 100;
        this.myDonutMultipliers = 0;
        this.donutMultipliersCost = 10;
        this.donutsPerClick = 1;
        this.donutsPerMin = 0;
        this.bakeryLvl= 1;
        this.bakeryUpgradeCost = 1000;
    }

    resetGame = () => {
        this.donutCount = 0;
        this.myAutoClickers = 0;
        this.autoClickersCost = 100;
        this.myDonutMultipliers = 0;
        this.donutMultipliersCost = 10;
        this.donutsPerClick = 1;
        this.donutsPerMin = 0;
        this.bakeryLvl = 1;
        this.bakeryUpgradeCost = 1000;
        };

        addDonut = () => {
            if (this.myDonutMultipliers == 0) {
                this.donutCount += 1;
            }
            else {
                this.donutCount += Math.pow(1.2, this.myDonutMultipliers);
            }
        };

        getDonutCount = () => {
            if (this.donutCount < 0) {
                this.donutCount = 0;
                return this.donutCount;
            }
            else {
                return this.donutCount;
            }
        };

        autoAddDonut = (obj) => {
            if (obj.myDonutMultipliers == 0) {
                obj.donutCount += obj.myAutoClickers;
            }
            else {
                obj.donutCount += (obj.myAutoClickers * Math.pow(1.2, obj.myDonutMultipliers));
            }
        };
       
        addAutoClicker = () => {
            if (this.donutCount >= this.autoClickersCost && this.bakeryLvl > this.myAutoClickers) {
                this.donutCount -= this.autoClickersCost;
                this.myAutoClickers += 1;
                this.autoClickersCost *= .1;
                this.autoClickersCost = Math.round(this._utoClickersCost);
            }
            else {
                console.log('You can not afford it ):');
            }
        };

        getMyAutoClickers = () => {
            if (this.myAutoClickers < 0) {
                return this.myAutoClickers = 0;
            }
            else {
                return this.myAutoClickers;
            }
        };

        getAutoClickersCost = () => {
            return this.autoClickersCost;
        };

        addDonutMultiplier = () => {
            if (this.donutCount >= this.donutMultipliersCost && this.myDonutMultipliers < 11) {
                this.donutCount -= this.donutMultipliersCost;
                this.myDonutMultipliers += 1;
                this.donutMultipliersCost *= .2;
                this.donutMultipliersCost = Math.round(this.donutMultipliersCost);
            }
            else {
                console.log('You can not afford it ):');
            }
        };

        getMyDonutMultipliers = () => {
            if (this.myDonutMultipliers < 0) {
                this.myDonutMultipliers = 0;
                return this.myDonutMultipliers;
            }
            else {
                return this.myDonutMultipliers;
            }
        };

        getDonutMultipliersCost = () => {
            return this.donutMultipliersCost;
        };

        getDonutsPerClick = () => {
            if (this.myDonutMultipliers == 0) {
                this.donutsPerClick = 1;
                return this.donutsPerClick;
            }
            else {
                this.donutsPerClick = Math.pow(1.2, this.myDonutMultipliers);
                return this.donutsPerClick;
            }
        };

        getDonutsPerMin = () => {
            if (this.myDonutMultipliers == 0) {
                this.donutsPerMin = this.myAutoClickers * 60;
                return this.donutsPerMin;
            }
            else {
                this.donutsPerMin = this.myAutoClickers * Math.pow(1.2, this.myDonutMultipliers) * 60;
                return this.donutsPerMin;
            }
        };

        addBakeryLevel = () => {
            if (this.donutCount >= this.bakeryUpgradeCost) {
                this.donutCount -= this.bakeryUpgradeCost;
                this.bakeryLvl += 1;
                this.bakeryUpgradeCost *= .5;
            }
            else {
                console.log('You can not afford it ):');
            }
        };

        getBakeryLevel = () => {
            return this.bakeryLvl;
        };

        getBakeryUpgradeCost = () => {
            return this.bakeryUpgradeCost;
        };
    
};
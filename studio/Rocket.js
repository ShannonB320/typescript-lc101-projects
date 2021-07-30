"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(rocketName, rocketCapacity) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = rocketName;
        this.totalCapacityKg = rocketCapacity;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalMass = 0;
        for (var i = 0; i < this.cargoItems.length; i++) {
            totalMass += this.cargoItems[i].massKg;
        }
        return totalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var astronautTotalMass = 0;
        for (var i = 0; i < this.astronauts.length; i++) {
            astronautTotalMass += this.astronauts[i].massKg;
        }
        var currentMass = this.sumMass(this.cargoItems) + astronautTotalMass;
        return currentMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;

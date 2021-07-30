import { Payload } from './Payload';
import { Astronaut} from './astronaut';
import { Cargo } from './cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(rocketName:string, rocketCapacity:number) {
        this.name = rocketName;
        this.totalCapacityKg = rocketCapacity;
    }

    sumMass( items: Payload[] ): number {
        let totalMass = 0;
        for (let i=0; i < this.cargoItems.length; i++) {
            totalMass += this.cargoItems[i].massKg;
        }
        return totalMass;
    }

    currentMassKg(): number {
        let astronautTotalMass = 0;
        for (let i=0; i < this.astronauts.length; i++) {
            astronautTotalMass += this.astronauts[i].massKg;        
        }
        let currentMass = this.sumMass(this.cargoItems) + astronautTotalMass;
        return currentMass;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }

 }
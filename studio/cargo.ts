import { Payload } from './Payload';

export class Cargo implements Payload {
    massKg: number;
    material: string;

    constructor(cargoMass:number, cargoMaterial:string) {
        this.massKg = cargoMass;
        this.material = cargoMaterial;
    }
 }
import { Spacecraft, ContainerShip } from "./base-ship";

export class MelniumFalcon extends Spacecraft implements ContainerShip{
   
    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 4
    }

    jumpIntoHyperspace(){
        if(Math.random() > 0.5){
            super.jumpIntoHyperspace()
        }else{
            console.log('Failed to jump into hyperspace')
        }
    }
}
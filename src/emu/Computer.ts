import { CPU } from "./components/CPU";
import { Instuction } from "./Instruction";

export { Computer };
import { computerStore } from "../stores.js";


class Computer {
    cpu: CPU;
    clock: NodeJS.Timer;

    program: Array<Instuction>;

    onTick: (Computer) => void

    constructor(onTick: (Computer) => void) {
        this.cpu = new CPU(this.clockCalback, this);
        this.onTick = onTick;
    }

    clockCalback(computer : Computer) {
        computerStore.set(computer);
    }

    setCallback(onTick: (Computer) => void) {
        this.onTick = onTick;
    }
    setProgram(program: string) {
        this.program = program.split(/\r?\n/).map((line) => new Instuction(line));
        this.cpu.setProgram(this.program);
        computerStore.set(this);
    }

    start() {
        this.clock = setInterval(() => this.cpu.clock(), 250);
    }

    reset(){
        this.cpu.reset();
        computerStore.set(this);
    }

    stop() {
        clearInterval(this.clock)
        this.clock = undefined;
        computerStore.set(this);
    }

    singleStep() {
        this.cpu.clock();
    }
}
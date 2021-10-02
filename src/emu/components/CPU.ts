import { ALU } from "./ALU";
import { Counter } from "./Counter";
import type { Instuction } from "../Instruction";
import { Register } from "./Register";
import type { Computer } from "../Computer";

export { CPU };

class CPU {
    a: Register
    b: Register
    out: Register
    flags: Register;

    pc: Counter

    program: Array<Instuction>

    alu: ALU

    computer: Computer

    callback: (Computer) => void

    constructor(callback: (Computer) => void, computer: Computer) {
        this.a = new Register('A');
        this.b = new Register('B');
        this.out = new Register('OUT');
        this.flags = new Register('FLAGS');

        this.pc = new Counter('PC');
        this.program = [];
        this.alu = new ALU(this.a, this.b, this.flags)

        this.computer = computer;

        this.callback = callback;
    }

    reset() {
        this.a.reset();
        this.b.reset();
        this.out.reset();
        this.flags.reset();
        this.pc.reset();
    }

    setProgram(program: Array<Instuction>) {
        this.program = program;
        this.reset()
    }

    clock() {
        let instruction = this.program[this.pc.getValue()];
        console.log(instruction)
        this.pc.increment();

        let reg: Register;
        switch (instruction.register) {
            case 'A':
                reg = this.a;
                break;
            case 'B':
                reg = this.b;
                break;
            case 'X':
                reg = new Register('X');
        }

        switch (instruction.opcode) {
            case 'OUT':
                this.out.setValue(this.a.getValue());
                break;
            case 'LD':
                reg.setValue(instruction.value);
                break;
            case 'ADD':
                reg.setValue(this.alu.add());
                break;
            case 'SUB':
                reg.setValue(this.alu.sub());
                break;
            case 'JP':
                console.log(this.flags.getValue())
                if (instruction.carry && this.flags.getValue() === 1 || !instruction.carry) {
                    console.log('JUMPING')
                    this.pc.setValue(instruction.value);
                }
                break;
        }

        if (instruction.opcode !== 'SUB') {
            this.alu.setFlags();
        }

        this.callback(this.computer);
    }
}
import type { Register } from "./Register";

export { ALU };

class ALU {
    a: Register
    b: Register

    flags: Register;

    constructor(a: Register, b: Register, flags: Register) {
        this.a = a;
        this.b = b;
        this.flags = flags;
    }

    add() {
        let value = this.a.getValue() + this.b.getValue();
        this.flags.setValue(value > 15 ? 1 : 0);
        return value & 15;
    }

    setFlags() {
        let value = this.a.getValue() + this.b.getValue();
        this.flags.setValue(value > 15 ? 1 : 0);
    }

    sub() {
        let value = (this.a.getValue() - this.b.getValue());
        this.flags.setValue(value >= 0 ? 1 : 0);
        return value & 15;
    }
}
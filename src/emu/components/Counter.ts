import { Register } from "./Register";

export { Counter };

class Counter extends Register {
    increment() {
        this.value++;
    }
}
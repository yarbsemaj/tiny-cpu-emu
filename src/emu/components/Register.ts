export { Register };

class Register {
    value: number
    name: string

    constructor(name: string) {
        this.name = name;
        this.reset();
    }

    reset(){
        this.value = 0;
    }

    setValue(value : number){
        console.log (`${this.name} ${value}`)
        this.value = value;
    }

    getValue(){
        return this.value;
    }
}
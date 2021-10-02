export { Instuction };

class Instuction {
    opcode: string
    carry: boolean
    register: string
    value: number

    constructor(line: string) {
        this.parse(line);
    }

    toString() :string{
        let returnValue = this.opcode;
        if(returnValue.length == 2){
            returnValue += " ";
        }

        if(this.carry){
            returnValue += " C";
        }

        if(this.register){
            returnValue += " " + this.register;
        }

        if(this.value !== undefined){
            returnValue += " " + this.value.toString(16).toUpperCase();
        }

        return returnValue
    }


    parse(line: string) {
        let instruction = line.split(/\s+/);
        switch (instruction[0]) {
            case 'OUT':
                this.opcode = 'OUT';
                break;
            case 'LD':
                this.opcode = 'LD';
                this.register = instruction[1];
                this.value = parseInt(instruction[2], 16);
                break;
            case 'ADD':
            case 'SUB':
                this.opcode = instruction[0];
                this.register = instruction[1];
                break;
            case 'JP':
                this.opcode = 'JP';
                if (instruction[1] === 'C') {
                    this.carry = true;
                    this.value = parseInt(instruction[2], 16);
                }
                else {
                    this.carry = false;
                    this.value = parseInt(instruction[1], 16);
                }
                break;
            default:
                throw new Error('no-such-instruction')
        }
    }
}
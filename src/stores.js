import { writable } from 'svelte/store';
import { Computer } from './emu/Computer';

let computer = new Computer((newComputer) => {
    computerStore.set(newComputer);
});

export const computerStore = writable(computer);
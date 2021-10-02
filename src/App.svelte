<script lang="ts">
	import "bootswatch/dist/darkly/bootstrap.min.css";
	import Fa from "svelte-fa";
	import About from './About.svelte'
	import {
		faPause,
		faPlay,
		faStepForward,
		faRedo,
	} from "@fortawesome/free-solid-svg-icons";

	import type { Computer } from "./emu/Computer.js";
	import Register from "./Components/Register.svelte";

	import { computerStore } from "./stores.js";
	import programs from "./program.json";

	let computer: Computer;

	let programIndex = 0;

	computerStore.subscribe((storeComputer) => {
		computer = storeComputer;
	});

	changeProgam();

	function changeProgam() {
		let program = Object.values(programs)[programIndex];
		computer.setProgram(program);
	}
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3 px-3">
	<a class="navbar-brand" href="#">Tiny CPU EMU</a>
	<button
		class="navbar-toggler"
		type="button"
		data-bs-toggle="collapse"
		data-bs-target="#navbarSupportedContent"
		aria-controls="navbarSupportedContent"
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<span class="navbar-toggler-icon" />
	</button>

	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item active">
				<a class="nav-link" data-bs-toggle="modal" data-bs-target="#aboutModal">About</a>
			</li>
		</ul>
	</div>
</nav>

<main>
	<About />
	<div class="container">
		<div class="row">
			<div class="col md-7">
				<Register register={computer.cpu.out} LED={true} />
				<Register register={computer.cpu.a} />
				<Register register={computer.cpu.b} />
				<Register register={computer.cpu.pc} />
				<Register register={computer.cpu.flags} />
				<div class="mt-3">
					{#if computer.clock}
						<button
							class="btn btn-danger"
							on:click={() => computer.stop()}
							><Fa icon={faPause} /> Pause</button
						>
					{:else}
						<button
							class="btn btn-success"
							on:click={() => computer.start()}
							><Fa icon={faPlay} /> Start</button
						>
					{/if}
					<button
						class="btn btn-primary"
						on:click={() => computer.singleStep()}
						><Fa icon={faStepForward} /> Step</button
					>
					<button
						class="btn btn-info"
						on:click={() => computer.reset()}
						><Fa icon={faRedo} /> Reset</button
					>
				</div>
			</div>
			<div class="col md-7">
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label"
						>Program</label
					>
					<select
						bind:value={programIndex}
						on:change={() => {
							changeProgam();
						}}
						class="form-select form-select-lg mb-3"
						aria-label=".form-select-lg example"
					>
						{#each Object.keys(programs) as programName, i}
							<option value={i}>
								{programName}
							</option>
						{/each}
					</select>
				</div>
				<ul class="list-group">
					{#each computer.cpu.program as programLine, i}
						<li
							class="list-group-item {computer.cpu.pc.value === i
								? 'active'
								: ''}"
						>
							<code>{programLine.toString()}</code>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</main>

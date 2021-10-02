<script lang="ts">
	import type { Register } from "../emu/components/Register";
	import Led from "./LED.svelte";
	export let register: Register;
	export let LED = false;
</script>

<div class="card mb-1">
	<div class="card-body">
		<h4 class="card-title">Register {register.name}</h4>
		<div>Value {register.value}</div>

		{#if LED}
			<Led active={!!(register.value & 8)} />
			<Led active={!!(register.value & 4)} />
			<Led active={!!(register.value & 2)} />
			<Led active={!!(register.value & 1)} />
		{:else}
			{#if register.value & 8}
				1
			{:else}
				0
			{/if}
			{#if register.value & 4}
				1
			{:else}
				0
			{/if}
			{#if register.value & 2}
				1
			{:else}
				0
			{/if}
			{#if register.value & 1}
				1
			{:else}
				0
			{/if}
		{/if}
	</div>
</div>

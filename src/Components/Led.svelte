<script lang="ts">
    export let active: boolean;
</script>

<div
    class={`rounded-circle ${active ? "bg-danger" : "bg-secondary"} d-inline-block`}
    style="width: 25px; height: 25px"
/>

<script lang="ts">
	export let disabled: boolean = false
</script>

<button {disabled} class="bg-pale disabled:opacity-60 transition-opacity rounded-full py-[6px] px-7 text-blue font-prompt text-[11.25px] tracking-[1px] font-bold uppercase">Submit</button>

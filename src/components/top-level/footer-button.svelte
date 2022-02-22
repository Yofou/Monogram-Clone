<script>
	export let disabled = false
</script>

<button {disabled} class="bg-pale font-prompt font-semibold tracking-[1px] text-[.75em] uppercase px-6 py-[5px] text-[#212529] disabled:opacity-60 rounded-full">
	<slot />
</button>

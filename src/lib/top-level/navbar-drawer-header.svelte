<script>
	import Monogram from "$lib/icons/monogram.svelte";
	import NavClose from "$lib/icons/nav-close.svelte";
	import { isNavDrawerOpen } from "$lib/store";
</script>

<div class="w-full flex text-pale px-[22.5px] py-7 items-center justify-between">
	<Monogram />
	<button on:click={() => $isNavDrawerOpen = false}>
		<NavClose />
	</button>
</div>

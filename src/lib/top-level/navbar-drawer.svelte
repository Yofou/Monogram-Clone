<script lang="ts">
	import { MAX_OPACITY, backgroundFade } from "$lib/transition/backgroundFade";
	import { fly } from "svelte/transition"
	import { isNavDrawerOpen } from "$lib/store"
	import { clickOutside } from "svelte-use-click-outside";
	import NavbarDrawerHeader from "./navbar-drawer-header.svelte";
	import NavbarDrawerBody from "./navbar-drawer-body.svelte";

	const flyOptions = { x: -350, opacity: 1 }
	const onKeyUp = (e: KeyboardEvent) => {
		if (e.key === "Escape") $isNavDrawerOpen = false
	}
</script>

<svelte:window on:keyup={onKeyUp} />

{#if $isNavDrawerOpen}
	<aside 
		class="fixed top-0 left-0 w-full h-full bg-[#000]/[var(--opacity)] z-20" style="--opacity: {MAX_OPACITY}" 
		transition:backgroundFade={{ duration: 200 }}
	>
		<section 
			class="bg-blue w-[350px] h-full" 
			use:clickOutside={() => $isNavDrawerOpen = false}
			in:fly={{ ...flyOptions, duration: 350 }}
			out:fly={{ ...flyOptions, duration: 150 }}
		>
			<NavbarDrawerHeader />
			<NavbarDrawerBody />
		</section>
	</aside>
{/if}

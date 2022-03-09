<script lang="ts">
	import { clickOutside } from "svelte-use-click-outside"
	import CartDrawerHeader from "./cart-drawer-header.svelte";
	import CartDrawerContent from "./cart-drawer-content.svelte";
	import CartDrawerFooter from "./cart-drawer-footer.svelte";
	import { isCartOpen } from "$lib/store";
	import { fly } from "svelte/transition"
	import { MAX_OPACITY, backgroundFade } from "$lib/transition/backgroundFade";	
	

	const onKeyUp = (event: KeyboardEvent) => {
		if (event.key !== "Escape") return
		$isCartOpen = false
	}
</script>

<svelte:window on:keyup={onKeyUp} />
{#if $isCartOpen}
	<aside class="fixed w-full h-full z-30 bg-[#000]/[var(--opacity)]" style="--opacity: {MAX_OPACITY}" transition:backgroundFade={{ duration: 300 }}>
		<section 
			in:fly={{ x: 350, opacity: 1, duration: 350 }} 
			out:fly={{ x: 350, opacity: 1, duration: 150 }} 
			use:clickOutside={() => $isCartOpen = false}
			class="fixed top-0 right-0 w-[350px] h-full bg-white grid grid-cols-1 grid-rows-[max-content,1fr,max-content]"
		>
			<CartDrawerHeader />
			<CartDrawerContent />
			<CartDrawerFooter />
		</section>
	</aside>
{/if}

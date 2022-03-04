<script lang="ts">
	import Cart from "$lib/icons/cart.svelte";
	import { isCartOpen } from "$lib/store";
	import Monogram from "$lib/icons/monogram.svelte";
	import NavbarDropdown from "./navbar-dropdown.svelte";
	import type { NavBarDropDownOption } from "./navbar-dropdown.svelte"

	const options: NavBarDropDownOption[] = [
		{ name: "photo editing" },
		{ name: "video & filmmaking" },
		{ name: "music & audio" },
		{ name: "virtual production" }
	]
</script>

<nav class="fixed top-4 left-4 w-[calc(100vw-30px)] h-[53px] bg-blue text-pale text-[.8rem] tracking-[2px] uppercase font-prompt font-light p-[7.5px] grid items-center grid-cols-[max-content,1fr,repeat(6,max-content)] gap-[22.5px] box-shadow">
	<a href="/">
		<Monogram />
	</a>
	<a href="/" class="col-start-3">How it works</a>
	<NavbarDropdown {options}>Workflows</NavbarDropdown>
	<a href="/">Download</a>
	<a href="/">Support</a>
	<a href="/" class="!font-bold">Shop</a>
	<button on:click={() => $isCartOpen = !$isCartOpen} class="justify-self-end mr-[7.5px]">
		<Cart />
	</button>
</nav>

<style>
	.box-shadow {
		box-shadow: 1px 11px 35px rgba(0,0,0,.15);
	}

	a:hover {
		@apply text-red-300;
	}
</style>

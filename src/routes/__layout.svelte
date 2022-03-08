<script lang="ts">
	import "$lib/main.css"
	import CartDrawer from "$lib/top-level/cart-drawer.svelte";
	import Footer from "$lib/top-level/footer.svelte"
	import NavBar from "$lib/top-level/navbar.svelte"
</script>


<main class="w-full h-auto">
	<slot />
</main>

<Footer />

<NavBar />
<CartDrawer/>

<style global> 
	body {
		@apply grid grid-rows-[1fr,max-content];
		grid-template-areas: 
			"main" 
			"footer";
	}

	main { grid-area: main; }
	footer { grid-area: footer; }
</style>

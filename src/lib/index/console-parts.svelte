<script>
	import Product from "./product.svelte";
	import { parts } from "./console-parts";
</script>

<section class="w-full min-h-[800px] grid gap-[50px] justify-center grid-cols-1 md:grid-cols-[repeat(3,minmax(0,336px))] grid-rows-2 px-10 py-[45px] bg-[#f0efed]">
	{#each parts as part}
		<Product {...part} --height="336px" />	
	{/each}

	<Product 
		 src={["https://monogramcc.com/static/72f24416b5c4f63ea2596b0715cc810a/9689a/Care-updated-traveler.webp", "https://monogramcc.com/static/76c45322299507c06b02b23bcf6759d0/9689a/MONO_CONSOLE_CARE_STU_453eaa1a-02d9-4ba7-9d9a-8d05e2915f8f.webp"]}
		 title="Monogram care"
		 price={[19, 129]}
		 --height="336px"
	/>
</section>

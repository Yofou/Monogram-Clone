<script lang="ts">
	import { packs } from "./console-packs";
	import Product from "./product.svelte";
</script>

<section class="w-full px-10 pt-[45px] pb-4 grid grid-cols-1 md:grid-cols-[repeat(2,minmax(0,527.5px))] gap-x-[50px] gap-y-[22.5px] grid-flow-row justify-center bg-[#f0efed]">	
	<Product --max-w="auto" --height="351px" {...packs[0]} />
	<Product --height="351px" {...packs[1]} />
	<div class="md:col-span-2">
		<Product --height="440px" {...packs[2]} />
	</div>
</section>

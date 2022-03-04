<script lang="ts">
	import Chevron from "$lib/icons/chevron.svelte";
import { isCartOpen } from "$lib/store";
</script>

<div class="bg-blue w-full px-[15px] py-[25.5px] text-white">
	<button class="flex align-middle gap-1 uppercase font-semibold font-prompt text-[.9em] tracking-[.08em]" on:click={() => $isCartOpen = false}>
		<Chevron />
		Continue Shopping
	</button>
</div>

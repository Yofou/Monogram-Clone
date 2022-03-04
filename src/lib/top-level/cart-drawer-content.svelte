<script lang="ts">
	import Amex from "$lib/icons/card-icons/amex.svelte"; 
	import Apple from "$lib/icons/card-icons/apple.svelte";
	import Google from "$lib/icons/card-icons/google.svelte";
	import Mastercard from "$lib/icons/card-icons/mastercard.svelte";
	import Shop from "$lib/icons/card-icons/shop.svelte";
	import Visa from "$lib/icons/card-icons/visa.svelte";
</script>

<div class="w-full h-full grid grid-rows-[repeat(2,max-content),1fr] p-4">
	<div class="font-prompt font-light py-[45px]">
		<h1 class="uppercase tracking-[2px] text-[1.25rem] text-blue text-center mb-4">nothing in your bag!</h1>
		<p class="text-center text-[1rem] text-[#6c757d]">
		<a href="/" class="text-[#ff3e05]">Start shopping</a> to see if you qualify for free shipping.
		</p>
	</div>

	<div class="font-prompt text-blue grid grid-cols-[90px,1fr] gap-[7.5px] grid-rows-[min-content,1fr]">
		<img class="col-start-1 col-end-2 row-start-1 row-end-3 self-center" src="https://monogramcc.com/static/2961c204c15cdb57d4b6510717020767/better_editing_guaranteed_blue_7b7e094cce.svg" alt="Better editing reward">
		<h1 class="font-bold text-[1rem] uppercase w-full tracking-[1.5px]">Monogram Better Editing Guarantee</h1>
		<p class="font-light text-[.7rem] leading-[1.5]">
			Try Monogram Creative Console in your own workflow for 30 days. If it does not improve your editing experience, you can return it for a full refund.
		</p>
	</div>

	<div class="self-end justify-self-center grid grid-cols-[repeat(6,max-content)] grid-rows-2 gap-x-[7.5px]">
		<h1 class="col-start-1 col-end-7 row-start-1 row-end-2 text-center font-prompt font-light text-[70%] text-[#6c757d]">Secure Payments</h1>
		<Amex />
		<Apple />
		<Google />
		<Mastercard />
		<Shop />
		<Visa />
	</div>
</div>

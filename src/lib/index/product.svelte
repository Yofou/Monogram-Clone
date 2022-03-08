<script lang="ts">
	import { fade } from "svelte/transition"

	export let src: string[]
	export let title: string
	export let price: number | [number, number]
	export let description: string = undefined
	export let discount: number = undefined
	export let inStock = false

	const format = new Intl.NumberFormat("en-US", { style: 'currency', currency: "USD", })
	$: _discount = discount !== undefined && typeof price === "number" ? format.format(price * (1 - discount)) : undefined
	$: _price = typeof price === "number" ? format.format(price) : `${format.format(price[0])} - ${format.format(price[1])}`

	let onHover = false
	const onMouseOver = () => {
		onHover = true	
	}

	const onMouseOut = () => {
		onHover = false
	}
</script>

<a on:mouseenter={onMouseOver} on:mouseleave={onMouseOut} class="relative w-full h-full grid grid-cols-[1fr,max-content] grid-rows-[var(--height,1fr),repeat(2,max-content)] gap-[7.5px]" href="/">
	<img 
		class="col-start-1 col-end-[-1] row-start-1 row-end-2 w-full h-full object-cover" src={src[0]} alt=""
	/>

	{#if onHover}
		<img
			src={src[1]}
			class="col-start-1 col-end-[-1] row-start-1 row-end-2 w-full h-full object-cover"
			transition:fade={{ duration: 150 }}
			alt=""
		/>
	{/if}

	<h1 class="font-prompt max-w-[15ch] font-semibold text-[1.25rem] tracking-[1.5px] uppercase text-blue">{title}</h1>

	<p class="text-blue font-prompt font-light self-start justify-self-end text-[1rem] row-start-2 row-end-3 col-start-2 col-end-3">
		{#if _discount}
			<span class="text-[#ff8d6b]">{_discount}</span>
			<span class="line-through">{_price}</span>
		{:else}
			{_price}
		{/if}
	</p>
	{#if onHover}
		<button
			transition:fade={{ duration: 150 }}
	   		class="uppercase text-white bg-blue rounded-full font-prompt font-semibold self-start text-[0.75rem] px-4 py-[5.633333px] tracking-[1px] row-start-2 row-end-3 col-start-2 col-end-3"
	   	>
			Shop Now
	   </button>
	{/if}

	{#if description !== undefined}
		<p class="text-blue font-prompt font-light text-[0.9rem]">{description}</p>
	{/if}
	
	{#if inStock}
		<p class="absolute top-[16.5px] right-0 px-4 py-[6px] uppercase bg-blue font-prompt font-semibold text-[75%] tracking-[1px] text-white">In Stock</p>
	{/if}
</a>

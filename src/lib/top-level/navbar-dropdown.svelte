<script lang="ts" context="module">
	export type NavBarDropDownOption = { name: string, href?: string }
</script>

<script lang="ts">
	import ClickOutside from "svelte-click-outside"
	import Caret from "$lib/icons/caret.svelte";

	export let open = false
	const dropdownToggle = () => open = !open

	export let options: NavBarDropDownOption[]
</script>

<ClickOutside on:clickoutside={open ? dropdownToggle : undefined}>
	<div class="relative z-10">
		<button 
		 class="font-prompt py-[7.5px] font-light text-pale hover:text-[hsla(0,0%,100%,.75)] uppercase tracking-[2px] flex items-center" 
		 class:text-white={open}
		 on:click={dropdownToggle}
		 >
		 <slot />

		 <Caret --rotate={open ? '-90deg' : '90deg'} />
		</button>

			{#if open}
				<div class="absolute flex flex-col top-full left-0 bg-[#fff] py-[7.5px] box-shadow">
					{#each options as item}
						<a class="whitespace-nowrap px-[22.5px] py-1 text-black text-[15px] w-full hover:bg-white uppercase font-prompt font-light tracking-[2px]" href={item.href ?? "/"}>
							{item.name}
						</a>
					{/each}
				</div>
			{/if}
	</div>
</ClickOutside>

<style>
	.box-shadow {
		box-shadow: 0 1em 2.5em rgba(0,0,0,.333);
	}
</style>

<script lang="ts">
	import FormInput from "./footer-input.svelte"
	import FormButton from "./footer-button.svelte"
import FooterSocials from "./footer-socials.svelte"
import Youtube from "../svg/youtube.svelte"

	let value: string = ""
</script>

<footer class="w-full flex gap-10 justify-center font-prompt font-light text-pale min-h-[300px] p-[45px] bg-blue text-[0.9em]">
	<section>
		<h1>monogram</h1>
		<address class="max-w-[11ch]">305 King St. W.Suite 502</address>
		<address class="max-w-[11ch]">Kitchener, ON Canada</address>
	</section>

	<section>
		<h1>Quick links</h1>
		<a href="/">Home</a>
		<a href="/">How it works</a>
		<a href="/">shop</a>
		<a href="/">Download</a>
	</section>

	<section>
		<h1>help</h1>
		<a href="/">FAQs</a>
		<a href="/">Support Center</a>
		<a href="/">Shipping and Sales</a>
		<a href="/">Palette Support</a>
	</section>

	<section>
		<h1>information</h1>
		<a href="/">About us</a>
		<a href="/">Work with us</a>
		<a href="/">Privacy Policy</a>
		<a href="/">Terms of Use</a>
		<a href="/">Terms of Sale</a>
		<a href="/">Press Kit</a>
	</section>

	<section>
		<h1>Subscribe to Monogram</h1>
		<p class="max-w-[46ch]">
		Master productivity with Creative Console and get all the latest Monogram news.		
		</p>
		<form class="flex gap-2 mt-2" on:submit|preventDefault>
			<FormInput bind:value />
			<FormButton disabled={value.length === 0}>Submit</FormButton>
		</form>
		<div>
			<FooterSocials>
				<Youtube />
			</FooterSocials>
		</div>
	</section>
</footer>

<style>
	section {
		@apply flex flex-col;
	}

	section > h1 {
		@apply font-bold text-[.8em] uppercase mb-4;
	}

	section > a {
		@apply mb-[.4em] hover:underline hover:text-red-300;
	}
</style>

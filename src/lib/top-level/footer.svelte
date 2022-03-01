<script lang="ts">
	import Facebook from "$lib/icons/facebook.svelte";
	import Instagram from "$lib/icons/instagram.svelte";
	import Twitter from "$lib/icons/twitter.svelte";
	import Youtube from "$lib/icons/youtube.svelte";
	import FooterInput from "$lib/top-level/footer-input.svelte";
	import FooterSubmit from "$lib/top-level/footer-submit.svelte";
	import FooterSocial from "$lib/top-level/footer-social.svelte";

	let value = ""
</script>

<footer class="min-h-[300px] bg-blue flex gap-20 justify-center text-[.9em] text-pale font-light font-prompt p-11">
	<section>
		<h1>Monogram</h1>
		<address class="max-w-[11ch]">305 King St. W.Suite 502</address>
		<address class="max-w-[11ch]">Kitchener, ON Canada</address>
	</section>

	<section>
		<h1>quick links</h1>
		<a href="/">Home</a>
		<a href="/">How it works</a>
		<a href="/">Shop</a>
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
		<a href="/">About Us</a>
		<a href="/">Work with us</a>
		<a href="/">Privacy Policy</a>
		<a href="/">Term of Use</a>
		<a href="/">Term of Sale</a>
		<a href="/">Press Kit</a>
	</section>

	<section>
		<h1>subscribe to monogram</h1>
		<p class="max-w-[46ch]">Master productivity with Creative Console and get all the latest Monogram news.</p>
		<form class="flex gap-2" on:submit|preventDefault>
			<FooterInput bind:value />
			<FooterSubmit disabled={value.length === 0} />
		</form>
		<div class="flex gap-1 w-full mt-4">
			<FooterSocial>
				<Instagram />
			</FooterSocial>
			<FooterSocial>
				<Twitter />
			</FooterSocial>
			<FooterSocial>
				<Facebook />
			</FooterSocial>
			<FooterSocial>
				<Youtube />
			</FooterSocial>
		</div>

		<p class="mt-4">© Monogram 2022</p>
	</section>
</footer>

<style>
	section {
		@apply flex flex-col gap-[5.4px];
	}

	section > a:hover {
		@apply text-red-300 underline;
	}

	section > h1 {
		@apply uppercase font-bold text-[.75em] mb-[9.6px];
	}
</style>

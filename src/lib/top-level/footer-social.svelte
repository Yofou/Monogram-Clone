<script lang="ts">
	export let href: string = "/"
</script>

<a class="bg-pale rounded-full w-7 h-7 grid place-content-center text-blue" {href}>
	<slot/>
</a>

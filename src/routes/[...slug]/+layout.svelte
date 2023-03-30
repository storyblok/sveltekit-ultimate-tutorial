<script>
	import '../../app.css';
	import Header from '../../components/Header.svelte';
	export let data;

</script>

<main>

	<Header header={data.header.content} />

	<slot />
</main>

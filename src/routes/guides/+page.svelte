<script>
	export let data
</script>

<div class="guides">
	<ul>
	{#each data.guides as guide}
		<li>
			<a data-sveltekit-preload-data="hover" href={`/guides/${guide.id}`}>{guide.title}</a>
		</li>
	{/each}
	</ul>

	<a href="/">Home</a>
</div>

<style>
	.guides {
		margin-top: 20px;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	a {
		display: inline-block;
		margin-top: 10px;
		padding: 10px;
		border: 1px dotted black;
	}
</style>
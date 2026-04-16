<script>
	let title = 'My-first-app'

	const updateTitle = () => {
		title = "Something completely different"
	}
</script>

<div class="index">
	<h2>{title}</h2>
	<p>This is the paragraph.</p>
	
	<a href="/guides">View guides</a>
	<a href="/about">About</a>
</div>

<style>
	.index {
		text-align: center;
		display: block;
		margin: 20px auto;
	}
</style>
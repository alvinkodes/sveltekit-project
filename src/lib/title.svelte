<script>
	export let title = "My-first-app"
</script>

<div class="title">
	<img src="/app.svg" alt="random pic">
	<h1>{title}</h1>
</div>

<style>
	.title {
		display: block;
	}
	.title img {
		display: inline-block;
		filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
	}
	.title h1 {
		margin-left: 10px;
	}
</style>
<script>
	import { page } from '$app/stores'
</script>

<div class="error">
	<h1>ERROR {$page.status}</h1>
	<p>{$page.error?.message}</p>
	<a href="/guides">View guides</a>
</div>
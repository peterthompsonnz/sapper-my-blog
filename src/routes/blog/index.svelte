<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			// Sort posts in descending date order
			const sortedPosts = posts.sort((a, b) => {  
				return new Date(b.date) - new Date(a.date);
			});
			return { sortedPosts };
		});
	}
</script>

<script>
	export let sortedPosts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Happy Duckies: Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each sortedPosts as post}		
		<li><a rel='prefetch' href='blog/{post.slug}'>{post.date}: {post.title}</a></li>
	{/each}
</ul>

import { error } from '@sveltejs/kit'

export async function load({ fetch }) {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')

	if (!res.ok) {
		throw error(404, 'Item not found')
	}
	const guides = await res.json()
	return { guides };
}
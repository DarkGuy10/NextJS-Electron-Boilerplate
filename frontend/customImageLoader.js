/**
 * Custom image loader for hacking around the built-in next/image optimizer.
 * With this <Image /> element is usable again.
 * Editting this might break some stuff. Do not modify if you don't know
 * what you're doing.
 */
export default function imageLoader({ src }) {
	return src
}

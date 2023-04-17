export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/commissioner.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/julyfourth.svelte"),
	() => import("../../src/routes/location.svelte"),
	() => import("../../src/routes/sponsors.svelte"),
	() => import("../../src/routes/thankyou.svelte"),
	() => import("../../src/routes/volunteer.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"about": [[0, 2], [1]],
	"commissioner": [[0, 3], [1]],
	"julyfourth": [[0, 5], [1]],
	"location": [[0, 6], [1]],
	"sponsors": [[0, 7], [1]],
	"thankyou": [[0, 8], [1]],
	"volunteer": [[0, 9], [1]]
};
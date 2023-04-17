export const manifest = {
	appDir: "_app",
	assets: new Set(["FireworksLogo.png","favicon.ico","favicon.png","menu.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon"},
	_: {
		entry: {"file":"start-75320233.js","js":["start-75320233.js","chunks/index-2efacf0f.js"],"css":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "commissioner",
				pattern: /^\/commissioner\/?$/,
				names: [],
				types: [],
				path: "/commissioner",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "julyfourth",
				pattern: /^\/julyfourth\/?$/,
				names: [],
				types: [],
				path: "/julyfourth",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "location",
				pattern: /^\/location\/?$/,
				names: [],
				types: [],
				path: "/location",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "sponsors",
				pattern: /^\/sponsors\/?$/,
				names: [],
				types: [],
				path: "/sponsors",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "thankyou",
				pattern: /^\/thankyou\/?$/,
				names: [],
				types: [],
				path: "/thankyou",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "volunteer",
				pattern: /^\/volunteer\/?$/,
				names: [],
				types: [],
				path: "/volunteer",
				shadow: null,
				a: [0,9],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set([]);

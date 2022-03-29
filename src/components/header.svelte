<script>
	let links = [
		{ url: '/', name: 'home' },
		{ url: '/about', name: 'about' },
		{ url: '/julyfourth', name: 'July 4th' },
		{ url: '/location', name: 'location' },
		{ url: '/commissioner', name: 'commissioner' },
		{ url: '/volunteer', name: 'volunteering' },
		{ url: '/sponsors', name: 'sponsors' },
		{ url: '#footer', name: 'donate' },
		{ url: '/thankyou', name: 'thanks' }
	];
</script>

<div class="navbar bg-base-100">
	<div class="navbar-end">
		<div class="dropdown">
			<button tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</button>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each links as link}
					<li><a sveltekit:prefetch href={link.url}>{link.name}</a></li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="shrink-0 hidden lg:flex">
		<ul class="menu menu-horizontal navbar-start p-0 grow">
			{#each links as link}
				<li><a class="capitalize" href={link.url}>{link.name}</a></li>
			{/each}
		</ul>
	</div>
</div>

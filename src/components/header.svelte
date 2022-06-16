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
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each links as { url, name }}
					<li><a href={url}>{name}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</div>

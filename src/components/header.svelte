<script lang="ts">
interface Link {
  url: string;
  name: string;
}

const links: Link[] = [
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
        <img src="https://i.ibb.co/pX8FtVc/menu.png" alt="menu" />
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        {#each links as link}
          <li><a href={link.url}>{link.name}</a></li>
        {/each}
      </ul>
    </div>
  </div>
</div>

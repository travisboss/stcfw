<script>
	import '../app.css';
	import Carousel from '../components/carousel.svelte';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<Header />
<Carousel />
<slot />
<Footer />

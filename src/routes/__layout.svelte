<script>
	import '../app.css';
	import Image from '../components/headerImage.svelte';
	import Carousel from '../components/carousel.svelte';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<Image />
<Header />
<Carousel />
<slot />
<Footer />

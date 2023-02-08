<script lang="ts">
  import HeaderImage from './assets/images/FireworksLogo.png';

  type Props = {
    alt: string;
  };
</script>

<div class="flex justify-center">
  <img src={HeaderImage} alt={props.alt} class="aspect-auto" />
</div>

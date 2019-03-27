<template>
<div id="home">
  <WelcomeHeader />
  <LinkCards />
  </div>
</template>

<script>
  import WelcomeHeader from '@/components/WelcomeHeader'
  import LinkCards from '@/components/LinkCards'

  export default {
    name: "Home",
    components: {
      WelcomeHeader,
      LinkCards
    }
  }
</script>

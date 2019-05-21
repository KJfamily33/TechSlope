<template>
<div id="home">
  <div class="homeGradient" style="margin-top: -64px; padding-bottom: 17vh">
  <WelcomeHeader style="padding-top: 20vh;" />
</div>
  <LinkCards style="margin-top: -80px;" />
  </div>
</template>

<script>
  import WelcomeHeader from '@/components/WelcomeHeader'
  import LinkCards from '@/components/LinkCards'

  export default {
    name: "Home",
    components: {
      WelcomeHeader,
      LinkCards,
    },
    data: () => ({
      limit: 3
    })
  }
</script>

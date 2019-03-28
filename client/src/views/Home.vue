<template>
<div id="home">
  <div class="homeGradient" style="margin-top: -64px; padding-bottom: 17vh">
  <WelcomeHeader style="padding-top: 20vh;" />
</div>
  <LinkCards style="margin-top: -80px;" />
  <NewsFeed feedUrl="./examplenewsfeed.xml" name="News" :limit="limit" />
  </div>
</template>

<script>
  import WelcomeHeader from '@/components/WelcomeHeader'
  import LinkCards from '@/components/LinkCards'
  import NewsFeed from '@/components/NewsFeed'

  export default {
    name: "Home",
    components: {
      WelcomeHeader,
      LinkCards,
      NewsFeed
    },
    data: () => ({
      limit: 3
    })
  }
</script>

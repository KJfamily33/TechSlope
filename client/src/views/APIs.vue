<template>
  <div id="apis">
    <div class="homeGradient" style="margin-top: -64px;">
      <v-container style="padding-top: 7em;">
        <v-layout text-xs-center wrap class="white--text">
          <v-flex mb-4 class="text-xs-left">
            <h1 class="display-2 font-weight-light mb-3">
              APIs
            </h1>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <v-container>
      <v-layout>
        <UsageWidgets_small />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import UsageWidgets_small from "@/components/UsageWidget_small";

export default {
  name: "APIs",
  components: {
    UsageWidgets_small
  }
};
</script>

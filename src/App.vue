<template>
  <div id="app">
    <cv-tile>
      <cv-button kind="primary" @click="runCommand"> Who am I? </cv-button>
      <p v-if="user.length">I'm {{ user }}</p>
      <cv-inline-loading v-else
        loading-text="Click the button..."
        state="loading"
      ></cv-inline-loading>
    </cv-tile>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  private user = "";

  runCommand(): void {
    const process = window.cockpit.spawn("whoami");
    process
      .then((data: string) => {
        this.user = data;
      })
      .catch(() => {
        this.user = "Error";
      });
  }
}
</script>

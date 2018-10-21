<template>
  <v-app>
    <div id="app">
      <Header :useLibs="this.selectedLibs"/>
      <div class="wrap-banner-libs" :style="{'background-image': 'url(' + require('./assets/img/svg/lines.svg') + ')'}">
        <Banner :useLibs="this.selectedLibs" @bannerSelectedLibs="getLibs"/>
        <Libs :useLibs="this.selectedLibs" @libsSelectedLibs="getLibs"/>
      </div>
      <About />
      <Features />
      <ListLibs />
      <div class="wrap-contact-footer" :style="{'background-image': 'url(' + require('./assets/img/svg/lines.svg') + ')'}">
        <ContactUs />
        <Footer />
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      selectedLibs: 0,
      selectedLibsName: 'angular',
    };
  },
  methods: {
    getLibs(event) {
      this.selectedLibs = event.i;
      this.selectedLibsName = event.name;
    },
    changeLib() {
      const limit = 4;
      if (this.selectedLibs < limit) {
        this.selectedLibs += 1;
      } else {
        this.selectedLibs = 0;
      }
    },
  },
};
</script>

<style>
  @import "./assets/styles/index.css";
</style>

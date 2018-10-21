<template>
  <header>
    <div class="container-wrap">
      <div class="header-items">
        <div class="logo">
          <a href="/">
            <img src="../assets/img/svg/madpwa-logo.svg" alt="Logotype">
          </a>
        </div>
        <div class="list-link">
          <a href="#"><span :style="`color: ${this.slide[useLibs].color}; transition: all .4s ease;`" :class="`header-link-${this.useLibs}`">{{ this.slide[useLibs].text }}</span> + PWA</a>
          <a href="#" v-scroll-to="'#about'">{{ $t("message.menu.link2") }}</a>
          <a href="#" v-scroll-to="'#features'">{{ $t("message.menu.link3") }}</a>
          <a href="#" v-scroll-to="'#list-libs'">{{ $t("message.menu.link4") }}</a>
          <a href="#" v-on:click="switchLocale()">{{ this.language }}</a>
        </div>
        <button class="menu-btn" @click="switchMobileMenu">
          <img src="../assets/img/svg/menu-btn.svg" v-if="!this.mobileMenuActive" alt="Menu button open">
          <img src="../assets/img/svg/cancel.svg" class="close-movile-menu" v-if="this.mobileMenuActive" alt="Menu button close">
        </button>
        <div class="mobile-menu" v-if="this.mobileMenuActive">
          <div class="list-link mobile-menu_list-link">
            <a href="#" v-on:click="switchMobileMenu()"><span :style="`color: ${this.slide[useLibs].color}; transition: all .4s ease;`" :class="`header-link-${this.useLibs}`">{{ this.slide[useLibs].text }}</span> + PWA</a>
            <a href="#" v-scroll-to="'#about'" v-on:click="switchMobileMenu()">{{ $t("message.menu.link2") }}</a>
            <a href="#" v-scroll-to="'#features'" v-on:click="switchMobileMenu()">{{ $t("message.menu.link3") }}</a>
            <a href="#" v-scroll-to="'#list-libs'" v-on:click="switchMobileMenu()">{{ $t("message.menu.link4") }}</a>
            <a href="#" v-on:click="switchLocale, switchMobileMenu">{{ this.language }}</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-component',
  props: ['useLibs'],
  data() {
    return {
      language: 'In English',
      mobileMenuActive: false,
      slide: [
        {
          text: 'Angular',
          color: '#ff005b',
        },
        {
          text: 'Wordpress',
          color: '#9013fe',
        },
        {
          text: 'React',
          color: '#00dbfc',
        },
        {
          text: 'WorkBox',
          color: '#ff5600',
        },
        {
          text: 'Vue',
          color: '#2af598',
        },
      ],
    };
  },
  methods: {
    switchLocale() {
      if (this.$i18n.locale === 'ru') {
        this.$i18n.locale = 'en';
        this.language = 'На Русском';
      } else {
        this.$i18n.locale = 'ru';
        this.language = 'In English';
      }
    },
    switchMobileMenu() {
      this.mobileMenuActive = !this.mobileMenuActive;
    },
  },
  computed: {
    displayLocale() {
      let other = 'ru';
      if (this.$i18n.locale === 'ru') {
        other = 'en';
      }
      return other;
    },
  },
};
</script>

<style>

</style>

<template>
  <section class="banner" id="banner">
    <div class="container-wrap">
      <div class="banner-content">
        <h1 class="banner-title">{{ $t("message.h1") }} 
          <transition name="fade">
            <span :style="`color: ${this.slide[useLibs].color}; transition: all .4s ease;`">{{ this.slide[useLibs].text }}</span>
          </transition>
        </h1>
        <!-- Coubs -->
        <div class="banner_coubs">
          <div class="coub1-wrap" v-bind:class="{ 'banner-wp coub-center': useLibs == 1 }">  
            <div class="coub-container-wrap coub1" @click="setActiceCoud(1, 'wordpress')">
              <div style="background-color: #8000f0;" class="back side"></div>
              <div style="background-color: #8000f0;" class="left side"></div>
              <div style="background-color: #8000f0;" class="right side"></div>
              <transition name="fade">
                <div v-if="useLibs == 1" style="background-color: #8000f0;" class="center side"><img src="../assets/img/svg/wp.svg" alt=""></div>
              </transition>
              <div style="background-color: #8000f0;" class="top side"></div>
              <div style="background-color: #8000f0;" class="bottom side"></div>
              <div style="background-color: #8000f0;" class="front side"></div>
            </div>
          </div>
          <div class="coub2-wrap" v-bind:class="{ 'banner-react coub-center': useLibs == 2 }">
            <div class="coub-container-wrap coub2" @click="setActiceCoud(2, 'react')">
              <div style="background-color: #00dbfc;" class="back side"></div>
              <div style="background-color: #00dbfc;" class="left side"></div>
              <div style="background-color: #00dbfc;" class="right side"></div>
              <transition name="fade">
                <div v-if="useLibs == 2" style="background-color: #8000f0;" class="center side"><img src="../assets/img/svg/react.svg" alt=""></div>
              </transition>
              <div style="background-color: #00dbfc;" class="top side"></div>
              <div style="background-color: #00dbfc;" class="bottom side"></div>
              <div style="background-color: #00dbfc;" class="front side"></div>
            </div>
          </div>
          <div class="coub3-wrap" v-bind:class="{ 'banner-vue coub-center': useLibs == 4 }">
            <div class="coub-container-wrap coub3" @click="setActiceCoud(4, 'vue')">
              <div style="background-color: #1eed8e;" class="back side"></div>
              <div style="background-color: #1eed8e;" class="left side"></div>
              <div style="background-color: #1eed8e;" class="right side"></div>
              <transition name="fade">
                <div v-if="useLibs == 4" style="background-color: #8000f0;" class="center side"><img src="../assets/img/svg/vue.svg" alt=""></div>
              </transition>
              <div style="background-color: #1eed8e;" class="top side"></div>
              <div style="background-color: #1eed8e;" class="bottom side"></div>
              <div style="background-color: #1eed8e;" class="front side"></div>
            </div>
          </div>
          <div class="coub4-wrap" v-bind:class="{ 'banner-workbox coub-center': useLibs == 3 }">
            <div class="coub-container-wrap coub4" @click="setActiceCoud(3, 'workbox')">
              <div style="background-color: #ff7f00;" class="back side"></div>
              <div style="background-color: #ff7f00;" class="left side"></div>
              <div style="background-color: #ff7f00;" class="right side"></div>
              <transition name="fade">
                <div v-if="useLibs == 3" style="background-color: #8000f0;" class="center side"><img src="../assets/img/svg/wb.svg" alt=""></div>
              </transition>
              <div style="background-color: #ff7f00;" class="top side"></div>
              <div style="background-color: #ff7f00;" class="bottom side"></div>
              <div style="background-color: #ff7f00;" class="front side"></div>
            </div>
          </div>
          <div class="coub5-wrap" v-bind:class="{ 'banner-angular coub-center': useLibs == 0 }">
            <div class="coub-container-wrap coub5" @click="setActiceCoud(0, 'angular')">
              <div style="background-color: #fe2371;" class="back side"></div>
              <div style="background-color: #fe2371;" class="left side"></div>
              <div style="background-color: #fe2371;" class="right side"></div>
              <transition name="fade">
                <div v-if="useLibs == 0" style="background-color: #8000f0;" class="center side"><img src="../assets/img/svg/angular.svg" alt=""></div>
              </transition>
              <div style="background-color: #fe2371;" class="top side"></div>
              <div style="background-color: #fe2371;" class="bottom side"></div>
              <div style="background-color: #fe2371;" class="front side"></div>
            </div>
          </div>
        </div>
        <!-- End Coubs -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'banner-component',
  props: ['useLibs'],
  data() {
    return {
      selectedCoub: 'angular',
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
    setActiceCoud(index, elem) {
      this.selectedCoubIndex = index;
      this.selectedCoub = elem;
      const lib = {
        name: elem,
        i: index,
      };
      this.getPosCenterCoub();
      this.$emit('bannerSelectedLibs', lib);
    },
    getPosCenterCoub() {
      console.log(document.querySelector('.coub-center').getBoundingClientRect().left);
    },
  },
};
</script>

<style>

</style>

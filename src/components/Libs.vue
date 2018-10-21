<template>
  <section class="libs" id="libs">
    <div class="container-wrap">
      <h2 class="libs-title">{{ $t("message.Libs.title") }} <span :style="`color: ${this.slide[useLibs].color}; transition: all .4s ease;`">{{ this.slide[useLibs].text }}</span></h2>
      <!-- Coubs -->
        <div class="libs_coubs">
          <div class="coub-group">
            <div class="coub-container-wrap coub1" v-bind:class="{ 'libs-react': useLibs == 1 }" @click="setActiveButton(1, 'wordpress')">
              <div style="background-color: #8000f0;" class="back side"></div>
              <div style="background-color: #8000f0;" class="left side"></div>
              <div style="background-color: #8000f0;" class="right side"></div>
              <div style="background-color: #8000f0;" class="top side"></div>
              <div style="background-color: #8000f0;" class="bottom side"></div>
              <div style="background-color: #8000f0;" class="front side"></div>
            </div>
            <div class="coub-container-wrap coub2" v-bind:class="{ 'libs-react': useLibs == 2 }" @click="setActiveButton(2, 'react')">
              <div style="background-color: #00dbfc;" class="back side"></div>
              <div style="background-color: #00dbfc;" class="left side"></div>
              <div style="background-color: #00dbfc;" class="right side"></div>
              <div style="background-color: #00dbfc;" class="top side"></div>
              <div style="background-color: #00dbfc;" class="bottom side"></div>
              <div style="background-color: #00dbfc;" class="front side"></div>
            </div>
          </div>
          <div class="coub-group">
            <div class="coub-container-wrap coub3" v-bind:class="{ 'libs-react': useLibs == 3 }" @click="setActiveButton(3, 'vue')">
              <div style="background-color: #1eed8e;" class="back side"></div>
              <div style="background-color: #1eed8e;" class="left side"></div>
              <div style="background-color: #1eed8e;" class="right side"></div>
              <div style="background-color: #1eed8e;" class="top side"></div>
              <div style="background-color: #1eed8e;" class="bottom side"></div>
              <div style="background-color: #1eed8e;" class="front side"></div>
            </div>
            <div class="coub-container-wrap coub4" v-bind:class="{ 'libs-react': useLibs == 4 }" @click="setActiveButton(4, 'workbox')">
              <div style="background-color: #ff7f00;" class="back side"></div>
              <div style="background-color: #ff7f00;" class="left side"></div>
              <div style="background-color: #ff7f00;" class="right side"></div>
              <div style="background-color: #ff7f00;" class="top side"></div>
              <div style="background-color: #ff7f00;" class="bottom side"></div>
              <div style="background-color: #ff7f00;" class="front side"></div>
            </div>
            <div class="coub-container-wrap coub5" v-bind:class="{ 'libs-react': useLibs == 0 }" @click="setActiveButton(0, 'angular')">
              <div style="background-color: #ff005b;" class="back side"></div>
              <div style="background-color: #ff005b;" class="left side"></div>
              <div style="background-color: #ff005b;" class="right side"></div>
              <div style="background-color: #ff005b;" class="top side"></div>
              <div style="background-color: #ff005b;" class="bottom side"></div>
              <div style="background-color: #ff005b;" class="front side"></div>
            </div>
          </div>
        </div>
        <!-- End Coubs -->
      <div class="libs-list">
        <div class="libs-list_item" v-bind:class="{ 'libs-list_preview-0': useLibs === 0 }" @click="setActiveButton(0, 'angular')">
          <img :src="tabsBtn[0].img" :alt="tabsBtn[0].title">
        </div>
        <div class="libs-list_item" v-bind:class="{ 'libs-list_preview-1': useLibs === 1 }" @click="setActiveButton(1, 'wordpress')">
          <img :src="tabsBtn[1].img" :alt="tabsBtn[1].title">
        </div>
        <div class="libs-list_item" v-bind:class="{ 'libs-list_preview-2': useLibs === 2 }" @click="setActiveButton(2, 'react')">
          <img :src="tabsBtn[2].img" :alt="tabsBtn[2].title">
        </div>
        <div class="libs-list_item" v-bind:class="{ 'libs-list_preview-3': useLibs === 3 }" @click="setActiveButton(3, 'workbox')">
          <img :src="tabsBtn[3].img" :alt="tabsBtn[3].title">
        </div>
        <div class="libs-list_item" v-bind:class="{ 'libs-list_preview-4': useLibs === 4 }" @click="setActiveButton(4, 'vue')">
          <img :src="tabsBtn[4].img" :alt="tabsBtn[4].title">
        </div>
      </div>
      <div :class="`libs-list_preview libs-list_preview-${useLibs}`">
        <!-- Info -->
        <div class="libs-list_preview-info">
          <!-- <img :src="tabsBtn[useLibs].img" :alt="tabsContent[useLibs].img.alt"> -->
          <div class="libs-list_preview-info-group">
            <h3>{{ tabsContent.name }}</h3>
            <p>Latest commit <span>{{ tabsContent.git.commitId }}</span> {{ tabsContent.git.hoursAgo }} hours ago</p>
            <div class="git-preview_info">
              <div class="git-preview_info-item">
                <img src="../assets/img/svg/commits-black.svg" alt="Commits">
                {{ tabsContent.git.commits }}
                <span>
                  commits
                </span>
              </div>
              <div class="git-preview_info-item">
                <img src="../assets/img/svg/users-black.svg" alt="Contributors">
                {{ tabsContent.git.contributors }}
                <span>
                  contributors
                </span>
              </div>
              <div class="git-preview_info-item">
                <img src="../assets/img/svg/branch-black.svg" alt="Branches">
                {{ tabsContent.git.branches }}
                <span>
                  branches
                </span>
              </div>
              <div class="git-preview_info-item">
                <img src="../assets/img/svg/lic-black.svg" alt="License">
                {{ tabsContent.git.license }}
              </div>
            </div>
          </div>
        </div>
        <!-- End Info -->
        <!-- Progress -->
        <div class="libs-list_preview_progress-bars">
          <div class="progress-bars_item">
            <vue-circle
              :progress="tabsContent.progress.PWA"
              :size="50"
              :reverse="false"
              line-cap="round"
              fill="#2af598"
              empty-fill="rgba(0, 0, 0, 0)"
              :animation-start-value="0.0"
              :start-angle="300"
              insert-mode="append"
              :thickness="2"
              :show-percent="true">
            </vue-circle>
            <h5>PWA</h5>
          </div>
          <div class="progress-bars_item">
            <vue-circle
              :progress="tabsContent.progress.Performance"
              :size="50"
              :reverse="false"
              line-cap="round"
              fill="#2af598"
              empty-fill="rgba(0, 0, 0, 0)"
              :animation-start-value="0.0"
              :start-angle="300"
              insert-mode="append"
              :thickness="2"
              :show-percent="true">
            </vue-circle>
            <h5>Performance</h5>
          </div>
          <div class="progress-bars_item">
            <vue-circle
              :progress="tabsContent.progress.Accessibility"
              :size="50"
              :reverse="false"
              line-cap="round"
              fill="#2af598"
              empty-fill="rgba(0, 0, 0, 0)"
              :animation-start-value="0.0"
              :start-angle="300"
              insert-mode="append"
              :thickness="2"
              :show-percent="true">
            </vue-circle>
            <h5>Accessibility</h5>
          </div>
          <div class="progress-bars_item">
            <vue-circle
              :progress="tabsContent.progress.BestPractices"
              :size="50"
              :reverse="false"
              line-cap="round"
              fill="#2af598"
              empty-fill="rgba(0, 0, 0, 0)"
              :animation-start-value="0.0"
              :start-angle="300"
              insert-mode="append"
              :thickness="2"
              :show-percent="true">
            </vue-circle>
            <h5>Best Practices</h5>
          </div>
        </div>
        <!-- End progress -->
        <!-- Statisctic -->
        <div class="git-preview-statistic">
          <div class="git-preview-statistic-item">
            <img src="../assets/img/svg/watch-black.svg" alt="Watch">
            watch
            <span>
              {{ tabsContent.git.statistic.watch }}
            </span>
          </div>
          <div class="git-preview-statistic-item">
            <img src="../assets/img/svg/stars-black.svg" alt="Watch">
            stars
            <span>
              {{ tabsContent.git.statistic.stars }}
            </span>
          </div>
          <div class="git-preview-statistic-item">
            <img src="../assets/img/svg/fork-black.svg" alt="Watch">
            fork
            <span>
              {{ tabsContent.git.statistic.fork }}
            </span>
          </div>
        </div>
        <!-- End statistic -->
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import VueCircle from 'vue2-circle-progress';
import AngularIMG from './../assets/img/svg/angular.svg';
import WPIMG from './../assets/img/svg/wp.svg';
import ReactIMG from './../assets/img/svg/react.svg';
import VueIMG from './../assets/img/svg/vue.svg';
import WBIMG from './../assets/img/svg/wb.svg';

export default {
  name: 'libs-component',
  props: ['useLibs'],
  components: {
    VueCircle,
  },
  data() {
    return {
      fill: '#2af598',
      selectedTabIndex: 0,
      selectedTab: 'angular',
      parsedData: {},
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
      tabsBtn: [
        {
          title: 'Angular',
          img: AngularIMG,
        },
        {
          title: 'Wordpress',
          img: WPIMG,
        },
        {
          title: 'React',
          img: ReactIMG,
        },
        {
          title: 'Workbox',
          img: WBIMG,
        },
        {
          title: 'Vue',
          img: VueIMG,
        },
      ],
      tabsContent: {
        name: '',
        git: {
          commitId: 'e30da59',
          hoursAgo: 0,
          commits: 0,
          contributors: 0,
          branches: 0,
          license: 'MIT',
          statistic: {
            watch: 0,
            stars: 0,
            fork: 0,
          },
        },
        progress: {
          PWA: 0,
          Performance: 0,
          Accessibility: 0,
          BestPractices: 0,
        },
      },
      repos: [
        {
          index: 0,
          title: 'angular-universal-pwa',
          name: 'angular',
          url: 'https://api.github.com/repos/maciejtreder/ng-toolkit',
        },
        {
          index: 1,
          title: 'Wordpress PWA',
          name: 'wordpress',
          url: 'https://api.github.com/repos/wp-pwa/wp-pwa-plugin',
        },
        {
          index: 2,
          title: 'create-react-app',
          name: 'react',
          url: 'https://api.github.com/repos/facebook/create-react-app',
        },
        {
          index: 3,
          title: 'vue-pwa-boilerplate',
          name: 'vue',
          url: 'https://api.github.com/repos/vuejs-templates/pwa',
        },
        {
          index: 4,
          title: 'Workbox',
          name: 'workbox',
          url: 'https://api.github.com/repos/GoogleChrome/workbox',
        },
      ],
    };
  },
  methods: {
    setActiveButton(index, elem) {
      for (let i = 0; i < this.tabsBtn.length; i += 1) {
        this.tabsBtn[i].active = false;
      }
      this.selectedTab = elem;
      const lib = {
        name: elem,
        i: index,
      };
      this.parseGithubData(index);
      this.$emit('libsSelectedLibs', lib);
    },
    getGithubData() {
      for (let i = 0; i < this.repos.length; i += 1) {
        axios.get(this.repos[i].url)
          .then((res) => {
            this.githubData.push(
              {
                name: this.repos[i].name,
                data: res.data,
              },
            );
          });
      }
    },
    parseGithubData(index) {
      const re = /\s*\{.*?\}\s*/g;
      axios.get(this.repos[index].url)
        .then((res) => {
          this.tabsContent.git.license = res.data.license !== null ? res.data.license.name : 'No License';
          this.tabsContent.git.statistic.watch = res.data.subscribers_count;
          this.tabsContent.git.statistic.stars = res.data.stargazers_count;
          this.tabsContent.git.statistic.fork = res.data.forks_count;
          this.getDataFromUrl(res.data.commits_url.replace(re, ''), 'commits');
          this.getDataFromUrl(res.data.branches_url.replace(re, ''), 'branches');
          this.getDataFromUrl(res.data.contributors_url.replace(re, ''), 'contributors');
        });
    },
    getDataFromUrl(url, a) {
      const dateNow = new Date();
      axios.get(url)
        .then((res) => {
          switch (a) {
            case 'commits':
              this.tabsContent.git.commits = res.data.length;
              this.tabsContent.git.commitId = res.data[0].sha.substr(0, 7);
              this.tabsContent.git.hoursAgo = ((dateNow.getDate()
              - res.data[0].commit.author.date.slice(8, 10)) * 24)
              + Math.abs(res.data[0].commit.author.date.slice(11, 13) - dateNow.getHours());
              break;
            case 'branches':
              this.tabsContent.git.branches = res.data.length;
              break;
            case 'contributors':
              this.tabsContent.git.contributors = res.data.length;
              break;
            default:
              break;
          }
        });
    },
  },
  mounted() {
    this.getGithubData();
    this.parseGithubData(0);
  },
};
</script>

<style>

</style>

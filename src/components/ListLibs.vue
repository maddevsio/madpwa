<template>
  <section class="list-libs" id="list-libs">
    <div class="container-wrap">
      <div class="list-libs-wrap">
        <h2 class="section-title">{{ $t("message.ListLibs.title") }}</h2>
        <div class="list-libs-wrap_blocks">
            
            <a href="https://github.com/maciejtreder/angular-universal-pwa" class="list-libs-wrap_blocks-item list-libs-wrap_blocks-item1">
                <img src="../assets/img/svg/angular.svg" alt="Angular">
                <div class="list-libs-wrap_blocks-item-info">
                    <h5>angular-universal-pwa</h5>
                    <p>Latest commit <span>e30da59c</span> 15 hours ago</p>
                    <a href="https://github.com/maciejtreder/angular-universal-pwa">https://github.com/maciejtreder/angular-universal-pwa</a>
                </div>
            </a>
            
            <a href="https://github.com/facebook/create-react-app" class="list-libs-wrap_blocks-item list-libs-wrap_blocks-item2">
                <img src="../assets/img/svg/react.svg" alt="React">
                <div class="list-libs-wrap_blocks-item-info">
                    <h5>create-react-app</h5>
                    <p>Latest commit <span>e30da59c</span> 15 hours ago</p>
                    <a href="https://github.com/facebook/create-react-app">https://github.com/facebook/create-react-app</a>
                </div>
            </a>

            <a href="https://github.com/vuejs-templates/pwa" class="list-libs-wrap_blocks-item list-libs-wrap_blocks-item3">
                <img src="../assets/img/svg/vue.svg" alt="Vue">
                <div class="list-libs-wrap_blocks-item-info">
                    <h5>vue-pwa-boilerplate</h5>
                    <p>Latest commit <span>e30da59c</span> 15 hours ago</p>
                    <a href="https://github.com/vuejs-templates/pwa">https://github.com/vuejs-templates/pwa</a>
                </div>
            </a>

            <a href="https://wordpress.org/plugins/wp-pwa" class="list-libs-wrap_blocks-item list-libs-wrap_blocks-item4">
                <img src="../assets/img/svg/wp.svg" alt="Wordpress">
                <div class="list-libs-wrap_blocks-item-info">
                    <h5>WordPress PWA</h5>
                    <p>Latest commit <span>e30da59c</span> 15 hours ago</p>
                    <a href="https://wordpress.org/plugins/wp-pwa">https://wordpress.org/plugins/wp-pwa/ </a>
                </div>
            </a>

            <a href="https://developers.google.com/web/tools/workbox/" class="list-libs-wrap_blocks-item list-libs-wrap_blocks-item-last list-libs-wrap_blocks-item5">
                <img src="../assets/img/svg/wb.svg" alt="WorkBox">
                <div class="list-libs-wrap_blocks-item-info">
                    <h5>workbox</h5>
                    <p>Latest commit <span>e30da59c</span> 15 hours ago</p>
                    <a href="https://developers.google.com/web/tools/workbox/">https://developers.google.com/web/tools/workbox/</a>
                </div>
            </a>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'list-libs',
};
</script>

<style>

</style>

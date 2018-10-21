<template>
  <section class="about" id="about">
    <div class="container-wrap">
      <div class="about-wrap">
        <!-- Coubs -->
        <div class="about-wrap_coubs">
          <div class="coub-container-wrap coub1">
            <div style="background-color: #00dbfc;" class="back side"></div>
            <div style="background-color: #00dbfc;" class="left side"></div>
            <div style="background-color: #00dbfc;" class="right side"></div>
            <div style="background-color: #00dbfc;" class="top side"></div>
            <div style="background-color: #00dbfc;" class="bottom side"></div>
            <div style="background-color: #00dbfc;" class="front side"></div>
          </div>
          <div class="coub-container-wrap coub2">
            <div style="background-color: #8000f0;" class="back side"></div>
            <div style="background-color: #8000f0;" class="left side"></div>
            <div style="background-color: #8000f0;" class="right side"></div>
            <div style="background-color: #8000f0;" class="top side"></div>
            <div style="background-color: #8000f0;" class="bottom side"></div>
            <div style="background-color: #8000f0;" class="front side"></div>
          </div>
          <div class="coub-container-wrap coub3">
            <div style="background-color: #1eed8e;" class="back side"></div>
            <div style="background-color: #1eed8e;" class="left side"></div>
            <div style="background-color: #1eed8e;" class="right side"></div>
            <div style="background-color: #1eed8e;" class="top side"></div>
            <div style="background-color: #1eed8e;" class="bottom side"></div>
            <div style="background-color: #1eed8e;" class="front side"></div>
          </div>
          <div class="coub-container-wrap coub4">
            <div style="background-color: #ff7f00;" class="back side"></div>
            <div style="background-color: #ff7f00;" class="left side"></div>
            <div style="background-color: #ff7f00;" class="right side"></div>
            <div style="background-color: #ff7f00;" class="top side"></div>
            <div style="background-color: #ff7f00;" class="bottom side"></div>
            <div style="background-color: #ff7f00;" class="front side"></div>
          </div>
          <div class="coub-container-wrap coub5">
            <div style="background-color: #fe2371;" class="back side"></div>
            <div style="background-color: #fe2371;" class="left side"></div>
            <div style="background-color: #fe2371;" class="right side"></div>
            <div style="background-color: #fe2371;" class="top side"></div>
            <div style="background-color: #fe2371;" class="bottom side"></div>
            <div style="background-color: #fe2371;" class="front side"></div>
          </div>
        </div>
        <!-- End Coubs -->
        <h2 class="section-title">{{ $t("message.About.title") }}</h2>
        <p>{{ $t("message.About.text") }}</p>
        <div class="about-wrap_console">
          <div class="about-wrap_console-top-line">
            <div class="console-btn-red"></div>
            <div class="console-btn-yellow"></div>
            <div class="console-btn-green"></div>
          </div>
          <div class="about-wrap_console-content">
            <div v-highlight>
              <pre>
                <code>
&#60;script&#62;
if ('serviceWorker') {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(
      function(registration) {
        // Registration was successful 
        console.log('ServiceWorker registration successful with scope: ',
registration.scope); },
      function(err) {
        // registration failed :(
        console.log('SrviceWorker registration failed: ', err);
      });
  });
}
&#60;/script&#62;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
};
</script>

<style>

</style>

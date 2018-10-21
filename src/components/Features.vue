<template>
  <section class="features" id="features">
    <div class="container-wrap">
        <div class="features-wrap">
            <h2 class="section-title">{{ $t("message.Features.title") }}</h2>
            <div class="features-wrap_list-subtitle">
                <div class="subtitle-box">
                    <img class="line-gradient" src="../assets/img/svg/gradient-line-mo.svg" alt="">
                    <div v-scroll-to="'#feature4'" class="features-wrap_list-subtitle-item" style="margin-bottom: -170px;">
                        <h4 style="text-align: right; padding-right: 50px;">{{ $t("message.Features.subtitle1") }}</h4>
                        <h4 class="mobile-features-subtitle" style="text-align: right; padding-right: 50px;">{{ $t("message.Features.subtitle1_1") }}</h4>
                    </div>
                    <div v-scroll-to="'#feature5'" class="features-wrap_list-subtitle-item">
                        <h4>{{ $t("message.Features.subtitle2") }}</h4>
                        <h4 class="mobile-features-subtitle">{{ $t("message.Features.subtitle2_1") }}</h4>
                    </div>
                    <div v-scroll-to="'#feature6'" class="features-wrap_list-subtitle-item" style="margin-bottom: -170px;">
                        <h4 style="text-align: left; padding-left: 60px;">{{ $t("message.Features.subtitle3") }}</h4>
                        <h4 class="mobile-features-subtitle" style="text-align: left; padding-left: 60px;">{{ $t("message.Features.subtitle3_1") }}</h4>
                    </div>
                    <div v-scroll-to="'#feature3'" class="features-wrap_list-subtitle-item" style="width: 18%;">
                        <h4 style="text-align: right;">{{ $t("message.Features.subtitle4") }}</h4>
                        <h4 class="mobile-features-subtitle" style="text-align: right;">{{ $t("message.Features.subtitle4_1") }}</h4>
                    </div>
                    <img src="../assets/img/svg/round.svg" alt="" class="features-wrap_list-subtitle-img">
                    <div v-scroll-to="'#feature7'" class="features-wrap_list-subtitle-item" style="width: 18%;">
                        <h4 style="text-align: left;">{{ $t("message.Features.subtitle5") }}</h4>
                        <h4 class="mobile-features-subtitle" style="text-align: left;">{{ $t("message.Features.subtitle5_1") }}</h4>
                    </div>
                    <div v-scroll-to="'#feature1'" class="features-wrap_list-subtitle-item" style="margin-top: -170px;">
                        <h4 style="text-align: right; padding-right: 60px;">{{ $t("message.Features.subtitle6") }}</h4>
                        <h4 class="mobile-features-subtitle" style="text-align: right; padding-right: 60px;">{{ $t("message.Features.subtitle6_1") }}</h4>
                    </div>
                    <div v-scroll-to="'#feature2'" class="features-wrap_list-subtitle-item">
                        <h4>{{ $t("message.Features.subtitle7") }}</h4>
                        <h4 class="mobile-features-subtitle">{{ $t("message.Features.subtitle7_1") }}</h4>
                    </div>
                    <div v-scroll-to="'#feature8'" class="features-wrap_list-subtitle-item" style="margin-top: -170px;">
                        <h4 style="text-align: left; padding-left: 60px;">{{ $t("message.Features.subtitle8") }}</h4>
                        <h4 class="mobile-features-subtitle" style="text-align: left; padding-left: 60px;">{{ $t("message.Features.subtitle8_1") }}</h4>
                    </div>
                </div>
            </div>
            <div class="features-wrap_list-phone">
                <div class="features-wrap_list-phone-item" id="feature1">
                    <div class="phone-box">
                        <img class="phone-box-item" src="../assets/img/svg/iphone_black_hor.svg" alt="">
                        <img class="img-center" src="../assets/img/svg/dino-black.svg" alt="">
                    </div>
                    <h3>{{ $t("message.Features.features1.title") }}</h3>
                    <p>{{ $t("message.Features.features1.text") }}</p>
                </div>
                <div class="features-wrap_list-phone-item" id="feature2">
                    <div class="phone-box">
                        <img class="phone-box-item" src="../assets/img/svg/pixel_black_hor.svg" alt="">
                        <img class="img-center" src="../assets/img/svg/fast-black.svg" alt="">
                    </div>
                    <h3>{{ $t("message.Features.features2.title") }}</h3>
                    <p>
                        {{ $t("message.Features.features2.text") }}
                        <br>
                        <img src="../assets/img/svg/line_wave.svg" alt="Line">
                        <img src="../assets/img/svg/line_wave.svg" alt="Line">
                        <img src="../assets/img/svg/line_wave.svg" alt="Line">
                    </p>
                </div>
                <div class="features-wrap_list-phone-item" id="feature3">
                    <div class="phone-box">
                        <img class="phone-box-item" src="../assets/img/svg/winphone_black_hor.svg" alt=""> 
                        <img class="img-center" src="../assets/img/svg/app-refresh-black.svg" alt=""> 
                    </div>
                    <h3>{{ $t("message.Features.features3.title") }}</h3>
                    <p>{{ $t("message.Features.features3.text") }}</p>
                </div>
                <div class="features-wrap_list-phone-item" id="feature4">
                    <div class="phone-box">
                        <img class="phone-box-item" src="../assets/img/svg/phone+push.svg" alt="">
                    </div>
                    <h3>{{ $t("message.Features.features4.title") }}</h3>
                    <p>{{ $t("message.Features.features4.text") }}</p>
                </div>
                <div class="features-wrap_list-phone-item" id="feature5">
                    <div class="phone-box">
                        <img class="phone-box-item" src="../assets/img/svg/winphone_black_hor_convers.svg" alt="">
                    </div>
                    <h3>{{ $t("message.Features.features5.title") }}</h3>
                    <p>{{ $t("message.Features.features5.text") }}</p>
                </div>
                <div class="features-wrap_list-phone-item" id="feature6">
                    <div class="phone-box">
                        <img class="phone-box-item" src="../assets/img/svg/pixel_black_hor.svg" alt="">
                        <img class="img-center" src="../assets/img/svg/app-play-color.svg" alt="">
                    </div>
                    <h3>{{ $t("message.Features.features6.title") }}</h3>
                    <p>
                        {{ $t("message.Features.features6.text") }}
                        <br>
                        <img src="../assets/img/svg/line_wave.svg" alt="Line">
                    </p>
                </div>
                <div class="features-wrap_list-phone-item" id="feature7">
                    <div class="phone-box">
                        <img class="phone-box-item" src="../assets/img/svg/iphone_black_hor.svg" alt="">
                        <img class="img-center" src="../assets/img/svg/cost.svg" alt="">
                    </div>
                    <h3>{{ $t("message.Features.features7.title") }}</h3>
                    <p>
                        {{ $t("message.Features.features7.text") }}
                        <br>
                        <img src="../assets/img/svg/line_wave.svg" alt="Line">
                        <img src="../assets/img/svg/line_wave.svg" alt="Line">
                        <img src="../assets/img/svg/line_wave.svg" alt="Line">
                    </p>
                </div>
                <div class="features-wrap_list-phone-item" id="feature8">
                    <div class="phone-box">
                        <img class="phone-box-item" src="../assets/img/svg/winphone_black_hor.svg" alt="">
                        <img class="img-center" src="../assets/img/svg/time.svg" alt="">
                    </div>
                    <h3>{{ $t("message.Features.features8.title") }}</h3>
                    <p>{{ $t("message.Features.features8.text") }}</p>
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

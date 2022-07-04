<template>
  <div id="Slider">
    <div class="slider__item slider__video">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hXHUxNRUxsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="slider__item slider__feedback">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="8000"
        controls
        background="#262E39"
        style="text-shadow: 1px 1px 2px #333; width: 100%;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-blank img-alt="Blank image" class="slide">
          <p class="slide__name">Имя и фамилия</p>
          <h5 class="slide__title">Они такие лапочки</h5>
          <p class="slide__text">
            “Равным образом реализация намеченных плановых заданий позволяет оценить значение соответствующий условий активизации. Задача организации, в особенности же консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание дальнейших направлений развития.”
          </p>
          <b-img src="@/assets/avatar-test.svg" alt="Аватар" fluid rounded="circle" />
        </b-carousel-slide>

        <b-carousel-slide img-blank img-alt="Blank image" class="slide">
          <p class="slide__name">Имя и фамилия</p>
          <h5 class="slide__title">Они такие лапочки</h5>
          <p class="slide__text">
            “Равным образом реализация намеченных плановых заданий позволяет оценить значение соответствующий условий активизации. Задача организации, в особенности же консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание дальнейших направлений развития.”
          </p>
          <b-img src="@/assets/pandas-photo/lina.svg" alt="Аватар" fluid rounded="circle" />
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
  #Slider {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
    .slider__item {
      width: 50%;
    }

  img { max-width: 120px; }

  .slide { height: 465px; }
    .slide__name { font-size: 18px; text-align: left; }
    .slide__title { font-size: 36px; text-align: left; }
    .slide__text { font-size: 14px; padding-top: 25px; }

  @media screen and (max-width: 425px) {
    #Slider {
      flex-direction: column;
    }
      .slider__item {
        width: 100%;
      }

      img { max-width: 50px; }

      .slide { height: 650px; margin-top: -7px; }
  }
</style>
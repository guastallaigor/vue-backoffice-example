<template lang="pug">
  v-container.not-found(fluid)
    v-card
      .triangle
      v-card-text.height-card
        v-layout(column align-center justify-center)
          v-flex
            img.format-img(src="@/assets/not-found.jpg" alt="")
          v-flex
            .status.text-xs-center.primary--text Ops!
          v-flex
            .message.text-xs-center.primary--text Page not found!
</template>

<style lang="sass">
.not-found
  margin-top: -5.8rem
  .height-card
    height: calc(100vh - 25rem)
  .status
    font-weight: bold
    @media screen and (max-width: 767px)
      font-size: 4rem
    @media screen and (min-width: 768px) and (max-width: 1023px)
      font-size: 8rem
    @media screen and (min-width: 1024px)
      font-size: 10rem
  .message
    font-weight: bold
    @media screen and (max-width: 767px)
      font-size: 2rem
    @media screen and (min-width: 768px) and (max-width: 1023px)
      font-size: 2.5rem
    @media screen and (min-width: 1024px)
      font-size: 3rem
  .format-img
    height: auto
    @media screen and (max-width: 767px)
      width: 12rem
    @media screen and (min-width: 768px) and (max-width: 1023px)
      width: 16rem
    @media screen and (min-width: 1024px)
      width: 26rem
  .triangle
    &::after
      content: ''
      position: absolute
      width: 0
      height: 0
      border-style: solid
      border-color: #e4001a transparent transparent transparent
      @media screen and (max-width: 767px)
        border-width: 75px 75px 0 0
      @media screen and (min-width: 768px) and (max-width: 1023px)
        border-width: 130px 130px 0 0
      @media screen and (min-width: 1024px)
        border-width: 150px 150px 0 0
</style>

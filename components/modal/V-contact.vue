<template>
  <section>
    <b-button @click="toggleModal" ref="contactUS-toggle" size="lg" variant="success">Получить консультацию</b-button>

    <b-modal id="contactUS-modal" centered hide-footer hide-header>

      <section class="modal-block">
        <div class="modal-block__header">
          <b-img src="@/assets/modal/contact.svg" fluid alt=""></b-img>
        </div>
        <div class="modal-block__body">
          <b-form-input v-model="name" placeholder="Ваше имя"></b-form-input>
          <b-form-input v-model="number" placeholder="Номер телефона"></b-form-input>
          <b-form-input v-model="email" placeholder="E-mail"></b-form-input>
        </div>
        <div class="modal-block__footer">
          <b-button class="btn-block" variant="dark">Связаться</b-button>
        </div>

        <b-button @click="toggleModal" class="modal-block__close" variant="none">
          <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="62" height="62" fill="url(#contact)" fill-opacity="0.80"/>
            <defs>
            <pattern id="contact" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#contact-img" transform="scale(0.01)"/>
            </pattern>
            <image id="contact-img" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADmElEQVR4nO2dy24TMRSGf6OyBlRWLe8ASFxWLAr0Rbi1j4SQEO/RSKxDkdq+A7cVLRJih/SzyFgtbtJJPD4+x5Pzbbry+D/+FDXj+AI4juM4juM4juM4juM4juNkECQeSnIbwB6AbQCHAN6HEP5K9FULktcBvATwEMA3AG9DCN91Uy0ByR2SZ/yfKclN7Wy5kNwk+Smp6Yzkjna2KyH5hORvzueE5G3tjKtC8ibJzwtq+kPymXbGufTIaFJKjwy7UpaU0ZSUJWXYk7KijCakrCjDjpRMGaalZMrQlzJQhkkpA2XoSSG5RfJ0YPCICSksIyPyi+SdnBzXMvPvA7iV2TblLoADKr6ndH1/BPCg0CNvAHiV0zBXyHZmu0XcBzDRkNL1OekylCRrjHKFHGa2u4rqUgRlADJjNB+SG7w8lVCKoxpSOJsOORKqYUpyQ7qGtKCS/wRTTigoRTj7sWT20RXWYubRFthS1kG0UGgLGYtiuWDL2USxWLjFTFWxNACWsqhiYSAsZDCF5oBo9m0ajYHR6LMpag5Qzb6aphuoQ8mB4khkiCyUmwdlZ1aPu79Sz94NIfwUePYlqgkBZp8UAAeYrf5rgRMAz2vJACoLAZqSUl0GoCAEaEKKigxASQhgWoqaDEBRCGBSiqoME1D2K/EqjOc9YyjUl+IyUhSluIxFKEhxGX1UlOIylqWCFLMyclcu1kD1K7nTQdlZ2yY+JWaoKMOl9KEgw6UsQlGGS0kxICNiQoqFycUJyu1cGor65KL29LslGZH1m343LCOyPj9QNSAjMv6fcBuSEakupdrUCctvPb7IMc6XApXkHpR2B4vCCovYKL8YT/1wgyKw/lJSKSkmTpwYBPUWW7uUFOpvR3ApERpY+EyXMoMGZCRZ1lcKDclIMq2fFBqUkWRbHyk0LCPJOH4pbEBGknW8UtiQjCTz+KSwQRmVsteXQj/ArI+6B5iR3BcqpIqMC3VISnmdkyl3+l1ig03V3a4A0PW1C5mp+8c5jXKFfM1st4jqMiKCUr4Uft5iWPYgZRPLb1j+IOXSR+n2FlDiqHETMiIsd9T4U60ChkgxJSMyUIqejAsF5EgxKSOSKUVfRmRFKaZlRFaUYkdGZEkpTciILCnFnoxIj5SmZER6pNiVEeF4r82bJjWdUuDaPKmLJbcAvMH5xZIfRnCx5AaAFwAeYfbS9y6E8EM3leM4juM4juM4juM4juM4Tsc/HCcTAGhH9mAAAAAASUVORK5CYII="/>
            </defs>
          </svg>
        </b-button>
      </section>

    </b-modal>
  </section>
</template>

<script>
export default {
  methods: {
    toggleModal() {
      this.$root.$emit('bv::toggle::modal', 'contactUS-modal', '#contactUS-toggle')
    }
  }
}
</script>

<style scoped>
.modal-block { }
  .modal-block__header { margin: -16px; }
  .modal-block__body { padding: 35px 35px 0px 35px; }
    .modal-block__body input { margin: 25px 0px; }
  .modal-block__footer { padding: 0px 35px 20px 35px; }

  .modal-block__close {
    position: absolute;
    top: -65px;
    right: -70px;
  }
</style>
<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../assets/images/' + product_data.image)"
      alt=""
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }}</p>
    <button class="v-catalog-item__add_to_cart_btn btn" @click="sendData">
      add
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    sendData() {
        this.$emit('sendArticle', this.product_data.article)
    },
  },
};
</script>

<style lang="scss">
@import "./src/assets/styles/variables.scss";
.v-catalog-item {
  &__image {
    width: 100px;
  }
  flex-basis: 25%;
  box-shadow: 0 0 8px #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
}
</style>

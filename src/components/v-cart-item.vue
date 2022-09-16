<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('../assets/images/' + cart_item_data.image)"
      alt=""
    />
    <div class="v-cart-item__info">
      <p class="v-cart-item__name">{{ cart_item_data.name }}</p>
      <p class="v-cart-item__price">{{ cart_item_data.price }}</p>
      <p class="v-cart-item__article">{{ cart_item_data.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>quantity</p>
      {{ cart_item_data.quantity }}
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
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
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  mounted() {
    // this.$set(this.cart_item_data, "quantity", 1);
  },
};
</script>

<style lang="scss">
@import "./src/assets/styles/variables.scss";

.v-cart-item {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  box-shadow: 0 0 8px #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    max-width: 50px;
  }
}
</style>

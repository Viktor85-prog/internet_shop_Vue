<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../assets/images/' + product_data.image)"
      alt=""
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }}</p>
    <div v-if="product_data.quantity > 0">
      <button
        class="v-catalog-item__increment_btn btn"
        @click="decrementFromCart"
      >
        -
      </button>
      <input
        disabled
        class="v-catalog-item__input"
        :value="product_data.quantity || 0"
      />
      <button class="v-catalog-item__increment_btn btn" @click="addToCart">
        +
      </button>
    </div>
    <button
      class="v-catalog-item__add_to_cart_btn btn"
      v-else
      @click="addToCart"
    >
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
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    decrementFromCart() {
      this.$emit("decrementFromCart", this.product_data);
    },
  },
};
</script>

<style lang="scss">
@import "./src/assets/styles/variables.scss";
.v-catalog-item {
  &__image {
    width: 100px;
    max-height: 130px;
  }
  &__input {
    width: 25px;
    margin: 0 5px;
    text-align: center;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 2px;
  }
  &__increment_btn {
    width: 25px;
  }
  flex-basis: 25%;
  box-shadow: 0 0 8px #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
}
</style>

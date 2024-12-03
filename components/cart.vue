<template>
  <div class="cart-container">
    <!-- Sepet İkonu -->
    <div
      class="cart-icon"
      @mouseenter="toggleCart(true)"
      @mouseleave="toggleCart(false)"
    >
      <i class="fas fa-shopping-bag"></i>
      <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>

      <!-- Sepet Popup -->
      <div v-if="isCartOpen" class="cart-popup">
        <h4>Alışveriş Sepetim</h4>
        <p>Toplam: {{ totalAmount }} ₺</p>
        <NuxtLink to="/cart" class="view-cart-button">Sepete Git</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Sepetteki ürün sayısı ve toplam tutar
const cartCount = ref(0); // Örnek sepet ürün sayısı
const totalAmount = ref(0); // Örnek sepet toplam tutarı
const isCartOpen = ref(false); // Sepet popup'ı kontrol etmek için

// Popup açma/kapama fonksiyonu
const toggleCart = (state) => {
  isCartOpen.value = state;
};
</script>

<style scoped>
.cart-container {
  position: relative;
}

/* Sepet İkonu */
.cart-icon {
  font-size: 24px;
  color: #00a69c;
  position: relative;
  cursor: pointer;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #ff0000;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 50%;
}

/* Sepet Popup */
.cart-popup {
  position: absolute;
  top: 40px;
  right: 0;
  width: 250px;
  background-color: white;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  z-index: 1000;
}

.cart-popup h4 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}

.cart-popup p {
  margin: 5px 0;
  font-size: 14px;
  color: #555;
}

.view-cart-button {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 10px;
  background-color: #ff007f;
  color: white;
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
  text-decoration: none;
}

.view-cart-button:hover {
  background-color: #cc0066;
}
</style>

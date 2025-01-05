<template>
    <div>
      <!-- Header ve Menü -->
      <Header>
        <template #userAccount>
          <UserAccount @openSignIn="showSignInPage" @openSignUp="showSignUpPage" />
        </template>
        <template #cart>
          <Cart />
        </template>
      </Header>
      <MenuComponent v-if="!showSignIn && !showSignUp" />
  
      <!-- Ana İçerik -->
      <main>
        <!-- Sayfa içeriği -->
        <NuxtPage />
      </main>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from "~/components/header.vue";
  import Footer from "~/components/footer.vue";
  import MenuComponent from "~/components/menu.vue";
  import UserAccount from "~/components/useraccount.vue";
  import Cart from "~/components/cart.vue";
  import { ref } from "vue";
  
  // State yönetimi
  const showSignIn = ref(false);
  const showSignUp = ref(false);
  
  const showSignInPage = () => {
    showSignIn.value = true;
    showSignUp.value = false;
  };
  
  const hideSignInPage = () => {
    showSignIn.value = false;
  };
  
  const showSignUpPage = () => {
    showSignUp.value = true;
    showSignIn.value = false;
  };
  
  const hideSignUpPage = () => {
    showSignUp.value = false;
  };
  </script>
  
  <style scoped>
  /* Ana içerik alanı */
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
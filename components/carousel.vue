<template>
  <div class="carousel-container">
    <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <!-- Resimleri döngü ile göster -->
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-slide"
      >
        <img :src="image" alt="Carousel Image" />
      </div>
    </div>
    <!-- Navigation Buttons -->
    <button class="carousel-nav prev" @click="prevSlide">‹</button>
    <button class="carousel-nav next" @click="nextSlide">›</button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      images: [
        "https://www.watsons.com.tr/medias/sys_master/images/h3f/h21/11718974832670/WatsonsaOzelMarkalar/WatsonsaOzelMarkalar.png", // İlk görsel
        "https://www.watsons.com.tr/medias/sys_master/images/h0d/h2b/11718974570526/Pastel-app/Pastel-app.png", // İkinci görsel
        "https://www.watsons.com.tr/medias/sys_master/images/he1/h63/11721966256158/YilbasiK_2-31Aralik_/YilbasiK-2-31Aralik-.png", // Üçüncü görsel
        "https://www.watsons.com.tr/medias/sys_master/images/h13/h5a/11721966518302/YilbasiK_2Aralik_1Ocak_CoverB_2-1300-500/YilbasiK-2Aralik-1Ocak-CoverB-2-1300-500.png", // Dördüncü görsel
        "https://www.watsons.com.tr/medias/sys_master/images/hea/h2d/11718975094814/WatsonsaOzelM_GobeBoost_2-8Aralik_CoverB-1300-500/WatsonsaOzelM-GobeBoost-2-8Aralik-CoverB-1300-500.png", // Beşinci görsel
        "https://www.watsons.com.tr/medias/sys_master/images/hb8/h37/11718975356958/surdurulabilir-yasam-12/surdurulabilir-yasam-12.png", // Altıncı görsel
      ],
      currentIndex: 0, // Şu anda gösterilen resim
      intervalId: null, // Otomatik geçiş için interval ID
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 5000); // 5 saniyede bir geçiş
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide(); // Bileşen kaldırıldığında interval temizlenir
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 1475px; /* Carousel genişliği */
  margin: 30px auto; /* Ortalamak için */
  overflow: hidden;
  /*border-radius: 10px; /* Görsellerin kenarlarını yuvarla */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Hafif gölge */
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out; /* Geçiş animasyonu */
}

.carousel-slide {
  min-width: 100%; /* Her slayt tam genişlikte */
}

.carousel-slide img {
  width: 100%;
  height: auto;
  display: block;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 20px; /* Ok işaretleri boyutu */
}

.carousel-nav.prev {
  left: 15px;
}

.carousel-nav.next {
  right: 15px;
}

.carousel-nav:hover {
  background-color: rgba(0, 0, 0, 0.8); /* Hover rengi */
}
</style>

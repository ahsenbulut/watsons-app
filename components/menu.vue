<template>
    <nav class="menu">
      <ul class="menu-list">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="menu-item"
          @mouseenter="showSubMenu(index)"
          @mouseleave="hideSubMenu"
        >
          {{ item.name }}
          <div
            v-if="hoveredMenuIndex === index"
            class="submenu"
          >
            <ul>
              <li
                v-for="(subItem, subIndex) in item.subCategories"
                :key="subIndex"
              >
                {{ subItem }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Menü verisi
  const menuItems = ref([
    {
      name: "Sadece Watsons’ta",
      subCategories: ["Özel Ürünler", "Fırsatlar", "Kampanyalar"],
    },
    {
      name: "Makyaj",
      subCategories: [
        "Yüz Makyajı",
        "Göz Makyajı",
        "Dudak Makyajı",
        "Tırnak Ürünleri",
        "Hizmetler",
        "Makyaj Setleri",
        "Makyaj Aksesuarları"
      ],
    },
    {
      name: "Cilt Bakım",
      subCategories: ["Yüz Bakım", "Dermo Cilt Bakım", "Doğal İçerikli Cilt Bakım","El Ve Vücut Bakım","Güneş Koruyucuları Ve Bronzlaştırıcılar"],
    },
    {
      name: "Saç Bakım",
      subCategories: ["Şampuanlar", "Saç Kremleri", "Saç Bakım Ürünleri","Saç Dökülmesine Karşı Ürünler","Şekillendiriciler","Profesyonel Saç Bakım","Saç Boyaları","Saç Aksesuarları","En Yeniler"],
    },
    {
      name: "Kişisel Bakım",
      subCategories: ["Parfüm Ve Deodorant", "Banyo", "Ağız Bakım","Kadın Bakım","Epilasyon","Ayak Bakım","Anne Ve Bebek","En Yeniler","Çok Satanlar"],
    },
    {
      name: "Sağlıklı Yaşam",
      subCategories: ["Vitaminler, Gıda Takviyeleri Ve Diyet", "Genel Sağlık Ürünleri", "Antibakteriyel Ve Hijyen Ürünleri","En Yeniler","Çok Satanlar"],
    },
    {
      name: "Erkek Bakım",
      subCategories: ["Tıraş", "Erkek Bakım Ürünleri","Erkek Parfüm Ve Deodorant","En Yeniler","Çok Satanlar"],
    },
    {
      name: "Parfüm",
      subCategories: ["Parfümler", "Deodorant Ve Roll-On","En Yeniler","Çok Satanlar"],
    },
    {
      name: "Aksesuar",
      subCategories: ["Moda Aksesuarları", "Seyahat Aksesuarları","Makyaj Aksesuarları","Tırnak Aksesuarları","Saç Aksesuarları","Banyo Aksesuarları"],
    },
    {
      name: "K-Beauty",
      subCategories: [],
    },
    {
      name: "Sürdürülebilir Yaşam",
      subCategories: ["Sürdürülebilir Ürünler"],
    },
  ]);
  
  // Hover edilen menü indeksi
  const hoveredMenuIndex = ref(null);
  
  const showSubMenu = (index) => {
    hoveredMenuIndex.value = index;
  };
  
  const hideSubMenu = () => {
    hoveredMenuIndex.value = null;
  };
  </script>
  
  <style scoped>
  /* Menü Temel Stilleri */
  .menu {
    background-color: #00a69c; /* Watsons Renk */
    color: white;
    padding: 10px 20px;
    border-top: 1px solid #ccc;
  }
  
  .menu-list {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .menu-item {
    margin: 0 15px;
    position: relative;
    cursor: pointer;
    font-weight: bold;
  }
  
  .menu-item:hover {
    color: #fff;
  }
  
  /* Alt Menü Stilleri */
  .submenu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    color: #333;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    white-space: nowrap;
  }
  
  .submenu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .submenu li {
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .submenu li:hover {
    background-color: #f5f5f5;
    color: #00a69c;
  }
  </style>
  
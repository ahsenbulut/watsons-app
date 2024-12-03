<template>
    <div class="modal-overlay" @click.self="closePopup">
      <div class="modal-content">
        <button class="close-button" @click="closePopup">×</button>
        <h2>KAYIT OL</h2>
        <p class="subtitle">
          Sadece 3 dakika içerisinde hesabınızı oluşturun!
        </p>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="firstName">İsim *</label>
            <input
              id="firstName"
              type="text"
              placeholder="Adınızı girin"
              required
            />
          </div>
          <div class="form-group">
            <label for="lastName">Soyisim *</label>
            <input
              id="lastName"
              type="text"
              placeholder="Soyadınızı girin"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">E-posta adresi *</label>
            <input
              id="email"
              type="email"
              placeholder="E-posta adresinizi girin"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Şifre *</label>
            <input
              id="password"
              type="password"
              placeholder="Şifrenizi oluşturun"
              required
            />
          </div>
          <div class="form-group">
            <label for="phone">Telefon Numarası *</label>
            <input
              id="phone"
              type="tel"
              placeholder="05xx-xxx-xxxx"
              pattern="[0-9]{10,11}"
              required
            />
          </div>
          <div class="form-footer">
            <label>
              <input type="checkbox" /> Tarafıma pazarlama amaçlı ticari ileti gönderilmesini kabul ediyorum.
            </label>
            <label>
              <input type="checkbox" /> Bilgilerimin kişiselleştirilmiş pazarlama faaliyetleri kapsamında kullanılmasını kabul ediyorum.
            </label>
          </div>
          <button type="submit" class="submit-button">DEVAM ET</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      closePopup() {
        this.$emit("close");
      },
      submitForm() {
        // Kayıt işlemleri burada yapılabilir
        console.log("Kayıt olunuyor...");
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 90%; /* Genişliği daha fazla kapsaması için */
  max-width: 500px; /* Maksimum genişliği artırıldı */
  text-align: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 90%; /* Çok uzun olmasını engellemek için */
  height: auto; /* İçeriğe göre ayarlanır */
  overflow-y: auto; /* İçerik taşarsa kaydırma ekler */
}

  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  
  h2 {
    color: #00a69c;
    margin-bottom: 10px;
  }
  
  .subtitle {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    width: 100%;
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .form-footer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
    font-size: 12px;
    color: #666;
  }
  
  .submit-button {
    background-color: #00a69c;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #008f84;
  }
  </style>
  
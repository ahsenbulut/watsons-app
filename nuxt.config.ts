export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    "@fortawesome/fontawesome-free/css/all.min.css", // Font Awesome CSS
    "bootstrap/dist/css/bootstrap.min.css", // Bootstrap CSS
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css", // Bootstrap Icons CDN
        },
      ],
    },
  },
  plugins: [
    "~/plugins/bootstrap.client.ts", // Bootstrap JS için bir plugin ekledik
  ],
});

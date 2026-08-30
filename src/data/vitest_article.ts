import { Article } from "./types";

export const vitestArticle: Article = {
  title: "Vitest ile Güvenilir Portföy Etkileşimleri",
  excerpt:
    "Menü, tema, modal, route ve hash navigasyonu gibi kullanıcı davranışlarını React Testing Library ile güvenceye almak.",
  publishedAt: "2 Ağustos 2026",
  readingTime: "5 dk okuma",
  tags: ["Vitest", "Testing Library", "Quality"],
  slug: "vitest-ile-react-portfoy-testleri",
  sections: [
    {
      heading: "Neyi test ediyoruz?",
      paragraphs: [
        "Testleri uygulamanın iç detaylarına değil kullanıcının gördüğü davranışlara odakladık. Mobil menünün açılıp kapanması, koyu temanın saklanması, servis modalı, showcase içeriği ve route hash'ine kaydırma ayrı senaryolarla doğrulanıyor.",
      ],
    },
    {
      heading: "Navigasyon hatasını teste dönüştürmek",
      paragraphs: [
        "Showcase sayfasından ana sayfadaki bölümlere dönüşte hash hedefinin zamanında bulunmaması gerçek bir kullanım problemiydi. ScrollToHash bileşeni route ve hash değişikliklerini izliyor; ilgili bölüm render edildikten sonra scrollIntoView çağrılıyor. Bu davranış için bağımsız bir regresyon testi ekledik.",
      ],
    },
    {
      heading: "Build zinciri",
      paragraphs: [
        "Üretim komutu önce tsc --noEmit ile tip kontrolü, ardından Vite build çalıştırıyor. Test komutu Vitest'i tek seferlik CI modunda yürütüyor. Böylece hatalı tipler, bozulan etkileşimler ve paketleme sorunları yayın öncesinde yakalanıyor.",
      ],
    },
  ],
};

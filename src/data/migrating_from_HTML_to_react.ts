import { Article } from "./types";

export const migratingFromHTMLToReactArticle: Article = {
  title: "Statik Portföyü React ve TypeScript'e Taşımak",
  excerpt:
    "Fetch ile yüklenen HTML parçalarından tip güvenli, bileşen tabanlı ve sürdürülebilir bir React mimarisine geçişte aldığımız kararlar.",
  publishedAt: "2 Ağustos 2026",
  readingTime: "7 dk okuma",
  tags: ["React", "TypeScript", "Architecture"],
  slug: "statik-portfoyden-react-typescript-mimarisine",
  sections: [
    {
      heading: "Nereden başladık?",
      paragraphs: [
        "Proje başlangıçta her bölümü ayrı bir HTML dosyasından fetch ile alıyor ve innerHTML kullanarak sayfaya yerleştiriyordu. Bu yaklaşım küçük bir sitede çalışsa da tip güvenliği, test edilebilirlik ve durum yönetimi açısından büyümeyi zorlaştırıyordu.",
        "İlk hedefimiz mevcut tasarımı ve içerikleri kaybetmeden gerçek React bileşenleri oluşturmaktı. Header, Hero, About, Skills, Portfolio ve diğer tüm alanları bağımsız TSX bileşenlerine ayırdık.",
      ],
    },
    {
      heading: "Ham HTML bağımlılığını kaldırmak",
      paragraphs: [
        "Dönüşümün kritik noktası yalnızca React kabuğu eklemek değildi. dangerouslySetInnerHTML ve raw HTML importlarını tamamen kaldırdık. Menü, modal, tema, akordeon ve iletişim formu gibi etkileşimler React state ve event handler'larıyla yeniden yazıldı.",
        "Strict TypeScript ayarları sayesinde DOM erişimleri, form olayları ve üçüncü taraf kütüphaneler derleme aşamasında kontrol edilir hale geldi.",
      ],
    },
    {
      heading: "Sonuç",
      paragraphs: [
        "Yeni yapı Vite ile hızlı geliştirme sunuyor, üretim build'inde tip kontrolü çalıştırıyor ve her bölümün bağımsız geliştirilmesine izin veriyor. Bu temel, sonraki aşamalarda routing, çoklu dil ve otomatik testleri güvenle eklememizi sağladı.",
      ],
    },
  ],
};

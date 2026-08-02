export type Article = {
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  slug: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

export type Application = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
};

export const articles: Article[] = [
  {
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
  },
  {
    title: "Dört Dilli ve RTL Destekli Bir Portföy Tasarlamak",
    excerpt:
      "Türkçe, İngilizce, Almanca ve Arapça desteğini merkezi bir sözlük, kalıcı dil tercihi ve RTL düzeniyle nasıl kurduk?",
    publishedAt: "2 Ağustos 2026",
    readingTime: "6 dk okuma",
    tags: ["i18n", "React", "Accessibility"],
    slug: "react-portfoyde-coklu-dil-ve-rtl",
    sections: [
      {
        heading: "Merkezi çeviri katmanı",
        paragraphs: [
          "Metinleri bileşenlerin içine dağıtmak yerine tek bir çeviri sözlüğünde topladık. useI18n hook'u aktif dili ve çeviri fonksiyonunu bütün bileşenlere ulaştırıyor. Böylece menüden SEO başlıklarına kadar ortak bir dil kaynağı kullanılıyor.",
          "Dil seçimi localStorage içinde saklandığı için ziyaretçi siteye geri döndüğünde son tercihi korunuyor.",
        ],
      },
      {
        heading: "Arapça için RTL",
        paragraphs: [
          "Arapça yalnızca metin çevirisi değildir; sayfa akışının da sağdan sola dönmesi gerekir. Aktif dil Arapça olduğunda html elementinin dir değeri rtl olarak ayarlanıyor. Navigasyon, iletişim bilgileri ve ikon boşlukları RTL seçicileriyle uyarlanıyor.",
        ],
      },
      {
        heading: "SEO ve erişilebilirlik",
        paragraphs: [
          "Helmet üzerinden title, description ve Open Graph alanlarını seçilen dile göre güncelliyoruz. Dil seçicisinin erişilebilir etiketi var ve ikonlar dekoratif olduklarında ekran okuyuculardan gizleniyor. Bu yaklaşım çoklu dili görsel bir seçenekten gerçek bir kullanıcı deneyimine dönüştürüyor.",
        ],
      },
    ],
  },
  {
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
  },
];

export const applications: Application[] = [
  {
    title: "Weather Forecast",
    description:
      "A responsive weather experience focused on quick, readable forecasts.",
    image: "/assets/images/portfolio/weather-forecast.png",
    technologies: ["React", "API", "CSS"],
  },
  {
    title: "Budget Tracker",
    description:
      "A simple application for tracking spending and keeping personal budgets visible.",
    image: "/assets/images/portfolio/budgettracker.png",
    technologies: ["TypeScript", "React", "Local Storage"],
  },
  {
    title: "Home Library",
    description:
      "A personal library interface for organizing books and favorites.",
    image: "/assets/images/portfolio/home-library.png",
    technologies: ["React", "JavaScript", "CSS"],
  },
];

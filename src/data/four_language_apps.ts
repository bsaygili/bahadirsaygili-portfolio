import { Article } from "./types";

export const fourLanguageApps: Article = {
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
};

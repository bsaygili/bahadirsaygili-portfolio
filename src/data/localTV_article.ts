import { Article } from "./types";

export const localTvArticle: Article = {
  title: "React Native ile TV Odaklı Kişisel Bir Yayın Oynatıcısı Geliştirmek",
  excerpt:
    "LocalTV’yi Android TV ve tvOS için geliştirirken kanal listelerinden kumanda odağına, alternatif yayınlardan EPG ve performans testlerine uzanan teknik kararlar.",
  publishedAt: "25 Ağustos 2026",
  readingTime: "9 dk okuma",
  tags: ["React Native", "Android TV", "tvOS", "TypeScript"],
  slug: "react-native-ile-kisisel-tv-oynaticisi-gelistirmek",
  sections: [
    {
      heading: "Önemli not ve projenin sınırları",
      paragraphs: [
        "Bu yazı, eğitim ve yazılım geliştirme deneyimini paylaşma amacıyla hazırlanmıştır; hukuki danışmanlık niteliğinde değildir. LocalTV herhangi bir televizyon yayını, kanal paketi, abonelik veya medya içeriği sağlamaz. Uygulama yalnızca kullanıcının kendisinin tanımladığı uzak M3U ve XMLTV kaynaklarını okuyup oynatabilen bir istemcidir.",
        "Bir yayın adresinin internette erişilebilir olması, o yayının yeniden dağıtılmasına veya izlenmesine otomatik olarak izin verildiği anlamına gelmez. Uygulamayı kullanan kişinin bulunduğu ülkedeki mevzuata, kaynak sağlayıcının koşullarına ve telif haklarına uyması; yalnızca erişim ve kullanım yetkisine sahip olduğu kaynakları eklemesi gerekir. Örnek açık kaynak listeler, teknik format incelemesi için referans olabilir; ancak listedeki her bağlantının hukuki durumu ve sürekliliği ayrı ayrı değerlendirilmelidir.",
      ],
    },
    {
      heading: "Neden TV için ayrı bir deneyim gerekiyor?",
      paragraphs: [
        "Mobil bir React Native ekranını büyük bir ekrana taşımak, iyi bir TV uygulaması oluşturmuyor. Telefonda dokunulan bir düğme televizyonda yön tuşlarıyla bulunmalı, odaklandığında açıkça fark edilmeli ve kullanıcı geri tuşuna bastığında beklediği yere dönmelidir. Dikey telefon, yatay tablet ve uzaktan kumandalı TV aynı veri katmanını kullanabilse de farklı etkileşim koşullarına sahiptir.",
        "LocalTV bu nedenle Android TV ve tvOS’u ana hedef olarak ele alıyor. React Native TVOS tabanı, ortak TypeScript kodunu korurken TV odağı, kumanda olayları ve platforma özgü oynatma davranışları için gerekli kancaları sunuyor. Güvenli alan değerleri, ekran yönü ve alt navigasyon ölçüleri birlikte hesaplanarak kanal listesinin veya kontrol düğmelerinin ekran dışında kalması engelleniyor.",
      ],
    },
    {
      heading: "Kanal verisini uygulamaya almak",
      paragraphs: [
        "Uygulamanın giriş noktası M3U oynatma listeleri. Ayrıştırıcı, EXTINF satırlarındaki kanal adı, grup, logo ve tvg-id gibi alanları okuyor; ardından gelen yayın adresiyle tek bir kanal nesnesi oluşturuyor. Birden fazla kaynak aynı anda yüklenebiliyor ve son başarılı sonuç cihazda önbelleğe alınıyor. Böylece kaynak geçici olarak erişilemezse uygulama, boş bir ekran yerine daha önce alınan kanal kataloğunu gösterebiliyor. Elbette internet yayınının gerçekten oynatılması için bağlantı yine gerekli.",
        "Gerçek listelerde kategori adları düzensiz olabiliyor. Aynı anlama gelen fakat farklı yazılan gruplar normalleştirilerek ortak başlıklarda birleştiriliyor. Kullanıcı tüm kanalları görebiliyor, kategoriye göre filtreleyebiliyor, arama yapabiliyor, favori belirleyebiliyor ve kendi koleksiyonlarını oluşturabiliyor. Tercihler ve koleksiyonlar, uzak bir kullanıcı hesabı yerine cihazdaki yerel depolamada tutuluyor.",
      ],
    },
    {
      heading: "Yayın oynatıcısını dayanıklı hâle getirmek",
      paragraphs: [
        "IP tabanlı yayınlarda tek bir adresin her zaman çalışacağını varsaymak gerçekçi değil. Aynı kanalın birden fazla adresi varsa LocalTV bunları tek kanal altında alternatifler olarak birleştiriyor. İlk adres açılamazsa sıradaki aday deneniyor; son çalışan adres, daha sonraki açılışlar için önceliklendiriliyor. Başarılı açılış süresi ve hata sayısı gibi sağlık verileri de cihazda saklanıyor.",
        "Buradaki en hassas konulardan biri, oynatıcı olaylarının durum makinesiyle uyumlu olması. Video görüntüsü başlamış olsa bile geç gelen bir yükleniyor olayı, arayüzü tekrar bekleme durumuna sokabiliyor. Bu nedenle her oynatma denemesi, aktif adres ve deneme kimliğiyle ilişkilendiriliyor. Eski bir adrese ait gecikmiş olaylar, yeni denemenin durumunu değiştiremiyor. Yükleniyor, hazır, oynuyor, hata ve alternatif adrese geçiş durumları birbirinden ayrılarak sonsuz yükleme göstergesi gibi sorunlar önleniyor.",
        "Oynatıcı kontrolleri ekrana dokunulduğunda veya kumandadan bir tuş olayı geldiğinde görünüyor, hareketsizlikten sonra otomatik olarak kayboluyor. Önceki ve sonraki kanal, favoriye ekleme ve oynatıcıyı kapatma işlemlerine kumandayla odaklanılabiliyor. Dokunmatik cihazlarda sağa veya sola kaydırma da kanal değiştirmek için kullanılabiliyor.",
      ],
    },
    {
      heading: "Yayın kontrolü ve gözlemlenebilirlik",
      paragraphs: [
        "Kişisel bir kanal arşivinde daha fazla adres toplamak yerine hangi adreslerin gerçekten çalıştığını bilmek daha değerli. Yayın Kontrolü ekranı kanalları sırayla test ediyor, başarı ve hata sonuçlarını kaydediyor ve sorunlu kanalların listede daha geride değerlendirilmesine yardım ediyor. Toplu kontrol, uygulama arka plana geçtiğinde duraklatılıyor; böylece gereksiz ağ trafiği ve kaynak kullanımı azaltılıyor.",
        "Bu kontrol; DRM aşma, yetkisiz erişim sağlama veya içeriği kopyalama mekanizması değil. Yalnızca kullanıcının tanımladığı bir adresin, uygulamanın desteklediği oynatma akışında yanıt verip vermediğini ve ne kadar sürede açıldığını ölçüyor. Kaynağın çalışıyor olması, kullanım hakkı konusunda bir sonuç üretmiyor.",
      ],
    },
    {
      heading: "XMLTV ile program rehberi",
      paragraphs: [
        "M3U kaydındaki tvg-id değeri, XMLTV rehberindeki kanal kimliğiyle eşleştirildiğinde kanal satırında şimdi yayında olan ve sıradaki program gösterilebiliyor. Program başlangıç ve bitiş saatlerinden ilerleme oranı hesaplanarak oynatıcı üzerinde bir zaman çubuğu sunuluyor. Ayrı rehber ekranında günlük akış incelenebiliyor.",
        "Hatırlatıcılar, kullanıcının açık seçimiyle yerel bildirim olarak planlanıyor. Bu noktada platform farkları soyutlanıyor: Bildirim izni, zamanlama olanakları ve TV cihazlarındaki destek durumu kontrol edilmeden özellik etkinleştirilmiyor. EPG verisi de bir içerik yayını değil; program bilgisini gösteren, doğruluğu ve güncelliği kaynak sağlayıcıya bağlı bir üst veri katmanı.",
      ],
    },
    {
      heading: "Çevrimdışı durum ve hata deneyimi",
      paragraphs: [
        "Ağ bağlantısı kesildiğinde kullanıcıya uygulamanın çevrimdışı olduğu açıkça bildiriliyor. Daha önce önbelleğe alınan kanal ve rehber verileri gezilebilir durumda kalıyor; ancak arayüz, internet gerektiren bir yayının oynatılabileceği izlenimini vermiyor. Bağlantı geri geldiğinde durum güncelleniyor ve kullanıcı normal akışına devam edebiliyor.",
        "Hata ekranlarındaki geri davranışı da TV deneyiminin bir parçası. Tekrar deneme akışı kullanıcıyı uygulamadan çıkmaya zorlamamalı; önce oynatıcı katmanı kapanmalı, ardından kanal listesine dönülmeli. Android’in donanımsal geri tuşu, tvOS menü davranışı ve ekrandaki kapatma eylemi aynı navigasyon niyetinde buluşturuluyor.",
      ],
    },
    {
      heading: "Performans, test ve teknik borç",
      paragraphs: [
        "Büyük oynatma listeleri, ilk prototipte görülmeyen maliyetleri ortaya çıkarıyor. Projede 10.000 kanallı M3U ayrıştırma, 20.000 alternatif adresi birleştirme ve 50.000 EPG kaydını indeksleme senaryoları için stres testleri bulunuyor. Bu testler yalnızca işlemin tamamlanmasını değil, belirlenen regresyon bütçeleri içinde kalmasını da kontrol ediyor.",
        "TypeScript tip kontrolü, ESLint ve Jest testleri tek bir doğrulama komutunda birleştirildi. Android tarafında soğuk açılış ve bellek kullanımı ölçülüyor; uzun süreli izleme senaryosunda bellek eğilimi ve beklenmeyen süreç yeniden başlatmaları takip edilebiliyor. CI akışı, kontrollerin ardından ARM mimarisi için hata ayıklama amaçlı bir APK üretiyor. Bu ölçümler, performansı bir his olmaktan çıkarıp tekrarlanabilir bir mühendislik girdisine dönüştürüyor.",
        "Teknik borç çalışmasında kullanılmayan paketleri silmek kadar yarım kalan özellikleri tamamlamak da önemliydi. Örneğin koleksiyonlar ilk hâlinde oluşturulabiliyor fakat açılamıyor ve içindeki kanallar oynatılamıyordu. Listeyi açma, kanalı oynatma, listeden çıkarma ve listeyi silme akışları tamamlanarak ekranda duran fakat değer üretmeyen bir özellik, gerçek bir kullanım aracına çevrildi.",
      ],
    },
    {
      heading: "Güvenlik ne anlama geliyor?",
      paragraphs: [
        "Mobil uygulama güvenliğinde APK’nin hiçbir zaman incelenemeyeceğini veya değiştirilemeyeceğini vadetmek mümkün değil. İmzalı dağıtım paketi, gizli anahtarların depoya eklenmemesi, geliştirme ayarlarının kapatılması, ağ güvenliği yapılandırması, bağımlılık denetimi ve kod küçültme gibi katmanlar saldırı maliyetini artırabilir. Ancak istemciye gömülen her sır, sonunda cihaz sahibinin erişebildiği bir ortamdadır; gerçek sırlar güvenilir bir sunucuda tutulmalıdır.",
        "LocalTV kullanıcı hesabı istemediği ve merkezi bir uygulama sunucusuna bağlı olmadığı için topladığı veri yüzeyi de sınırlı. Favoriler, listeler, son çalışan yayın adresleri ve ölçümler cihazda kalıyor. Gelecekte çökme raporlama veya cihaz istatistikleri eklenirse veri minimizasyonu, açık bilgilendirme, kullanıcı tercihi, saklama süresi ve ilgili gizlilik mevzuatı tasarımın başlangıç koşulu olmalı.",
      ],
    },
    {
      heading: "Sonuç",
      paragraphs: [
        "LocalTV çalışması, React Native ile TV uygulaması geliştirmenin yalnızca video oynatmaktan ibaret olmadığını gösterdi. Kumanda odağı, güvenli alan, ekran yönü, asenkron oynatıcı olayları, bozuk kaynaklar, rehber eşleştirme, yerel depolama ve büyük veri setleri birlikte ele alındığında ürün seviyesinde bir deneyim ortaya çıkıyor.",
        "Projenin en değerli çıktısı kanal sayısı değil; hatalara dayanabilen, ölçülebilen ve kullanıcının kendi yetkili kaynaklarını düzenlemesini kolaylaştıran bir istemci mimarisi oldu. Bundan sonraki adımlar; uzaktan yapılandırma, isteğe bağlı ve mahremiyet odaklı hata raporlama, kompakt ekranlarda koleksiyon akışını geliştirme ve gerçek cihazlarda daha uzun süreli performans ölçümleri olacak.",
      ],
    },
  ],
};

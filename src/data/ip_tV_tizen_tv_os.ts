import { Article } from "./types";

export const samsungTizenArticle: Article = {
  title: "Zapla: 2015 Samsung Tizen TV için Web Uygulaması Geliştirmek",
  excerpt:
    "Tizen Studio kurulumundan sertifika ve DUID sürecine, M3U ayrıştırmadan AVPlay ile HLS oynatmaya kadar gerçek cihaz üzerinde geliştirdiğimiz, eğitim amaçlı, Zapla uygulamasının teknik günlüğü.",
  publishedAt: "31 Ağustos 2026",
  readingTime: "14 dk okuma",
  tags: ["Samsung Tizen", "JavaScript", "AVPlay", "Smart TV"],
  slug: "samsung-tizen-tv-web-uygulamasi-gelistirme",
  sections: [
    {
      heading: "Önemli not: eğitim amacı ve içerik sorumluluğu",
      paragraphs: [
        "Bu çalışma yalnızca yazılım geliştirme eğitimi ve kişisel cihaz testi amacıyla hazırlanmıştır. Proje herhangi bir televizyon yayını, kanal paketi, abonelik veya medya içeriği sağlamaz. Kullanıcı yalnızca erişim ve kullanım hakkına sahip olduğu kaynakları eklemelidir.",
        "Bir M3U veya M3U8 adresinin internette erişilebilir olması, içeriği yeniden dağıtma ya da ticari bir uygulamada kullanma hakkı vermez. Kanal adları, logoları, programları ve yayınları ilgili hak sahiplerine aittir. Kaynak seçimi, lisanslar, bölgesel kurallar ve yerel mevzuata uygunluk tamamen kullanıcı sorumluluğundadır.",
      ],
    },
    {
      heading: "Cihaz ve geliştirme ortamı",
      paragraphs: [
        "Deneyi Samsung UE55J6370 üzerinde yaptık. J serisi 2015 model olan bu televizyon Tizen 2.3 kullanıyor. Bu ayrıntı önemli; çünkü eski web motorunda fetch gibi güncel API'ler bulunmuyor ve modern JavaScript sözdiziminin tamamı desteklenmiyor.",
        "Bilgisayara Tizen Studio, Samsung TV Extensions ve Samsung Certificate Extension kurduk. TV ve bilgisayarı aynı ağa aldıktan sonra Apps ekranında 1-2-3-4-5 tuşlarıyla Developer Mode'u açtık, Host PC IP alanına bilgisayarın güncel yerel IP adresini girdik ve TV'yi tamamen yeniden başlattık.",
        "Windows'ta bilgisayarın IP adresini ipconfig komutuyla öğrendik. Tizen Studio Device Manager bölümünde TV'nin yerel IP adresini 26101 portuyla ekledik. Bilgisayarın DHCP ile IP değiştirmesi, bağlantı sırasında yaşadığımız ilk gerçek problemdi.",
      ],
      code: `ipconfig

              # Device Manager ayarı
              Name: SalonTV
              IP: TV_IP_ADRESI
              Port: 26101`,
    },
    {
      heading: "Sertifika, DUID ve cihaz izni",
      paragraphs: [
        "Samsung TV rastgele bir WGT paketini kabul etmiyor. Certificate Manager'da Samsung ve TV seçenekleriyle Author Certificate ve Distributor Certificate oluşturmak gerekiyor. Distributor Certificate hazırlanırken bağlı TV'nin DUID değeri ekleniyor.",
        "Ardından Device Manager'da cihaza Permit to install applications komutu veriliyor. Başka bir TV'ye kurulum yapılacaksa o televizyonun DUID değeri sertifikaya eklenmeli ve paket yeniden imzalanmalı. Author Certificate dosyasını güvenli biçimde yedeklemek güncellemeler için kritik.",
      ],
    },
    {
      heading: "Tizen Web Application yapısı",
      paragraphs: [
        "Uygulama HTML, CSS, JavaScript ve config.xml dosyasından oluşuyor. 2015 cihaz desteği için required_version değerini 2.3 tuttuk. Dış kaynaklara erişebilmek için internet ayrıcalığını ve access origin kuralını manifestte tanımladık.",
        "Uygulama kimliği ve paket kimliği Tizen kurallarına uygun ve benzersiz olmalı. Ayrıca eski cihaz kurucusunun boşluklu paket adında sorun çıkardığını gördük: boşluklu paket adı kurulmazken Zapla.wgt başarıyla kuruldu.",
      ],
      code: `<?xml version="1.0" encoding="UTF-8"?>
              <widget xmlns="http://www.w3.org/ns/widgets"
                      xmlns:tizen="http://tizen.org/ns/widgets"
                      version="1.0.0">
                <tizen:application
                  id="AbCdEf1234.HelloTV"
                  package="AbCdEf1234"
                  required_version="2.3" />
                <content src="index.html" />
                <access origin="*" subdomains="true" />
                <tizen:privilege name="http://tizen.org/privilege/internet" />
                <tizen:profile name="tv-samsung" />
              </widget>`,
    },
    {
      heading: "Tek kod tabanı, iki oynatıcı",
      paragraphs: [
        "Arayüz, kanal listesi ve kumanda navigasyonu web ile TV arasında ortak. Oynatıcı katmanı çalışma ortamına göre seçiliyor: normal tarayıcıda HTML5 video, Samsung TV'de webapis.avplay. Böylece aynı kaynak kod tarayıcıda geliştirilebilir, gerçek TV'de ise cihazın donanımsal medya altyapısından yararlanabilir.",
        "Tizen ortamını window.webapis ve webapis.avplay varlığını kontrol ederek algılıyoruz. Masaüstü tarayıcıların tamamı HLS yayınlarını yerleşik olarak oynatmadığı için üretim sürümünde web tarafına hls.js gibi bir uyumluluk katmanı eklenebilir. Tizen 2.3 tarafında ise kodu ES5 uyumlu tutmak gerekiyor.",
      ],
      code: `var isTizen =
              typeof window.webapis !== "undefined" &&
              !!window.webapis.avplay;

            if (isTizen) {
              playWithAvPlay(channel);
            } else {
              playWithHtmlVideo(channel);
            }`,
    },
    {
      heading: "HLS yayınında neden AVPlay kullandık?",
      paragraphs: [
        "İlk sürümde HTML5 video elementi kullandık. Kanal listesi açılıyor fakat yayın başlamıyordu. TV'de YouTube akıcı çalıştığı için ağın sağlam olduğunu biliyorduk. TV8, NTV ve ATV akışları bilgisayardan test edildiğinde HTTP 200 dönüyordu; sorun ağdan çok eski Tizen'in HTML5 HLS davranışıydı.",
        "Samsung, HLS gibi adaptif yayınlar için AVPlay API'sini öneriyor. AVPlay Tizen 2.3'ten beri mevcut ve televizyonun yerel oynatma katmanını kullanıyor. open, setDisplayRect, prepareAsync ve play yaşam döngüsüyle yayın başlatılıyor; tamponlama ve hata olayları kullanıcıya görünür biçimde aktarılıyor.",
        "AVPlay'e geçtikten sonra oynatıcıyı kapatmadan yeni bir yayın açmanın durum hatalarına yol açabileceğini de gördük. Yeni kanal seçildiğinde önce mevcut oynatıcı durduruluyor ve kapatılıyor, ardından yeni adres açılıyor.",
      ],
      code: `webapis.avplay.open(channel.url);
              webapis.avplay.setDisplayRect(0, 0, 1920, 1080);
              webapis.avplay.setDisplayMethod("PLAYER_DISPLAY_MODE_LETTER_BOX");

              webapis.avplay.prepareAsync(
                function () {
                  webapis.avplay.play();
                },
                function (error) {
                  showError(error.name);
                }
              );`,
    },
    {
      heading: "M3U listesini dinamik yüklemek",
      paragraphs: [
        "Kanalları uygulamanın içine sabitlemek yerine çalışma anında bir M3U kaynağı okunuyor. Tizen 2.3'te fetch bulunmadığı için XMLHttpRequest kullandık. İstek için 15 saniyelik zaman aşımı ve OK tuşuyla tekrar deneme akışı ekledik; aksi durumda eski web motoru kullanıcıyı sonsuz yükleme ekranında bırakabiliyor.",
        "EXTINF satırından kanal adı alınıyor ve onu takip eden HTTP adresiyle kanal nesnesi oluşturuluyor. Gerçek listelerde logo, grup ve tvg-id gibi ek alanlar da ayrıştırılabilir. Bu eğitim sürümü mümkün olduğunca küçük tutuldu.",
        "Yayın adresleri zamanla değişebilir, bölgesel olarak engellenebilir, süreli token isteyebilir veya eski cihazın desteklemediği kodekler kullanabilir. Bir bağlantının çalışması kullanım izni anlamına gelmediği gibi bugün çalışan bir akışın yarın da çalışacağının garantisi yoktur.",
      ],
      code: `var request = new XMLHttpRequest();
              request.open("GET", playlistUrl, true);
              request.timeout = 15000;

              request.onload = function () {
                channels = parseM3U(request.responseText);
              };

              request.onerror = showNetworkError;
              request.ontimeout = showNetworkError;
              request.send();`,
    },
    {
      heading: "Kumanda navigasyonu",
      paragraphs: [
        "TV uygulamasında fare yerine yön tuşları ve odak sistemi var. Yukarı ve aşağı kanal seçiyor, OK yayını açıyor, sol menüyü gösteriyor, sağ menüyü kapatıyor. Geri tuşu önce oynatıcıdan listeye dönüyor, liste zaten açıksa uygulamadan çıkıyor.",
        "Odaklanan kanal görsel olarak belirgin olmalı ve uzun listede seçim görünür alanda tutulmalı. Aynı keydown olayları masaüstü tarayıcıda klavyeyle de çalıştığı için temel TV deneyimini bilgisayarda test edebiliyoruz.",
      ],
      code: `window.addEventListener("keydown", function (event) {
                if (event.keyCode === 38) selectPrevious();
                if (event.keyCode === 40) selectNext();
                if (event.keyCode === 13) playSelected();
                if (event.keyCode === 37) openMenu();
                if (event.keyCode === 39) closeMenu();
                if (event.keyCode === 10009) handleBack();
              });`,
    },
    {
      heading: "Karşılaştığımız gerçek problemler",
      paragraphs: [
        "Bilgisayarın IP adresi değişince TV'nin Developer Mode ekranında eski Host PC IP kaldı ve bağlantı kurulamadı. Developer Mode sonrasında TV tamamen yeniden başlatılmadan 26101 portu açılmadı. İlk sertifika profili genel Tizen distributor sertifikası kullandığı için paket reddedildi; Samsung TV sertifikası, DUID ve install permit gerekliydi.",
        "Tizen Studio uygulamayı kurmasına rağmen Could not launch the null application hatası verdi. Uygulamayı TV'nin Apps ekranından elle açmak gerekti. Bu hata özellikle eski 2015 cihazlarda görülebiliyor.",
        "İlk çevrim içi kanal listesi denemesinde uygulama Kanallar yükleniyor ekranında kaldı. Ağ isteğine görünür hata durumu ve zaman aşımı ekledik. Sonraki tanılamada yayın sunucularının erişilebilir olduğunu, asıl oynatma sorununun HTML5 video katmanından kaynaklandığını belirledik.",
      ],
    },
    {
      heading: "Bilinen teknik kısıtlar",
      paragraphs: [
        "Tizen 2.3 eski bir JavaScript motoruna sahip. Fetch, Promise davranışı ve modern sözdizimi gibi özelliklere güvenemiyoruz. Bazı HTTPS sunucuları eski TLS istemcileriyle çalışmayabilir; bazı HLS etiketleri ve yeni medya kapsayıcıları da bu platformda desteklenmez.",
        "Emülatör gerçek TV'nin medya davranışını birebir temsil etmiyor. Güncel Tizen Studio'da Tizen 2.3 geliştirme profili artık resmî olarak desteklenmediğinden, eski cihaz uyumluluğu gerçek televizyon üzerinde doğrulanmalı.",
        "Web tarayıcısında CORS kuralları M3U veya yayın isteğini engelleyebilir. TV tarafında çalışan bir adres web tarafında, web tarafında çalışan bir adres de eski TV'nin kodek veya TLS kısıtları nedeniyle çalışmayabilir.",
      ],
    },
    {
      heading: "Kaynak kod, paketleme ve WGT sınırı",
      paragraphs: [
        "Kaynak projede HTML, CSS, JavaScript, Tizen manifesti, uygulama ikonu, README, MIT lisansı ve parametreli PowerShell build betiği bulunuyor. Kullanıcı PLAYLIST_URL değerini yalnızca kullanım iznine sahip olduğu kaynakla değiştirmeli, kendi Samsung sertifikasını oluşturmalı ve kendi TV'sinin DUID değerini eklemelidir.",
        "Hazır WGT dosyasını genel indirmeye açmıyoruz. Test WGT'si kişisel Author Certificate ve belirli TV DUID'lerini taşıyan Distributor Certificate ile imzalandığından başka televizyonlarda doğrudan çalışmaz. Doğru ve güvenli yöntem kaynak kodu indirip paketi kendi sertifikanızla üretmektir.",
        "Tizen Studio arayüzünden Run As ve Tizen Web Application seçilebilir. Projedeki build.ps1 betiği de sertifika profili ve hedef TV adını parametre olarak alarak build, package ve isteğe bağlı install adımlarını çalıştırır.",
      ],
      code: `.\scripts\build.ps1 -ProfileName "profil-adiniz"
              .\scripts\build.ps1 -ProfileName "profil-adiniz" -TargetName "TV-hedef-adi" -Install`,
    },
    {
      heading: "Sonuç",
      paragraphs: [
        "Eski bir Samsung TV için uygulama geliştirmek hâlâ mümkün; fakat modern web geliştirmeden farklı olarak sertifika, cihaz izni, ES5 uyumluluğu, medya API'si ve gerçek cihaz davranışı birlikte düşünülmeli. Tek kod tabanı yaklaşımında en önemli karar oynatıcıyı soyutlamak oldu: web için HTML5, Samsung TV için AVPlay.",
        "Bu eğitim projesi yayın servisi değil, kendi yetkili medya kaynaklarınızla deney yapabileceğiniz küçük bir teknik örnektir. Kaynak kodu kendi sertifikanızla derleyebilir ve karşılaştığınız cihaz veya format farklılıklarını belgeleyerek geliştirebilirsiniz.",
      ],
    },
  ],
};

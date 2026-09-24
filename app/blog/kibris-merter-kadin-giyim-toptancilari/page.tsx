import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kıbrıs Merter Kadın Giyim Toptancıları | Rota Tedarik",
  description:
    "Kıbrıs'tan Merter kadın giyim toptancılarından ürün almak isteyen butik ve mağazalar için tedarik hizmeti. Ürün fotoğrafını WhatsApp'tan gönderin, Merter'de araştıralım.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/kibris-merter-kadin-giyim-toptancilari",
  },
  openGraph: {
    title: "Kıbrıs Merter Kadın Giyim Toptancıları",
    description:
      "Kıbrıs'taki butik ve mağazalar için Merter kadın giyim piyasasından ürün araştırma ve tedarik hizmeti.",
    url:
      "https://www.merterdentedarik.com/blog/kibris-merter-kadin-giyim-toptancilari",
    type: "article",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#181716]">
      <article className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-24">

        <header className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            ROTA TEDARİK • MERTER → KIBRIS
          </p>

          <h1 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Kıbrıs Merter Kadın Giyim Toptancıları
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
            Kıbrıs&apos;ta butik, mağaza veya online kadın giyim satışı
            yapıyorsanız Merter&apos;de ürün aramak için İstanbul&apos;a
            gelmenize gerek kalmadan bize ulaşabilirsiniz. Aradığınız
            modelin fotoğrafını gönderin, Merter kadın giyim piyasasında
            sizin için araştıralım.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/905324975361?text=Merhaba%2C%20K%C4%B1br%C4%B1s%27tay%C4%B1m.%20Merter%20kad%C4%B1n%20giyim%20toptanc%C4%B1lar%C4%B1ndan%20%C3%BCr%C3%BCn%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#242321] px-8 py-4 text-sm font-semibold text-white"
            >
              WhatsApp'tan Ürün Sor →
            </a>

            <a
              href="https://wa.me/905324975361?text=Merhaba%2C%20K%C4%B1br%C4%B1s%27tay%C4%B1m.%20Arad%C4%B1%C4%9F%C4%B1m%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BCn%C3%BCn%20foto%C4%9Fraf%C4%B1n%C4%B1%20g%C3%B6ndermek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#242321] px-8 py-4 text-sm font-semibold"
            >
              Ürün Fotoğrafı Gönder
            </a>
          </div>

          <p className="mt-4 text-sm text-neutral-500">
            WhatsApp: 0532 497 53 61
          </p>
        </header>

        <div className="my-12 overflow-hidden rounded-3xl">
          <img
            src="/images/kibrisgiyim.jpeg"
            alt="Kıbrıs Merter kadın giyim toptancıları ve ürün tedariği"
            className="h-[430px] w-full object-cover md:h-[600px]"
          />
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6">
            <span className="text-xs font-semibold text-neutral-400">01</span>
            <h2 className="mt-3 text-xl font-semibold">
              Aradığınız Ürünü Gönderin
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Elbise, takım, ceket veya başka bir kadın giyim ürününün
              fotoğrafını WhatsApp&apos;tan gönderin.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <span className="text-xs font-semibold text-neutral-400">02</span>
            <h2 className="mt-3 text-xl font-semibold">
              Merter'de Araştıralım
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Talebinize uygun ürün seçeneklerini Merter tekstil
              piyasasında araştıralım.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <span className="text-xs font-semibold text-neutral-400">03</span>
            <h2 className="mt-3 text-xl font-semibold">
              Kıbrıs'a Gönderelim
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Siparişinizi hazırlayıp uygun siparişlerde aynı gün kargo
              çıkışı için süreci organize edelim.
            </p>
          </div>
        </section>

        <div className="prose prose-neutral mt-16 max-w-none prose-headings:tracking-tight prose-p:leading-8">

          <h2>Merter Kadın Giyim Toptancılarından Kıbrıs'a Ürün</h2>

          <p>
            Merter, İstanbul&apos;da kadın giyim ürünlerinin yoğun olarak
            bulunduğu tekstil bölgelerinden biridir. Kıbrıs&apos;ta kadın
            giyim satışı yapan işletmeler için ürün araştırma ve tedarik
            sürecini uzaktan yürütüyoruz.
          </p>

          <p>
            Belirli bir model arıyorsanız fotoğrafını göndermeniz
            yeterlidir. Talebinize göre Merter&apos;de uygun ürün
            seçeneklerini araştırabiliriz.
          </p>

          <h2>Kıbrıs'taki Butikler İçin Merter Toptancıları</h2>

          <p>
            Kıbrıs&apos;ta butik işletiyorsanız farklı toptancılardaki
            ürünleri tek tek araştırmak zaman alabilir. Rota Tedarik ile
            aradığınız ürün grubunu veya modeli bize ileterek ürün
            araştırma sürecini kolaylaştırabilirsiniz.
          </p>

          <h2>Merter'den Hangi Kadın Giyim Ürünleri Alınabilir?</h2>

          <ul>
            <li>Toptan kadın elbise</li>
            <li>Toptan kadın takım</li>
            <li>Toptan kadın ceket</li>
            <li>Toptan kadın pantolon</li>
            <li>Toptan kadın gömlek</li>
            <li>Toptan kadın bluz</li>
            <li>Toptan kadın etek</li>
            <li>Kazak ve triko modelleri</li>
            <li>Yeni sezon butik kadın giyim ürünleri</li>
          </ul>

          <div className="not-prose my-10 rounded-3xl bg-[#242321] p-8 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              MERTER'DE ÜRÜN ARIYORSANIZ
            </p>

            <h2 className="mt-4 text-3xl font-medium md:text-4xl">
              Ürünün fotoğrafını bize gönderin.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/65">
              Ekran görüntüsü veya ürün fotoğrafı yeterli. WhatsApp&apos;tan
              gönderin, Merter kadın giyim piyasasında sizin için
              araştıralım.
            </p>

            <a
              href="https://wa.me/905324975361?text=Merhaba%2C%20K%C4%B1br%C4%B1s%27tay%C4%B1m.%20Merter%27de%20bu%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BCn%C3%BC%20ara%C5%9Ft%C4%B1rman%C4%B1z%C4%B1%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#242321]"
            >
              WhatsApp'tan Fotoğraf Gönder →
            </a>
          </div>

          <h2>Kıbrıs'a Merter'den Toptan Kadın Giyim</h2>

          <p>
            Kıbrıs&apos;ta faaliyet gösteren butik, mağaza ve online
            satıcıların Merter&apos;den kadın giyim ürünü tedarik etmesine
            yönelik hazırladığımız detaylı sayfamızı da inceleyebilirsiniz.
          </p>

          <p>
            <Link
              href="/blog/kibrisa-merterden-toptan-kadin-giyim"
              className="font-semibold underline underline-offset-4"
            >
              Kıbrıs&apos;a Merter&apos;den Toptan Kadın Giyim →
            </Link>
          </p>

          <h2>Kıbrıs Merter Toptancıları</h2>

          <p>
            Merter&apos;den genel ürün tedariği hakkında bilgi almak için
            ilgili rehberimize geçebilirsiniz.
          </p>

          <p>
            <Link
              href="/blog/kibris-merter-toptancilari"
              className="font-semibold underline underline-offset-4"
            >
              Kıbrıs Merter Toptancıları →
            </Link>
          </p>

          <h2>Kıbrıs Toptan Giyim</h2>

          <p>
            Kıbrıs&apos;taki butik ve mağazalara yönelik toptan giyim
            rehberimizi de inceleyebilirsiniz.
          </p>

          <p>
            <Link
              href="/blog/kibris-toptan-giyim"
              className="font-semibold underline underline-offset-4"
            >
              Kıbrıs Toptan Giyim →
            </Link>
          </p>

          <h2>Kıbrıs'a Aynı Gün Kargo Çıkışı</h2>

          <p>
            Ürünleri hazır olan ve sipariş işlemleri zamanında tamamlanan
            uygun siparişleri mümkün olduğunda aynı gün taşıyıcı firmaya
            teslim ediyoruz. Teslimat süresi taşıyıcı firma ve gönderim
            koşullarına göre değişebilir.
          </p>

          <h2>Lefkoşa, Girne ve Gazimağusa İçin Merter Tedariği</h2>

          <p>
            Lefkoşa, Girne, Gazimağusa ve Kıbrıs&apos;ın diğer bölgelerinde
            kadın giyim satışı yapan işletmeler ürün taleplerini
            WhatsApp üzerinden bize iletebilir.
          </p>

        </div>

        <section className="mt-20 rounded-3xl bg-[#242321] p-8 text-white md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            MERTER → KIBRIS
          </p>

          <h2 className="mt-4 text-3xl font-medium md:text-5xl">
            Butiğiniz için ürün mü arıyorsunuz?
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
            İstanbul&apos;a gelmeden ürün fotoğrafını gönderin.
            Merter&apos;de sizin için araştıralım.
          </p>

          <a
            href="https://wa.me/905324975361?text=Merhaba%2C%20K%C4%B1br%C4%B1s%27taki%20buti%C4%9Fim%20i%C3%A7in%20Merter%27den%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#242321]"
          >
            WhatsApp'tan Hemen Yaz →
          </a>

          <p className="mt-5 text-sm text-white/50">
            0532 497 53 61
          </p>
        </section>

      </article>
    </main>
  );
}

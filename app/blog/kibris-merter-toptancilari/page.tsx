import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kıbrıs Merter Toptancıları | Kadın Giyim Tedarik",
  description:
    "Kıbrıs'tan Merter toptancılarından kadın giyim ürünü almak isteyen butik ve mağazalar için ürün araştırma ve tedarik hizmeti. Modeli gönderin, Merter'de bulalım.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/kibris-merter-toptancilari",
  },
  openGraph: {
    title: "Kıbrıs Merter Toptancıları | Rota Tedarik",
    description:
      "Kıbrıs'taki butik ve mağazalar için Merter toptancılarından kadın giyim ürün tedariği.",
    url:
      "https://www.merterdentedarik.com/blog/kibris-merter-toptancilari",
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
            Kıbrıs Merter Toptancıları
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
            Kıbrıs&apos;ta butik veya mağazanız için Merter toptancılarından
            kadın giyim ürünü mü arıyorsunuz? İstanbul&apos;a gelmeden
            aradığınız modeli bize gönderin. Merter tekstil piyasasında
            sizin için ürün araştıralım.
          </p>

          <a
            href="https://wa.me/905324975361?text=Merhaba%2C%20K%C4%B1br%C4%B1s%27tay%C4%B1m.%20Merter%20toptanc%C4%B1lar%C4%B1ndan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20aramak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#242321] px-8 py-4 text-sm font-semibold text-white"
          >
            WhatsApp'tan Ürün Sor →
          </a>

          <p className="mt-4 text-sm text-neutral-500">
            0532 497 53 61 • Ürün fotoğrafını göndermeniz yeterli
          </p>
        </header>

        <div className="my-12 overflow-hidden rounded-3xl">
          <img
            src="/images/kibristoptan.jpeg"
            alt="Kıbrıs Merter toptancıları kadın giyim tedarik"
            className="h-[430px] w-full object-cover md:h-[600px]"
          />
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6">
            <p className="text-xs font-semibold text-neutral-400">01</p>
            <h2 className="mt-3 text-xl font-semibold">Modeli Gönderin</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Aradığınız ürünün fotoğrafını veya ürün grubunu
              WhatsApp&apos;tan bize iletin.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <p className="text-xs font-semibold text-neutral-400">02</p>
            <h2 className="mt-3 text-xl font-semibold">Merter'de Bulalım</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Talebinize uygun ürün seçeneklerini Merter tekstil
              piyasasında araştıralım.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <p className="text-xs font-semibold text-neutral-400">03</p>
            <h2 className="mt-3 text-xl font-semibold">Kıbrıs'a Gönderelim</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Sipariş sürecini tamamlayıp uygun siparişlerde aynı gün
              kargo çıkışını organize edelim.
            </p>
          </div>
        </section>

        <div className="prose prose-neutral mt-16 max-w-none prose-headings:tracking-tight prose-p:leading-8">

          <h2>Kıbrıs'tan Merter Toptancılarından Ürün Almak</h2>

          <p>
            Kıbrıs&apos;ta kadın giyim satışı yapan butik ve mağazaların
            ürün almak için her seferinde İstanbul&apos;a gelmesi
            gerekmeyebilir. Rota Tedarik, Merter tekstil piyasasında
            aradığınız kadın giyim ürünlerini araştırarak tedarik
            sürecinizi kolaylaştırır.
          </p>

          <p>
            Belirli bir toptancı yerine aradığınız ürüne odaklanıyoruz.
            Beğendiğiniz modelin fotoğrafını gönderdiğinizde talebinize
            uygun ürün seçeneklerini Merter&apos;de araştırabiliriz.
          </p>

          <h2>Merter Kadın Giyim Toptancıları</h2>

          <p>
            Merter kadın giyim piyasasında farklı ürün kategorilerinde
            üretici ve toptan satış yapan işletmeler bulunmaktadır.
            Butiğiniz için aradığınız ürün grubuna göre uygun seçeneklerin
            araştırılması, farklı ürünleri tek tek arama ihtiyacınızı
            azaltabilir.
          </p>

          <h2>Merter'de Hangi Ürünleri Arıyoruz?</h2>

          <ul>
            <li>Toptan kadın elbise</li>
            <li>Toptan kadın takım</li>
            <li>Toptan kadın ceket</li>
            <li>Toptan kadın pantolon</li>
            <li>Toptan kadın gömlek</li>
            <li>Toptan kadın bluz</li>
            <li>Toptan etek</li>
            <li>Kazak ve triko</li>
            <li>Yeni sezon butik ürünleri</li>
          </ul>

          <div className="not-prose my-10 rounded-3xl bg-[#242321] p-8 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              EN KOLAY YÖNTEM
            </p>

            <h2 className="mt-4 text-3xl font-medium">
              Beğendiğiniz ürünün fotoğrafını gönderin.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/65">
              Modelin ekran görüntüsünü WhatsApp&apos;tan gönderin.
              Merter&apos;de uygun ürün seçeneklerini sizin için
              araştıralım.
            </p>

            <a
              href="https://wa.me/905324975361?text=Merhaba%2C%20K%C4%B1br%C4%B1s%27tay%C4%B1m.%20Merter%27de%20bir%20%C3%BCr%C3%BCn%20ara%C5%9Ft%C4%B1rmak%20istiyorum.%20Foto%C4%9Fraf%C4%B1n%C4%B1%20g%C3%B6nderece%C4%9Fim."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#242321]"
            >
              Ürün Fotoğrafını Gönder →
            </a>
          </div>

          <h2>Kıbrıs'a Merter'den Toptan Kadın Giyim</h2>

          <p>
            Kıbrıs&apos;taki butik ve mağazalar için Merter&apos;den kadın
            giyim ürünlerinin araştırılması, siparişlerin organize
            edilmesi ve gönderim sürecinin planlanması mümkündür.
          </p>

          <p>
            <Link
              href="/blog/kibrisa-merterden-toptan-kadin-giyim"
              className="font-semibold underline underline-offset-4"
            >
              Kıbrıs&apos;a Merter&apos;den Toptan Kadın Giyim →
            </Link>
          </p>

          <h2>Kıbrıs Toptan Giyim</h2>

          <p>
            Kıbrıs&apos;taki butik ve mağazalar için hazırladığımız ana
            toptan giyim rehberini de inceleyebilirsiniz.
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
            Ürünleri hazır olan ve işlemleri zamanında tamamlanan uygun
            siparişleri mümkün olduğunda aynı gün taşıyıcı firmaya teslim
            ediyoruz. Kıbrıs&apos;a teslimat süresi taşıyıcı firma ve
            gönderim koşullarına göre değişebilir.
          </p>

          <h2>Lefkoşa, Girne ve Gazimağusa İçin Merter Tedariği</h2>

          <p>
            Lefkoşa, Girne, Gazimağusa ve Kıbrıs&apos;ın diğer bölgelerinde
            butik, mağaza veya online kadın giyim satışı yapan işletmeler
            Merter ürün taleplerini WhatsApp üzerinden bize iletebilir.
          </p>

        </div>

        <section className="mt-20 rounded-3xl bg-[#242321] p-8 text-white md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            ROTA TEDARİK • MERTER → KIBRIS
          </p>

          <h2 className="mt-4 text-3xl font-medium md:text-5xl">
            Merter'de ürün mü arıyorsunuz?
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
            İstanbul&apos;a gelmenize gerek kalmadan aradığınız modeli
            bize gönderin. Merter&apos;de sizin için araştıralım.
          </p>

          <a
            href="https://wa.me/905324975361?text=Merhaba%2C%20K%C4%B1br%C4%B1s%27tay%C4%B1m.%20Merter%20toptanc%C4%B1lar%C4%B1ndan%20%C3%BCr%C3%BCn%20almak%20istiyorum."
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

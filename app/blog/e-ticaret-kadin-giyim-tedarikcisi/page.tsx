import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret Kadın Giyim Tedarikçisi | Toptan Ürün Tedariği",
  description:
    "E-ticaret kadın giyim tedarikçisi arıyorsanız satmak istediğiniz ürünün görselini gönderin. Merter'den elbise, pantolon, takım ve kadın giyim ürün tedariği.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-kadin-giyim-tedarikcisi",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20i%C3%A7in%20kad%C4%B1n%20giyim%20tedarik%C3%A7isi%20ar%C4%B1yorum.%20Satmak%20istedi%C4%9Fim%20%C3%BCr%C3%BCn%C3%BCn%20g%C3%B6rselini%20g%C3%B6ndermek%20istiyorum.";

const products = [
  {
    title: "Toptan Elbise",
    href: "/blog/e-ticaret-icin-toptan-elbise",
    text: "Online mağazanız için kadın elbise modelleri araştırın.",
  },
  {
    title: "Toptan Pantolon",
    href: "/blog/e-ticaret-icin-toptan-pantolon",
    text: "E-ticaret için farklı kadın pantolon modellerini araştırın.",
  },
  {
    title: "Toptan Kadın Takım",
    href: "/blog/e-ticaret-icin-toptan-kadin-takim",
    text: "Online satış için kadın takım modelleri ve ürün seçenekleri.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#1d2226] pb-20 md:pb-0">

      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-black tracking-[.16em]">
            ROTA TEDARİK
          </Link>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-3 text-xs font-black text-white"
          >
            ÜRÜN BUL →
          </a>
        </div>
      </header>

      <article>

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            E-TİCARET • KADIN GİYİM • TEDARİKÇİ
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.94] tracking-[-.045em] md:text-7xl">
            E-Ticaret Kadın Giyim
            <span className="block">Tedarikçisi</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            E-ticaret siteniz, Instagram mağazanız veya online butiğiniz için
            kadın giyim tedarikçisi mi arıyorsunuz? Satmak istediğiniz ürünün
            fotoğrafını gönderin. Merter'deki aynı veya benzer ürün
            seçeneklerini araştıralım.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-4 text-sm font-black text-white"
            >
              ÜRÜN FOTOĞRAFI GÖNDER →
            </a>

            <Link
              href="/blog/e-ticaret-icin-kadin-giyim"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-black"
            >
              E-TİCARET KADIN GİYİM →
            </Link>
          </div>
        </section>

        {/* INFO BAR */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["E-TİCARET", "Kadın Giyim"],
              ["MERTER", "Ürün Tedariği"],
              ["TOPTAN", "Kadın Giyim"],
              ["WHATSAPP", "Model Gönder"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-r border-black/10 p-7 md:border-b-0"
              >
                <strong className="block text-lg">{title}</strong>
                <span className="mt-1 block text-sm text-black/45">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            KADIN GİYİM TEDARİĞİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            E-Ticaret İçin Kadın Giyim Tedarikçisi Nasıl Bulunur?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            İnternetten kadın giyim satışı yaparken ürün tedariği işin önemli
            parçalarından biridir. E-ticaret mağazanız için ürün seçerken
            hedef kitlenize, ürün grubuna, sezona, beden seçeneklerine ve
            stok durumuna göre hareket edebilirsiniz.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Rota Tedarik ile satmak istediğiniz kadın giyim modelinin
            fotoğrafını paylaşabilirsiniz. Merter'deki ürün seçenekleri
            arasında aynı veya benzer modeller için araştırma yapılabilir.
          </p>

          <Link
            href="/blog/e-ticaret-icin-kadin-giyim"
            className="mt-7 inline-block font-black underline underline-offset-4"
          >
            E-Ticaret İçin Kadın Giyim Rehberi →
          </Link>
        </section>

        {/* CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              TEDARİKÇİ ARAMAKLA UĞRAŞMAYIN
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Satmak istediğiniz
              <span className="block">ürünü bize gösterin.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Instagram'da, pazaryerinde veya başka bir online mağazada
              gördüğünüz kadın giyim ürününün ekran görüntüsünü gönderin.
              Merter'deki ürün seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              WHATSAPP'TAN ÜRÜN GÖNDER →
            </a>
          </div>
        </section>

        {/* PRODUCT CARDS */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            E-TİCARET İÇİN ÜRÜNLER
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            Kadın Giyim Ürün Tedariği
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="rounded-3xl border border-black/10 bg-white p-8 transition hover:border-black/30"
              >
                <span className="text-xs font-black tracking-[.16em] text-black/30">
                  TOPTAN KADIN GİYİM
                </span>

                <h3 className="mt-4 text-2xl font-black">
                  {product.title}
                </h3>

                <p className="mt-4 leading-7 text-black/55">
                  {product.text}
                </p>

                <span className="mt-8 block font-black">
                  İNCELE →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* SEO BODY */}
        <section className="mx-auto max-w-4xl px-6 pb-20">

          <h2 className="text-4xl font-black">
            Online Butik İçin Kadın Giyim Tedarikçisi
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Online butik açan veya mevcut ürün çeşitliliğini artırmak isteyen
            işletmeler farklı kadın giyim kategorilerini değerlendirebilir.
            Elbise, pantolon, kadın takım, triko, ceket ve gömlek gibi ürün
            grupları üzerinden koleksiyon oluşturulabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret İçin Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            E-ticaret için toptan kadın giyim ürünleri ararken tek bir ürün
            kategorisine odaklanabileceğiniz gibi farklı kategorilerden
            oluşan bir koleksiyon da hazırlayabilirsiniz. Aradığınız
            modelleri görsel üzerinden bize iletebilirsiniz.
          </p>

          <Link
            href="/blog/e-ticaret-icin-toptan-kadin-giyim-modelleri"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            E-Ticaret İçin Toptan Kadın Giyim Modelleri →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter Kadın Giyim Tedarikçisi
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Merter, İstanbul'da tekstil ve hazır giyim ticaretinin yoğun
            olduğu bölgelerden biridir. Kadın giyim ürünü arayan işletmeler
            Merter'deki farklı ürün ve tedarik seçeneklerini
            değerlendirebilir.
          </p>

          <Link
            href="/blog/merter-toptancilar"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            Merter Toptancılar Rehberi →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Kadın Giyim Ürünü Nereden Alınır?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Kadın giyim ürünleri üretici, toptancı ve tedarikçiler üzerinden
            temin edilebilir. Aradığınız ürünün fotoğrafını önceden
            belirlemek, ürün araştırmasını model bazında yapmanıza yardımcı
            olabilir.
          </p>

          <Link
            href="/blog/internetten-kadin-giyim-satmak-icin-urun-nereden-alinir"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            Kadın Giyim Satmak İçin Ürün Nereden Alınır? →
          </Link>

          {/* CLUSTER */}
          <div className="mt-16 rounded-[2rem] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              E-TİCARET KADIN GİYİM KÜMESİ
            </p>

            <h2 className="mt-4 text-3xl font-black">
              E-ticaret kadın giyim rehberleri
            </h2>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              <Link
                href="/blog/e-ticaret-icin-kadin-giyim"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-black"
              >
                E-Ticaret İçin Kadın Giyim →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Ürünleri →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-giyim-modelleri"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Toptan Kadın Giyim Modelleri →
              </Link>

              <Link
                href="/blog/internetten-satmak-icin-kadin-giyim-urunleri"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                İnternetten Satmak İçin Kadın Giyim →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-elbise"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                E-Ticaret İçin Toptan Elbise →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-pantolon"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                E-Ticaret İçin Toptan Pantolon →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-takim"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                E-Ticaret İçin Toptan Kadın Takım →
              </Link>

              <Link
                href="/blog/merter-toptancilar"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Merter Toptancılar →
              </Link>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Satmak istediğiniz ürünü gönderin.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              E-ticaret mağazanız için aradığınız kadın giyim modelinin
              fotoğrafını WhatsApp'tan gönderin. Merter'deki ürün
              seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-black text-white"
            >
              ÜRÜN FOTOĞRAFI GÖNDER →
            </a>
          </div>

        </section>
      </article>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#1d2226] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-white px-5 py-4 text-center text-sm font-black text-black"
        >
          KADIN GİYİM ÜRÜNÜ BUL →
        </a>
      </div>

    </main>
  );
}

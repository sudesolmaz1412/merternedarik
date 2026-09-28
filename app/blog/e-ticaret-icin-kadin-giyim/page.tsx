import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Kadın Giyim | Toptan Ürün Tedariği",
  description:
    "E-ticaret için kadın giyim ürünleri arıyorsanız Merter'den toptan ürün tedariği. Elbise, pantolon, takım ve kadın giyim modelleri için ürün görselini gönderin.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-kadin-giyim",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20i%C3%A7in%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCnleri%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rseli%20g%C3%B6ndermek%20istiyorum.";

const urunler = [
  {
    title: "Toptan Elbise",
    text: "Online kadın giyim mağazanız için farklı elbise modellerini araştırın.",
    href: "/blog/e-ticaret-icin-toptan-elbise",
  },
  {
    title: "Toptan Pantolon",
    text: "E-ticaret için kadın pantolon modelleri ve ürün seçeneklerini araştırın.",
    href: "/blog/e-ticaret-icin-toptan-pantolon",
  },
  {
    title: "Toptan Kadın Takım",
    text: "Online satış için ikili takım, ceket pantolon ve farklı kadın takım modelleri.",
    href: "/blog/e-ticaret-icin-toptan-kadin-takim",
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
            E-TİCARET • KADIN GİYİM • ÜRÜN TEDARİĞİ
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.94] tracking-[-.045em] md:text-7xl">
            E-Ticaret İçin
            <span className="block">Kadın Giyim</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            E-ticaret sitesi, Instagram mağazası veya online butik için kadın
            giyim ürünleri mi arıyorsunuz? Satmak istediğiniz ürünün
            fotoğrafını bize gönderin. Merter'deki aynı veya benzer ürün
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

            <a
              href="#urunler"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-black"
            >
              ÜRÜNLERE BAK
            </a>
          </div>
        </section>

        {/* INFO */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["E-TİCARET", "Kadın Giyim"],
              ["MERTER", "Ürün Tedariği"],
              ["BUTİK", "Toptan Ürün"],
              ["TÜRKİYE", "Gönderim"],
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

        {/* SEARCH INTENT */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            ONLINE SATIŞ İÇİN ÜRÜN
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            E-Ticaret İçin Kadın Giyim Ürünleri Nasıl Bulunur?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            İnternetten kadın giyim satmak isteyen işletmeler için en önemli
            konulardan biri doğru ürün tedariğidir. Online mağazanızın hedef
            kitlesine uygun elbise, pantolon, kadın takım ve farklı kadın
            giyim ürünlerini belirleyerek koleksiyonunuzu oluşturabilirsiniz.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            E-ticaret için kadın giyim ürünü ararken beğendiğiniz modelin
            fotoğrafını veya ekran görüntüsünü bize gönderebilirsiniz.
            Merter'deki ürün seçenekleri arasından aynı veya benzer modeller
            için araştırma yapılabilir.
          </p>
        </section>

        {/* BIG CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              ÜRÜNÜ GÖSTERİN
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              İnternette gördüğünüz
              <span className="block">kadın giyim ürününü gönderin.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Instagram'da, pazaryerinde veya başka bir e-ticaret sitesinde
              gördüğünüz ürünü WhatsApp'tan gönderin. Merter'deki aynı veya
              benzer ürün seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              ÜRÜN GÖRSELİNİ WHATSAPP'TAN GÖNDER →
            </a>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="urunler" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            E-TİCARET KADIN GİYİM ÜRÜNLERİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            Online Mağazanızda Ne Satabilirsiniz?
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Kadın giyim e-ticaret mağazanız için farklı ürün gruplarıyla
            koleksiyon oluşturabilirsiniz.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {urunler.map((urun) => (
              <Link
                key={urun.title}
                href={urun.href}
                className="rounded-3xl border border-black/10 bg-white p-8 transition hover:border-black/30"
              >
                <span className="text-xs font-black tracking-[.16em] text-black/30">
                  E-TİCARET İÇİN
                </span>

                <h3 className="mt-4 text-2xl font-black">{urun.title}</h3>

                <p className="mt-4 leading-7 text-black/55">
                  {urun.text}
                </p>

                <span className="mt-8 block font-black">
                  İNCELE →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {["Triko", "Ceket", "Gömlek"].map((urun) => (
              <div
                key={urun}
                className="rounded-3xl border border-black/10 bg-[#ebe7dd] p-8"
              >
                <span className="text-xs font-black tracking-[.16em] text-black/30">
                  KADIN GİYİM
                </span>

                <h3 className="mt-4 text-2xl font-black">
                  Toptan {urun}
                </h3>

                <p className="mt-4 leading-7 text-black/55">
                  E-ticaret mağazanız için aradığınız {urun.toLocaleLowerCase("tr-TR")}{" "}
                  modelini bize gönderebilirsiniz.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="mx-auto max-w-4xl px-6 pb-20">
          <h2 className="text-4xl font-black">
            İnternetten Kadın Giyim Satmak
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            İnternetten kadın giyim satışı yapmak isteyen işletmeler kendi
            e-ticaret siteleri, sosyal medya mağazaları veya pazaryerleri
            üzerinden ürünlerini müşterilere sunabilir. Ürün tedariğinde
            hedef kitle, sezon, model, beden ve stok seçeneklerini birlikte
            değerlendirmek önemlidir.
          </p>

          <Link
            href="/blog/internetten-satmak-icin-kadin-giyim-urunleri"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            İnternetten Satmak İçin Kadın Giyim Ürünleri →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret İçin Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Online mağazada satılacak ürünlerin düzenli şekilde tedarik
            edilebilmesi önemlidir. Kadın giyim tarafında elbise, pantolon,
            takım, triko, ceket ve gömlek gibi farklı ürün grupları
            değerlendirilebilir.
          </p>

          <Link
            href="/blog/e-ticaret-icin-toptan-kadin-giyim-modelleri"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            E-Ticaret İçin Toptan Kadın Giyim Modelleri →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Kadın Giyim Ürünleri Nereden Alınır?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Kadın giyim ürünleri üreticilerden, toptancılardan ve tekstil
            ticaretinin yoğun olduğu bölgelerdeki tedarikçilerden temin
            edilebilir. İstanbul Merter de kadın giyim toptan ticaretinin
            yoğun olduğu bölgelerden biridir.
          </p>

          <Link
            href="/blog/internetten-kadin-giyim-satmak-icin-urun-nereden-alinir"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            Kadın Giyim Satmak İçin Ürün Nereden Alınır? →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Online Butik İçin Kadın Giyim Ürünleri
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Online butik açarken tek bir ürün grubuna veya farklı kadın giyim
            kategorilerine odaklanabilirsiniz. Aradığınız modellerin
            görsellerini bize göndererek Merter'deki ürün seçeneklerini
            araştırabilirsiniz.
          </p>

          {/* HUB */}
          <div className="mt-16 rounded-[2rem] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              E-TİCARET KADIN GİYİM REHBERİ
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Kadın giyim tedarik rehberleri
            </h2>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
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
                E-Ticaret İçin Toptan Kadın Giyim Modelleri →
              </Link>

              <Link
                href="/blog/internetten-satmak-icin-kadin-giyim-urunleri"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                İnternetten Satmak İçin Kadın Giyim →
              </Link>

              <Link
                href="/blog/internetten-kadin-giyim-satmak-icin-urun-nereden-alinir"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Kadın Giyim Ürünü Nereden Alınır? →
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
              E-ticarette satmak istediğiniz ürünü gönderin.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Kadın giyim ürününün ekran görüntüsünü veya fotoğrafını
              WhatsApp'tan gönderin. Merter'deki ürün seçeneklerini
              araştıralım.
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

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#1d2226] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-white px-5 py-4 text-center text-sm font-black text-black"
        >
          E-TİCARET İÇİN ÜRÜN BUL →
        </a>
      </div>
    </main>
  );
}

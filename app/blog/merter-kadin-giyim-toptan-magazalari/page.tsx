import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Kadın Giyim Toptan Mağazaları | Rota Tedarik",
  description:
    "Merter kadın giyim toptan mağazaları arasında ürün arıyorsanız elbise, takım, pantolon ve farklı kadın giyim modelleri için ürün görselini gönderin.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/merter-kadin-giyim-toptan-magazalari",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Merter%20kad%C4%B1n%20giyim%20toptan%20ma%C4%9Fazalar%C4%B1ndan%20%C3%BCr%C3%BCn%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rseli%20g%C3%B6ndermek%20istiyorum.";

const products = [
  ["Toptan Elbise", "/blog/e-ticaret-icin-toptan-elbise"],
  ["Toptan Kadın Takım", "/blog/e-ticaret-icin-toptan-kadin-takim"],
  ["Toptan Pantolon", "/blog/e-ticaret-icin-toptan-pantolon"],
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
            ÜRÜN SOR →
          </a>
        </div>
      </header>

      <article>

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            MERTER • KADIN GİYİM • TOPTAN MAĞAZALAR
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.94] tracking-[-.045em] md:text-7xl">
            Merter Kadın Giyim
            <span className="block">Toptan Mağazaları</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            Merter kadın giyim toptan mağazaları arasında butik veya
            e-ticaret mağazanız için ürün mü arıyorsunuz? Beğendiğiniz
            modelin fotoğrafını gönderin; Merter'deki aynı veya benzer
            ürün seçeneklerini araştıralım.
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
              href="/blog/merter-toptancilar"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-black"
            >
              MERTER TOPTANCILAR →
            </Link>
          </div>
        </section>

        {/* INFO */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["MERTER", "Toptan Mağazalar"],
              ["KADIN GİYİM", "Ürün Tedariği"],
              ["BUTİK", "Toptan Ürün"],
              ["E-TİCARET", "Online Satış"],
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

        {/* INTRO */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            MERTER TOPTAN KADIN GİYİM
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            Merter'de Kadın Giyim Toptan Mağazaları
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Merter, İstanbul'da kadın giyim ve hazır giyim toptan
            ticaretinin yoğun olduğu bölgelerden biridir. Butik sahipleri,
            mağazalar ve e-ticaret işletmeleri farklı kadın giyim ürünleri
            için Merter'deki tedarik seçeneklerini değerlendirebilir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Aradığınız ürünün modeli belliyse tüm mağazaları tek tek
            araştırmak yerine ürün görselini bize gönderebilirsiniz.
            Aradığınız modele göre aynı veya benzer ürün seçeneklerini
            Merter'de araştıralım.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              MERTER'DE ÜRÜN BUL
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Mağaza mağaza dolaşmak yerine
              <span className="block">ürünün fotoğrafını gönderin.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Instagram'da, e-ticaret sitesinde veya başka bir yerde
              gördüğünüz kadın giyim ürününü WhatsApp'tan gönderin.
              Merter'deki ürün ve tedarik seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              ÜRÜNÜ WHATSAPP'TAN GÖNDER →
            </a>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            KADIN GİYİM ÜRÜNLERİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            Merter Toptan Kadın Giyim Ürünleri
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {products.map(([title, href]) => (
              <Link
                key={title}
                href={href}
                className="rounded-3xl border border-black/10 bg-white p-8 transition hover:border-black/30"
              >
                <span className="text-xs font-black tracking-[.16em] text-black/30">
                  MERTER TOPTAN
                </span>

                <h3 className="mt-4 text-2xl font-black">{title}</h3>

                <span className="mt-8 block font-bold">
                  İNCELE →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {["Triko", "Ceket", "Gömlek"].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-black/10 bg-[#ebe7dd] p-8"
              >
                <span className="text-xs font-black tracking-[.16em] text-black/30">
                  MERTER TOPTAN
                </span>

                <h3 className="mt-4 text-2xl font-black">{item}</h3>

                <p className="mt-4 leading-7 text-black/55">
                  Aradığınız {item.toLocaleLowerCase("tr-TR")} modelinin
                  fotoğrafını göndererek ürün araştırması başlatabilirsiniz.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="mx-auto max-w-4xl px-6 pb-20">

          <h2 className="text-4xl font-black">
            Merter Kadın Giyim Toptancıları
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Merter kadın giyim toptancıları arasında elbise, kadın takım,
            pantolon, triko, ceket, gömlek ve sezonluk kadın giyim ürünleri
            araştırılabilir. Ürün çeşitleri, stoklar ve sipariş koşulları
            tedarikçiye göre değişebilir.
          </p>

          <Link
            href="/blog/merter-kadin-giyim-toptancilari"
            className="mt-7 inline-block font-black underline underline-offset-4"
          >
            Merter Kadın Giyim Toptancıları →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter Toptan Giyim Mağazaları
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Kadın giyimin yanında Merter'deki genel toptan giyim
            seçeneklerini araştırıyorsanız hazırladığımız Merter toptan
            giyim mağazaları rehberini de inceleyebilirsiniz.
          </p>

          <Link
            href="/blog/merter-toptan-giyim-magazalari"
            className="mt-5 inline-block font-black underline underline-offset-4"
          >
            Merter Toptan Giyim Mağazaları →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Butik İçin Merter'den Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Butiğiniz için ürün seçerken hedef kitlenize uygun ürün
            gruplarını belirleyebilirsiniz. Satmak istediğiniz ürünün
            fotoğrafını paylaşarak model bazlı ürün araştırması
            başlatabilirsiniz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter'e Gelmeden Toptan Ürün Almak
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            İstanbul dışında faaliyet gösteren işletmeler aradıkları kadın
            giyim ürünlerinin fotoğraflarını WhatsApp üzerinden
            paylaşabilir. Böylece ürün araştırmasını uzaktan
            başlatabilirsiniz.
          </p>

          {/* CLUSTER HUB */}
          <div className="mt-16 rounded-[2rem] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              MERTER TOPTANCILAR KÜMESİ
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Merter toptan giyim rehberleri
            </h2>

            <div className="mt-8 grid gap-3 md:grid-cols-2">

              <Link
                href="/blog/merter-toptancilar"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Merter Toptancılar →
              </Link>

              <Link
                href="/blog/merter-toptancilari-kadin-giyim"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Merter Toptancıları Kadın Giyim →
              </Link>

              <Link
                href="/blog/merter-toptan-giyim-magazalari"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Merter Toptan Giyim Mağazaları →
              </Link>

              <Link
                href="/blog/merter-kadin-giyim-toptancilari"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Merter Kadın Giyim Toptancıları →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-elbise"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Merter Toptan Elbise →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-pantolon"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Merter Toptan Pantolon →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-takim"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Merter Toptan Kadın Takım →
              </Link>

              <Link
                href="/"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Rota Tedarik →
              </Link>

            </div>
          </div>

          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <h2 className="text-3xl font-black md:text-5xl">
              Aradığınız ürünü Merter'den bulalım.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Ürün görselini gönderin. Merter kadın giyim toptan
              mağazalarındaki ürün seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-black text-white"
            >
              WHATSAPP'TAN ÜRÜN GÖNDER →
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
          MERTER'DEN ÜRÜN BUL →
        </a>
      </div>

    </main>
  );
}

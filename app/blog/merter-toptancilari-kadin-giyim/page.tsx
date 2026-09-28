import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Toptancıları Kadın Giyim | Toptan Ürün Tedariği",
  description:
    "Merter toptancıları kadın giyim ürünleri için elbise, takım, pantolon, triko, ceket ve yeni sezon ürün tedariği. Aradığınız modeli WhatsApp'tan gönderin.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/merter-toptancilari-kadin-giyim",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Merter%20toptanc%C4%B1lar%C4%B1ndan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rseli%20g%C3%B6ndermek%20istiyorum.";

const urunler = [
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
            WHATSAPP →
          </a>
        </div>
      </header>

      <article>

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            MERTER • TOPTANCILAR • KADIN GİYİM
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.94] tracking-[-.045em] md:text-7xl">
            Merter Toptancıları
            <span className="block">Kadın Giyim</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            Merter toptancıları arasında kadın giyim ürünü arayan butik,
            mağaza ve e-ticaret işletmeleri için ürün araştırıyoruz.
            Aradığınız modelin fotoğrafını gönderin; Merter'deki aynı veya
            benzer ürün seçeneklerini araştıralım.
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

        {/* STRIP */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["MERTER", "Toptancıları"],
              ["KADIN GİYİM", "Toptan"],
              ["BUTİK", "Ürün Tedariği"],
              ["E-TİCARET", "Ürün Bulma"],
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

        {/* ANA İÇERİK */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="max-w-4xl text-4xl font-black md:text-5xl">
            Merter Kadın Giyim Toptancıları
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Merter, kadın giyim toptan ticaretinin yoğun olduğu İstanbul
            bölgelerinden biridir. Butikler, fiziksel mağazalar ve online
            satış yapan işletmeler farklı kadın giyim ürünlerini Merter'deki
            toptan satış ve tedarik seçenekleri üzerinden araştırabilir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Aradığınız ürün belli ise mağaza mağaza ürün aramak yerine
            modelin fotoğrafını paylaşabilirsiniz. Rota Tedarik olarak
            Merter'deki ürün seçeneklerini araştırarak aynı veya benzer
            modelleri bulmanıza yardımcı oluyoruz.
          </p>

          <div className="mt-12 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ÜRÜN MÜ ARIYORSUNUZ?
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Fotoğrafı gönderin, Merter'den araştıralım.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Instagram'da, başka bir mağazada veya e-ticaret sitesinde
              gördüğünüz kadın giyim ürününün ekran görüntüsünü bize
              WhatsApp'tan gönderin.
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

        {/* ÜRÜN KÜMESİ */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              MERTER TOPTAN KADIN GİYİM
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
              Hangi ürünü arıyorsunuz?
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {urunler.map(([title, href]) => (
                <Link
                  key={title}
                  href={href}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
                >
                  <span className="text-xs font-black tracking-[.15em] text-white/35">
                    MERTER
                  </span>

                  <h3 className="mt-4 text-2xl font-black">{title}</h3>

                  <span className="mt-8 block font-bold">
                    İNCELE →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEO */}
        <section className="mx-auto max-w-4xl px-6 py-20">

          <h2 className="text-4xl font-black">
            Merter Toptancılarında Hangi Kadın Giyim Ürünleri Var?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Merter kadın giyim toptan pazarında elbise, kadın takım,
            pantolon, triko, gömlek, ceket ve farklı sezonluk kadın giyim
            ürünleri bulunabilir. Ürün ve stok seçenekleri firmaya ve
            sezona göre değişebilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter Toptancılarından Butik İçin Ürün Almak
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Butiğiniz için ürün arıyorsanız öncelikle satmak istediğiniz
            ürün grubunu ve müşteri kitlenizi belirleyebilirsiniz. Aradığınız
            modelin görselini göndererek ürün araştırmasını doğrudan model
            üzerinden başlatabilirsiniz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret İçin Merter Toptancıları
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            İnternetten kadın giyim satan işletmeler için Merter farklı
            ürün gruplarını araştırabilecekleri önemli tekstil bölgelerinden
            biridir. Online mağazanızda satmak istediğiniz modeli bize
            göndererek ürün araştırması yapabilirsiniz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter'e Gelmeden Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            İstanbul dışında veya Merter'e gelemeyecek durumdaysanız ürün
            görsellerinizi WhatsApp üzerinden gönderebilirsiniz. Bulunan
            seçenekleri uzaktan değerlendirerek tedarik sürecine
            başlayabilirsiniz.
          </p>

          {/* MERKEZ SAYFALAR */}
          <div className="mt-16 border-t border-black/10 pt-10">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              MERTER TOPTANCILAR KÜMESİ
            </p>

            <div className="mt-7 grid gap-3 md:grid-cols-2">

              <Link
                href="/blog/merter-toptancilar"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                Merter Toptancılar →
              </Link>

              <Link
                href="/blog/merter-kadin-giyim-toptancilari"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                Merter Kadın Giyim Toptancıları →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-elbise"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                Merter Toptan Elbise →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-pantolon"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                Merter Toptan Pantolon →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-takim"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                Merter Toptan Kadın Takım →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                E-Ticaret İçin Kadın Giyim →
              </Link>

            </div>
          </div>
        </section>

        {/* SON CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              MERTER KADIN GİYİM
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Aradığınız ürünü gönderin.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Merter toptancıları arasındaki ürün seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              WHATSAPP'TAN ÜRÜN SOR →
            </a>
          </div>
        </section>
      </article>

      {/* MOBİL WHATSAPP */}
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

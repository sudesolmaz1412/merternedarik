import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Toptancılar | Toptan Kadın Giyim ve Ürün Tedariği",
  description:
    "Merter toptancılar arasında kadın giyim ürünü mü arıyorsunuz? Elbise, takım, pantolon, triko, ceket ve diğer ürünler için Merter'den ürün araştırma ve tedarik.",
  alternates: {
    canonical: "https://www.merterdentedarik.com/blog/merter-toptancilar",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Merter%20toptanc%C4%B1lar%C4%B1ndan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rseli%20g%C3%B6ndermek%20istiyorum.";

const categories = [
  ["Elbise", "/blog/e-ticaret-icin-toptan-elbise"],
  ["Kadın Takım", "/blog/e-ticaret-icin-toptan-kadin-takim"],
  ["Pantolon", "/blog/e-ticaret-icin-toptan-pantolon"],
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
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            MERTER • TOPTAN GİYİM • KADIN GİYİM
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.94] tracking-[-.045em] md:text-7xl">
            Merter
            <span className="block">Toptancılar</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            Merter toptancılar arasında kadın giyim ürünü arıyorsanız,
            mağaza mağaza dolaşmak yerine aradığınız ürünün fotoğrafını
            bize gönderin. Merter'deki tedarik ağımız üzerinden uygun ürün
            ve model seçeneklerini araştıralım.
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
              ÜRÜN GRUPLARI
            </a>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["MERTER", "Toptancılar"],
              ["KADIN GİYİM", "Toptan Ürün"],
              ["BUTİK", "Ürün Tedariği"],
              ["E-TİCARET", "Ürün Araştırma"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-r border-black/10 p-7 md:border-b-0"
              >
                <strong className="block text-lg">{title}</strong>
                <span className="mt-1 block text-sm text-black/45">{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            MERTER TOPTAN GİYİM
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Merter Toptancılar Arasında Kadın Giyim Ürünü Bulmak
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Merter, İstanbul'da toptan tekstil ve hazır giyim ticaretinin
            yoğun olduğu bölgelerden biridir. Kadın giyim tarafında farklı
            ürün grupları, modeller ve sezonluk koleksiyonlar bulunabilir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Butik, mağaza veya e-ticaret işletmeniz için Merter
            toptancılarından ürün arıyorsanız satın almak istediğiniz modeli
            önceden belirlemek araştırma sürecini kolaylaştırır.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Beğendiğiniz ürünün fotoğrafını veya ekran görüntüsünü bize
            göndererek aynı ya da benzer ürünler için Merter'deki tedarik
            seçeneklerini araştırabilirsiniz.
          </p>
        </section>

        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              MERTER'İ TEK TEK GEZMEYİN
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Ürünü gösterin.
              <span className="block">Biz araştıralım.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Aradığınız kadın giyim ürününün fotoğrafını WhatsApp'tan
              gönderin. Merter toptancıları ve tedarik seçenekleri arasından
              ihtiyacınıza uygun ürünleri araştıralım.
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

        <section id="urunler" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            MERTER TOPTANCILARI
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            Merter'de Hangi Kadın Giyim Ürünleri Bulunur?
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {categories.map(([title, href]) => (
              <Link
                key={title}
                href={href}
                className="rounded-3xl border border-black/10 bg-white p-8 transition hover:border-black/30"
              >
                <span className="text-xs font-black tracking-[.16em] text-black/30">
                  TOPTAN KADIN GİYİM
                </span>
                <h3 className="mt-4 text-2xl font-black">{title}</h3>
                <span className="mt-8 block font-bold">
                  ÜRÜNLERİ İNCELE →
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
                  Aradığınız {item.toLocaleLowerCase("tr-TR")} modelini
                  WhatsApp'tan göndererek ürün araştırması başlatabilirsiniz.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-20">
          <h2 className="text-4xl font-black">
            Merter Kadın Giyim Toptancıları
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Merter kadın giyim toptancıları; elbise, takım, pantolon,
            triko, ceket, gömlek ve farklı kadın giyim ürün gruplarında
            seçenekler sunabilir. Ürün çeşitliliği ve stok durumu
            tedarikçiye ve sezona göre değişebilir.
          </p>

          <Link
            href="/blog/merter-kadin-giyim-toptancilari"
            className="mt-7 inline-block font-black underline underline-offset-4"
          >
            Merter Kadın Giyim Toptancıları Rehberi →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter Toptancılarından Ürün Nasıl Alınır?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Öncelikle satmak istediğiniz ürün grubunu ve modeli belirleyin.
            Ürün görselini bize ilettiğinizde Merter'deki tedarik
            seçeneklerini araştırabilir, uygun ürünler üzerinden sipariş
            sürecini birlikte planlayabiliriz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter'e Gelmeden Kadın Giyim Ürünü Bulun
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            İstanbul dışında bulunuyorsanız aradığınız ürünün görselini
            WhatsApp üzerinden paylaşabilirsiniz. Böylece ürün araştırmasını
            uzaktan başlatabilir ve bulunan seçenekleri değerlendirebilirsiniz.
          </p>

          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Merter'de aradığınız ürünü bulalım.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Kadın giyim ürününün fotoğrafını veya ekran görüntüsünü
              gönderin. Merter'deki tedarik seçeneklerini sizin için
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

          <div className="mt-16 border-t border-black/10 pt-10">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              MERTER TOPTAN GİYİM REHBERLERİ
            </p>

            <div className="mt-7 grid gap-3 md:grid-cols-2">
              <Link
                href="/blog/merter-kadin-giyim-toptancilari"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                Merter Kadın Giyim Toptancıları →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Ürünleri →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-elbise"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                Toptan Kadın Elbise →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-pantolon"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                Toptan Kadın Pantolon →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-takim"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                Toptan Kadın Takım →
              </Link>

              <Link
                href="/"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                Rota Tedarik Ana Sayfa →
              </Link>
            </div>
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

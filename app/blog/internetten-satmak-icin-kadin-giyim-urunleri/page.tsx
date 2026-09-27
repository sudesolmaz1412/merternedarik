import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İnternetten Satmak İçin Kadın Giyim Ürünleri | Rota Tedarik",
  description:
    "İnternetten satmak için kadın giyim ürünleri arıyorsanız Merter'den toptan ürün tedariği. Elbise, takım, triko, ceket, bluz ve yeni sezon kadın giyim ürünleri.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/internetten-satmak-icin-kadin-giyim-urunleri",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20internetten%20satmak%20i%C3%A7in%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCnleri%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rseli%20g%C3%B6ndermek%20istiyorum.";

const urunler = [
  ["Kadın Elbise", "Günlük, şık ve sezonluk kadın elbise modelleri."],
  ["Kadın Takım", "İkili takım, ceket-pantolon ve kombin ürünleri."],
  ["Bluz & Gömlek", "Online satış için farklı kadın üst giyim modelleri."],
  ["Triko", "Kazak, hırka ve sezonluk kadın triko ürünleri."],
  ["Kadın Ceket", "Kombin ve sezon geçişlerine uygun ceket modelleri."],
  ["Pantolon & Etek", "Kadın giyim koleksiyonunu tamamlayan alt giyim ürünleri."],
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
            ONLINE SATIŞ • KADIN GİYİM • TOPTAN TEDARİK
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.95] tracking-[-.045em] md:text-7xl">
            İnternetten Satmak İçin
            <span className="block">Kadın Giyim Ürünleri</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            İnternetten kadın giyim satmak istiyor ve ürün arıyorsanız,
            Merter'deki kadın giyim tedarik seçeneklerini araştırıyoruz.
            Satmak istediğiniz ürünün fotoğrafını gönderin; aynı veya benzer
            modeller için ürün seçeneklerini bulalım.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-4 text-sm font-black text-white"
            >
              ÜRÜN FOTOĞRAFINI GÖNDER →
            </a>

            <a
              href="#urunler"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-black"
            >
              ÜRÜNLERİ İNCELE
            </a>
          </div>
        </section>

        {/* STRIP */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["ONLINE SATIŞ", "Kadın Giyim"],
              ["MERTER", "Ürün Araştırma"],
              ["TOPTAN", "Ürün Tedariği"],
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

        {/* ÜRÜNLER */}
        <section id="urunler" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            NE SATABİLİRSİNİZ?
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            İnternetten Satılabilecek Kadın Giyim Ürünleri
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Online mağazanızın hedef kitlesine göre farklı kadın giyim
            kategorilerinden ürün seçebilirsiniz. Birbiriyle kombinlenebilen
            ürünler daha bütünlüklü bir koleksiyon oluşturmanıza yardımcı olur.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {urunler.map(([title, text], index) => (
              <div
                key={title}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <span className="text-xs font-black text-black/25">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-black">{title}</h3>

                <p className="mt-4 leading-7 text-black/55">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DÖNÜŞÜM */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              ÜRÜNÜ GÖNDER
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              İnternette gördüğünüz ürünü Merter'den bulalım.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              E-ticaret sitenizde veya online mağazanızda satmak istediğiniz
              kadın giyim ürününün ekran görüntüsünü WhatsApp'tan gönderin.
              Ürün ve benzer model seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              MODELİ WHATSAPP'TAN GÖNDER →
            </a>
          </div>
        </section>

        {/* SEO */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-4xl font-black">
            İnternetten Kadın Giyim Satmak İçin Ürün Nereden Alınır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            İnternetten kadın giyim satışı yapmak isteyen işletmeler ürünlerini
            üreticilerden, toptancılardan ve tekstil ticaretinin yoğun olduğu
            bölgelerdeki tedarikçilerden temin edebilir. İstanbul Merter,
            kadın giyim toptan ticaretinin yoğun olduğu bölgelerden biridir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Online Satış İçin Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Online satış için kadın giyim ürünü alırken mağazanızın müşteri
            kitlesini, ürün kategorilerini, beden ve renk seçeneklerini,
            stok durumunu ve gönderim sürecini birlikte değerlendirebilirsiniz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret İçin Kadın Giyim Ürünü Nasıl Bulunur?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Satmak istediğiniz ürünün fotoğrafı veya ekran görüntüsü varsa
            tedarik araştırmasını doğrudan model üzerinden yapabilirsiniz.
            Böylece ihtiyacınız olmayan ürünler yerine aradığınız modele
            odaklanabilirsiniz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter'den Kadın Giyim Ürün Tedariği
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Merter'e gelmeden de ürün talebinizi iletebilirsiniz. Aradığınız
            kadın giyim modelinin görselini, ürün grubunu veya listenizi
            WhatsApp üzerinden göndererek tedarik araştırmasını
            başlatabilirsiniz.
          </p>

          {/* CTA */}
          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Satmak istediğiniz ürünün fotoğrafını gönderin.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              İnternette beğendiğiniz kadın giyim ürününün ekran görüntüsünü
              gönderin. Merter'deki ürün ve tedarik seçeneklerini araştıralım.
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

          {/* İÇ LİNK */}
          <div className="mt-16 border-t border-black/10 pt-10">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              E-TİCARET KADIN GİYİM
            </p>

            <div className="mt-7 flex flex-col gap-4">
              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Ürünleri →
              </Link>

              <Link
                href="/blog/e-ticaret-sitesinde-satilacak-kadin-giyim-urunleri"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret Sitesinde Satılacak Kadın Giyim Ürünleri →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-giyim-modelleri"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Toptan Kadın Giyim Modelleri →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri-nereden-alinir"
                className="font-bold"
              >
                E-Ticaret İçin Kadın Giyim Ürünleri Nereden Alınır? →
              </Link>
            </div>
          </div>
        </section>

        {/* ALT CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              KADIN GİYİM TEDARİĞİ
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Ürünü göster. Biz araştıralım.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Online mağazanızda satmak istediğiniz ürünü WhatsApp'tan
              gönderin.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              ÜRÜN FOTOĞRAFI GÖNDER →
            </a>
          </div>
        </section>
      </article>

      {/* MOBİL SABİT WHATSAPP */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#1d2226] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-white px-5 py-4 text-center text-sm font-black text-black"
        >
          WHATSAPP'TAN ÜRÜN FOTOĞRAFI GÖNDER →
        </a>
      </div>
    </main>
  );
}

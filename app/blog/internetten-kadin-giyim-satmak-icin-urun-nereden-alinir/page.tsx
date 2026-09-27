import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İnternetten Kadın Giyim Satmak İçin Ürün Nereden Alınır?",
  description:
    "İnternetten kadın giyim satmak için ürün nereden alınır? Merter toptan kadın giyim ürünleri, ürün tedariği ve online satış için kadın giyim tedarik seçenekleri.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/internetten-kadin-giyim-satmak-icin-urun-nereden-alinir",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20internetten%20kad%C4%B1n%20giyim%20satmak%20i%C3%A7in%20%C3%BCr%C3%BCn%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rseli%20g%C3%B6ndermek%20istiyorum.";

const urunler = [
  ["Kadın Elbise", "Günlük, şık ve sezonluk kadın elbise modelleri."],
  ["Kadın Takım", "İkili takım, ceket-pantolon ve kombin ürünleri."],
  ["Bluz & Gömlek", "Online satışa uygun farklı kadın üst giyim modelleri."],
  ["Triko", "Kazak, hırka ve sezonluk kadın triko ürünleri."],
  ["Kadın Ceket", "Kombin ve sezon geçişlerine uygun kadın ceket modelleri."],
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
            ÜRÜN SOR →
          </a>
        </div>
      </header>

      <article>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            ONLINE SATIŞ • KADIN GİYİM • ÜRÜN TEDARİĞİ
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.95] tracking-[-.045em] md:text-7xl">
            İnternetten Kadın Giyim Satmak İçin
            <span className="block">Ürün Nereden Alınır?</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            İnternetten kadın giyim satmak istiyor ancak ürünleri nereden
            alacağınızı bilmiyorsanız Merter'deki toptan kadın giyim ve ürün
            tedarik seçeneklerini değerlendirebilirsiniz. Satmak istediğiniz
            ürünün fotoğrafını bize gönderin, ürün seçeneklerini araştıralım.
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
              href="#nereden-alinir"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-black"
            >
              ÜRÜN TEDARİĞİ
            </a>
          </div>
        </section>

        {/* BİLGİ ŞERİDİ */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["MERTER", "Kadın Giyim"],
              ["TOPTAN", "Ürün Tedariği"],
              ["E-TİCARET", "Online Satış"],
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

        {/* ANA CEVAP */}
        <section
          id="nereden-alinir"
          className="mx-auto max-w-5xl px-6 py-20"
        >
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            ÜRÜN NEREDEN ALINIR?
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            İnternetten Kadın Giyim Satmak İçin Toptan Ürün Nereden Bulunur?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Online kadın giyim satışı yapacak işletmeler ürünlerini
            üreticilerden, toptancılardan ve tekstil ticaretinin yoğun olduğu
            bölgelerdeki tedarikçilerden temin edebilir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            İstanbul Merter, kadın giyim toptan ticaretinin yoğun olduğu
            bölgelerden biridir. Farklı mağazalardaki ürünleri tek tek
            araştırmak yerine aradığınız model veya ürün grubuna göre tedarik
            araştırması yapabilirsiniz.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [
                "01",
                "Ürünü Belirleyin",
                "Online mağazanızda satmak istediğiniz kadın giyim kategorisini veya modeli belirleyin.",
              ],
              [
                "02",
                "Fotoğrafı Gönderin",
                "İnternette gördüğünüz ürünün ekran görüntüsünü veya ürün fotoğrafını gönderin.",
              ],
              [
                "03",
                "Ürünü Araştıralım",
                "Merter'deki aynı veya benzer ürün ve tedarik seçeneklerini araştıralım.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <span className="text-xs font-black text-black/25">
                  {number}
                </span>

                <h3 className="mt-5 text-2xl font-black">{title}</h3>

                <p className="mt-4 leading-7 text-black/55">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHATSAPP CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              MERTER'DEN ÜRÜN BUL
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Satmak istediğiniz modeli bize gösterin.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Instagram, e-ticaret sitesi veya başka bir yerde beğendiğiniz
              kadın giyim ürününün ekran görüntüsünü WhatsApp'tan gönderin.
              Merter'deki ürün ve benzer model seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              FOTOĞRAFI WHATSAPP'TAN GÖNDER →
            </a>
          </div>
        </section>

        {/* ÜRÜN GRUPLARI */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            KADIN GİYİM ÜRÜNLERİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            İnternetten Satmak İçin Hangi Kadın Giyim Ürünleri Alınabilir?
          </h2>

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

        {/* SEO İÇERİK */}
        <section className="mx-auto max-w-4xl px-6 pb-20">
          <h2 className="text-4xl font-black">
            Merter'den İnternetten Satış İçin Kadın Giyim Almak
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            İnternetten kadın giyim satışı yapan işletmeler için ürün
            çeşitliliği önemlidir. Merter'deki farklı kadın giyim ürünleri
            arasından mağazanızın hedef kitlesine uygun modeller
            araştırılabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            İstanbul'a Gelmeden Toptan Kadın Giyim Alınır mı?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Aradığınız ürünün fotoğrafını, ürün grubunu veya listenizi
            paylaşarak ürün araştırmasını uzaktan başlatabilirsiniz. Bu
            yöntem özellikle İstanbul dışında e-ticaret yapan işletmeler için
            ürün arama sürecini kolaylaştırabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            İnternetten Satış İçin Kadın Giyim Tedarikçisi
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Kadın giyim tedarik sürecinde ürün modeli kadar beden, renk, stok
            durumu ve sipariş koşullarının da değerlendirilmesi gerekir.
            Satmak istediğiniz modeli önceden belirlemek ürün araştırmasını
            daha hedefli hale getirir.
          </p>

          {/* DÖNÜŞÜM KUTUSU */}
          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Kadın giyim ürünü arıyorsanız fotoğrafını gönderin.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              İnternetten satmak istediğiniz kadın giyim ürününün görselini
              WhatsApp üzerinden gönderin. Merter'deki tedarik seçeneklerini
              araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-black text-white"
            >
              ÜRÜNÜ WHATSAPP'TAN GÖNDER →
            </a>
          </div>

          {/* İÇ LİNKLER */}
          <div className="mt-16 border-t border-black/10 pt-10">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              ONLINE SATIŞ & E-TİCARET
            </p>

            <div className="mt-7 flex flex-col gap-4">
              <Link
                href="/blog/internetten-satmak-icin-kadin-giyim-urunleri"
                className="border-b border-black/10 pb-4 font-bold"
              >
                İnternetten Satmak İçin Kadın Giyim Ürünleri →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Ürünleri →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri-nereden-alinir"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Ürünleri Nereden Alınır? →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-giyim-modelleri"
                className="font-bold"
              >
                E-Ticaret İçin Toptan Kadın Giyim Modelleri →
              </Link>
            </div>
          </div>
        </section>

        {/* SON CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              KADIN GİYİM TEDARİĞİ
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Aradığınız ürünü bize gönderin.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Merter'deki kadın giyim ürün ve tedarik seçeneklerini
              araştıralım.
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

      {/* MOBİL SABİT WHATSAPP */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#1d2226] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-white px-5 py-4 text-center text-sm font-black text-black"
        >
          ÜRÜN FOTOĞRAFINI WHATSAPP'TAN GÖNDER →
        </a>
      </div>
    </main>
  );
}

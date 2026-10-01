import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QU Style Merter | Kadın Giyim Ürün Tedariği",
  description:
    "QU Style Merter ürünleri arayan butik ve e-ticaret mağazaları için kadın giyim ürün araştırma ve Merter tedarik hizmeti. Ürün görselini WhatsApp'tan gönderin.",
  alternates: {
    canonical: "https://www.merterdentedarik.com/blog/qu-style-merter",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20QU%20Style%20Merter%20%C3%BCr%C3%BCn%C3%BC%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rselini%20g%C3%B6ndermek%20istiyorum.";

export default function QuStyleMerterPage() {
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
        <section className="mx-auto max-w-6xl px-6 py-10 md:py-16">
          <div className="relative min-h-[620px] overflow-hidden rounded-[2.5rem] bg-[#1d2226]">
            <img
              src="/images/banner.jpg"
              alt="QU Style Merter kadın giyim ürün tedariği"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

            <div className="relative z-10 flex min-h-[620px] max-w-3xl flex-col justify-center px-8 py-16 text-white md:px-16">
              <p className="text-xs font-black tracking-[.28em] text-white/60">
                MERTER • KADIN GİYİM • ÜRÜN TEDARİĞİ
              </p>

              <h1 className="mt-6 text-5xl font-black leading-[.9] tracking-[-.05em] md:text-8xl">
                QU Style
                <span className="block">Merter</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">
                QU Style Merter ürünleri arıyorsanız, ilgilendiğiniz kadın
                giyim modelinin fotoğrafını bize gönderin. Merter'de ürün
                araştırması ve tedarik süreciniz için destek alın.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-7 py-4 text-sm font-black text-black"
                >
                  ÜRÜN FOTOĞRAFI GÖNDER →
                </a>

                <Link
                  href="/blog/merter-toptan-kadin-giyim"
                  className="rounded-full border border-white/30 px-7 py-4 text-sm font-black text-white"
                >
                  MERTER TOPTAN GİYİM →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH INTENT */}
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            QU STYLE MERTER
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            QU Style Merter Ürünleri Arıyorsanız
          </h2>

          <p className="mt-8 text-lg leading-8 text-black/65">
            QU Style kadın giyim ürünlerinden belirli bir model arayan
            butik, mağaza ve e-ticaret satıcıları ürün görselini
            WhatsApp üzerinden iletebilir. Rota Tedarik olarak Merter
            kadın giyim piyasasında ürün araştırma ve tedarik sürecine
            yardımcı oluyoruz.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Elbise, pantolon, ceket, takım, triko ve farklı kadın giyim
            modellerinde aradığınız ürünün fotoğrafını göndermeniz
            araştırmayı doğrudan istediğiniz modele odaklamamızı sağlar.
          </p>
        </section>

        {/* CATEGORY */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-black/40">
              KADIN GİYİM
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              QU Style Merter Toptan Kadın Giyim
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["Elbise", "/blog/qustyle-toptan-elbise"],
                ["Kadın Giyim", "/blog/qustyle-toptan-kadin-giyim"],
                ["Merter Toptan", "/blog/merter-toptan-kadin-giyim"],
              ].map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  className="rounded-[1.5rem] border border-black/10 bg-[#f5f2eb] p-7 transition hover:-translate-y-1"
                >
                  <span className="text-xs font-black tracking-[.16em] text-black/35">
                    ÜRÜN ARAŞTIR
                  </span>
                  <strong className="mt-3 block text-2xl">{name}</strong>
                  <span className="mt-6 block text-sm font-black">
                    İNCELE →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* MERTER */}
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-black tracking-[.22em] text-black/40">
              MERTER TEDARİK
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Merter'den Kadın Giyim Ürün Tedariği
            </h2>

            <p className="mt-7 text-lg leading-8 text-black/65">
              Merter, İstanbul kadın giyim ve tekstil ticaretinin yoğun
              olduğu bölgelerden biridir. Butiğiniz veya e-ticaret
              mağazanız için aradığınız modeli bize ileterek ürün
              araştırması talep edebilirsiniz.
            </p>

            <p className="mt-5 text-lg leading-8 text-black/65">
              Özellikle internet üzerinde gördüğünüz bir QU Style
              modelini arıyorsanız ekran görüntüsünü göndermeniz yeterlidir.
              Ürün veya ihtiyacınıza uygun benzer seçenekler için araştırma
              yapılabilir.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-black text-white"
            >
              WHATSAPP'TAN GÖNDER →
            </a>
          </div>

          <div className="rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-sm font-black tracking-[.18em] text-black/40">
              NASIL ÇALIŞIR?
            </p>

            <div className="mt-8 space-y-7">
              <div>
                <strong className="text-2xl">01 — Görseli gönder</strong>
                <p className="mt-2 leading-7 text-black/55">
                  Aradığınız kadın giyim ürününün ekran görüntüsünü
                  WhatsApp'tan iletin.
                </p>
              </div>

              <div>
                <strong className="text-2xl">02 — Ürün araştırılsın</strong>
                <p className="mt-2 leading-7 text-black/55">
                  Model üzerinden Merter tedarik seçenekleri araştırılsın.
                </p>
              </div>

              <div>
                <strong className="text-2xl">03 — Seçenekleri değerlendirin</strong>
                <p className="mt-2 leading-7 text-black/55">
                  Bulunan ürün veya uygun alternatifler üzerinden
                  tedarik sürecini değerlendirin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ECOMMERCE */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              BUTİK & E-TİCARET
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              QU Style Ürünlerini
              <span className="block">Butiğiniz İçin Araştırın</span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Online butik, Instagram mağazası veya e-ticaret sitesi için
              kadın giyim ürünü arıyorsanız beğendiğiniz modeli gönderin.
              Ürün araştırmasını görsel üzerinden başlatın.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-4 font-black text-black"
              >
                MODEL GÖNDER →
              </a>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim"
                className="rounded-full border border-white/20 px-8 py-4 font-black"
              >
                E-TİCARET İÇİN KADIN GİYİM →
              </Link>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            İLGİLİ SAYFALAR
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Merter Kadın Giyim Rehberi
          </h2>

          <div className="mt-9 grid gap-3 md:grid-cols-2">
            <Link
              href="/blog/qustyle-toptan-kadin-giyim"
              className="rounded-2xl bg-white p-6 font-black"
            >
              Qustyle Toptan Kadın Giyim →
            </Link>

            <Link
              href="/blog/qustyle-toptan-elbise"
              className="rounded-2xl bg-white p-6 font-black"
            >
              Qustyle Toptan Elbise →
            </Link>

            <Link
              href="/blog/merter-toptan-kadin-giyim"
              className="rounded-2xl bg-white p-6 font-black"
            >
              Merter Toptan Kadın Giyim →
            </Link>

            <Link
              href="/blog/merter-kadin-giyim-toptancilari"
              className="rounded-2xl bg-white p-6 font-black"
            >
              Merter Kadın Giyim Toptancıları →
            </Link>

            <Link
              href="/blog/merter-toptancilar"
              className="rounded-2xl bg-white p-6 font-black"
            >
              Merter Toptancılar →
            </Link>

            <Link
              href="/blog/merter-e-ticaret-kadin-giyim-toptancisi"
              className="rounded-2xl bg-white p-6 font-black"
            >
              Merter E-Ticaret Kadın Giyim →
            </Link>
          </div>

          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <h2 className="text-3xl font-black md:text-5xl">
              QU Style Merter ürünü mü arıyorsunuz?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/60">
              Modelin fotoğrafını gönderin. Aradığınız ürün üzerinden
              tedarik araştırması yapalım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-black text-white"
            >
              FOTOĞRAF GÖNDER →
            </a>
          </div>

          <p className="mt-10 text-sm leading-6 text-black/40">
            Rota Tedarik bağımsız bir ürün araştırma ve tedarik hizmetidir.
            QU Style markasının resmi sitesi veya yetkili temsilcisi değildir.
          </p>
        </section>
      </article>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#1d2226] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-white px-5 py-4 text-center text-sm font-black text-black"
        >
          QU STYLE MERTER ÜRÜNÜ SOR →
        </a>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qustylse Toptan Elbise | Merter Kadın Giyim Tedarik",
  description:
    "Qustylse toptan elbise arayan butik ve e-ticaret mağazaları için kadın elbise ürün araştırması. Model fotoğrafını gönderin, Merter'den araştıralım.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/qustylse-toptan-elbise",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Qustylse%20toptan%20elbise%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20foto%C4%9Fraf%C4%B1%20g%C3%B6ndermek%20istiyorum.";

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
            ELBİSE SOR →
          </a>
        </div>
      </header>

      <article>
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="text-xs font-black tracking-[.24em] text-black/40">
              QUSTYLSE • TOPTAN • ELBİSE
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[.93] tracking-[-.05em] md:text-7xl">
              Qustylse
              <span className="block">Toptan Elbise</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
              Qustylse toptan elbise modelleri arıyorsanız beğendiğiniz
              ürünün fotoğrafını bize gönderin. Butik veya e-ticaret
              mağazanız için ürün ve benzer model seçeneklerini araştıralım.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black px-7 py-4 text-sm font-black text-white"
              >
                ELBİSE FOTOĞRAFI GÖNDER →
              </a>

              <Link
                href="/blog/qustylse-toptan"
                className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-black"
              >
                QUSTYLSE TOPTAN →
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-sm">
            <img
              src="/images/merterkadingiyimelbiseceket.jpeg"
              alt="Qustylse toptan kadın elbise modelleri"
              className="h-[520px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["QUSTYLSE", "Ürün Araştırma"],
              ["ELBİSE", "Kadın Giyim"],
              ["MERTER", "Toptan Tedarik"],
              ["E-TİCARET", "Online Butik"],
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
            TOPTAN KADIN ELBİSE
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Qustylse Toptan Elbise Modelleri
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Qustylse toptan elbise arayan butik ve kadın giyim işletmeleri,
            ilgilendikleri ürünün görselini ileterek model bazlı araştırma
            talep edebilir. Günlük, klasik ve farklı kadın elbise
            seçenekleri ihtiyaç doğrultusunda araştırılabilir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Özellikle e-ticaret için ürün arıyorsanız satmayı düşündüğünüz
            elbisenin ekran görüntüsünü WhatsApp üzerinden gönderebilirsiniz.
            Böylece araştırma doğrudan istediğiniz ürün üzerinden ilerler.
          </p>

          <Link
            href="/blog/qustylse-toptan"
            className="mt-7 inline-block font-black underline underline-offset-4"
          >
            Qustylse Toptan →
          </Link>
        </section>

        {/* CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              MODELİ GÖNDER
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Aradığınız elbisenin
              <span className="block">fotoğrafını gönderin.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Ürün kodunu veya tam model adını bilmeniz gerekmiyor.
              Elbisenin ekran görüntüsünü gönderin; ürün ve benzer
              seçenekleri araştırarak size dönüş yapalım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              WHATSAPP'TAN ELBİSE GÖNDER →
            </a>
          </div>
        </section>

        {/* SEO BODY */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-4xl font-black">
            Qustylse Toptan Elbise Merter
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Merter'den kadın giyim tedariği yapan butik ve işletmeler için
            elbise kategorisinde ürün araştırması yapılabilir. Qustylse
            elbise veya benzer bir model arıyorsanız ürün görselini
            göndererek araştırma talebi oluşturabilirsiniz.
          </p>

          <Link
            href="/blog/merter-elbise-toptancilari"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            Merter Elbise Toptancıları →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret İçin Qustylse Elbise
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Online butik ve e-ticaret mağazaları için kadın elbise
            kategorisinde ürün araştırırken aradığınız modeli görsel olarak
            iletebilirsiniz. Böylece ürün araştırması doğrudan mağazanızda
            satmayı düşündüğünüz modele odaklanabilir.
          </p>

          <Link
            href="/blog/e-ticaret-icin-toptan-elbise"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            E-Ticaret İçin Toptan Elbise →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Qustylse Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Elbisenin yanında farklı kadın giyim ürünleri için de model
            bazlı araştırma yapabilirsiniz. Aradığınız ürünün fotoğrafını
            göndererek tedarik seçenekleri hakkında bilgi alabilirsiniz.
          </p>

          <Link
            href="/blog/qustylse-toptan-kadin-giyim"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            Qustylse Toptan Kadın Giyim →
          </Link>

          {/* CLUSTER */}
          <div className="mt-16 rounded-[2rem] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              QUSTYLSE TOPTAN
            </p>

            <h2 className="mt-4 text-3xl font-black">
              İlgili kadın giyim sayfaları
            </h2>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              <Link
                href="/blog/qustylse-toptan"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-black"
              >
                Qustylse Toptan →
              </Link>

              <Link
                href="/blog/qustylse-toptan-kadin-giyim"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-black"
              >
                Qustylse Toptan Kadın Giyim →
              </Link>

              <Link
                href="/blog/merter-e-ticaret-toptan-elbise"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Merter E-Ticaret Toptan Elbise →
              </Link>

              <Link
                href="/blog/merter-toptan-kadin-elbise"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Merter Toptan Kadın Elbise →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                E-Ticaret İçin Kadın Giyim →
              </Link>

              <Link
                href="/blog/toptan-kadin-giyim"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Toptan Kadın Giyim →
              </Link>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Aradığınız elbiseyi gönderin.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Qustylse elbise veya benzer bir kadın giyim ürünü arıyorsanız
              ürün fotoğrafını WhatsApp üzerinden iletin.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-black text-white"
            >
              ELBİSE FOTOĞRAFI GÖNDER →
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
          QUSTYLSE ELBİSE SOR →
        </a>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qustyle Pantolon Modelleri | QU Style Merter Kadın Pantolon",
  description:
    "Qustyle pantolon modelleri ve QU Style Merter kadın pantolon ürünleri için ürün araştırma hizmeti. Beğendiğiniz pantolon görselini gönderin, Merter'de araştıralım.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/qustyle-pantolon-modelleri",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Qustyle%20pantolon%20modeli%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rselini%20g%C3%B6ndermek%20istiyorum.";

const related = [
  ["QU Style Merter", "/blog/qu-style-merter"],
  ["Qustyle Elbise Modelleri", "/blog/qustyle-elbise-modelleri"],
  ["Qustyle Merter Elbise", "/blog/qustyle-merter-elbise"],
  ["QU Style Toptan Pantolon", "/blog/qu-style-toptan-pantolon"],
  ["QU Style Toptan Ceket", "/blog/qu-style-toptan-ceket"],
  ["QU Style Merter Ceket Modelleri", "/blog/qu-style-merter-ceket-modelleri"],
  ["Merter Toptan Kadın Pantolon", "/blog/merter-toptan-kadin-pantolon"],
  ["Merter Kadın Giyim Modelleri", "/blog/merter-kadin-giyim-modelleri"],
  ["Merter Toptan Kadın Giyim", "/blog/merter-toptan-kadin-giyim"],
  ["E-Ticaret İçin Toptan Pantolon", "/blog/e-ticaret-icin-toptan-pantolon"],
];

export default function QustylePantolonModelleriPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f3] text-[#17201d] pb-20 md:pb-0">

      {/* HEADER */}
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" className="font-black tracking-[.17em]">
            ROTA TEDARİK
          </Link>

          <div className="hidden items-center gap-7 text-sm font-black md:flex">
            <Link href="/blog/qu-style-merter">
              QU STYLE MERTER
            </Link>
            <Link href="/blog/qustyle-elbise-modelleri">
              QUSTYLE ELBİSE
            </Link>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#254f46] px-5 py-3 text-xs font-black text-white"
          >
            PANTOLON SOR →
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-[.9fr_1.1fr]">

          {/* METIN */}
          <div className="flex min-h-[650px] flex-col justify-center rounded-[42px] bg-[#b9d9d5] p-8 md:p-14">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#254f46] px-4 py-2 text-xs font-black text-white">
                QUSTYLE
              </span>
              <span className="rounded-full bg-white/60 px-4 py-2 text-xs font-black">
                MERTER
              </span>
              <span className="rounded-full bg-[#fff0a8] px-4 py-2 text-xs font-black">
                PANTOLON
              </span>
            </div>

            <h1 className="mt-8 text-6xl font-black leading-[.85] tracking-[-.06em] md:text-[86px]">
              Qustyle
              <span className="block text-[#254f46]">
                Pantolon
              </span>
              <span className="block">
                Modelleri
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Qustyle pantolon modeli arıyorsanız beğendiğiniz ürünün
              fotoğrafını bize gönderin. Merter kadın giyim piyasasında
              aradığınız ürün veya benzer pantolon seçeneklerini
              araştırabilirsiniz.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#254f46] px-7 py-4 font-black text-white"
              >
                PANTOLON FOTOĞRAFI GÖNDER →
              </a>

              <Link
                href="/blog/qu-style-toptan-pantolon"
                className="rounded-full border-2 border-black/10 px-7 py-4 font-black"
              >
                TOPTAN PANTOLON →
              </Link>
            </div>
          </div>

          {/* FOTOĞRAF TEMİZ — ÜZERİNDE YAZI YOK */}
          <div className="overflow-hidden rounded-[42px] bg-white">
            <img
              src="/images/buzmaviqu.jpg"
              alt="Qustyle pantolon modelleri kadın pantolon"
              className="h-full min-h-[650px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3 KART */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">

          <Link
            href="/blog/qu-style-merter"
            className="rounded-[28px] bg-[#254f46] p-8 text-white transition hover:-translate-y-1"
          >
            <span className="text-xs font-black text-white/40">01</span>
            <h2 className="mt-12 text-3xl font-black">
              QU Style Merter
            </h2>
            <p className="mt-4 text-white/60">
              Merter odaklı QU Style ürün araştırması.
            </p>
            <span className="mt-8 block text-2xl">→</span>
          </Link>

          <Link
            href="/blog/qu-style-toptan-pantolon"
            className="rounded-[28px] bg-[#fff0a8] p-8 transition hover:-translate-y-1"
          >
            <span className="text-xs font-black text-black/30">02</span>
            <h2 className="mt-12 text-3xl font-black">
              Qustyle Toptan Pantolon
            </h2>
            <p className="mt-4 text-black/55">
              Toptan kadın pantolon araştırması.
            </p>
            <span className="mt-8 block text-2xl">→</span>
          </Link>

          <Link
            href="/blog/qustyle-elbise-modelleri"
            className="rounded-[28px] bg-[#ffb5a4] p-8 transition hover:-translate-y-1"
          >
            <span className="text-xs font-black text-black/30">03</span>
            <h2 className="mt-12 text-3xl font-black">
              Qustyle Elbise
            </h2>
            <p className="mt-4 text-black/55">
              Qustyle elbise modellerini inceleyin.
            </p>
            <span className="mt-8 block text-2xl">→</span>
          </Link>

        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">

            <p className="text-xs font-black tracking-[.25em] text-[#254f46]">
              QUSTYLE KADIN PANTOLON
            </p>

            <div>
              <h2 className="max-w-4xl text-5xl font-black leading-[.94] tracking-[-.05em] md:text-7xl">
                Qustyle kadın pantolon modelleri
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
                Qustyle pantolon modelleri; butik, mağaza ve e-ticaret
                işletmeleri tarafından araştırılan kadın giyim ürün
                gruplarından biridir. Aradığınız ürünün fotoğrafını
                göndererek ürün araştırması talep edebilirsiniz.
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-black/60">
                Buz mavisi, sezon renkleri, klasik veya günlük kadın
                pantolon modellerinde görsel üzerinden araştırma yapmak,
                aradığınız stile daha hızlı odaklanmayı sağlar.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MERTER */}
      <section className="bg-[#254f46] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <p className="text-xs font-black tracking-[.25em] text-[#fff0a8]">
            QUSTYLE • MERTER
          </p>

          <div className="mt-6 grid gap-12 md:grid-cols-[1.2fr_.8fr]">
            <h2 className="text-5xl font-black leading-[.9] tracking-[-.055em] md:text-7xl">
              Qustyle Merter
              <span className="block text-[#b9d9d5]">
                pantolon araştırması
              </span>
            </h2>

            <div>
              <p className="text-lg leading-8 text-white/65">
                Merter kadın giyim piyasasında Qustyle pantolon veya
                benzer bir ürün araştırıyorsanız modelin ekran görüntüsünü
                WhatsApp üzerinden gönderebilirsiniz.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-[#fff0a8] px-8 py-4 font-black text-black"
              >
                ÜRÜNÜ GÖNDER →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* E-TICARET */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="rounded-[42px] bg-[#ffb5a4] p-8 md:p-16">

            <p className="text-xs font-black tracking-[.25em] text-black/45">
              E-TİCARET & BUTİK
            </p>

            <h2 className="mt-5 max-w-5xl text-5xl font-black leading-[.92] tracking-[-.05em] md:text-7xl">
              Online mağazanız için
              <span className="block text-[#7b2f24]">
                kadın pantolon
              </span>
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-8 text-black/60">
                E-ticaret siteniz veya butik mağazanız için kadın pantolon
                ürünleri araştırıyorsanız beğendiğiniz modelin fotoğrafını
                gönderin.
              </p>

              <div>
                <Link
                  href="/blog/e-ticaret-icin-toptan-pantolon"
                  className="inline-block border-b-2 border-black pb-2 font-black"
                >
                  E-TİCARET İÇİN TOPTAN PANTOLON →
                </Link>

                <br />

                <Link
                  href="/blog/e-ticaret-icin-kadin-giyim"
                  className="mt-6 inline-block border-b-2 border-black pb-2 font-black"
                >
                  E-TİCARET İÇİN KADIN GİYİM →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-t border-black/10 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <p className="text-xs font-black tracking-[.25em] text-[#254f46]">
            QUSTYLE REHBERİ
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-black tracking-[-.05em] md:text-6xl">
            Qustyle ve Merter kadın giyim
          </h2>

          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {related.map(([title, href], index) => (
              <Link
                key={href}
                href={href}
                className="group flex min-h-[105px] items-center justify-between rounded-[25px] border border-black/10 bg-[#f5f7f3] p-6 transition hover:-translate-y-1 hover:bg-[#fff0a8]"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs font-black text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong className="text-lg md:text-xl">
                    {title}
                  </strong>
                </div>

                <span className="text-2xl transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#b9d9d5]">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">

          <p className="text-xs font-black tracking-[.28em] text-[#254f46]">
            QUSTYLE PANTOLON
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[.88] tracking-[-.06em] md:text-8xl">
            Pantolonu gördün.
            <span className="block text-[#254f46]">
              Görselini gönder.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-black/55">
            Aradığınız Qustyle pantolon modelini veya benzer kadın
            pantolon seçeneklerini görsel üzerinden araştırın.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-[#254f46] px-9 py-5 font-black text-white"
          >
            WHATSAPP'TAN GÖNDER →
          </a>

          <p className="mx-auto mt-12 max-w-2xl text-xs leading-5 text-black/35">
            Rota Tedarik bağımsız bir ürün araştırma ve tedarik hizmetidir.
            QU Style markasının resmi sitesi veya yetkili temsilcisi değildir.
          </p>

        </div>
      </section>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#17201d] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-[#fff0a8] px-5 py-4 text-center text-sm font-black text-black"
        >
          QUSTYLE PANTOLON SOR →
        </a>
      </div>

    </main>
  );
}

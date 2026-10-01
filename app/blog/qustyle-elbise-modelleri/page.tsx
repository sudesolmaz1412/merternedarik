import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qustyle Elbise Modelleri | QU Style Merter Kadın Giyim",
  description:
    "Qustyle elbise modelleri ve QU Style Merter kadın giyim ürünleri için ürün araştırma hizmeti. Beğendiğiniz elbise görselini gönderin, Merter'de araştıralım.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/qustyle-elbise-modelleri",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Qustyle%20elbise%20modeli%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rselini%20g%C3%B6ndermek%20istiyorum.";

const links = [
  ["QU Style Merter", "/blog/qu-style-merter"],
  ["QU Style Toptan Elbise", "/blog/qustyle-toptan-elbise"],
  ["QU Style Toptan Ceket", "/blog/qu-style-toptan-ceket"],
  ["QU Style Toptan Pantolon", "/blog/qu-style-toptan-pantolon"],
  ["QU Style Merter Ceket Modelleri", "/blog/qu-style-merter-ceket-modelleri"],
  ["QU Style Toptan Kadın Giyim", "/blog/qustyle-toptan-kadin-giyim"],
  ["Merter Toptan Kadın Elbise", "/blog/merter-toptan-kadin-elbise"],
  ["Merter Toptan Elbise Modelleri", "/blog/merter-toptan-elbise-modelleri"],
  ["Merter Kadın Giyim Modelleri", "/blog/merter-kadin-giyim-modelleri"],
  ["E-Ticaret İçin Toptan Elbise", "/blog/e-ticaret-icin-toptan-elbise"],
];

export default function QustyleElbiseModelleriPage() {
  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#191919] pb-20 md:pb-0">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fffaf5]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="font-black tracking-[.16em]">
            ROTA TEDARİK
          </Link>

          <div className="hidden items-center gap-7 text-sm font-black md:flex">
            <Link href="/blog/qu-style-merter">QU STYLE MERTER</Link>
            <Link href="/blog/qustyle-toptan-kadin-giyim">
              QUSTYLE KADIN GİYİM
            </Link>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#7c163e] px-5 py-3 text-xs font-black text-white"
          >
            ELBİSE SOR →
          </a>
        </div>
      </header>

      {/* HERO - FOTOĞRAFIN ÜSTÜNDE YAZI YOK */}
      <section className="mx-auto max-w-7xl px-5 py-7 md:px-8 md:py-10">
        <div className="grid gap-5 md:grid-cols-[.9fr_1.1fr] md:items-stretch">

          <div className="flex min-h-[600px] flex-col justify-center rounded-[38px] bg-[#7c163e] p-8 text-white md:p-14">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#ffcf70] px-4 py-2 text-xs font-black text-black">
                QUSTYLE
              </span>

              <span className="rounded-full border border-white/25 px-4 py-2 text-xs font-black">
                MERTER
              </span>

              <span className="rounded-full border border-white/25 px-4 py-2 text-xs font-black">
                ELBİSE
              </span>
            </div>

            <h1 className="mt-8 text-6xl font-black leading-[.86] tracking-[-.06em] md:text-7xl">
              Qustyle
              <span className="block text-[#ffcf70]">
                Elbise
              </span>
              <span className="block">
                Modelleri
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
              Qustyle elbise modeli arıyorsanız beğendiğiniz ürünün
              fotoğrafını bize gönderin. Merter kadın giyim piyasasında
              ürün ve benzer model seçeneklerini araştırın.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#ffcf70] px-7 py-4 font-black text-black"
              >
                ELBİSE FOTOĞRAFI GÖNDER →
              </a>

              <Link
                href="/blog/qu-style-merter"
                className="rounded-full border border-white/25 px-7 py-4 font-black"
              >
                QU STYLE MERTER →
              </Link>
            </div>
          </div>

          {/* SADECE FOTOĞRAF */}
          <div className="overflow-hidden rounded-[38px] bg-[#eee]">
            <img
              src="/images/qustyleelbise.jpg"
              alt="Qustyle elbise modelleri"
              className="h-full min-h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* QUSTYLE INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-[.65fr_1.35fr]">
          <p className="text-xs font-black tracking-[.25em] text-[#7c163e]">
            QUSTYLE KADIN GİYİM
          </p>

          <div>
            <h2 className="text-5xl font-black leading-[.94] tracking-[-.05em] md:text-7xl">
              Qustyle elbise arayan butiklere ürün araştırma.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
              Qustyle elbise modelleri kadın giyim mağazaları, butik
              işletmeleri ve online satış yapan mağazalar tarafından
              araştırılan ürün gruplarından biridir.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/60">
              İnternette veya sosyal medyada gördüğünüz QU Style elbise
              modelinin ekran görüntüsünü göndererek ürün araştırma
              talebinde bulunabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* BORDO ELBİSE */}
      <section className="bg-[#f0d6d7] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">

          {/* FOTOĞRAF TEMİZ */}
          <div className="overflow-hidden rounded-[38px] bg-white">
            <img
              src="/images/qubordoelbise.jpg"
              alt="Qustyle bordo elbise modeli"
              className="h-[650px] w-full object-cover"
            />
          </div>

          <div className="md:p-8">
            <p className="text-xs font-black tracking-[.25em] text-[#7c163e]">
              QUSTYLE ELBİSE
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[.94] tracking-[-.05em] md:text-6xl">
              Qustyle bordo
              <span className="block text-[#7c163e]">
                elbise modelleri
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-black/60">
              Bordo, vişne ve sezon renklerindeki kadın elbise modellerini
              araştırıyorsanız aradığınız ürünün görselini WhatsApp
              üzerinden iletebilirsiniz.
            </p>

            <p className="mt-5 text-lg leading-8 text-black/60">
              Ürünün tam modelini veya ihtiyacınıza uygun benzer seçenekleri
              Merter kadın giyim tedarik ağı içerisinde araştırabilirsiniz.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-[#7c163e] px-8 py-4 font-black text-white"
            >
              BU TARZ ELBİSE ARA →
            </a>
          </div>
        </div>
      </section>

      {/* SEARCH INTENTS */}
      <section className="bg-[#181818] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-black tracking-[.25em] text-[#ffcf70]">
            QUSTYLE / MERTER
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[.94] tracking-[-.05em] md:text-7xl">
            Qustyle ararken doğru ürüne ulaşın.
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <Link
              href="/blog/qu-style-merter"
              className="rounded-[30px] bg-[#7c163e] p-8 transition hover:-translate-y-2"
            >
              <span className="text-sm font-black text-white/40">01</span>
              <h3 className="mt-16 text-3xl font-black">
                QU Style Merter
              </h3>
              <p className="mt-4 text-white/55">
                Merter odaklı QU Style ürün araştırması.
              </p>
              <span className="mt-8 block text-2xl">→</span>
            </Link>

            <Link
              href="/blog/qustyle-toptan-elbise"
              className="rounded-[30px] bg-[#f16f52] p-8 transition hover:-translate-y-2"
            >
              <span className="text-sm font-black text-white/40">02</span>
              <h3 className="mt-16 text-3xl font-black">
                Qustyle Toptan Elbise
              </h3>
              <p className="mt-4 text-white/65">
                Toptan elbise arayan işletmeler için.
              </p>
              <span className="mt-8 block text-2xl">→</span>
            </Link>

            <Link
              href="/blog/qustyle-toptan-kadin-giyim"
              className="rounded-[30px] bg-[#ffcf70] p-8 text-black transition hover:-translate-y-2"
            >
              <span className="text-sm font-black text-black/30">03</span>
              <h3 className="mt-16 text-3xl font-black">
                Qustyle Kadın Giyim
              </h3>
              <p className="mt-4 text-black/55">
                Diğer kadın giyim ürün gruplarını inceleyin.
              </p>
              <span className="mt-8 block text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* E-TICARET */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="rounded-[40px] bg-[#ffd9a8] p-8 md:p-16">
          <p className="text-xs font-black tracking-[.25em] text-black/40">
            BUTİK & E-TİCARET
          </p>

          <div className="mt-5 grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
            <h2 className="text-5xl font-black leading-[.9] tracking-[-.055em] md:text-7xl">
              E-ticaret için
              <span className="block text-[#7c163e]">
                elbise mi arıyorsunuz?
              </span>
            </h2>

            <div>
              <p className="leading-7 text-black/60">
                Online mağazanız için aradığınız kadın elbise modelinin
                görselini göndererek ürün araştırmasını başlatın.
              </p>

              <Link
                href="/blog/e-ticaret-icin-toptan-elbise"
                className="mt-7 inline-block border-b-2 border-black pb-2 font-black"
              >
                E-TİCARET İÇİN ELBİSE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-t border-black/10 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-black tracking-[.25em] text-[#7c163e]">
            İLGİLİ SAYFALAR
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-black tracking-[-.045em] md:text-6xl">
            Qustyle ve Merter kadın giyim rehberi
          </h2>

          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {links.map(([title, href], index) => (
              <Link
                key={href}
                href={href}
                className="group flex min-h-[110px] items-center justify-between rounded-[24px] border border-black/10 bg-[#fffaf5] p-6 transition hover:-translate-y-1 hover:bg-[#ffcf70]"
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
      <section className="bg-[#7c163e] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">
          <p className="text-xs font-black tracking-[.28em] text-[#ffcf70]">
            QUSTYLE ELBİSE
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[.88] tracking-[-.055em] md:text-8xl">
            Elbiseyi gördün.
            <span className="block text-[#ffcf70]">
              Fotoğrafını gönder.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65">
            Aradığınız Qustyle elbise modelini görsel üzerinden araştırmaya
            başlayalım.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-[#ffcf70] px-9 py-5 font-black text-black"
          >
            ELBİSE FOTOĞRAFI GÖNDER →
          </a>

          <p className="mx-auto mt-12 max-w-2xl text-xs leading-5 text-white/35">
            Rota Tedarik bağımsız bir ürün araştırma ve tedarik hizmetidir.
            QU Style markasının resmi sitesi veya yetkili temsilcisi değildir.
          </p>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#181818] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-[#ffcf70] px-5 py-4 text-center text-sm font-black text-black"
        >
          QUSTYLE ELBİSE SOR →
        </a>
      </div>
    </main>
  );
}

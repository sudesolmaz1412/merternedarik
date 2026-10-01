import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qustyle Merter Elbise | QU Style Kadın Giyim",
  description:
    "Qustyle Merter elbise arayan butik ve e-ticaret mağazaları için kadın giyim ürün araştırma hizmeti. Beğendiğiniz QU Style elbise görselini gönderin.",
  alternates: {
    canonical: "https://www.merterdentedarik.com/blog/qustyle-merter-elbise",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Qustyle%20Merter%20elbise%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rselini%20g%C3%B6ndermek%20istiyorum.";

const related = [
  ["Qustyle Elbise Modelleri", "/blog/qustyle-elbise-modelleri"],
  ["QU Style Merter", "/blog/qu-style-merter"],
  ["Qustyle Toptan Elbise", "/blog/qustyle-toptan-elbise"],
  ["Qustyle Toptan Kadın Giyim", "/blog/qustyle-toptan-kadin-giyim"],
  ["QU Style Toptan Ceket", "/blog/qu-style-toptan-ceket"],
  ["QU Style Toptan Pantolon", "/blog/qu-style-toptan-pantolon"],
  ["Merter Toptan Kadın Elbise", "/blog/merter-toptan-kadin-elbise"],
  ["Merter Toptan Elbise Modelleri", "/blog/merter-toptan-elbise-modelleri"],
  ["Merter Kadın Giyim Modelleri", "/blog/merter-kadin-giyim-modelleri"],
  ["Merter Kadın Giyim Toptancıları", "/blog/merter-kadin-giyim-toptancilari"],
  ["E-Ticaret İçin Toptan Elbise", "/blog/e-ticaret-icin-toptan-elbise"],
  ["E-Ticaret İçin Kadın Giyim", "/blog/e-ticaret-icin-kadin-giyim"],
];

export default function QustyleMerterElbisePage() {
  return (
    <main className="min-h-screen bg-[#fff8f1] text-[#171717] pb-20 md:pb-0">

      {/* HEADER */}
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" className="font-black tracking-[.17em]">
            ROTA TEDARİK
          </Link>

          <Link
            href="/blog/qu-style-merter"
            className="hidden text-sm font-black md:block"
          >
            QU STYLE MERTER
          </Link>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#8d173f] px-5 py-3 text-xs font-black text-white"
          >
            ELBİSE SOR →
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-[.85fr_1.15fr]">

          {/* METIN AYRI */}
          <div className="flex min-h-[620px] flex-col justify-center rounded-[40px] bg-[#ffb4c6] p-8 md:p-14">
            <p className="text-xs font-black tracking-[.25em] text-[#8d173f]">
              QUSTYLE • MERTER • ELBİSE
            </p>

            <h1 className="mt-6 text-6xl font-black leading-[.86] tracking-[-.06em] md:text-[88px]">
              Qustyle
              <span className="block text-[#8d173f]">
                Merter
              </span>
              <span className="block">
                Elbise
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/65">
              QU Style elbise modeli arıyorsanız ürünün fotoğrafını
              gönderin. Merter kadın giyim ürünleri içerisinde aradığınız
              model veya benzer seçenekler için araştırma yapalım.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#8d173f] px-7 py-4 font-black text-white"
              >
                ELBİSE FOTOĞRAFI GÖNDER →
              </a>

              <Link
                href="/blog/qustyle-elbise-modelleri"
                className="rounded-full border-2 border-black/15 px-7 py-4 font-black"
              >
                ELBİSE MODELLERİ →
              </Link>
            </div>
          </div>

          {/* FOTO TEMIZ - UZERINDE YAZI YOK */}
          <div className="overflow-hidden rounded-[40px] bg-white">
            <img
              src="/images/qustyleelbise.jpg"
              alt="Qustyle Merter elbise kadın giyim"
              className="h-full min-h-[620px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MINI NAV */}
      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <div className="grid gap-3 md:grid-cols-3">
          <Link
            href="/blog/qu-style-merter"
            className="rounded-[24px] bg-[#8d173f] p-7 text-white transition hover:-translate-y-1"
          >
            <span className="text-xs font-black text-white/50">01</span>
            <strong className="mt-3 block text-2xl">QU Style Merter</strong>
            <span className="mt-5 block">→</span>
          </Link>

          <Link
            href="/blog/qustyle-elbise-modelleri"
            className="rounded-[24px] bg-[#ffca66] p-7 transition hover:-translate-y-1"
          >
            <span className="text-xs font-black text-black/40">02</span>
            <strong className="mt-3 block text-2xl">
              Qustyle Elbise Modelleri
            </strong>
            <span className="mt-5 block">→</span>
          </Link>

          <Link
            href="/blog/qustyle-toptan-kadin-giyim"
            className="rounded-[24px] bg-[#d8ff65] p-7 transition hover:-translate-y-1"
          >
            <span className="text-xs font-black text-black/40">03</span>
            <strong className="mt-3 block text-2xl">
              Qustyle Kadın Giyim
            </strong>
            <span className="mt-5 block">→</span>
          </Link>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <p className="text-xs font-black tracking-[.25em] text-[#8d173f]">
          QU STYLE MERTER
        </p>

        <h2 className="mt-5 max-w-5xl text-5xl font-black leading-[.95] tracking-[-.05em] md:text-7xl">
          Qustyle elbise arayanlar için Merter ürün araştırması
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <p className="text-lg leading-8 text-black/60">
            Qustyle Merter elbise araması yapan butik ve e-ticaret
            işletmeleri beğendikleri kadın giyim modelinin görselini
            ileterek ürün araştırma talebinde bulunabilir.
          </p>

          <p className="text-lg leading-8 text-black/60">
            Aradığınız modelin fotoğrafı, ürün araştırmasını doğrudan
            istediğiniz stile yönlendirmeyi kolaylaştırır. Ürün veya
            ihtiyacınıza uygun benzer seçenekler değerlendirilebilir.
          </p>
        </div>
      </section>

      {/* BORDO FOTO */}
      <section className="bg-[#54152d] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">

          {/* FOTO USTUNDE YAZI YOK */}
          <div className="overflow-hidden rounded-[40px] bg-white">
            <img
              src="/images/qubordoelbise.jpg"
              alt="Qustyle bordo elbise kadın giyim modeli"
              className="h-[680px] w-full object-cover"
            />
          </div>

          <div className="text-white">
            <p className="text-xs font-black tracking-[.25em] text-[#ffca66]">
              QUSTYLE ELBİSE
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[.92] tracking-[-.05em] md:text-7xl">
              Bordo elbise
              <span className="block text-[#ffb4c6]">
                modelleri
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
              Qustyle bordo elbise veya benzer kadın elbise modellerini
              mağazanız için araştırmak istiyorsanız ürün fotoğrafını
              WhatsApp üzerinden gönderin.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-[#ffca66] px-8 py-4 font-black text-black"
            >
              BU MODELİ ARAŞTIR →
            </a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-black tracking-[.25em] text-[#8d173f]">
            QUSTYLE & MERTER REHBERİ
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-black tracking-[-.05em] md:text-6xl">
            İlgili kadın giyim sayfaları
          </h2>

          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {related.map(([title, href], index) => (
              <Link
                key={href}
                href={href}
                className="group flex min-h-[105px] items-center justify-between rounded-[24px] border border-black/10 bg-[#fff8f1] p-6 transition hover:-translate-y-1 hover:bg-[#ffca66]"
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

      {/* FINAL CTA */}
      <section className="bg-[#ffb4c6]">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">
          <p className="text-xs font-black tracking-[.28em] text-[#8d173f]">
            QUSTYLE MERTER ELBİSE
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[.88] tracking-[-.06em] md:text-8xl">
            Modeli buldun mu?
            <span className="block text-[#8d173f]">
              Fotoğrafını gönder.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-black/55">
            Qustyle elbise veya benzer kadın giyim ürünlerini görsel
            üzerinden araştırmaya başlayın.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-[#8d173f] px-9 py-5 font-black text-white"
          >
            WHATSAPP'TAN GÖNDER →
          </a>

          <p className="mx-auto mt-12 max-w-2xl text-xs leading-5 text-black/35">
            Rota Tedarik bağımsız bir ürün araştırma ve tedarik hizmetidir.
            QU Style markasının resmi sitesi veya yetkili temsilcisi değildir.
          </p>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#54152d] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-[#ffca66] px-5 py-4 text-center text-sm font-black text-black"
        >
          QUSTYLE ELBİSE SOR →
        </a>
      </div>
    </main>
  );
}

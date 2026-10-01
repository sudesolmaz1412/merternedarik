import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QU Style Merter Ceket Modelleri | Kadın Giyim",
  description:
    "QU Style Merter ceket modelleri arayan butik ve e-ticaret mağazaları için ürün araştırma ve kadın giyim tedarik hizmeti. Beğendiğiniz ceketin görselini gönderin.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/qu-style-merter-ceket-modelleri",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20QU%20Style%20Merter%20ceket%20modeli%20ar%C4%B1yorum.%20G%C3%B6rselini%20g%C3%B6ndermek%20istiyorum.";

const links = [
  ["QU Style Merter", "/blog/qu-style-merter"],
  ["QU Style Toptan Ceket", "/blog/qu-style-toptan-ceket"],
  ["QU Style Toptan Pantolon", "/blog/qu-style-toptan-pantolon"],
  ["QU Style Toptan Elbise", "/blog/qustyle-toptan-elbise"],
  ["QU Style Toptan Kadın Giyim", "/blog/qustyle-toptan-kadin-giyim"],
  ["Merter Toptan Kadın Ceket", "/blog/merter-toptan-kadin-ceket"],
  ["Merter Toptan Kadın Takım", "/blog/merter-toptan-kadin-takim"],
  ["Merter Kadın Giyim Modelleri", "/blog/merter-kadin-giyim-modelleri"],
  ["Merter Kadın Giyim Toptancıları", "/blog/merter-kadin-giyim-toptancilari"],
  ["E-Ticaret İçin Toptan Kadın Ceket", "/blog/e-ticaret-icin-toptan-kadin-ceket"],
];

export default function QuStyleMerterCeketModelleri() {
  return (
    <main className="min-h-screen bg-[#fff8ef] text-[#171717] pb-20 md:pb-0">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fff8ef]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="text-lg font-black tracking-[.16em]">
            ROTA TEDARİK
          </Link>

          <div className="hidden gap-7 text-sm font-bold md:flex">
            <Link href="/blog/qu-style-merter">QU STYLE MERTER</Link>
            <Link href="/blog/merter-toptan-kadin-giyim">MERTER</Link>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#ff4f39] px-5 py-3 text-xs font-black text-white"
          >
            MODEL GÖNDER ↗
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pt-5 md:px-8 md:pt-8">
        <div className="grid overflow-hidden rounded-[34px] bg-[#6d3cff] md:min-h-[720px] md:grid-cols-[1.05fr_.95fr] md:rounded-[46px]">

          <div className="flex flex-col justify-center p-8 text-white md:p-14 lg:p-16">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#dfff4f] px-4 py-2 text-xs font-black text-black">
                QU STYLE
              </span>
              <span className="rounded-full border border-white/30 px-4 py-2 text-xs font-black">
                MERTER
              </span>
              <span className="rounded-full border border-white/30 px-4 py-2 text-xs font-black">
                CEKET
              </span>
            </div>

            <h1 className="mt-8 text-6xl font-black leading-[.86] tracking-[-.065em] md:text-7xl lg:text-[92px]">
              QU Style
              <span className="block text-[#dfff4f]">
                Merter Ceket
              </span>
              <span className="block">
                Modelleri
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">
              Beğendiğiniz kadın ceket modelinin fotoğrafını gönderin.
              Merter'de ürün ve benzer model seçeneklerini araştırarak
              mağazanız için tedarik alternatiflerini değerlendirin.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#dfff4f] px-7 py-4 font-black text-black transition hover:scale-105"
              >
                CEKET FOTOĞRAFI GÖNDER →
              </a>

              <Link
                href="/blog/qu-style-merter"
                className="rounded-full border border-white/30 px-7 py-4 font-black"
              >
                QU STYLE MERTER →
              </Link>
            </div>
          </div>

          <div className="relative min-h-[500px] md:min-h-full">
            <img
              src="/images/quyeni.jpg"
              alt="QU Style Merter kadın ceket modelleri"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/20 bg-black/40 p-5 text-white backdrop-blur-md">
              <p className="text-xs font-black tracking-[.2em] text-white/50">
                ÜRÜN ARAŞTIRMA
              </p>
              <strong className="mt-2 block text-xl">
                Fotoğrafı gönder → modeli araştır
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* COLOR STRIP */}
      <section className="mx-auto max-w-7xl px-5 py-5 md:px-8">
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-[22px] bg-[#ff4f39] p-6 text-white">
            <span className="text-xs font-black opacity-60">01</span>
            <strong className="mt-3 block text-xl">Kadın Ceket</strong>
          </div>

          <div className="rounded-[22px] bg-[#ffb52e] p-6">
            <span className="text-xs font-black opacity-50">02</span>
            <strong className="mt-3 block text-xl">Merter Tedarik</strong>
          </div>

          <div className="rounded-[22px] bg-[#dfff4f] p-6">
            <span className="text-xs font-black opacity-50">03</span>
            <strong className="mt-3 block text-xl">Online Butik</strong>
          </div>

          <div className="rounded-[22px] bg-[#55d6be] p-6">
            <span className="text-xs font-black opacity-50">04</span>
            <strong className="mt-3 block text-xl">E-Ticaret</strong>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[.7fr_1.3fr] md:px-8">
        <div>
          <p className="text-xs font-black tracking-[.24em] text-[#6d3cff]">
            QU STYLE CEKET
          </p>
        </div>

        <div>
          <h2 className="text-5xl font-black leading-[.95] tracking-[-.05em] md:text-7xl">
            Merter'de QU Style ceket modeli mi arıyorsunuz?
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            QU Style Merter ceket modelleri arayan butik ve e-ticaret
            işletmeleri beğendikleri ürünün fotoğrafını bize iletebilir.
            Görsel üzerinden ürün araştırması yapılarak aradığınız modele
            veya benzer seçeneklere odaklanılabilir.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/60">
            Blazer ceket, oversize ceket, klasik kadın ceket ve takım
            kombinlerinde kullanılabilecek modeller için Merter kadın
            giyim tedarik seçeneklerini değerlendirebilirsiniz.
          </p>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="relative overflow-hidden rounded-[40px] bg-[#ff4f39] p-9 text-white md:p-16">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#ffb52e]" />
          <div className="absolute -bottom-28 right-28 h-72 w-72 rounded-full bg-[#6d3cff]" />

          <div className="relative z-10 max-w-4xl">
            <p className="text-xs font-black tracking-[.25em] text-white/60">
              FOTOĞRAF YETERLİ
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[.9] tracking-[-.05em] md:text-7xl">
              Ürün kodunu bilmene
              <span className="block text-[#ffe66d]">gerek yok.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              İnternette gördüğünüz ceket modelinin ekran görüntüsünü
              gönderin. Ürün araştırmasını görsel üzerinden başlatın.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-black px-8 py-4 font-black text-white"
            >
              FOTOĞRAFI WHATSAPP'TAN GÖNDER →
            </a>
          </div>
        </div>
      </section>

      {/* 3 INTENTS */}
      <section className="bg-[#171717] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-black tracking-[.25em] text-[#dfff4f]">
            MERTER KADIN GİYİM
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[.95] tracking-[-.045em] md:text-7xl">
            Ceketten komple koleksiyona.
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <Link
              href="/blog/qu-style-toptan-ceket"
              className="group rounded-[30px] bg-[#6d3cff] p-8 transition hover:-translate-y-2"
            >
              <span className="text-sm font-black text-white/50">01</span>
              <h3 className="mt-16 text-3xl font-black">
                QU Style Toptan Ceket
              </h3>
              <span className="mt-8 block text-2xl">→</span>
            </Link>

            <Link
              href="/blog/qu-style-toptan-pantolon"
              className="group rounded-[30px] bg-[#ff4f39] p-8 transition hover:-translate-y-2"
            >
              <span className="text-sm font-black text-white/50">02</span>
              <h3 className="mt-16 text-3xl font-black">
                QU Style Toptan Pantolon
              </h3>
              <span className="mt-8 block text-2xl">→</span>
            </Link>

            <Link
              href="/blog/qustyle-toptan-kadin-giyim"
              className="group rounded-[30px] bg-[#dfff4f] p-8 text-black transition hover:-translate-y-2"
            >
              <span className="text-sm font-black text-black/40">03</span>
              <h3 className="mt-16 text-3xl font-black">
                QU Style Kadın Giyim
              </h3>
              <span className="mt-8 block text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINK HUB */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-black tracking-[.25em] text-[#ff4f39]">
            MERTER REHBERİ
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-black tracking-[-.045em] md:text-6xl">
            İlgili ürün ve tedarik sayfaları
          </h2>

          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {links.map(([title, href], index) => (
              <Link
                key={href}
                href={href}
                className="group flex min-h-[110px] items-center justify-between rounded-[24px] border border-black/10 bg-[#fff8ef] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#dfff4f]"
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
      <section className="bg-[#6d3cff] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">
          <p className="text-xs font-black tracking-[.28em] text-[#dfff4f]">
            QU STYLE MERTER
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[.88] tracking-[-.06em] md:text-8xl">
            Ceketi beğendin mi?
            <span className="block text-[#dfff4f]">
              Bize gönder.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65">
            Ürün fotoğrafını göndererek Merter kadın giyim ürün araştırma
            sürecini başlatabilirsiniz.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-[#dfff4f] px-9 py-5 font-black text-black transition hover:scale-105"
          >
            CEKET MODELİNİ GÖNDER →
          </a>

          <p className="mx-auto mt-12 max-w-2xl text-xs leading-5 text-white/40">
            Rota Tedarik bağımsız bir ürün araştırma ve tedarik hizmetidir.
            QU Style markasının resmi sitesi veya yetkili temsilcisi değildir.
          </p>
        </div>
      </section>

      {/* MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#171717] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-[#dfff4f] px-5 py-4 text-center text-sm font-black text-black"
        >
          CEKET FOTOĞRAFI GÖNDER →
        </a>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Toptan Kadın Giyim Modelleri | Rota Tedarik",
  description:
    "E-ticaret için toptan kadın giyim modelleri. Kadın takım, elbise, ceket, triko, bluz ve yeni sezon kadın giyim ürünleri için Merter tedarik desteği.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-toptan-kadin-giyim-modelleri",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20i%C3%A7in%20toptan%20kad%C4%B1n%20giyim%20modelleri%20ar%C4%B1yorum.";

const modeller = [
  {
    title: "Toptan Kadın Takım Modelleri",
    text: "E-ticaret koleksiyonları için ikili takım, ceket-pantolon ve farklı kadın takım modelleri değerlendirilebilir.",
  },
  {
    title: "Toptan Kadın Elbise Modelleri",
    text: "Günlük, şık ve sezonluk kadın elbiseleri online mağazalarda farklı müşteri gruplarına hitap edebilir.",
  },
  {
    title: "Toptan Kadın Ceket Modelleri",
    text: "Kadın ceket modelleri özellikle kombin odaklı e-ticaret koleksiyonlarında tamamlayıcı ürün olarak kullanılabilir.",
  },
  {
    title: "Toptan Triko Modelleri",
    text: "Kazak, hırka ve farklı triko ürünleri sonbahar-kış döneminde kadın giyim koleksiyonlarına eklenebilir.",
  },
  {
    title: "Toptan Bluz ve Üst Giyim",
    text: "Bluz, gömlek ve kadın üst giyim modelleri farklı kombinler oluşturmak için değerlendirilebilir.",
  },
  {
    title: "Yeni Sezon Kadın Giyim",
    text: "E-ticaret mağazasının ürünlerini güncel tutmak için yeni sezon ve yeni gelen modeller takip edilebilir.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#202326]">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-black tracking-[.16em]">
            ROTA TEDARİK
          </Link>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-3 text-xs font-bold text-white"
          >
            MODEL GÖNDER →
          </a>
        </div>
      </header>

      <article>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            E-TİCARET • TOPTAN • KADIN GİYİM
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.96] tracking-[-.045em] md:text-7xl">
            E-Ticaret İçin Toptan
            <span className="block">Kadın Giyim Modelleri</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            E-ticaret mağazanız için kadın takım, elbise, ceket, triko,
            bluz ve yeni sezon toptan kadın giyim modellerini araştırın.
            Beğendiğiniz ürünün görselini göndererek Merter'deki tedarik
            seçenekleri için talep oluşturabilirsiniz.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
            >
              ARADIĞIN MODELİ GÖNDER →
            </a>

            <a
              href="#modeller"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-bold"
            >
              MODELLERİ İNCELE
            </a>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["E-TİCARET", "Kadın Giyim"],
              ["TOPTAN", "Ürün Modelleri"],
              ["YENİ SEZON", "Ürün Tedariği"],
              ["MERTER", "Tedarik"],
            ].map(([title, text]) => (
              <div key={title} className="border-r border-black/10 p-7">
                <strong className="block text-lg">{title}</strong>
                <span className="mt-1 block text-sm text-black/45">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="modeller" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            ÜRÜN GRUPLARI
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            E-Ticaret İçin Toptan Kadın Giyim Modelleri
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Online mağazanızın müşteri kitlesine göre farklı kadın giyim
            kategorilerinden ürün seçerek daha bütünlüklü bir koleksiyon
            oluşturabilirsiniz.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modeller.map((model, index) => (
              <div
                key={model.title}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <span className="text-xs font-black text-black/25">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-black">{model.title}</h3>
                <p className="mt-4 leading-7 text-black/55">{model.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#202326] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              E-TİCARET KOLEKSİYONU
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
              Toptan Kadın Giyim Modeli Seçerken
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                [
                  "Hedef Müşteri",
                  "Mağazanızın hedef müşteri profiline uygun kadın giyim modellerini belirleyin.",
                ],
                [
                  "Sezon",
                  "Ürün seçimini mevsim ve dönemsel talebe göre planlayın.",
                ],
                [
                  "Koleksiyon",
                  "Birbirini tamamlayan ürünlerle mağazanızda belirgin bir koleksiyon oluşturun.",
                ],
                [
                  "Stok",
                  "Model, beden ve adet durumunu ürün siparişinden önce kontrol edin.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 p-7"
                >
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-white/55">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-4xl font-black">
            E-Ticaret İçin Toptan Kadın Giyim Nereden Alınır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            E-ticaret yapan işletmeler kadın giyim ürünlerini üretici,
            toptancı ve tekstil ticaretinin yoğun olduğu bölgelerdeki
            tedarikçilerden temin edebilir. İstanbul Merter, kadın giyim
            ticaretinin yoğun olduğu bölgelerden biridir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Merter'e gelmeden de aradığınız kadın giyim modelinin görselini
            göndererek ürün ve tedarik seçeneklerinin araştırılması için
            talep oluşturabilirsiniz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticarette Hangi Kadın Giyim Modelleri Satılır?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Satılacak modeller mağazanın müşteri profiline göre değişir.
            Kadın takım, elbise, ceket, triko, bluz ve sezonluk ürünler
            farklı koleksiyonlarda değerlendirilebilir. Ürün seçiminin
            mağazanın tarzıyla uyumlu olması önemlidir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Yeni Kadın Giyim Modelleri Nasıl Bulunur?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            E-ticaret mağazanız için internette veya sosyal medyada
            beğendiğiniz bir kadın giyim modelinin görselini bize
            gönderebilirsiniz. Aynı veya benzer ürünler için Merter'deki
            tedarik seçeneklerini araştırabiliriz.
          </p>

          <div className="mt-14 rounded-3xl bg-[#ebe7dd] p-8 md:p-10">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Satmak istediğiniz modeli bize gönderin
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-black/60">
              E-ticaret mağazanızda satmak istediğiniz kadın giyim ürününün
              fotoğrafını WhatsApp üzerinden gönderin. Merter'deki tedarik
              seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
            >
              ÜRÜN FOTOĞRAFI GÖNDER →
            </a>
          </div>

          <div className="mt-14 border-t border-black/10 pt-10">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              E-TİCARET KADIN GİYİM REHBERLERİ
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-modelleri"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Modelleri →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-giyim"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Toptan Kadın Giyim →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-tedarikcisi"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Tedarikçisi →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim"
                className="font-bold"
              >
                E-Ticaret İçin Kadın Giyim →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#202326] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              E-TİCARET ÜRÜN TEDARİĞİ
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Aradığınız kadın giyim modelini bulun.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Ürün görselini gönderin, Merter'deki tedarik seçeneklerini
              araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-black"
            >
              WHATSAPP'TAN GÖNDER →
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}

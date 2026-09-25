import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Toptan Kadın Giyim | Rota Tedarik",
  description:
    "E-ticaret için toptan kadın giyim ürünleri arayan online butik ve mağazalara ürün tedarik desteği. Kadın takım, elbise, ceket, triko ve yeni sezon ürünleri.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-toptan-kadin-giyim",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20i%C3%A7in%20toptan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCnleri%20ar%C4%B1yorum.";

const urunler = [
  ["Kadın Takım", "Online butik koleksiyonları için ikili ve farklı kadın takım modelleri."],
  ["Kadın Elbise", "Günlük, sezonluk ve farklı müşteri gruplarına yönelik elbise seçenekleri."],
  ["Kadın Ceket", "Koleksiyonları tamamlayabilecek kadın ceket ve dış giyim modelleri."],
  ["Triko", "Sonbahar ve kış koleksiyonları için kazak, hırka ve farklı triko ürünleri."],
  ["Üst Giyim", "Bluz, gömlek ve farklı üst giyim ürün grupları."],
  ["Yeni Sezon", "E-ticaret mağazasının koleksiyonunu güncel tutmaya yönelik yeni modeller."],
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
            ÜRÜN İSTE →
          </a>
        </div>
      </header>

      <article>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-5xl">
            <p className="text-xs font-black tracking-[.24em] text-black/40">
              E-TİCARET • TOPTAN • KADIN GİYİM
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[.96] tracking-[-.045em] md:text-7xl">
              E-Ticaret İçin
              <span className="block">Toptan Kadın Giyim</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
              Online butik ve kadın giyim e-ticaret mağazaları için toptan
              ürün seçimi ve tedarik rehberi. Aradığınız kadın giyim modelini
              bize göndererek Merter'deki tedarik seçeneklerini
              araştırabilirsiniz.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
              >
                ÜRÜN FOTOĞRAFI GÖNDER →
              </a>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim"
                className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-bold"
              >
                E-TİCARET KADIN GİYİM
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["TOPTAN", "Kadın Giyim"],
              ["E-TİCARET", "Ürün Tedariği"],
              ["ONLINE BUTİK", "Model Seçimi"],
              ["MERTER", "Tedarik"],
            ].map(([a, b]) => (
              <div key={a} className="border-r border-black/10 p-7">
                <strong className="block text-lg">{a}</strong>
                <span className="text-sm text-black/45">{b}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            ÜRÜN GRUPLARI
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            E-Ticaret İçin Toptan Kadın Giyim Ürünleri
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            E-ticaret mağazasında oluşturulacak koleksiyona göre farklı kadın
            giyim kategorileri birlikte değerlendirilebilir.
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

        <section className="bg-[#202326] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              ONLINE SATIŞ
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Toptan Kadın Giyim Alırken Nelere Bakılmalı?
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                ["Ürün Modeli", "Mağazanızın müşteri profiline uygun ürün gruplarını değerlendirin."],
                ["Beden Dağılımı", "Ürünlerin beden seçeneklerini sipariş öncesinde kontrol edin."],
                ["Stok Durumu", "Satış devamlılığı açısından ürün ve stok durumunu değerlendirin."],
                ["Sezon", "Koleksiyonu mevsime ve dönemsel talebe göre planlayın."],
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
            Online Butik İçin Toptan Kadın Giyim
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Online butik için toptan kadın giyim ürünleri seçerken mağazanın
            belirli bir stile sahip olması ürün seçimini kolaylaştırabilir.
            Takım, elbise, ceket, triko ve üst giyim gibi kategorilerden
            birbirini tamamlayan bir koleksiyon oluşturulabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret İçin Toptan Ürün Nereden Alınır?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Kadın giyim ürünleri üretici ve toptancıların yoğun olduğu tekstil
            bölgelerinden tedarik edilebilir. İstanbul Merter, kadın giyim
            ticaretinin yoğun olduğu bölgelerden biridir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            İstanbul dışında e-ticaret yapan işletmeler aradıkları ürünün
            görselini göndererek Merter'deki ürün seçenekleri için tedarik
            talebi oluşturabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret İçin Kadın Giyim Stoku Nasıl Oluşturulur?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            İlk ürün alımında çok sayıda birbirinden bağımsız model yerine
            hedef müşteriye uygun bir koleksiyon oluşturulabilir. Satış
            verileri oluştukça talep gören ürün grupları ve modeller
            genişletilebilir.
          </p>

          <div className="mt-14 rounded-3xl bg-[#ebe7dd] p-8 md:p-10">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              TOPTAN KADIN GİYİM TEDARİĞİ
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Satmak istediğiniz kadın giyim modelini gönderin
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-black/60">
              E-ticaret mağazanız için beğendiğiniz ürünün fotoğrafını
              WhatsApp üzerinden gönderin. Merter'deki ürün ve tedarik
              seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
            >
              WHATSAPP'TAN ÜRÜN GÖNDER →
            </a>
          </div>

          <div className="mt-14 border-t border-black/10 pt-10">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              İLGİLİ E-TİCARET REHBERLERİ
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/blog/e-ticaret-icin-kadin-giyim"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-tedarikcisi"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Tedarikçisi →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-modelleri"
                className="font-bold"
              >
                E-Ticaret İçin Kadın Giyim Modelleri →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#202326] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              E-ticaret için ürün mü arıyorsunuz?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Aradığınız kadın giyim modelini gönderin, ürün tedarik
              seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-black"
            >
              ÜRÜN FOTOĞRAFI GÖNDER →
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}

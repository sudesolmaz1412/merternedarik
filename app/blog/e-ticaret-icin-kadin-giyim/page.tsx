import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Kadın Giyim | Ürün ve Tedarik Rehberi",
  description:
    "E-ticaret için kadın giyim ürünleri, model seçimi ve ürün tedariği. Online butik açmak isteyenler için kadın giyim, toptan ürün ve tedarik rehberi.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-kadin-giyim",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20i%C3%A7in%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCnleri%20tedarik%20etmek%20istiyorum.";

const categories = [
  {
    title: "Kadın Takım",
    text: "Ceket-pantolon ve ikili takım seçenekleriyle online mağazanız için kombin odaklı bir kategori oluşturabilirsiniz.",
  },
  {
    title: "Elbise",
    text: "Günlük, sezonluk ve şık kadın elbise modelleri farklı müşteri gruplarına yönelik koleksiyonlarda değerlendirilebilir.",
  },
  {
    title: "Ceket",
    text: "Kadın ceket modelleri özellikle geçiş sezonlarında koleksiyonu tamamlayan ürün gruplarından biridir.",
  },
  {
    title: "Triko",
    text: "Kazaktan hırkaya farklı triko ürünleri sonbahar ve kış döneminde koleksiyona eklenebilir.",
  },
  {
    title: "Bluz & Üst Giyim",
    text: "Farklı model ve fiyat seçenekleriyle ürün çeşitliliği oluşturmak için kullanılabilecek geniş bir kategoridir.",
  },
  {
    title: "Yeni Sezon",
    text: "Yeni sezon modelleri mağazanızın koleksiyonunu güncel tutmak için düzenli olarak değerlendirilebilir.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1d2327]">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-black tracking-[.16em]">
            ROTA TEDARİK
          </Link>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1d2327] px-5 py-3 text-xs font-bold text-white"
          >
            ÜRÜN TEDARİĞİ →
          </a>
        </div>
      </header>

      <article>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-5xl">
            <p className="text-xs font-black tracking-[.24em] text-black/40">
              E-TİCARET • KADIN GİYİM • ONLINE BUTİK
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.96] tracking-[-.045em] md:text-7xl">
              E-Ticaret İçin
              <span className="block">Kadın Giyim</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
              E-ticaret için kadın giyim satışı yapmak isteyen butik, mağaza ve
              girişimciler için ürün seçimi ve tedarik rehberi. Hangi ürün
              gruplarını değerlendirebileceğinizi, koleksiyonunuzu nasıl
              planlayabileceğinizi ve ürün tedariğini nasıl yapabileceğinizi
              inceleyin.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#urunler"
                className="rounded-full bg-[#1d2327] px-7 py-4 text-sm font-bold text-white"
              >
                KADIN GİYİM ÜRÜNLERİ →
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-bold"
              >
                ÜRÜN FOTOĞRAFI GÖNDER
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["E-TİCARET", "Kadın Giyim"],
              ["ONLINE BUTİK", "Ürün Seçimi"],
              ["TOPTAN", "Ürün Tedariği"],
              ["MERTER", "Tedarik Desteği"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-r border-black/10 p-7"
              >
                <strong className="block text-lg md:text-xl">{title}</strong>
                <span className="mt-1 block text-sm text-black/45">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="urunler" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            E-TİCARET ÜRÜNLERİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
            E-Ticaret İçin Hangi Kadın Giyim Ürünleri Seçilebilir?
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Kadın giyim e-ticaretinde ürün seçimi yaparken mağazanın hedef
            kitlesi, sezonu, fiyat seviyesi ve genel tarzı birlikte
            değerlendirilmelidir.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <span className="text-xs font-black text-black/25">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-black">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-black/55">
                  {category.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1d2327] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              ONLINE MAĞAZA
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
              E-Ticaret İçin Kadın Giyim Ürünü Seçerken
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                [
                  "Hedef Kitleyi Belirleyin",
                  "Mağazanızın hitap edeceği müşteri profilini belirleyerek ürün seçimini bu stile göre şekillendirebilirsiniz.",
                ],
                [
                  "Koleksiyon Bütünlüğü",
                  "Birbirleriyle kombinlenebilecek ürünler seçmek mağazanızın daha bütünlüklü görünmesini sağlayabilir.",
                ],
                [
                  "Sezonu Takip Edin",
                  "Mevsime ve dönemsel talebe uygun ürün gruplarını koleksiyon planlamasına dahil edin.",
                ],
                [
                  "Stok Planlaması",
                  "İlk aşamada ürün ve beden dağılımını kontrollü planlayıp satış verilerine göre koleksiyonu geliştirebilirsiniz.",
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
          <h2 className="text-4xl font-black tracking-tight">
            E-Ticaret İçin Kadın Giyim Tedarikçisi Nasıl Bulunur?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Kadın giyim e-ticaretinde ürün tedariği; üreticiler, toptancılar ve
            tekstil ticaretinin yoğun olduğu bölgelerdeki tedarikçiler
            üzerinden yapılabilir. Ürün seçiminde yalnızca fiyat değil; model,
            beden dağılımı, stok durumu ve gönderim süreci de
            değerlendirilmelidir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            İstanbul Merter, kadın giyim ve tekstil ürünlerinin yoğun olarak
            bulunduğu bölgelerden biridir. İstanbul dışında bulunan online
            butik ve mağazalar da aradıkları ürünlerin fotoğraflarını
            ileterek ürün tedarik talebi oluşturabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret İçin Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Toptan kadın giyim alımında koleksiyonun tamamını tek ürüne
            bağlamak yerine farklı ürün gruplarıyla ürün karması
            oluşturulabilir. Takım, ceket, elbise, triko ve üst giyim gibi
            birbirini tamamlayan kategoriler birlikte değerlendirilebilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Yeni E-Ticaret Mağazaları İçin Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Kadın giyim satışına yeni başlayan bir e-ticaret mağazasında ilk
            koleksiyonun hedef müşteri profiline göre oluşturulması önemlidir.
            Satış verileri oluşmaya başladıkça ilgi gören ürün grupları
            genişletilebilir ve yeni modeller koleksiyona eklenebilir.
          </p>

          <div className="mt-14 rounded-3xl bg-[#ebe7dd] p-8 md:p-10">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ÜRÜN TEDARİĞİ
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              E-ticaret mağazanız için aradığınız modeli gönderin
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-black/60">
              Beğendiğiniz kadın giyim modelinin fotoğrafını WhatsApp
              üzerinden iletin. Merter'deki ürün ve tedarik seçeneklerini
              araştırarak size yardımcı olalım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-[#1d2327] px-7 py-4 text-sm font-bold text-white"
            >
              WHATSAPP'TAN MODEL GÖNDER →
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
                href="/blog/merter-toptan-kadin-giyim"
                className="border-b border-black/10 pb-4 font-bold"
              >
                Merter Toptan Kadın Giyim →
              </Link>

              <Link
                href="/blog/merter-toptan"
                className="font-bold"
              >
                Merter Toptan →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#1d2327] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              E-TİCARET İÇİN KADIN GİYİM
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Ürünü siz seçin, tedariğini birlikte çözelim.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Online mağazanız için aradığınız kadın giyim ürününün fotoğrafını
              WhatsApp üzerinden gönderebilirsiniz.
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

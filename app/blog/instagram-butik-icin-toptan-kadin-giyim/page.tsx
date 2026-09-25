import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instagram Butik İçin Toptan Kadın Giyim | Rota Tedarik",
  description:
    "Instagram butik için toptan kadın giyim ürünleri ve tedarik seçenekleri. Elbise, takım, ceket, triko ve yeni sezon kadın giyim modelleri.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/instagram-butik-icin-toptan-kadin-giyim",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Instagram%20buti%C4%9Fim%20i%C3%A7in%20toptan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCnleri%20ar%C4%B1yorum.";

const products = [
  ["Kadın Takım", "Instagram butik koleksiyonları için ikili takım ve ceket-pantolon modelleri."],
  ["Elbise", "Günlük, şık ve sezonluk kadın elbise seçenekleri."],
  ["Ceket", "Kombin içeriklerinde kullanılabilecek farklı kadın ceket modelleri."],
  ["Triko", "Sonbahar ve kış koleksiyonları için kazak ve hırka seçenekleri."],
  ["Bluz & Üst Giyim", "Farklı kombinler oluşturmak için kadın üst giyim ürünleri."],
  ["Yeni Sezon", "Butik koleksiyonunu güncel tutmaya yönelik yeni kadın giyim modelleri."],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#202326]">
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
            ÜRÜN BUL →
          </a>
        </div>
      </header>

      <article>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            INSTAGRAM BUTİK • TOPTAN • KADIN GİYİM
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.96] tracking-[-.045em] md:text-7xl">
            Instagram Butik İçin
            <span className="block">Toptan Kadın Giyim</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            Instagram üzerinden kadın giyim satışı yapan butiklerin ürün
            seçimi, koleksiyon oluşturma ve tedarik süreci için hazırladığımız
            rehber. Aradığınız kadın giyim modelini bize göndererek Merter'deki
            tedarik seçeneklerini araştırabilirsiniz.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
            >
              MODELİ WHATSAPP'TAN GÖNDER →
            </a>

            <Link
              href="/blog/online-butik-icin-kadin-giyim-tedarikcisi"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-bold"
            >
              BUTİK TEDARİK REHBERİ
            </Link>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["INSTAGRAM", "Butik Satışı"],
              ["KADIN GİYİM", "Ürün Seçimi"],
              ["TOPTAN", "Ürün Tedariği"],
              ["MERTER", "Model Araştırma"],
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

        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            BUTİK KOLEKSİYONU
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            Instagram Butik İçin Hangi Kadın Giyim Ürünleri Alınabilir?
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Instagram butiğiniz için ürün seçerken hedef müşteri kitlenizi ve
            sayfanızın genel tarzını dikkate alabilirsiniz. Birbiriyle
            kombinlenebilecek ürün grupları koleksiyon oluşturmayı
            kolaylaştırabilir.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map(([title, text], index) => (
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
              ÜRÜN SEÇİMİ
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
              Instagram'da Kadın Giyim Satarken Ürün Seçimi
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                [
                  "Hedef Kitle",
                  "Ürünleri takipçi ve müşteri profilinize uygun bir tarz etrafında seçebilirsiniz.",
                ],
                [
                  "Kombinlenebilir Ürünler",
                  "Bir ürünün başka ürünlerle birlikte sunulabilmesi koleksiyon bütünlüğünü artırabilir.",
                ],
                [
                  "Yeni Modeller",
                  "Sayfanızı güncel tutmak için yeni sezon ve yeni gelen ürünleri takip edebilirsiniz.",
                ],
                [
                  "Stok Planlaması",
                  "İlk alımlarda adet ve beden dağılımını satış performansına göre kontrollü planlayabilirsiniz.",
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
            Instagram Butik İçin Ürün Nereden Alınır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Instagram üzerinden kadın giyim satışı yapan butik sahipleri
            ürünlerini üreticilerden, toptancılardan ve tekstil ticaretinin
            yoğun olduğu bölgelerdeki tedarikçilerden temin edebilir.
            İstanbul Merter bu bölgelerden biridir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Merter'e gelmeden de aradığınız ürünün fotoğrafını veya benzer
            model örneğini göndererek ürün seçenekleri için tedarik talebi
            oluşturabilirsiniz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Instagram Butik İçin Toptan Ürün Tedariği
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Toptan kadın giyim alırken mağazanızın tarzına uygun ürünleri
            birlikte değerlendirmek önemlidir. Elbise, takım, ceket, triko ve
            üst giyim gibi kategorilerden koleksiyon oluşturabilirsiniz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            İnternette Gördüğünüz Modeli Nasıl Bulabilirsiniz?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Instagram veya başka bir platformda beğendiğiniz kadın giyim
            modelinin ekran görüntüsünü bize gönderebilirsiniz. Aynı veya
            benzer ürünler için Merter'deki tedarik seçenekleri
            araştırılabilir.
          </p>

          <div className="mt-14 rounded-3xl bg-[#ebe7dd] p-8 md:p-10">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              MODELİ GÖNDER
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Instagram'da bir ürün gördünüz mü?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-black/60">
              Ekran görüntüsünü WhatsApp'tan gönderin. Butiğiniz için uygun
              kadın giyim tedarik seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
            >
              ÜRÜN GÖRSELİNİ GÖNDER →
            </a>
          </div>

          <div className="mt-14 border-t border-black/10 pt-10">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              ONLINE SATIŞ REHBERLERİ
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/blog/online-butik-icin-kadin-giyim-tedarikcisi"
                className="border-b border-black/10 pb-4 font-bold"
              >
                Online Butik İçin Kadın Giyim Tedarikçisi →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-giyim"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Toptan Kadın Giyim →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-tedarikcisi"
                className="font-bold"
              >
                E-Ticaret İçin Kadın Giyim Tedarikçisi →
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
              Butiğiniz için ürün arayın.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Beğendiğiniz kadın giyim modelinin görselini gönderin, tedarik
              seçeneklerini araştıralım.
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

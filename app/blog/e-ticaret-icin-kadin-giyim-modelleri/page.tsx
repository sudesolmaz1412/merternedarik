import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Kadın Giyim Modelleri | Online Butik Ürünleri",
  description:
    "E-ticaret için kadın giyim modelleri nasıl seçilir? Online butik ve mağazalar için kadın takım, elbise, ceket, triko ve yeni sezon ürün tedarik rehberi.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-kadin-giyim-modelleri",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20i%C3%A7in%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCnleri%20tedarik%20etmek%20istiyorum.";

const urunler = [
  {
    title: "Kadın Takım Modelleri",
    text: "Ceket-pantolon ve ikili takım modelleri online butik koleksiyonlarında değerlendirilebilecek ürün gruplarındandır.",
  },
  {
    title: "Elbise Modelleri",
    text: "Günlük, şık ve sezonluk elbiseler farklı müşteri profillerine yönelik koleksiyon oluşturmayı sağlar.",
  },
  {
    title: "Ceket Modelleri",
    text: "Kadın ceket modelleri özellikle geçiş sezonlarında koleksiyonu tamamlayan ürün gruplarından biridir.",
  },
  {
    title: "Triko Modelleri",
    text: "Kazaktan hırkaya farklı triko modelleri sonbahar ve kış koleksiyonlarında değerlendirilebilir.",
  },
  {
    title: "Bluz ve Üst Giyim",
    text: "Farklı fiyat seviyelerinde ürün çeşitliliği oluşturmak isteyen online mağazalar için geniş bir kategoridir.",
  },
  {
    title: "Yeni Sezon Ürünleri",
    text: "Koleksiyonun güncel tutulması için sezona uygun yeni modeller düzenli olarak değerlendirilebilir.",
  },
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
            ÜRÜN TALEBİ →
          </a>
        </div>
      </header>

      <article>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-black tracking-[.24em] text-black/40">
              E-TİCARET • ONLINE BUTİK • KADIN GİYİM
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.98] tracking-[-.04em] md:text-7xl">
              E-Ticaret İçin
              <span className="block">Kadın Giyim Modelleri</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
              Online butik veya kadın giyim e-ticaret mağazası kurarken doğru
              ürün grubunu seçmek koleksiyonun temelini oluşturur. Takım,
              elbise, ceket, triko ve yeni sezon ürünleri arasından hedef
              kitlenize uygun bir ürün karması oluşturabilirsiniz.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#202326] px-7 py-4 text-sm font-bold text-white"
              >
                ÜRÜN TEDARİĞİ İÇİN YAZ →
              </a>

              <a
                href="#modeller"
                className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-bold"
              >
                MODELLERİ İNCELE
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["ONLINE BUTİK", "Ürün Seçimi"],
              ["KADIN GİYİM", "Model Çeşitliliği"],
              ["MERTER", "Ürün Tedariği"],
              ["TÜRKİYE", "Gönderim"],
            ].map(([title, text]) => (
              <div key={title} className="border-r border-black/10 p-6 md:p-8">
                <strong className="block text-lg md:text-xl">{title}</strong>
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

          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Online Butik İçin Kadın Giyim Modelleri
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            E-ticaret için kadın giyim modelleri seçerken tek bir kategoriye
            bağlı kalmak yerine hedef müşteriye uygun tamamlayıcı ürün
            grupları oluşturulabilir.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {urunler.map((urun, index) => (
              <div
                key={urun.title}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <span className="text-xs font-black text-black/25">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-black">{urun.title}</h3>

                <p className="mt-4 leading-7 text-black/55">{urun.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#202326] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-bold tracking-[.22em] text-white/40">
              E-TİCARET ÜRÜN SEÇİMİ
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">
              Kadın Giyim Ürünü Seçerken Nelere Bakılmalı?
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                [
                  "Hedef Müşteri",
                  "Ürün seçimini mağazanızın hitap ettiği yaş, stil ve fiyat segmentine göre planlayın.",
                ],
                [
                  "Sezon",
                  "Yaz ve kış ürünlerinin yanında geçiş dönemlerinde satılabilecek ürünleri de değerlendirin.",
                ],
                [
                  "Ürün Çeşitliliği",
                  "Birbirleriyle kombinlenebilecek ürünler koleksiyon bütünlüğü oluşturabilir.",
                ],
                [
                  "Stok Planlaması",
                  "Yeni modelleri değerlendirirken adet ve beden dağılımını satış yapınıza göre planlayın.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 p-6"
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
            E-Ticaret İçin Kadın Giyim Ürünleri Nereden Alınır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Online kadın giyim satışı yapan işletmeler ürün tedariğinde
            üretici, toptancı ve tekstil ticaretinin yoğun olduğu bölgelerdeki
            tedarik seçeneklerini değerlendirebilir. İstanbul Merter de kadın
            giyim ve tekstil ürünlerinin yoğun olarak bulunduğu bölgelerden
            biridir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            İstanbul dışında faaliyet gösteriyorsanız aradığınız ürünün
            fotoğrafını veya benzer model örneğini bize iletebilirsiniz.
            Talebinize göre Merter'deki ürün seçeneklerinin araştırılması ve
            tedarik sürecinin organize edilmesi mümkündür.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Online Butik İçin Ürün Seçimi
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Online butik için ürün seçerken yalnızca popüler görünen modellere
            odaklanmak yerine mağazanın genel tarzını düşünmek gerekir. Birbiri
            ile kombinlenebilen ürün grupları, farklı fiyat seviyeleri ve
            sezonluk modeller birlikte değerlendirilebilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Yeni Başlayan E-Ticaret Mağazaları İçin
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Yeni bir kadın giyim mağazası açıyorsanız ilk koleksiyonda çok
            sayıda birbirinden bağımsız ürün yerine belirli bir müşteri
            profiline yönelik ürün grupları oluşturmak stok yönetimini
            kolaylaştırabilir. Satış verileri oluştukça ilgi gören kategorilere
            göre ürün çeşitliliği geliştirilebilir.
          </p>

          <div className="mt-14 rounded-3xl bg-[#ece8df] p-8 md:p-10">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              MERTER'DEN TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Beğendiğiniz kadın giyim modelini bize gönderin
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-black/60">
              E-ticaret mağazanız için aradığınız ürünün fotoğrafını gönderin.
              Merter'deki tedarik seçeneklerini araştırarak süreci
              kolaylaştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
            >
              WHATSAPP'TAN MODEL GÖNDER →
            </a>
          </div>

          <div className="mt-14 border-t border-black/10 pt-9">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              İLGİLİ REHBERLER
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/blog/merter-toptan"
                className="border-b border-black/10 pb-4 font-bold"
              >
                Merter Toptan →
              </Link>

              <Link
                href="/blog/merter-toptan-kadin-giyim"
                className="border-b border-black/10 pb-4 font-bold"
              >
                Merter Toptan Kadın Giyim →
              </Link>

              <Link
                href="/blog/merter-toptan-giyim-tedarikcisi"
                className="font-bold"
              >
                Merter Toptan Giyim Tedarikçisi →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#202326] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-bold tracking-[.22em] text-white/40">
              ONLINE BUTİK TEDARİK
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Aradığınız modeli gönderin
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Kadın giyim e-ticaret mağazanız için aradığınız ürünün görselini
              WhatsApp üzerinden iletebilirsiniz.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-black"
            >
              ÜRÜNÜ WHATSAPP'TAN GÖNDER →
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}

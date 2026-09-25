import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret Sitesinde Satılacak Kadın Giyim Ürünleri | Rota Tedarik",
  description:
    "E-ticaret sitesinde satılacak kadın giyim ürünleri nelerdir? Elbise, takım, ceket, triko, bluz ve yeni sezon ürünleri için toptan tedarik rehberi.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-sitesinde-satilacak-kadin-giyim-urunleri",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20sitemde%20satmak%20i%C3%A7in%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCnleri%20ar%C4%B1yorum.";

const products = [
  {
    no: "01",
    title: "Kadın Elbise",
    text: "Günlük, şık ve sezonluk elbise modelleri e-ticaret kadın giyim koleksiyonlarında değerlendirilebilir.",
  },
  {
    no: "02",
    title: "Kadın Takım",
    text: "İkili takım, ceket-pantolon ve farklı kombinlerden oluşan kadın takım modelleri online mağaza koleksiyonlarına eklenebilir.",
  },
  {
    no: "03",
    title: "Bluz ve Gömlek",
    text: "Farklı alt giyim ürünleriyle kombinlenebilen bluz ve gömlek modelleri geniş ürün çeşitliliği oluşturabilir.",
  },
  {
    no: "04",
    title: "Kadın Ceket",
    text: "Ceket modelleri sezon geçişlerinde ve kombin odaklı kadın giyim koleksiyonlarında değerlendirilebilir.",
  },
  {
    no: "05",
    title: "Triko",
    text: "Kazak, hırka ve diğer triko modelleri özellikle sonbahar ve kış koleksiyonlarında kullanılabilir.",
  },
  {
    no: "06",
    title: "Pantolon ve Etek",
    text: "Kadın pantolon ve etek modelleri üst giyim ürünlerini tamamlayan temel kategoriler arasında yer alabilir.",
  },
  {
    no: "07",
    title: "Dış Giyim",
    text: "Mont, kaban ve farklı dış giyim modelleri mevsimsel koleksiyonların oluşturulmasında değerlendirilebilir.",
  },
  {
    no: "08",
    title: "Yeni Sezon Ürünleri",
    text: "Yeni gelen kadın giyim modelleri mağazanın ürün koleksiyonunun düzenli olarak güncellenmesini sağlar.",
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
            ÜRÜN ARA →
          </a>
        </div>
      </header>

      <article>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            E-TİCARET • KADIN GİYİM • ÜRÜN SEÇİMİ
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.96] tracking-[-.045em] md:text-7xl">
            E-Ticaret Sitesinde Satılacak
            <span className="block">Kadın Giyim Ürünleri</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            Kadın giyim e-ticaret sitesi kurarken hangi ürünleri satacağınıza
            karar vermek koleksiyon oluşturmanın temel adımlarından biridir.
            Elbise, takım, ceket, triko, bluz ve farklı kadın giyim ürünlerini
            hedef müşteri kitlenize göre değerlendirebilirsiniz.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
            >
              SATMAK İSTEDİĞİN ÜRÜNÜ GÖNDER →
            </a>

            <a
              href="#urunler"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-bold"
            >
              ÜRÜNLERİ İNCELE
            </a>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["E-TİCARET", "Kadın Giyim"],
              ["TOPTAN", "Ürün Tedariği"],
              ["MERTER", "Ürün Araştırma"],
              ["YENİ SEZON", "Yeni Modeller"],
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

        <section id="urunler" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            ÜRÜN FİKİRLERİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            E-Ticaret Sitesinde Hangi Kadın Giyim Ürünleri Satılabilir?
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Tek bir ürün grubuna bağlı kalmak yerine mağazanızın hedef
            kitlesine uygun, birbirini tamamlayan kadın giyim kategorilerinden
            bir koleksiyon oluşturabilirsiniz.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.title}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <span className="text-xs font-black text-black/25">
                  {product.no}
                </span>

                <h3 className="mt-5 text-2xl font-black">{product.title}</h3>

                <p className="mt-4 leading-7 text-black/55">
                  {product.text}
                </p>
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
              E-Ticaret İçin Kadın Giyim Ürünü Seçerken
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                [
                  "Hedef Kitle",
                  "Ürün seçimini mağazanızın ulaşmak istediği müşteri profiline göre planlayın.",
                ],
                [
                  "Koleksiyon Uyumu",
                  "Birbiriyle kombinlenebilecek ürün grupları daha bütünlüklü bir mağaza oluşturabilir.",
                ],
                [
                  "Sezon",
                  "Kadın giyim ürünlerini mevsim ve dönemsel ihtiyaçlara göre güncelleyin.",
                ],
                [
                  "Stok Planlaması",
                  "Ürün, beden, renk ve adet dağılımını satış performansına göre takip edin.",
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
            E-Ticarette Satılacak Kadın Giyim Ürünleri Nasıl Bulunur?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Satmak istediğiniz ürün gruplarını belirledikten sonra üreticiler,
            toptancılar ve tekstil ticaretinin yoğun olduğu bölgelerdeki
            tedarik seçeneklerini araştırabilirsiniz. İstanbul Merter kadın
            giyim ticaretinin yoğun olduğu bölgelerden biridir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Aradığınız modelin fotoğrafı varsa görsel üzerinden de ürün
            araştırması yapılabilir. Böylece mağazanız için düşündüğünüz
            modele yakın ürün ve tedarik seçeneklerine odaklanabilirsiniz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret Sitesi İçin Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            E-ticaret sitesi için toptan kadın giyim alırken yalnızca ürünün
            görünümünü değil; beden seçeneklerini, renk alternatiflerini,
            stok durumunu, minimum sipariş şartlarını ve gönderim sürecini de
            değerlendirmek gerekir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Yeni Başlayan E-Ticaret Sitesinde Kaç Ürün Olmalı?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Her işletme için tek bir ürün sayısı doğru değildir. Başlangıçta
            hedef müşteri kitlesine uygun daha kontrollü bir koleksiyon
            oluşturulabilir. Satış verileri oluştukça talep gören ürün
            grupları ve modeller artırılabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            İnternette Gördüğünüz Kadın Giyim Modelini Bulun
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            E-ticaret mağazanızda satmak istediğiniz bir kadın giyim modelini
            internette gördüyseniz ürün görselini bize gönderebilirsiniz.
            Aynı veya benzer ürünler için Merter'deki tedarik seçeneklerini
            araştırabiliriz.
          </p>

          <div className="mt-14 rounded-3xl bg-[#ebe7dd] p-8 md:p-10">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              E-ticaret sitenizde ne satmak istiyorsunuz?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-black/60">
              Beğendiğiniz kadın giyim ürününün fotoğrafını WhatsApp'tan
              gönderin. Merter'deki uygun ürün ve tedarik seçeneklerini
              araştıralım.
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
                href="/blog/e-ticaret-icin-toptan-kadin-giyim-modelleri"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Toptan Kadın Giyim Modelleri →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri-nereden-alinir"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Ürünleri Nereden Alınır? →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-giyim-tedarikcisi"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Toptan Giyim Tedarikçisi →
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
              E-TİCARET ÜRÜN TEDARİĞİ
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Satacağınız ürünü bulun.
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

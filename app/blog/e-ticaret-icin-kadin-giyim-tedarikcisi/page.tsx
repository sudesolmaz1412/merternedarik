import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Kadın Giyim Tedarikçisi | Rota Tedarik",
  description:
    "E-ticaret için kadın giyim tedarikçisi arayan online butik ve mağazalara ürün tedarik desteği. Toptan kadın giyim, yeni sezon modeller ve Merter ürün tedariği.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-kadin-giyim-tedarikcisi",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20i%C3%A7in%20kad%C4%B1n%20giyim%20tedarik%C3%A7isi%20ar%C4%B1yorum.";

const products = [
  "Kadın Takım",
  "Elbise",
  "Ceket",
  "Bluz & Üst Giyim",
  "Triko",
  "Yeni Sezon Kadın Giyim",
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
            TEDARİK İÇİN YAZ →
          </a>
        </div>
      </header>

      <article>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            E-TİCARET • KADIN GİYİM • ÜRÜN TEDARİĞİ
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.97] tracking-[-.04em] md:text-7xl">
            E-Ticaret İçin
            <span className="block">Kadın Giyim Tedarikçisi</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            Online butik veya kadın giyim e-ticaret mağazanız için ürün
            arıyorsanız, ihtiyacınız olan modeli bize iletebilirsiniz.
            Merter'deki kadın giyim ürün seçeneklerini araştırarak tedarik
            sürecinin yönetilmesine yardımcı oluyoruz.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#202326] px-7 py-4 text-sm font-bold text-white"
            >
              ÜRÜN FOTOĞRAFINI GÖNDER →
            </a>

            <Link
              href="/blog/e-ticaret-icin-kadin-giyim"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-bold"
            >
              E-TİCARET KADIN GİYİM REHBERİ
            </Link>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["E-TİCARET", "Ürün Tedariği"],
              ["KADIN GİYİM", "Toptan Ürün"],
              ["ONLINE BUTİK", "Model Arama"],
              ["MERTER", "Tedarik Desteği"],
            ].map(([title, text]) => (
              <div key={title} className="border-r border-black/10 p-7">
                <strong className="block text-lg md:text-xl">{title}</strong>
                <span className="mt-1 block text-sm text-black/45">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            E-Ticaret İçin Kadın Giyim Tedarikçisi Nasıl Seçilir?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Kadın giyim e-ticaretinde tedarikçi seçerken yalnızca ürün fiyatını
            değerlendirmek yeterli değildir. Ürün çeşitliliği, model
            bulunabilirliği, beden seçenekleri, stok durumu ve gönderim süreci
            de dikkate alınmalıdır.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Özellikle online butiklerde koleksiyon sık değişebildiği için
            aradığınız yeni modellere ulaşabilmek ve farklı ürün gruplarını
            değerlendirebilmek önemlidir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret İçin Hangi Kadın Giyim Ürünleri Tedarik Edilebilir?
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {products.map((product) => (
              <div
                key={product}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <strong className="text-lg">{product}</strong>
                <p className="mt-2 text-sm leading-6 text-black/50">
                  Online butik ve kadın giyim mağazaları için tedarik talebi
                  oluşturulabilecek ürün gruplarından biridir.
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Online Butik İçin Kadın Giyim Tedarikçisi
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Online butiklerde ürün koleksiyonunun mağazanın hedef kitlesine
            uygun olması gerekir. Aradığınız tarzı veya modeli belirledikten
            sonra ürün görsellerini tedarik talebi için iletebilirsiniz.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Böylece yalnızca hazır bir ürün listesine bağlı kalmak yerine,
            mağazanızın tarzına uygun kadın giyim modelleri için araştırma
            yapılabilir.
          </p>

          <div className="my-14 rounded-3xl bg-[#202326] p-8 text-white md:p-10">
            <p className="text-xs font-black tracking-[.2em] text-white/40">
              NASIL ÇALIŞIR?
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <span className="text-xs text-white/35">01</span>
                <h3 className="mt-2 text-xl font-bold">Modeli Gönderin</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Aradığınız kadın giyim ürününün fotoğrafını iletin.
                </p>
              </div>

              <div>
                <span className="text-xs text-white/35">02</span>
                <h3 className="mt-2 text-xl font-bold">Ürün Araştırılsın</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Talebinize uygun tedarik seçenekleri değerlendirilsin.
                </p>
              </div>

              <div>
                <span className="text-xs text-white/35">03</span>
                <h3 className="mt-2 text-xl font-bold">Sipariş Oluşturun</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Ürün ve sipariş detayları netleştirilerek süreç ilerletilsin.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-black md:text-4xl">
            E-Ticaret İçin Toptan Kadın Giyim Tedariği
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            E-ticaret mağazaları için toptan kadın giyim tedariğinde farklı
            kategorilerin birlikte değerlendirilmesi koleksiyon oluşturmayı
            kolaylaştırabilir. Takım, ceket, elbise, triko ve üst giyim gibi
            birbirini tamamlayan ürün grupları seçilebilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            İstanbul Dışından Kadın Giyim Tedariği
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            İstanbul dışında e-ticaret yapan işletmeler de aradıkları ürünleri
            uzaktan iletebilir. Ürün fotoğrafını veya istediğiniz ürün grubunu
            göndererek Merter'deki tedarik seçenekleri için talep
            oluşturabilirsiniz.
          </p>

          <div className="mt-14 rounded-3xl bg-[#ebe7dd] p-8 md:p-10">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              KADIN GİYİM TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black">
              E-ticarette satmak istediğiniz modeli gönderin
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-black/60">
              Beğendiğiniz kadın giyim ürününün fotoğrafını WhatsApp'tan
              gönderin. Ürün tedarik seçeneklerini araştırarak size dönüş
              yapalım.
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
              E-TİCARET KADIN GİYİM
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/blog/e-ticaret-icin-kadin-giyim"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-modelleri"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Modelleri →
              </Link>

              <Link
                href="/blog/merter-toptan-kadin-giyim"
                className="font-bold"
              >
                Merter Toptan Kadın Giyim →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#202326] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-bold tracking-[.22em] text-white/40">
              E-TİCARET İÇİN KADIN GİYİM TEDARİKÇİSİ
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Aradığınız ürünü bize gönderin.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Online mağazanız için aradığınız kadın giyim modelinin
              fotoğrafını WhatsApp üzerinden iletebilirsiniz.
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

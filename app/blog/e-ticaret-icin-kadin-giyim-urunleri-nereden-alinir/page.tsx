import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Kadın Giyim Ürünleri Nereden Alınır? | Rota Tedarik",
  description:
    "E-ticaret için kadın giyim ürünleri nereden alınır? Merter toptan kadın giyim piyasası, ürün seçimi, tedarikçi bulma ve online mağaza için ürün tedariği rehberi.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-kadin-giyim-urunleri-nereden-alinir",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20ma%C4%9Fazam%20i%C3%A7in%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCnleri%20tedarik%20etmek%20istiyorum.";

const urunler = [
  ["Kadın Elbise", "Günlük, sezonluk ve farklı müşteri gruplarına yönelik elbise modelleri."],
  ["Kadın Takım", "İkili takım, ceket-pantolon ve farklı kombin ürünleri."],
  ["Bluz & Gömlek", "Online kadın giyim koleksiyonlarında kullanılabilecek üst giyim ürünleri."],
  ["Pantolon & Etek", "Koleksiyonu tamamlayan farklı alt giyim seçenekleri."],
  ["Triko", "Kazak, hırka ve sezonluk triko kadın giyim ürünleri."],
  ["Ceket & Dış Giyim", "Sezon geçişleri ve kış koleksiyonları için farklı modeller."],
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
            ÜRÜN TALEBİ →
          </a>
        </div>
      </header>

      <article>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            E-TİCARET • KADIN GİYİM • TEDARİK
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.96] tracking-[-.045em] md:text-7xl">
            E-Ticaret İçin Kadın Giyim
            <span className="block">Ürünleri Nereden Alınır?</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            E-ticaret sitesi, pazaryeri veya online mağazada kadın giyim
            satmak için doğru ürünleri ve tedarik kaynaklarını bulmak
            işin temel adımlarından biridir. İstanbul Merter başta olmak
            üzere farklı toptan kadın giyim tedarik seçeneklerini
            değerlendirebilirsiniz.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
            >
              ARADIĞIN ÜRÜNÜ GÖNDER →
            </a>

            <Link
              href="/blog/e-ticaret-icin-toptan-kadin-giyim-modelleri"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-bold"
            >
              TOPTAN MODELLER
            </Link>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["E-TİCARET", "Kadın Giyim"],
              ["MERTER", "Toptan Tedarik"],
              ["ÜRÜN", "Araştırma"],
              ["TÜRKİYE", "Gönderim"],
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

        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            ÜRÜN TEDARİĞİ
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            E-Ticaret İçin Kadın Giyim Nereden Tedarik Edilir?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Kadın giyim e-ticareti yapan işletmeler ürünlerini doğrudan
            üreticilerden, toptan satış yapan firmalardan veya birden fazla
            tedarikçiye ulaşmayı sağlayan ürün tedarik ağlarından temin
            edebilir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            İstanbul'da Merter, kadın giyim toptan ticaretinin yoğun olduğu
            bölgelerden biridir. Farklı ürün grupları ve koleksiyonlar
            arasında araştırma yapılarak e-ticaret mağazasının müşteri
            kitlesine uygun ürünler belirlenebilir.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Üreticiler", "Belirli ürün gruplarında doğrudan üretim yapan firmalar."],
              ["02", "Toptancılar", "Farklı kadın giyim modellerini toptan satış yöntemiyle sunan işletmeler."],
              ["03", "Tedarik Ağı", "Birden fazla ürün ve tedarik seçeneğini araştırmayı kolaylaştıran yöntem."],
            ].map(([number, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <span className="text-xs font-black text-black/25">
                  {number}
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
              MERTER TEDARİK
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
              Merter'den E-Ticaret İçin Kadın Giyim Almak
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Merter'deki kadın giyim piyasasında farklı ürün kategorileri,
              koleksiyonlar ve tedarik seçenekleri araştırılabilir. Online
              mağazalar için önemli olan yalnızca ürün bulmak değil, hedef
              müşteri kitlesine uygun ürünleri seçebilmektir.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                ["Ürün Çeşitliliği", "Birden fazla kadın giyim kategorisini birlikte araştırabilirsiniz."],
                ["Yeni Modeller", "Sezon ve yeni koleksiyon ürünlerini düzenli olarak takip edebilirsiniz."],
                ["Tedarik Araştırması", "Aradığınız modele göre farklı ürün seçeneklerini değerlendirebilirsiniz."],
                ["Uzaktan Sipariş", "Ürün taleplerinizi ve görsellerinizi uzaktan paylaşarak süreci başlatabilirsiniz."],
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

        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            KADIN GİYİM KATEGORİLERİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            E-Ticaret İçin Hangi Kadın Giyim Ürünleri Alınabilir?
          </h2>

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

        <section className="mx-auto max-w-4xl px-6 pb-20">
          <h2 className="text-4xl font-black">
            E-Ticaret İçin Tedarikçi Seçerken Nelere Bakılır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Tedarikçi seçiminde yalnızca ürün fiyatına odaklanmak yerine
            model çeşitliliği, beden ve renk seçenekleri, minimum sipariş
            şartları, stok devamlılığı, gönderim süresi ve iletişim süreci
            birlikte değerlendirilmelidir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            İstanbul'a Gelmeden Kadın Giyim Ürünü Alınabilir mi?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Ürün araştırma süreci uzaktan da yürütülebilir. Aradığınız ürünün
            görselini, modelini, yaklaşık adedini ve ürün grubunu paylaşarak
            uygun tedarik seçenekleri araştırılabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret Mağazası İçin Ürün Nasıl Seçilir?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Başlangıçta her kategoriden çok sayıda ürün almak yerine hedef
            müşteri kitlesine uygun belirli bir koleksiyon oluşturmak daha
            kontrollü bir ürün planlaması sağlayabilir. Satış verileri
            oluştukça ürün grupları genişletilebilir.
          </p>

          <div className="mt-14 rounded-3xl bg-[#ebe7dd] p-8 md:p-10">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              E-ticaret mağazanız için ürün arayalım.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-black/60">
              Satmak istediğiniz kadın giyim ürününün fotoğrafını veya ürün
              talebinizi WhatsApp üzerinden gönderin. Uygun tedarik
              seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
            >
              ÜRÜNÜ WHATSAPP'TAN GÖNDER →
            </a>
          </div>

          <div className="mt-14 border-t border-black/10 pt-10">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              E-TİCARET TEDARİK REHBERLERİ
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-giyim-modelleri"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Toptan Kadın Giyim Modelleri →
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
                href="/blog/e-ticaret-icin-kadin-giyim-modelleri"
                className="font-bold"
              >
                E-Ticaret İçin Kadın Giyim Modelleri →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

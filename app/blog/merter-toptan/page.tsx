import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Toptan | Merter Toptan Giyim ve Ürün Tedarik Rehberi",
  description:
    "Merter toptan giyim ve ürün tedariği. Merter'den toptan kadın giyim, yeni sezon ürün, butik ürünleri, ceket, takım ve triko tedariki hakkında bilgi alın.",
  alternates: {
    canonical: "https://www.merterdentedarik.com/blog/merter-toptan",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Merter%20toptan%20%C3%BCr%C3%BCn%20tedari%C4%9Fi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const categories = [
  "Kadın Giyim",
  "Takım",
  "Ceket",
  "Bluz & Üst Giyim",
  "Triko",
  "Yeni Sezon Ürünler",
];

export default function MerterToptan() {
  return (
    <main className="min-h-screen bg-[#f6f3ed] text-[#202326]">
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
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-black uppercase tracking-[.25em] text-black/45">
              MERTER • TOPTAN • İSTANBUL
            </p>

            <h1 className="mt-5 text-6xl font-black leading-[.92] tracking-[-.05em] md:text-8xl">
              Merter
              <span className="block">Toptan</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Merter toptan ürün tedariği arayan butik, mağaza ve online
              satıcılar için kadın giyim odaklı tedarik desteği. Aradığınız
              ürünü gönderin; Merter'deki tedarik seçeneklerini araştıralım.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#202326] px-7 py-4 text-sm font-bold text-white"
              >
                WHATSAPP'TAN ÜRÜN GÖNDER →
              </a>

              <a
                href="#merter-toptan-rehber"
                className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-bold"
              >
                REHBERİ İNCELE
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-white">
            <Image
              src="/images/merterdentedarik.jpeg"
              alt="Merter toptan giyim ve ürün tedariği"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/85 p-6 text-white backdrop-blur">
              <p className="text-xs font-bold tracking-[.2em] text-white/50">
                MERTER'DEN TEDARİK
              </p>
              <p className="mt-2 text-xl font-bold">
                Butik ve mağazalara ürün tedariği
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["MERTER", "Toptan Tedarik"],
              ["B2B", "Butik & Mağaza"],
              ["KADIN GİYİM", "Ürün Grupları"],
              ["TÜRKİYE", "Gönderim"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-r border-black/10 p-7"
              >
                <strong className="block text-xl">{title}</strong>
                <span className="mt-1 block text-sm text-black/45">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="merter-toptan-rehber"
          className="mx-auto max-w-4xl px-6 py-20"
        >
          <p className="text-xs font-black tracking-[.2em] text-black/40">
            MERTER TOPTAN REHBERİ
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Merter Toptan Nedir?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Merter, İstanbul'da tekstil ve hazır giyim ticaretinin yoğunlaştığı
            bölgelerden biridir. Merter toptan araması yapan işletmeler
            genellikle mağaza veya butiklerinde satışa sunabilecekleri ürünlere,
            yeni sezon modellere ve düzenli ürün tedariği sağlayabilecek
            seçeneklere ulaşmak ister.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Rota Tedarik, Merter'den ürün arayan işletmeler için ürün araştırma
            ve tedarik sürecini kolaylaştırmayı amaçlar. Özellikle İstanbul
            dışında faaliyet gösteren butik ve mağazalar, aradıkları ürünün
            fotoğrafını veya ürün grubunu ileterek tedarik talebi
            oluşturabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter Toptan Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Merter toptan giyim tarafında kadın giyim başta olmak üzere farklı
            sezon ve ürün grupları için tedarik seçenekleri bulunabilir.
            İşletmenizin müşteri kitlesine uygun ürünleri ararken model,
            sezon, adet ve stok durumunun birlikte değerlendirilmesi önemlidir.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {categories.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-5"
              >
                <strong>{item}</strong>
                <span className="text-black/30">→</span>
              </div>
            ))}
          </div>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Kadın giyim alanında çalışan butik ve mağazalar için takım, ceket,
            bluz, triko, dış giyim ve sezonluk modeller için ürün talebi
            oluşturulabilir. Aradığınız belirli bir ürün varsa görselini
            göndermeniz ürün araştırmasını kolaylaştırır.
          </p>

          <div className="my-14 overflow-hidden rounded-3xl bg-[#202326] text-white">
            <div className="grid md:grid-cols-3">
              <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
                <span className="text-xs text-white/35">01</span>
                <h3 className="mt-2 text-xl font-bold">Ürünü Gönder</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Aradığınız modelin görselini veya ürün grubunu iletin.
                </p>
              </div>

              <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
                <span className="text-xs text-white/35">02</span>
                <h3 className="mt-2 text-xl font-bold">Tedarik Araştırması</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Talebinize uygun ürün seçenekleri değerlendirilsin.
                </p>
              </div>

              <div className="p-7">
                <span className="text-xs text-white/35">03</span>
                <h3 className="mt-2 text-xl font-bold">Gönderim</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Sipariş netleştikten sonra gönderim süreci organize edilsin.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-black md:text-4xl">
            Merter Toptan Ürün Alırken Nelere Dikkat Edilmeli?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Toptan ürün seçiminde yalnızca ürün fiyatına değil; modelin hedef
            kitlenize uygunluğuna, mevcut stoklara, beden dağılımına, sezon
            şartlarına ve gönderim sürecine de dikkat edilmelidir. Özellikle
            düzenli ürün alan butiklerin ihtiyaçlarını net şekilde belirlemesi
            tedarik sürecini kolaylaştırır.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            İstanbul'a Gelmeden Merter Toptan Ürün Tedariği
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            İstanbul dışında bulunan işletmeler için Merter'e her ürün
            alımında gelmek zaman ve operasyon maliyeti oluşturabilir.
            Aradığınız ürünleri uzaktan ileterek ürün araştırma ve tedarik
            talebi oluşturabilirsiniz.
          </p>

          <div className="mt-14 rounded-3xl border border-black/10 bg-white p-8">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              MERTER İÇERİK AĞI
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Merter toptan giyim hakkında daha fazla bilgi
            </h2>

            <div className="mt-7 flex flex-col gap-4">
              <Link
                href="/blog/merter-toptan-kadin-giyim"
                className="border-b border-black/10 pb-4 font-bold"
              >
                Merter Toptan Kadın Giyim →
              </Link>

              <Link
                href="/blog/merter-toptan-giyim-tedarikcisi"
                className="border-b border-black/10 pb-4 font-bold"
              >
                Merter Toptan Giyim Tedarikçisi →
              </Link>

              <Link
                href="/blog/merter-kadin-giyim"
                className="font-bold"
              >
                Merter Kadın Giyim →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#202326] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-bold tracking-[.25em] text-white/40">
              MERTER TOPTAN
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Merter'den hangi ürünü arıyorsunuz?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Aradığınız kadın giyim ürününün fotoğrafını gönderin. Ürün
              tedarik seçeneklerini değerlendirelim.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-black"
            >
              WHATSAPP'TAN ÜRÜN GÖNDER →
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}

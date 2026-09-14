import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Toptan Kadın Giyim Alımı | Rota Tedarik",
  description:
    "Merter toptan kadın giyim alımı yapmak isteyen butik, mağaza ve online satış işletmeleri için ürün araştırma ve tedarik desteği. İstanbul tekstil piyasasından ürün bulun.",
  keywords: [
    "merter toptan kadın giyim alımı",
    "merter kadın giyim alımı",
    "merter toptan kadın giyim",
    "merterden toptan kadın giyim almak",
    "toptan kadın giyim alımı",
    "merter kadın giyim tedarikçisi",
  ],
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/merter-toptan-kadin-giyim-alimi",
  },
};

export default function MerterToptanKadinGiyimAlimiPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#181716]">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-sm font-semibold tracking-[0.2em]">
            ROTA TEDARİK
          </Link>

          <a
            href="https://wa.me/905324975361"
            className="rounded-full bg-[#242321] px-5 py-3 text-sm font-medium text-white"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-black/50">
            İstanbul Toptan Kadın Giyim
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Merter Toptan Kadın Giyim Alımı
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/65">
            Merter toptan kadın giyim alımı yapmak isteyen butik, mağaza ve
            online satış işletmeleri için İstanbul tekstil piyasasında ürün
            araştırma ve tedarik desteği sunuyoruz. İhtiyacınıza uygun kadın
            giyim ürünlerini araştırarak alım sürecini daha kolay hale
            getiriyoruz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/905324975361"
              className="rounded-full bg-[#242321] px-6 py-3 text-sm font-semibold text-white"
            >
              Toptan Ürün Sor
            </a>

            <Link
              href="/blog/merter-kadin-giyim-toptan"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold"
            >
              Merter Kadın Giyim Toptan
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                Toptan Alım
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Merter'den toptan kadın giyim alımı nasıl yapılır?
              </h2>
            </div>

            <div className="space-y-5 text-[17px] leading-8 text-black/65">
              <p>
                Merter, İstanbul'da kadın giyim ve hazır giyim ürünleri
                açısından önemli tedarik bölgelerinden biridir. Butik ve
                mağazalar farklı ürün grupları için bölgedeki toptan
                seçenekleri değerlendirebilir.
              </p>

              <p>
                Toptan alım yaparken yalnızca ürünün görünümüne değil; model,
                beden seçenekleri, sezon, adet, tedarik koşulları ve satış
                kanalına uygunluğuna da dikkat etmek gerekir.
              </p>

              <p>
                Rota Tedarik olarak işletmenin ihtiyacını anlayıp İstanbul
                tekstil piyasasında buna uygun ürünleri araştırma ve tedarik
                sürecinde destek oluyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
            Alım Öncesi
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Toptan kadın giyim alırken nelere dikkat edilmeli?
          </h2>

          <div className="mt-10 space-y-5">
            {[
              [
                "Ürün grubu",
                "Butiğinizin veya mağazanızın müşteri kitlesine uygun ürün kategorilerini belirlemek önemlidir.",
              ],
              [
                "Sezon",
                "Mevsime ve satış dönemine uygun ürünleri önceden belirlemek stok planlamasını kolaylaştırır.",
              ],
              [
                "Model çeşitliliği",
                "Farklı model ve ürün seçeneklerini değerlendirmek mağazanızdaki koleksiyonun çeşitlenmesine yardımcı olabilir.",
              ],
              [
                "Beden seçenekleri",
                "Ürünlerin hedef müşteri kitlesine uygun beden seçeneklerinin bulunması satış planlaması açısından önem taşır.",
              ],
              [
                "Tedarik süreci",
                "Ürünün bulunması kadar sipariş, hazırlık ve gönderim sürecinin nasıl ilerleyeceğini bilmek de önemlidir.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-t border-black/10 pt-6"
              >
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-[16px] leading-7 text-black/60">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#ded7ce]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
              Kadın Giyim Ürünleri
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Merter'den hangi kadın giyim ürünleri alınabilir?
            </h2>

            <p className="mt-7 text-[17px] leading-8 text-black/65">
              İhtiyaca göre farklı kadın giyim kategorilerinde ürün
              araştırması yapılabilir. Ürün seçimi işletmenin müşteri
              kitlesine, sezonuna ve satış kanalına göre değişebilir.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Elbise",
                "Bluz",
                "Gömlek",
                "Pantolon",
                "Etek",
                "Kadın takım",
                "Triko",
                "Ceket",
                "Dış giyim",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/10 bg-[#f5f2ed] px-5 py-4 text-sm font-medium"
                >
                  Toptan {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
              Rota Tedarik
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              İstanbul'a gelmeden ürün araştırması
            </h2>
          </div>

          <div className="space-y-5 text-[17px] leading-8 text-black/65">
            <p>
              Şehir dışında bulunan butik ve mağazaların her ürün için
              İstanbul'a gelmesi her zaman mümkün olmayabilir. Bu durumda
              ürün araştırma ve tedarik sürecinin uzaktan yürütülmesi
              işletmeye zaman kazandırabilir.
            </p>

            <p>
              Rota Tedarik ile aradığınız ürün grubunu ve ihtiyaçlarınızı
              WhatsApp üzerinden paylaşabilir, İstanbul tekstil piyasasında
              ürün araştırma sürecini birlikte planlayabilirsiniz.
            </p>

            <p>
              Merter başta olmak üzere İstanbul'un farklı tekstil
              piyasalarındaki ürün seçeneklerini değerlendirerek işletmenizin
              ihtiyacına uygun tedarik sürecini oluşturmayı hedefliyoruz.
            </p>

            <a
              href="https://wa.me/905324975361"
              className="inline-flex rounded-full bg-[#242321] px-7 py-4 text-sm font-semibold text-white"
            >
              WhatsApp'tan Tedarik Talebi Gönder
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#242321] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            Toptan kadın giyim alımınızı İstanbul piyasasından planlayın.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65">
            Merter toptan kadın giyim ürünleri, elbise veya farklı kadın giyim
            kategorilerinde ürün arıyorsanız Rota Tedarik ile iletişime
            geçebilirsiniz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/905324975361"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#242321]"
            >
              WhatsApp ile İletişim
            </a>

            <Link
              href="/blog/merter-toptan-kadin-giyim-online"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold"
            >
              Merter Toptan Kadın Giyim Online
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          İlgili içerikler
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link
            href="/blog/merter-toptan-kadin-giyim"
            className="rounded-2xl border border-black/10 bg-white p-6"
          >
            <span className="text-sm font-semibold">
              Merter Toptan Kadın Giyim
            </span>
          </Link>

          <Link
            href="/blog/merter-elbise-toptancilari"
            className="rounded-2xl border border-black/10 bg-white p-6"
          >
            <span className="text-sm font-semibold">
              Merter Elbise Toptancıları
            </span>
          </Link>

          <Link
            href="/blog/merter-toptan-kadin-giyim-fiyatlari"
            className="rounded-2xl border border-black/10 bg-white p-6"
          >
            <span className="text-sm font-semibold">
              Merter Toptan Kadın Giyim Fiyatları
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

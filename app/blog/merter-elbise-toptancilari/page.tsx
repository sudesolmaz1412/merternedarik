import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Elbise Toptancıları | Toptan Elbise Tedarikçisi",
  description:
    "Merter elbise toptancıları, toptan elbise modelleri ve kadın giyim ürünleri hakkında bilgi alın. Rota Tedarik ile İstanbul tekstil piyasasından ürün tedarik edin.",
  keywords: [
    "merter elbise toptancıları",
    "merter toptan elbise",
    "merter kadın elbise toptancıları",
    "merter toptan elbise modelleri",
    "merter elbise tedarikçisi",
    "merterden toptan elbise almak",
  ],
  alternates: {
    canonical: "https://www.merterdentedarik.com/blog/merter-elbise-toptancilari",
  },
};

export default function MerterElbiseToptancilariPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#181716]">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.2em]"
          >
            ROTA TEDARİK
          </Link>

          <Link
            href="https://wa.me/905324975361"
            className="rounded-full bg-[#242321] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            WhatsApp
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-black/50">
            İstanbul Toptan Kadın Giyim
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Merter Elbise Toptancıları
          </h1>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Merter elbise toptancıları, kadın giyim sektöründe ürün arayan
            butik, mağaza ve online satış yapan işletmeler için önemli bir
            tedarik noktasıdır. Özellikle sezonluk elbiseler, günlük modeller,
            şık davet ürünleri ve farklı kadın giyim grupları İstanbul
            piyasasında geniş seçeneklerle bulunabilir.
          </p>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/50">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
              Toptan Elbise
            </p>

            <h2 className="text-3xl font-semibold tracking-tight">
              Merter'de toptan elbise nasıl bulunur?
            </h2>
          </div>

          <div className="space-y-5 text-[17px] leading-8 text-black/65">
            <p>
              Merter, kadın giyim ve hazır giyim ürünleri açısından İstanbul'un
              önemli ticaret bölgelerinden biridir. Toptan elbise arayan
              işletmeler farklı model, kumaş, beden ve sezon seçeneklerini
              karşılaştırarak kendi satış kanallarına uygun ürünleri
              belirleyebilir.
            </p>

            <p>
              Ancak çok sayıda mağaza ve ürün arasından doğru ürünü bulmak
              zaman alabilir. Bu noktada ürün araştırması ve tedarik sürecinin
              birlikte yürütülmesi işletmeler için önemli bir avantaj sağlar.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
            Rota Tedarik
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Merter'den elbise tedarik etmek isteyenlere
          </h2>

          <div className="mt-8 space-y-5 text-[17px] leading-8 text-black/65">
            <p>
              Her işletmenin İstanbul'a gelip tek tek mağaza gezmesi
              gerekmeyebilir. Rota Tedarik olarak İstanbul'un tekstil
              piyasalarında ürün araştırması yaparak kadın giyim ürünlerini
              işletmeler için tedarik sürecine dahil ediyoruz.
            </p>

            <p>
              Özellikle butik ve online satış yapan işletmeler için elbise
              modelleri araştırılabilir, uygun ürünler belirlenebilir ve
              sipariş süreci yönetilebilir.
            </p>

            <p>
              Amacımız yalnızca Merter'den ürün bulmak değil; işletmenin
              ihtiyacına uygun ürünü İstanbul tekstil piyasasından bulup
              tedarik sürecini kolaylaştırmaktır.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#242321] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
            Toptan elbise arıyorsanız, ürün araştırmasını birlikte yapalım.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65">
            Merter ve İstanbul tekstil piyasalarından kadın giyim ürünü
            araştırmak, elbise modelleri bulmak veya düzenli tedarik
            sağlamak için bizimle iletişime geçebilirsiniz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/905324975361"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#242321] transition hover:opacity-90"
            >
              WhatsApp'tan Ürün Sor
            </a>

            <Link
              href="/blog/merter-kadin-giyim-toptan"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              Merter Kadın Giyim Toptan
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
            href="/blog/merter-kadin-giyim-toptan"
            className="rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1"
          >
            <span className="text-sm font-semibold">
              Merter Kadın Giyim Toptan
            </span>
          </Link>

          <Link
            href="/blog/merter-toptan-kadin-giyim-modelleri"
            className="rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1"
          >
            <span className="text-sm font-semibold">
              Merter Toptan Kadın Giyim Modelleri
            </span>
          </Link>

          <Link
            href="/blog/merter-kadin-giyim-toptancilari"
            className="rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1"
          >
            <span className="text-sm font-semibold">
              Merter Kadın Giyim Toptancıları
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Merter Toptan Giyim Tedarikçisi | Rota Tedarik",
  description:
    "Merter toptan giyim tedarikçisi arayan butik ve mağazalar için kadın giyim ürün tedariği. Yeni sezon ürünler, ceket, takım, triko ve butik ürünleri.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/merter-toptan-giyim-tedarikcisi",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Merter%27den%20toptan%20giyim%20%C3%BCr%C3%BCn%C3%BC%20tedarik%20etmek%20istiyorum.";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-black tracking-tight">
            ROTA TEDARİK
          </Link>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-3 text-sm font-bold text-white"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <article>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-zinc-500">
              Merter • Toptan Giyim • Tedarik
            </p>

            <h1 className="text-5xl font-black leading-[1.02] tracking-tight md:text-6xl">
              Merter Toptan
              <span className="block">Giyim Tedarikçisi</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600">
              Butik, mağaza ve online satış yapan işletmeler için Merter'den
              kadın giyim ürün tedariği. Aradığınız ürünü bize gönderin,
              tedarik seçeneklerini araştırarak süreci organize edelim.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-fit rounded-full bg-black px-7 py-4 font-bold text-white"
            >
              Ürün Fotoğrafını Gönder →
            </a>
          </div>

          <div className="relative min-h-[470px] overflow-hidden rounded-3xl bg-zinc-100">
            <Image
              src="/images/mertertekstiltedarik.png"
              alt="Merter toptan giyim tedarikçisi"
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 md:grid-cols-4">
            {[
              ["MERTER", "Ürün Tedariği"],
              ["KADIN GİYİM", "Toptan"],
              ["TÜRKİYE", "Gönderim"],
              ["B2B", "Butik & Mağaza"],
            ].map(([title, text]) => (
              <div key={title} className="border-white/10 p-6 md:border-r">
                <strong className="block text-xl">{title}</strong>
                <span className="mt-1 block text-sm text-white/55">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl font-black md:text-4xl">
            Merter Toptan Giyim Tedariği
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Merter, İstanbul'da tekstil ve toptan giyim ticaretinin yoğun
            olduğu bölgelerden biridir. Butik ve mağazalar farklı model,
            koleksiyon ve ürün grupları için Merter'deki tedarik seçeneklerini
            değerlendirebilir.
          </p>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Rota Tedarik, özellikle İstanbul dışında bulunan işletmeler için
            ürün araştırma ve tedarik sürecini kolaylaştırmayı amaçlar.
            Aradığınız modelin görselini gönderebilir veya ihtiyacınız olan
            ürün grubunu belirtebilirsiniz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Kadın takım, ceket, bluz, triko, dış giyim ve yeni sezon butik
            ürünleri için tedarik talebi oluşturabilirsiniz. Ürün
            bulunabilirliği model, sezon ve mevcut stok durumuna göre
            değişebilir.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Toptan Kadın Giyim",
              "Toptan Kadın Takım",
              "Toptan Ceket",
              "Toptan Triko",
              "Yeni Sezon Ürünler",
              "Butik Ürün Tedariği",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-zinc-50 p-5 font-bold"
              >
                {item}
              </div>
            ))}
          </div>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter'den Ürün Nasıl Tedarik Edilir?
          </h2>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border p-6">
              <strong>01 — Ürünü gönderin</strong>
              <p className="mt-2 text-zinc-600">
                Aradığınız ürünün fotoğrafını veya ürün grubunu WhatsApp
                üzerinden iletin.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <strong>02 — Tedarik seçenekleri araştırılsın</strong>
              <p className="mt-2 text-zinc-600">
                Talebinize uygun ürün ve tedarik seçenekleri değerlendirilir.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <strong>03 — Sipariş ve gönderim</strong>
              <p className="mt-2 text-zinc-600">
                Sipariş detayları netleştikten sonra gönderim süreci
                organize edilir.
              </p>
            </div>
          </div>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Butikler İçin Merter Toptan Tedarik
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            İstanbul dışında butik işletiyorsanız her ürün alımı için Merter'e
            gelmeniz gerekmeyebilir. Aradığınız ürünleri uzaktan ileterek ürün
            tedarik talebi oluşturabilir ve gönderim sürecini planlayabilirsiniz.
          </p>

          <div className="mt-12 rounded-3xl bg-zinc-100 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-zinc-500">
              Merter Toptan
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Merter'den toptan ürün mü arıyorsunuz?
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              Merter toptan kadın giyim ve ürün tedariği hakkında diğer
              içeriklerimizi de inceleyebilirsiniz.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/blog/merter-toptan-kadin-giyim"
                className="font-bold underline underline-offset-4"
              >
                Merter Toptan Kadın Giyim →
              </Link>

              <Link
                href="/blog/merter-kadin-giyim"
                className="font-bold underline underline-offset-4"
              >
                Merter Kadın Giyim →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            <h2 className="text-4xl font-black">
              Aradığınız ürünü bize gönderin
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-white/60">
              Merter'den toptan kadın giyim ürün tedariği için ürün
              fotoğrafını WhatsApp üzerinden iletebilirsiniz.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-black"
            >
              WhatsApp'tan Ürün Gönder →
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}

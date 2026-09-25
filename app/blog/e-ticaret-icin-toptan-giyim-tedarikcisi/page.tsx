import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Toptan Giyim Tedarikçisi | Rota Tedarik",
  description:
    "E-ticaret için toptan giyim tedarikçisi arayan işletmelere kadın giyim ürün tedariği. Merter'den elbise, takım, triko, ceket ve yeni sezon ürünleri.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-toptan-giyim-tedarikcisi",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20i%C3%A7in%20toptan%20giyim%20tedarik%C3%A7isi%20ar%C4%B1yorum.";

const categories = [
  ["Kadın Elbise", "E-ticaret mağazaları için günlük, şık ve sezonluk elbise modelleri."],
  ["Kadın Takım", "İkili takım, ceket-pantolon ve farklı kombin ürünleri."],
  ["Triko", "Kazak, hırka ve farklı sezonluk kadın triko ürünleri."],
  ["Ceket", "Kadın giyim koleksiyonlarını tamamlayabilecek ceket modelleri."],
  ["Üst Giyim", "Bluz, gömlek ve farklı kadın üst giyim seçenekleri."],
  ["Yeni Sezon", "Online mağazalar için yeni gelen ve yeni sezon kadın giyim modelleri."],
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
            E-TİCARET • TOPTAN GİYİM • TEDARİKÇİ
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.96] tracking-[-.045em] md:text-7xl">
            E-Ticaret İçin
            <span className="block">Toptan Giyim Tedarikçisi</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            E-ticaret mağazanız için kadın giyim ürünleri mi arıyorsunuz?
            Merter'deki farklı ürün ve tedarik seçeneklerini araştırarak
            online mağazanız için uygun ürünleri bulmanıza yardımcı oluyoruz.
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
              ["E-TİCARET", "Ürün Tedariği"],
              ["KADIN GİYİM", "Toptan Ürünler"],
              ["MERTER", "Tedarik"],
              ["TÜRKİYE", "Gönderim"],
            ].map(([title, text]) => (
              <div key={title} className="border-r border-black/10 p-7">
                <strong className="block text-lg">{title}</strong>
                <span className="mt-1 block text-sm text-black/45">{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            TEDARİKÇİ BULMA
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            E-Ticaret İçin Giyim Tedarikçisi Nasıl Bulunur?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Online giyim satışı yapan işletmeler için tedarik süreci yalnızca
            ürün satın almaktan ibaret değildir. Ürün çeşitliliği, model,
            beden seçenekleri, stok durumu ve gönderim süreci birlikte
            değerlendirilmelidir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            İstanbul Merter gibi tekstil ticaretinin yoğun olduğu bölgelerde
            farklı kadın giyim ürünlerini ve tedarik seçeneklerini
            araştırabilirsiniz. Aradığınız modeli önceden belirlemek ürün
            araştırmasını daha hedefli hale getirir.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Modeli Belirle", "E-ticaret mağazanızda satmak istediğiniz ürün veya ürün grubunu belirleyin."],
              ["02", "Görseli Gönder", "Aradığınız ürünün fotoğrafını veya benzer model örneğini paylaşın."],
              ["03", "Tedarik Araştır", "Uygun ürün ve tedarik seçeneklerini karşılaştırarak siparişinizi planlayın."],
            ].map(([number, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <span className="text-xs font-black text-black/25">{number}</span>
                <h3 className="mt-5 text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-black/55">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#202326] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              E-TİCARET TEDARİĞİ
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
              Toptan Giyim Tedarikçisi Seçerken Nelere Bakılmalı?
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                ["Ürün Çeşitliliği", "Mağazanızın koleksiyonuna uygun farklı ürün gruplarına ulaşabilmek önemlidir."],
                ["Stok Durumu", "Satış devamlılığı için ürün ve beden stoklarının sipariş öncesinde kontrol edilmesi gerekir."],
                ["Yeni Modeller", "E-ticarette koleksiyonu güncel tutabilmek için yeni ürünleri takip etmek faydalıdır."],
                ["Gönderim Süreci", "Ürünlerin hazırlanması ve işletmenize gönderilmesiyle ilgili süreci önceden netleştirin."],
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
            ÜRÜN KATEGORİLERİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            E-Ticaret İçin Toptan Kadın Giyim Ürünleri
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map(([title, text], index) => (
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
            Merter E-Ticaret Giyim Tedarikçisi
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Merter'deki farklı kadın giyim ürünlerinin araştırılması,
            e-ticaret işletmelerinin tek tek farklı ürünleri aramak için
            harcadığı zamanı azaltabilir. Aradığınız ürün grubunu veya modeli
            paylaşarak tedarik sürecini başlatabilirsiniz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret İçin Uzaktan Ürün Tedariği
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            İstanbul dışında faaliyet gösteren e-ticaret işletmeleri de ürün
            taleplerini uzaktan iletebilir. Ürün görseli, kategori, renk veya
            model bilgisi tedarik araştırmasının daha doğru yapılmasına
            yardımcı olur.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret İçin Yeni Ürün Nasıl Bulunur?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            İnternette gördüğünüz veya mağazanızda satmak istediğiniz kadın
            giyim ürününün görselini paylaşabilirsiniz. Aynı veya benzer
            modeller için Merter'deki tedarik seçenekleri araştırılabilir.
          </p>

          <div className="mt-14 rounded-3xl bg-[#ebe7dd] p-8 md:p-10">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              E-ticaret mağazanız için ürün arıyoruz.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-black/60">
              Satmak istediğiniz kadın giyim ürününün görselini WhatsApp'tan
              gönderin. Merter'deki ürün ve tedarik seçeneklerini araştıralım.
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
              E-TİCARET TEDARİK REHBERLERİ
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri-nereden-alinir"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Ürünleri Nereden Alınır? →
              </Link>

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
                className="font-bold"
              >
                E-Ticaret İçin Kadın Giyim Tedarikçisi →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

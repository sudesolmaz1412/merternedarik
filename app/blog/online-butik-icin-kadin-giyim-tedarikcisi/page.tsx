import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Butik İçin Kadın Giyim Tedarikçisi | Rota Tedarik",
  description:
    "Online butik için kadın giyim tedarikçisi arayanlara ürün tedarik desteği. Toptan kadın giyim, elbise, takım, ceket, triko ve yeni sezon modelleri.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/online-butik-icin-kadin-giyim-tedarikcisi",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20online%20buti%C4%9Fim%20i%C3%A7in%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCnleri%20ar%C4%B1yorum.";

const categories = [
  ["Kadın Takım", "Online butik koleksiyonları için ikili takım ve ceket-pantolon modelleri."],
  ["Elbise", "Günlük, şık ve sezonluk kadın elbise seçenekleri."],
  ["Ceket", "Kadın giyim koleksiyonlarını tamamlayan farklı ceket modelleri."],
  ["Triko", "Kazak, hırka ve sezonluk triko ürün grupları."],
  ["Üst Giyim", "Bluz, gömlek ve farklı kadın üst giyim modelleri."],
  ["Yeni Sezon", "Online butik koleksiyonunu güncellemek için yeni sezon ürünleri."],
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
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            ONLINE BUTİK • KADIN GİYİM • TEDARİK
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.96] tracking-[-.045em] md:text-7xl">
            Online Butik İçin
            <span className="block">Kadın Giyim Tedarikçisi</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            Online butik açan veya mevcut kadın giyim mağazasının ürün
            çeşitliliğini geliştirmek isteyen işletmeler için ürün tedariği.
            Aradığınız kadın giyim modelini gönderin, Merter'deki tedarik
            seçeneklerini araştıralım.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
            >
              ÜRÜN FOTOĞRAFI GÖNDER →
            </a>

            <Link
              href="/blog/e-ticaret-icin-kadin-giyim"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-bold"
            >
              E-TİCARET KADIN GİYİM
            </Link>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["ONLINE BUTİK", "Ürün Tedariği"],
              ["KADIN GİYİM", "Yeni Modeller"],
              ["TOPTAN", "Ürün Seçenekleri"],
              ["MERTER", "Tedarik Desteği"],
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
            BUTİK ÜRÜNLERİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            Online Butik İçin Kadın Giyim Ürünleri
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Online butik için kadın giyim ürünleri seçerken mağazanızın hedef
            kitlesine uygun bir koleksiyon oluşturabilirsiniz. Farklı ürün
            gruplarının birbirini tamamlaması mağaza bütünlüğünü güçlendirebilir.
          </p>

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

        <section className="bg-[#202326] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              TEDARİKÇİ SEÇİMİ
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
              Online Butik İçin Tedarikçi Seçerken Nelere Bakılmalı?
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                ["Ürün Çeşitliliği", "Farklı kategorilerde ürün seçeneklerine ulaşabilmek koleksiyon oluşturmayı kolaylaştırabilir."],
                ["Model Güncelliği", "Yeni sezon ve güncel modellerin takip edilmesi online mağazalar için önemlidir."],
                ["Stok Durumu", "Sipariş öncesinde ürün, beden ve stok durumunun netleştirilmesi gerekir."],
                ["Gönderim", "Ürünlerin işletmenize nasıl ve ne zaman ulaştırılacağını sipariş öncesinde planlayın."],
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
            Online Butik İçin Ürün Nereden Alınır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Online butik sahipleri kadın giyim ürünlerini üreticiler,
            toptancılar ve tekstil ticaretinin yoğun olduğu bölgelerdeki
            tedarikçiler üzerinden temin edebilir. İstanbul Merter kadın giyim
            ticaretinin yoğun olduğu bölgelerden biridir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            İstanbul dışında faaliyet gösteren butik ve e-ticaret işletmeleri
            de aradıkları ürünlerin fotoğraflarını ileterek ürün tedarik
            seçeneklerinin araştırılmasını sağlayabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Online Butik İçin Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Toptan kadın giyim ürünleri seçerken yalnızca tek bir kategoriye
            odaklanmak yerine mağazanın genel koleksiyonu düşünülmelidir.
            Elbise, takım, ceket, triko ve üst giyim gibi birbirini
            tamamlayabilecek kategoriler birlikte değerlendirilebilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Instagram Butiği İçin Kadın Giyim Tedariği
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Instagram üzerinden kadın giyim satışı yapan butiklerde de ürün
            seçimi mağazanın hedef kitlesine göre yapılabilir. Beğendiğiniz
            ürünün veya benzer modelin görselini göndererek tedarik talebi
            oluşturabilirsiniz.
          </p>

          <div className="mt-14 rounded-3xl bg-[#ebe7dd] p-8 md:p-10">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Butiğiniz için aradığınız modeli bize gönderin
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-black/60">
              Kadın giyim ürününün fotoğrafını WhatsApp üzerinden iletin.
              Merter'deki tedarik seçeneklerini araştırarak ürün bulma
              sürecinde yardımcı olalım.
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

          <div className="mt-14 border-t border-black/10 pt-10">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              İLGİLİ REHBERLER
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/blog/e-ticaret-icin-kadin-giyim"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-tedarikcisi"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Tedarikçisi →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-giyim"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Toptan Kadın Giyim →
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

        <section className="bg-[#202326] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              ONLINE BUTİK TEDARİK
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Aradığınız ürünü gönderin.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Online butiğinizde satmak istediğiniz kadın giyim modelini
              WhatsApp üzerinden bize iletin.
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

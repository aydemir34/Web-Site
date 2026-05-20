# Proje Dersleri

Bu projede ilk aşamada data-driven Astro generator kuruldu.

Teknik olarak build, noindex, route, asset helper, WhatsApp helper, footer/header gibi altyapılar çalıştı.

Ancak tasarım çıktıları tekrarlı ve zayıf kaldı.

Sorunun ana nedeni: tasarım kalitesi kilitlenmeden component/generator sistemine geçilmesi.

"Basic", "hızlı", "compact" gibi kelimeler Codex tarafından basit/generic tasarım olarak yorumlandı.

Farklı referanslar verilmesine rağmen mevcut component mimarisi tasarımı hep header + hero + kartlar + footer düzenine itti.

Bundan sonra tasarım üretimi iki aşamalı olacak:

1. Open Design / style artifact aşaması: farklı tasarım yönleri bağımsız HTML/CSS artifact olarak üretilecek.
2. Componentleştirme aşaması: sadece beğenilen artifact Astro component sistemine taşınacak.

Codex artık tasarım kararı veren araç değil, onaylanmış tasarımı uygulayan araç olarak kullanılacak.

Paketlerin farkı görsel kalite değil, kapsam olacak.

Tüm paketler estetik ve satılabilir görünmek zorunda.

Görsel kalite minimum standardın altına düşerse build başarılı olsa bile demo kabul edilmeyecek.

## Tekrar Etme

- Tasarım onaylanmadan generator'a taşıma.
- Farklı tasarım isteniyorsa sadece renk değiştirme.
- Mevcut kötü componentleri yamama.
- Müşteriye gönderilecek demo içinde debug, demo açıklaması, zayıf placeholder veya generic kart düzeni gösterme.

## Simay Canlı Düzeltme Dersleri

- Canlı mobil sorunlarında build sonucu yeterli kabul edilmeyecek; header, menü, footer ve sticky CTA gerçek mobil viewport ile kontrol edilecek.
- Her zaman görünmesi gereken mobil header için akışa bağlı kırılgan sticky davranış yerine sabit header + body üst boşluğu kullanılabilir.
- Mobil menü document flow içinde büyüyen bir blok olmamalı; header altında fixed panel olarak açılmalı, overlay/link/Escape/kaydırma denemesiyle kapanmalı ve açıkken sayfa scroll'u kilitlenmeli.
- Dört kolonlu footer mobilde tek listeye düşmemeli; marka özeti tam genişlikte, Sayfalar + Hizmetler iki kolon, İletişim alt satırda tam genişlik düzeni güvenli varsayılan olabilir.
- Before/after modüllerinde CSS frame görsel oranıyla uyumlu olmalı. 4:3 görseller desktop'ta 4:3 frame içinde kullanılmalı; ayrı mobil görsel varsa mobilde daha dikey kırpma tercih edilebilir.
- Kayan şerit gibi sürekli hareketlerde JS ile scrollLeft yerine CSS transform animasyonu tercih edilmeli ve reduced-motion desteği korunmalı.
- Export scriptleri sadece `src` değil, `srcset` içindeki varlıkları da yakalamalı; aksi halde desktop görselleri deploy klasörüne taşınmayabilir.

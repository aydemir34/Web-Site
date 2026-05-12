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

import type { Locale } from './i18n'

export type ProductCopy = {
  subtitle: string
  highlights: string[]
  science?: { intro: string; points: string[] }
  howTo: string
  tip?: string
}

// Product copy for every language. Edit the text here; the product pages pick it up automatically.
export const productCopy: Record<string, Record<Locale, ProductCopy>> = {
  "vitamin-c": {
    "ar": {
      "subtitle": "تركيبة طبية مدروسة للإشراقة والحماية",
      "highlights": [
        "سيروم فيتامين C بتركيز 5% مصمم خصيصاً لتفتيح البشرة وتوحيد لونها",
        "تركيبة متطورة تجمع بين L-Ascorbic Acid النقي مع Ferulic Acid و Vitamin E",
        "قوام خفيف سريع الامتصاص، لا يترك ملمس دهني او لزج على البشرة",
        "مناسب لجميع انواع البشرة بما فيها الحساسة، خالي من البارابين والعطور"
      ],
      "science": {
        "intro": "تركيبة متوازنة تجمع بين L-Ascorbic Acid 5% المثبت سريرياً مع Ferulic Acid و Vitamin E لتضاعف الفعالية والثباتية.",
        "points": [
          "L-Ascorbic Acid 5%: التركيز المثالي للاستخدام اليومي بدون تهيج، يحفز الكولاجين ويفتح التصبغات",
          "Ferulic Acid 0.5%: يضاعف فعالية وثباتية فيتامين C بـ 8 مرات",
          "Vitamin E 1%: مضاد أكسدة يعمل بتآزر ويقلل الالتهاب",
          "Hyaluronic Acid: وزن جزيئي منخفض لاختراق عميق ومنع الجفاف"
        ]
      },
      "howTo": "4-5 نقط على بشرة نظيفة صباحاً قبل واقي الشمس. للبشرة الحساسة: ابدئي يوماً بعد يوم",
      "tip": "يحفظ بمكان بارد لزيادة الثباتية والشعور بالانتعاش"
    },
    "en": {
      "subtitle": "Clinically-balanced formula for radiance and protection",
      "highlights": [
        "5% Vitamin C serum specially designed to brighten and even skin tone",
        "Advanced formula combining pure L-Ascorbic Acid with Ferulic Acid and Vitamin E",
        "Lightweight fast-absorbing texture, leaves no greasy or sticky feel",
        "Suitable for all skin types including sensitive, paraben and fragrance free"
      ],
      "science": {
        "intro": "Balanced formula combining clinically proven L-Ascorbic Acid 5% with Ferulic Acid and Vitamin E to double efficacy and stability.",
        "points": [
          "L-Ascorbic Acid 5%: Ideal concentration for daily use without irritation, stimulates collagen and lightens pigmentation",
          "Ferulic Acid 0.5%: Multiplies vitamin C effectiveness and stability by 8x",
          "Vitamin E 1%: Synergistic antioxidant that reduces inflammation",
          "Hyaluronic Acid: Low molecular weight for deep penetration and preventing dryness"
        ]
      },
      "howTo": "4-5 drops on clean skin in the morning before sunscreen. For sensitive skin: start every other day",
      "tip": "Keep it in the fridge for enhanced stability and refreshing feel"
    },
    "tr": {
      "subtitle": "Aydınlık ve koruma için klinik formül",
      "highlights": [
        "Cildi aydınlatmak ve tonunu eşitlemek için özel tasarlanmış %5 C Vitamini serumu",
        "Saf L-Askorbik Asit'i Ferulik Asit ve E Vitamini ile birleştiren gelişmiş formül",
        "Hızlı emilen hafif doku, yağlı veya yapışkan his bırakmaz",
        "Hassas dahil tüm cilt tiplerine uygun, paraben ve parfüm içermez"
      ],
      "science": {
        "intro": "Klinik olarak kanıtlanmış L-Askorbik Asit %5'i, etkinlik ve stabiliteyi ikiye katlamak için Ferulik Asit ve E Vitamini ile birleştiren dengeli formül.",
        "points": [
          "L-Askorbik Asit %5: Tahriş olmadan günlük kullanım için ideal konsantrasyon, kolajen uyarır ve pigmentasyonu açar",
          "Ferulik Asit %0.5: C vitamini etkinliğini ve stabilitesini 8 kat artırır",
          "E Vitamini %1: Sinerjik antioksidan, iltihabı azaltır",
          "Hyaluronik Asit: Derin nüfuz ve kuruluk önleme için düşük moleküler ağırlık"
        ]
      },
      "howTo": "Sabahları temiz cilde güneş kreminden önce 4-5 damla. Hassas ciltler: gün aşırı başlayın",
      "tip": "Stabilite ve ferahlatıcı his için buzdolabında saklayın"
    },
    "es": {
      "subtitle": "Fórmula clínicamente equilibrada para luminosidad y protección",
      "highlights": [
        "Sérum de vitamina C al 5% diseñado para iluminar y unificar el tono de la piel",
        "Fórmula avanzada que combina ácido L-ascórbico puro con ácido ferúlico y vitamina E",
        "Textura ligera y de rápida absorción, sin sensación grasa ni pegajosa",
        "Apto para todo tipo de pieles, incluidas las sensibles; sin parabenos ni fragancia"
      ],
      "howTo": "De 4 a 5 gotas sobre la piel limpia por la mañana, antes del protector solar. Piel sensible: empieza a días alternos.",
      "science": {
        "intro": "Fórmula equilibrada que combina ácido L-ascórbico al 5%, clínicamente probado, con ácido ferúlico y vitamina E para duplicar la eficacia y la estabilidad.",
        "points": [
          "Ácido L-ascórbico 5%: concentración ideal para el uso diario sin irritación; estimula el colágeno y aclara las manchas",
          "Ácido ferúlico 0,5%: multiplica por 8 la eficacia y la estabilidad de la vitamina C",
          "Vitamina E 1%: antioxidante sinérgico que reduce la inflamación",
          "Ácido hialurónico: bajo peso molecular para una penetración profunda y para evitar la sequedad"
        ]
      },
      "tip": "Guárdalo en la nevera para mejorar su estabilidad y lograr una sensación refrescante."
    },
    "ru": {
      "subtitle": "Клинически сбалансированная формула для сияния и защиты",
      "highlights": [
        "Сыворотка с 5% витамина C, созданная для осветления и выравнивания тона кожи",
        "Современная формула: чистая L-аскорбиновая кислота с феруловой кислотой и витамином E",
        "Лёгкая быстро впитывающаяся текстура без жирного и липкого ощущения",
        "Подходит для всех типов кожи, включая чувствительную; без парабенов и отдушек"
      ],
      "howTo": "Нанесите 4–5 капель на чистую кожу утром перед солнцезащитным кремом. Для чувствительной кожи начните с применения через день.",
      "science": {
        "intro": "Сбалансированная формула: клинически доказанная L-аскорбиновая кислота 5% с феруловой кислотой и витамином E удваивает эффективность и стабильность.",
        "points": [
          "L-аскорбиновая кислота 5%: идеальная концентрация для ежедневного применения без раздражения, стимулирует коллаген и осветляет пигментацию",
          "Феруловая кислота 0,5%: в 8 раз повышает эффективность и стабильность витамина C",
          "Витамин E 1%: синергичный антиоксидант, уменьшающий воспаление",
          "Гиалуроновая кислота: низкая молекулярная масса для глубокого проникновения и защиты от сухости"
        ]
      },
      "tip": "Храните в холодильнике для лучшей стабильности и освежающего ощущения."
    }
  },
  "retinol": {
    "ar": {
      "subtitle": "تركيبة متقدمة لمحاربة التجاعيد وتجديد البشرة",
      "highlights": [
        "سيروم ريتينول بتركيز 0.2% مصمم خصيصاً لتقليل التجاعيد والخطوط الدقيقة",
        "تركيبة مغلفة بتقنية Encapsulated Retinol لاطلاق بطيء بدون تهيج",
        "يحفز تجدد الخلايا ويوحد لون البشرة ويقلص المسام الواسعة",
        "مدعم بـ Niacinamide و Hyaluronic Acid لتهدئة البشرة ومنع الجفاف"
      ],
      "science": {
        "intro": "ريتينول 0.2% مغلف بتقنية Micro-encapsulation يضمن اطلاق تدريجي للفعالية مع تقليل التهيج بنسبة 70% مقارنة بالريتينول التقليدي.",
        "points": [
          "Encapsulated Retinol 0.2%: يتحول الى Retinoic Acid داخل البشرة، يحفز الكولاجين والايلاستين",
          "Niacinamide 5%: يقوي حاجز البشرة ويقلل الاحمرار المصاحب للريتينول",
          "Hyaluronic Acid: يعوض الجفاف ويحافظ على الترطيب اثناء التقشير",
          "Vitamin E: مضاد اكسدة يحمي الريتينول من التأكسد ويزيد الثباتية"
        ]
      },
      "howTo": "مساءً فقط على بشرة نظيفة وجافة. ابدئي مرتين اسبوعياً وزيدي تدريجياً. استخدمي واقي الشمس صباحاً، فهو ضروري",
      "tip": "يُنصح باستخدام مرطب قبل وبعد الريتينول للبشرة الحساسة"
    },
    "en": {
      "subtitle": "Advanced formula to fight wrinkles and renew skin",
      "highlights": [
        "0.2% Retinol serum specially designed to reduce wrinkles and fine lines",
        "Encapsulated Retinol technology for slow release without irritation",
        "Stimulates cell renewal, evens skin tone and minimizes pores",
        "Enriched with Niacinamide and Hyaluronic Acid to soothe and prevent dryness"
      ],
      "science": {
        "intro": "0.2% Micro-encapsulated Retinol ensures gradual release for efficacy with 70% less irritation vs traditional retinol.",
        "points": [
          "Encapsulated Retinol 0.2%: Converts to Retinoic Acid in skin, stimulates collagen and elastin",
          "Niacinamide 5%: Strengthens skin barrier and reduces retinol-associated redness",
          "Hyaluronic Acid: Compensates dryness and maintains hydration during exfoliation",
          "Vitamin E: Antioxidant that protects retinol from oxidation and increases stability"
        ]
      },
      "howTo": "Evening only on clean dry skin. Start twice weekly and increase gradually. Sunscreen in morning is mandatory",
      "tip": "Use sandwich method - moisturizer before and after retinol for sensitive skin"
    },
    "tr": {
      "subtitle": "Kırışıklıklarla savaş ve cilt yenileme için gelişmiş formül",
      "highlights": [
        "Kırışıklık ve ince çizgileri azaltmak için özel %0.2 Retinol serumu",
        "Tahriş olmadan yavaş salınım için Kapsüllenmiş Retinol teknolojisi",
        "Hücre yenilenmesini uyarır, cilt tonunu eşitler ve gözenekleri küçültür",
        "Niacinamide ve Hyaluronik Asit ile zenginleştirilmiş, yatıştırır ve kuruluğu önler"
      ],
      "science": {
        "intro": "%0.2 Mikro-kapsüllenmiş Retinol, geleneksel retinole göre %70 daha az tahrişle etkinlik için kademeli salınım sağlar.",
        "points": [
          "Kapsüllenmiş Retinol %0.2: Ciltte Retinoik Asit'e dönüşür, kolajen ve elastini uyarır",
          "Niacinamide %5: Cilt bariyerini güçlendirir ve retinole bağlı kızarıklığı azaltır",
          "Hyaluronik Asit: Kuruluk telafi eder ve eksfoliasyon sırasında nemi korur",
          "E Vitamini: Retinolü oksidasyondan koruyan ve stabiliteyi artıran antioksidan"
        ]
      },
      "howTo": "Sadece akşamları temiz kuru cilde. Haftada iki kez başlayın ve kademeli artırın. Sabah güneş kremi zorunlu",
      "tip": "Hassas ciltler için sandviç yöntemi - retinolden önce ve sonra nemlendirici"
    },
    "es": {
      "subtitle": "Fórmula avanzada contra las arrugas y para renovar la piel",
      "highlights": [
        "Sérum de retinol al 0,2% diseñado para reducir arrugas y líneas finas",
        "Tecnología de retinol encapsulado para una liberación lenta sin irritación",
        "Estimula la renovación celular, unifica el tono y minimiza los poros",
        "Enriquecido con niacinamida y ácido hialurónico para calmar y evitar la sequedad"
      ],
      "howTo": "Solo por la noche, sobre piel limpia y seca. Empieza dos veces por semana y aumenta poco a poco. El protector solar por la mañana es imprescindible.",
      "science": {
        "intro": "El retinol microencapsulado al 0,2% se libera de forma gradual y es eficaz con un 70% menos de irritación que el retinol convencional.",
        "points": [
          "Retinol encapsulado 0,2%: se convierte en ácido retinoico en la piel y estimula el colágeno y la elastina",
          "Niacinamida 5%: fortalece la barrera cutánea y reduce el enrojecimiento asociado al retinol",
          "Ácido hialurónico: compensa la sequedad y mantiene la hidratación durante la exfoliación",
          "Vitamina E: antioxidante que protege el retinol de la oxidación y aumenta su estabilidad"
        ]
      },
      "tip": "Método sándwich: si tu piel es sensible, aplica hidratante antes y después del retinol."
    },
    "ru": {
      "subtitle": "Современная формула против морщин и для обновления кожи",
      "highlights": [
        "Сыворотка с 0,2% ретинола, созданная для уменьшения морщин и тонких линий",
        "Технология инкапсулированного ретинола: медленное высвобождение без раздражения",
        "Стимулирует обновление клеток, выравнивает тон и уменьшает поры",
        "Обогащена ниацинамидом и гиалуроновой кислотой: успокаивает и предотвращает сухость"
      ],
      "howTo": "Только вечером на чистую сухую кожу. Начните с двух раз в неделю и увеличивайте постепенно. Солнцезащитный крем утром обязателен.",
      "science": {
        "intro": "Микрокапсулированный ретинол 0,2% высвобождается постепенно и работает эффективно, вызывая на 70% меньше раздражения, чем обычный ретинол.",
        "points": [
          "Инкапсулированный ретинол 0,2%: превращается в коже в ретиноевую кислоту, стимулирует коллаген и эластин",
          "Ниацинамид 5%: укрепляет барьер кожи и уменьшает покраснение, связанное с ретинолом",
          "Гиалуроновая кислота: восполняет сухость и сохраняет увлажнение во время отшелушивания",
          "Витамин E: антиоксидант, защищающий ретинол от окисления и повышающий стабильность"
        ]
      },
      "tip": "Метод «сэндвича»: для чувствительной кожи наносите увлажняющий крем до и после ретинола."
    }
  },
  "hyaluronic": {
    "ar": {
      "subtitle": "تركيبة متعددة الاوزان الجزيئية لترطيب عميق وفوري",
      "highlights": [
        "سيروم هيالورونيك اسيد بـ 3 اوزان جزيئية لترطيب كل طبقات البشرة",
        "يجذب ويثبت الماء بالبشرة حتى 1000 مرة وزنه، يملأ الخطوط الدقيقة فوراً",
        "قوام مائي خفيف سريع الامتصاص، لا يترك ملمس لزج ابداً",
        "مناسب لكل انواع البشرة حتى الدهنية والحساسة، آمن للحامل والمرضع"
      ],
      "science": {
        "intro": "تركيبة تجمع 3 اوزان جزيئية من Hyaluronic Acid: منخفض للاختراق العميق، متوسط للطبقة الوسطى، عالي للسطح، مع Vitamin B5 لتعزيز حاجز البشرة.",
        "points": [
          "Low Molecular HA: يخترق الادمة، يحفز الكولاجين ويملأ من الداخل",
          "Medium Molecular HA: يرطب الطبقة الوسطى ويحسن مرونة البشرة",
          "High Molecular HA: يكوّن طبقة واقية على السطح تمنع فقدان الماء TEWL",
          "Panthenol B5: يهدئ التهيج ويعزز حاجز البشرة ويقلل الاحمرار"
        ]
      },
      "howTo": "3-4 نقط على بشرة رطبة صباحاً ومساءً، اتبعيه بمرطب فوراً لحبس الرطوبة. ضروري تكون البشرة مبللة",
      "tip": "يستخدم على وجه مبلل بالماء المقطر قبل التطبيق - الهيالورونيك يحتاج ماء ليسحبه للداخل"
    },
    "en": {
      "subtitle": "Multi-molecular weight formula for deep and instant hydration",
      "highlights": [
        "Hyaluronic acid serum with 3 molecular weights to hydrate all skin layers",
        "Attracts and binds water up to 1000x its weight, plumps fine lines instantly",
        "Lightweight watery texture absorbs fast, never leaves sticky feel",
        "Suitable for all skin types including oily and sensitive, safe for pregnancy"
      ],
      "science": {
        "intro": "Formula combines 3 molecular weights of HA: low for deep penetration, medium for mid-layer, high for surface, with Vitamin B5 to strengthen skin barrier.",
        "points": [
          "Low Molecular HA: Penetrates dermis, stimulates collagen and plumps from within",
          "Medium Molecular HA: Hydrates mid-layer and improves skin elasticity",
          "High Molecular HA: Forms protective surface film preventing TEWL water loss",
          "Panthenol B5: Soothes irritation, strengthens barrier and reduces redness"
        ]
      },
      "howTo": "3-4 drops on damp skin AM & PM, follow immediately with moisturizer to lock hydration. Skin must be wet",
      "tip": "Mist face with water before applying - hyaluronic needs water to pull into skin"
    },
    "tr": {
      "subtitle": "Derin ve anında nemlendirme için çok moleküler ağırlıklı formül",
      "highlights": [
        "Tüm cilt katmanlarını nemlendirmek için 3 moleküler ağırlıklı hyaluronik asit serumu",
        "Ağırlığının 1000 katına kadar su çeker ve tutar, ince çizgileri anında doldurur",
        "Hafif sulu doku hızla emilir, asla yapışkan his bırakmaz",
        "Yağlı ve hassas dahil tüm cilt tiplerine uygun, hamilelikte güvenli"
      ],
      "science": {
        "intro": "Formül 3 moleküler ağırlıkta HA birleştirir: düşük derin nüfuz için, orta orta katman için, yüksek yüzey için, cilt bariyerini güçlendirmek için B5 Vitamini ile.",
        "points": [
          "Düşük Moleküler HA: Dermise nüfuz eder, kolajeni uyarır ve içeriden dolgunlaştırır",
          "Orta Moleküler HA: Orta katmanı nemlendirir ve cilt elastikiyetini artırır",
          "Yüksek Moleküler HA: TEWL su kaybını önleyen koruyucu yüzey filmi oluşturur",
          "Panthenol B5: Tahrişi yatıştırır, bariyeri güçlendirir ve kızarıklığı azaltır"
        ]
      },
      "howTo": "Sabah akşam nemli cilde 3-4 damla, nemi hapsetmek için hemen nemlendirici ile takip edin. Cilt ıslak olmalı",
      "tip": "Uygulamadan önce yüze su püskürtün - hyaluronik cilde çekmek için suya ihtiyaç duyar"
    },
    "es": {
      "subtitle": "Fórmula de varios pesos moleculares para una hidratación profunda e inmediata",
      "highlights": [
        "Sérum de ácido hialurónico con 3 pesos moleculares para hidratar todas las capas de la piel",
        "Atrae y retiene hasta 1000 veces su peso en agua y rellena las líneas finas al instante",
        "Textura acuosa y ligera, de rápida absorción, que nunca deja sensación pegajosa",
        "Apto para todo tipo de pieles, incluidas las grasas y sensibles; seguro durante el embarazo"
      ],
      "howTo": "De 3 a 4 gotas sobre la piel húmeda por la mañana y por la noche; aplica enseguida una crema hidratante para sellar la hidratación. La piel debe estar húmeda.",
      "science": {
        "intro": "La fórmula combina 3 pesos moleculares de ácido hialurónico: bajo para la penetración profunda, medio para la capa intermedia y alto para la superficie, con vitamina B5 para reforzar la barrera cutánea.",
        "points": [
          "AH de bajo peso molecular: penetra en la dermis, estimula el colágeno y da volumen desde dentro",
          "AH de peso molecular medio: hidrata la capa intermedia y mejora la elasticidad de la piel",
          "AH de alto peso molecular: forma una película protectora que evita la pérdida de agua (TEWL)",
          "Pantenol B5: calma la irritación, refuerza la barrera y reduce el enrojecimiento"
        ]
      },
      "tip": "Rocía el rostro con agua antes de aplicar: el ácido hialurónico necesita agua para penetrar en la piel."
    },
    "ru": {
      "subtitle": "Формула с разной молекулярной массой для глубокого и мгновенного увлажнения",
      "highlights": [
        "Сыворотка с гиалуроновой кислотой трёх молекулярных масс увлажняет все слои кожи",
        "Притягивает и удерживает воду, вес которой до 1000 раз превышает её собственный, и мгновенно заполняет тонкие линии",
        "Лёгкая водянистая текстура быстро впитывается и не оставляет липкости",
        "Подходит для всех типов кожи, включая жирную и чувствительную; безопасна при беременности"
      ],
      "howTo": "Нанесите 3–4 капли на влажную кожу утром и вечером, затем сразу нанесите увлажняющий крем, чтобы сохранить влагу. Кожа должна быть влажной.",
      "science": {
        "intro": "Формула сочетает гиалуроновую кислоту трёх молекулярных масс: низкую для глубокого проникновения, среднюю для среднего слоя и высокую для поверхности, а также витамин B5 для укрепления барьера кожи.",
        "points": [
          "ГК низкой молекулярной массы: проникает в дерму, стимулирует коллаген и наполняет изнутри",
          "ГК средней молекулярной массы: увлажняет средний слой и улучшает эластичность кожи",
          "ГК высокой молекулярной массы: образует защитную плёнку и предотвращает потерю влаги (TEWL)",
          "Пантенол B5: успокаивает раздражение, укрепляет барьер и уменьшает покраснение"
        ]
      },
      "tip": "Сбрызните лицо водой перед нанесением: гиалуроновой кислоте нужна вода, чтобы проникнуть в кожу."
    }
  },
  "salicylic": {
    "ar": {
      "subtitle": "تركيبة فعالة لتنظيف المسام ومحاربة حب الشباب",
      "highlights": [
        "سيروم ساليسيليك اسيد بتركيز 2% مصمم خصيصاً للبشرة الدهنية والمعرضة لحب الشباب",
        "حمض BHA يخترق المسام بعمق ويذيب الدهون والرؤوس السوداء",
        "يقشر البشرة بلطف ويقلل الالتهاب والاحمرار المصاحب للحبوب",
        "مدعم بـ Niacinamide و Zinc PCA لتنظيم افراز الدهون وتهدئة البشرة"
      ],
      "science": {
        "intro": "حمض الساليسيليك 2% - التركيز الاقصى المسموح OTC - يعمل كـ keratolytic يذيب الروابط بين خلايا الجلد الميتة داخل المسام.",
        "points": [
          "Salicylic Acid 2%: BHA قابل للذوبان بالدهون، يخترق المسام ويفكك الكوميدون",
          "Niacinamide 4%: ينظم افراز الزهم ويقلل حجم المسام الظاهري",
          "Zinc PCA 1%: مضاد بكتيريا طبيعي يتحكم بالـ P.acnes المسبب لحب الشباب",
          "Aloe Vera: يهدئ التهيج ويعوض الجفاف المحتمل من التقشير"
        ]
      },
      "howTo": "مساءً على بشرة نظيفة وجافة. ابدئي 3 مرات اسبوعياً وزيدي تدريجياً. تجنبي منطقة العين. واقي شمس صباحاً ضروري",
      "tip": "لا تخلطيه مع الريتينول بنفس الليلة. استخدمي الساليسيليك صباحاً والريتينول مساءً"
    },
    "en": {
      "subtitle": "Effective formula to cleanse pores and fight acne",
      "highlights": [
        "2% Salicylic Acid serum specially designed for oily and acne-prone skin",
        "BHA acid penetrates deep into pores dissolving oil and blackheads",
        "Gently exfoliates skin and reduces inflammation and redness from breakouts",
        "Enriched with Niacinamide and Zinc PCA to regulate sebum and soothe skin"
      ],
      "science": {
        "intro": "Salicylic Acid 2% - maximum OTC concentration - acts as keratolytic dissolving bonds between dead cells inside pores.",
        "points": [
          "Salicylic Acid 2%: Oil-soluble BHA, penetrates pores and breaks down comedones",
          "Niacinamide 4%: Regulates sebum production and reduces visible pore size",
          "Zinc PCA 1%: Natural antibacterial controlling P.acnes causing acne",
          "Aloe Vera: Soothes irritation and compensates potential dryness from exfoliation"
        ]
      },
      "howTo": "Evening on clean dry skin. Start 3x weekly and increase gradually. Avoid eye area. Sunscreen in morning is mandatory",
      "tip": "Don't mix with retinol same night. Use salicylic AM and retinol PM"
    },
    "tr": {
      "subtitle": "Gözenekleri temizleyen ve akneyle savaşan etkili formül",
      "highlights": [
        "Yağlı ve akne eğilimli ciltler için özel %2 Salisilik Asit serumu",
        "BHA asidi gözeneklere derinlemesine nüfuz eder, yağ ve siyah noktaları çözer",
        "Cildi nazikçe eksfoliye eder, sivilce kaynaklı iltihap ve kızarıklığı azaltır",
        "Sebum düzenlemesi ve yatıştırma için Niacinamide ve Zinc PCA ile zenginleştirilmiş"
      ],
      "science": {
        "intro": "Salisilik Asit %2 - maksimum OTC konsantrasyonu - gözenek içindeki ölü hücre bağlarını çözen keratolitik olarak çalışır.",
        "points": [
          "Salisilik Asit %2: Yağda çözünen BHA, gözeneklere nüfuz eder ve komedonları parçalar",
          "Niacinamide %4: Sebum üretimini düzenler ve görünür gözenek boyutunu azaltır",
          "Zinc PCA %1: Akneye neden olan P.acnes'i kontrol eden doğal antibakteriyel",
          "Aloe Vera: Tahrişi yatıştırır ve eksfoliasyondan kaynaklı kuruluğu telafi eder"
        ]
      },
      "howTo": "Akşamları temiz kuru cilde. Haftada 3 kez başlayın ve kademeli artırın. Göz çevresinden kaçının. Sabah güneş kremi zorunlu",
      "tip": "Retinol ile aynı gece karıştırmayın. Salisilik sabah, retinol akşam kullanın"
    },
    "es": {
      "subtitle": "Fórmula eficaz para limpiar los poros y combatir el acné",
      "highlights": [
        "Sérum de ácido salicílico al 2% diseñado para pieles grasas y propensas al acné",
        "El ácido BHA penetra a fondo en los poros y disuelve el sebo y los puntos negros",
        "Exfolia con suavidad y reduce la inflamación y el enrojecimiento de los granos",
        "Enriquecido con niacinamida y Zinc PCA para regular el sebo y calmar la piel"
      ],
      "howTo": "Por la noche, sobre piel limpia y seca. Empieza 3 veces por semana y aumenta poco a poco. Evita el contorno de ojos. El protector solar por la mañana es imprescindible.",
      "science": {
        "intro": "Ácido salicílico al 2%, la concentración máxima de venta libre: actúa como queratolítico y disuelve los enlaces entre las células muertas dentro de los poros.",
        "points": [
          "Ácido salicílico 2%: BHA liposoluble que penetra en los poros y descompone los comedones",
          "Niacinamida 4%: regula la producción de sebo y reduce el tamaño visible de los poros",
          "Zinc PCA 1%: antibacteriano natural que controla la P. acnes, causante del acné",
          "Aloe vera: calma la irritación y compensa la posible sequedad de la exfoliación"
        ]
      },
      "tip": "No lo mezcles con retinol la misma noche: usa el salicílico por la mañana y el retinol por la noche."
    },
    "ru": {
      "subtitle": "Эффективная формула для очищения пор и борьбы с акне",
      "highlights": [
        "Сыворотка с 2% салициловой кислоты для жирной и склонной к акне кожи",
        "BHA-кислота глубоко проникает в поры и растворяет себум и чёрные точки",
        "Мягко отшелушивает, уменьшает воспаление и покраснение от высыпаний",
        "Обогащена ниацинамидом и Zinc PCA для регуляции себума и успокоения кожи"
      ],
      "howTo": "Вечером на чистую сухую кожу. Начните с 3 раз в неделю и увеличивайте постепенно. Избегайте области вокруг глаз. Солнцезащитный крем утром обязателен.",
      "science": {
        "intro": "Салициловая кислота 2% — максимальная концентрация для безрецептурных средств — действует как кератолитик и разрушает связи между омертвевшими клетками внутри пор.",
        "points": [
          "Салициловая кислота 2%: жирорастворимая BHA, проникает в поры и разрушает комедоны",
          "Ниацинамид 4%: регулирует выработку себума и уменьшает видимый размер пор",
          "Zinc PCA 1%: природный антибактериальный компонент, контролирующий P. acnes, вызывающую акне",
          "Алоэ вера: успокаивает раздражение и компенсирует возможную сухость от отшелушивания"
        ]
      },
      "tip": "Не используйте с ретинолом в один вечер: салициловую кислоту применяйте утром, а ретинол — вечером."
    }
  },
  "cleanser": {
    "ar": {
      "subtitle": "غسول وجه لطيف ومرطّب مناسب لجميع أنواع البشرة.",
      "highlights": [
        "مناسب لجميع أنواع البشرة",
        "تركيبة غير مهيّجة",
        "مرطّب ولطيف برغوة خفيفة",
        "بالنياسيناميد ومستخلص الصبار وحمض الهيالورونيك والبانثينول"
      ],
      "howTo": "دلّكه بلطف على بشرة مبللة ثم اشطفه بالماء، صباحاً ومساءً."
    },
    "en": {
      "subtitle": "A gentle, hydrating facial cleanser for all skin types.",
      "highlights": [
        "For all skin types",
        "Non-irritating formula",
        "Hydrating, gentle and mildly foaming",
        "With niacinamide, aloe vera extract, hyaluronic acid and panthenol"
      ],
      "howTo": "Massage onto damp skin, then rinse with water. Use morning and evening."
    },
    "tr": {
      "subtitle": "Tüm cilt tipleri için nazik ve nemlendirici yüz temizleyici.",
      "highlights": [
        "Tüm cilt tiplerine uygun",
        "Tahriş etmeyen formül",
        "Nemlendirici, nazik ve hafif köpüren yapı",
        "Niacinamide, aloe vera özü, hyaluronik asit ve panthenol içerir"
      ],
      "howTo": "Nemli cilde masaj yaparak uygulayın, ardından suyla durulayın. Sabah ve akşam kullanın."
    },
    "es": {
      "subtitle": "Limpiador facial suave e hidratante para todo tipo de pieles.",
      "highlights": [
        "Apto para todo tipo de pieles",
        "Fórmula no irritante",
        "Hidratante, suave y de espuma ligera",
        "Con niacinamida, extracto de aloe vera, ácido hialurónico y pantenol"
      ],
      "howTo": "Masajea sobre la piel húmeda y aclara con agua. Úsalo por la mañana y por la noche."
    },
    "ru": {
      "subtitle": "Мягкое увлажняющее средство для умывания для всех типов кожи.",
      "highlights": [
        "Для всех типов кожи",
        "Не раздражает кожу",
        "Увлажняет, мягко очищает, слегка пенится",
        "С ниацинамидом, экстрактом алоэ вера, гиалуроновой кислотой и пантенолом"
      ],
      "howTo": "Помассируйте на влажной коже и смойте водой. Используйте утром и вечером."
    }
  },
  "niacinamide": {
    "ar": {
      "subtitle": "سيروم نياسيناميد 5% مع فيتامين B5 بتركيبة مضادة للشوائب ومصغّرة للمسام.",
      "highlights": [
        "نياسيناميد 5% مع فيتامين B5",
        "تركيبة مضادة للشوائب ومصغّرة للمسام",
        "تحسّن مظهر المسام",
        "تحسّن لون البشرة"
      ],
      "howTo": "ضع بضع قطرات على بشرة نظيفة صباحاً ومساءً."
    },
    "en": {
      "subtitle": "A 5% niacinamide serum with vitamin B5: an anti-blemish, pore-minimizing formula.",
      "highlights": [
        "5% niacinamide with vitamin B5",
        "Anti-blemish, pore-minimizing formula",
        "Refines pores",
        "Improves skin tone"
      ],
      "howTo": "Apply a few drops to clean skin, morning and evening."
    },
    "tr": {
      "subtitle": "B5 vitamini içeren %5 niacinamide serumu: lekelere karşı, gözenek küçültücü formül.",
      "highlights": [
        "B5 vitaminli %5 niacinamide",
        "Leke karşıtı, gözenek küçültücü formül",
        "Gözenek görünümünü inceltir",
        "Cilt tonunu iyileştirir"
      ],
      "howTo": "Temiz cilde birkaç damla uygulayın, sabah ve akşam."
    },
    "es": {
      "subtitle": "Sérum de niacinamida al 5% con vitamina B5: fórmula antiimperfecciones que minimiza los poros.",
      "highlights": [
        "Niacinamida al 5% con vitamina B5",
        "Fórmula antiimperfecciones que minimiza los poros",
        "Afina los poros",
        "Mejora el tono de la piel"
      ],
      "howTo": "Aplica unas gotas sobre la piel limpia por la mañana y por la noche."
    },
    "ru": {
      "subtitle": "Сыворотка с 5% ниацинамида и витамином B5: формула против несовершенств, уменьшающая поры.",
      "highlights": [
        "5% ниацинамида с витамином B5",
        "Формула против несовершенств, уменьшающая поры",
        "Делает поры менее заметными",
        "Улучшает тон кожи"
      ],
      "howTo": "Нанесите несколько капель на чистую кожу утром и вечером."
    }
  },
  "moisturizer": {
    "ar": {
      "subtitle": "كريم مرطّب ومهدّئ بفيتامين B5 بتركيز 2%.",
      "highlights": [
        "كريم مرطّب بفيتامين B5 بتركيز 2%",
        "تركيبة Derma Moisture",
        "يهدّئ البشرة ويرطّبها"
      ],
      "howTo": "ضعه على بشرة نظيفة صباحاً ومساءً."
    },
    "en": {
      "subtitle": "A calming, hydrating cream with 2% vitamin B5.",
      "highlights": [
        "Hydrating cream with 2% vitamin B5",
        "Derma Moisture formula",
        "Calms and hydrates the skin"
      ],
      "howTo": "Apply to clean skin, morning and evening."
    },
    "tr": {
      "subtitle": "%2 B5 vitamini içeren yatıştırıcı ve nemlendirici krem.",
      "highlights": [
        "%2 B5 vitaminli nemlendirici krem",
        "Derma Moisture formülü",
        "Cildi yatıştırır ve nemlendirir"
      ],
      "howTo": "Temiz cilde sabah ve akşam uygulayın."
    },
    "es": {
      "subtitle": "Crema hidratante y calmante con 2% de vitamina B5.",
      "highlights": [
        "Crema hidratante con 2% de vitamina B5",
        "Fórmula Derma Moisture",
        "Calma e hidrata la piel"
      ],
      "howTo": "Aplícala sobre la piel limpia por la mañana y por la noche."
    },
    "ru": {
      "subtitle": "Успокаивающий увлажняющий крем с 2% витамина B5.",
      "highlights": [
        "Увлажняющий крем с 2% витамина B5",
        "Формула Derma Moisture",
        "Успокаивает и увлажняет кожу"
      ],
      "howTo": "Наносите на чистую кожу утром и вечером."
    }
  },
  "sunscreen": {
    "ar": {
      "subtitle": "كريم مرطّب واقٍ من الشمس بحماية واسعة الطيف من الأشعة UVA وUVB. خفيف ولا يترك ملمساً دهنياً.",
      "highlights": [
        "حماية واسعة الطيف SPF 50 (UVA/UVB)",
        "مقاوم للماء والعرق",
        "خفيف وغير دهني",
        "ترطيب يومي"
      ],
      "howTo": "ضع كمية وفيرة قبل 15 دقيقة من التعرض للشمس وأعد الوضع عند الحاجة."
    },
    "en": {
      "subtitle": "Moisture sun cream with broad-spectrum UVA/UVB protection. Lightweight and non-greasy.",
      "highlights": [
        "SPF 50 broad-spectrum protection (UVA/UVB)",
        "Water and sweat resistant",
        "Lightweight and non-greasy",
        "Daily moisture"
      ],
      "howTo": "Apply generously 15 minutes before sun exposure and reapply when needed."
    },
    "tr": {
      "subtitle": "Geniş spektrumlu UVA/UVB korumalı nemlendirici güneş kremi. Hafif ve yağlı his bırakmaz.",
      "highlights": [
        "SPF 50 geniş spektrumlu koruma (UVA/UVB)",
        "Suya ve tere dayanıklı",
        "Hafif ve yağlı his bırakmaz",
        "Günlük nemlendirme"
      ],
      "howTo": "Güneşe çıkmadan 15 dakika önce bol miktarda sürün, gerektiğinde yenileyin."
    },
    "es": {
      "subtitle": "Crema solar hidratante con protección de amplio espectro UVA/UVB. Ligera y no grasa.",
      "highlights": [
        "Protección SPF 50 de amplio espectro (UVA/UVB)",
        "Resistente al agua y al sudor",
        "Ligera y no grasa",
        "Hidratación diaria"
      ],
      "howTo": "Aplica generosamente 15 minutos antes de la exposición al sol y repite cuando sea necesario."
    },
    "ru": {
      "subtitle": "Увлажняющий солнцезащитный крем с защитой широкого спектра UVA/UVB. Лёгкий, не оставляет жирного ощущения.",
      "highlights": [
        "Защита SPF 50 широкого спектра (UVA/UVB)",
        "Устойчив к воде и поту",
        "Лёгкий и нежирный",
        "Ежедневное увлажнение"
      ],
      "howTo": "Наносите щедро за 15 минут до выхода на солнце и обновляйте при необходимости."
    }
  },
  "brightening": {
    "ar": {
      "subtitle": "كريم تفتيح بالألفا أربيوتين مع عامل حماية SPF 30.",
      "highlights": [
        "كريم تفتيح بالألفا أربيوتين مع SPF 30",
        "بشرة أكثر إشراقاً ولوناً أكثر تجانساً بشكل ملحوظ",
        "تفتيح متقدّم لبشرة نقية",
        "يمنح البشرة إشراقاً"
      ],
      "howTo": "ضع طبقة متساوية على بشرة نظيفة. يحتوي على SPF 30، فأعد وضعه عند التعرض للشمس."
    },
    "en": {
      "subtitle": "An alpha arbutin brightening cream with SPF 30.",
      "highlights": [
        "Alpha arbutin brightening cream with SPF 30",
        "Visibly brighter, more even-toned skin",
        "Advanced brightening for a flawless complexion",
        "Adds radiance"
      ],
      "howTo": "Apply an even layer to clean skin. It contains SPF 30, so reapply when exposed to the sun."
    },
    "tr": {
      "subtitle": "SPF 30 içeren alfa arbutin aydınlatıcı krem.",
      "highlights": [
        "SPF 30'lu alfa arbutin aydınlatıcı krem",
        "Gözle görülür şekilde daha aydınlık ve eşit tonlu cilt",
        "Kusursuz bir cilt için gelişmiş aydınlatma",
        "Işıltı kazandırır"
      ],
      "howTo": "Temiz cilde eşit bir tabaka halinde uygulayın. SPF 30 içerir; güneşe maruz kaldığınızda yenileyin."
    },
    "es": {
      "subtitle": "Crema iluminadora con alfa arbutina y SPF 30.",
      "highlights": [
        "Crema iluminadora con alfa arbutina y SPF 30",
        "Piel visiblemente más luminosa y de tono más uniforme",
        "Iluminación avanzada para una tez impecable",
        "Aporta luminosidad"
      ],
      "howTo": "Aplica una capa uniforme sobre la piel limpia. Contiene SPF 30: repite la aplicación con la exposición solar."
    },
    "ru": {
      "subtitle": "Осветляющий крем с альфа-арбутином и SPF 30.",
      "highlights": [
        "Осветляющий крем с альфа-арбутином и SPF 30",
        "Заметно более сияющая кожа с более ровным тоном",
        "Продвинутое осветление для безупречного цвета лица",
        "Добавляет сияния"
      ],
      "howTo": "Нанесите ровным слоем на чистую кожу. Содержит SPF 30: обновляйте нанесение при пребывании на солнце."
    }
  },
  "cell-renewal": {
    "ar": {
      "subtitle": "سيروم مُرمِّم بزيت السلمون يسرّع تجدد خلايا البشرة الطبيعي.",
      "highlights": [
        "سيروم 5% بزيت السلمون",
        "يسرّع تجدد الخلايا الطبيعي ليكشف طبقات بشرة أكثر نضارة وصحة",
        "يمنح البشرة إشراقاً ولوناً متجانساً",
        "تأثير ترميمي"
      ],
      "howTo": "ضع بضع قطرات على الوجه والرقبة النظيفين ودلّكها بلطف."
    },
    "en": {
      "subtitle": "A repairing serum with salmon oil that accelerates natural cell turnover.",
      "highlights": [
        "5% serum with salmon oil",
        "Accelerates natural cell turnover to reveal fresher, healthier skin layers",
        "Restores a luminous, even tone",
        "Repairing effect"
      ],
      "howTo": "Apply a few drops to clean skin on the face and neck and massage gently."
    },
    "tr": {
      "subtitle": "Doğal hücre yenilenmesini hızlandıran, somon yağlı onarıcı serum.",
      "highlights": [
        "Somon yağlı %5 serum",
        "Doğal hücre yenilenmesini hızlandırarak daha taze ve sağlıklı cilt katmanlarını ortaya çıkarır",
        "Parlak ve eşit bir ton kazandırır",
        "Onarıcı etki"
      ],
      "howTo": "Temiz yüze ve boyna birkaç damla uygulayın ve nazikçe masaj yapın."
    },
    "es": {
      "subtitle": "Sérum reparador con aceite de salmón que acelera la renovación natural de las células.",
      "highlights": [
        "Sérum al 5% con aceite de salmón",
        "Acelera el recambio celular natural para revelar capas de piel más frescas y sanas",
        "Devuelve un tono luminoso y uniforme",
        "Efecto reparador"
      ],
      "howTo": "Aplica unas gotas sobre el rostro y el cuello limpios y masajea con suavidad."
    },
    "ru": {
      "subtitle": "Восстанавливающая сыворотка с лососёвым маслом ускоряет естественное обновление клеток.",
      "highlights": [
        "Сыворотка 5% с лососёвым маслом",
        "Ускоряет естественное обновление клеток и открывает более свежие и здоровые слои кожи",
        "Возвращает сияющий и ровный тон",
        "Восстанавливающее действие"
      ],
      "howTo": "Нанесите несколько капель на чистую кожу лица и шеи и мягко помассируйте."
    }
  }
}

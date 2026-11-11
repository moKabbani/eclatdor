import type { Locale } from '../i18n'
import type { ArticleCopy } from './types'

const copy: Record<Locale, ArticleCopy> = {
  en: {
    intro:
      "Sensitive skin stings, flushes or itches more easily than it should. Most of the time that means the skin barrier, the outer layer that keeps water in and irritants out, isn't doing its job well. The answer is rarely a miracle product. It's removing what stresses the skin and rebuilding that barrier, step by step.",
    sections: [
      {
        heading: 'Signs your skin is sensitive',
        list: [
          'Stinging or burning when you apply products, even gentle ones',
          'Redness or flushing that comes and goes',
          'A tight feeling after washing',
          'Flaky patches and oiliness at the same time',
          'Reacting to weather changes, wind, heat or cold',
        ],
        after: [
          'Persistent redness, visible veins, rashes or intense itching can point to conditions such as rosacea, eczema or an allergy. Those deserve a dermatologist\'s diagnosis.',
        ],
      },
      {
        heading: 'Simplify first',
        text: [
          'Many reactions come from doing too much: several actives at once, frequent exfoliation, fragranced products. For 2–4 weeks, strip your routine back to three steps: cleanser, moisturiser and sunscreen. It gives your skin room to calm down and shows you what it actually needs.',
          'During this reset, resist the urge to test anything new, even products that promise to soothe. Most people feel calmer, more comfortable skin within one to two weeks, although a damaged barrier can take a month or more to fully recover. If nothing improves at all after a month of this simple routine, that is a good reason to see a dermatologist.',
        ],
      },
      {
        heading: 'Cleanse gently',
        text: [
          '[[cleanser]] is non-irritating and hydrating, with aloe vera and panthenol. Use lukewarm water, your fingertips and a light touch, then pat dry. Avoid hot water, cleansing brushes and rough towels: friction is one of the most common hidden irritants.',
        ],
      },
      {
        heading: 'Rebuild hydration and seal it in',
        text: [
          'A weakened barrier loses water easily, and dehydrated skin reacts more. Press a few drops of [[hyaluronic]] onto damp skin. It contains panthenol and allantoin, which are known for soothing, and it is suitable for sensitive skin.',
          'Follow straight away with [[moisturizer]]. Its 2% vitamin B5 calms and hydrates, helping the barrier recover. Use both morning and evening, even if your skin also feels oily.',
        ],
      },
      {
        heading: 'Protect from the sun',
        text: [
          'UV light inflames sensitive skin and makes redness worse. [[sunscreen]] is lightweight and gives broad-spectrum protection. As with any new product, patch test it first, then make it a daily habit.',
        ],
      },
      {
        heading: 'Reintroducing actives',
        text: [
          'Once your skin has been calm for a few weeks, you can add actives back, one at a time, at least two weeks apart:',
        ],
        list: [
          '**First:** [[niacinamide]], which supports the barrier and calms redness.',
          '**Next:** [[vitamin-c]], every other morning to start.',
          '**Last, if at all:** retinol, twice a week with the "sandwich" method (moisturiser, retinol, moisturiser).',
        ],
      },
      {
        heading: 'How to patch test',
        list: [
          'Apply a small amount behind your ear or along your jawline.',
          'Repeat twice a day for 5–7 days.',
          'Watch for redness, itching, bumps or burning.',
          'If nothing happens, try a small area of your face before using it everywhere.',
        ],
      },
      {
        heading: 'Common triggers to watch',
        list: [
          '**Fragrance and essential oils:** among the most frequent causes of stinging and redness.',
          '**Alcohol-heavy toners:** they can leave skin dry and tight.',
          '**Scrubs and frequent exfoliation:** they wear down the barrier you are trying to rebuild.',
          '**Very hot showers, saunas and steam:** heat makes flushing worse.',
          '**Several new products at once:** if something reacts, you won\'t know which one it was.',
        ],
        after: [
          'Not every sensitive skin reacts to the same things. A short note of each new product you try, and how your skin felt over the next few days, quickly shows you your own patterns.',
        ],
      },
    ],
    summary:
      'Simplify, cleanse gently, hydrate and seal, and protect with SPF every day. Add actives back slowly, one at a time, after a patch test, and see a dermatologist if redness or itching persists.',
  },

  ar: {
    intro:
      'البشرة الحساسة تلسع أو تحمرّ أو تحكّ بسهولة أكبر مما ينبغي. وفي معظم الأحيان يعني ذلك أن الحاجز الواقي للبشرة، وهو الطبقة الخارجية التي تحفظ الماء وتمنع المهيّجات، لا يؤدي عمله جيداً. ونادراً ما يكون الحل منتجاً سحرياً؛ بل هو إزالة ما يُجهد البشرة وإعادة بناء هذا الحاجز خطوة بخطوة.',
    sections: [
      {
        heading: 'علامات تدل على أن بشرتك حساسة',
        list: [
          'لسع أو حرقان عند وضع المنتجات، حتى اللطيفة منها',
          'احمرار أو تورّد يظهر ويختفي',
          'شعور بالشدّ بعد غسل الوجه',
          'بقع متقشرة ولمعان دهني في الوقت نفسه',
          'التأثر بتغيّرات الطقس والرياح والحرارة والبرد',
        ],
        after: [
          'الاحمرار المستمر أو ظهور الأوعية الدموية أو الطفح الجلدي أو الحكة الشديدة قد تشير إلى حالات مثل الوردية أو الإكزيما أو الحساسية، وهذه تستحق تشخيص طبيب الجلدية.',
        ],
      },
      {
        heading: 'ابدأ بالتبسيط',
        text: [
          'كثير من ردود الفعل سببها الإفراط: عدة مكونات فعّالة في وقت واحد، وتقشير متكرر، ومنتجات معطّرة. لمدة 2-4 أسابيع اختصر روتينك إلى ثلاث خطوات: غسول ومرطب وواقي شمس. هذا يمنح بشرتك فرصة لتهدأ ويوضح لك ما تحتاجه فعلاً.',
          'خلال هذه الفترة قاوم الرغبة في تجربة أي منتج جديد، حتى المنتجات التي تَعِد بالتهدئة. يشعر معظم الناس ببشرة أهدأ وأكثر راحة خلال أسبوع إلى أسبوعين، لكن الحاجز المتضرر قد يحتاج شهراً أو أكثر ليتعافى تماماً. وإذا لم تلاحظ أي تحسن بعد شهر من هذا الروتين البسيط، فهذا سبب وجيه لمراجعة طبيب الجلدية.',
        ],
      },
      {
        heading: 'نظّف بلطف',
        text: [
          '[[cleanser]] غير مهيّج ومرطّب ويحتوي على الصبار والبانثينول. استخدم ماءً فاتراً وأطراف أصابعك ولمسة خفيفة، ثم جفّف بالتربيت. تجنّب الماء الساخن وفُرش التنظيف والمناشف الخشنة، فالاحتكاك من أكثر المهيّجات الخفية شيوعاً.',
        ],
      },
      {
        heading: 'أعد بناء الترطيب واحبسه داخل البشرة',
        text: [
          'الحاجز الضعيف يفقد الماء بسهولة، والبشرة الجافة من الماء تتفاعل أكثر. اضغط بضع قطرات من [[hyaluronic]] على بشرة رطبة؛ فهو يحتوي على البانثينول والألانتوين المعروفين بخصائصهما المهدّئة، ومناسب للبشرة الحساسة.',
          'ثم ضع مباشرةً [[moisturizer]] الذي يهدّئ البشرة ويرطبها بفضل فيتامين B5 بتركيز 2%، ويساعد الحاجز على التعافي. استخدمهما صباحاً ومساءً حتى لو كانت بشرتك دهنية أيضاً.',
        ],
      },
      {
        heading: 'احمِ بشرتك من الشمس',
        text: [
          'تُهيّج الأشعة فوق البنفسجية البشرة الحساسة وتزيد الاحمرار. [[sunscreen]] خفيف ويوفر حماية واسعة الطيف. وكما مع أي منتج جديد، اختبره على جزء صغير أولاً، ثم اجعله عادة يومية.',
        ],
      },
      {
        heading: 'إعادة إدخال المكونات الفعّالة',
        text: ['بعد أن تهدأ بشرتك لبضعة أسابيع يمكنك إعادة المكونات الفعّالة واحداً تلو الآخر، بفاصل أسبوعين على الأقل:'],
        list: [
          '**أولاً:** [[niacinamide]] الذي يدعم الحاجز الواقي ويهدّئ الاحمرار.',
          '**بعده:** [[vitamin-c]] يوماً بعد يوم في البداية.',
          '**أخيراً، إن احتجت إليه:** الريتينول مرتين أسبوعياً بطريقة "الساندويتش" (مرطب، ثم ريتينول، ثم مرطب).',
        ],
      },
      {
        heading: 'كيف تختبر المنتج على جزء صغير',
        list: [
          'ضع كمية صغيرة خلف أذنك أو على خط الفك.',
          'كرّر ذلك مرتين يومياً لمدة 5-7 أيام.',
          'راقب ظهور احمرار أو حكة أو نتوءات أو حرقان.',
          'إذا لم يحدث شيء، جرّبه على منطقة صغيرة من وجهك قبل استخدامه على الوجه كله.',
        ],
      },
      {
        heading: 'محفّزات شائعة يجب الانتباه لها',
        list: [
          '**العطور والزيوت العطرية:** من أكثر أسباب اللسع والاحمرار شيوعاً.',
          '**التونر الغني بالكحول:** قد يترك البشرة جافة ومشدودة.',
          '**المقشّرات والتقشير المتكرر:** تُضعف الحاجز الذي تحاول إعادة بنائه.',
          '**الاستحمام بماء شديد السخونة والساونا والبخار:** الحرارة تزيد التورّد.',
          '**عدة منتجات جديدة في وقت واحد:** إذا حدث تفاعل فلن تعرف أيها السبب.',
        ],
        after: [
          'لا تتفاعل كل بشرة حساسة مع الأشياء نفسها. دوّن ملاحظة قصيرة عن كل منتج جديد تجرّبه وكيف شعرت بشرتك في الأيام التالية، وستكتشف سريعاً الأنماط الخاصة بك.',
        ],
      },
    ],
    summary:
      'بسّط روتينك، ونظّف بلطف، ورطّب واحبس الرطوبة، واحمِ بشرتك بواقي الشمس يومياً. أعد المكونات الفعّالة ببطء وواحداً تلو الآخر بعد اختبارها، وراجع طبيب الجلدية إذا استمر الاحمرار أو الحكة.',
  },

  tr: {
    intro:
      'Hassas cilt olması gerekenden daha kolay batar, kızarır ya da kaşınır. Çoğu zaman bu, suyu içeride tutan ve tahriş edicileri dışarıda bırakan dış katman olan cilt bariyerinin görevini iyi yapamadığı anlamına gelir. Çözüm nadiren mucizevi bir üründür; cildi zorlayan şeyleri ortadan kaldırmak ve bu bariyeri adım adım yeniden inşa etmektir.',
    sections: [
      {
        heading: 'Cildinizin hassas olduğunu gösteren işaretler',
        list: [
          'Nazik olanlar dahil ürün uygularken batma ya da yanma',
          'Gelip geçen kızarıklık ya da kızarma',
          'Yüzü yıkadıktan sonra gerginlik hissi',
          'Aynı anda pul pul bölgeler ve yağlanma',
          'Hava değişimlerine, rüzgâra, sıcağa veya soğuğa tepki verme',
        ],
        after: [
          'Geçmeyen kızarıklık, görünür kılcal damarlar, döküntü ya da yoğun kaşıntı rozasea, egzama veya alerji gibi durumlara işaret edebilir. Bunlar bir dermatoloğun tanı koymasını gerektirir.',
        ],
      },
      {
        heading: 'Önce sadeleştirin',
        text: [
          'Tepkilerin çoğu aşırılıktan kaynaklanır: aynı anda birkaç aktif, sık peeling, parfümlü ürünler. 2-4 hafta boyunca rutininizi üç adıma indirin: temizleyici, nemlendirici ve güneş koruyucu. Bu, cildinize sakinleşmesi için alan tanır ve gerçekte neye ihtiyaç duyduğunu gösterir.',
          'Bu dönemde, yatıştırma vaat edenler dahil yeni bir şey deneme isteğine karşı koyun. Çoğu kişi bir iki hafta içinde daha sakin ve rahat bir cilt hisseder; ancak hasar görmüş bir bariyerin tamamen toparlanması bir ay veya daha uzun sürebilir. Bu sade rutinle bir ayın sonunda hiçbir iyileşme olmazsa, bu bir dermatoloğa gitmek için iyi bir nedendir.',
        ],
      },
      {
        heading: 'Nazikçe temizleyin',
        text: [
          '[[cleanser]] tahriş etmez ve nem verir; aloe vera ve panthenol içerir. Ilık su, parmak uçları ve hafif dokunuşlar kullanın, ardından tampon yaparak kurulayın. Sıcak sudan, temizleme fırçalarından ve sert havlulardan kaçının: sürtünme en yaygın gizli tahriş edicilerden biridir.',
        ],
      },
      {
        heading: 'Nemi yeniden kazandırın ve içeride tutun',
        text: [
          'Zayıflamış bir bariyer suyu kolayca kaybeder, susuz kalan cilt de daha çok tepki verir. Nemli cilde birkaç damla [[hyaluronic]] bastırın. Yatıştırıcı özellikleriyle bilinen panthenol ve allantoin içerir ve hassas ciltler için uygundur.',
          'Hemen ardından [[moisturizer]] uygulayın. İçerdiği %2 B5 vitamini cildi yatıştırıp nemlendirir ve bariyerin toparlanmasına yardımcı olur. Cildiniz aynı zamanda yağlı olsa bile ikisini sabah ve akşam kullanın.',
        ],
      },
      {
        heading: 'Güneşten koruyun',
        text: [
          'UV ışınları hassas cildi tahriş eder ve kızarıklığı artırır. [[sunscreen]] hafiftir ve geniş spektrumlu koruma sağlar. Her yeni üründe olduğu gibi önce küçük bir alanda deneyin, sonra günlük alışkanlık haline getirin.',
        ],
      },
      {
        heading: 'Aktifleri yeniden eklemek',
        text: ['Cildiniz birkaç hafta sakin kaldıktan sonra aktifleri tek tek ve en az iki hafta arayla yeniden ekleyebilirsiniz:'],
        list: [
          '**İlk olarak:** bariyeri destekleyen ve kızarıklığı yatıştıran [[niacinamide]].',
          '**Sonra:** başlangıçta gün aşırı sabah [[vitamin-c]].',
          '**En son, gerekirse:** "sandviç" yöntemiyle (nemlendirici, retinol, nemlendirici) haftada iki kez retinol.',
        ],
      },
      {
        heading: 'Yama testi nasıl yapılır?',
        list: [
          'Az miktarda ürünü kulağınızın arkasına ya da çene hattınıza sürün.',
          '5-7 gün boyunca günde iki kez tekrarlayın.',
          'Kızarıklık, kaşıntı, kabarıklık veya yanma olup olmadığını izleyin.',
          'Hiçbir şey olmazsa tüm yüzünüze uygulamadan önce yüzünüzün küçük bir bölgesinde deneyin.',
        ],
      },
      {
        heading: 'Dikkat edilmesi gereken yaygın tetikleyiciler',
        list: [
          '**Parfüm ve uçucu yağlar:** batma ve kızarıklığın en sık nedenlerindendir.',
          '**Yoğun alkollü tonikler:** cildi kuru ve gergin bırakabilir.',
          '**Peelingler ve sık eksfoliasyon:** yeniden inşa etmeye çalıştığınız bariyeri yıpratır.',
          '**Çok sıcak duşlar, sauna ve buhar:** ısı kızarmayı artırır.',
          '**Aynı anda birkaç yeni ürün:** bir tepki olursa hangisinden kaynaklandığını bilemezsiniz.',
        ],
        after: [
          'Her hassas cilt aynı şeylere tepki vermez. Denediğiniz her yeni ürünü ve sonraki birkaç gün cildinizin nasıl hissettiğini kısaca not etmek, kendi örüntülerinizi hızla görmenizi sağlar.',
        ],
      },
    ],
    summary:
      'Sadeleştirin, nazikçe temizleyin, nem verip kilitleyin ve her gün SPF ile koruyun. Aktifleri yama testinden sonra yavaşça ve tek tek geri ekleyin; kızarıklık veya kaşıntı geçmezse bir dermatoloğa danışın.',
  },

  es: {
    intro:
      'La piel sensible pica, se enrojece o escuece con más facilidad de la debida. Casi siempre significa que la barrera cutánea, la capa externa que retiene el agua y frena a los irritantes, no está haciendo bien su trabajo. La solución rara vez es un producto milagroso: consiste en eliminar lo que estresa la piel y reconstruir esa barrera paso a paso.',
    sections: [
      {
        heading: 'Señales de que tu piel es sensible',
        list: [
          'Escozor o ardor al aplicar productos, incluso los suaves',
          'Rojeces o rubor que aparecen y desaparecen',
          'Sensación de tirantez después de lavarte',
          'Zonas descamadas y brillo graso a la vez',
          'Reacción a los cambios de tiempo, el viento, el calor o el frío',
        ],
        after: [
          'El enrojecimiento persistente, las venitas visibles, las erupciones o el picor intenso pueden indicar afecciones como rosácea, eccema o una alergia. Esos casos merecen el diagnóstico de un dermatólogo.',
        ],
      },
      {
        heading: 'Primero, simplifica',
        text: [
          'Muchas reacciones vienen de hacer demasiado: varios activos a la vez, exfoliación frecuente, productos perfumados. Durante 2-4 semanas, reduce tu rutina a tres pasos: limpiador, crema y protector solar. Así tu piel tiene margen para calmarse y te muestra lo que realmente necesita.',
          'Durante este reinicio, resiste la tentación de probar cualquier cosa nueva, incluso productos que prometen calmar. La mayoría de las personas nota la piel más tranquila y cómoda en una o dos semanas, aunque una barrera dañada puede tardar un mes o más en recuperarse del todo. Si tras un mes con esta rutina sencilla no mejora nada, es un buen motivo para acudir al dermatólogo.',
        ],
      },
      {
        heading: 'Limpia con suavidad',
        text: [
          'El [[cleanser]] no irrita e hidrata, con aloe vera y pantenol. Usa agua tibia, las yemas de los dedos y un toque ligero, y después seca a toquecitos. Evita el agua caliente, los cepillos limpiadores y las toallas ásperas: la fricción es uno de los irritantes ocultos más habituales.',
        ],
      },
      {
        heading: 'Recupera la hidratación y séllala',
        text: [
          'Una barrera debilitada pierde agua con facilidad, y la piel deshidratada reacciona más. Presiona unas gotas del [[hyaluronic]] sobre la piel húmeda. Contiene pantenol y alantoína, conocidos por su efecto calmante, y es apto para pieles sensibles.',
          'Aplica enseguida la [[moisturizer]]. Su 2% de vitamina B5 calma e hidrata, y ayuda a que la barrera se recupere. Usa ambos por la mañana y por la noche, aunque tu piel también sea grasa.',
        ],
      },
      {
        heading: 'Protégela del sol',
        text: [
          'Los rayos UV inflaman la piel sensible y empeoran el enrojecimiento. El [[sunscreen]] es ligero y ofrece protección de amplio espectro. Como con cualquier producto nuevo, haz primero una prueba en una zona pequeña y después conviértelo en un hábito diario.',
        ],
      },
      {
        heading: 'Volver a introducir activos',
        text: ['Cuando tu piel lleve unas semanas tranquila, puedes recuperar los activos de uno en uno, con al menos dos semanas entre cada uno:'],
        list: [
          '**Primero:** el [[niacinamide]], que refuerza la barrera y calma el enrojecimiento.',
          '**Después:** el [[vitamin-c]], en días alternos al principio.',
          '**Por último, si lo necesitas:** retinol dos veces por semana con el método "sándwich" (crema, retinol, crema).',
        ],
      },
      {
        heading: 'Cómo hacer una prueba de tolerancia',
        list: [
          'Aplica una pequeña cantidad detrás de la oreja o en la línea de la mandíbula.',
          'Repite dos veces al día durante 5-7 días.',
          'Observa si aparece enrojecimiento, picor, granitos o ardor.',
          'Si no ocurre nada, pruébalo en una zona pequeña del rostro antes de usarlo en toda la cara.',
        ],
      },
      {
        heading: 'Desencadenantes habituales a vigilar',
        list: [
          '**Perfume y aceites esenciales:** de las causas más frecuentes de escozor y rojeces.',
          '**Tónicos con mucho alcohol:** pueden dejar la piel seca y tirante.',
          '**Exfoliantes y exfoliación frecuente:** desgastan la barrera que intentas reconstruir.',
          '**Duchas muy calientes, saunas y vapor:** el calor empeora el rubor.',
          '**Varios productos nuevos a la vez:** si algo reacciona, no sabrás cuál ha sido.',
        ],
        after: [
          'No todas las pieles sensibles reaccionan a lo mismo. Anotar brevemente cada producto nuevo que pruebas y cómo se sintió tu piel los días siguientes te ayuda a descubrir enseguida tus propios patrones.',
        ],
      },
    ],
    summary:
      'Simplifica, limpia con suavidad, hidrata y sella, y protege con SPF cada día. Recupera los activos despacio, de uno en uno y tras una prueba de tolerancia, y consulta a un dermatólogo si el enrojecimiento o el picor persisten.',
  },

  ru: {
    intro:
      'Чувствительная кожа щиплет, краснеет или зудит легче, чем должна. Чаще всего это значит, что кожный барьер — внешний слой, который удерживает влагу и не пропускает раздражители, — плохо справляется со своей задачей. Решение редко заключается в чудо-средстве: нужно убрать то, что раздражает кожу, и шаг за шагом восстановить барьер.',
    sections: [
      {
        heading: 'Признаки чувствительной кожи',
        list: [
          'Пощипывание или жжение при нанесении средств, даже мягких',
          'Покраснение или приливы, которые то появляются, то проходят',
          'Чувство стянутости после умывания',
          'Шелушение и жирный блеск одновременно',
          'Реакция на смену погоды, ветер, жару или холод',
        ],
        after: [
          'Стойкое покраснение, заметные сосуды, сыпь или сильный зуд могут указывать на розацеа, экзему или аллергию. В таких случаях нужен диагноз дерматолога.',
        ],
      },
      {
        heading: 'Сначала упростите уход',
        text: [
          'Многие реакции возникают из-за избытка: несколько активов сразу, частое отшелушивание, ароматизированные средства. На 2–4 недели сократите уход до трёх шагов: очищение, крем и солнцезащитное средство. Так коже будет проще успокоиться, а вы поймёте, что ей действительно нужно.',
          'В этот период не поддавайтесь желанию пробовать что-то новое, даже средства, которые обещают успокоить кожу. Большинство людей замечают, что кожа становится спокойнее и комфортнее уже через одну-две недели, хотя повреждённому барьеру может понадобиться месяц и больше, чтобы полностью восстановиться. Если после месяца такого простого ухода улучшений нет совсем, это хороший повод обратиться к дерматологу.',
        ],
      },
      {
        heading: 'Очищайте мягко',
        text: [
          'Средство [[cleanser]] не раздражает и увлажняет, в его составе алоэ вера и пантенол. Используйте тёплую воду, кончики пальцев и лёгкие движения, затем промокните лицо. Избегайте горячей воды, очищающих щёточек и жёстких полотенец: трение — один из самых частых скрытых раздражителей.',
        ],
      },
      {
        heading: 'Восстановите увлажнение и запечатайте его',
        text: [
          'Ослабленный барьер легко теряет воду, а обезвоженная кожа реагирует сильнее. Вбейте несколько капель средства [[hyaluronic]] во влажную кожу. В его составе пантенол и аллантоин, известные успокаивающим действием, и оно подходит для чувствительной кожи.',
          'Сразу после этого нанесите [[moisturizer]]. Его 2% витамина B5 успокаивают и увлажняют, помогая барьеру восстановиться. Используйте оба средства утром и вечером, даже если кожа при этом склонна к жирности.',
        ],
      },
      {
        heading: 'Защищайте от солнца',
        text: [
          'Ультрафиолет воспаляет чувствительную кожу и усиливает покраснение. Средство [[sunscreen]] лёгкое и обеспечивает защиту широкого спектра. Как и любое новое средство, сначала протестируйте его на небольшом участке, а затем сделайте ежедневной привычкой.',
        ],
      },
      {
        heading: 'Как вернуть активы',
        text: ['Когда кожа несколько недель остаётся спокойной, активы можно возвращать по одному, с интервалом не менее двух недель:'],
        list: [
          '**Сначала:** [[niacinamide]] — он поддерживает барьер и успокаивает покраснение.',
          '**Затем:** [[vitamin-c]], поначалу через день по утрам.',
          '**В последнюю очередь и только при необходимости:** ретинол два раза в неделю методом «сэндвича» (крем, ретинол, крем).',
        ],
      },
      {
        heading: 'Как провести тест на чувствительность',
        list: [
          'Нанесите немного средства за ухо или на линию челюсти.',
          'Повторяйте дважды в день в течение 5–7 дней.',
          'Следите, не появится ли покраснение, зуд, бугорки или жжение.',
          'Если реакции нет, попробуйте средство на небольшом участке лица, прежде чем наносить его на всё лицо.',
        ],
      },
      {
        heading: 'Частые раздражители, за которыми стоит следить',
        list: [
          '**Отдушки и эфирные масла:** одна из самых частых причин пощипывания и покраснения.',
          '**Тоники с высоким содержанием спирта:** могут оставлять кожу сухой и стянутой.',
          '**Скрабы и частое отшелушивание:** истончают барьер, который вы пытаетесь восстановить.',
          '**Очень горячий душ, сауна и пар:** жар усиливает покраснение.',
          '**Несколько новых средств одновременно:** если появится реакция, вы не узнаете, на что именно.',
        ],
        after: [
          'Не всякая чувствительная кожа реагирует на одно и то же. Короткие заметки о каждом новом средстве и о том, как кожа чувствовала себя в следующие дни, быстро помогут увидеть собственные закономерности.',
        ],
      },
    ],
    summary:
      'Упростите уход, очищайте мягко, увлажняйте и запечатывайте влагу, каждый день защищайте кожу SPF. Возвращайте активы медленно и по одному после теста, а если покраснение или зуд не проходят, обратитесь к дерматологу.',
  },
}

export default copy

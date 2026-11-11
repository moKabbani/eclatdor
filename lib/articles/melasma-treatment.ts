import type { Locale } from '../i18n'
import type { ArticleCopy } from './types'

const copy: Record<Locale, ArticleCopy> = {
  en: {
    intro:
      "Melasma appears as brown or grey-brown patches, usually on the cheeks, forehead, upper lip and the bridge of the nose. It's common and harmless, but stubborn. It can be faded considerably, yet it tends to come back when its triggers return, so the best approach is a steady, long-term plan rather than a quick fix.",
    sections: [
      {
        heading: 'What causes melasma',
        text: [
          'Melasma happens when the skin\'s pigment cells become overactive and produce too much melanin in certain areas. The main triggers are:',
        ],
        list: [
          '**Sun:** both UV rays and visible light stimulate pigment. This is the biggest factor.',
          '**Heat:** saunas, hot kitchens and even a hot climate can darken patches.',
          '**Hormones:** pregnancy and hormonal contraception are common triggers, which is why melasma is sometimes called "the mask of pregnancy".',
          '**Genetics:** it runs in families and is more common in women and in medium to darker skin tones.',
        ],
      },
      {
        heading: 'Sun protection is the treatment',
        text: [
          'Without daily sun protection, no brightening product can keep up: even short, unprotected exposure can undo weeks of progress.',
          'Apply [[sunscreen]] every morning, generously, even indoors near windows and on cloudy days. It gives broad-spectrum UVA/UVB protection and is water and sweat resistant. Reapply every two hours when you are outdoors, and add a wide-brimmed hat and shade whenever you can.',
        ],
      },
      {
        heading: 'Fade existing pigment, gently',
        text: [
          'Several ingredients can help fade patches. They work best together, because each targets a different step of pigment production:',
        ],
        list: [
          '**Alpha arbutin** helps reduce the production of new pigment. [[brightening]] combines it with SPF 30 for daytime wear.',
          '**Vitamin C** is an antioxidant that brightens and supports your sun protection. [[vitamin-c]] goes on in the morning, before sunscreen.',
          '**Niacinamide** helps reduce the transfer of pigment to the skin\'s surface and calms the skin. [[niacinamide]] can be used morning and evening.',
        ],
      },
      {
        heading: 'Avoid irritation',
        text: [
          'Inflammation can trigger more pigment, so irritated skin often ends up darker. Skip harsh scrubs and strong at-home peels, introduce new products one at a time, and keep your barrier comfortable with [[moisturizer]]. A gentle routine used every day beats an aggressive one you have to keep pausing.',
        ],
      },
      {
        heading: 'A simple melasma routine',
        list: [
          '**Morning:** [[cleanser]], vitamin C serum, brightening cream, then SPF 50 sunscreen on top. The cream\'s SPF 30 alone is not enough for melasma.',
          '**Evening:** cleanser, niacinamide serum, then hydrating cream.',
          '**All day:** reapply sunscreen outdoors, wear a hat, and avoid intense heat where you can.',
        ],
      },
      {
        heading: 'Common questions',
        list: [
          '**Will melasma go away completely?** It often fades a great deal, but it can return with sun, heat or hormonal changes. It is best thought of as something you manage rather than cure once.',
          '**Can a scrub or strong peel remove it faster?** Not at home. Irritation can trigger more pigment and leave patches darker than before.',
          '**Does daylight indoors matter?** Light through windows does, which is why sunscreen is recommended even on days you spend inside near a window.',
          '**Can men get melasma?** Yes. It is less common, but the causes and the approach are exactly the same.',
        ],
      },
      {
        heading: 'Be patient, and see a dermatologist',
        text: [
          'Pigment fades slowly: expect the first visible change after 8–12 weeks of daily use, and keep going after that, since stopping sun protection is the most common reason melasma returns.',
          'A dermatologist can confirm that the patches are melasma (other conditions can look similar) and may suggest prescription treatments if a gentle routine is not enough. If you are pregnant or breastfeeding, talk to your doctor before starting any brightening treatment. Melasma that appears during pregnancy often fades on its own afterwards.',
        ],
      },
    ],
    summary:
      'Daily SPF 50 is non-negotiable. Alpha arbutin, vitamin C and niacinamide fade patches gradually, over months. Avoid irritation and heat, stay consistent, and see a dermatologist for stubborn patches.',
  },

  ar: {
    intro:
      'يظهر الكلف على شكل بقع بنية أو رمادية مائلة للبني، غالباً على الخدين والجبهة والشفة العليا وجسر الأنف. وهو شائع وغير ضار، لكنه عنيد. يمكن تفتيحه بدرجة كبيرة، إلا أنه يميل إلى العودة عند عودة محفّزاته، لذا فإن أفضل نهج هو خطة ثابتة طويلة المدى بدلاً من حل سريع.',
    sections: [
      {
        heading: 'ما الذي يسبب الكلف؟',
        text: ['يحدث الكلف عندما تصبح الخلايا الصبغية في البشرة مفرطة النشاط وتنتج كمية زائدة من الميلانين في مناطق معينة. وأهم محفّزاته:'],
        list: [
          '**الشمس:** تحفّز الأشعة فوق البنفسجية والضوء المرئي إنتاج الصبغة، وهي العامل الأكبر.',
          '**الحرارة:** الساونا والمطابخ الحارة وحتى المناخ الحار قد تزيد البقع قتامة.',
          '**الهرمونات:** الحمل ووسائل منع الحمل الهرمونية من المحفّزات الشائعة، ولهذا يُسمّى الكلف أحياناً "قناع الحمل".',
          '**الوراثة:** ينتشر في العائلات، وهو أكثر شيوعاً لدى النساء وأصحاب البشرة المتوسطة إلى الداكنة.',
        ],
      },
      {
        heading: 'الحماية من الشمس هي العلاج',
        text: [
          'من دون حماية يومية من الشمس لا يستطيع أي منتج تفتيح أن يواكب، فحتى التعرض القصير دون حماية قد يُضيّع تقدّم أسابيع.',
          'ضع [[sunscreen]] بسخاء كل صباح، حتى داخل المنزل قرب النوافذ وفي الأيام الغائمة. فهو يوفر حماية واسعة الطيف من UVA وUVB ومقاوم للماء والعرق. أعد وضعه كل ساعتين عندما تكون في الخارج، واستخدم قبعة واسعة الحواف واحتمِ بالظل كلما أمكن.',
        ],
      },
      {
        heading: 'فتّح التصبغات الموجودة بلطف',
        text: ['تساعد عدة مكونات على تفتيح البقع، وتعمل بشكل أفضل معاً لأن كلاً منها يستهدف مرحلة مختلفة من إنتاج الصبغة:'],
        list: [
          '**ألفا أربوتين** يساعد على تقليل إنتاج صبغة جديدة، ويجمعه [[brightening]] مع SPF 30 للاستخدام النهاري.',
          '**فيتامين سي** مضاد أكسدة يفتّح البشرة ويدعم حمايتك من الشمس. يوضع [[vitamin-c]] صباحاً قبل واقي الشمس.',
          '**النياسيناميد** يساعد على تقليل انتقال الصبغة إلى سطح البشرة ويهدّئها، ويمكن استخدام [[niacinamide]] صباحاً ومساءً.',
        ],
      },
      {
        heading: 'تجنّب التهيّج',
        text: [
          'قد يحفّز الالتهاب إنتاج مزيد من الصبغة، لذا كثيراً ما تنتهي البشرة المتهيجة بلون أغمق. تجنّب المقشّرات القاسية والتقشير المنزلي القوي، وأدخل المنتجات الجديدة واحداً تلو الآخر، وحافظ على راحة الحاجز الواقي باستخدام [[moisturizer]]. الروتين اللطيف المستخدم يومياً أفضل من روتين قاسٍ تضطر لإيقافه مراراً.',
        ],
      },
      {
        heading: 'روتين بسيط للكلف',
        list: [
          '**الصباح:** [[cleanser]]، ثم سيروم فيتامين سي، ثم كريم التفتيح، ثم واقي الشمس SPF 50 فوقه. فعامل الحماية SPF 30 في الكريم وحده لا يكفي للكلف.',
          '**المساء:** الغسول، ثم سيروم النياسيناميد، ثم كريم الترطيب.',
          '**طوال اليوم:** أعد وضع واقي الشمس في الخارج، وارتدِ قبعة، وتجنّب الحرارة الشديدة قدر الإمكان.',
        ],
      },
      {
        heading: 'أسئلة شائعة',
        list: [
          '**هل يختفي الكلف تماماً؟** غالباً ما يتلاشى بدرجة كبيرة، لكنه قد يعود مع الشمس أو الحرارة أو التغيرات الهرمونية. والأفضل التعامل معه كحالة تُدار باستمرار لا كمشكلة تُعالج مرة واحدة.',
          '**هل يزيله المقشّر أو التقشير القوي أسرع؟** ليس في المنزل. فالتهيج قد يحفّز مزيداً من الصبغة ويترك البقع أغمق من قبل.',
          '**هل يهمّ ضوء النهار داخل المنزل؟** نعم، الضوء الداخل من النوافذ يؤثر، ولهذا يُنصح بواقي الشمس حتى في الأيام التي تقضيها في الداخل قرب نافذة.',
          '**هل يصيب الكلف الرجال؟** نعم. هو أقل شيوعاً لديهم، لكن أسبابه وطريقة التعامل معه هي نفسها تماماً.',
        ],
      },
      {
        heading: 'تحلَّ بالصبر وراجع طبيب الجلدية',
        text: [
          'تتلاشى الصبغة ببطء: توقّع أول تغيّر ملحوظ بعد 8-12 أسبوعاً من الاستخدام اليومي، واستمر بعد ذلك، لأن التوقف عن الحماية من الشمس هو السبب الأكثر شيوعاً لعودة الكلف.',
          'يستطيع طبيب الجلدية التأكد من أن البقع كلف بالفعل (فبعض الحالات الأخرى تتشابه معه)، وقد يقترح علاجات موصوفة طبياً إذا لم يكن الروتين اللطيف كافياً. وإذا كنتِ حاملاً أو مرضعة فتحدثي إلى طبيبك قبل بدء أي علاج للتفتيح؛ فالكلف الذي يظهر أثناء الحمل كثيراً ما يتلاشى من تلقاء نفسه بعده.',
        ],
      },
    ],
    summary:
      'واقي الشمس SPF 50 يومياً أمر لا غنى عنه. ألفا أربوتين وفيتامين سي والنياسيناميد تفتّح البقع تدريجياً على مدى أشهر. تجنّب التهيج والحرارة، والتزم بالروتين، وراجع طبيب الجلدية في الحالات العنيدة.',
  },

  tr: {
    intro:
      'Melazma genellikle yanaklarda, alında, üst dudakta ve burun kemerinde kahverengi ya da gri-kahverengi lekeler olarak görülür. Yaygın ve zararsızdır ama inatçıdır. Belirgin şekilde açılabilir, ancak tetikleyiciler geri geldiğinde yeniden ortaya çıkma eğilimindedir; bu yüzden en iyi yaklaşım hızlı bir çözüm değil, istikrarlı ve uzun vadeli bir plandır.',
    sections: [
      {
        heading: 'Melazmaya ne sebep olur?',
        text: ['Melazma, cildin pigment hücreleri aşırı aktif hale gelip belirli bölgelerde fazla melanin ürettiğinde ortaya çıkar. Başlıca tetikleyiciler şunlardır:'],
        list: [
          '**Güneş:** hem UV ışınları hem de görünür ışık pigment üretimini uyarır. En büyük etken budur.',
          '**Isı:** sauna, sıcak mutfaklar ve hatta sıcak iklim lekeleri koyulaştırabilir.',
          '**Hormonlar:** hamilelik ve hormonal doğum kontrolü sık görülen tetikleyicilerdir; melazmaya bu yüzden bazen "hamilelik maskesi" denir.',
          '**Genetik:** ailede görülme eğilimindedir; kadınlarda ve orta ile koyu ten tonlarında daha yaygındır.',
        ],
      },
      {
        heading: 'Tedavinin kendisi güneşten korunmaktır',
        text: [
          'Günlük güneş koruması olmadan hiçbir aydınlatıcı ürün yetişemez: kısa süreli korumasız maruziyet bile haftalarca süren ilerlemeyi geri alabilir.',
          '[[sunscreen]] ürününü her sabah, evde pencere kenarında ve bulutlu günlerde bile bol miktarda uygulayın. Geniş spektrumlu UVA/UVB koruması sağlar ve suya ve tere dayanıklıdır. Açık havadayken her iki saatte bir yenileyin; mümkün olduğunda geniş kenarlı şapka takın ve gölgede kalın.',
        ],
      },
      {
        heading: 'Mevcut lekeleri nazikçe açın',
        text: ['Lekelerin açılmasına yardımcı olan birkaç içerik vardır. Her biri pigment üretiminin farklı bir aşamasını hedeflediği için birlikte en iyi sonucu verir:'],
        list: [
          '**Alfa arbutin**, yeni pigment üretimini azaltmaya yardımcı olur. [[brightening]], gündüz kullanımı için onu SPF 30 ile birleştirir.',
          '**C vitamini**, cildi aydınlatan ve güneş korumanızı destekleyen bir antioksidandır. [[vitamin-c]] sabah, güneş koruyucudan önce uygulanır.',
          '**Niacinamide**, pigmentin cilt yüzeyine taşınmasını azaltmaya yardımcı olur ve cildi yatıştırır. [[niacinamide]] sabah ve akşam kullanılabilir.',
        ],
      },
      {
        heading: 'Tahrişten kaçının',
        text: [
          'İltihap daha fazla pigment üretimini tetikleyebilir; bu yüzden tahriş olmuş cilt çoğu zaman daha da koyulaşır. Sert peelinglerden ve güçlü ev tipi asit uygulamalarından kaçının, yeni ürünleri tek tek ekleyin ve bariyerinizi [[moisturizer]] ile rahat tutun. Her gün kullanılan nazik bir rutin, sürekli ara vermek zorunda kaldığınız agresif bir rutinden daha iyidir.',
        ],
      },
      {
        heading: 'Basit bir melazma rutini',
        list: [
          '**Sabah:** [[cleanser]], C vitamini serumu, aydınlatıcı krem ve en üstte SPF 50 güneş koruyucu. Kremdeki SPF 30 tek başına melazma için yeterli değildir.',
          '**Akşam:** temizleyici, niacinamide serumu, ardından nemlendirici krem.',
          '**Gün boyu:** dışarıdayken güneş koruyucuyu yenileyin, şapka takın ve mümkün olduğunca yoğun sıcaktan uzak durun.',
        ],
      },
      {
        heading: 'Sık sorulan sorular',
        list: [
          '**Melazma tamamen geçer mi?** Çoğu zaman belirgin şekilde açılır, ancak güneş, ısı veya hormonal değişikliklerle geri dönebilir. Bir kerede tedavi edilen değil, sürekli yönetilen bir durum olarak düşünmek en doğrusudur.',
          '**Peeling veya güçlü bir asit uygulaması onu daha hızlı giderir mi?** Evde değil. Tahriş daha fazla pigment üretimini tetikleyebilir ve lekeleri öncekinden koyu bırakabilir.',
          '**Evdeyken gün ışığı önemli mi?** Pencereden gelen ışık önemlidir; bu yüzden pencere kenarında içeride geçirdiğiniz günlerde bile güneş koruyucu önerilir.',
          '**Erkeklerde melazma olur mu?** Evet. Daha az görülür, ancak nedenleri ve yaklaşım tamamen aynıdır.',
        ],
      },
      {
        heading: 'Sabırlı olun ve dermatoloğa danışın',
        text: [
          'Pigment yavaş açılır: ilk görünür değişikliği günlük kullanımın 8-12. haftasında bekleyin ve sonrasında da devam edin; çünkü güneş korumasını bırakmak, melazmanın geri dönmesinin en yaygın nedenidir.',
          'Bir dermatolog lekelerin gerçekten melazma olduğunu doğrulayabilir (bazı başka durumlar benzer görünebilir) ve nazik bir rutin yeterli olmazsa reçeteli tedaviler önerebilir. Hamileyseniz veya emziriyorsanız herhangi bir aydınlatıcı tedaviye başlamadan önce doktorunuzla konuşun. Hamilelikte ortaya çıkan melazma çoğu zaman doğumdan sonra kendiliğinden açılır.',
        ],
      },
    ],
    summary:
      'Her gün SPF 50 vazgeçilmezdir. Alfa arbutin, C vitamini ve niacinamide lekeleri aylar içinde kademeli olarak açar. Tahrişten ve sıcaktan kaçının, düzenli olun ve inatçı lekeler için bir dermatoloğa danışın.',
  },

  es: {
    intro:
      'El melasma aparece como manchas marrones o gris parduzcas, normalmente en las mejillas, la frente, el labio superior y el puente de la nariz. Es frecuente e inofensivo, pero persistente. Puede aclararse considerablemente, aunque tiende a volver cuando regresan sus desencadenantes, así que lo mejor es un plan constante y a largo plazo, no una solución rápida.',
    sections: [
      {
        heading: 'Qué causa el melasma',
        text: ['El melasma aparece cuando las células pigmentarias de la piel se vuelven hiperactivas y producen demasiada melanina en ciertas zonas. Sus principales desencadenantes son:'],
        list: [
          '**El sol:** tanto los rayos UV como la luz visible estimulan el pigmento. Es el factor más importante.',
          '**El calor:** saunas, cocinas calurosas e incluso los climas cálidos pueden oscurecer las manchas.',
          '**Las hormonas:** el embarazo y los anticonceptivos hormonales son desencadenantes habituales; por eso al melasma a veces se le llama "máscara del embarazo".',
          '**La genética:** suele darse en varias personas de una misma familia y es más frecuente en mujeres y en fototipos medios y oscuros.',
        ],
      },
      {
        heading: 'La protección solar es el tratamiento',
        text: [
          'Sin protección solar diaria, ningún producto despigmentante puede seguir el ritmo: incluso una exposición breve sin protección puede deshacer semanas de avance.',
          'Aplica el [[sunscreen]] cada mañana en cantidad generosa, también en casa cerca de las ventanas y en días nublados. Ofrece protección de amplio espectro UVA/UVB y resiste al agua y al sudor. Reaplícalo cada dos horas cuando estés al aire libre y, siempre que puedas, usa sombrero de ala ancha y busca la sombra.',
        ],
      },
      {
        heading: 'Aclara el pigmento existente con suavidad',
        text: ['Varios ingredientes ayudan a aclarar las manchas. Funcionan mejor juntos, porque cada uno actúa en una fase distinta de la producción de pigmento:'],
        list: [
          '**La alfa arbutina** ayuda a reducir la producción de nuevo pigmento. La [[brightening]] la combina con SPF 30 para el día.',
          '**La vitamina C** es un antioxidante que ilumina y refuerza tu protección solar. El [[vitamin-c]] se aplica por la mañana, antes del protector solar.',
          '**La niacinamida** ayuda a reducir la transferencia del pigmento a la superficie de la piel y la calma. El [[niacinamide]] se puede usar mañana y noche.',
        ],
      },
      {
        heading: 'Evita la irritación',
        text: [
          'La inflamación puede estimular más pigmento, por lo que una piel irritada a menudo acaba más oscura. Evita los exfoliantes agresivos y los peelings fuertes caseros, introduce los productos nuevos de uno en uno y mantén la barrera cómoda con la [[moisturizer]]. Una rutina suave que usas cada día funciona mejor que una agresiva que tienes que interrumpir una y otra vez.',
        ],
      },
      {
        heading: 'Una rutina sencilla para el melasma',
        list: [
          '**Mañana:** el [[cleanser]], sérum de vitamina C, crema iluminadora y, encima, protector solar SPF 50. El SPF 30 de la crema por sí solo no basta para el melasma.',
          '**Noche:** limpiador, sérum de niacinamida y después crema hidratante.',
          '**Durante el día:** reaplica el protector al aire libre, usa sombrero y evita el calor intenso siempre que puedas.',
        ],
      },
      {
        heading: 'Preguntas frecuentes',
        list: [
          '**¿El melasma desaparece por completo?** A menudo se aclara mucho, pero puede volver con el sol, el calor o los cambios hormonales. Es mejor verlo como algo que se controla de forma continua y no como algo que se cura de una vez.',
          '**¿Un exfoliante o un peeling fuerte lo eliminan antes?** En casa, no. La irritación puede estimular más pigmento y dejar las manchas más oscuras que antes.',
          '**¿Importa la luz del día dentro de casa?** La que entra por las ventanas sí; por eso se recomienda protector solar incluso los días que pasas en casa cerca de una ventana.',
          '**¿Los hombres pueden tener melasma?** Sí. Es menos frecuente, pero las causas y el enfoque son exactamente los mismos.',
        ],
      },
      {
        heading: 'Ten paciencia y consulta a un dermatólogo',
        text: [
          'El pigmento se aclara despacio: espera el primer cambio visible tras 8-12 semanas de uso diario y continúa después, porque abandonar la protección solar es la causa más común de que el melasma vuelva.',
          'Un dermatólogo puede confirmar que las manchas son melasma (otras afecciones pueden parecerse) y proponer tratamientos con receta si una rutina suave no es suficiente. Si estás embarazada o en periodo de lactancia, habla con tu médico antes de empezar cualquier tratamiento despigmentante. El melasma que aparece durante el embarazo suele aclararse por sí solo después.',
        ],
      },
    ],
    summary:
      'El SPF 50 diario es imprescindible. La alfa arbutina, la vitamina C y la niacinamida aclaran las manchas poco a poco, a lo largo de meses. Evita la irritación y el calor, sé constante y consulta a un dermatólogo si las manchas se resisten.',
  },

  ru: {
    intro:
      'Мелазма проявляется коричневыми или серо-коричневыми пятнами — обычно на скулах, лбу, над верхней губой и на переносице. Она распространена и безвредна, но упряма. Её можно значительно осветлить, однако при возвращении провоцирующих факторов она обычно возвращается, поэтому лучший подход — последовательный долгосрочный план, а не быстрое решение.',
    sections: [
      {
        heading: 'Что вызывает мелазму',
        text: ['Мелазма возникает, когда пигментные клетки кожи становятся слишком активными и вырабатывают избыток меланина на отдельных участках. Основные провоцирующие факторы:'],
        list: [
          '**Солнце:** пигментацию стимулируют и ультрафиолет, и видимый свет. Это главный фактор.',
          '**Жара:** сауна, жаркая кухня и даже жаркий климат могут сделать пятна темнее.',
          '**Гормоны:** беременность и гормональная контрацепция — частые провокаторы; поэтому мелазму иногда называют «маской беременности».',
          '**Наследственность:** она часто встречается у родственников и чаще бывает у женщин и у людей со средним и тёмным оттенком кожи.',
        ],
      },
      {
        heading: 'Защита от солнца — это и есть лечение',
        text: [
          'Без ежедневной защиты от солнца ни одно осветляющее средство не справится: даже короткое пребывание на солнце без защиты может перечеркнуть несколько недель прогресса.',
          'Каждое утро щедро наносите [[sunscreen]] — даже дома у окна и в пасмурные дни. Средство обеспечивает защиту широкого спектра UVA/UVB и устойчиво к воде и поту. На улице обновляйте его каждые два часа, а по возможности носите шляпу с широкими полями и держитесь в тени.',
        ],
      },
      {
        heading: 'Мягко осветляйте имеющиеся пятна',
        text: ['Осветлить пятна помогают несколько ингредиентов. Лучше всего они работают вместе, потому что каждый воздействует на свой этап образования пигмента:'],
        list: [
          '**Альфа-арбутин** помогает уменьшить выработку нового пигмента. [[brightening]] сочетает его с SPF 30 для дневного применения.',
          '**Витамин C** — антиоксидант, который придаёт сияние и усиливает защиту от солнца. [[vitamin-c]] наносят утром, перед солнцезащитным кремом.',
          '**Ниацинамид** помогает уменьшить перенос пигмента к поверхности кожи и успокаивает её. [[niacinamide]] можно использовать утром и вечером.',
        ],
      },
      {
        heading: 'Избегайте раздражения',
        text: [
          'Воспаление может стимулировать образование пигмента, поэтому раздражённая кожа часто темнеет ещё сильнее. Откажитесь от жёстких скрабов и сильных домашних пилингов, вводите новые средства по одному и поддерживайте барьер в комфорте с помощью средства [[moisturizer]]. Мягкий уход, который вы используете каждый день, работает лучше агрессивного, который приходится постоянно прерывать.',
        ],
      },
      {
        heading: 'Простой уход при мелазме',
        list: [
          '**Утро:** [[cleanser]], сыворотка с витамином C, осветляющий крем, а сверху — солнцезащитный крем SPF 50. Одного SPF 30 в осветляющем креме при мелазме недостаточно.',
          '**Вечер:** очищение, сыворотка с ниацинамидом, затем увлажняющий крем.',
          '**В течение дня:** обновляйте солнцезащитный крем на улице, носите шляпу и по возможности избегайте сильной жары.',
        ],
      },
      {
        heading: 'Частые вопросы',
        list: [
          '**Проходит ли мелазма полностью?** Часто она заметно светлеет, но может вернуться из-за солнца, жары или гормональных изменений. Её лучше воспринимать как состояние, которое нужно постоянно контролировать, а не вылечить один раз.',
          '**Уберёт ли её быстрее скраб или сильный пилинг?** Не в домашних условиях. Раздражение может стимулировать выработку пигмента и сделать пятна темнее, чем раньше.',
          '**Важен ли дневной свет в помещении?** Свет из окон — да, поэтому солнцезащитный крем рекомендуют даже в дни, которые вы проводите дома у окна.',
          '**Бывает ли мелазма у мужчин?** Да. Реже, но причины и подход к уходу точно такие же.',
        ],
      },
      {
        heading: 'Наберитесь терпения и обратитесь к дерматологу',
        text: [
          'Пигмент светлеет медленно: первые заметные изменения стоит ожидать через 8–12 недель ежедневного ухода, и продолжать его нужно и после этого — отказ от защиты от солнца чаще всего становится причиной возвращения мелазмы.',
          'Дерматолог может подтвердить, что пятна — это именно мелазма (некоторые другие состояния выглядят похоже), и предложить рецептурное лечение, если мягкого ухода недостаточно. Если вы беременны или кормите грудью, перед началом любого осветляющего ухода посоветуйтесь с врачом. Мелазма, появившаяся во время беременности, часто проходит сама после родов.',
        ],
      },
    ],
    summary:
      'Ежедневный SPF 50 обязателен. Альфа-арбутин, витамин C и ниацинамид постепенно, в течение месяцев, осветляют пятна. Избегайте раздражения и жары, будьте последовательны и обращайтесь к дерматологу, если пятна не поддаются.',
  },
}

export default copy

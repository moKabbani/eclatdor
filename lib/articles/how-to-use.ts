import type { Locale } from '../i18n'
import type { ArticleCopy } from './types'

const copy: Record<Locale, ArticleCopy> = {
  en: {
    intro:
      'Actives such as vitamin C, retinol, salicylic acid and niacinamide are what make a routine work. Layered carelessly, though, they can compete, cancel each other out or overwhelm your skin. Layering well comes down to four rules: the right order, the right time of day, the right pairings and the right pace.',
    sections: [
      {
        heading: 'Rule 1: Thinnest to thickest',
        text: [
          'Apply products from the lightest, most watery texture to the richest, so each layer can reach the skin. Give each one about a minute before the next.',
        ],
        list: [
          '**Cleanser:** start with clean skin.',
          '**Treatment serum:** the active doing the main job, such as vitamin C, retinol or salicylic acid.',
          '**Hydrating serum:** [[hyaluronic]], pressed onto slightly damp skin.',
          '**Moisturiser:** [[moisturizer]] seals everything in.',
          '**Sunscreen (morning):** always the last step.',
        ],
      },
      {
        heading: 'Rule 2: Split morning and evening',
        text: [
          'Some actives belong to the day, others to the night. [[vitamin-c]] is a morning active: it neutralises the damage sun and pollution cause and works alongside your sunscreen.',
          '[[retinol]] and [[salicylic]] belong to the evening. Both increase sun sensitivity, and retinol breaks down in light. Niacinamide and hyaluronic acid are easy-going and work at either time.',
        ],
      },
      {
        heading: 'Rule 3: Know which pairs to keep apart',
        list: [
          '**Retinol + salicylic acid:** never on the same night. Alternate nights instead.',
          '**Vitamin C + retinol:** use them at different times, vitamin C in the morning and retinol at night.',
          '**Two exfoliating actives at once:** skip it. More exfoliation is not better, just more irritating.',
        ],
        after: [
          'And the pairs that work well: [[niacinamide]] with retinol (it calms the redness retinol can cause, which is why our retinol serum already contains it), niacinamide with salicylic acid, hyaluronic acid with anything, and vitamin C with sunscreen, which boosts your daytime protection.',
        ],
      },
      {
        heading: 'Rule 4: One new active at a time',
        text: [
          'Introduce one new active, use it for at least two weeks, and only then add the next. If something irritates, you will know exactly what it was.',
          'Start low and slow: retinol twice a week, salicylic acid three nights a week, and vitamin C every other morning if your skin is sensitive. Increase only when your skin is comfortable.',
        ],
      },
      {
        heading: "Signs you've overdone it",
        list: [
          'Stinging when you apply even a plain moisturiser',
          'Skin that looks tight, shiny and "glassy" but feels dry',
          'Flaking, redness or a rough, sandpaper-like texture',
          'New small bumps in places you don\'t usually break out',
        ],
        after: [
          'If this happens, stop all actives for one to two weeks. Keep just cleanser, hydrating serum, moisturiser and [[sunscreen]] until your skin calms down, then reintroduce actives one at a time, less often than before.',
        ],
      },
      {
        heading: 'A sample week',
        list: [
          '**Every morning:** [[cleanser]], vitamin C, hyaluronic acid, moisturiser, sunscreen. Oily or blemish-prone skin can add niacinamide after vitamin C.',
          '**Retinol nights (2–3 a week):** cleanser, retinol on dry skin, moisturiser.',
          '**Salicylic nights (2–3 a week, never the same night as retinol):** cleanser, salicylic acid, moisturiser.',
          '**Rest nights:** cleanser, hyaluronic acid, moisturiser.',
        ],
      },
      {
        heading: 'Common questions',
        list: [
          '**How long should I wait between layers?** About a minute, until the previous layer no longer feels wet. Retinol is the exception: apply it to completely dry skin.',
          '**Can I use niacinamide and vitamin C together?** Yes. The old advice to keep them apart doesn\'t apply to modern formulas. If you notice flushing, simply use them at different times of day.',
          '**Do I need every active?** No. Most people need one or two actives aimed at their main concern, plus hydration and sunscreen. More products mean more chances of irritation, not better results.',
          '**Can I mix serums in my palm?** It\'s better not to. Apply them one after another, in order, so each works the way it was formulated.',
        ],
      },
    ],
    summary:
      'Thin to thick; vitamin C by day; retinol and salicylic acid at night, on different nights; one new active at a time, started slowly. When in doubt, scale back, and never skip sunscreen.',
  },

  ar: {
    intro:
      'المكونات الفعّالة مثل فيتامين سي والريتينول وحمض الساليسيليك والنياسيناميد هي ما يجعل الروتين ناجحاً. لكن عند استخدامها معاً دون انتباه قد تتنافس أو يُضعف بعضها بعضاً أو تُرهق بشرتك. ويعتمد الدمج الصحيح على أربع قواعد: الترتيب الصحيح، والتوقيت الصحيح، والتركيبات الصحيحة، والوتيرة الصحيحة.',
    sections: [
      {
        heading: 'القاعدة 1: من الأخف إلى الأثقل',
        text: [
          'ضع المنتجات من القوام الأخف والأقرب إلى الماء إلى الأغنى، لتصل كل طبقة إلى البشرة. وامنح كل منتج دقيقة تقريباً قبل التالي.',
        ],
        list: [
          '**الغسول:** ابدأ ببشرة نظيفة.',
          '**سيروم العلاج:** المكوّن الذي يؤدي المهمة الرئيسية، مثل فيتامين سي أو الريتينول أو حمض الساليسيليك.',
          '**سيروم الترطيب:** [[hyaluronic]] يُضغط على بشرة رطبة قليلاً.',
          '**المرطب:** [[moisturizer]] يحبس كل ما سبق داخل البشرة.',
          '**واقي الشمس (صباحاً):** دائماً الخطوة الأخيرة.',
        ],
      },
      {
        heading: 'القاعدة 2: وزّع بين الصباح والمساء',
        text: [
          'بعض المكونات الفعّالة تناسب النهار وبعضها يناسب الليل. [[vitamin-c]] مكوّن صباحي؛ فهو يعادل الضرر الناتج عن الشمس والتلوث ويعمل جنباً إلى جنب مع واقي الشمس.',
          'أما [[retinol]] و[[salicylic]] فمكانهما المساء، لأن كليهما يزيد حساسية البشرة للشمس، كما أن الريتينول يتحلل في الضوء. في حين أن النياسيناميد وحمض الهيالورونيك سهلا الاستخدام ويعملان في أي وقت.',
        ],
      },
      {
        heading: 'القاعدة 3: اعرف ما يجب فصله',
        list: [
          '**الريتينول + حمض الساليسيليك:** لا يُستخدمان أبداً في الليلة نفسها، بل بالتناوب بين الليالي.',
          '**فيتامين سي + الريتينول:** استخدمهما في وقتين مختلفين، فيتامين سي صباحاً والريتينول ليلاً.',
          '**مكوّنان مقشّران في الوقت نفسه:** تجنّب ذلك؛ فالمزيد من التقشير ليس أفضل، بل أكثر تهييجاً فقط.',
        ],
        after: [
          'أما التركيبات التي تعمل جيداً معاً: [[niacinamide]] مع الريتينول (فهو يهدّئ الاحمرار الذي قد يسببه الريتينول، ولهذا يحتوي سيروم الريتينول لدينا عليه أصلاً)، والنياسيناميد مع حمض الساليسيليك، وحمض الهيالورونيك مع أي مكوّن، وفيتامين سي مع واقي الشمس لتعزيز حمايتك النهارية.',
        ],
      },
      {
        heading: 'القاعدة 4: مكوّن فعّال جديد في كل مرة',
        text: [
          'أدخل مكوّناً فعّالاً جديداً واحداً، واستخدمه أسبوعين على الأقل، ثم أضف التالي. وإذا حدث تهيّج ستعرف بالضبط مصدره.',
          'ابدأ بجرعات قليلة وببطء: الريتينول مرتين أسبوعياً، وحمض الساليسيليك ثلاث ليالٍ أسبوعياً، وفيتامين سي يوماً بعد يوم إذا كانت بشرتك حساسة. ولا تزِد إلا عندما تكون بشرتك مرتاحة.',
        ],
      },
      {
        heading: 'علامات تدل على أنك بالغت',
        list: [
          'لسع عند وضع مرطب عادي',
          'بشرة تبدو مشدودة ولامعة "كالزجاج" لكنها جافة عند اللمس',
          'تقشّر أو احمرار أو ملمس خشن يشبه ورق الصنفرة',
          'نتوءات صغيرة جديدة في أماكن لا تظهر فيها الحبوب عادةً',
        ],
        after: [
          'إذا حدث ذلك فأوقف جميع المكونات الفعّالة لمدة أسبوع إلى أسبوعين، واكتفِ بالغسول وسيروم الترطيب والمرطب و[[sunscreen]] حتى تهدأ بشرتك، ثم أعد المكونات الفعّالة واحداً تلو الآخر وبوتيرة أقل من السابق.',
        ],
      },
      {
        heading: 'نموذج لأسبوع كامل',
        list: [
          '**كل صباح:** [[cleanser]]، فيتامين سي، حمض الهيالورونيك، المرطب، واقي الشمس. ويمكن لأصحاب البشرة الدهنية أو المعرّضة للحبوب إضافة النياسيناميد بعد فيتامين سي.',
          '**ليالي الريتينول (2-3 أسبوعياً):** الغسول، ثم الريتينول على بشرة جافة، ثم المرطب.',
          '**ليالي الساليسيليك (2-3 أسبوعياً، وليس في ليلة الريتينول):** الغسول، ثم حمض الساليسيليك، ثم المرطب.',
          '**ليالي الراحة:** الغسول، ثم حمض الهيالورونيك، ثم المرطب.',
        ],
      },
      {
        heading: 'أسئلة شائعة',
        list: [
          '**كم أنتظر بين الطبقات؟** دقيقة تقريباً، حتى لا تعود الطبقة السابقة رطبة عند اللمس. والاستثناء هو الريتينول: ضعه على بشرة جافة تماماً.',
          '**هل يمكنني استخدام النياسيناميد وفيتامين سي معاً؟** نعم. النصيحة القديمة بفصلهما لا تنطبق على التركيبات الحديثة. وإذا لاحظت تورّداً فاستخدمهما ببساطة في وقتين مختلفين من اليوم.',
          '**هل أحتاج إلى كل المكونات الفعّالة؟** لا. يحتاج معظم الناس إلى مكوّن أو اثنين يستهدفان مشكلتهم الأساسية، إضافة إلى الترطيب وواقي الشمس. المزيد من المنتجات يعني فرصاً أكثر للتهيج لا نتائج أفضل.',
          '**هل أخلط السيرومات في كفّ يدي؟** الأفضل ألا تفعل. ضعها واحداً تلو الآخر بالترتيب، ليعمل كل منها كما صُمّمت تركيبته.',
        ],
      },
    ],
    summary:
      'من الأخف إلى الأثقل؛ فيتامين سي نهاراً؛ الريتينول وحمض الساليسيليك ليلاً وفي ليالٍ مختلفة؛ مكوّن جديد واحد في كل مرة وبالتدريج. وعند الشك خفّف، ولا تتخلَّ أبداً عن واقي الشمس.',
  },

  tr: {
    intro:
      'C vitamini, retinol, salisilik asit ve niacinamide gibi aktifler bir rutini işe yarar kılan şeylerdir. Ancak özensizce katmanlandıklarında birbirleriyle rekabet edebilir, birbirlerinin etkisini azaltabilir ya da cildinizi zorlayabilirler. Doğru katmanlama dört kurala dayanır: doğru sıra, günün doğru zamanı, doğru eşleşmeler ve doğru tempo.',
    sections: [
      {
        heading: 'Kural 1: İnceden kalına',
        text: [
          'Ürünleri en hafif, en sulu dokudan en zengine doğru uygulayın; böylece her katman cilde ulaşabilir. Bir sonrakine geçmeden önce her birine yaklaşık bir dakika verin.',
        ],
        list: [
          '**Temizleyici:** temiz bir ciltle başlayın.',
          '**Tedavi serumu:** asıl işi yapan aktif; örneğin C vitamini, retinol veya salisilik asit.',
          '**Nem serumu:** hafif nemli cilde bastırılan [[hyaluronic]].',
          '**Nemlendirici:** [[moisturizer]] her şeyi içeride tutar.',
          '**Güneş koruyucu (sabah):** her zaman son adım.',
        ],
      },
      {
        heading: 'Kural 2: Sabah ve akşamı ayırın',
        text: [
          'Bazı aktifler gündüze, bazıları geceye aittir. [[vitamin-c]] bir sabah aktifidir: güneş ve kirliliğin yol açtığı hasarı nötralize eder ve güneş koruyucunuzla birlikte çalışır.',
          '[[retinol]] ve [[salicylic]] ise akşama aittir. İkisi de güneşe duyarlılığı artırır, retinol ayrıca ışıkta bozunur. Niacinamide ve hyaluronik asit uyumludur ve her iki zamanda da kullanılabilir.',
        ],
      },
      {
        heading: 'Kural 3: Hangi ikilileri ayıracağınızı bilin',
        list: [
          '**Retinol + salisilik asit:** asla aynı gece kullanılmaz. Geceleri dönüşümlü uygulayın.',
          '**C vitamini + retinol:** farklı zamanlarda kullanın; C vitamini sabah, retinol gece.',
          '**Aynı anda iki eksfoliyan aktif:** bundan kaçının. Daha fazla eksfoliasyon daha iyi değil, sadece daha tahriş edicidir.',
        ],
        after: [
          'İyi çalışan eşleşmeler ise şunlardır: retinolle [[niacinamide]] (retinolün yol açabileceği kızarıklığı yatıştırır; retinol serumumuzun zaten niacinamide içermesinin nedeni budur), salisilik asitle niacinamide, her şeyle hyaluronik asit ve gündüz korumanızı güçlendiren güneş koruyucuyla C vitamini.',
        ],
      },
      {
        heading: 'Kural 4: Her seferinde tek yeni aktif',
        text: [
          'Yeni bir aktif ekleyin, en az iki hafta kullanın ve ancak ondan sonra bir sonrakini ekleyin. Bir şey tahriş ederse kaynağını tam olarak bilirsiniz.',
          'Az ve yavaş başlayın: haftada iki kez retinol, haftada üç gece salisilik asit ve cildiniz hassassa gün aşırı sabah C vitamini. Sıklığı yalnızca cildiniz rahat olduğunda artırın.',
        ],
      },
      {
        heading: 'Aşırıya kaçtığınızın işaretleri',
        list: [
          'Sade bir nemlendirici sürerken bile batma',
          'Gergin, parlak ve "cam gibi" görünen ama kuru hissettiren cilt',
          'Pullanma, kızarıklık veya zımpara kâğıdı gibi pürüzlü doku',
          'Normalde sivilce çıkmayan yerlerde yeni küçük kabarıklıklar',
        ],
        after: [
          'Böyle olursa tüm aktifleri bir iki hafta bırakın. Cildiniz sakinleşene kadar yalnızca temizleyici, nem serumu, nemlendirici ve [[sunscreen]] kullanın; ardından aktifleri tek tek ve öncekinden daha seyrek olarak geri ekleyin.',
        ],
      },
      {
        heading: 'Örnek bir hafta',
        list: [
          '**Her sabah:** [[cleanser]], C vitamini, hyaluronik asit, nemlendirici, güneş koruyucu. Yağlı veya sivilceye eğilimli ciltler C vitamininden sonra niacinamide ekleyebilir.',
          '**Retinol geceleri (haftada 2-3):** temizleyici, kuru cilde retinol, nemlendirici.',
          '**Salisilik asit geceleri (haftada 2-3, asla retinolle aynı gece değil):** temizleyici, salisilik asit, nemlendirici.',
          '**Dinlenme geceleri:** temizleyici, hyaluronik asit, nemlendirici.',
        ],
      },
      {
        heading: 'Sık sorulan sorular',
        list: [
          '**Katmanlar arasında ne kadar beklemeliyim?** Yaklaşık bir dakika, önceki katman artık ıslak hissettirmeyene kadar. İstisna retinoldür: onu tamamen kuru cilde uygulayın.',
          '**Niacinamide ve C vitaminini birlikte kullanabilir miyim?** Evet. İkisini ayrı tutma yönündeki eski tavsiye modern formüller için geçerli değildir. Kızarma fark ederseniz onları günün farklı saatlerinde kullanmanız yeterli.',
          '**Her aktife ihtiyacım var mı?** Hayır. Çoğu kişinin ana sorununa yönelik bir ya da iki aktife, artı nem ve güneş korumasına ihtiyacı vardır. Daha fazla ürün daha iyi sonuç değil, daha fazla tahriş olasılığı demektir.',
          '**Serumları avucumda karıştırabilir miyim?** Karıştırmamak daha iyi. Her biri formüle edildiği gibi çalışsın diye onları sırayla, birbiri ardına uygulayın.',
        ],
      },
    ],
    summary:
      'İnceden kalına; gündüz C vitamini; retinol ve salisilik asit gece ve farklı gecelerde; her seferinde yavaşça başlanan tek yeni aktif. Emin olmadığınızda azaltın ve güneş koruyucuyu asla atlamayın.',
  },

  es: {
    intro:
      'Los activos como la vitamina C, el retinol, el ácido salicílico y la niacinamida son los que hacen que una rutina funcione. Pero, combinados sin cuidado, pueden competir entre sí, anularse o saturar tu piel. Superponerlos bien se reduce a cuatro reglas: el orden correcto, el momento del día correcto, las combinaciones correctas y el ritmo correcto.',
    sections: [
      {
        heading: 'Regla 1: De lo más ligero a lo más denso',
        text: [
          'Aplica los productos de la textura más ligera y acuosa a la más rica, para que cada capa llegue a la piel. Deja aproximadamente un minuto entre uno y otro.',
        ],
        list: [
          '**Limpiador:** empieza con la piel limpia.',
          '**Sérum de tratamiento:** el activo que hace el trabajo principal, como la vitamina C, el retinol o el ácido salicílico.',
          '**Sérum hidratante:** el [[hyaluronic]], presionado sobre la piel ligeramente húmeda.',
          '**Crema:** la [[moisturizer]] sella todo lo anterior.',
          '**Protector solar (por la mañana):** siempre el último paso.',
        ],
      },
      {
        heading: 'Regla 2: Reparte entre mañana y noche',
        text: [
          'Algunos activos son de día y otros de noche. El [[vitamin-c]] es un activo de mañana: neutraliza el daño que causan el sol y la contaminación y trabaja junto a tu protector solar.',
          'El [[retinol]] y el [[salicylic]] son de noche. Ambos aumentan la sensibilidad al sol, y el retinol se degrada con la luz. La niacinamida y el ácido hialurónico son muy compatibles y funcionan a cualquier hora.',
        ],
      },
      {
        heading: 'Regla 3: Saber qué combinaciones separar',
        list: [
          '**Retinol + ácido salicílico:** nunca la misma noche. Altérnalos.',
          '**Vitamina C + retinol:** úsalos en momentos distintos, la vitamina C por la mañana y el retinol por la noche.',
          '**Dos activos exfoliantes a la vez:** evítalo. Exfoliar más no es mejor, solo más irritante.',
        ],
        after: [
          'Y las combinaciones que funcionan bien: el [[niacinamide]] con retinol (calma el enrojecimiento que puede causar el retinol, por eso nuestro sérum de retinol ya la contiene), la niacinamida con ácido salicílico, el ácido hialurónico con cualquier activo y la vitamina C con protector solar, que refuerza tu protección durante el día.',
        ],
      },
      {
        heading: 'Regla 4: Un activo nuevo cada vez',
        text: [
          'Introduce un activo nuevo, úsalo al menos dos semanas y solo entonces añade el siguiente. Si algo te irrita, sabrás exactamente qué ha sido.',
          'Empieza poco a poco: retinol dos veces por semana, ácido salicílico tres noches por semana y vitamina C en días alternos si tu piel es sensible. Aumenta solo cuando tu piel esté cómoda.',
        ],
      },
      {
        heading: 'Señales de que te has pasado',
        list: [
          'Escozor al aplicar incluso una crema sencilla',
          'Piel tirante, brillante y con aspecto "de cristal", pero seca al tacto',
          'Descamación, enrojecimiento o una textura áspera, como de papel de lija',
          'Granitos pequeños nuevos en zonas donde normalmente no te salen',
        ],
        after: [
          'Si ocurre, deja todos los activos durante una o dos semanas. Quédate solo con limpiador, sérum hidratante, crema y el [[sunscreen]] hasta que tu piel se calme, y después vuelve a introducir los activos de uno en uno y con menos frecuencia que antes.',
        ],
      },
      {
        heading: 'Una semana de ejemplo',
        list: [
          '**Todas las mañanas:** el [[cleanser]], vitamina C, ácido hialurónico, crema y protector solar. Las pieles grasas o con tendencia a granitos pueden añadir niacinamida después de la vitamina C.',
          '**Noches de retinol (2-3 por semana):** limpiador, retinol sobre la piel seca y crema.',
          '**Noches de ácido salicílico (2-3 por semana, nunca la misma noche que el retinol):** limpiador, ácido salicílico y crema.',
          '**Noches de descanso:** limpiador, ácido hialurónico y crema.',
        ],
      },
      {
        heading: 'Preguntas frecuentes',
        list: [
          '**¿Cuánto debo esperar entre capas?** Aproximadamente un minuto, hasta que la capa anterior ya no se note húmeda. La excepción es el retinol: aplícalo sobre la piel completamente seca.',
          '**¿Puedo usar niacinamida y vitamina C juntas?** Sí. El viejo consejo de separarlas no se aplica a las fórmulas modernas. Si notas rubor, simplemente úsalas en momentos distintos del día.',
          '**¿Necesito todos los activos?** No. La mayoría de las personas necesita uno o dos activos dirigidos a su preocupación principal, más hidratación y protector solar. Más productos significan más posibilidades de irritación, no mejores resultados.',
          '**¿Puedo mezclar sérums en la palma de la mano?** Mejor no. Aplícalos uno tras otro, en orden, para que cada uno funcione tal como fue formulado.',
        ],
      },
    ],
    summary:
      'De ligero a denso; vitamina C de día; retinol y ácido salicílico de noche y en noches distintas; un activo nuevo cada vez y empezando despacio. Ante la duda, reduce, y nunca te saltes el protector solar.',
  },

  ru: {
    intro:
      'Активы — витамин C, ретинол, салициловая кислота, ниацинамид — это то, благодаря чему уход работает. Но если наслаивать их бездумно, они могут конкурировать, ослаблять друг друга или перегружать кожу. Правильное наслаивание сводится к четырём правилам: верный порядок, верное время суток, верные сочетания и верный темп.',
    sections: [
      {
        heading: 'Правило 1. От лёгкого к плотному',
        text: [
          'Наносите средства от самой лёгкой, водянистой текстуры к самой плотной, чтобы каждый слой доходил до кожи. Давайте каждому около минуты, прежде чем наносить следующий.',
        ],
        list: [
          '**Очищение:** начинайте с чистой кожи.',
          '**Лечебная сыворотка:** актив, выполняющий главную задачу, — витамин C, ретинол или салициловая кислота.',
          '**Увлажняющая сыворотка:** [[hyaluronic]], вбитая в слегка влажную кожу.',
          '**Крем:** [[moisturizer]] запечатывает всё нанесённое.',
          '**Солнцезащитный крем (утром):** всегда последний шаг.',
        ],
      },
      {
        heading: 'Правило 2. Разделяйте утро и вечер',
        text: [
          'Одни активы предназначены для дня, другие — для ночи. [[vitamin-c]] — утренний актив: он нейтрализует вред от солнца и загрязнений и работает в паре с солнцезащитным кремом.',
          '[[retinol]] и [[salicylic]] — для вечера. Оба повышают чувствительность к солнцу, а ретинол ещё и разрушается на свету. Ниацинамид и гиалуроновая кислота неприхотливы и подходят для любого времени суток.',
        ],
      },
      {
        heading: 'Правило 3. Знайте, что не стоит сочетать',
        list: [
          '**Ретинол + салициловая кислота:** никогда в один вечер. Чередуйте их.',
          '**Витамин C + ретинол:** используйте в разное время — витамин C утром, ретинол вечером.',
          '**Два отшелушивающих актива одновременно:** не стоит. Больше отшелушивания — не лучше, а только сильнее раздражение.',
        ],
        after: [
          'А вот удачные сочетания: [[niacinamide]] с ретинолом (он успокаивает покраснение, которое может вызывать ретинол, — поэтому наша сыворотка с ретинолом уже его содержит), ниацинамид с салициловой кислотой, гиалуроновая кислота с чем угодно и витамин C с солнцезащитным кремом, который усиливает дневную защиту.',
        ],
      },
      {
        heading: 'Правило 4. Один новый актив за раз',
        text: [
          'Добавьте один новый актив, используйте его не меньше двух недель и только потом вводите следующий. Если что-то вызовет раздражение, вы будете точно знать, что именно.',
          'Начинайте с малого и постепенно: ретинол дважды в неделю, салициловая кислота три вечера в неделю, а витамин C через день, если кожа чувствительная. Увеличивайте частоту, только когда коже комфортно.',
        ],
      },
      {
        heading: 'Признаки того, что вы перестарались',
        list: [
          'Пощипывание даже от простого крема',
          'Кожа выглядит натянутой, блестящей, «стеклянной», но ощущается сухой',
          'Шелушение, покраснение или шершавость, как у наждачной бумаги',
          'Новые мелкие бугорки там, где обычно нет высыпаний',
        ],
        after: [
          'Если так случилось, отмените все активы на одну-две недели. Оставьте только очищение, увлажняющую сыворотку, крем и [[sunscreen]], пока кожа не успокоится, а затем возвращайте активы по одному и реже, чем раньше.',
        ],
      },
      {
        heading: 'Пример недели',
        list: [
          '**Каждое утро:** [[cleanser]], витамин C, гиалуроновая кислота, крем, солнцезащитное средство. При жирной или склонной к высыпаниям коже после витамина C можно добавить ниацинамид.',
          '**Вечера с ретинолом (2–3 в неделю):** очищение, ретинол на сухую кожу, крем.',
          '**Вечера с салициловой кислотой (2–3 в неделю, никогда в один вечер с ретинолом):** очищение, салициловая кислота, крем.',
          '**Вечера отдыха:** очищение, гиалуроновая кислота, крем.',
        ],
      },
      {
        heading: 'Частые вопросы',
        list: [
          '**Сколько ждать между слоями?** Около минуты, пока предыдущий слой не перестанет ощущаться влажным. Исключение — ретинол: его наносят на полностью сухую кожу.',
          '**Можно ли использовать ниацинамид и витамин C вместе?** Да. Старый совет разделять их к современным формулам не относится. Если заметите покраснение, просто используйте их в разное время суток.',
          '**Нужны ли мне все активы?** Нет. Большинству людей достаточно одного-двух активов под главную задачу плюс увлажнение и защита от солнца. Больше средств — это больше шансов на раздражение, а не лучший результат.',
          '**Можно ли смешивать сыворотки на ладони?** Лучше не стоит. Наносите их по очереди, по порядку, чтобы каждая работала так, как задумано в формуле.',
        ],
      },
    ],
    summary:
      'От лёгкого к плотному; витамин C днём; ретинол и салициловая кислота вечером и в разные вечера; один новый актив за раз, с постепенным стартом. Сомневаетесь — сократите, и никогда не пропускайте солнцезащитный крем.',
  },
}

export default copy

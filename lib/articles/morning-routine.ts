import type { Locale } from '../i18n'
import type { ArticleCopy } from './types'

const copy: Record<Locale, ArticleCopy> = {
  en: {
    intro:
      "A good morning routine has one job: to protect your skin for the day ahead. It doesn't need ten steps. Four well-chosen products, applied in the right order, will do more for your skin than a crowded shelf.",
    sections: [
      {
        heading: 'Why mornings are about protection',
        text: [
          'During the day your skin faces UV light, pollution, air conditioning and dry air. Morning products should defend against all of that: an antioxidant to neutralise damage, hydration to keep the barrier comfortable, and sunscreen to block UV.',
          'Save the heavy-duty renewal actives, such as retinol and exfoliating acids, for the evening. They make skin more sensitive to the sun and some break down in daylight.',
        ],
      },
      {
        heading: 'Step 1: Cleanse gently',
        text: [
          "Overnight your skin produces oil and sweat, and picks up whatever was left on your pillowcase. A gentle wash resets it without stripping the moisture you'll need all day.",
          '[[cleanser]] foams lightly and contains niacinamide, aloe vera, hyaluronic acid and panthenol, so it cleans without that tight, squeaky feeling. Use lukewarm water, never hot, and pat your face dry, leaving it slightly damp.',
        ],
      },
      {
        heading: 'Step 2: An antioxidant serum',
        text: [
          'Vitamin C is the classic morning active. It neutralises the free radicals created by sun and pollution and, used consistently, helps brighten and even out skin tone.',
          '[[vitamin-c]] combines 5% pure L-ascorbic acid with ferulic acid and vitamin E, which help keep the vitamin C stable and effective. Apply 4–5 drops to clean skin. If your skin is sensitive, start every other morning. Storing it in the fridge helps it stay fresh for longer.',
        ],
      },
      {
        heading: 'Step 3: Hydrate, then moisturise',
        text: [
          'Hydration and moisture are two different jobs. Hyaluronic acid pulls water into the skin; a cream seals that water in.',
          'Press 3–4 drops of [[hyaluronic]] onto damp skin (a quick mist of water works) and follow straight away with [[moisturizer]]. Its 2% vitamin B5 calms and supports the barrier. If your skin is oily, a thin layer is enough.',
        ],
      },
      {
        heading: 'Step 4: Sunscreen, every single day',
        text: [
          "This is the step that matters most. UV exposure drives dark spots, early lines and the marks breakouts leave behind, and it reaches you through clouds and windows too. Without sunscreen, the rest of your routine can't do its job.",
          '[[sunscreen]] gives broad-spectrum UVA/UVB protection in a lightweight, non-greasy texture. Use roughly two finger-lengths for face and neck, apply it 15 minutes before going out, and reapply every two hours outdoors or after sweating or swimming.',
        ],
      },
      {
        heading: 'Adapting it to your skin',
        list: [
          '**Oily or blemish-prone:** add [[niacinamide]] after vitamin C to help balance oil and refine the look of pores, and keep the moisturiser layer light.',
          '**Dry:** be generous with the hydrating serum and moisturiser, and use cream on your neck too.',
          '**Sensitive:** keep it to cleanser, moisturiser and sunscreen at first, then add vitamin C every other morning once your skin is calm.',
        ],
      },
      {
        heading: 'Common morning mistakes',
        list: [
          '**Skipping sunscreen on cloudy or indoor days.** UVA passes through clouds and window glass, so those days still count.',
          '**Using too little.** A thin layer gives far less protection than the SPF on the label. Two finger-lengths for face and neck is the rule of thumb.',
          '**Using acids without sunscreen.** Exfoliating acids leave fresh skin more exposed to UV, so whenever you use them, daily SPF is a must.',
          '**Rushing the layers.** Give each product about a minute, so the next one doesn\'t pill or slide off.',
          '**Changing everything at once.** Add one new product at a time, so you can tell what is actually working.',
        ],
      },
    ],
    summary:
      'Cleanse, vitamin C, hydrate and moisturise, then SPF 50, in that order every morning. Give any new routine 4–6 weeks before judging the results.',
  },

  ar: {
    intro:
      'للروتين الصباحي الجيد مهمة واحدة: حماية بشرتك طوال اليوم. لا يحتاج إلى عشر خطوات؛ فأربعة منتجات مختارة بعناية وتُستخدم بالترتيب الصحيح تقدّم لبشرتك أكثر مما يقدّمه رفّ مزدحم بالمنتجات.',
    sections: [
      {
        heading: 'لماذا يرتبط الصباح بالحماية؟',
        text: [
          'تتعرض بشرتك خلال النهار للأشعة فوق البنفسجية والتلوث والمكيفات والهواء الجاف. لذلك يجب أن تدافع منتجات الصباح عنها: مضاد أكسدة يحدّ من الضرر، وترطيب يحافظ على راحة الحاجز الواقي، وواقٍ شمسي يصدّ الأشعة.',
          'احتفظ بالمكونات الفعّالة القوية مثل الريتينول والأحماض المقشّرة للمساء، فهي تزيد حساسية البشرة للشمس وبعضها يتحلل في ضوء النهار.',
        ],
      },
      {
        heading: 'الخطوة 1: تنظيف لطيف',
        text: [
          'خلال الليل تفرز بشرتك الزيوت والعرق، وتلتقط ما تبقّى على وسادتك. الغسل اللطيف يعيد توازنها دون أن يسلبها الرطوبة التي تحتاجها طوال اليوم.',
          'يكوّن [[cleanser]] رغوة خفيفة ويحتوي على النياسيناميد والصبار وحمض الهيالورونيك والبانثينول، فينظّف دون ذلك الشعور بالشدّ. استخدم ماءً فاتراً لا ساخناً، وجفّف وجهك بالتربيت مع إبقائه رطباً قليلاً.',
        ],
      },
      {
        heading: 'الخطوة 2: سيروم مضاد للأكسدة',
        text: [
          'فيتامين سي هو المكوّن الصباحي الأشهر؛ فهو يعادل الجذور الحرة الناتجة عن الشمس والتلوث، ومع الاستخدام المنتظم يساعد على تفتيح البشرة وتوحيد لونها.',
          'يجمع [[vitamin-c]] بين حمض الأسكوربيك النقي بتركيز 5% وحمض الفيروليك وفيتامين E اللذين يساعدان على ثبات فيتامين سي وفعاليته. ضع 4-5 قطرات على بشرة نظيفة. إذا كانت بشرتك حساسة فابدأ به يوماً بعد يوم، ويساعد حفظه في الثلاجة على بقائه طازجاً لفترة أطول.',
        ],
      },
      {
        heading: 'الخطوة 3: رطّب ثم رطّب بعمق',
        text: [
          'الترطيب المائي والترطيب الدهني مهمتان مختلفتان: حمض الهيالورونيك يجذب الماء إلى البشرة، والكريم يحبس هذا الماء داخلها.',
          'اضغط 3-4 قطرات من [[hyaluronic]] على بشرة رطبة (يكفي رذاذ خفيف من الماء)، ثم ضع مباشرةً [[moisturizer]] الذي يحتوي على فيتامين B5 بتركيز 2% لتهدئة البشرة ودعم حاجزها. إذا كانت بشرتك دهنية فتكفي طبقة رقيقة.',
        ],
      },
      {
        heading: 'الخطوة 4: واقي الشمس كل يوم دون استثناء',
        text: [
          'هذه هي الخطوة الأهم. فالتعرض للأشعة فوق البنفسجية يسبب البقع الداكنة والخطوط المبكرة والآثار التي تتركها الحبوب، وهي تصل إليك عبر الغيوم والنوافذ أيضاً. ومن دون واقٍ شمسي لا يستطيع باقي روتينك أداء دوره.',
          'يوفر [[sunscreen]] حماية واسعة الطيف من أشعة UVA وUVB بقوام خفيف غير دهني. استخدم كمية تعادل طول إصبعين تقريباً للوجه والرقبة، وضعه قبل الخروج بـ15 دقيقة، وأعد وضعه كل ساعتين في الخارج أو بعد التعرق أو السباحة.',
        ],
      },
      {
        heading: 'كيّف الروتين حسب بشرتك',
        list: [
          '**البشرة الدهنية أو المعرّضة للحبوب:** أضف [[niacinamide]] بعد فيتامين سي للمساعدة على موازنة الدهون وتحسين مظهر المسام، واجعل طبقة المرطب خفيفة.',
          '**البشرة الجافة:** كن سخياً في كمية السيروم المرطب والكريم، ولا تنسَ الرقبة.',
          '**البشرة الحساسة:** اكتفِ في البداية بالغسول والمرطب وواقي الشمس، ثم أضف فيتامين سي يوماً بعد يوم بعد أن تهدأ بشرتك.',
        ],
      },
      {
        heading: 'أخطاء صباحية شائعة',
        list: [
          '**التخلي عن واقي الشمس في الأيام الغائمة أو داخل المنزل.** تخترق أشعة UVA الغيوم وزجاج النوافذ، لذا فهذه الأيام تُحتسب أيضاً.',
          '**استخدام كمية قليلة.** الطبقة الرقيقة توفر حماية أقل بكثير من عامل الحماية المكتوب على العبوة. القاعدة العامة: طول إصبعين للوجه والرقبة.',
          '**استخدام الأحماض دون واقي شمس.** تجعل الأحماض المقشّرة البشرة الجديدة أكثر عرضة للأشعة، لذا فإن واقي الشمس اليومي ضروري كلما استخدمتها.',
          '**الاستعجال بين الطبقات.** امنح كل منتج دقيقة تقريباً حتى لا يتكتّل المنتج التالي أو ينزلق.',
          '**تغيير كل شيء دفعة واحدة.** أضف منتجاً جديداً واحداً في كل مرة لتعرف ما الذي ينجح فعلاً.',
        ],
      },
    ],
    summary:
      'تنظيف، ثم فيتامين سي، ثم ترطيب، ثم واقي شمس SPF 50، بهذا الترتيب كل صباح. امنح أي روتين جديد 4-6 أسابيع قبل الحكم على نتائجه.',
  },

  tr: {
    intro:
      'İyi bir sabah rutininin tek bir görevi vardır: cildinizi gün boyunca korumak. Bunun için on adıma gerek yok. Doğru sırayla uygulanan, özenle seçilmiş dört ürün, kalabalık bir raftan çok daha fazlasını yapar.',
    sections: [
      {
        heading: 'Sabahlar neden korumayla ilgilidir?',
        text: [
          'Gün içinde cildiniz UV ışınlarına, kirliliğe, klimaya ve kuru havaya maruz kalır. Sabah ürünleri tüm bunlara karşı savunma yapmalıdır: hasarı nötralize eden bir antioksidan, bariyeri rahat tutan nem ve UV ışınlarını engelleyen güneş koruyucu.',
          'Retinol ve eksfoliyan asitler gibi güçlü yenileyici aktifleri akşama saklayın. Bunlar cildi güneşe karşı daha hassas hale getirir ve bazıları gün ışığında bozunur.',
        ],
      },
      {
        heading: '1. Adım: Nazikçe temizleyin',
        text: [
          'Gece boyunca cildiniz yağ ve ter üretir, yastık kılıfında kalanları da toplar. Nazik bir yıkama, gün boyu ihtiyaç duyacağınız nemi almadan cildi sıfırlar.',
          '[[cleanser]] hafifçe köpürür ve niacinamide, aloe vera, hyaluronik asit ve panthenol içerir; bu sayede gerginlik hissi bırakmadan temizler. Sıcak değil ılık su kullanın ve yüzünüzü hafif nemli kalacak şekilde tampon yaparak kurulayın.',
        ],
      },
      {
        heading: '2. Adım: Antioksidan serum',
        text: [
          'C vitamini sabahların klasik aktifidir. Güneş ve kirliliğin oluşturduğu serbest radikalleri nötralize eder ve düzenli kullanıldığında cilt tonunu aydınlatıp eşitlemeye yardımcı olur.',
          '[[vitamin-c]], %5 saf L-askorbik asidi, C vitaminini stabil ve etkili tutmaya yardımcı olan ferulik asit ve E vitaminiyle birleştirir. Temiz cilde 4-5 damla uygulayın. Cildiniz hassassa gün aşırı başlayın. Buzdolabında saklamak daha uzun süre taze kalmasına yardımcı olur.',
        ],
      },
      {
        heading: '3. Adım: Önce nem, sonra nemlendirici',
        text: [
          'Nem vermek ve nemi korumak iki farklı iştir. Hyaluronik asit cilde su çeker; krem ise bu suyu içeride tutar.',
          '[[hyaluronic]] ürününden 3-4 damlayı nemli cilde bastırarak uygulayın (hafif bir su spreyi yeterli), hemen ardından [[moisturizer]] kullanın. İçerdiği %2 B5 vitamini cildi yatıştırır ve bariyeri destekler. Cildiniz yağlıysa ince bir katman yeterlidir.',
        ],
      },
      {
        heading: '4. Adım: Her gün güneş koruyucu',
        text: [
          'En önemli adım budur. UV ışınları koyu lekelere, erken çizgilere ve sivilcelerin bıraktığı izlere yol açar; üstelik bulutların ve camların arkasından da size ulaşır. Güneş koruyucu olmadan rutininizin geri kalanı işini yapamaz.',
          '[[sunscreen]], hafif ve yağsız bir dokuyla geniş spektrumlu UVA/UVB koruması sağlar. Yüz ve boyun için yaklaşık iki parmak boyu ürün kullanın, dışarı çıkmadan 15 dakika önce uygulayın ve açık havada her iki saatte bir ya da terledikten veya yüzdükten sonra yenileyin.',
        ],
      },
      {
        heading: 'Rutini cildinize göre uyarlayın',
        list: [
          '**Yağlı veya sivilceye eğilimli cilt:** yağ dengesine yardımcı olmak ve gözeneklerin görünümünü inceltmek için C vitamininden sonra [[niacinamide]] ekleyin; nemlendiriciyi hafif tutun.',
          '**Kuru cilt:** nemlendirici serum ve kremi cömertçe kullanın, boynunuzu da unutmayın.',
          '**Hassas cilt:** başlangıçta temizleyici, nemlendirici ve güneş koruyucuyla yetinin; cildiniz sakinleştiğinde C vitaminini gün aşırı ekleyin.',
        ],
      },
      {
        heading: 'Sık yapılan sabah hataları',
        list: [
          '**Bulutlu günlerde veya evdeyken güneş koruyucuyu atlamak.** UVA ışınları bulutlardan ve pencere camından geçer; bu günler de sayılır.',
          '**Çok az ürün kullanmak.** İnce bir katman, etikette yazan SPF\'den çok daha az koruma sağlar. Yüz ve boyun için iki parmak boyu temel kuraldır.',
          '**Asitleri güneş koruyucu olmadan kullanmak.** Eksfoliyan asitler yenilenen cildi UV\'ye karşı daha açık bırakır; bu yüzden onları kullandığınız her dönemde günlük SPF şarttır.',
          '**Katmanları aceleye getirmek.** Bir sonraki ürün topaklanmasın veya kaymasın diye her ürüne yaklaşık bir dakika verin.',
          '**Her şeyi aynı anda değiştirmek.** Neyin gerçekten işe yaradığını anlamak için her seferinde tek bir yeni ürün ekleyin.',
        ],
      },
    ],
    summary:
      'Temizleyin, C vitamini uygulayın, nem verip nemlendirin, ardından SPF 50; her sabah bu sırayla. Yeni bir rutini değerlendirmeden önce ona 4-6 hafta verin.',
  },

  es: {
    intro:
      'Una buena rutina de mañana tiene una sola misión: proteger tu piel durante el día. No necesita diez pasos. Cuatro productos bien elegidos, aplicados en el orden correcto, harán más por tu piel que una estantería llena.',
    sections: [
      {
        heading: 'Por qué la mañana va de protección',
        text: [
          'Durante el día tu piel se enfrenta a la luz UV, la contaminación, el aire acondicionado y el aire seco. Los productos de la mañana deben defenderla de todo ello: un antioxidante que neutralice el daño, hidratación que mantenga la barrera cómoda y protector solar que bloquee los rayos UV.',
          'Reserva para la noche los activos renovadores más potentes, como el retinol y los ácidos exfoliantes. Aumentan la sensibilidad al sol y algunos se degradan con la luz del día.',
        ],
      },
      {
        heading: 'Paso 1: Limpia con suavidad',
        text: [
          'Durante la noche tu piel produce grasa y sudor, y recoge lo que quedó en la almohada. Un lavado suave la equilibra sin quitarle la hidratación que necesitará todo el día.',
          'El [[cleanser]] hace una espuma ligera y contiene niacinamida, aloe vera, ácido hialurónico y pantenol, así que limpia sin esa sensación de tirantez. Usa agua tibia, nunca caliente, y seca a toquecitos dejando la piel ligeramente húmeda.',
        ],
      },
      {
        heading: 'Paso 2: Un sérum antioxidante',
        text: [
          'La vitamina C es el activo clásico de la mañana. Neutraliza los radicales libres que generan el sol y la contaminación y, con un uso constante, ayuda a iluminar y unificar el tono.',
          'El [[vitamin-c]] combina un 5% de ácido L-ascórbico puro con ácido ferúlico y vitamina E, que ayudan a mantener la vitamina C estable y eficaz. Aplica 4-5 gotas sobre la piel limpia. Si tu piel es sensible, empieza en días alternos. Guardarlo en la nevera ayuda a que se conserve fresco más tiempo.',
        ],
      },
      {
        heading: 'Paso 3: Hidrata y luego sella',
        text: [
          'Hidratar y nutrir son dos tareas distintas. El ácido hialurónico atrae agua hacia la piel; una crema la mantiene dentro.',
          'Presiona 3-4 gotas del [[hyaluronic]] sobre la piel húmeda (basta con una bruma de agua) y aplica enseguida la [[moisturizer]]. Su 2% de vitamina B5 calma y refuerza la barrera. Si tu piel es grasa, con una capa fina es suficiente.',
        ],
      },
      {
        heading: 'Paso 4: Protector solar, todos los días',
        text: [
          'Este es el paso más importante. La radiación UV provoca manchas, líneas prematuras y las marcas que dejan los granitos, y te alcanza también a través de las nubes y los cristales. Sin protector solar, el resto de la rutina no puede hacer su trabajo.',
          'El [[sunscreen]] ofrece protección de amplio espectro UVA/UVB con una textura ligera y no grasa. Usa aproximadamente dos dedos de producto para rostro y cuello, aplícalo 15 minutos antes de salir y reaplícalo cada dos horas al aire libre o después de sudar o nadar.',
        ],
      },
      {
        heading: 'Adáptala a tu piel',
        list: [
          '**Grasa o con tendencia a granitos:** añade el [[niacinamide]] después de la vitamina C para ayudar a equilibrar la grasa y afinar el aspecto de los poros, y usa poca crema.',
          '**Seca:** sé generosa con el sérum hidratante y la crema, y aplícala también en el cuello.',
          '**Sensible:** al principio limítate a limpiador, crema y protector solar; cuando la piel esté tranquila, añade la vitamina C en días alternos.',
        ],
      },
      {
        heading: 'Errores habituales por la mañana',
        list: [
          '**Saltarse el protector en días nublados o en casa.** Los rayos UVA atraviesan las nubes y el cristal de las ventanas, así que esos días también cuentan.',
          '**Aplicar muy poca cantidad.** Una capa fina protege mucho menos de lo que indica el SPF de la etiqueta. La regla general: dos dedos de producto para rostro y cuello.',
          '**Usar ácidos sin protector solar.** Los ácidos exfoliantes dejan la piel renovada más expuesta a los rayos UV, así que siempre que los uses, el SPF diario es imprescindible.',
          '**Aplicar las capas con prisa.** Deja aproximadamente un minuto entre productos para que el siguiente no haga bolitas ni resbale.',
          '**Cambiarlo todo a la vez.** Añade un producto nuevo cada vez para saber qué está funcionando de verdad.',
        ],
      },
    ],
    summary:
      'Limpia, vitamina C, hidrata y sella, y después SPF 50: en ese orden, cada mañana. Dale a cualquier rutina nueva 4-6 semanas antes de juzgar los resultados.',
  },

  ru: {
    intro:
      'У хорошего утреннего ухода одна задача — защитить кожу на весь день. Для этого не нужно десять шагов. Четыре правильно подобранных средства, нанесённых в верном порядке, дадут коже больше, чем переполненная полка.',
    sections: [
      {
        heading: 'Почему утро — это защита',
        text: [
          'Днём кожа сталкивается с ультрафиолетом, загрязнением воздуха, кондиционерами и сухостью. Утренние средства должны защищать от всего этого: антиоксидант нейтрализует повреждения, увлажнение поддерживает комфорт барьера, а солнцезащитный крем блокирует УФ-лучи.',
          'Мощные обновляющие активы — ретинол и отшелушивающие кислоты — оставьте на вечер. Они повышают чувствительность кожи к солнцу, а некоторые разрушаются на дневном свету.',
        ],
      },
      {
        heading: 'Шаг 1. Мягкое очищение',
        text: [
          'За ночь кожа вырабатывает себум и пот и собирает всё, что осталось на наволочке. Мягкое умывание возвращает её в норму, не лишая влаги, которая понадобится весь день.',
          'Средство [[cleanser]] даёт лёгкую пену и содержит ниацинамид, алоэ вера, гиалуроновую кислоту и пантенол, поэтому очищает без чувства стянутости. Используйте тёплую, а не горячую воду и промокните лицо полотенцем, оставив кожу слегка влажной.',
        ],
      },
      {
        heading: 'Шаг 2. Антиоксидантная сыворотка',
        text: [
          'Витамин C — классический утренний актив. Он нейтрализует свободные радикалы, которые образуются под действием солнца и загрязнений, а при регулярном применении помогает сделать тон кожи светлее и ровнее.',
          'Средство [[vitamin-c]] сочетает 5% чистой L-аскорбиновой кислоты с феруловой кислотой и витамином E, которые помогают сохранять витамин C стабильным и эффективным. Нанесите 4–5 капель на чистую кожу. Если кожа чувствительная, начните с применения через день. Хранение в холодильнике помогает средству дольше оставаться свежим.',
        ],
      },
      {
        heading: 'Шаг 3. Увлажнить, затем запечатать',
        text: [
          'Увлажнение и питание — разные задачи. Гиалуроновая кислота притягивает воду в кожу, а крем удерживает её внутри.',
          'Вбейте 3–4 капли средства [[hyaluronic]] во влажную кожу (достаточно сбрызнуть лицо водой) и сразу нанесите [[moisturizer]]. Его 2% витамина B5 успокаивают кожу и поддерживают барьер. Для жирной кожи достаточно тонкого слоя.',
        ],
      },
      {
        heading: 'Шаг 4. Солнцезащитный крем — каждый день',
        text: [
          'Это самый важный шаг. Ультрафиолет вызывает пигментные пятна, ранние морщины и следы постакне, а проникает он и сквозь облака, и через окна. Без защиты от солнца остальной уход не сможет работать.',
          'Средство [[sunscreen]] обеспечивает защиту широкого спектра UVA/UVB в лёгкой нежирной текстуре. Используйте примерно две длины пальца для лица и шеи, наносите за 15 минут до выхода и обновляйте каждые два часа на улице, а также после того как вспотели или искупались.',
        ],
      },
      {
        heading: 'Как адаптировать уход под свою кожу',
        list: [
          '**Жирная или склонная к высыпаниям:** добавьте [[niacinamide]] после витамина C, чтобы помочь сбалансировать выработку себума и сделать поры менее заметными; крем наносите тонким слоем.',
          '**Сухая:** не экономьте на увлажняющей сыворотке и креме и наносите крем также на шею.',
          '**Чувствительная:** сначала ограничьтесь очищением, кремом и защитой от солнца, а когда кожа успокоится, добавьте витамин C через день.',
        ],
      },
      {
        heading: 'Частые утренние ошибки',
        list: [
          '**Пропускать солнцезащитный крем в пасмурные дни или дома.** Лучи UVA проходят сквозь облака и оконное стекло, так что такие дни тоже считаются.',
          '**Наносить слишком мало.** Тонкий слой защищает гораздо слабее, чем обещает SPF на упаковке. Ориентир — две длины пальца для лица и шеи.',
          '**Использовать кислоты без защиты от солнца.** Отшелушивающие кислоты делают обновлённую кожу уязвимее к ультрафиолету, поэтому, пока вы их используете, ежедневный SPF обязателен.',
          '**Торопиться между слоями.** Давайте каждому средству около минуты, чтобы следующее не скатывалось и не соскальзывало.',
          '**Менять всё сразу.** Добавляйте по одному новому средству, чтобы понимать, что действительно работает.',
        ],
      },
    ],
    summary:
      'Очищение, витамин C, увлажнение и крем, затем SPF 50 — в этом порядке каждое утро. Дайте любому новому уходу 4–6 недель, прежде чем оценивать результат.',
  },
}

export default copy

import type { Locale } from '../i18n'
import type { ArticleCopy } from './types'

const copy: Record<Locale, ArticleCopy> = {
  en: {
    intro:
      "Night is when your skin focuses on repair, and when you can use the actives that daylight would undermine. The goal isn't to use everything at once. It's to give one or two well-chosen actives the right conditions to work.",
    sections: [
      {
        heading: 'Why the evening is for actives',
        text: [
          'Retinol and exfoliating acids make skin more sensitive to the sun, and some actives break down in light. In the evening there is no UV, no makeup and no sunscreen layered on top, so they can absorb and work undisturbed.',
          'Skin also loses more water overnight, which is why a good night routine always ends with hydration and a moisturiser that supports the barrier while you sleep.',
        ],
      },
      {
        heading: 'Step 1: Cleanse properly',
        text: [
          "By evening your skin is carrying sunscreen, makeup, oil and pollution. Actives can't do much through that layer.",
          '[[cleanser]] removes the day without stripping. If you wore heavy makeup or water-resistant sunscreen, wash twice. Then let your skin dry completely before applying retinol: damp skin lets it penetrate faster, which increases the risk of irritation.',
        ],
      },
      {
        heading: 'Step 2: Choose one main active',
        text: ['Pick the active that matches your main goal, and use one per night:'],
        list: [
          '**Fine lines and uneven texture:** [[retinol]] uses 0.2% encapsulated retinol for a slow, gentle release, with niacinamide to reduce redness. Start twice a week and increase gradually as your skin adjusts.',
          '**Breakouts and blackheads:** [[salicylic]] is a 2% BHA that clears inside the pores. Start three nights a week, avoid the eye area and build up slowly.',
          '**Dull, tired-looking skin:** [[cell-renewal]] uses salmon oil to support natural cell turnover. It is a gentle choice for nights when you are not using retinol or acids.',
        ],
      },
      {
        heading: "Don't double up",
        text: [
          "Retinol and salicylic acid are both effective, and both can irritate. Never use them on the same night: alternate nights instead. Rest nights, with no actives at all, are part of the routine, not a step back.",
        ],
        list: [
          '**Monday:** retinol',
          '**Tuesday:** rest (hydrate and moisturise only)',
          '**Wednesday:** salicylic acid',
          '**Thursday:** retinol',
          '**Friday:** rest',
          '**Weekend:** cell renewal serum on one night, rest on the other',
        ],
      },
      {
        heading: 'Step 3: Support the barrier',
        text: [
          '[[niacinamide]] strengthens the barrier and calms redness, so it pairs well with retinol. On rest nights, press a few drops of [[hyaluronic]] onto damp skin and finish with [[moisturizer]], whose 2% vitamin B5 soothes and helps prevent dryness.',
          'If your skin is sensitive, use the "sandwich" method on retinol nights: a thin layer of moisturiser, then retinol, then moisturiser again. It slows absorption just enough to keep things comfortable.',
        ],
      },
      {
        heading: 'Common night-time mistakes',
        list: [
          '**Applying retinol to damp skin.** It speeds up absorption and raises the risk of irritation. Wait until your skin is completely dry.',
          '**Using too much.** A few drops cover the whole face. More doesn\'t work faster; it just irritates more.',
          '**Going too close to sensitive areas.** Skin around the eyes and the corners of the nose and mouth is thinner, so apply sparingly there or avoid it.',
          '**Giving up in the first month.** Mild dryness or flaking in the first weeks of retinol is common. Use it less often rather than stopping; visible results take 8–12 weeks.',
          '**Dropping sunscreen in winter.** UV is lower but still present, and skin using retinol stays more sensitive all year.',
        ],
      },
      {
        heading: 'The morning after',
        text: [
          'Retinol and acids leave fresh skin more vulnerable to UV, so sunscreen the next morning is not optional. Apply [[sunscreen]] every day, even when it is cloudy or you are mostly indoors, or the work you did overnight will be undone by the sun.',
        ],
      },
    ],
    summary:
      'Cleanse well, let skin dry, use one main active, then hydrate and moisturise. Never combine retinol and salicylic acid on the same night, keep rest nights, and always wear sunscreen the next morning.',
  },

  ar: {
    intro:
      'الليل هو الوقت الذي تركّز فيه بشرتك على الإصلاح، والوقت الذي يمكنك فيه استخدام المكونات الفعّالة التي يضعف ضوء النهار مفعولها. الهدف ليس استخدام كل شيء دفعة واحدة، بل منح مكوّن أو اثنين مختارين بعناية الظروف المناسبة للعمل.',
    sections: [
      {
        heading: 'لماذا يُخصَّص المساء للمكونات الفعّالة؟',
        text: [
          'يزيد الريتينول والأحماض المقشّرة من حساسية البشرة للشمس، وبعض المكونات الفعّالة تتحلل في الضوء. في المساء لا توجد أشعة فوق بنفسجية ولا مكياج ولا واقٍ شمسي فوقها، فتمتصها البشرة وتعمل دون عوائق.',
          'كما تفقد البشرة مزيداً من الماء أثناء الليل، ولهذا ينتهي الروتين الليلي الجيد دائماً بالترطيب وبمرطب يدعم الحاجز الواقي أثناء نومك.',
        ],
      },
      {
        heading: 'الخطوة 1: تنظيف جيد',
        text: [
          'بحلول المساء تحمل بشرتك واقي الشمس والمكياج والدهون والتلوث، ولا تستطيع المكونات الفعّالة أن تعمل جيداً عبر هذه الطبقة.',
          'يزيل [[cleanser]] آثار اليوم دون أن يجرّد البشرة من رطوبتها. إذا وضعت مكياجاً كثيفاً أو واقي شمس مقاوماً للماء فاغسل وجهك مرتين. ثم اترك بشرتك تجفّ تماماً قبل وضع الريتينول، لأن البشرة الرطبة تسمح بتغلغله أسرع، مما يزيد خطر التهيج.',
        ],
      },
      {
        heading: 'الخطوة 2: اختر مكوّناً فعّالاً رئيسياً واحداً',
        text: ['اختر المكوّن الذي يناسب هدفك الأساسي، واستخدم مكوّناً واحداً في الليلة:'],
        list: [
          '**الخطوط الدقيقة وعدم انتظام الملمس:** يستخدم [[retinol]] ريتينول مغلّفاً بتركيز 0.2% يتحرر ببطء ولطف، مع النياسيناميد لتخفيف الاحمرار. ابدأ به مرتين أسبوعياً وزِد تدريجياً مع تأقلم بشرتك.',
          '**الحبوب والرؤوس السوداء:** [[salicylic]] هو حمض BHA بتركيز 2% ينظّف المسام من الداخل. ابدأ به ثلاث ليالٍ أسبوعياً، وتجنّب منطقة العين، وزِد الاستخدام ببطء.',
          '**البشرة الباهتة والمتعبة:** يستخدم [[cell-renewal]] زيت السلمون لدعم التجدد الطبيعي للخلايا، وهو خيار لطيف لليالي التي لا تستخدم فيها الريتينول أو الأحماض.',
        ],
      },
      {
        heading: 'لا تجمع بينهما',
        text: [
          'الريتينول وحمض الساليسيليك فعّالان، وكلاهما قد يسبب التهيج. لا تستخدمهما أبداً في الليلة نفسها، بل بدّل بينهما. وليالي الراحة الخالية من المكونات الفعّالة جزء من الروتين وليست تراجعاً.',
        ],
        list: [
          '**الاثنين:** ريتينول',
          '**الثلاثاء:** راحة (ترطيب فقط)',
          '**الأربعاء:** حمض الساليسيليك',
          '**الخميس:** ريتينول',
          '**الجمعة:** راحة',
          '**عطلة نهاية الأسبوع:** سيروم تجديد الخلايا في ليلة، وراحة في الأخرى',
        ],
      },
      {
        heading: 'الخطوة 3: ادعم الحاجز الواقي',
        text: [
          'يقوّي [[niacinamide]] الحاجز الواقي ويهدّئ الاحمرار، لذا يتناسب جيداً مع الريتينول. وفي ليالي الراحة اضغط بضع قطرات من [[hyaluronic]] على بشرة رطبة، ثم اختم بـ[[moisturizer]] الذي يهدّئ البشرة بفضل فيتامين B5 بتركيز 2% ويساعد على منع الجفاف.',
          'إذا كانت بشرتك حساسة فاستخدم طريقة "الساندويتش" في ليالي الريتينول: طبقة رقيقة من المرطب، ثم الريتينول، ثم المرطب مرة أخرى. هذا يبطئ الامتصاص بالقدر الكافي ليبقى الاستخدام مريحاً.',
        ],
      },
      {
        heading: 'أخطاء ليلية شائعة',
        list: [
          '**وضع الريتينول على بشرة رطبة.** فذلك يسرّع امتصاصه ويزيد خطر التهيج. انتظر حتى تجفّ بشرتك تماماً.',
          '**استخدام كمية كبيرة.** بضع قطرات تكفي للوجه كله. الكمية الأكبر لا تعمل أسرع، بل تزيد التهيج فقط.',
          '**الاقتراب كثيراً من المناطق الحساسة.** الجلد حول العينين وعند زوايا الأنف والفم أرقّ، فضع كمية قليلة جداً هناك أو تجنّبها.',
          '**الاستسلام في الشهر الأول.** الجفاف الخفيف أو التقشر في الأسابيع الأولى من الريتينول أمر شائع. قلّل عدد مرات الاستخدام بدلاً من التوقف، فالنتائج الواضحة تحتاج 8-12 أسبوعاً.',
          '**التوقف عن واقي الشمس في الشتاء.** الأشعة أقل لكنها موجودة، والبشرة التي تستخدم الريتينول تبقى أكثر حساسية طوال العام.',
        ],
      },
      {
        heading: 'في صباح اليوم التالي',
        text: [
          'يجعل الريتينول والأحماض البشرة الجديدة أكثر عرضة للأشعة فوق البنفسجية، لذلك فإن واقي الشمس في الصباح التالي ليس خياراً. ضع [[sunscreen]] كل يوم، حتى في الأيام الغائمة أو عندما تبقى في الداخل معظم الوقت، وإلا ستُضيّع الشمس ما أنجزته بشرتك أثناء الليل.',
        ],
      },
    ],
    summary:
      'نظّف جيداً، واترك البشرة تجفّ، واستخدم مكوّناً فعّالاً رئيسياً واحداً، ثم رطّب. لا تجمع الريتينول وحمض الساليسيليك في الليلة نفسها، وحافظ على ليالي الراحة، وضع واقي الشمس دائماً في الصباح التالي.',
  },

  tr: {
    intro:
      'Gece, cildinizin onarıma odaklandığı ve gün ışığının etkisini zayıflatacağı aktifleri kullanabileceğiniz zamandır. Amaç her şeyi aynı anda kullanmak değil; özenle seçilmiş bir ya da iki aktife çalışmaları için doğru koşulları sağlamaktır.',
    sections: [
      {
        heading: 'Akşamlar neden aktiflere ayrılır?',
        text: [
          'Retinol ve eksfoliyan asitler cildi güneşe karşı daha hassas yapar, bazı aktifler de ışıkta bozunur. Akşam UV ışını, makyaj ya da üstte güneş koruyucu katmanı olmadığından bu aktifler rahatça emilir ve çalışır.',
          'Cilt gece boyunca daha fazla su kaybeder; bu yüzden iyi bir gece rutini her zaman nem ve uyurken bariyeri destekleyen bir nemlendiriciyle biter.',
        ],
      },
      {
        heading: '1. Adım: İyice temizleyin',
        text: [
          'Akşam olduğunda cildinizde güneş koruyucu, makyaj, yağ ve kirlilik birikmiştir. Aktifler bu katmanın arkasından pek bir şey yapamaz.',
          '[[cleanser]], cildi kurutmadan günün kalıntılarını temizler. Yoğun makyaj ya da suya dayanıklı güneş koruyucu kullandıysanız iki kez yıkayın. Ardından retinol uygulamadan önce cildinizin tamamen kurumasını bekleyin: nemli cilt retinolün daha hızlı nüfuz etmesine ve tahriş riskinin artmasına yol açar.',
        ],
      },
      {
        heading: '2. Adım: Tek bir ana aktif seçin',
        text: ['Ana hedefinize uygun aktifi seçin ve her gece yalnızca birini kullanın:'],
        list: [
          '**İnce çizgiler ve pürüzlü doku:** [[retinol]], yavaş ve nazik salınım için %0,2 kapsüllenmiş retinol ve kızarıklığı azaltan niacinamide içerir. Haftada iki kez başlayın, cildiniz alıştıkça sıklığı kademeli olarak artırın.',
          '**Sivilceler ve siyah noktalar:** [[salicylic]], gözeneklerin içini temizleyen %2 BHA içerir. Haftada üç geceyle başlayın, göz çevresinden kaçının ve yavaşça artırın.',
          '**Mat ve yorgun görünen cilt:** [[cell-renewal]], doğal hücre yenilenmesini desteklemek için somon yağı içerir. Retinol veya asit kullanmadığınız geceler için nazik bir seçenektir.',
        ],
      },
      {
        heading: 'İkisini aynı gece kullanmayın',
        text: [
          'Retinol ve salisilik asit ikisi de etkilidir ve ikisi de tahriş edebilir. Onları asla aynı gece kullanmayın; geceleri dönüşümlü uygulayın. Hiç aktif kullanılmayan dinlenme geceleri de rutinin bir parçasıdır, geri adım değildir.',
        ],
        list: [
          '**Pazartesi:** retinol',
          '**Salı:** dinlenme (yalnızca nem ve nemlendirici)',
          '**Çarşamba:** salisilik asit',
          '**Perşembe:** retinol',
          '**Cuma:** dinlenme',
          '**Hafta sonu:** bir gece hücre yenileyici serum, diğer gece dinlenme',
        ],
      },
      {
        heading: '3. Adım: Bariyeri destekleyin',
        text: [
          '[[niacinamide]] bariyeri güçlendirir ve kızarıklığı yatıştırır; bu nedenle retinolle iyi uyum sağlar. Dinlenme gecelerinde nemli cilde birkaç damla [[hyaluronic]] bastırın ve %2 B5 vitamini ile yatıştıran, kuruluğu önlemeye yardımcı olan [[moisturizer]] ile bitirin.',
          'Cildiniz hassassa retinol gecelerinde "sandviç" yöntemini kullanın: ince bir kat nemlendirici, ardından retinol, sonra yeniden nemlendirici. Bu, emilimi rahat kalacak kadar yavaşlatır.',
        ],
      },
      {
        heading: 'Sık yapılan gece hataları',
        list: [
          '**Retinolü nemli cilde uygulamak.** Emilimi hızlandırır ve tahriş riskini artırır. Cildiniz tamamen kuruyana kadar bekleyin.',
          '**Çok fazla kullanmak.** Birkaç damla tüm yüze yeter. Daha fazlası daha hızlı etki etmez, sadece daha çok tahriş eder.',
          '**Hassas bölgelere fazla yaklaşmak.** Göz çevresi ile burun ve ağız kenarlarındaki cilt daha incedir; buralara çok az uygulayın ya da hiç uygulamayın.',
          '**İlk ayda vazgeçmek.** Retinolün ilk haftalarında hafif kuruluk veya pullanma yaygındır. Bırakmak yerine kullanım sıklığını azaltın; görünür sonuçlar 8-12 hafta sürer.',
          '**Kışın güneş koruyucuyu bırakmak.** UV daha düşüktür ama yine de vardır ve retinol kullanan cilt yıl boyunca daha hassastır.',
        ],
      },
      {
        heading: 'Ertesi sabah',
        text: [
          'Retinol ve asitler yenilenen cildi UV ışınlarına karşı daha savunmasız bırakır; bu yüzden ertesi sabah güneş koruyucu bir seçenek değildir. Bulutlu günlerde ya da çoğunlukla içeride olsanız bile [[sunscreen]] ürününü her gün uygulayın; aksi halde gece yapılan iş güneş tarafından bozulur.',
        ],
      },
    ],
    summary:
      'İyice temizleyin, cildin kurumasını bekleyin, tek bir ana aktif kullanın, ardından nem verip nemlendirin. Retinol ve salisilik asidi asla aynı gece kullanmayın, dinlenme gecelerini koruyun ve ertesi sabah mutlaka güneş koruyucu sürün.',
  },

  es: {
    intro:
      'La noche es cuando tu piel se centra en repararse y cuando puedes usar los activos que la luz del día debilitaría. El objetivo no es usarlo todo a la vez, sino dar a uno o dos activos bien elegidos las condiciones adecuadas para funcionar.',
    sections: [
      {
        heading: 'Por qué la noche es para los activos',
        text: [
          'El retinol y los ácidos exfoliantes aumentan la sensibilidad al sol, y algunos activos se degradan con la luz. Por la noche no hay rayos UV, ni maquillaje, ni protector solar encima, así que se absorben y actúan sin interferencias.',
          'Además, la piel pierde más agua durante la noche; por eso una buena rutina nocturna siempre termina con hidratación y una crema que refuerce la barrera mientras duermes.',
        ],
      },
      {
        heading: 'Paso 1: Limpia a fondo',
        text: [
          'Al final del día tu piel acumula protector solar, maquillaje, grasa y contaminación. Los activos poco pueden hacer a través de esa capa.',
          'El [[cleanser]] elimina el día sin resecar. Si llevaste maquillaje intenso o protector resistente al agua, lávate dos veces. Después deja que la piel se seque por completo antes del retinol: la piel húmeda hace que penetre más rápido y aumenta el riesgo de irritación.',
        ],
      },
      {
        heading: 'Paso 2: Elige un activo principal',
        text: ['Escoge el activo que corresponda a tu objetivo principal y usa uno por noche:'],
        list: [
          '**Líneas finas y textura irregular:** el [[retinol]] usa retinol encapsulado al 0,2% de liberación lenta y suave, con niacinamida para reducir el enrojecimiento. Empieza dos veces por semana y aumenta poco a poco a medida que tu piel se adapte.',
          '**Granitos y puntos negros:** el [[salicylic]] es un BHA al 2% que limpia el interior de los poros. Empieza tres noches por semana, evita el contorno de ojos y aumenta despacio.',
          '**Piel apagada y con aspecto cansado:** el [[cell-renewal]] contiene aceite de salmón para favorecer la renovación celular natural. Es una opción suave para las noches sin retinol ni ácidos.',
        ],
      },
      {
        heading: 'No los combines',
        text: [
          'El retinol y el ácido salicílico son eficaces, y ambos pueden irritar. Nunca los uses la misma noche: altérnalos. Las noches de descanso, sin ningún activo, forman parte de la rutina; no son un paso atrás.',
        ],
        list: [
          '**Lunes:** retinol',
          '**Martes:** descanso (solo hidratación)',
          '**Miércoles:** ácido salicílico',
          '**Jueves:** retinol',
          '**Viernes:** descanso',
          '**Fin de semana:** sérum renovador celular una noche y descanso la otra',
        ],
      },
      {
        heading: 'Paso 3: Refuerza la barrera',
        text: [
          'El [[niacinamide]] fortalece la barrera y calma el enrojecimiento, por lo que combina bien con el retinol. Las noches de descanso, presiona unas gotas del [[hyaluronic]] sobre la piel húmeda y termina con la [[moisturizer]], cuyo 2% de vitamina B5 calma y ayuda a prevenir la sequedad.',
          'Si tu piel es sensible, usa el método "sándwich" las noches de retinol: una capa fina de crema, luego el retinol y otra vez crema. Ralentiza la absorción lo justo para que resulte cómodo.',
        ],
      },
      {
        heading: 'Errores habituales por la noche',
        list: [
          '**Aplicar retinol sobre la piel húmeda.** Acelera la absorción y aumenta el riesgo de irritación. Espera a que la piel esté completamente seca.',
          '**Usar demasiado.** Unas gotas bastan para todo el rostro. Más cantidad no actúa más rápido; solo irrita más.',
          '**Acercarse demasiado a las zonas sensibles.** La piel alrededor de los ojos y en las comisuras de la nariz y la boca es más fina: aplica muy poco ahí o evítala.',
          '**Rendirse en el primer mes.** Un poco de sequedad o descamación en las primeras semanas de retinol es habitual. Úsalo con menos frecuencia en lugar de dejarlo; los resultados visibles tardan 8-12 semanas.',
          '**Abandonar el protector solar en invierno.** Hay menos radiación UV, pero sigue presente, y la piel que usa retinol es más sensible todo el año.',
        ],
      },
      {
        heading: 'A la mañana siguiente',
        text: [
          'El retinol y los ácidos dejan la piel renovada más expuesta a los rayos UV, así que el protector solar a la mañana siguiente no es opcional. Aplica el [[sunscreen]] todos los días, aunque esté nublado o pases la mayor parte del tiempo en interiores, o el sol deshará el trabajo de la noche.',
        ],
      },
    ],
    summary:
      'Limpia bien, deja secar la piel, usa un solo activo principal y después hidrata. Nunca combines retinol y ácido salicílico la misma noche, respeta las noches de descanso y usa siempre protector solar a la mañana siguiente.',
  },

  ru: {
    intro:
      'Ночью кожа сосредоточена на восстановлении — и это время для активов, эффект которых днём ослабляет свет. Цель не в том, чтобы использовать всё сразу, а в том, чтобы создать одному-двум правильно подобранным активам условия для работы.',
    sections: [
      {
        heading: 'Почему вечер — время для активов',
        text: [
          'Ретинол и отшелушивающие кислоты повышают чувствительность кожи к солнцу, а некоторые активы разрушаются на свету. Вечером нет ультрафиолета, макияжа и слоя солнцезащитного крема, поэтому активы впитываются и работают без помех.',
          'Кроме того, ночью кожа теряет больше влаги, поэтому хороший вечерний уход всегда заканчивается увлажнением и кремом, который поддерживает барьер во время сна.',
        ],
      },
      {
        heading: 'Шаг 1. Тщательное очищение',
        text: [
          'К вечеру на коже скапливаются солнцезащитный крем, макияж, себум и загрязнения. Сквозь этот слой активы почти не работают.',
          'Средство [[cleanser]] смывает следы дня, не пересушивая кожу. Если вы использовали плотный макияж или водостойкий солнцезащитный крем, умойтесь дважды. Затем дайте коже полностью высохнуть перед ретинолом: на влажной коже он проникает быстрее, и риск раздражения растёт.',
        ],
      },
      {
        heading: 'Шаг 2. Один главный актив',
        text: ['Выберите актив под свою главную задачу и используйте один за вечер:'],
        list: [
          '**Мелкие морщины и неровный рельеф:** [[retinol]] содержит 0,2% инкапсулированного ретинола с медленным мягким высвобождением и ниацинамид, уменьшающий покраснение. Начните с двух раз в неделю и увеличивайте частоту постепенно, по мере привыкания кожи.',
          '**Высыпания и чёрные точки:** [[salicylic]] — это 2% BHA-кислоты, которая очищает поры изнутри. Начните с трёх вечеров в неделю, избегайте области вокруг глаз и увеличивайте частоту постепенно.',
          '**Тусклая, уставшая кожа:** [[cell-renewal]] содержит масло лосося, поддерживающее естественное обновление клеток. Это мягкий вариант для вечеров без ретинола и кислот.',
        ],
      },
      {
        heading: 'Не совмещайте',
        text: [
          'Ретинол и салициловая кислота эффективны, и оба могут вызывать раздражение. Никогда не используйте их в один вечер — чередуйте. Вечера отдыха без активов — часть ухода, а не шаг назад.',
        ],
        list: [
          '**Понедельник:** ретинол',
          '**Вторник:** отдых (только увлажнение)',
          '**Среда:** салициловая кислота',
          '**Четверг:** ретинол',
          '**Пятница:** отдых',
          '**Выходные:** сыворотка для обновления клеток в один вечер, отдых — в другой',
        ],
      },
      {
        heading: 'Шаг 3. Поддержите барьер',
        text: [
          'Средство [[niacinamide]] укрепляет барьер и успокаивает покраснение, поэтому хорошо сочетается с ретинолом. В вечера отдыха вбейте несколько капель средства [[hyaluronic]] во влажную кожу и завершите уход средством [[moisturizer]]: его 2% витамина B5 успокаивают и помогают избежать сухости.',
          'Если кожа чувствительная, в вечера с ретинолом используйте метод «сэндвича»: тонкий слой крема, затем ретинол и снова крем. Так впитывание замедляется ровно настолько, чтобы уход оставался комфортным.',
        ],
      },
      {
        heading: 'Частые вечерние ошибки',
        list: [
          '**Наносить ретинол на влажную кожу.** Это ускоряет впитывание и повышает риск раздражения. Дождитесь, пока кожа полностью высохнет.',
          '**Использовать слишком много.** Нескольких капель хватает на всё лицо. Больше — не значит быстрее, это только сильнее раздражает.',
          '**Подходить слишком близко к чувствительным зонам.** Кожа вокруг глаз и в уголках носа и рта тоньше, поэтому наносите туда совсем немного или не наносите вовсе.',
          '**Сдаваться в первый месяц.** Лёгкая сухость или шелушение в первые недели применения ретинола — обычное дело. Сократите частоту, а не отменяйте средство: заметный результат появляется через 8–12 недель.',
          '**Отказываться от SPF зимой.** Ультрафиолета меньше, но он есть, а кожа на ретиноле остаётся более чувствительной круглый год.',
        ],
      },
      {
        heading: 'На следующее утро',
        text: [
          'После ретинола и кислот обновлённая кожа уязвимее к ультрафиолету, поэтому солнцезащитный крем утром обязателен. Наносите [[sunscreen]] каждый день, даже в пасмурную погоду или если почти весь день проводите в помещении, иначе солнце сведёт на нет ночную работу.',
        ],
      },
    ],
    summary:
      'Тщательно очистите кожу, дайте ей высохнуть, используйте один главный актив, затем увлажните. Не совмещайте ретинол и салициловую кислоту в один вечер, оставляйте вечера отдыха и обязательно наносите солнцезащитный крем утром.',
  },
}

export default copy

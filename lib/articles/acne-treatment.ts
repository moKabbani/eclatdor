import type { Locale } from '../i18n'
import type { ArticleCopy } from './types'

const copy: Record<Locale, ArticleCopy> = {
  en: {
    intro:
      "Acne isn't a sign of dirty skin or a lack of effort. It comes from a mix of excess oil, pores clogged with dead skin cells, bacteria and inflammation. The routines that work target those causes gently and consistently, instead of scrubbing harder.",
    sections: [
      {
        heading: "What's happening in a breakout",
        text: [
          'Oil glands produce sebum, and when dead cells don\'t shed properly they mix with it and plug the pore. Closed plugs become whiteheads, open ones darken into blackheads, and when bacteria multiply inside, the area becomes red, swollen and sore.',
          'Hormones, stress, heavy or pore-clogging products and touching your face can all tip the balance. The good news: every stage of this process can be addressed.',
        ],
      },
      {
        heading: 'Cleanse without stripping',
        text: [
          'Harsh, squeaky-clean washes dry the skin out, which can lead to more irritation and an oilier rebound. Wash twice a day, no more, with [[cleanser]]: it is gentle and non-irritating, with niacinamide and aloe vera. Use your fingertips, not scrubs or rough cloths.',
        ],
      },
      {
        heading: 'Clear pores with salicylic acid',
        text: [
          'Salicylic acid is a BHA, which means it is oil-soluble: it can work inside the pore and dissolve the mix of oil and dead cells that starts a breakout.',
          '[[salicylic]] combines 2% salicylic acid with 4% niacinamide, zinc PCA and aloe vera. Use it in the evening on clean, dry skin, starting three nights a week and building up gradually. Avoid the eye area. A little tingling or dryness at first is normal; burning or peeling that doesn\'t settle means you should use it less often.',
        ],
      },
      {
        heading: 'Calm and balance with niacinamide',
        text: [
          '[[niacinamide]] helps regulate oil, refines the look of pores and calms the redness that breakouts leave behind. It is gentle enough for every morning and works well alongside salicylic acid.',
        ],
      },
      {
        heading: 'Yes, you still need moisturiser and sunscreen',
        text: [
          'Skipping moisturiser often backfires: dehydrated skin feels tight and can become more irritated. A thin layer of [[moisturizer]] is enough for oily skin.',
          'Sunscreen matters even more. UV darkens the marks that spots leave behind, so they take far longer to fade. [[sunscreen]] is lightweight and non-greasy, so it won\'t feel heavy on oily skin.',
        ],
      },
      {
        heading: 'Habits that help',
        list: [
          "**Don't pick or squeeze.** It pushes inflammation deeper and makes marks and scars more likely.",
          '**Change pillowcases often** and wipe your phone screen regularly.',
          '**Introduce one product at a time**, so you know what is helping and what is not.',
          '**Be patient.** Skin needs 8–12 weeks to show real change, and it can look a little busier in the first few weeks.',
        ],
      },
      {
        heading: 'Common questions',
        list: [
          '**Should I use a face scrub?** No. Scrubs rub inflamed spots and spread irritation. Salicylic acid exfoliates inside the pore without any friction.',
          '**Can I wear makeup?** Yes. Choose products labelled non-comedogenic and remove everything with a thorough cleanse every night.',
          '**Does toothpaste dry out spots?** It irritates the skin and can leave dark marks. A targeted treatment like salicylic acid is gentler and works better.',
          '**Why am I breaking out more after starting salicylic acid?** In the first weeks, existing clogs can surface faster. Small breakouts in your usual areas usually settle within 4–6 weeks; breakouts in new areas or burning point to irritation instead, so use it less often.',
        ],
      },
      {
        heading: 'When to see a dermatologist',
        text: [
          'See a dermatologist if you have deep, painful lumps or cysts, if acne is leaving scars, if it is affecting your confidence, or if you see no improvement after three months of a consistent routine. Prescription treatments work best when started early, and they can be combined with a gentle routine like this one. If you are pregnant or breastfeeding, check with your doctor before using salicylic acid.',
        ],
      },
    ],
    summary:
      'A gentle cleanser twice a day, salicylic acid in the evening, niacinamide in the morning, a light moisturiser and daily SPF. Hands off, one change at a time, and give it 8–12 weeks.',
  },

  ar: {
    intro:
      'حب الشباب ليس دليلاً على بشرة متسخة أو على تقصير منك. إنه نتيجة مزيج من الدهون الزائدة، ومسام مسدودة بخلايا الجلد الميتة، والبكتيريا، والالتهاب. والروتين الناجح يستهدف هذه الأسباب بلطف وانتظام بدلاً من الفرك بقوة أكبر.',
    sections: [
      {
        heading: 'ماذا يحدث عند ظهور الحبوب؟',
        text: [
          'تفرز الغدد الدهنية الزهم، وعندما لا تتساقط الخلايا الميتة بشكل صحيح تختلط به وتسدّ المسام. المسام المغلقة تتحول إلى رؤوس بيضاء، والمفتوحة تغمق لتصبح رؤوساً سوداء، وعندما تتكاثر البكتيريا داخلها تصبح المنطقة حمراء ومتورمة ومؤلمة.',
          'يمكن للهرمونات والتوتر والمنتجات الثقيلة أو المسببة لانسداد المسام ولمس الوجه أن تُخلّ بهذا التوازن. والخبر الجيد أن كل مرحلة من هذه المراحل يمكن التعامل معها.',
        ],
      },
      {
        heading: 'نظّف دون أن تجرّد بشرتك',
        text: [
          'الغسولات القاسية تجفف البشرة، مما قد يزيد التهيج ويدفعها لإفراز دهون أكثر. اغسل وجهك مرتين يومياً فقط باستخدام [[cleanser]]، فهو لطيف وغير مهيّج ويحتوي على النياسيناميد والصبار. استخدم أطراف أصابعك بدلاً من المقشّرات أو المناشف الخشنة.',
        ],
      },
      {
        heading: 'نظّف المسام بحمض الساليسيليك',
        text: [
          'حمض الساليسيليك من أحماض BHA، أي أنه يذوب في الدهون، فيستطيع العمل داخل المسام وإذابة خليط الدهون والخلايا الميتة الذي تبدأ منه الحبوب.',
          'يجمع [[salicylic]] بين حمض الساليسيليك بتركيز 2% والنياسيناميد بتركيز 4% وZinc PCA والصبار. استخدمه مساءً على بشرة نظيفة وجافة، وابدأ بثلاث ليالٍ أسبوعياً ثم زِد تدريجياً، وتجنّب منطقة العين. الوخز الخفيف أو بعض الجفاف في البداية أمر طبيعي، أما الحرقان أو التقشر المستمر فيعني أن عليك تقليل مرات الاستخدام.',
        ],
      },
      {
        heading: 'هدّئ ووازن بالنياسيناميد',
        text: [
          'يساعد [[niacinamide]] على تنظيم إفراز الدهون، وتحسين مظهر المسام، وتهدئة الاحمرار الذي تتركه الحبوب. وهو لطيف بما يكفي لاستخدامه كل صباح، ويعمل جيداً مع حمض الساليسيليك.',
        ],
      },
      {
        heading: 'نعم، ما زلت بحاجة إلى المرطب وواقي الشمس',
        text: [
          'التخلي عن المرطب يأتي غالباً بنتيجة عكسية؛ فالبشرة التي ينقصها الماء تشعر بالشدّ وقد تصبح أكثر تهيجاً. وتكفي طبقة رقيقة من [[moisturizer]] للبشرة الدهنية.',
          'أما واقي الشمس فأهم من ذلك: فالأشعة فوق البنفسجية تُغمِّق الآثار التي تتركها الحبوب فتستغرق وقتاً أطول بكثير لتتلاشى. [[sunscreen]] خفيف وغير دهني، فلن تشعر بثقله على البشرة الدهنية.',
        ],
      },
      {
        heading: 'عادات تساعدك',
        list: [
          '**لا تعبث بالحبوب ولا تعصرها.** فذلك يدفع الالتهاب إلى العمق ويزيد احتمال الآثار والندبات.',
          '**غيّر أكياس الوسائد باستمرار** وامسح شاشة هاتفك بانتظام.',
          '**أدخل منتجاً واحداً في كل مرة** لتعرف ما الذي يساعدك وما الذي لا يفيد.',
          '**تحلَّ بالصبر.** تحتاج البشرة إلى 8-12 أسبوعاً لتظهر تغيّراً حقيقياً، وقد تبدو أكثر انشغالاً قليلاً في الأسابيع الأولى.',
        ],
      },
      {
        heading: 'أسئلة شائعة',
        list: [
          '**هل أستخدم مقشّراً حبيبياً للوجه؟** لا. فالمقشّرات تحتكّ بالحبوب الملتهبة وتنشر التهيج، بينما يقشّر حمض الساليسيليك داخل المسام دون أي احتكاك.',
          '**هل يمكنني وضع المكياج؟** نعم. اختر منتجات مكتوباً عليها أنها لا تسد المسام (non-comedogenic)، وأزل كل شيء بتنظيف جيد كل ليلة.',
          '**هل يجفّف معجون الأسنان الحبوب؟** إنه يهيّج البشرة وقد يترك آثاراً داكنة. والعلاج الموضعي مثل حمض الساليسيليك ألطف وأكثر فعالية.',
          '**لماذا زادت الحبوب بعد أن بدأت حمض الساليسيليك؟** في الأسابيع الأولى قد تظهر الانسدادات الموجودة أسرع. الحبوب الصغيرة في أماكنها المعتادة تهدأ عادةً خلال 4-6 أسابيع، أما ظهورها في أماكن جديدة أو الشعور بحرقان فيدل على تهيّج، فقلّل عدد مرات الاستخدام.',
        ],
      },
      {
        heading: 'متى تزور طبيب الجلدية؟',
        text: [
          'راجع طبيب الجلدية إذا ظهرت لديك كتل عميقة مؤلمة أو أكياس، أو إذا كان حب الشباب يترك ندبات، أو يؤثر في ثقتك بنفسك، أو إذا لم تلاحظ تحسناً بعد ثلاثة أشهر من الروتين المنتظم. العلاجات الموصوفة طبياً تعطي أفضل النتائج عند البدء بها مبكراً، ويمكن دمجها مع روتين لطيف كهذا. وإذا كنتِ حاملاً أو مرضعة فاستشيري طبيبك قبل استخدام حمض الساليسيليك.',
        ],
      },
    ],
    summary:
      'غسول لطيف مرتين يومياً، وحمض الساليسيليك مساءً، والنياسيناميد صباحاً، ومرطب خفيف، وواقي شمس يومياً. لا تلمس الحبوب، وغيّر شيئاً واحداً في كل مرة، وامنح الروتين 8-12 أسبوعاً.',
  },

  tr: {
    intro:
      'Akne kirli bir cildin ya da özensizliğin işareti değildir. Fazla yağ, ölü hücrelerle tıkanan gözenekler, bakteriler ve iltihabın bir araya gelmesinden kaynaklanır. İşe yarayan rutinler daha sert ovmak yerine bu nedenleri nazikçe ve düzenli şekilde hedefler.',
    sections: [
      {
        heading: 'Sivilce oluşurken neler olur?',
        text: [
          'Yağ bezleri sebum üretir; ölü hücreler düzgün dökülmediğinde sebumla karışarak gözeneği tıkar. Kapalı tıkaçlar beyaz noktaya, açık olanlar ise kararıp siyah noktaya dönüşür. İçeride bakteriler çoğaldığında bölge kızarır, şişer ve ağrır.',
          'Hormonlar, stres, ağır ya da gözenek tıkayan ürünler ve yüze dokunmak bu dengeyi bozabilir. İyi haber şu ki bu sürecin her aşamasına müdahale etmek mümkündür.',
        ],
      },
      {
        heading: 'Kurutmadan temizleyin',
        text: [
          'Sert ve "gıcırdayan" temizlik cildi kurutur; bu da daha fazla tahrişe ve daha yağlı bir tepkiye yol açabilir. Günde iki kez, daha fazla değil, [[cleanser]] ile yıkayın: nazik ve tahriş etmeyen formülü niacinamide ve aloe vera içerir. Peeling ya da sert bezler yerine parmak uçlarınızı kullanın.',
        ],
      },
      {
        heading: 'Gözenekleri salisilik asitle temizleyin',
        text: [
          'Salisilik asit bir BHA\'dır, yani yağda çözünür: gözeneğin içinde çalışabilir ve sivilceyi başlatan yağ ile ölü hücre karışımını çözebilir.',
          '[[salicylic]], %2 salisilik asidi %4 niacinamide, çinko PCA ve aloe vera ile birleştirir. Akşamları temiz ve kuru cilde uygulayın; haftada üç geceyle başlayıp kademeli olarak artırın. Göz çevresinden kaçının. Başlangıçta hafif karıncalanma veya kuruluk normaldir; geçmeyen yanma ya da soyulma, kullanım sıklığını azaltmanız gerektiği anlamına gelir.',
        ],
      },
      {
        heading: 'Niacinamide ile yatıştırın ve dengeleyin',
        text: [
          '[[niacinamide]] yağ üretimini dengelemeye, gözeneklerin görünümünü inceltmeye ve sivilcelerin bıraktığı kızarıklığı yatıştırmaya yardımcı olur. Her sabah kullanılacak kadar naziktir ve salisilik asitle uyumlu çalışır.',
        ],
      },
      {
        heading: 'Evet, nemlendirici ve güneş koruyucuya yine ihtiyacınız var',
        text: [
          'Nemlendiriciyi atlamak çoğu zaman ters teper: susuz kalan cilt gerginleşir ve daha kolay tahriş olabilir. Yağlı cilt için ince bir kat [[moisturizer]] yeterlidir.',
          'Güneş koruyucu ise daha da önemlidir. UV ışınları sivilce izlerini koyulaştırır ve solmalarını çok uzatır. [[sunscreen]] hafif ve yağsızdır, yağlı ciltte ağırlık hissi yaratmaz.',
        ],
      },
      {
        heading: 'Yardımcı alışkanlıklar',
        list: [
          '**Sivilceleri koparmayın veya sıkmayın.** Bu, iltihabı daha derine iter ve iz ile skar olasılığını artırır.',
          '**Yastık kılıflarını sık değiştirin** ve telefon ekranınızı düzenli olarak silin.',
          '**Her seferinde tek bir ürün ekleyin**; böylece neyin işe yarayıp neyin yaramadığını anlarsınız.',
          '**Sabırlı olun.** Cildin gerçek bir değişim göstermesi 8-12 hafta sürer ve ilk haftalarda biraz daha hareketli görünebilir.',
        ],
      },
      {
        heading: 'Sık sorulan sorular',
        list: [
          '**Yüz peelingi kullanmalı mıyım?** Hayır. Peelingler iltihaplı sivilceleri tahriş eder ve tahrişi yayar. Salisilik asit ise gözeneğin içinde hiç sürtünme olmadan eksfoliye eder.',
          '**Makyaj yapabilir miyim?** Evet. Komedojenik olmadığı belirtilen ürünleri seçin ve her gece iyice temizleyerek hepsini çıkarın.',
          '**Diş macunu sivilceleri kurutur mu?** Cildi tahriş eder ve koyu iz bırakabilir. Salisilik asit gibi hedefe yönelik bir bakım daha naziktir ve daha iyi çalışır.',
          '**Salisilik asite başladıktan sonra neden daha çok sivilce çıkıyor?** İlk haftalarda mevcut tıkanıklıklar daha hızlı yüzeye çıkabilir. Alışık olduğunuz bölgelerdeki küçük sivilceler genellikle 4-6 hafta içinde yatışır; yeni bölgelerde çıkan sivilceler veya yanma ise tahrişe işaret eder, bu durumda kullanım sıklığını azaltın.',
        ],
      },
      {
        heading: 'Ne zaman dermatoloğa gitmeli?',
        text: [
          'Derin ve ağrılı şişlikleriniz ya da kistleriniz varsa, akne iz bırakıyorsa, özgüveninizi etkiliyorsa ya da düzenli bir rutinin üç ayın sonunda hiçbir iyileşme görmüyorsanız bir dermatoloğa başvurun. Reçeteli tedaviler erken başlandığında en iyi sonucu verir ve bunun gibi nazik bir rutinle birlikte kullanılabilir. Hamileyseniz veya emziriyorsanız salisilik asit kullanmadan önce doktorunuza danışın.',
        ],
      },
    ],
    summary:
      'Günde iki kez nazik bir temizleyici, akşam salisilik asit, sabah niacinamide, hafif bir nemlendirici ve her gün SPF. Sivilcelere dokunmayın, her seferinde tek bir değişiklik yapın ve 8-12 hafta bekleyin.',
  },

  es: {
    intro:
      'El acné no es señal de una piel sucia ni de falta de cuidado. Surge de una mezcla de exceso de grasa, poros obstruidos por células muertas, bacterias e inflamación. Las rutinas que funcionan atacan esas causas con suavidad y constancia, en lugar de frotar más fuerte.',
    sections: [
      {
        heading: 'Qué ocurre cuando sale un brote',
        text: [
          'Las glándulas sebáceas producen sebo y, cuando las células muertas no se desprenden bien, se mezclan con él y taponan el poro. Los tapones cerrados se convierten en puntos blancos, los abiertos se oscurecen en puntos negros y, cuando las bacterias se multiplican dentro, la zona se enrojece, se inflama y duele.',
          'Las hormonas, el estrés, los productos pesados o comedogénicos y tocarse la cara pueden alterar el equilibrio. La buena noticia es que cada fase de este proceso se puede tratar.',
        ],
      },
      {
        heading: 'Limpia sin resecar',
        text: [
          'Los limpiadores agresivos que dejan la piel "rechinando" la resecan, lo que puede causar más irritación y un efecto rebote de grasa. Lávate dos veces al día, no más, con el [[cleanser]]: es suave y no irritante, con niacinamida y aloe vera. Usa las yemas de los dedos, no exfoliantes ni toallas ásperas.',
        ],
      },
      {
        heading: 'Despeja los poros con ácido salicílico',
        text: [
          'El ácido salicílico es un BHA, es decir, liposoluble: puede actuar dentro del poro y disolver la mezcla de grasa y células muertas con la que empieza un granito.',
          'El [[salicylic]] combina un 2% de ácido salicílico con un 4% de niacinamida, PCA de zinc y aloe vera. Úsalo por la noche sobre la piel limpia y seca, empezando tres noches por semana y aumentando poco a poco. Evita el contorno de ojos. Un ligero hormigueo o algo de sequedad al principio es normal; si el ardor o la descamación no desaparecen, úsalo con menos frecuencia.',
        ],
      },
      {
        heading: 'Calma y equilibra con niacinamida',
        text: [
          'El [[niacinamide]] ayuda a regular la grasa, afina el aspecto de los poros y calma el enrojecimiento que dejan los granitos. Es lo bastante suave para usarlo cada mañana y funciona bien junto al ácido salicílico.',
        ],
      },
      {
        heading: 'Sí, sigues necesitando crema y protector solar',
        text: [
          'Saltarse la crema suele ser contraproducente: la piel deshidratada se siente tirante y puede irritarse más. Para la piel grasa basta una capa fina de la [[moisturizer]].',
          'El protector solar es todavía más importante. Los rayos UV oscurecen las marcas que dejan los granitos y hacen que tarden mucho más en desaparecer. El [[sunscreen]] es ligero y no graso, así que no resulta pesado en la piel grasa.',
        ],
      },
      {
        heading: 'Hábitos que ayudan',
        list: [
          '**No toques ni aprietes los granitos.** Empuja la inflamación hacia dentro y aumenta el riesgo de marcas y cicatrices.',
          '**Cambia la funda de la almohada a menudo** y limpia la pantalla del móvil con regularidad.',
          '**Introduce un producto cada vez**, para saber qué te ayuda y qué no.',
          '**Ten paciencia.** La piel necesita 8-12 semanas para mostrar un cambio real, y en las primeras semanas puede parecer algo más revuelta.',
        ],
      },
      {
        heading: 'Preguntas frecuentes',
        list: [
          '**¿Debo usar un exfoliante de gránulos?** No. Los exfoliantes frotan los granitos inflamados y extienden la irritación. El ácido salicílico exfolia dentro del poro sin ninguna fricción.',
          '**¿Puedo maquillarme?** Sí. Elige productos etiquetados como no comedogénicos y retíralo todo con una limpieza a fondo cada noche.',
          '**¿La pasta de dientes seca los granitos?** Irrita la piel y puede dejar marcas oscuras. Un tratamiento localizado como el ácido salicílico es más suave y funciona mejor.',
          '**¿Por qué me salen más granitos desde que uso ácido salicílico?** En las primeras semanas, las obstrucciones que ya existían pueden salir antes. Los granitos pequeños en tus zonas habituales suelen calmarse en 4-6 semanas; si salen en zonas nuevas o notas ardor, es irritación, así que úsalo con menos frecuencia.',
        ],
      },
      {
        heading: 'Cuándo acudir al dermatólogo',
        text: [
          'Consulta a un dermatólogo si tienes bultos profundos y dolorosos o quistes, si el acné deja cicatrices, si afecta a tu confianza o si no ves mejoría tras tres meses de rutina constante. Los tratamientos con receta funcionan mejor cuanto antes se empiezan y pueden combinarse con una rutina suave como esta. Si estás embarazada o en periodo de lactancia, consulta a tu médico antes de usar ácido salicílico.',
        ],
      },
    ],
    summary:
      'Un limpiador suave dos veces al día, ácido salicílico por la noche, niacinamida por la mañana, una crema ligera y SPF a diario. No toques los granitos, cambia una cosa cada vez y dale 8-12 semanas.',
  },

  ru: {
    intro:
      'Акне — не признак грязной кожи и не результат недостаточного ухода. Оно возникает из-за сочетания избытка себума, пор, забитых отмершими клетками, бактерий и воспаления. Работающий уход воздействует на эти причины мягко и регулярно, а не за счёт более сильного трения.',
    sections: [
      {
        heading: 'Что происходит при высыпаниях',
        text: [
          'Сальные железы вырабатывают себум, и когда отмершие клетки отшелушиваются плохо, они смешиваются с ним и закупоривают пору. Закрытые пробки превращаются в белые угри, открытые темнеют и становятся чёрными точками, а когда внутри размножаются бактерии, участок краснеет, отекает и болит.',
          'Нарушить баланс могут гормоны, стресс, плотные или комедогенные средства и привычка трогать лицо. Хорошая новость: на каждый этап этого процесса можно повлиять.',
        ],
      },
      {
        heading: 'Очищайте, не пересушивая',
        text: [
          'Агрессивное умывание «до скрипа» пересушивает кожу, а это может усилить раздражение и вызвать ещё большую жирность. Умывайтесь дважды в день, не чаще, средством [[cleanser]]: оно мягкое, не раздражает и содержит ниацинамид и алоэ вера. Используйте кончики пальцев, а не скрабы и жёсткие полотенца.',
        ],
      },
      {
        heading: 'Очищайте поры салициловой кислотой',
        text: [
          'Салициловая кислота — это BHA-кислота, то есть жирорастворимая: она работает внутри поры и растворяет смесь себума и отмерших клеток, с которой начинается воспаление.',
          'Средство [[salicylic]] сочетает 2% салициловой кислоты с 4% ниацинамида, цинком PCA и алоэ вера. Наносите его вечером на чистую сухую кожу, начиная с трёх вечеров в неделю и постепенно увеличивая частоту. Избегайте области вокруг глаз. Лёгкое покалывание или сухость в начале — норма; если жжение или шелушение не проходят, используйте средство реже.',
        ],
      },
      {
        heading: 'Успокаивайте и балансируйте ниацинамидом',
        text: [
          'Средство [[niacinamide]] помогает регулировать выработку себума, делает поры визуально меньше и успокаивает покраснения после высыпаний. Оно достаточно мягкое для ежедневного утреннего применения и хорошо работает вместе с салициловой кислотой.',
        ],
      },
      {
        heading: 'Да, крем и защита от солнца по-прежнему нужны',
        text: [
          'Отказ от крема часто даёт обратный эффект: обезвоженная кожа ощущается стянутой и легче раздражается. Для жирной кожи достаточно тонкого слоя средства [[moisturizer]].',
          'Защита от солнца ещё важнее. Ультрафиолет делает следы постакне темнее, и они проходят гораздо дольше. Средство [[sunscreen]] лёгкое и нежирное, поэтому не ощущается тяжёлым на жирной коже.',
        ],
      },
      {
        heading: 'Полезные привычки',
        list: [
          '**Не трогайте и не выдавливайте прыщи.** Это загоняет воспаление глубже и повышает риск пятен и рубцов.',
          '**Чаще меняйте наволочки** и регулярно протирайте экран телефона.',
          '**Вводите по одному средству за раз**, чтобы понимать, что помогает, а что нет.',
          '**Наберитесь терпения.** Реальные изменения становятся заметны через 8–12 недель, а в первые недели кожа может выглядеть немного беспокойнее.',
        ],
      },
      {
        heading: 'Частые вопросы',
        list: [
          '**Нужен ли скраб для лица?** Нет. Скраб травмирует воспалённые участки и разносит раздражение. Салициловая кислота отшелушивает внутри поры без всякого трения.',
          '**Можно ли пользоваться макияжем?** Да. Выбирайте средства с пометкой «некомедогенно» и каждый вечер тщательно смывайте всё до конца.',
          '**Подсушивает ли прыщи зубная паста?** Она раздражает кожу и может оставить тёмные следы. Точечный уход, например салициловая кислота, мягче и работает лучше.',
          '**Почему после начала салициловой кислоты высыпаний стало больше?** В первые недели уже существующие закупорки могут выходить быстрее. Мелкие высыпания в привычных зонах обычно проходят за 4–6 недель; если они появляются в новых местах или ощущается жжение — это раздражение, используйте средство реже.',
        ],
      },
      {
        heading: 'Когда обратиться к дерматологу',
        text: [
          'Обратитесь к дерматологу, если у вас глубокие болезненные узлы или кисты, если акне оставляет рубцы, влияет на вашу уверенность в себе или если после трёх месяцев регулярного ухода нет улучшений. Рецептурное лечение эффективнее, если начать его рано, и его можно сочетать с мягким уходом вроде этого. Если вы беременны или кормите грудью, перед использованием салициловой кислоты проконсультируйтесь с врачом.',
        ],
      },
    ],
    summary:
      'Мягкое очищение дважды в день, салициловая кислота вечером, ниацинамид утром, лёгкий крем и ежедневный SPF. Не трогайте высыпания, меняйте что-то одно за раз и дайте уходу 8–12 недель.',
  },
}

export default copy

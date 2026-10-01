import type { Locale } from './i18n'
import type { ArticleKey } from './products'

export type Dict = {
  a11y: {
    skip: string
    openMenu: string
    closeMenu: string
    language: string
    theme: string
    mainNav: string
    whatsapp: string
  }
  nav: {
    home: string
    products: string
    about: string
    catalog: string
    privateLabel: string
    stockists: string
    contact: string
    certificates: string
  }
  meta: { description: string }
  home: {
    heroLabel: string
    heroTitle: string
    heroText: string
    introLabel: string
    introTitle: string
    introText: string
    viewAll: string
    soonLabel: string
    soonTitle: string
    soonText: string
    soonBadge: string
    launching: string
    notify: string
    cs1: string
    cs2: string
    cs3: string
    guide: string
    guideAll: string
    follow: string
  }
  about: {
    label: string
    title: string
    intro: string
    points: string
    countries: string
    certified: string
    values: string
    v1t: string
    v1d: string
    v2t: string
    v2d: string
    v3t: string
    v3d: string
    v4t: string
    v4d: string
    ctaTitle: string
    ctaText: string
    discover: string
    contactTitle: string
    contactText: string
  }
  catalog: {
    title: string
    text: string
    cover: string
    download: string
    pending: string
    request: string
  }
  products: {
    title: string
    sub: string
    formula: string
  }
  product: {
    about: string
    science: string
    howTo: string
    tip: string
    ingredients: string
    related: string
  }
  blog: Record<ArticleKey, string> & {
    title: string
    sub: string
    minRead: string
    soonTitle: string
    soonText: string
  }
  certs: {
    title: string
    text: string
    gmpT: string
    gmpD: string
    isoT: string
    isoD: string
    dermT: string
    dermD: string
    halalT: string
    halalD: string
    crueltyT: string
    crueltyD: string
    moh: string
    mohD: string
    ctaTitle: string
    ctaText: string
  }
  contact: {
    title: string
    text: string
    whatsapp: string
    whatsappText: string
    email: string
    address: string
  }
  footer: {
    tagline: string
    pages: string
    products: string
    contact: string
    map: string
    rights: string
  }
  stockists: {
    title: string
    sub: string
    pts: string
    ctaTitle: string
    ctaText: string
    inquiry: string
    contact: string
  }
  privateLabel: {
    title: string
    text: string
    clients: string
    formulas: string
    gmp: string
    offerTitle: string
    o1: string
    o2: string
    o3: string
    o4: string
    formTitle: string
    name: string
    phone: string
    email: string
    message: string
    error: string
    send: string
    sending: string
    sentTitle: string
    sentText: string
  }
  common: {
    explore: string
    chatWhatsapp: string
    sendEmail: string
    backHome: string
    backToProducts: string
    bestSeller: string
    photoSoon: string
    shipping: string
    orderWhatsapp: string
    orderMsg: string
  }
  notFound: {
    title: string
    text: string
  }
}

const dict: Record<Locale, Dict> = {
  en: {
    a11y: {
      skip: 'Skip to content',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
      theme: 'Toggle theme',
      mainNav: 'Main navigation',
      whatsapp: 'Chat on WhatsApp',
    },
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      catalog: 'Catalog',
      privateLabel: 'Private Label',
      stockists: 'Stockists',
      contact: 'Contact',
      certificates: 'Certificates',
    },
    meta: {
      description:
        "Éclat d'or formulates clinically-backed skin care — serums, creams and sun protection — manufactured to GMP standards and distributed across the Middle East and Europe.",
    },
    home: {
      heroLabel: 'Clinical skin care',
      heroTitle: 'Professional care your skin deserves.',
      heroText:
        "Éclat d'or blends dermatologist-grade actives into serums and creams that are gentle enough for daily use and potent enough to work.",
      introLabel: "Why Éclat d'or",
      introTitle: 'Every formula earns its place on your shelf.',
      introText:
        'We build each product around a small number of clinically proven actives at effective concentrations — no filler, no guesswork.',
      viewAll: 'View all products',
      soonLabel: 'Coming soon',
      soonTitle: 'New formulas in development',
      soonText: "These treatments are in final testing and will launch shortly. Ask us for early access.",
      soonBadge: 'Coming soon',
      launching: 'Launching soon',
      notify: 'Notify me',
      cs1: 'Collagen Booster',
      cs2: 'Brightening Ampoule',
      cs3: 'Gentle Scrub',
      guide: 'Skin care guide',
      guideAll: 'View all articles',
      follow: 'Follow along',
    },
    about: {
      label: 'About us',
      title: 'A trusted name in clinical skin care',
      intro:
        "For over a decade, Éclat d'or has formulated and manufactured skin care trusted by pharmacies, clinics and retailers across the region.",
      points: 'points of sale',
      countries: 'countries',
      certified: 'certified',
      values: 'What we stand for',
      v1t: 'Science first',
      v1d: 'Every formula is built around actives with published clinical evidence, at concentrations proven to work.',
      v2t: 'Clean manufacturing',
      v2d: 'Produced in GMP-certified facilities with strict quality control at every stage.',
      v3t: 'Safety tested',
      v3d: 'Dermatologically tested formulas, free from unnecessary irritants and harsh fragrance.',
      v4t: 'Built for partners',
      v4d: 'From private label to bulk distribution, we support partners with flexible, reliable production.',
      ctaTitle: 'See the full range',
      ctaText: 'Explore every formula we manufacture, from everyday essentials to targeted treatments.',
      discover: 'Discover products',
      contactTitle: 'Have a question?',
      contactText: 'Our team replies fast on WhatsApp.',
    },
    catalog: {
      title: 'Product catalog',
      text: 'Download our full catalog for detailed formulations, packaging options and ingredient lists.',
      cover: "Éclat d'or Catalog",
      download: 'Download PDF',
      pending: "The catalog is being finalized. Request a copy and we'll send it directly.",
      request: 'Request catalog',
    },
    products: {
      title: 'Our products',
      sub: '{n} formulas, each built around a focused set of active ingredients.',
      formula: 'View formula',
    },
    product: {
      about: 'About this product',
      science: 'The science',
      howTo: 'How to use',
      tip: 'Tip',
      ingredients: 'Ingredients',
      related: 'You may also like',
    },
    blog: {
      title: 'Skin care guide',
      sub: 'Practical routines and advice from our formulation team.',
      minRead: 'Care guide',
      soonTitle: 'Full article coming soon',
      soonText: "We're writing this guide now. In the meantime, explore our products or reach out with questions.",
      a1: 'Building a morning routine that works',
      a2: 'The night routine actives really need',
      a3: 'A practical approach to acne-prone skin',
      a4: 'Understanding and treating melasma',
      a5: 'Caring for sensitive, reactive skin',
      a6: 'How to layer actives without irritation',
    },
    certs: {
      title: 'Certificates & compliance',
      text: 'Every formula is manufactured and tested to internationally recognized standards.',
      gmpT: 'GMP Certified',
      gmpD: 'Manufactured in facilities certified to Good Manufacturing Practice standards.',
      isoT: 'ISO Certified',
      isoD: 'Quality management systems audited against ISO standards.',
      dermT: 'Dermatologically Tested',
      dermD: 'Formulas are tested under dermatological supervision before release.',
      halalT: 'Halal Certified',
      halalD: 'Formulated and produced without any non-halal ingredients.',
      crueltyT: 'Cruelty Free',
      crueltyD: 'No animal testing at any stage of formulation or production.',
      moh: 'Ministry of Health Registered',
      mohD: 'Registered and approved for sale by national health authorities.',
      ctaTitle: 'Questions about compliance?',
      ctaText: 'Request documentation or certificates for any product.',
    },
    contact: {
      title: 'Get in touch',
      text: "Questions about products, orders or partnerships — we're here to help.",
      whatsapp: 'WhatsApp',
      whatsappText: 'The fastest way to reach our team.',
      email: 'Email',
      address: 'Visit us',
    },
    footer: {
      tagline: 'Clinically-formulated skin care, manufactured with care.',
      pages: 'Pages',
      products: 'Products',
      contact: 'Contact',
      map: 'Get directions',
      rights: 'All rights reserved.',
    },
    stockists: {
      title: 'Where to find us',
      sub: '{c} countries, {p}+ points of sale and growing.',
      pts: 'points of sale',
      ctaTitle: "Want to stock Éclat d'or?",
      ctaText: "We're always open to new pharmacy, clinic and retail partners.",
      inquiry: "I'd like to become a stockist of Éclat d'or.",
      contact: 'Become a stockist',
    },
    privateLabel: {
      title: 'Private label manufacturing',
      text: 'Launch your own skin care line on our proven formulas and GMP-certified production.',
      clients: 'clients served',
      formulas: 'ready formulas',
      gmp: 'certified',
      offerTitle: "What's included",
      o1: 'Access to our existing, clinically-tested formulas',
      o2: 'Custom packaging and branding',
      o3: 'Flexible minimum order quantities',
      o4: 'Regulatory and documentation support',
      formTitle: 'Start a conversation',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      message: 'Message',
      error: 'Something went wrong. Please try again or reach us directly on',
      send: 'Send inquiry',
      sending: 'Sending...',
      sentTitle: 'Thank you',
      sentText: "We've received your inquiry and will be in touch shortly.",
    },
    common: {
      explore: 'Explore products',
      chatWhatsapp: 'Chat on WhatsApp',
      sendEmail: 'Send an email',
      backHome: 'Back to home',
      backToProducts: 'Back to products',
      bestSeller: 'Best seller',
      photoSoon: 'Photo coming soon',
      shipping: 'Ships within 2-3 business days',
      orderWhatsapp: 'Order on WhatsApp',
      orderMsg: "Hi, I'd like to order {name}.",
    },
    notFound: {
      title: 'Page not found',
      text: "The page you're looking for doesn't exist or may have moved.",
    },
  },
  ar: {
    a11y: {
      skip: 'تخطَّوا إلى المحتوى',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      language: 'اللغة',
      theme: 'تبديل المظهر',
      mainNav: 'التنقل الرئيسي',
      whatsapp: 'تواصلوا عبر واتساب',
    },
    nav: {
      home: 'الرئيسية',
      products: 'المنتجات',
      about: 'من نحن',
      catalog: 'الكتالوج',
      privateLabel: 'العلامة الخاصة',
      stockists: 'نقاط البيع',
      contact: 'تواصل معنا',
      certificates: 'الشهادات',
    },
    meta: {
      description:
        'تبتكر إكلات دور عناية طبية بالبشرة مدعومة علمياً — سيرومات وكريمات وواقيات شمس — مصنّعة وفق معايير GMP وموزّعة في الشرق الأوسط وأوروبا.',
    },
    home: {
      heroLabel: 'العناية الطبية بالبشرة',
      heroTitle: 'عناية احترافية تستحقها بشرتك',
      heroText:
        'تجمع إكلات دور بين مكونات فعّالة بمعايير علاجية في سيرومات وكريمات لطيفة للاستخدام اليومي وفعّالة بما يكفي لتعطي نتائج.',
      introLabel: 'لماذا إكلات دور',
      introTitle: 'كل تركيبة تستحق مكانها على رفوفكم.',
      introText:
        'نبني كل منتج حول عدد محدود من المكونات الفعّالة المثبتة سريرياً وبتركيزات فعّالة، دون حشو أو تخمين.',
      viewAll: 'عرض جميع المنتجات',
      soonLabel: 'قريباً',
      soonTitle: 'تركيبات جديدة قيد التطوير',
      soonText: 'هذه المنتجات في مراحل الاختبار النهائية وستُطرح قريباً. تواصلوا معنا للحصول على أولوية التجربة.',
      soonBadge: 'قريباً',
      launching: 'الإطلاق قريباً',
      notify: 'أعلموني',
      cs1: 'معزز الكولاجين',
      cs2: 'أمبولة التفتيح',
      cs3: 'مقشر لطيف',
      guide: 'دليل العناية بالبشرة',
      guideAll: 'عرض جميع المقالات',
      follow: 'تابعونا',
    },
    about: {
      label: 'من نحن',
      title: 'اسم موثوق في العناية الطبية بالبشرة',
      intro:
        'منذ أكثر من عقد، تصنع إكلات دور منتجات عناية بالبشرة تثق بها الصيدليات والعيادات ومتاجر التجزئة في المنطقة.',
      points: 'نقطة بيع',
      countries: 'دولة',
      certified: 'معتمدة',
      values: 'ما نؤمن به',
      v1t: 'العلم أولاً',
      v1d: 'كل تركيبة مبنية على مكونات فعّالة مدعومة بأدلة سريرية منشورة، وبتركيزات مثبتة الفعالية.',
      v2t: 'تصنيع نظيف',
      v2d: 'تُصنّع منتجاتنا في منشآت معتمدة GMP مع رقابة جودة صارمة في كل مرحلة.',
      v3t: 'مختبرة للأمان',
      v3d: 'تركيبات مختبرة جلدياً، خالية من المهيجات غير الضرورية والعطور القاسية.',
      v4t: 'مبنية لخدمة الشركاء',
      v4d: 'من العلامة الخاصة إلى التوزيع بالجملة، ندعم شركاءنا بإنتاج مرن وموثوق.',
      ctaTitle: 'اكتشفوا كامل التشكيلة',
      ctaText: 'استكشفوا كل منتج نصنعه، من الأساسيات اليومية إلى العلاجات المتخصصة.',
      discover: 'اكتشفوا المنتجات',
      contactTitle: 'لديكم سؤال؟',
      contactText: 'فريقنا يرد بسرعة عبر واتساب.',
    },
    catalog: {
      title: 'كتالوج المنتجات',
      text: 'حمّلوا الكتالوج الكامل للاطلاع على التركيبات التفصيلية وخيارات التغليف وقوائم المكونات.',
      cover: 'كتالوج إكلات دور',
      download: 'تحميل PDF',
      pending: 'الكتالوج قيد الإنجاز حالياً. اطلبوا نسخة وسنرسلها لكم مباشرة.',
      request: 'طلب الكتالوج',
    },
    products: {
      title: 'منتجاتنا',
      sub: '{n} تركيبة، كل واحدة مبنية حول مجموعة محددة من المكونات الفعّالة.',
      formula: 'عرض التركيبة',
    },
    product: {
      about: 'عن هذا المنتج',
      science: 'الأساس العلمي',
      howTo: 'طريقة الاستخدام',
      tip: 'نصيحة',
      ingredients: 'المكونات',
      related: 'قد يعجبكم أيضاً',
    },
    blog: {
      title: 'دليل العناية بالبشرة',
      sub: 'روتينات عملية ونصائح من فريق التركيبات لدينا.',
      minRead: 'دليل العناية',
      soonTitle: 'المقال الكامل قريباً',
      soonText: 'نعمل حالياً على كتابة هذا الدليل. في غضون ذلك، استكشفوا منتجاتنا أو تواصلوا معنا لأي استفسار.',
      a1: 'بناء روتين صباحي فعّال',
      a2: 'المكونات التي يحتاجها روتينكم المسائي فعلاً',
      a3: 'نهج عملي للبشرة المعرضة لحب الشباب',
      a4: 'فهم الكلف وطرق علاجه',
      a5: 'العناية بالبشرة الحساسة والمتفاعلة',
      a6: 'كيفية دمج المكونات الفعّالة دون تهيج',
    },
    certs: {
      title: 'الشهادات والمطابقة',
      text: 'كل تركيبة تُصنّع وتُختبر وفق معايير معترف بها عالمياً.',
      gmpT: 'معتمدة GMP',
      gmpD: 'مصنّعة في منشآت معتمدة وفق معايير ممارسات التصنيع الجيدة.',
      isoT: 'معتمدة ISO',
      isoD: 'أنظمة إدارة الجودة مدققة وفق معايير ISO.',
      dermT: 'مختبرة جلدياً',
      dermD: 'تُختبر التركيبات تحت إشراف طبي جلدي قبل الطرح.',
      halalT: 'حلال',
      halalD: 'مُركّبة ومصنّعة دون أي مكونات غير حلال.',
      crueltyT: 'خالية من القسوة الحيوانية',
      crueltyD: 'دون أي اختبار على الحيوانات في أي مرحلة من التركيب أو التصنيع.',
      moh: 'مسجلة لدى وزارة الصحة',
      mohD: 'مسجلة ومعتمدة للبيع من قبل السلطات الصحية الوطنية.',
      ctaTitle: 'أسئلة حول المطابقة؟',
      ctaText: 'اطلبوا المستندات أو الشهادات الخاصة بأي منتج.',
    },
    contact: {
      title: 'تواصلوا معنا',
      text: 'أسئلة حول المنتجات أو الطلبات أو الشراكات — نحن هنا للمساعدة.',
      whatsapp: 'واتساب',
      whatsappText: 'أسرع طريقة للوصول إلى فريقنا.',
      email: 'البريد الإلكتروني',
      address: 'زوروا مقرنا',
    },
    footer: {
      tagline: 'عناية بالبشرة مصنّعة علمياً، بعناية فائقة.',
      pages: 'الصفحات',
      products: 'المنتجات',
      contact: 'التواصل',
      map: 'احصلوا على الاتجاهات',
      rights: 'جميع الحقوق محفوظة.',
    },
    stockists: {
      title: 'أين تجدوننا',
      sub: '{c} دولة، وأكثر من {p} نقطة بيع وفي تزايد مستمر.',
      pts: 'نقطة بيع',
      ctaTitle: 'تريدون بيع منتجات إكلات دور؟',
      ctaText: 'نرحب دائماً بشركاء جدد من الصيدليات والعيادات ومتاجر التجزئة.',
      inquiry: 'أرغب في أن أصبح نقطة بيع لمنتجات إكلات دور.',
      contact: 'كونوا نقطة بيع',
    },
    privateLabel: {
      title: 'تصنيع العلامة الخاصة',
      text: 'أطلقوا خط العناية بالبشرة الخاص بكم اعتماداً على تركيباتنا المثبتة وإنتاجنا المعتمد GMP.',
      clients: 'عميل تم خدمته',
      formulas: 'تركيبة جاهزة',
      gmp: 'معتمدة',
      offerTitle: 'ما الذي نقدمه',
      o1: 'الوصول إلى تركيباتنا الحالية المختبرة سريرياً',
      o2: 'تغليف وهوية تجارية مخصصة',
      o3: 'كميات طلب أدنى مرنة',
      o4: 'دعم تنظيمي وتوثيقي كامل',
      formTitle: 'ابدأوا محادثة',
      name: 'الاسم',
      phone: 'رقم الهاتف',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      error: 'حدث خطأ ما. يرجى المحاولة مجدداً أو التواصل معنا مباشرة عبر',
      send: 'إرسال الطلب',
      sending: 'جارٍ الإرسال...',
      sentTitle: 'شكراً لكم',
      sentText: 'استلمنا طلبكم وسنتواصل معكم قريباً.',
    },
    common: {
      explore: 'استكشفوا المنتجات',
      chatWhatsapp: 'تواصلوا عبر واتساب',
      sendEmail: 'إرسال بريد إلكتروني',
      backHome: 'العودة إلى الرئيسية',
      backToProducts: 'العودة إلى المنتجات',
      bestSeller: 'الأكثر مبيعاً',
      photoSoon: 'الصورة قريباً',
      shipping: 'الشحن خلال 2-3 أيام عمل',
      orderWhatsapp: 'اطلبوا عبر واتساب',
      orderMsg: 'مرحباً، أرغب بطلب {name}.',
    },
    notFound: {
      title: 'الصفحة غير موجودة',
      text: 'الصفحة التي تبحثون عنها غير موجودة أو ربما تم نقلها.',
    },
  },
  tr: {
    a11y: {
      skip: 'İçeriğe geç',
      openMenu: 'Menüyü aç',
      closeMenu: 'Menüyü kapat',
      language: 'Dil',
      theme: 'Temayı değiştir',
      mainNav: 'Ana navigasyon',
      whatsapp: "WhatsApp'tan yaz",
    },
    nav: {
      home: 'Ana Sayfa',
      products: 'Ürünler',
      about: 'Hakkımızda',
      catalog: 'Katalog',
      privateLabel: 'Özel Marka',
      stockists: 'Satış Noktaları',
      contact: 'İletişim',
      certificates: 'Sertifikalar',
    },
    meta: {
      description:
        "Éclat d'or, GMP standartlarında üretilen ve Orta Doğu ile Avrupa'da dağıtılan klinik destekli cilt bakım serumları, kremleri ve güneş korumaları sunar.",
    },
    home: {
      heroLabel: 'Klinik cilt bakımı',
      heroTitle: 'Cildinizin hak ettiği profesyonel bakım',
      heroText:
        "Éclat d'or, dermatolojik düzeyde etken maddeleri günlük kullanıma uygun ama etkili serum ve kremlerde bir araya getirir.",
      introLabel: "Neden Éclat d'or",
      introTitle: 'Her formül rafınızdaki yerini hak ediyor.',
      introText:
        'Her ürünü, etkin konsantrasyonlarda, klinik olarak kanıtlanmış az sayıda etken madde etrafında tasarlıyoruz — dolgu madde yok, tahmin yok.',
      viewAll: 'Tüm ürünleri gör',
      soonLabel: 'Yakında',
      soonTitle: 'Geliştirilmekte olan yeni formüller',
      soonText: 'Bu ürünler son test aşamasında ve yakında piyasaya çıkacak. Erken erişim için bize ulaşın.',
      soonBadge: 'Yakında',
      launching: 'Yakında piyasada',
      notify: 'Bana haber ver',
      cs1: 'Kolajen Takviyesi',
      cs2: 'Aydınlatıcı Ampul',
      cs3: 'Hafif Peeling',
      guide: 'Cilt bakım rehberi',
      guideAll: 'Tüm yazıları gör',
      follow: 'Bizi takip edin',
    },
    about: {
      label: 'Hakkımızda',
      title: 'Klinik cilt bakımında güvenilir bir isim',
      intro:
        "On yılı aşkın süredir Éclat d'or, bölgedeki eczaneler, klinikler ve perakendeciler tarafından güvenilen cilt bakım ürünleri üretiyor.",
      points: 'satış noktası',
      countries: 'ülke',
      certified: 'sertifikalı',
      values: 'Değerlerimiz',
      v1t: 'Önce bilim',
      v1d: 'Her formül, yayımlanmış klinik kanıtlara sahip etken maddeler üzerine, etkili olduğu kanıtlanmış konsantrasyonlarda kurulur.',
      v2t: 'Temiz üretim',
      v2d: 'Her aşamada sıkı kalite kontrolüyle GMP sertifikalı tesislerde üretilir.',
      v3t: 'Güvenlik testli',
      v3d: 'Dermatolojik olarak test edilmiş, gereksiz tahriş edicilerden ve ağır parfümlerden arındırılmış formüller.',
      v4t: 'Ortaklar için tasarlandı',
      v4d: 'Özel markadan toptan dağıtıma kadar, ortaklarımızı esnek ve güvenilir üretimle destekliyoruz.',
      ctaTitle: 'Tüm ürün gamını keşfedin',
      ctaText: 'Günlük ihtiyaçlardan hedefe yönelik bakımlara kadar ürettiğimiz her formülü keşfedin.',
      discover: 'Ürünleri keşfet',
      contactTitle: 'Bir sorunuz mu var?',
      contactText: "Ekibimiz WhatsApp'tan hızla yanıt veriyor.",
    },
    catalog: {
      title: 'Ürün kataloğu',
      text: 'Detaylı formülasyonlar, ambalaj seçenekleri ve içerik listeleri için tam kataloğumuzu indirin.',
      cover: "Éclat d'or Kataloğu",
      download: 'PDF indir',
      pending: 'Katalog son haline getiriliyor. Bir kopya talep edin, doğrudan size gönderelim.',
      request: 'Katalog talep et',
    },
    products: {
      title: 'Ürünlerimiz',
      sub: '{n} formül, her biri odaklanmış bir etken madde grubu üzerine kurulu.',
      formula: 'Formülü gör',
    },
    product: {
      about: 'Bu ürün hakkında',
      science: 'Bilimsel arka plan',
      howTo: 'Kullanım şekli',
      tip: 'İpucu',
      ingredients: 'İçindekiler',
      related: 'Bunlar da hoşunuza gidebilir',
    },
    blog: {
      title: 'Cilt bakım rehberi',
      sub: 'Formülasyon ekibimizden pratik rutinler ve öneriler.',
      minRead: 'Bakım rehberi',
      soonTitle: 'Yazının tamamı yakında',
      soonText:
        'Bu rehberi şu anda yazıyoruz. Bu arada ürünlerimizi inceleyebilir veya sorularınızla bize ulaşabilirsiniz.',
      a1: 'İşe yarayan bir sabah rutini oluşturmak',
      a2: 'Gece rutininizin gerçekten ihtiyaç duyduğu etkenler',
      a3: 'Akne eğilimli ciltler için pratik bir yaklaşım',
      a4: 'Melazmayı anlamak ve tedavi etmek',
      a5: 'Hassas ve reaktif cildin bakımı',
      a6: 'Etken maddeleri tahrişsiz katmanlamak',
    },
    certs: {
      title: 'Sertifikalar ve uyumluluk',
      text: 'Her formül, uluslararası alanda tanınan standartlara göre üretilir ve test edilir.',
      gmpT: 'GMP Sertifikalı',
      gmpD: 'İyi Üretim Uygulamaları standartlarına sertifikalı tesislerde üretilir.',
      isoT: 'ISO Sertifikalı',
      isoD: 'Kalite yönetim sistemleri ISO standartlarına göre denetlenir.',
      dermT: 'Dermatolojik Test Edildi',
      dermD: 'Formüller piyasaya sürülmeden önce dermatolojik gözetim altında test edilir.',
      halalT: 'Helal Sertifikalı',
      halalD: 'Helal olmayan hiçbir bileşen kullanılmadan formüle edilir ve üretilir.',
      crueltyT: 'Hayvanlar Üzerinde Test Edilmez',
      crueltyD: 'Formülasyon veya üretimin hiçbir aşamasında hayvan testi yapılmaz.',
      moh: 'Sağlık Bakanlığı Onaylı',
      mohD: 'Ulusal sağlık otoriteleri tarafından satışa kayıtlı ve onaylıdır.',
      ctaTitle: 'Uyumluluk hakkında sorularınız mı var?',
      ctaText: 'Herhangi bir ürün için belge veya sertifika talep edin.',
    },
    contact: {
      title: 'Bize ulaşın',
      text: 'Ürünler, siparişler veya iş birlikleri hakkında sorularınız için buradayız.',
      whatsapp: 'WhatsApp',
      whatsappText: 'Ekibimize ulaşmanın en hızlı yolu.',
      email: 'E-posta',
      address: 'Bizi ziyaret edin',
    },
    footer: {
      tagline: 'Klinik olarak formüle edilmiş, özenle üretilmiş cilt bakımı.',
      pages: 'Sayfalar',
      products: 'Ürünler',
      contact: 'İletişim',
      map: 'Yol tarifi al',
      rights: 'Tüm hakları saklıdır.',
    },
    stockists: {
      title: 'Bizi nerede bulabilirsiniz',
      sub: '{c} ülke, {p}+ satış noktası ve artmaya devam ediyor.',
      pts: 'satış noktası',
      ctaTitle: "Éclat d'or satmak ister misiniz?",
      ctaText: 'Yeni eczane, klinik ve perakende ortaklarına her zaman açığız.',
      inquiry: "Éclat d'or satış noktası olmak istiyorum.",
      contact: 'Satış noktası olun',
    },
    privateLabel: {
      title: 'Özel marka üretimi',
      text: 'Kanıtlanmış formüllerimiz ve GMP sertifikalı üretimimizle kendi cilt bakım markanızı başlatın.',
      clients: 'hizmet verilen müşteri',
      formulas: 'hazır formül',
      gmp: 'sertifikalı',
      offerTitle: 'Neler dahil',
      o1: 'Mevcut, klinik olarak test edilmiş formüllerimize erişim',
      o2: 'Özel ambalaj ve marka kimliği',
      o3: 'Esnek minimum sipariş miktarları',
      o4: 'Mevzuat ve belgelendirme desteği',
      formTitle: 'Görüşmeye başlayın',
      name: 'Ad Soyad',
      phone: 'Telefon',
      email: 'E-posta',
      message: 'Mesaj',
      error: 'Bir şeyler ters gitti. Lütfen tekrar deneyin veya doğrudan bize ulaşın:',
      send: 'Talebi gönder',
      sending: 'Gönderiliyor...',
      sentTitle: 'Teşekkürler',
      sentText: 'Talebinizi aldık, kısa süre içinde size ulaşacağız.',
    },
    common: {
      explore: 'Ürünleri keşfet',
      chatWhatsapp: "WhatsApp'tan yaz",
      sendEmail: 'E-posta gönder',
      backHome: 'Ana sayfaya dön',
      backToProducts: 'Ürünlere dön',
      bestSeller: 'Çok satan',
      photoSoon: 'Fotoğraf yakında',
      shipping: '2-3 iş günü içinde kargoya verilir',
      orderWhatsapp: "WhatsApp'tan sipariş ver",
      orderMsg: 'Merhaba, {name} sipariş etmek istiyorum.',
    },
    notFound: {
      title: 'Sayfa bulunamadı',
      text: 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.',
    },
  },
  es: {
    a11y: {
      skip: 'Saltar al contenido',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      language: 'Idioma',
      theme: 'Cambiar tema',
      mainNav: 'Navegación principal',
      whatsapp: 'Chatear por WhatsApp',
    },
    nav: {
      home: 'Inicio',
      products: 'Productos',
      about: 'Nosotros',
      catalog: 'Catálogo',
      privateLabel: 'Marca blanca',
      stockists: 'Puntos de venta',
      contact: 'Contacto',
      certificates: 'Certificados',
    },
    meta: {
      description:
        "Éclat d'or formula cuidado de la piel con respaldo clínico — sérums, cremas y protección solar — fabricado bajo normas GMP y distribuido en Oriente Medio y Europa.",
    },
    home: {
      heroLabel: 'Cuidado clínico de la piel',
      heroTitle: 'El cuidado profesional que tu piel merece',
      heroText:
        "Éclat d'or combina activos de grado dermatológico en sérums y cremas lo bastante suaves para el uso diario y lo bastante potentes para funcionar.",
      introLabel: "Por qué Éclat d'or",
      introTitle: 'Cada fórmula se gana su lugar en tu estantería.',
      introText:
        'Construimos cada producto en torno a un número reducido de activos clínicamente probados, en concentraciones eficaces — sin relleno ni conjeturas.',
      viewAll: 'Ver todos los productos',
      soonLabel: 'Próximamente',
      soonTitle: 'Nuevas fórmulas en desarrollo',
      soonText: 'Estos tratamientos están en fase final de pruebas y se lanzarán pronto. Pregúntanos por el acceso anticipado.',
      soonBadge: 'Próximamente',
      launching: 'Lanzamiento próximo',
      notify: 'Avísenme',
      cs1: 'Impulsor de colágeno',
      cs2: 'Ampolla iluminadora',
      cs3: 'Exfoliante suave',
      guide: 'Guía de cuidado de la piel',
      guideAll: 'Ver todos los artículos',
      follow: 'Síguenos',
    },
    about: {
      label: 'Sobre nosotros',
      title: 'Un nombre de confianza en cuidado clínico de la piel',
      intro:
        'Desde hace más de una década, Éclat d\'or formula y fabrica productos de cuidado de la piel en los que confían farmacias, clínicas y minoristas de la región.',
      points: 'puntos de venta',
      countries: 'países',
      certified: 'certificada',
      values: 'Lo que defendemos',
      v1t: 'Primero la ciencia',
      v1d: 'Cada fórmula se construye en torno a activos con evidencia clínica publicada, en concentraciones demostradamente eficaces.',
      v2t: 'Fabricación limpia',
      v2d: 'Producido en instalaciones certificadas GMP con un control de calidad estricto en cada etapa.',
      v3t: 'Testado por seguridad',
      v3d: 'Fórmulas probadas dermatológicamente, libres de irritantes innecesarios y fragancias agresivas.',
      v4t: 'Pensado para socios',
      v4d: 'De la marca blanca a la distribución a granel, apoyamos a nuestros socios con una producción flexible y fiable.',
      ctaTitle: 'Descubre la gama completa',
      ctaText: 'Explora cada fórmula que fabricamos, desde esenciales diarios hasta tratamientos específicos.',
      discover: 'Descubrir productos',
      contactTitle: '¿Tienes alguna pregunta?',
      contactText: 'Nuestro equipo responde rápido por WhatsApp.',
    },
    catalog: {
      title: 'Catálogo de productos',
      text: 'Descarga nuestro catálogo completo con formulaciones detalladas, opciones de envase y listas de ingredientes.',
      cover: "Catálogo de Éclat d'or",
      download: 'Descargar PDF',
      pending: 'El catálogo se está finalizando. Solicita una copia y te la enviaremos directamente.',
      request: 'Solicitar catálogo',
    },
    products: {
      title: 'Nuestros productos',
      sub: '{n} fórmulas, cada una construida en torno a un conjunto específico de ingredientes activos.',
      formula: 'Ver fórmula',
    },
    product: {
      about: 'Sobre este producto',
      science: 'La ciencia',
      howTo: 'Modo de uso',
      tip: 'Consejo',
      ingredients: 'Ingredientes',
      related: 'También te puede interesar',
    },
    blog: {
      title: 'Guía de cuidado de la piel',
      sub: 'Rutinas prácticas y consejos de nuestro equipo de formulación.',
      minRead: 'Guía de cuidado',
      soonTitle: 'Artículo completo próximamente',
      soonText: 'Estamos redactando esta guía. Mientras tanto, explora nuestros productos o contáctanos con tus preguntas.',
      a1: 'Cómo crear una rutina matutina eficaz',
      a2: 'Los activos que tu rutina nocturna realmente necesita',
      a3: 'Un enfoque práctico para la piel con tendencia acnéica',
      a4: 'Entender y tratar el melasma',
      a5: 'Cuidado de la piel sensible y reactiva',
      a6: 'Cómo combinar activos sin irritación',
    },
    certs: {
      title: 'Certificados y cumplimiento',
      text: 'Cada fórmula se fabrica y se prueba conforme a estándares reconocidos internacionalmente.',
      gmpT: 'Certificado GMP',
      gmpD: 'Fabricado en instalaciones certificadas con normas de Buenas Prácticas de Fabricación.',
      isoT: 'Certificado ISO',
      isoD: 'Sistemas de gestión de calidad auditados conforme a normas ISO.',
      dermT: 'Probado dermatológicamente',
      dermD: 'Las fórmulas se prueban bajo supervisión dermatológica antes de su lanzamiento.',
      halalT: 'Certificado Halal',
      halalD: 'Formulado y producido sin ningún ingrediente no halal.',
      crueltyT: 'Libre de crueldad animal',
      crueltyD: 'Sin pruebas en animales en ninguna etapa de la formulación o producción.',
      moh: 'Registrado por el Ministerio de Salud',
      mohD: 'Registrado y aprobado para su venta por las autoridades sanitarias nacionales.',
      ctaTitle: '¿Preguntas sobre el cumplimiento?',
      ctaText: 'Solicita documentación o certificados de cualquier producto.',
    },
    contact: {
      title: 'Ponte en contacto',
      text: 'Preguntas sobre productos, pedidos o colaboraciones: estamos aquí para ayudar.',
      whatsapp: 'WhatsApp',
      whatsappText: 'La forma más rápida de contactar a nuestro equipo.',
      email: 'Correo electrónico',
      address: 'Visítanos',
    },
    footer: {
      tagline: 'Cuidado de la piel formulado clínicamente, fabricado con esmero.',
      pages: 'Páginas',
      products: 'Productos',
      contact: 'Contacto',
      map: 'Obtener indicaciones',
      rights: 'Todos los derechos reservados.',
    },
    stockists: {
      title: 'Dónde encontrarnos',
      sub: '{c} países, más de {p} puntos de venta y en crecimiento.',
      pts: 'puntos de venta',
      ctaTitle: '¿Quieres vender Éclat d\'or?',
      ctaText: 'Siempre estamos abiertos a nuevos socios de farmacias, clínicas y minoristas.',
      inquiry: "Me gustaría convertirme en punto de venta de Éclat d'or.",
      contact: 'Conviértete en punto de venta',
    },
    privateLabel: {
      title: 'Fabricación de marca blanca',
      text: 'Lanza tu propia línea de cuidado de la piel con nuestras fórmulas probadas y producción certificada GMP.',
      clients: 'clientes atendidos',
      formulas: 'fórmulas listas',
      gmp: 'certificada',
      offerTitle: 'Qué incluye',
      o1: 'Acceso a nuestras fórmulas existentes, probadas clínicamente',
      o2: 'Envase y marca personalizados',
      o3: 'Cantidades mínimas de pedido flexibles',
      o4: 'Apoyo normativo y documental',
      formTitle: 'Inicia una conversación',
      name: 'Nombre',
      phone: 'Teléfono',
      email: 'Correo electrónico',
      message: 'Mensaje',
      error: 'Algo salió mal. Inténtalo de nuevo o contáctanos directamente por',
      send: 'Enviar solicitud',
      sending: 'Enviando...',
      sentTitle: 'Gracias',
      sentText: 'Hemos recibido tu solicitud y nos pondremos en contacto pronto.',
    },
    common: {
      explore: 'Explorar productos',
      chatWhatsapp: 'Chatear por WhatsApp',
      sendEmail: 'Enviar un correo',
      backHome: 'Volver al inicio',
      backToProducts: 'Volver a productos',
      bestSeller: 'Más vendido',
      photoSoon: 'Foto próximamente',
      shipping: 'Se envía en 2-3 días hábiles',
      orderWhatsapp: 'Pedir por WhatsApp',
      orderMsg: 'Hola, me gustaría pedir {name}.',
    },
    notFound: {
      title: 'Página no encontrada',
      text: 'La página que buscas no existe o puede que se haya movido.',
    },
  },
  ru: {
    a11y: {
      skip: 'Перейти к содержимому',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
      language: 'Язык',
      theme: 'Переключить тему',
      mainNav: 'Основная навигация',
      whatsapp: 'Написать в WhatsApp',
    },
    nav: {
      home: 'Главная',
      products: 'Продукты',
      about: 'О нас',
      catalog: 'Каталог',
      privateLabel: 'Частная марка',
      stockists: 'Точки продаж',
      contact: 'Контакты',
      certificates: 'Сертификаты',
    },
    meta: {
      description:
        "Éclat d'or разрабатывает клинически обоснованный уход за кожей — сыворотки, кремы и солнцезащитные средства — производимый по стандартам GMP и распространяемый на Ближнем Востоке и в Европе.",
    },
    home: {
      heroLabel: 'Клинический уход за кожей',
      heroTitle: 'Профессиональный уход, которого заслуживает ваша кожа.',
      heroText:
        "Éclat d'or сочетает активные компоненты дерматологического уровня в сыворотках и кремах — достаточно мягких для ежедневного применения и достаточно эффективных, чтобы работать.",
      introLabel: "Почему Éclat d'or",
      introTitle: 'Каждая формула заслуживает места на вашей полке.',
      introText:
        'Мы создаём каждый продукт вокруг небольшого числа клинически доказанных активных компонентов в эффективных концентрациях — без наполнителей и догадок.',
      viewAll: 'Смотреть все продукты',
      soonLabel: 'Скоро',
      soonTitle: 'Новые формулы в разработке',
      soonText: 'Эти средства проходят финальное тестирование и скоро появятся в продаже. Спросите нас о раннем доступе.',
      soonBadge: 'Скоро',
      launching: 'Скоро в продаже',
      notify: 'Сообщить мне',
      cs1: 'Коллагеновый бустер',
      cs2: 'Осветляющая ампула',
      cs3: 'Мягкий скраб',
      guide: 'Гид по уходу за кожей',
      guideAll: 'Смотреть все статьи',
      follow: 'Подписывайтесь',
    },
    about: {
      label: 'О нас',
      title: 'Надёжное имя в клиническом уходе за кожей',
      intro:
        'Более десяти лет Éclat d\'or разрабатывает и производит средства по уходу за кожей, которым доверяют аптеки, клиники и розничные сети в регионе.',
      points: 'точек продаж',
      countries: 'стран',
      certified: 'сертифицировано',
      values: 'Наши принципы',
      v1t: 'Наука прежде всего',
      v1d: 'Каждая формула строится вокруг активных компонентов с опубликованными клиническими данными, в доказанно эффективных концентрациях.',
      v2t: 'Чистое производство',
      v2d: 'Производится на предприятиях с сертификатом GMP при строгом контроле качества на каждом этапе.',
      v3t: 'Протестировано на безопасность',
      v3d: 'Формулы дерматологически протестированы, без лишних раздражителей и резких отдушек.',
      v4t: 'Создано для партнёров',
      v4d: 'От частной марки до оптового распространения — мы поддерживаем партнёров гибким и надёжным производством.',
      ctaTitle: 'Посмотрите полный ассортимент',
      ctaText: 'Изучите каждую формулу, которую мы производим — от повседневных средств до целевых уходов.',
      discover: 'Смотреть продукты',
      contactTitle: 'Есть вопрос?',
      contactText: 'Наша команда быстро отвечает в WhatsApp.',
    },
    catalog: {
      title: 'Каталог продукции',
      text: 'Скачайте полный каталог с подробными формулами, вариантами упаковки и списками ингредиентов.',
      cover: "Каталог Éclat d'or",
      download: 'Скачать PDF',
      pending: 'Каталог находится в финальной доработке. Запросите копию, и мы отправим её напрямую.',
      request: 'Запросить каталог',
    },
    products: {
      title: 'Наши продукты',
      sub: '{n} формул, каждая построена вокруг целевого набора активных ингредиентов.',
      formula: 'Смотреть формулу',
    },
    product: {
      about: 'Об этом продукте',
      science: 'Научная основа',
      howTo: 'Как использовать',
      tip: 'Совет',
      ingredients: 'Состав',
      related: 'Вам также может понравиться',
    },
    blog: {
      title: 'Гид по уходу за кожей',
      sub: 'Практичные рутины и советы от нашей команды разработчиков формул.',
      minRead: 'Гид по уходу',
      soonTitle: 'Полная статья скоро',
      soonText: 'Мы сейчас пишем этот гид. А пока — изучите наши продукты или свяжитесь с нами по любым вопросам.',
      a1: 'Как построить работающий утренний уход',
      a2: 'Активные компоненты, которые действительно нужны вечернему уходу',
      a3: 'Практичный подход к коже, склонной к акне',
      a4: 'Понимание и лечение мелазмы',
      a5: 'Уход за чувствительной, реактивной кожей',
      a6: 'Как сочетать активные компоненты без раздражения',
    },
    certs: {
      title: 'Сертификаты и соответствие',
      text: 'Каждая формула производится и тестируется в соответствии с международно признанными стандартами.',
      gmpT: 'Сертификат GMP',
      gmpD: 'Производится на предприятиях, сертифицированных по стандартам надлежащей производственной практики.',
      isoT: 'Сертификат ISO',
      isoD: 'Системы менеджмента качества проверены в соответствии со стандартами ISO.',
      dermT: 'Дерматологически протестировано',
      dermD: 'Формулы тестируются под дерматологическим контролем перед выпуском.',
      halalT: 'Сертификат Халяль',
      halalD: 'Разработано и произведено без каких-либо нехаляльных компонентов.',
      crueltyT: 'Без жестокости к животным',
      crueltyD: 'Ни на одном этапе разработки или производства не проводятся испытания на животных.',
      moh: 'Зарегистрировано Министерством здравоохранения',
      mohD: 'Зарегистрировано и одобрено к продаже национальными органами здравоохранения.',
      ctaTitle: 'Вопросы о соответствии стандартам?',
      ctaText: 'Запросите документацию или сертификаты на любой продукт.',
    },
    contact: {
      title: 'Свяжитесь с нами',
      text: 'Вопросы о продуктах, заказах или партнёрстве — мы всегда готовы помочь.',
      whatsapp: 'WhatsApp',
      whatsappText: 'Самый быстрый способ связаться с нашей командой.',
      email: 'Эл. почта',
      address: 'Посетите нас',
    },
    footer: {
      tagline: 'Клинически разработанный уход за кожей, произведённый с заботой.',
      pages: 'Страницы',
      products: 'Продукты',
      contact: 'Контакты',
      map: 'Проложить маршрут',
      rights: 'Все права защищены.',
    },
    stockists: {
      title: 'Где нас найти',
      sub: '{c} стран, более {p} точек продаж, и это число растёт.',
      pts: 'точек продаж',
      ctaTitle: "Хотите продавать Éclat d'or?",
      ctaText: 'Мы всегда открыты для новых партнёров среди аптек, клиник и розничных магазинов.',
      inquiry: "Я хотел(а) бы стать точкой продаж Éclat d'or.",
      contact: 'Стать точкой продаж',
    },
    privateLabel: {
      title: 'Производство под частной маркой',
      text: 'Запустите собственную линию по уходу за кожей на основе наших проверенных формул и производства с сертификатом GMP.',
      clients: 'клиентов обслужено',
      formulas: 'готовых формул',
      gmp: 'сертифицировано',
      offerTitle: 'Что включено',
      o1: 'Доступ к нашим существующим, клинически протестированным формулам',
      o2: 'Индивидуальная упаковка и брендинг',
      o3: 'Гибкие минимальные объёмы заказа',
      o4: 'Поддержка по нормативным требованиям и документации',
      formTitle: 'Начать разговор',
      name: 'Имя',
      phone: 'Телефон',
      email: 'Эл. почта',
      message: 'Сообщение',
      error: 'Что-то пошло не так. Попробуйте ещё раз или свяжитесь с нами напрямую через',
      send: 'Отправить запрос',
      sending: 'Отправка...',
      sentTitle: 'Спасибо',
      sentText: 'Мы получили ваш запрос и скоро свяжемся с вами.',
    },
    common: {
      explore: 'Смотреть продукты',
      chatWhatsapp: 'Написать в WhatsApp',
      sendEmail: 'Отправить письмо',
      backHome: 'На главную',
      backToProducts: 'К продуктам',
      bestSeller: 'Хит продаж',
      photoSoon: 'Фото скоро появится',
      shipping: 'Отправка в течение 2-3 рабочих дней',
      orderWhatsapp: 'Заказать в WhatsApp',
      orderMsg: 'Здравствуйте, хочу заказать {name}.',
    },
    notFound: {
      title: 'Страница не найдена',
      text: 'Страницы, которую вы ищете, не существует или она была перемещена.',
    },
  },
}

export function getDict(lang: Locale): Dict {
  return dict[lang]
}

export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ''))
}

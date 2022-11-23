$(document).ready(function () {
    var arrLang = {
      tr: {
        1: "Anasayfa",
        2: "Faaliyetlerimiz",
        3: "Hakkımızda",
        4: "İletişim",
        5: "Güneş Enerjisi Sistemleri",
        6: "Temiz Enerji Temiz Dünya Mottosuyla Güneş Enerjisi Sistemlerinde Sektörde Öncü Olmayı Hedefliyoruz!!",
        7: "Elektrik Projeleri",
        8: "Evinizde, İş Yerinizde Elektriği Güvenle Kullanın!",
        17:"Tarım",
        18:"Tarıma Yönelik Projelerimizle Çiftçilerimizin Yanındayız!",
        19:"Sağlığınız Bizim İçin Önemli",
        20:"Zeytin, Zeytinyağı Ve Freeze Dry Teknolojisi İle Üretilmiş Kuru Meyveler, Dünyaya Sağlıklı Yiyecekler Gönderiyoruz!",
        9: "Daha temiz, daha yaşanabilir bir dünya için üretim mottosuyla 2020 yılında kurulan şirketimiz, elektrik, enerji, tarım teknolojileri, tarım ve gıda alanlarında faaliyet göstermektedir.",
        10:"Firmamız enerji alanında Güneş Enerjisi Santralleri kurulumu, alçak gerilim ve yüksek gerilim projeleri gerçekleştirmektedir.",
        11:"Gıda alanında zeytin, zeytin yağı ve Freeze Dry teknolojisi ile üretilmiş kuru meyve ihracatı yapmaktadır.",
        41:"Adres",
        42: "KALE MAH. ATATÜRK BLV. NO:18/A MUT  MERSİN / TÜRKİYE",
        43: "Haritada Göster",
        44: "Bizi Takip Edin",
        45: "Bize Ulaşın",
        46: "E-Posta"
      },
      en: {
        1: "Home",
        2: "Portfolio",
        3: "About Us",
        4: "Contact Us",
        5: "Solar Energy Systems",
        6: "With the motto of Clean Energy Clean World, we aim to be a pioneer in the sector in solar energy systems!",
        7: "Electric Projects",
        8: "Use Electricity Safely in Your Home and Workplace!",
        17:"Agriculture",
        18:"We Are With Our Farmers With Our Agricultural Projects!",
        19:"Your Health is Important to Us",
        20:"Olive, Olive Oil and Dried Fruits Produced with Freeze Dry Technology, We Send Healthy Foods to the World!",
        9: "Established in 2020 with the motto of production for a cleaner, more livable world, our company operates in the fields of electricity, energy, agricultural technologies, farming and food.",
        10:"Our company carries out installation of Solar Power Plants, low voltage and high voltage projects in the field of energy.",
        11:"Our company in the field of food; exports olives, olive oil and dried fruits produced with freeze dry technology.",
        41: "Address",
        42: "Kale Neighbourhood, Boulevard Ataturk, No. 18, Mersin/Turkey",
        43: "Show on Map",
        44: "Follow Us",
        45: "Contact Us",
        46: "E-Mail"
      },
      arb: {
        1: "الصفحة الرئيسية",
        2: "المحفظة",
        3: "نبذة عنا",
        4: "الاتصال",
        5: "أنظمة الطاقة الشمسية",
        6: "نهدف إلى أن نكون الشركة الرائدة في قطاع أنظمة الطاقة الشمسية مع شعار الطاقة النظيفة ، عالم نظيف!",
        7: "المشاريع الكهربائية",
        8: "استخدم الكهرباء بأمان في منزلك ومكان عملك!",
        17:"زراعة",
        18:"نحن مع مزارعينا بمشاريعنا الزراعية!",
        19:"صحتك تهمنا",
        20:"الزيتون وزيت الزيتون والفواكه المجففة المنتجة بتقنية التجفيف بالتجميد ، نرسل أغذية صحية إلى العالم!",
        9: "تأسست في عام 2020 بشعار الإنتاج من أجل عالم أنظف وأكثر ملاءمة للعيش ، تعمل شركتنا في مجالات الكهرباء والطاقة والتقنيات الزراعية والزراعة والغذاء.",
        10:"تقوم شركتنا بتركيب محطات الطاقة الشمسية ومشاريع الجهد المنخفض والجهد العالي في مجال الطاقة.",
        11:"شركتنا في مجال الغذاء. تصدير الزيتون وزيت الزيتون والفواكه المجففة المنتجة بتقنية التجفيف بالتجميد.",
        41: "تبوك",
        42: "حي كالي ، بوليفارد أتاتورك ، رقم 18 ، موط ، مرسين / تركيا",
        43: "عرض على الخريطة",
        44: "تابعنا",
        45: "اتصل بنا",
        46: "البريد الإلكتروني"
      },
      gurcu: {
        1: "სახლი",
        2: "პორტფოლიო",
        3: "ჩვენს შესახებ",
        4: "დაგვიკავშირდით",
        5: "მზის ენერგიის სისტემები",
        6: "ჩვენი მიზანია ვიყოთ ლიდერები მზის ენერგიის სისტემების სექტორში სუფთა ენერგიის, სუფთა სამყაროს დევიზით!",
        7: "ელექტრო პროექტები",
        8: "გამოიყენეთ ელექტროენერგია თქვენს სახლში და სამუშაო ადგილზე!",
        17:"სოფლის მეურნეობა",
        18:"ჩვენ ვართ ფერმერებთან ჩვენი სოფლის მეურნეობის პროექტებით!",
        19:"თქვენი ჯანმრთელობა ჩვენთვის მნიშვნელოვანიაsa",
        20:"ზეითუნის ზეთი, ზეითუნის ზეთი და ჩირი, დამზადებული ყინვაგამძლე მშრალი ტექნოლოგიით, ჩვენ ვაგზავნით ჯანსაღ საკვებს მსოფლიოს!",
        9: "ჩვენი კომპანია, რომელიც დაარსდა 2020 წელს პროდუქციის უფრო სუფთა და სიცოცხლისუნარიანი სამყაროს დევიზით, მუშაობს ელექტროენერგიის, ენერგეტიკის, სასოფლო-სამეურნეო ტექნოლოგიების, სოფლის მეურნეობისა და კვების სფეროებში.",
        10:"ჩვენი კომპანია ახორციელებს მზის ელექტროსადგურების მონტაჟს, დაბალი ძაბვის და მაღალი ძაბვის პროექტებს ენერგეტიკის სფეროში.",
        11:"ჩვენი კომპანია კვების სფეროში; ახორციელებს ექსპორტს ზეთისხილის, ზეითუნის ზეთსა და ყინვაგამძლე ტექნოლოგიით წარმოებულ ჩირს.",
        41: "მისამართი",
        42: "კალე მაჰალესი, ათათურქ ბულვარი, No. 18, მერსინი/თურქეთი",
        43: "რუკაზე ჩვენება",
        44: "Მოგვყევი",
        45: "დაგვიკავშირდით",
        46: "ელ.ფოსტა"
        
      },
    };
    $(".dropdown-item").click(function () {
      localStorage.setItem("dil", JSON.stringify($(this).attr("id")));
      location.reload();
    });
  
    var lang = JSON.parse(localStorage.getItem("dil"));
  
    if (lang == "tr") {
      $("#drop_yazı").html("Türkçe");
    }
    if (lang == "en") {
      $("#drop_yazı").html("English");
    }
    if (lang == "arb") {
      $("#drop_yazı").html("عربي");
    }
    if (lang == "gurcu") {
      $("#drop_yazı").html("ქართული");
    }
  
    $("a,h5,p,h1,h2,span,li,button,h3,h4,label").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
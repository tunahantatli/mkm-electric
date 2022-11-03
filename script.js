$(document).ready(function () {
    var arrLang = {
      tr: {
        1: "Anasayfa",
        2: "Faaliyetlerimiz",
        3: "Hakkımızda",
        4: "İletişim",
        5: "Partnerlerimiz",
        6: "Güçlü Partnerlerimizle Birlikte Hizmet Kalitemiz Daima Birinci Sınıf!",
        7: "Sertifikalarımız",
        8: "Sertifikalarımız İle Güven Veriyoruz!",
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
        5: "Partners",
        6: "Together with Our Strong Partners, Our Service Quality is Always First Class!",
        7: "Certificates",
        8: "We Give Trust With Our Certificates!",
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
        5: "شركاؤنا",
        6: "جنبًا إلى جنب مع شركائنا الأقوياء ، تكون جودة خدماتنا دائمًا من الدرجة الأولى!",
        7: "شهاداتنا",
        8: "نحن نثق بشهاداتنا!",
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
        5: "ჩვენი პარტნიორები",
        6: "ჩვენს ძლიერ პარტნიორებთან ერთად ჩვენი მომსახურების ხარისხი ყოველთვის პირველ ადგილზეა!",
        7: "ჩვენი სერთიფიკატები",
        8: "ჩვენ ვენდობით ჩვენს სერთიფიკატებს!",
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
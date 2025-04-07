document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            pageTitle: "Kyrosil Grand Giveaway",
            pageTitleGiveaway1: "Flat Giveaway - Kyrosil",
            pageTitleGiveaway2: "USDT Giveaway - Kyrosil", // Örnek
            pageTitleGiveaway3: "Starbucks Giveaway - Kyrosil", // Örnek
            pageTitleGiveaway4: "Partner Prizes Giveaway - Kyrosil", // Örnek
            mainHeading: "✨ Kyrosil Grand Giveaway! ✨",
            indexChoiceTitle: "Choose Your Giveaway!",
            indexPrize1Title: "2+1 Flat",
            indexPrize2Title: "250 USDT x 50",
            indexPrize3Title: "$50 Starbucks Card x 100",
            indexPrize4Title: "Partner Prize Packs",
            indexEnterButton: "Details & Enter",
            indexRulesLink: "See General Terms & Conditions",
            overallEndDate: "April 30, 2025", // Ana sayfadaki genel bitiş tarihi
            detailBackButton: "&larr; Back to All Giveaways",
            detailPrizeTitle: "The Prize",
            detailFormTitle: "Enter the Draw!",
            form1Desc: "You can enter the giveaway by filling out the information below. Please ensure you meet the entry requirements listed in the terms.", // Giveaway 1 Form Desc
            prize1Title: "2+1 Flat from ReziKyros Azure Kağıthane", // Giveaway 1 Detail Title
            prize1Desc: "A chance to win a fantastic flat in our soon-to-be-completed ReziKyros Azure Kağıthane project!",
            conditionsTitle: "Specific Conditions:",
            prize1Cond1: "Be over 18 years old",
            prize1Cond2: "Not have any registered vehicle or property deed in your name",
            prize1Cond3: "Follow @kyrosil on Instagram",
            prize2Title: "250 USDT Each for 50 People", // Giveaway 2 Detail Title
            prize2Desc: "You could be one of 50 lucky winners to receive 250 USDT!", // Giveaway 2 Detail Desc
            prize3Title: "$50 Starbucks Mobile Gift Card x 100", // Giveaway 3 Detail Title
            prize3Desc: "100 lucky winners will receive a $50 Starbucks Mobile Gift Card (Approx. 46 EUR / 1600 TRY value, actual value may vary based on current exchange rates).", // Giveaway 3 Detail Desc with Currency Placeholder
            prize4Title: "Partner Prize Packs", // Giveaway 4 Detail Title
            prize4Desc: "Enter to win one of the amazing prize packs from our partners: 50 Nestle Happiness Packs, 100 Coca Cola Happiness Packs, or one of 500 $30 Burger King Vouchers!", // Giveaway 4 Detail Desc (Combined)
            prize4DescBK: "$30 Burger King Voucher (Approx. 28 EUR / 960 TRY value, actual value may vary based on current exchange rates). Valid on mobile app.", // Specific BK desc (if needed separately)
            formNameLabel: "Full Name:",
            formNamePlaceholder: "e.g., John Doe",
            formEmailLabel: "Email Address:",
            formEmailPlaceholder: "e.g., john@example.com",
            formSubmitButton: "Submit Entry",
            formBackButton: "&larr; Go Back",
            formValidationError: "Please fill in all required fields.",
            formSubmitting: "Submitting...",
            formSubmitted: "Submitted!",
            formError: "An error occurred, please try again.",
            formThanksMessage: "Thank you for entering! Good luck.",
            rulesTitle: "General Terms & Information",
            rulesScheduleTitle: "Giveaway Schedule",
            rulesStartDateLabel: "Start Date:",
            rulesStartDateValue: "[PLEASE ENTER START DATE AND TIME HERE]", // Placeholder
            rulesEndDateLabel: "Entry Deadline:",
            giveaway1EndDateValue: "April 30, 2025", // Specific for G1 page
            giveaway2EndDateValue: "April 15, 2025", // Specific for G2 page
            giveaway3EndDateValue: "April 15, 2025", // Specific for G3 page
            giveaway4EndDateValue: "April 15, 2025", // Specific for G4 page
            rulesAnnounceTitle: "Announcement of Results:",
            giveaway1AnnounceDesc: "Results will be announced via live broadcast draw on EU Portal on May 1, 2025.", // Specific for G1 page
            giveaway2AnnounceDesc: "Results will be announced via live broadcast draw on EU Portal on April 16, 2025.",// Specific for G2 page
            giveaway3AnnounceDesc: "Results will be announced via live broadcast draw on EU Portal on April 16, 2025.",// Specific for G3 page
            giveaway4AnnounceDesc: "Results will be announced via live broadcast draw on EU Portal on April 16, 2025.",// Specific for G4 page
            rulesGeneralCondTitle: "General Conditions",
            rulesCond1: "All participants must be over 18 years of age.",
            rulesCond2: "All participants must follow the @kyrosil account on Instagram.",
            rulesCond3: "Kyrosil employees and their first-degree relatives cannot participate in the draw.",
            rulesCondGeneric: "[Add other general rules if any]", // Placeholder for generic rules text
            rulesSpecialCond1Title: "Specific Conditions (Flat Giveaway)",
            rulesSpecialCond1Item1: "The winning participant must not have any registered vehicle or property deed in their name as of the date the results are announced. This condition will be verified.",
            rulesSpecialCond2Title: "Specific Conditions (USDT Giveaway)", // Added title key
            rulesSpecialCond2Item1: "A total of 50 people will win 250 USDT each.", // Added item key
            rulesSpecialCond3Title: "Specific Conditions (Starbucks Giveaway)", // Added title key
            rulesSpecialCond3Item1: "A total of 100 people will win a $50 Starbucks Mobile Gift Card each.", // Added item key
            rulesSpecialCond4Title: "Specific Conditions (Partner Packs Giveaway)", // Added title key
            rulesSpecialCond4Item1: "Prizes: 50 Nestle Packs, 100 Coca Cola Packs, 500 Burger King $30 Vouchers. Winners randomly assigned.", // Combined description
            rulesWinnerSelTitle: "Winner Selection",
            rulesWinnerSelDesc: "Winners will be determined by a random draw conducted via live broadcast on the EU Portal on the specified announcement date.", // Updated description
            legalTitle: "Legal Permissions", // New Key
            legalDesc: "This giveaway is conducted under the permissions obtained from the relevant authorities in Turkey and the European Union. Turkey Permit: Milli Piyango İdaresi - Permit No: [TR-MP-2025/XYZ-123] dated [01/04/2025]. EU Notification: Registered under consumer promotion regulations via [Relevant EU Body/Platform Name] - Ref: [EU-CP-2025/ABC-789]. All participants accept the terms by entering. [Please replace placeholders with actual permit details].", // New Key with Placeholders
            rulesOtherTitle: "Other Matters",
            rulesOtherDesc: "[PLEASE ADD ANY ADDITIONAL CLAUSES OR LEGAL DISCLAIMERS YOU DEEM NECESSARY HERE]", // Placeholder
            sponsorsTitle: "Our Sponsors",
            sponsorsPlaceholder: '[If there are no sponsors, you can delete this section or write "This giveaway has no sponsors."]', // Placeholder
            footerRights: "© 2025 Kyrosil. All rights reserved.",
            footerTnc: "T&C apply."
        },
        tr: { // Turkish - Kısaltılmış Örnek (TÜM anahtarların çevirisi eklenecek)
             pageTitle: "Kyrosil Büyük Çekiliş",
             pageTitleGiveaway1: "Daire Çekilişi - Kyrosil",
             pageTitleGiveaway2: "USDT Çekilişi - Kyrosil",
             pageTitleGiveaway3: "Starbucks Çekilişi - Kyrosil",
             pageTitleGiveaway4: "Partner Paketleri Çekilişi - Kyrosil",
             mainHeading: "✨ Kyrosil Büyük Çekiliş! ✨",
             indexChoiceTitle: "Çekilişini Seç!",
             indexPrize1Title: "2+1 Daire",
             indexPrize2Title: "250 USDT x 50",
             indexPrize3Title: "50$ Starbucks Kart x 100",
             indexPrize4Title: "Partner Hediye Paketleri",
             indexEnterButton: "Detaylar & Katıl",
             indexRulesLink: "Genel Katılım Şartları ve Koşulları Gör",
             overallEndDate: "30 Nisan 2025", // Ana sayfadaki genel bitiş tarihi
             detailBackButton: "&larr; Tüm Çekilişlere Geri Dön",
             detailPrizeTitle: "Ödül",
             detailFormTitle: "Çekilişe Katıl!",
             form1Desc: "Aşağıdaki bilgileri doldurarak çekilişe katılabilirsiniz. Lütfen katılım şartlarını sağladığınızdan emin olun.",
             prize1Title: "ReziKyros Azure Kağıthane'den 2+1 Daire",
             prize1Desc: "Tamamlanmak üzere olan projemizden harika bir daire kazanma şansı!",
             conditionsTitle: "Özel Şartlar:",
             prize1Cond1: "18 yaşından büyük olmak",
             prize1Cond2: "Üzerine herhangi bir araç veya tapu kaydı olmamak",
             prize1Cond3: "Instagram'da @kyrosil hesabını takip etmek",
             prize2Title: "50 Kişiye 250 USDT",
             prize2Desc: "Tam 50 şanslı kişiden biri olup 250 USDT kazanabilirsiniz!",
             prize3Title: "100 Kişiye 50$ Değerinde Starbucks Kart",
             prize3Desc: "100 şanslı kişi 50$ Değerinde Starbucks Mobil Hediye Kartı kazanacak (Güncel kurla yaklaşık 1600 TL / 46 EUR karşılığı, değer değişiklik gösterebilir).",
             prize4Title: "Partner Hediye Paketleri",
             prize4Desc: "Partnerlerimizden harika hediye paketlerinden birini kazanmak için katılın: 50 Nestle Mutluluk Paketi, 100 Coca Cola Mutluluk Paketi veya 500 adet 30$ Değerinde Tıkla Gelsin Hediye Çeki!",
             prize4DescBK: "500 kişiye Tıkla Gelsin mobil uygulamasında geçerli 30$ Değerinde Hediye Çeki (Güncel kurla yaklaşık 960 TL / 28 EUR karşılığı, değer değişiklik gösterebilir).",
             formNameLabel: "Adın Soyadın:",
             formNamePlaceholder: "örn: Ayşe Yılmaz",
             formEmailLabel: "E-posta Adresin:",
             formEmailPlaceholder: "örn: ayse@ornek.com",
             formSubmitButton: "Katılımı Gönder",
             formBackButton: "&larr; Geri Dön",
             formValidationError: "Lütfen tüm gerekli alanları doldurun.",
             formSubmitting: "Gönderiliyor...",
             formSubmitted: "Gönderildi!",
             formError: "Bir hata oluştu, lütfen tekrar deneyin.",
             formThanksMessage: "Katıldığınız için teşekkürler! Bol şans.",
             rulesTitle: "Genel Katılım Şartları ve Bilgiler",
             rulesScheduleTitle: "Çekiliş Takvimi",
             rulesStartDateLabel: "Başlangıç Tarihi:",
             rulesStartDateValue: "[BURAYA BAŞLANGIÇ TARİH VE SAATİNİ YAZIN]",
             rulesEndDateLabel: "Son Katılım Tarihi:",
             giveaway1EndDateValue: "30 Nisan 2025",
             giveaway2EndDateValue: "15 Nisan 2025",
             giveaway3EndDateValue: "15 Nisan 2025",
             giveaway4EndDateValue: "15 Nisan 2025",
             rulesAnnounceTitle: "Sonuçların Açıklanması:",
             giveaway1AnnounceDesc: "Sonuçlar 1 Mayıs 2025 tarihinde EU Portal'da yapılacak canlı yayın çekilişi ile açıklanacaktır.",
             giveaway2AnnounceDesc: "Sonuçlar 16 Nisan 2025 tarihinde EU Portal'da yapılacak canlı yayın çekilişi ile açıklanacaktır.",
             giveaway3AnnounceDesc: "Sonuçlar 16 Nisan 2025 tarihinde EU Portal'da yapılacak canlı yayın çekilişi ile açıklanacaktır.",
             giveaway4AnnounceDesc: "Sonuçlar 16 Nisan 2025 tarihinde EU Portal'da yapılacak canlı yayın çekilişi ile açıklanacaktır.",
             rulesGeneralCondTitle: "Genel Şartlar",
             rulesCond1: "Tüm katılımcıların 18 yaşından büyük olması gerekmektedir.",
             rulesCond2: "Tüm katılımcıların Instagram'da @kyrosil hesabını takip etmesi gerekmektedir.",
             rulesCond3: "Kyrosil çalışanları ve birinci derece yakınları çekilişe katılamaz.",
             rulesCondGeneric: "[Varsa diğer genel kuralları buraya ekleyin]",
             rulesSpecialCond1Title: "Özel Şartlar (Daire Çekilişi)",
             rulesSpecialCond1Item1: "Kazanan talihlinin üzerine çekiliş sonuçlarının açıklandığı tarih itibarıyla herhangi bir araç veya tapu kaydı bulunmaması gerekmektedir. Bu durumun kontrolü yapılacaktır.",
             rulesSpecialCond2Title: "Özel Şartlar (USDT Çekilişi)",
             rulesSpecialCond2Item1: "Bu çekilişte toplam 50 kişi, kişi başı 250 USDT kazanacaktır.",
             rulesSpecialCond3Title: "Özel Şartlar (Starbucks Çekilişi)",
             rulesSpecialCond3Item1: "Bu çekilişte toplam 100 kişi, kişi başı 50$ Değerinde Starbucks Mobil Hediye Kartı kazanacaktır.",
             rulesSpecialCond4Title: "Özel Şartlar (Partner Paketleri Çekilişi)",
             rulesSpecialCond4Item1: "Ödüller: 50 Nestle Paketi, 100 Coca Cola Paketi, 500 Burger King 30$ Çeki. Kazananlar rastgele atanacaktır.",
             rulesWinnerSelTitle: "Kazananların Belirlenmesi",
             rulesWinnerSelDesc: "Kazananlar, belirtilen açıklanma tarihinde EU Portal'da yapılacak canlı yayın çekilişi ile rastgele belirlenecektir.", // Açıklama güncellendi
             legalTitle: "Yasal İzinler", // Yeni Anahtar
             legalDesc: "Bu çekiliş, Türkiye Cumhuriyeti ve Avrupa Birliği'ndeki ilgili mercilerden alınan izinler dahilinde düzenlenmektedir. Türkiye İzni: Milli Piyango İdaresi - İzin No: [TR-MP-2025/XYZ-123] Tarih: [01/04/2025]. AB Bildirimi: Tüketici promosyonları yönetmelikleri kapsamında [İlgili AB Kurumu/Platform Adı] üzerinden kayıtlıdır - Ref: [EU-CP-2025/ABC-789]. Tüm katılımcılar katılarak şartları kabul etmiş sayılırlar. [Lütfen yer tutucuları gerçek izin detayları ile değiştirin].", // Yeni Anahtar - Placeholder
             rulesOtherTitle: "Diğer Hususlar",
             rulesOtherDesc: "[BURAYA GEREKLİ GÖRDÜĞÜNÜZ EK MADDELERİ VEYA YASAL UYARILARI EKLEYİN]", // Placeholder
             sponsorsTitle: "Sponsorlarımız",
             sponsorsPlaceholder: '[Sponsor yoksa bu bölümü silebilir veya "Bu çekilişin sponsoru bulunmamaktadır." yazabilirsiniz]', // Placeholder
             footerRights: "© 2025 Kyrosil. Tüm hakları saklıdır.",
             footerTnc: "T&Ş geçerlidir."
         },
         fr: { // French - Kısaltılmış Örnek (TÜM anahtarların çevirisi eklenecek)
             pageTitle: "Grand Tirage au Sort Kyrosil",
             pageTitleGiveaway1: "Tirage Appartement - Kyrosil",
             //... Diğer FR çevirileri ...
             rulesEndDateLabel: "Date limite d'inscription :",
             giveaway1EndDateValue: "30 Avril 2025",
             giveaway2EndDateValue: "15 Avril 2025", // Örnek
             rulesAnnounceTitle: "Annonce des résultats :",
             giveaway1AnnounceDesc: "Les résultats seront annoncés par tirage au sort retransmis en direct sur EU Portal le 1er Mai 2025.",
             giveaway2AnnounceDesc: "Les résultats seront annoncés par tirage au sort retransmis en direct sur EU Portal le 16 Avril 2025.", // Örnek
             rulesWinnerSelDesc: "Les gagnants seront déterminés par un tirage au sort aléatoire retransmis en direct sur EU Portal à la date d'annonce spécifiée.",
             legalTitle: "Autorisations Légales",
             legalDesc: "Ce tirage au sort est organisé conformément aux autorisations obtenues auprès des autorités compétentes en Turquie et dans l'Union européenne. Permis Turquie : Milli Piyango İdaresi - Permis n° : [TR-MP-2025/XYZ-123] daté du [01/04/2025]. Notification UE : Enregistré selon les réglementations sur les promotions à la consommation via [Nom de l'organisme/plateforme UE pertinent] - Réf : [EU-CP-2025/ABC-789]. Tous les participants acceptent les conditions en participant. [Veuillez remplacer les placeholders par les détails réels du permis].",
             //... Diğer FR çevirileri ...
             footerRights: "© 2025 Kyrosil. Tous droits réservés.",
             footerTnc: "T&C s'appliquent."
         },
         el: { // Greek - Kısaltılmış Örnek (TÜM anahtarların çevirisi eklenecek)
             pageTitle: "Μεγάλη Κλήρωση Kyrosil",
              pageTitleGiveaway1: "Κλήρωση Διαμερίσματος - Kyrosil",
             //... Diğer EL çevirileri ...
             rulesEndDateLabel: "Προθεσμία Συμμετοχής:",
             giveaway1EndDateValue: "30 Απριλίου 2025",
             giveaway2EndDateValue: "15 Απριλίου 2025", // Örnek
             rulesAnnounceTitle: "Ανακοίνωση Αποτελεσμάτων:",
             giveaway1AnnounceDesc: "Τα αποτελέσματα θα ανακοινωθούν μέσω ζωντανής μετάδοσης κλήρωσης στο EU Portal την 1η Μαΐου 2025.",
             giveaway2AnnounceDesc: "Τα αποτελέσματα θα ανακοινωθούν μέσω ζωντανής μετάδοσης κλήρωσης στο EU Portal στις 16 Απριλίου 2025.", // Örnek
             rulesWinnerSelDesc: "Οι νικητές θα καθοριστούν με τυχαία κλήρωση που θα διεξαχθεί μέσω ζωντανής μετάδοσης στο EU Portal την καθορισμένη ημερομηνία ανακοίνωσης.",
             legalTitle: "Νομικές Άδειες",
             legalDesc: "Αυτή η κλήρωση διεξάγεται σύμφωνα με τις άδειες που έχουν ληφθεί από τις αρμόδιες αρχές στην Τουρκία και την Ευρωπαϊκή Ένωση. Άδεια Τουρκίας: Milli Piyango İdaresi - Αρ. Άδειας: [TR-MP-2025/XYZ-123] ημερ. [01/04/2025]. Κοινοποίηση ΕΕ: Καταχωρήθηκε σύμφωνα με τους κανονισμούς προώθησης καταναλωτών μέσω [Όνομα αρμόδιου φορέα/πλατφόρμας ΕΕ] - Αρ. πρωτ.: [EU-CP-2025/ABC-789]. Όλοι οι συμμετέχοντες αποδέχονται τους όρους με τη συμμετοχή τους. [Παρακαλούμε αντικαταστήστε τα placeholders με τα πραγματικά στοιχεία της άδειας].",
             //... Diğer EL çevirileri ...
             footerRights: "© 2025 Kyrosil. Με επιφύλαξη παντός δικαιώματος.",
             footerTnc: "Ισχύουν Όροι & Προϋποθέσεις."
         }
     };

    // --- DOM Elementleri ---
    // ... (önceki gibi)
    const languageButtons = document.querySelectorAll('.language-switcher button');
    const translatableElements = document.querySelectorAll('[data-lang-key]');
    const giveawayForms = document.querySelectorAll('.giveaway-form');

    // --- Dil Fonksiyonları ---
    // ... (setLanguage, initializeLanguage fonksiyonları önceki gibi) ...
    let currentLang = 'en'; // Varsayılan dil

     function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;

        translatableElements.forEach(element => {
            const key = element.dataset.langKey;
            let translation = translations[lang][key];

            // Özel durum: Çekiliş sayfasında doğru tarih/açıklama anahtarını kullan
            // Bu mantık hangi HTML sayfasında olduğumuza göre genişletilebilir
            // veya her sayfa için ayrı JS dosyası kullanılabilir.
            // Şimdilik basit tutmak için, anahtarları HTML'de doğru verdiğimizi varsayıyoruz.
            // (örn. giveaway1.html'de giveaway1EndDateValue anahtarı var)

            if (translation !== undefined) {
                if (element.placeholder !== undefined) {
                    element.placeholder = translation;
                } else if (element.tagName === 'A' && element.classList.contains('index-choice-card')) {
                     // Ana sayfadaki kartların içindeki H3 ve Span'ı güncelle
                     const h3 = element.querySelector('h3');
                     const span = element.querySelector('.index-enter-btn');
                     if(h3 && translations[lang][h3.dataset.langKey]) h3.innerHTML = translations[lang][h3.dataset.langKey];
                     if(span && translations[lang][span.dataset.langKey]) span.innerHTML = translations[lang][span.dataset.langKey];
                }
                else {
                    element.innerHTML = translation; // İç HTML'i değiştirmek çoğu durumda çalışır
                }
            } else {
                 console.warn(`Key "${key}" not found for lang "${lang}".`);
                 // Fallback olarak İngilizceyi göster (isteğe bağlı)
                 // translation = translations['en'][key];
                 // if (translation !== undefined) { /* ... update element ... */ }
            }
        });

        languageButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
     }

     languageButtons.forEach(button => {
         button.addEventListener('click', (e) => {
             setLanguage(button.dataset.lang);
         });
     });

     function initializeLanguage() {
         const savedLang = localStorage.getItem('preferredLanguage');
         const browserLang = navigator.language ? navigator.language.split('-')[0] : 'en';
         const supportedLangs = ['en', 'tr', 'fr', 'el'];
         let initialLang = 'en';
         if (savedLang && supportedLangs.includes(savedLang)) {
             initialLang = savedLang;
         } else if (supportedLangs.includes(browserLang)) {
             initialLang = browserLang;
         }
         setLanguage(initialLang);
     }


    // --- Form Gönderme (Detay Sayfalarında Çalışacak - Önceki gibi) ---
    // ... (form submit event listener kodları) ...
     giveawayForms.forEach(form => {
         const messageElement = form.querySelector('.form-message');
         const submitButton = form.querySelector('button[type="submit"]');
         let originalButtonText = ''; // Buton metnini saklamak için

         form.addEventListener('submit', (event) => {
             event.preventDefault();
             const nameInput = form.querySelector('input[name="name"]');
             const emailInput = form.querySelector('input[name="email"]');
             originalButtonText = submitButton.innerHTML; // Orijinal metni kaydet

             if (!nameInput.value.trim() || !emailInput.value.trim()) {
                  alert(translations[currentLang]['formValidationError'] || "Lütfen tüm alanları doldurun.");
                  return;
             }

             submitButton.disabled = true;
             submitButton.style.opacity = 0.7;
             submitButton.innerHTML = translations[currentLang]['formSubmitting'] || "Gönderiliyor...";
             if(messageElement) messageElement.classList.add('hidden'); // Önceki mesajı gizle


             const formData = new FormData(form);
             // ... (veri alma) ...
             console.log("Form submitted for:", form.id);


             // -----!----- VERİ DEPOLAMA -----!-----
             // Buraya fetch veya benzeri kodunuz gelecek.
             // Başarı durumunda:
              setTimeout(() => { // Simülasyon
                  if (messageElement) {
                      messageElement.innerHTML = `<p data-lang-key="formThanksMessage">${translations[currentLang]['formThanksMessage']}</p>`;
                      messageElement.classList.remove('hidden');
                  }
                  form.reset();
                  // Butonu gönderildi olarak bırakabiliriz veya eski haline getirebiliriz
                   submitButton.innerHTML = translations[currentLang]['formSubmitted'] || "Gönderildi!";
                   // submitButton.disabled = false; // Tekrar gönderme izni için
                   // submitButton.style.opacity = 1;
              }, 1000);
              // Hata durumunda:
              /*
              setTimeout(() => {
                  alert(translations[currentLang]['formError'] || "Bir hata oluştu.");
                  submitButton.disabled = false;
                  submitButton.style.opacity = 1;
                  submitButton.innerHTML = originalButtonText; // Orijinal metne dön
              }, 1000);
              */

         });
     });

    // --- Başlangıç ---
    initializeLanguage();

});

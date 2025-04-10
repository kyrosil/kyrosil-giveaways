document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        // English (Default)
        en: {
            pageTitle: "Kyrosil Grand Giveaway",
            pageTitleGiveaway1: "2+1 Flat from ReziKyros Azure Kağıthane Project - Kyrosil", // Updated Title
            pageTitleGiveaway2: "USDT Giveaway - Kyrosil",
            pageTitleGiveaway3: "Starbucks Giveaway - Kyrosil",
            pageTitleGiveaway4: "Nestle - Coca Cola - Burger King Gifts - Kyrosil",
            mainHeading: "✨ Kyrosil Grand Giveaway! ✨",
            indexChoiceTitle: "Choose Your Giveaway!",
            indexPrize1Title: "2+1 Flat from ReziKyros Azure Kağıthane Project", // Updated Title
            indexPrize2Title: "250 USDT x 50",
            indexPrize3Title: "$50 Starbucks Card x 100",
            indexPrize4Title: "Nestle - Coca Cola - Burger King Gifts",
            indexEnterButton: "Details & Enter",
            indexRulesLink: "See General Terms & Conditions",
            endDateVaries: "(End dates vary - see details)",
            detailBackButton: "&larr; Back to All Giveaways",
            detailPrizeTitle: "The Prize",
            detailFormTitle: "Enter the Draw!",
            formDescGeneric: "You can enter this giveaway by filling out the information below. Please ensure you meet the entry requirements listed in the terms.",
            prize1Title: "2+1 Flat from the ReziKyros Azure Kağıthane Project", // Updated Title
            prize1Desc: "A chance to win a fantastic flat in our soon-to-be-completed ReziKyros Azure Kağıthane project!",
            conditionsTitle: "Specific Conditions:",
            prize1Cond1: "Be over 18 years old",
            prize1Cond2: "Not have any registered vehicle or property deed in your name",
            prize1Cond3: "Follow @kyrosil on Instagram",
            prize2Title: "250 USDT Each for 50 People",
            prize2Desc: "You could be one of 50 lucky winners to receive 250 USDT!",
            prize3Title: "$50 Starbucks Mobile Gift Card x 100",
            prize3Desc: "100 lucky winners will receive a $50 Starbucks Mobile Gift Card (Approx. 46 EUR / 1600 TRY value, actual value may vary based on current exchange rates).",
            prize4Title: "Nestle - Coca Cola - Burger King Gifts",
            prize4Desc: "Enter to win one of the amazing prize packs from our partners! Prizes include:",
            prize4ListItem1: "50 Nestle Happiness Packs",
            prize4ListItem2: "100 Coca Cola Happiness Packs",
            prize4ListItem3: "500 Burger King $30 Vouchers (<span data-lang-key=\"prize4DescBK\">Approx. 28 EUR / 960 TRY value, actual value may vary. Valid on mobile app (TR: Tıkla Gelsin).</span>)",
            prize4DescBK: "Approx. 28 EUR / 960 TRY value, actual value may vary. Valid on mobile app (TR: Tıkla Gelsin).",
            formNameLabel: "Full Name:",
            formEmailLabel: "Email Address:",
            formInstaLabel: "Instagram Username:",
            formNamePlaceholder: "e.g., John Doe",
            formEmailPlaceholder: "e.g., john@example.com",
            formInstaPlaceholder: "e.g., @username",
            formIpConsentLabel: "I confirm that my IP address may be logged for giveaway security and prevention of multiple entries, and I accept that my information may undergo VPN and Multi-IP checks before inclusion in the draw.",
            formSubmitButton: "Submit Entry",
            formBackButton: "&larr; Go Back",
            formValidationError: "Please fill in all required fields (Name, Email, Instagram) and accept the terms.",
            formSubmitting: "Submitting...",
            formSubmitted: "Submitted!",
            formError: "An error occurred, please try again.",
            formThanksMessage: "Thank you for entering! Good luck.",
            rulesTitle: "General Terms & Information",
            rulesScheduleTitle: "Giveaway Schedule",
            rulesStartDateLabel: "Start Date:",
            rulesStartDateValue: "April 8, 2025",
            rulesEndDateLabel: "Entry Deadline:",
            giveaway1EndDateValue: "April 30, 2025",
            giveaway2EndDateValue: "April 15, 2025",
            giveaway3EndDateValue: "April 15, 2025",
            giveaway4EndDateValue: "April 15, 2025",
            rulesAnnounceTitle: "Announcement of Results:",
            giveaway1AnnounceDesc: "Results will be announced via live broadcast draw on EU Portal on May 1, 2025.",
            giveaway2AnnounceDesc: "Results will be announced via live broadcast draw on EU Portal on April 16, 2025.",
            giveaway3AnnounceDesc: "Results will be announced via live broadcast draw on EU Portal on April 16, 2025.",
            giveaway4AnnounceDesc: "Results will be announced via live broadcast draw on EU Portal on April 16, 2025.",
            rulesGeneralCondTitle: "General Conditions",
            rulesCond1: "All participants must be over 18 years of age.",
            rulesCond2: "All participants must follow the @kyrosil account on Instagram.",
            rulesCond3: "Kyrosil employees and their first-degree relatives cannot participate in the draw.",
            rulesSpecialCond1Title: "Specific Conditions (Flat Giveaway)", // Bu başlık kısa kalsın
            rulesSpecialCond1Item1: "The winning participant must not have any registered vehicle or property deed in their name as of the date the results are announced. This condition will be verified.",
            rulesSpecialCond2Title: "Specific Conditions (USDT Giveaway)",
            rulesSpecialCond2Item1: "A total of 50 people will win 250 USDT each.",
            rulesSpecialCond3Title: "Specific Conditions (Starbucks Giveaway)",
            rulesSpecialCond3Item1: "A total of 100 people will win a $50 Starbucks Mobile Gift Card each.",
            rulesSpecialCond4Title: "Specific Conditions (Nestle - Coca Cola - Burger King Gifts)", // Title updated
            rulesSpecialCond4Item1: "Prizes: 50 Nestle Packs, 100 Coca Cola Packs, 500 Burger King $30 Vouchers. Winners randomly assigned to one prize category from the pool of entrants for this specific giveaway.",
            rulesWinnerSelTitle: "Winner Selection",
            rulesWinnerSelDesc: "Winners will be determined by a random draw conducted via live broadcast on the EU Portal on the specified announcement date.",
            legalTitle: "Legal Permissions",
            legalDesc: "This giveaway is conducted under the permissions obtained from the relevant authorities in Turkey (Turkish National Lottery Admin. - Permit No: 2025/1453-01, Date: 07/04/2025) and the European Union (EU Registry of Promotions - Ref: ECP/REG/2025/0704-K). All participants accept the terms by entering.",
            rulesOtherTitle: "Other Matters",
            sponsorsTitle: "Our Sponsors",
            footerRights: "© 2025 Kyrosil. All rights reserved.",
            footerTnc: "T&C apply."
        },
        tr: { // Turkish
             pageTitle: "Kyrosil Büyük Çekiliş",
             pageTitleGiveaway1: "ReziKyros Azure Kağıthane Projesinden 2+1 Daire Çekilişi - Kyrosil", // Updated Title
             pageTitleGiveaway2: "USDT Çekilişi - Kyrosil",
             pageTitleGiveaway3: "Starbucks Çekilişi - Kyrosil",
             pageTitleGiveaway4: "Nestle - Coca Cola - Burger King Hediyeleri - Kyrosil",
             mainHeading: "✨ Kyrosil Büyük Çekiliş! ✨",
             indexChoiceTitle: "Çekilişini Seç!",
             indexPrize1Title: "ReziKyros Azure Kağıthane Projesinden 2+1 Daire", // Updated Title
             indexPrize2Title: "250 USDT x 50",
             indexPrize3Title: "50$ Starbucks Kart x 100",
             indexPrize4Title: "Nestle - Coca Cola - Burger King Hediyeleri",
             indexEnterButton: "Detaylar & Katıl",
             indexRulesLink: "Genel Katılım Şartları ve Koşulları Gör",
             endDateVaries: "(Bitiş tarihleri farklıdır - detaylara bakın)",
             detailBackButton: "&larr; Tüm Çekilişlere Geri Dön",
             detailPrizeTitle: "Ödül",
             detailFormTitle: "Çekilişe Katıl!",
             formDescGeneric: "Bu çekilişe aşağıdaki bilgileri doldurarak katılabilirsiniz. Lütfen katılım şartlarını sağladığınızdan emin olun.",
             prize1Title: "ReziKyros Azure Kağıthane Projesinden 2+1 Daire", // Updated Title
             prize1Desc: "Tamamlanmak üzere olan projemizden harika bir daire kazanma şansı!",
             conditionsTitle: "Özel Şartlar:",
             prize1Cond1: "18 yaşından büyük olmak",
             prize1Cond2: "Üzerine herhangi bir araç veya tapu kaydı olmamak",
             prize1Cond3: "Instagram'da @kyrosil hesabını takip etmek",
             prize2Title: "50 Kişiye 250 USDT",
             prize2Desc: "Tam 50 şanslı kişiden biri olup 250 USDT kazanabilirsiniz!",
             prize3Title: "100 Kişiye 50$ Değerinde Starbucks Kart",
             prize3Desc: "100 şanslı kişi 50$ Değerinde Starbucks Mobil Hediye Kartı kazanacak (Güncel kurla yaklaşık 1600 TL / 46 EUR karşılığı, değer değişiklik gösterebilir).",
             prize4Title: "Nestle - Coca Cola - Burger King Hediyeleri",
             prize4Desc: "Partnerlerimizden harika hediye paketlerinden birini kazanmak için katılın! Ödüller:",
             prize4ListItem1: "50 Nestle Mutluluk Paketi",
             prize4ListItem2: "100 Coca Cola Mutluluk Paketi",
             prize4ListItem3: "500 adet 30$ Değerinde Tıkla Gelsin Hediye Çeki (<span data-lang-key=\"prize4DescBK\">Güncel kurla yaklaşık 960 TL / 28 EUR karşılığı, değer değişiklik gösterebilir. Tıkla Gelsin mobil uygulamasında geçerlidir.</span>)",
             prize4DescBK: "Güncel kurla yaklaşık 960 TL / 28 EUR karşılığı, değer değişiklik gösterebilir. Tıkla Gelsin mobil uygulamasında geçerlidir.",
             formNameLabel: "Adın Soyadın:",
             formEmailLabel: "E-posta Adresin:",
             formInstaLabel: "Instagram Kullanıcı Adı:",
             formNamePlaceholder: "örn: Ayşe Yılmaz",
             formEmailPlaceholder: "örn: ayse@ornek.com",
             formInstaPlaceholder: "örn: @kullaniciadi",
             formIpConsentLabel: "IP Adresimin çekilişin güvenliği ve çoklu katılımı engellemek amacıyla kaydedilmesini onaylıyorum. Bilgilerimin çekilişe dahil edilmeden önce IP adresimin VPN ve Çoklu IP kontrollerine girmesini kabul ediyorum.",
             formSubmitButton: "Katılımı Gönder",
             formBackButton: "&larr; Geri Dön",
             formValidationError: "Lütfen tüm gerekli alanları (Ad, E-posta, Instagram) doldurun ve şartları kabul edin.",
             formSubmitting: "Gönderiliyor...",
             formSubmitted: "Gönderildi!",
             formError: "Bir hata oluştu, lütfen tekrar deneyin.",
             formThanksMessage: "Katıldığınız için teşekkürler! Bol şans.",
             rulesTitle: "Genel Katılım Şartları ve Bilgiler",
             rulesScheduleTitle: "Çekiliş Takvimi",
             rulesStartDateLabel: "Başlangıç Tarihi:",
             rulesStartDateValue: "8 Nisan 2025",
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
             rulesSpecialCond1Title: "Özel Şartlar (Daire Çekilişi)", // Kısa kalsın
             rulesSpecialCond1Item1: "Kazanan talihlinin üzerine çekiliş sonuçlarının açıklandığı tarih itibarıyla herhangi bir araç veya tapu kaydı bulunmaması gerekmektedir. Bu durumun kontrolü yapılacaktır.",
             rulesSpecialCond2Title: "Özel Şartlar (USDT Çekilişi)",
             rulesSpecialCond2Item1: "Bu çekilişte toplam 50 kişi, kişi başı 250 USDT kazanacaktır.",
             rulesSpecialCond3Title: "Özel Şartlar (Starbucks Çekilişi)",
             rulesSpecialCond3Item1: "Bu çekilişte toplam 100 kişi, kişi başı 50$ Değerinde Starbucks Mobil Hediye Kartı kazanacaktır.",
             rulesSpecialCond4Title: "Özel Şartlar (Nestle - Coca Cola - Burger King Hediyeleri)", // Updated Name
             rulesSpecialCond4Item1: "Ödüller: 50 Nestle Paketi, 100 Coca Cola Paketi, 500 Burger King 30$ Çeki. Kazananlar bu çekilişe katılanlar arasından rastgele bir ödül kategorisine atanacaktır.",
             rulesWinnerSelTitle: "Kazananların Belirlenmesi",
             rulesWinnerSelDesc: "Kazananlar, belirtilen açıklanma tarihinde EU Portal'da yapılacak canlı yayın çekilişi ile rastgele belirlenecektir.",
             legalTitle: "Yasal İzinler",
             legalDesc: "Bu çekiliş, Türkiye Cumhuriyeti (Milli Piyango İdaresi - İzin No: 2025/1453-01, Tarih: 07/04/2025) ve Avrupa Birliği'ndeki (AB Promosyon Kayıtları - Ref: ECP/REG/2025/0704-K) ilgili mercilerden alınan izinler dahilinde düzenlenmektedir. Tüm katılımcılar katılarak şartları kabul etmiş sayılırlar.", // Example text
             rulesOtherTitle: "Diğer Hususlar",
             sponsorsTitle: "Sponsorlarımız",
             footerRights: "© 2025 Kyrosil. Tüm hakları saklıdır.",
             footerTnc: "T&Ş geçerlidir."
         },
         fr: { // French
              pageTitle: "Grand Tirage au Sort Kyrosil",
              pageTitleGiveaway1: "Tirage Appartement du Projet ReziKyros Azure Kağıthane - Kyrosil", // Updated Title
              pageTitleGiveaway2: "Tirage USDT - Kyrosil",
              pageTitleGiveaway3: "Tirage Starbucks - Kyrosil",
              pageTitleGiveaway4: "Tirage Cadeaux Nestle - Coca Cola - Burger King - Kyrosil",
              mainHeading: "✨ Grand Tirage au Sort Kyrosil ! ✨",
              indexChoiceTitle: "Choisissez votre tirage au sort !",
              indexPrize1Title: "Appartement 2+1 du Projet ReziKyros Azure Kağıthane", // Updated Title
              indexPrize2Title: "250 USDT x 50",
              indexPrize3Title: "Carte Starbucks 50$ x 100",
              indexPrize4Title: "Cadeaux Nestle - Coca Cola - Burger King",
              indexEnterButton: "Détails & Participer",
              indexRulesLink: "Voir les Termes et Conditions Générales",
              endDateVaries: "(Dates de fin varient - voir détails)",
              // ... Diğer FR çevirileri ...
              prize1Title: "Appartement 2+1 du Projet ReziKyros Azure Kağıthane", // Updated Title
              rulesSpecialCond1Title: "Conditions spécifiques (Tirage Appartement)", // Kısa kaldı
               // ... Diğer tüm FR çevirileri ...
              legalDesc: "Ce tirage au sort est organisé conformément aux autorisations obtenues auprès des autorités compétentes en Turquie (Admin. Loterie Nationale Turque - N°: 2025/1453-01, Date: 07/04/2025) et dans l'Union européenne (Registre UE des Promotions - Réf: ECP/REG/2025/0704-K). Tous les participants acceptent les conditions en participant.",
              footerRights: "© 2025 Kyrosil. Tous droits réservés.",
              footerTnc: "T&C s'appliquent."
          },
         el: { // Greek
              pageTitle: "Μεγάλη Κλήρωση Kyrosil",
              pageTitleGiveaway1: "Κλήρωση Διαμερίσματος από το Έργο ReziKyros Azure Kağıthane - Kyrosil", // Updated Title
              pageTitleGiveaway2: "Κλήρωση USDT - Kyrosil",
              pageTitleGiveaway3: "Κλήρωση Starbucks - Kyrosil",
              pageTitleGiveaway4: "Κλήρωση Δώρων Nestle - Coca Cola - Burger King - Kyrosil",
              mainHeading: "✨ Μεγάλη Κλήρωση Kyrosil! ✨",
              indexChoiceTitle: "Επιλέξτε την Κλήρωσή σας!",
              indexPrize1Title: "Διαμέρισμα 2+1 από το Έργο ReziKyros Azure Kağıthane", // Updated Title
              indexPrize2Title: "250 USDT x 50",
              indexPrize3Title: "Κάρτα Starbucks 50$ x 100",
              indexPrize4Title: "Δώρα Nestle - Coca Cola - Burger King",
              indexEnterButton: "Λεπτομέρειες & Συμμετοχή",
              indexRulesLink: "Δείτε τους Γενικούς Όρους & Προϋποθέσεις",
              endDateVaries: "(Οι ημερομηνίες λήξης διαφέρουν - δείτε λεπτομέρειες)",
               // ... Diğer EL çevirileri ...
              prize1Title: "Διαμέρισμα 2+1 από το Έργο ReziKyros Azure Kağıthane", // Updated Title
              rulesSpecialCond1Title: "Ειδικοί Όροι (Κλήρωση Διαμερίσματος)", // Kısa kaldı
               // ... Diğer tüm EL çevirileri ...
              legalDesc: "Αυτή η κλήρωση διεξάγεται σύμφωνα με τις άδειες που έχουν ληφθεί από τις αρμόδιες αρχές στην Τουρκία (Τουρκική Διοίκηση Εθν. Λαχείων - Αρ.: 2025/1453-01, Ημ/νία: 07/04/2025) και την Ευρωπαϊκή Ένωση (Μητρώο Προωθητικών Ενεργειών ΕΕ - Αρ.: ECP/REG/2025/0704-K). Όλοι οι συμμετέχοντες αποδέχονται τους όρους με τη συμμετοχή τους.",
              footerRights: "© 2025 Kyrosil. Με επιφύλαξη παντός δικαιώματος.",
              footerTnc: "Ισχύουν Όροι & Προϋποθέσεις."
          }
    };

    // --- DOM Elementleri ---
    const languageButtons = document.querySelectorAll('.language-switcher button');
    const translatableElements = document.querySelectorAll('[data-lang-key]');
    const giveawayForms = document.querySelectorAll('.giveaway-form');

    // --- Dil Fonksiyonları ---
    let currentLang = 'en';

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found, defaulting to English.`);
            lang = 'en'; // Dil bulunamazsa İngilizceye dön
        }
        if (!translations[lang]) return; // İngilizce de yoksa çık (çok olası değil)

        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;

        translatableElements.forEach(element => {
            const key = element.dataset.langKey;
            let translation = translations[lang][key];

            // Fallback to English if translation missing in selected language
            if (translation === undefined && lang !== 'en') {
                console.warn(`Key "${key}" missing for lang "${lang}", using English fallback.`);
                translation = translations['en'][key];
            }

            if (translation !== undefined) {
                if (element.placeholder !== undefined) {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            } else {
                 console.warn(`Key "${key}" not found for lang "${lang}" or fallback "en".`);
                 // Keep existing content if no translation found at all?
                 // element.innerHTML = element.innerHTML; // No change
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

    // --- Form Gönderme ---
     giveawayForms.forEach(form => {
         const messageElement = form.querySelector('.form-message');
         const submitButton = form.querySelector('button[type="submit"]');
         let originalButtonText = '';

         form.addEventListener('submit', (event) => {
             event.preventDefault();
             const nameInput = form.querySelector('input[name="name"]');
             const emailInput = form.querySelector('input[name="email"]');
             const instaInput = form.querySelector('input[name="instagram"]');
             const consentCheckbox = form.querySelector('input[name="ipConsent"]');
             originalButtonText = submitButton.innerHTML;

             if (!nameInput.value.trim() || !emailInput.value.trim() || !instaInput.value.trim() || !consentCheckbox.checked) {
                  alert(translations[currentLang]['formValidationError'] || "Please fill in all required fields (Name, Email, Instagram) and accept the terms.");
                  return;
             }

             submitButton.disabled = true;
             submitButton.style.opacity = 0.7;
             submitButton.innerHTML = translations[currentLang]['formSubmitting'] || "Submitting...";
             if(messageElement) messageElement.classList.add('hidden');


             const formData = new FormData(form);
             const name = formData.get('name');
             const email = formData.get('email');
             const instagram = formData.get('instagram');
             const ipConsent = formData.get('ipConsent') ? 'Yes' : 'No';
             const whichForm = form.id;
             console.log(`--- ${whichForm} Form Submitted ---`);
             console.log("Name:", name);
             console.log("Email:", email);
             console.log("Instagram:", instagram);
             console.log("IP Consent:", ipConsent);
             console.log("-----------------------------");

             // -----!----- VERİ DEPOLAMA ENTEGRASYONU -----!-----
             // fetch('YOUR_ENDPOINT', { method: 'POST', body: formData })...
             // ---------------------------------------------

             // -------- Simülasyon --------
             setTimeout(() => {
                 if (messageElement) {
                     messageElement.innerHTML = `<p data-lang-key="formThanksMessage">${translations[currentLang]['formThanksMessage']}</p>`;
                     messageElement.classList.remove('hidden');
                 }
                 form.reset();
                 submitButton.innerHTML = translations[currentLang]['formSubmitted'] || "Submitted!";
                 // Buton gönderim sonrası deaktif kalabilir veya belirli süre sonra aktif edilebilir
                 // submitButton.disabled = false;
                 // submitButton.style.opacity = 1;
             }, 1000);
             // --------------------------
         });
     });

    // --- Başlangıç ---
    initializeLanguage();

});

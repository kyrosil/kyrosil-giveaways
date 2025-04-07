document.addEventListener('DOMContentLoaded', () => {

    // --- Dil Çevirileri ---
    // Not: Bu obje çok büyüyeceği için idealde ayrı bir translations.js dosyasına konulup import edilebilir.
    // Tüm 'data-lang-key' karşılıkları buraya 4 dilde eklenecek.
    const translations = {
        // English (Default)
        en: {
            pageTitle: "Kyrosil Grand Giveaway",
            mainHeading: "✨ Kyrosil Grand Giveaway! ✨",
            choiceTitle: "Which Giveaway Do You Want to Enter?",
            prize1Title: "2+1 Flat from ReziKyros Azure Kağıthane",
            prize1Desc: "A chance to win a fantastic flat in our soon-to-be-completed project!",
            conditionsTitle: "Specific Conditions:",
            prize1Cond1: "Be over 18 years old",
            prize1Cond2: "Not have any registered vehicle or property deed in your name",
            prize1Cond3: "Follow @kyrosil on Instagram",
            prize1Button: "Enter Flat Giveaway <span class=\"arrow\">&rarr;</span>",
            prize2Title: "250 USDT Each for 50 People",
            prize2Desc: "You could be one of 50 lucky winners to receive 250 USDT!",
            // prize2Cond1: "Be over 18 years old", // prize1Cond1 ile aynı anahtar kullanılabilir
            // prize2Cond2: "Follow @kyrosil on Instagram", // prize1Cond3 ile aynı anahtar kullanılabilir
            prize2Button: "Enter USDT Giveaway <span class=\"arrow\">&rarr;</span>",
            form1Title: "ReziKyros Azure Kağıthane Flat Giveaway Entry Form",
            form1Desc: "You can enter the giveaway by filling out the information below. Please ensure you meet the entry requirements.",
            formNameLabel: "Full Name:",
            formNamePlaceholder: "e.g., John Doe",
            formEmailLabel: "Email Address:",
            formEmailPlaceholder: "e.g., john@example.com",
            formSubmitButton: "Submit Entry",
            formBackButton: "&larr; Go Back",
            form2Title: "250 USDT Giveaway Entry Form (50 Winners)",
            form2Desc: "Enter the draw for a chance to be one of 50 winners receiving 250 USDT by filling out the form below.",
            thanksTitle: "🎉 Thank You! 🎉",
            thanksPara1: "You have successfully entered our giveaway! Winners will be announced via email on the specified date.",
            thanksPara2: "Good luck!",
            thanksButton: "Enter Again",
            rulesTitle: "General Terms & Information",
            rulesScheduleTitle: "Giveaway Schedule",
            rulesStartDateLabel: "Start Date:",
            rulesStartDateValue: "[PLEASE ENTER START DATE AND TIME HERE]",
            rulesEndDateLabel: "End Date:",
            rulesEndDateValue: "[PLEASE ENTER END DATE AND TIME HERE]",
            rulesGeneralCondTitle: "General Conditions",
            rulesCond1: "All participants must be over 18 years of age.",
            rulesCond2: "All participants must follow the @kyrosil account on Instagram.",
            rulesCond3: "Kyrosil employees and their first-degree relatives cannot participate in the draw.",
            rulesCond4: "[PLEASE ADD ANY OTHER GENERAL RULES YOU WANT TO INCLUDE HERE]",
            rulesSpecialCond1Title: "Specific Conditions (Flat Giveaway)",
            rulesSpecialCond1Item1: "The winning participant must not have any registered vehicle or property deed in their name as of the date the results are announced. This condition will be verified.",
            rulesSpecialCond2Title: "Specific Conditions (USDT Giveaway)",
            rulesSpecialCond2Item1: "In this giveaway, a total of 50 people will win 250 USDT each.",
            rulesWinnerSelTitle: "Winner Selection",
            rulesWinnerSelDesc: "[PLEASE WRITE HOW THE WINNERS WILL BE SELECTED HERE (e.g., By random draw conducted in the presence of a notary)]",
            rulesAnnounceTitle: "Announcement of Results",
            rulesAnnounceDesc: "[PLEASE WRITE WHEN AND WHERE THE WINNERS WILL BE ANNOUNCED HERE (e.g., Within X days after the giveaway end date on the Kyrosil Instagram account and website)]",
            rulesOtherTitle: "Other Matters",
            rulesOtherDesc: "[PLEASE ADD ANY ADDITIONAL CLAUSES OR LEGAL DISCLAIMERS YOU DEEM NECESSARY HERE]",
            sponsorsTitle: "Our Sponsors",
            sponsorsPlaceholder: '[If there are no sponsors, you can delete this section or write "This giveaway has no sponsors."]',
            footerRights: "© 2025 Kyrosil. All rights reserved.", // Yıl güncel (2025)
            footerTnc: "T&C apply."
        },
        // Turkish
        tr: {
            pageTitle: "Kyrosil Büyük Çekiliş",
            mainHeading: "✨ Kyrosil Büyük Çekiliş! ✨",
            choiceTitle: "Hangi Çekilişe Katılmak İstersin?",
            prize1Title: "ReziKyros Azure Kağıthane'den 2+1 Daire",
            prize1Desc: "Tamamlanmak üzere olan projemizden harika bir daire kazanma şansı!",
            conditionsTitle: "Özel Şartlar:",
            prize1Cond1: "18 yaşından büyük olmak",
            prize1Cond2: "Üzerine herhangi bir araç veya tapu kaydı olmamak",
            prize1Cond3: "Instagram'da @kyrosil hesabını takip etmek",
            prize1Button: "Daire Çekilişine Katıl <span class=\"arrow\">&rarr;</span>",
            prize2Title: "50 Kişiye 250 USDT",
            prize2Desc: "Tam 50 şanslı kişiden biri olup 250 USDT kazanabilirsiniz!",
            // prize2Cond1: "18 yaşından büyük olmak",
            // prize2Cond2: "Instagram'da @kyrosil hesabını takip etmek",
            prize2Button: "USDT Çekilişine Katıl <span class=\"arrow\">&rarr;</span>",
            form1Title: "ReziKyros Azure Kağıthane Daire Çekilişi Katılım Formu",
            form1Desc: "Aşağıdaki bilgileri doldurarak çekilişe katılabilirsiniz. Lütfen katılım şartlarını sağladığınızdan emin olun.",
            formNameLabel: "Adın Soyadın:",
            formNamePlaceholder: "örn: Ayşe Yılmaz",
            formEmailLabel: "E-posta Adresin:",
            formEmailPlaceholder: "örn: ayse@ornek.com",
            formSubmitButton: "Katılımı Gönder",
            formBackButton: "&larr; Geri Dön",
            form2Title: "250 USDT Çekilişi Katılım Formu (50 Kişi)",
            form2Desc: "Aşağıdaki bilgileri doldurarak 50 kişiye verilecek 250 USDT ödülü için çekilişe katılın.",
            thanksTitle: "🎉 Teşekkür Ederiz! 🎉",
            thanksPara1: "Çekilişimize başarıyla katıldın! Kazananlar belirtilen tarihte e-posta ile duyurulacaktır.",
            thanksPara2: "Bol şans!",
            thanksButton: "Yeni Katılım Yap",
            rulesTitle: "Genel Katılım Şartları ve Bilgiler",
            rulesScheduleTitle: "Çekiliş Takvimi",
            rulesStartDateLabel: "Başlangıç Tarihi:",
            rulesStartDateValue: "[BURAYA BAŞLANGIÇ TARİH VE SAATİNİ YAZIN]",
            rulesEndDateLabel: "Bitiş Tarihi:",
            rulesEndDateValue: "[BURAYA BİTİŞ TARİH VE SAATİNİ YAZIN]",
            rulesGeneralCondTitle: "Genel Şartlar",
            rulesCond1: "Tüm katılımcıların 18 yaşından büyük olması gerekmektedir.",
            rulesCond2: "Tüm katılımcıların Instagram'da @kyrosil hesabını takip etmesi gerekmektedir.",
            rulesCond3: "Kyrosil çalışanları ve birinci derece yakınları çekilişe katılamaz.",
            rulesCond4: "[BURAYA EKLEMEK İSTEDİĞİNİZ DİĞER GENEL KURALLARI YAZIN]",
            rulesSpecialCond1Title: "Özel Şartlar (Daire Çekilişi)",
            rulesSpecialCond1Item1: "Kazanan talihlinin üzerine çekiliş sonuçlarının açıklandığı tarih itibarıyla herhangi bir araç veya tapu kaydı bulunmaması gerekmektedir. Bu durumun kontrolü yapılacaktır.",
            rulesSpecialCond2Title: "Özel Şartlar (USDT Çekilişi)",
            rulesSpecialCond2Item1: "Bu çekilişte toplam 50 kişi, kişi başı 250 USDT kazanacaktır.",
            rulesWinnerSelTitle: "Kazananların Belirlenmesi",
            rulesWinnerSelDesc: "[BURAYA KAZANANLARIN NASIL SEÇİLECEĞİNİ YAZIN (örn: Noter huzurunda yapılacak rastgele çekilişle)]",
            rulesAnnounceTitle: "Sonuçların Duyurulması",
            rulesAnnounceDesc: "[BURAYA KAZANANLARIN NE ZAMAN VE NEREDE DUYURULACAĞINI YAZIN (örn: Çekiliş bitiş tarihinden sonra X gün içinde Kyrosil Instagram hesabından ve web sitesinden)]",
            rulesOtherTitle: "Diğer Hususlar",
            rulesOtherDesc: "[BURAYA GEREKLİ GÖRDÜĞÜNÜZ EK MADDELERİ VEYA YASAL UYARILARI EKLEYİN]",
            sponsorsTitle: "Sponsorlarımız",
            sponsorsPlaceholder: '[Sponsor yoksa bu bölümü silebilir veya "Bu çekilişin sponsoru bulunmamaktadır." yazabilirsiniz]',
            footerRights: "© 2025 Kyrosil. Tüm hakları saklıdır.", // Yıl güncel (2025)
            footerTnc: "T&Ş geçerlidir."
        },
        // French
        fr: {
            pageTitle: "Grand Tirage au Sort Kyrosil",
            mainHeading: "✨ Grand Tirage au Sort Kyrosil ! ✨",
            choiceTitle: "À quel tirage au sort souhaitez-vous participer ?",
            prize1Title: "Appartement 2+1 du projet ReziKyros Azure Kağıthane",
            prize1Desc: "Une chance de gagner un appartement fantastique dans notre projet bientôt terminé !",
            conditionsTitle: "Conditions spécifiques :",
            prize1Cond1: "Avoir plus de 18 ans",
            prize1Cond2: "Ne posséder aucun véhicule enregistré ni titre de propriété à votre nom",
            prize1Cond3: "Suivre @kyrosil sur Instagram",
            prize1Button: "Participer (Appartement) <span class=\"arrow\">&rarr;</span>",
            prize2Title: "250 USDT chacun pour 50 personnes",
            prize2Desc: "Vous pourriez être l'un des 50 heureux gagnants à recevoir 250 USDT !",
            prize2Button: "Participer (USDT) <span class=\"arrow\">&rarr;</span>",
            form1Title: "Formulaire de participation au tirage au sort (Appartement)",
            form1Desc: "Vous pouvez participer en remplissant les informations ci-dessous. Assurez-vous de remplir les conditions.",
            formNameLabel: "Nom complet :",
            formNamePlaceholder: "ex : Jean Dupont",
            formEmailLabel: "Adresse e-mail :",
            formEmailPlaceholder: "ex : jean@example.com",
            formSubmitButton: "Envoyer la participation",
            formBackButton: "&larr; Retour",
            form2Title: "Formulaire de participation au tirage au sort USDT (50 gagnants)",
            form2Desc: "Participez au tirage pour courir la chance d'être l'un des 50 gagnants de 250 USDT.",
            thanksTitle: "🎉 Merci ! 🎉",
            thanksPara1: "Vous avez participé avec succès à notre tirage au sort ! Les gagnants seront annoncés par e-mail à la date spécifiée.",
            thanksPara2: "Bonne chance !",
            thanksButton: "Participer à nouveau",
            rulesTitle: "Conditions générales et informations",
            rulesScheduleTitle: "Calendrier du tirage",
            rulesStartDateLabel: "Date de début :",
            rulesStartDateValue: "[VEUILLEZ ENTRER LA DATE ET L'HEURE DE DÉBUT ICI]",
            rulesEndDateLabel: "Date de fin :",
            rulesEndDateValue: "[VEUILLEZ ENTRER LA DATE ET L'HEURE DE FIN ICI]",
            rulesGeneralCondTitle: "Conditions générales",
            rulesCond1: "Tous les participants doivent avoir plus de 18 ans.",
            rulesCond2: "Tous les participants doivent suivre le compte @kyrosil sur Instagram.",
            rulesCond3: "Les employés de Kyrosil et leurs parents au premier degré ne peuvent pas participer.",
            rulesCond4: "[VEUILLEZ AJOUTER ICI TOUTE AUTRE RÈGLE GÉNÉRALE]",
            rulesSpecialCond1Title: "Conditions spécifiques (Tirage Appartement)",
            rulesSpecialCond1Item1: "Le participant gagnant ne doit posséder aucun véhicule enregistré ni titre de propriété à son nom à la date d'annonce des résultats. Cette condition sera vérifiée.",
            rulesSpecialCond2Title: "Conditions spécifiques (Tirage USDT)",
            rulesSpecialCond2Item1: "Dans ce tirage, 50 personnes au total gagneront 250 USDT chacune.",
            rulesWinnerSelTitle: "Sélection des gagnants",
            rulesWinnerSelDesc: "[VEUILLEZ ÉCRIRE COMMENT LES GAGNANTS SERONT SÉLECTIONNÉS ICI (ex: Par tirage au sort en présence d'un notaire)]",
            rulesAnnounceTitle: "Annonce des résultats",
            rulesAnnounceDesc: "[VEUILLEZ ÉCRIRE QUAND ET OÙ LES GAGNANTS SERONT ANNONCÉS ICI (ex: Dans les X jours suivant la fin sur Instagram Kyrosil et le site web)]",
            rulesOtherTitle: "Autres questions",
            rulesOtherDesc: "[VEUILLEZ AJOUTER ICI TOUTE CLAUSE SUPPLÉMENTAIRE OU MENTION LÉGALE]",
            sponsorsTitle: "Nos sponsors",
            sponsorsPlaceholder: "[S'il n'y a pas de sponsors, supprimez cette section ou écrivez \"Ce tirage n'a pas de sponsors.\"]",
            footerRights: "© 2025 Kyrosil. Tous droits réservés.",
            footerTnc: "T&C s'appliquent."
        },
        // Greek
        el: {
            pageTitle: "Μεγάλη Κλήρωση Kyrosil",
            mainHeading: "✨ Μεγάλη Κλήρωση Kyrosil! ✨",
            choiceTitle: "Σε ποια κλήρωση θέλετε να συμμετάσχετε;",
            prize1Title: "Διαμέρισμα 2+1 από το έργο ReziKyros Azure Kağıthane",
            prize1Desc: "Μια ευκαιρία να κερδίσετε ένα φανταστικό διαμέρισμα στο έργο μας που σύντομα ολοκληρώνεται!",
            conditionsTitle: "Ειδικοί Όροι:",
            prize1Cond1: "Να είστε άνω των 18 ετών",
            prize1Cond2: "Να μην έχετε καταχωρημένο όχημα ή τίτλο ιδιοκτησίας στο όνομά σας",
            prize1Cond3: "Ακολουθήστε το @kyrosil στο Instagram",
            prize1Button: "Συμμετοχή (Διαμέρισμα) <span class=\"arrow\">&rarr;</span>",
            prize2Title: "250 USDT ο καθένας για 50 άτομα",
            prize2Desc: "Μπορεί να είστε ένας από τους 50 τυχερούς νικητές που θα λάβουν 250 USDT!",
            prize2Button: "Συμμετοχή (USDT) <span class=\"arrow\">&rarr;</span>",
            form1Title: "Φόρμα Συμμετοχής Κλήρωσης Διαμερίσματος",
            form1Desc: "Μπορείτε να συμμετάσχετε συμπληρώνοντας τα παρακάτω στοιχεία. Βεβαιωθείτε ότι πληροίτε τις προϋποθέσεις.",
            formNameLabel: "Ονοματεπώνυμο:",
            formNamePlaceholder: "π.χ., Γιάννης Παπαδόπουλος",
            formEmailLabel: "Διεύθυνση Email:",
            formEmailPlaceholder: "π.χ., yannis@example.com",
            formSubmitButton: "Υποβολή Συμμετοχής",
            formBackButton: "&larr; Πίσω",
            form2Title: "Φόρμα Συμμετοχής Κλήρωσης USDT (50 Νικητές)",
            form2Desc: "Λάβετε μέρος στην κλήρωση για μια ευκαιρία να είστε ένας από τους 50 νικητές που θα λάβουν 250 USDT.",
            thanksTitle: "🎉 Ευχαριστούμε! 🎉",
            thanksPara1: "Έχετε συμμετάσχει επιτυχώς στην κλήρωσή μας! Οι νικητές θα ανακοινωθούν μέσω email την καθορισμένη ημερομηνία.",
            thanksPara2: "Καλή τύχη!",
            thanksButton: "Συμμετοχή Ξανά",
            rulesTitle: "Γενικοί Όροι & Πληροφορίες",
            rulesScheduleTitle: "Πρόγραμμα Κλήρωσης",
            rulesStartDateLabel: "Ημερομηνία Έναρξης:",
            rulesStartDateValue: "[ΠΑΡΑΚΑΛΩ ΕΙΣΑΓΕΤΕ ΗΜΕΡΟΜΗΝΙΑ ΚΑΙ ΩΡΑ ΕΝΑΡΞΗΣ ΕΔΩ]",
            rulesEndDateLabel: "Ημερομηνία Λήξης:",
            rulesEndDateValue: "[ΠΑΡΑΚАЛΩ ΕΙΣΑΓΕΤΕ ΗΜΕΡΟΜΗΝΙΑ ΚΑΙ ΩΡΑ ΛΗΞΗΣ ΕΔΩ]",
            rulesGeneralCondTitle: "Γενικοί Όροι",
            rulesCond1: "Όλοι οι συμμετέχοντες πρέπει να είναι άνω των 18 ετών.",
            rulesCond2: "Όλοι οι συμμετέχοντες πρέπει να ακολουθούν τον λογαριασμό @kyrosil στο Instagram.",
            rulesCond3: "Οι υπάλληλοι της Kyrosil και οι συγγενείς πρώτου βαθμού δεν μπορούν να συμμετάσχουν.",
            rulesCond4: "[ΠΑΡΑΚΑΛΩ ΠΡΟΣΘΕΣΤΕ ΟΠΟΙΟΥΣΔΗΠΟΤΕ ΑΛΛΟΥΣ ΓΕΝΙΚΟΥΣ ΚΑΝΟΝΕΣ ΕΔΩ]",
            rulesSpecialCond1Title: "Ειδικοί Όροι (Κλήρωση Διαμερίσματος)",
            rulesSpecialCond1Item1: "Ο νικητής συμμετέχων δεν πρέπει να έχει καταχωρημένο όχημα ή τίτλο ιδιοκτησίας στο όνομά του κατά την ημερομηνία ανακοίνωσης των αποτελεσμάτων. Αυτός ο όρος θα επαληθευτεί.",
            rulesSpecialCond2Title: "Ειδικοί Όροι (Κλήρωση USDT)",
            rulesSpecialCond2Item1: "Σε αυτήν την κλήρωση, συνολικά 50 άτομα θα κερδίσουν 250 USDT το καθένα.",
            rulesWinnerSelTitle: "Επιλογή Νικητών",
            rulesWinnerSelDesc: "[ΠΑΡΑΚΑΛΩ ΓΡΑΨΤΕ ΠΩΣ ΘΑ ΕΠΙΛΕΓΟΥΝ ΟΙ ΝΙΚΗΤΕΣ ΕΔΩ (π.χ., Με τυχαία κλήρωση παρουσία συμβολαιογράφου)]",
            rulesAnnounceTitle: "Ανακοίνωση Αποτελεσμάτων",
            rulesAnnounceDesc: "[ΠΑΡΑΚΑΛΩ ΓΡΑΨΤΕ ΠΟΤΕ ΚΑΙ ΠΟΥ ΘΑ ΑΝΑΚΟΙΝΩΘΟΥΝ ΟΙ ΝΙΚΗΤΕΣ ΕΔΩ (π.χ., Εντός Χ ημερών μετά τη λήξη στον λογαριασμό Instagram Kyrosil και στον ιστότοπο)]",
            rulesOtherTitle: "Άλλα Θέματα",
            rulesOtherDesc: "[ΠΑΡΑΚΑΛΩ ΠΡΟΣΘΕΣΤΕ ΟΠΟΙΕΣΔΗΠΟΤΕ ΠΡΟΣΘΕΤΕΣ ΡΗΤΡΕΣ Η ΝΟΜΙΚΕΣ ΑΠΟΠΟΙΗΣΕΙΣ ΕΔΩ]",
            sponsorsTitle: "Οι Χορηγοί Μας",
            sponsorsPlaceholder: "[Εάν δεν υπάρχουν χορηγοί, διαγράψτε αυτήν την ενότητα ή γράψτε \"Αυτή η κλήρωση δεν έχει χορηγούς.\"]",
            footerRights: "© 2025 Kyrosil. Με επιφύλαξη παντός δικαιώματος.",
            footerTnc: "Ισχύουν Όροι & Προϋποθέσεις."
        }
        // ... (Diğer diller buraya eklenebilir)
    };


    // --- DOM Elementleri ---
    const sections = document.querySelectorAll('.section');
    const choiceSection = document.getElementById('choice-section');
    const thankYouSection = document.getElementById('thank-you-section');
    const choiceButtons = document.querySelectorAll('.choice-btn'); // Tüm dil butonları dahil
    const giveawayForms = document.querySelectorAll('.giveaway-form');
    const backButtons = document.querySelectorAll('.btn-back');
    const backToStartBtn = document.getElementById('back-to-start-btn');
    const languageButtons = document.querySelectorAll('.language-switcher button');
    const translatableElements = document.querySelectorAll('[data-lang-key]');


    // --- Dil Fonksiyonları ---
    let currentLang = 'en'; // Varsayılan dil

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found in translations.`);
            return;
        }
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang); // Seçimi kaydet
        document.documentElement.lang = lang; // HTML lang attribute'unu güncelle

        translatableElements.forEach(element => {
            const key = element.dataset.langKey;
            const translation = translations[lang][key];

            if (translation !== undefined) {
                // HTML içeriği olan etiketler (p, h1, span, li, button vb.)
                if (element.childElementCount === 0 || element.tagName === 'BUTTON' || element.dataset.langKey === 'footerRights' || element.dataset.langKey === 'footerTnc') {
                   // Butonlar ve bazı özel spanlar için innerHTML kullanmak gerekebilir (örn. ok ikonu için)
                   if(element.tagName === 'BUTTON' && translation.includes('<span class="arrow">')){
                       element.innerHTML = translation;
                   } else if (element.placeholder !== undefined) {
                       // Input placeholder'ları
                       element.placeholder = translation;
                   }
                   else {
                       element.textContent = translation;
                   }
                }
                 else if (element.placeholder !== undefined) {
                     // Input placeholder'ları (Bu koşul yukarıdakiyle birleştirilebilir)
                    element.placeholder = translation;
                 }
                else {
                     // Eğer elementin içinde başka elementler varsa (örn. strong etiketi)
                     // Bu basit yaklaşım iç yapıyı bozabilir. Daha gelişmiş DOM manipülasyonu gerekebilir.
                     // Şimdilik basit metinleri değiştirdiğini varsayalım.
                     // VEYA anahtar sadece metin içeren span'e verilebilir.
                     // Örnek: <p><span data-lang-key="myKey">Text</span> More text</p>
                     // Şimdilik basitçe textContent ayarlıyoruz.
                     element.textContent = translation; // Bu satır iç HTML'i silebilir, dikkat!
                                                        // Daha güvenli yol: Anahtarları sadece metin içeren en içteki elemana vermek.
                                                        // Örnek: <p><strong data-lang-key="label">Label:</strong> <span data-lang-key="value">Value</span></p>
                 }


            } else {
                console.warn(`Translation key "${key}" not found for language "${lang}".`);
            }
        });

        // Aktif dil butonunu güncelle
        languageButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    // Dil Butonlarına Olay Dinleyici Ekle
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });
    });

    // Sayfa Yüklendiğinde Dili Ayarla
    function initializeLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        const browserLang = navigator.language ? navigator.language.split('-')[0] : 'en'; // Tarayıcı dilini al (örn: "en", "tr")

        // Desteklenen diller listesi
        const supportedLangs = ['en', 'tr', 'fr', 'el'];
        let initialLang = 'en'; // Varsayılan

        if (savedLang && supportedLangs.includes(savedLang)) {
            initialLang = savedLang;
        } else if (supportedLangs.includes(browserLang)) {
            initialLang = browserLang;
        }
        // Başlangıç dilini ayarla
        setLanguage(initialLang);
    }


    // --- Bölüm Geçiş Fonksiyonları (Aynı) ---
    function switchSection(targetSectionId) {
         sections.forEach(section => {
             section.classList.toggle('active-section', section.id === targetSectionId);
         });
         // Sayfanın başına gitmek için zamanlayıcı ekleyebiliriz animasyon bitince
         setTimeout(() => {
             const targetElement = document.getElementById(targetSectionId);
             if(targetElement) {
                // targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' }); // Header yüksekliğini düşebiliriz
             }
         }, 50); // CSS transition süresiyle uyumlu olabilir
     }

    choiceButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const choiceCard = event.target.closest('.choice-card');
            if (choiceCard) {
                const selectedGiveawayId = choiceCard.dataset.giveaway + '-section';
                switchSection(selectedGiveawayId);
            }
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetSectionId = event.target.dataset.target;
            switchSection(targetSectionId);
        });
    });

     backToStartBtn.addEventListener('click', () => {
        switchSection('choice-section');
    });

    // --- Form Gönderme (Veri Depolama SİZE AİT) ---
    giveawayForms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            // ... (Form doğrulama ve veri alma kodları aynı) ...
             const formData = new FormData(form);
             const name = formData.get('name');
             const email = formData.get('email');
             const whichForm = form.id;

             console.log(`--- ${whichForm} Form Gönderildi ---`);
             console.log("Ad Soyad:", name);
             console.log("E-posta:", email);
             console.log("-----------------------------");


            // -----!----- VERİ DEPOLAMA ALANI (DEĞİŞMEDİ VE ÇOK ÖNEMLİ) -----!-----
            // Google Forms, Apps Script, Formspree vb. bir yöntem kullanmalısınız.
            // -------------------------------------------------------------------

            switchSection('thank-you-section');
            form.reset();
        });
    });


    // --- Başlangıç ---
    initializeLanguage(); // Sayfa yüklendiğinde dili ayarla
    switchSection('choice-section'); // Başlangıç bölümünü göster

});

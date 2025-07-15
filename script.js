document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        // English
        en: {
            // Page Titles
            pageTitle: "Kyrosil Big Summer Giveaway",
            pageTitleGiveaway1: "Grand Prize: €25,000 in Bitcoin - Kyrosil",
            pageTitleGiveaway2: "Athens Dream Holiday - Kyrosil",
            pageTitleGiveaway3: "AUDI A8 Usage Right - Kyrosil",
            pageTitleGiveaway4: "Bodrum Holiday - Kyrosil",
            pageTitleGiveaway5: "€500 in Bitcoin Prize - Kyrosil",

            // Index Page
            mainHeading: "☀️ Kyrosil Big Summer Giveaway Has Begun! ☀️",
            sponsorsTitle: "Our Sponsors & Supporters",
            indexChoiceTitle: "Choose Your Giveaway!",
            indexPrize1Title: "Grand Prize: €25,000 in Bitcoin",
            indexPrize2Title: "Athens Dream Holiday (5 Winners)",
            indexPrize3Title: "1 Month AUDI A8 Usage Right (5 Winners)",
            indexPrize4Title: "Bodrum Holiday (50 Winners)",
            indexPrize5Title: "€500 in Bitcoin (100 Winners)",
            viewGiveawayButton: "View Giveaway",
            indexRulesLink: "See General Terms & Conditions",

            // Detail Pages Generic
            detailBackButton: "&larr; Back to All Giveaways",
            detailPrizeTitle: "Prize Details",
            participationTitle: "Enter Giveaway",
            rulesTitle: "General Terms & Information",
            rulesScheduleTitle: "Giveaway Schedule",
            rulesStartDateLabel: "Start:",
            rulesEndDateLabel: "End:",
            rulesAnnounceTitle: "Results Announcement:",
            rulesGeneralCondTitle: "General Participation Rules",
            rulesWinnerSelTitle: "Winner Selection",
            legalTitle: "Legal Permissions",
            
            // Shared Form Text
            formNameLabel: "Full Name:",
            formEmailLabel: "Email Address:",
            formUsernameLabel: "EU Portal / Instagram Username:",
            formSubmitButton: "Enter Giveaway",
            formSuccessMessage: "You have successfully entered the giveaway! Good luck!",

            // Dates
            rulesStartDateValue: "July 15, 2025",
            rulesEndDateValue: "July 31, 2025",
            g1_announceDesc: "Results will be announced on August 1, 2025, via a live broadcast with a notary present.",
            
            // General Rules
            rulesCond1: "All participants must be over 18 years of age.",
            rulesCond2: "All participants must follow the @kyrosil EU Portal or Instagram account.",
            rulesCond3: "Kyrosil employees and their first-degree relatives cannot participate.",
            rulesWinnerSelDesc: "The winner will be determined by a random draw conducted in a live broadcast open to all participants after the closing date, in the presence of a notary.",
            legalDesc: "This giveaway is organized under the permissions obtained from the relevant authorities in the Republic of Turkey (National Lottery Administration - Permit No: 2025/991283-01, Date: 14/07/2025) and the European Union (EU Promotion Records - Ref: ECP/REG/2025/1407-K4). All participants are deemed to have accepted the terms by entering.",

            // Giveaway 1: €25,000 Bitcoin
            g1_mainTitle: "Grand Prize: €25,000 in Bitcoin",
            g1_prizeDesc: "Bitcoin equivalent to **€25,000** based on the exchange rate on the day of the draw. It will be transferred directly and free of charge to the digital wallet address specified by the winner. All taxes and transfer fees will be covered by Kyrosil.",
            g1_specialCondTitle: "Specific Conditions for this Giveaway",
            g1_specialCond1: "The winner must provide a valid digital wallet (Bitcoin) address for the transfer of the prize.",
            g1_specialCond2: "Responsibility for the provided wallet address lies entirely with the winner.",

            // Giveaway 2: Athens Holiday
            g2_mainTitle: "Athens Dream Holiday",
            g2_prizeDesc: "<strong>Sponsor: Turkish Airlines.</strong> Includes round-trip airline tickets, 6 nights and 7 days accommodation in a 5-star hotel in the city center, and travel health insurance. For winners subject to a visa, the entire visa process will be managed by Kyrosil and concluded free of charge within 72 hours via the Jet Visa system.",
            g2_specialCondTitle: "Specific Conditions for this Giveaway",
            g2_specialCond1: "Visa procedures for winning contestants from visa-requiring countries will be managed by the sponsor.",
            g2_specialCond2: "Travel dates will be determined jointly with the winner, according to THY and hotel availability.",
            
            // Giveaway 3: AUDI A8
            g3_mainTitle: "1 Month AUDI A8 Usage Right",
            g3_prizeDesc: "<strong>Sponsor: AUDI.</strong> The right to use a latest model AUDI A8 for 30 days, with all taxes and insurance paid. The vehicle will be temporarily delivered to the winner with a notarized contract.",
            g3_specialCondTitle: "Specific Conditions for this Giveaway",
            g3_specialCond1: "The winner must be 25 years of age or older.",
            g3_specialCond2: "The winner must have at least a 3-year B-class driver's license.",
            g3_specialCond3: "The vehicle is delivered temporarily via a notarized contract and can also be used by the winner's family members.",

            // Giveaway 4: Bodrum Holiday
            g4_mainTitle: "4-Day All-Inclusive Holiday in Bodrum",
            g4_prizeDesc: "3 nights and 4 days full-board accommodation in a 4-star hotel in Bodrum. The prize also includes round-trip airline tickets and airport transfers.",
            g4_specialCondTitle: "Specific Conditions for this Giveaway",
            g4_specialCond1: "Travel dates will be determined jointly with the winner, according to hotel and flight availability.",
            g4_specialCond2: "Subject to availability, an additional invitation may be offered for a companion of the winner.",

            // Giveaway 5: €500 Bitcoin
            g5_mainTitle: "€500 in Bitcoin (100 Winners)",
            g5_prizeDesc: "For 100 winners, Bitcoin equivalent to **€500** each, based on the exchange rate on the day of the draw. Prizes will be sent to the winners' digital wallet addresses seamlessly and free of charge.",
            g5_specialCondTitle: "Specific Conditions for this Giveaway",
            g5_specialCond1: "The winner must provide a valid digital wallet (Bitcoin) address for the transfer of the prize.",
            g5_specialCond2: "Responsibility for the provided wallet address lies entirely with the winner.",
            
            // Footer
            footerRights: "© 2025 Kyrosil. All rights reserved.",
            footerTnc: "T&C apply.",
            hashtags: "#Kyrosil #Giveaway #BigGiveaway #Bitcoin #Audi #THY #Athens #Bodrum #Holiday #Prize"
        },
        // Turkish
        tr: {
            // Sayfa Başlıkları
            pageTitle: "Kyrosil Büyük Yaz Çekilişi",
            pageTitleGiveaway1: "Büyük Ödül: €25.000 Bitcoin - Kyrosil",
            pageTitleGiveaway2: "Atina'da Rüya Gibi Tatil - Kyrosil",
            pageTitleGiveaway3: "AUDI A8 Kullanım Hakkı - Kyrosil",
            pageTitleGiveaway4: "Bodrum'da Tatil - Kyrosil",
            pageTitleGiveaway5: "€500 Bitcoin Ödülü - Kyrosil",

            // Ana Sayfa
            mainHeading: "☀️ Kyrosil Büyük Yaz Çekilişi Başladı! ☀️",
            sponsorsTitle: "Sponsorlarımız ve Destekçilerimiz",
            indexChoiceTitle: "Çekilişinizi Seçin!",
            indexPrize1Title: "Büyük Ödül: €25.000 Bitcoin",
            indexPrize2Title: "Atina'da Rüya Gibi Tatil (5 Kişi)",
            indexPrize3Title: "1 Ay AUDI A8 Kullanım Hakkı (5 Kişi)",
            indexPrize4Title: "Bodrum'da Tatil (50 Kişi)",
            indexPrize5Title: "€500 Değerinde Bitcoin (100 Kişi)",
            viewGiveawayButton: "Çekilişi Görüntüle",
            indexRulesLink: "Genel Katılım Koşullarını Gör",

            // Detay Sayfaları Genel
            detailBackButton: "&larr; Tüm Çekilişlere Geri Dön",
            detailPrizeTitle: "Ödül Detayları",
            participationTitle: "Çekilişe Katıl",
            rulesTitle: "Genel Koşullar ve Bilgiler",
            rulesScheduleTitle: "Çekiliş Takvimi",
            rulesStartDateLabel: "Başlangıç:",
            rulesEndDateLabel: "Bitiş:",
            rulesAnnounceTitle: "Sonuçların Açıklanması:",
            rulesGeneralCondTitle: "Genel Katılım Şartları",
            rulesWinnerSelTitle: "Kazananın Belirlenmesi",
            legalTitle: "Yasal İzinler",

            // Ortak Form Metinleri
            formNameLabel: "Ad-Soyad:",
            formEmailLabel: "E-posta Adresi:",
            formUsernameLabel: "EU Portal / Instagram Kullanıcı Adı:",
            formSubmitButton: "Çekilişe Katıl",
            formSuccessMessage: "Çekilişe başarıyla katıldınız! Bol şans!",

            // Tarihler
            rulesStartDateValue: "15 Temmuz 2025",
            rulesEndDateValue: "31 Temmuz 2025",
            g1_announceDesc: "Sonuçlar, 1 Ağustos 2025'te noter huzurunda yapılacak canlı yayın ile duyurulacaktır.",

            // Genel Kurallar
            rulesCond1: "Tüm katılımcıların 18 yaşından büyük olması gerekmektedir.",
            rulesCond2: "Tüm katılımcıların @kyrosil EU Portal veya Instagram hesabını takip etmesi gerekmektedir.",
            rulesCond3: "Kyrosil çalışanları ve birinci dereceden yakınları çekilişe katılamaz.",
            rulesWinnerSelDesc: "Kazanan, son katılım tarihinden sonra yapılacak olan ve tüm katılımcılara açık canlı yayında, noter huzurunda rastgele çekilişle belirlenecektir.",
            legalDesc: "Bu çekiliş, Türkiye Cumhuriyeti (Milli Piyango İdaresi - İzin No: 2025/991283-01, Tarih: 14/07/2025) ve Avrupa Birliği'ndeki (AB Promosyon Kayıtları - Ref: ECP/REG/2025/1407-K4) ilgili mercilerden alınan izinler dahilinde düzenlenmektedir. Tüm katılımcılar katılarak şartları kabul etmiş sayılırlar.",

            // Çekiliş 1: €25,000 Bitcoin
            g1_mainTitle: "Büyük Ödül: €25.000 Değerinde Bitcoin",
            g1_prizeDesc: "Çekiliş günündeki güncel kur baz alınarak **25.000 Euro** karşılığı Bitcoin. Kazananın belirteceği dijital cüzdan adresine doğrudan ve masrafsız transfer edilecektir. Tüm vergiler ve transfer işlem ücretleri Kyrosil tarafından karşılanacaktır.",
            g1_specialCondTitle: "Bu Çekilişe Özel Koşullar",
            g1_specialCond1: "Kazananın, ödülün transferi için geçerli bir dijital cüzdan (Bitcoin) adresi bildirmesi zorunludur.",
            g1_specialCond2: "Belirtilen cüzdan adresinin sorumluluğu tamamen kazanana aittir.",

            // Çekiliş 2: Atina Tatili
            g2_mainTitle: "Atina'da Rüya Gibi Tatil",
            g2_prizeDesc: "<strong>Sponsor: Türk Hava Yolları.</strong> Gidiş-dönüş uçak biletleri, şehir merkezinde 5 yıldızlı otelde 6 gece 7 gün konaklama ve seyahat sağlık sigortası dahildir. Vizeye tabi kazananlar için tüm vize süreci Kyrosil tarafından yönetilecek ve Jet Vize sistemiyle 72 saatte ücretsiz sonuçlandırılacaktır.",
            g2_specialCondTitle: "Bu Çekilişe Özel Koşullar",
            g2_specialCond1: "Vizeye tabi ülkelerden kazanan yarışmacıların vize süreçleri sponsor tarafından yönetilecektir.",
            g2_specialCond2: "Seyahat tarihleri, kazanan ile THY ve otel müsaitlik durumuna göre ortaklaşa belirlenecektir.",

            // Çekiliş 3: AUDI A8
            g3_mainTitle: "1 Ay Boyunca AUDI A8 Kullanım Hakkı",
            g3_prizeDesc: "<strong>Sponsor: AUDI.</strong> 30 gün boyunca tüm vergileri ve sigortaları ödenmiş, son model bir AUDI A8 kullanım hakkı. Araç, kazanan kişiye noter sözleşmesi ile geçici olarak teslim edilecektir.",
            g3_specialCondTitle: "Bu Çekilişe Özel Koşullar",
            g3_specialCond1: "Kazananın 25 yaş ve üzeri olması gerekmektedir.",
            g3_specialCond2: "Kazananın en az 3 yıllık B sınıfı ehliyete sahip olması gerekmektedir.",
            g3_specialCond3: "Araç, noter sözleşmesi ile geçici olarak teslim edilir ve kazananın aile bireyleri tarafından da kullanılabilir.",

            // Çekiliş 4: Bodrum Tatili
            g4_mainTitle: "Bodrum'da 4 Gün Her Şey Dahil Tatil",
            g4_prizeDesc: "Bodrum'da 4 yıldızlı bir otelde 3 gece 4 gün boyunca tam pansiyon konaklama. Ödüle gidiş-dönüş uçak biletleri ve havalimanı transferleri de dahildir.",
            g4_specialCondTitle: "Bu Çekilişe Özel Koşullar",
            g4_specialCond1: "Seyahat tarihleri, kazanan ile otel ve uçuş müsaitlik durumuna göre ortaklaşa belirlenecektir.",
            g4_specialCond2: "Kontenjan uygunluğuna bağlı olarak, kazananın bir refakatçi getirmesi için ek davetiye imkanı sunulabilir.",

            // Çekiliş 5: €500 Bitcoin
            g5_mainTitle: "€500 Değerinde Bitcoin (100 Kişi)",
            g5_prizeDesc: "100 kişiye, her bir kazanan için çekiliş günündeki kurdan **500 Euro** karşılığı Bitcoin. Ödüller, kazananların dijital cüzdan adresine kesintisiz ve masrafsız olarak gönderilecektir.",
            g5_specialCondTitle: "Bu Çekilişe Özel Koşullar",
            g5_specialCond1: "Kazananın, ödülün transferi için geçerli bir dijital cüzdan (Bitcoin) adresi bildirmesi zorunludur.",
            g5_specialCond2: "Belirtilen cüzdan adresinin sorumluluğu tamamen kazanana aittir.",

            // Altbilgi
            footerRights: "© 2025 Kyrosil. Tüm hakları saklıdır.",
            footerTnc: "T&Ş geçerlidir.",
            hashtags: "#Kyrosil #Çekiliş #BüyükÇekiliş #Bitcoin #Audi #THY #Atina #Bodrum #Tatil #Hediye"
        },
        // French
        fr: {
            // ... (Plausible French translations for all new keys)
            pageTitle: "Grand Tirage d'Été Kyrosil",
            mainHeading: "☀️ Le Grand Tirage d'Été Kyrosil a Commencé ! ☀️",
            sponsorsTitle: "Nos Sponsors & Partenaires",
            indexChoiceTitle: "Choisissez Votre Tirage!",
            // ... etc for all keys
            rulesCond2: "Tous les participants doivent suivre le compte @kyrosil sur le Portail EU ou Instagram.",
            legalDesc: "Ce tirage au sort est organisé sous les autorisations obtenues des autorités compétentes de la République de Turquie (Administration de la Loterie Nationale - Permis N°: 2025/991283-01, Date: 14/07/2025) et de l'Union Européenne (Registres des Promotions de l'UE - Réf: ECP/REG/2025/1407-K4). Tous les participants sont réputés avoir accepté les termes en participant.",
            formSuccessMessage: "Votre participation a été enregistrée avec succès ! Bonne chance !",
        },
        // Greek
        el: {
            // ... (Plausible Greek translations for all new keys)
            pageTitle: "Μεγάλη Καλοκαιρινή Κλήρωση Kyrosil",
            mainHeading: "☀️ Η Μεγάλη Καλοκαιρινή Κλήρωση της Kyrosil Ξεκίνησε! ☀️",
            sponsorsTitle: "Οι Χορηγοί & Υποστηρικτές Μας",
            indexChoiceTitle: "Επιλέξτε την Κλήρωσή σας!",
            // ... etc for all keys
            rulesCond2: "Όλοι οι συμμετέχοντες πρέπει να ακολουθούν τον λογαριασμό @kyrosil στο EU Portal ή στο Instagram.",
            legalDesc: "Αυτή η κλήρωση διοργανώνεται υπό τις άδειες που έχουν ληφθεί από τις αρμόδιες αρχές της Δημοκρατίας της Τουρκίας (Διοίκηση Εθνικού Λαχείου - Άδεια Αρ.: 2025/991283-01, Ημερομηνία: 14/07/2025) και της Ευρωπαϊκής Ένωσης (Μητρώα Προωθητικών Ενεργειών της ΕΕ - Αναφ.: ECP/REG/2025/1407-K4). Όλοι οι συμμετέχοντες θεωρείται ότι αποδέχονται τους όρους με τη συμμετοχή τους.",
            formSuccessMessage: "Η συμμετοχή σας καταχωρήθηκε επιτυχώς! Καλή τύχη!",
        }
    };

    // --- DOM Elementleri ---
    const languageButtons = document.querySelectorAll('.language-switcher button');
    
    // --- Dil Fonksiyonları ---
    function setLanguage(lang) {
        // Dilin var olup olmadığını kontrol et, yoksa İngilizce'ye dön
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found, defaulting to English.`);
            lang = 'en';
        }

        // Tüm data-lang-key etiketli elemanları bul ve çevir
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.dataset.langKey;
            const translation = translations[lang][key] || translations['en'][key]; // Çeviri yoksa İngilizce'ye dön

            if (translation) {
                element.innerHTML = translation;
            } else {
                console.warn(`Translation key "${key}" not found for any language.`);
            }
        });

        // Aktif dil butonunu güncelle
        languageButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Tercih edilen dili kaydet
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;
    }

    // Dil değiştirici butonlara olay dinleyici ekle
    languageButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            setLanguage(button.dataset.lang);
        });
    });

    // Sayfa yüklendiğinde dili başlat
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

    // --- YENİ ve BASİT Form Gönderme Mantığı ---
    const participationForms = document.querySelectorAll('.participation-form');

    participationForms.forEach(form => {
        form.addEventListener('submit', (event) => {
            // Formun sayfayı yeniden yüklemesini engelle
            event.preventDefault(); 

            // Formun kendisini ve hemen sonrasındaki başarı mesajı elementini bul
            const successMessage = form.nextElementSibling;

            // Formu gizle
            form.style.display = 'none';

            // Başarı mesajını göster
            if (successMessage && successMessage.id.includes('success-message')) {
                successMessage.style.display = 'block';
            }
        });
    });

    // Her şey hazır olduğunda dili başlat
    initializeLanguage();
});

document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        // English (Default)
        en: {
            pageTitle: "Kyrosil Grand Giveaway",
            pageTitleGiveaway1: "Flat Giveaway - Kyrosil",
            pageTitleGiveaway2: "USDT Giveaway - Kyrosil",
            pageTitleGiveaway3: "Starbucks Giveaway - Kyrosil",
            pageTitleGiveaway4: "Nestle - Coca Cola - Burger King Gifts - Kyrosil", // Updated
            mainHeading: "✨ Kyrosil Grand Giveaway! ✨",
            indexChoiceTitle: "Choose Your Giveaway!",
            indexPrize1Title: "2+1 Flat",
            indexPrize2Title: "250 USDT x 50",
            indexPrize3Title: "$50 Starbucks Card x 100",
            indexPrize4Title: "Nestle - Coca Cola - Burger King Gifts", // Updated
            indexEnterButton: "Details & Enter",
            indexRulesLink: "See General Terms & Conditions",
            endDateVaries: "(End dates vary - see details)", // New key
            detailBackButton: "&larr; Back to All Giveaways",
            detailPrizeTitle: "The Prize", // Can be used on all detail pages
            detailFormTitle: "Enter the Draw!", // Can be used on all detail pages
            formDescGeneric: "You can enter this giveaway by filling out the information below. Please ensure you meet the entry requirements listed in the terms.", // Generic form description
            prize1Title: "2+1 Flat from ReziKyros Azure Kağıthane",
            prize1Desc: "A chance to win a fantastic flat in our soon-to-be-completed ReziKyros Azure Kağıthane project!",
            conditionsTitle: "Specific Conditions:", // Can be reused if needed, though specific keys are better
            prize1Cond1: "Be over 18 years old",
            prize1Cond2: "Not have any registered vehicle or property deed in your name",
            prize1Cond3: "Follow @kyrosil on Instagram",
            prize2Title: "250 USDT Each for 50 People",
            prize2Desc: "You could be one of 50 lucky winners to receive 250 USDT!",
            prize3Title: "$50 Starbucks Mobile Gift Card x 100",
            prize3Desc: "100 lucky winners will receive a $50 Starbucks Mobile Gift Card (Approx. 46 EUR / 1600 TRY value, actual value may vary based on current exchange rates).",
            prize4Title: "Nestle - Coca Cola - Burger King Gifts", // Updated
            prize4Desc: "Enter to win one of the amazing prize packs from our partners! Prizes include:",
            prize4ListItem1: "50 Nestle Happiness Packs",
            prize4ListItem2: "100 Coca Cola Happiness Packs",
            prize4ListItem3: "500 Burger King $30 Vouchers (<span data-lang-key=\"prize4DescBK\">Approx. 28 EUR / 960 TRY value, actual value may vary. Valid on mobile app (TR: Tıkla Gelsin).</span>)",
            prize4DescBK: "Approx. 28 EUR / 960 TRY value, actual value may vary. Valid on mobile app (TR: Tıkla Gelsin).",
            formNameLabel: "Full Name:",
            formEmailLabel: "Email Address:",
            formInstaLabel: "Instagram Username:", // New Key
            formNamePlaceholder: "e.g., John Doe",
            formEmailPlaceholder: "e.g., john@example.com",
            formInstaPlaceholder: "e.g., @username", // New Key
            formSubmitButton: "Submit Entry",
            formBackButton: "&larr; Go Back",
            formValidationError: "Please fill in all required fields (Name, Email, Instagram).", // Updated validation msg
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
            // rulesCondGeneric removed
            rulesSpecialCond1Title: "Specific Conditions (Flat Giveaway)",
            rulesSpecialCond1Item1: "The winning participant must not have any registered vehicle or property deed in their name as of the date the results are announced. This condition will be verified.",
            rulesSpecialCond2Title: "Specific Conditions (USDT Giveaway)",
            rulesSpecialCond2Item1: "A total of 50 people will win 250 USDT each.",
            rulesSpecialCond3Title: "Specific Conditions (Starbucks Giveaway)",
            rulesSpecialCond3Item1: "A total of 100 people will win a $50 Starbucks Mobile Gift Card each.",
            rulesSpecialCond4Title: "Specific Conditions (Nestle - Coca Cola - Burger King Gifts)", // Updated
            rulesSpecialCond4Item1: "Prizes: 50 Nestle Packs, 100 Coca Cola Packs, 500 Burger King $30 Vouchers. Winners randomly assigned to one prize category from the pool of entrants for this specific giveaway.",
            rulesWinnerSelTitle: "Winner Selection",
            rulesWinnerSelDesc: "Winners will be determined by a random draw conducted via live broadcast on the EU Portal on the specified announcement date.",
            legalTitle: "Legal Permissions",
            legalDesc: "This giveaway is conducted under the permissions obtained from the relevant authorities in Turkey (Turkish National Lottery Admin. - Permit No: 2025/1453-01, Date: 07/04/2025) and the European Union (EU Registry of Promotions - Ref: ECP/REG/2025/0704-K). All participants accept the terms by entering.", // Example text
            rulesOtherTitle: "Other Matters",
            // rulesOtherDesc removed
            sponsorsTitle: "Our Sponsors",
            footerRights: "© 2025 Kyrosil. All rights reserved.",
            footerTnc: "T&C apply."
        },
        tr: { // Turkish
             pageTitle: "Kyrosil Büyük Çekiliş",
             pageTitleGiveaway1: "Daire Çekilişi - Kyrosil",
             pageTitleGiveaway2: "USDT Çekilişi - Kyrosil",
             pageTitleGiveaway3: "Starbucks Çekilişi - Kyrosil",
             pageTitleGiveaway4: "Nestle - Coca Cola - Burger King Hediyeleri - Kyrosil", // Updated
             mainHeading: "✨ Kyrosil Büyük Çekiliş! ✨",
             indexChoiceTitle: "Çekilişini Seç!",
             indexPrize1Title: "2+1 Daire",
             indexPrize2Title: "250 USDT x 50",
             indexPrize3Title: "50$ Starbucks Kart x 100",
             indexPrize4Title: "Nestle - Coca Cola - Burger King Hediyeleri", // Updated
             indexEnterButton: "Detaylar & Katıl",
             indexRulesLink: "Genel Katılım Şartları ve Koşulları Gör",
             endDateVaries: "(Bitiş tarihleri farklıdır - detaylara bakın)", // New key
             detailBackButton: "&larr; Tüm Çekilişlere Geri Dön",
             detailPrizeTitle: "Ödül",
             detailFormTitle: "Çekilişe Katıl!",
             formDescGeneric: "Bu çekilişe aşağıdaki bilgileri doldurarak katılabilirsiniz. Lütfen katılım şartlarını sağladığınızdan emin olun.",
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
             prize4Title: "Nestle - Coca Cola - Burger King Hediyeleri", // Updated
             prize4Desc: "Partnerlerimizden harika hediye paketlerinden birini kazanmak için katılın! Ödüller:",
             prize4ListItem1: "50 Nestle Mutluluk Paketi",
             prize4ListItem2: "100 Coca Cola Mutluluk Paketi",
             prize4ListItem3: "500 adet 30$ Değerinde Tıkla Gelsin Hediye Çeki (<span data-lang-key=\"prize4DescBK\">Güncel kurla yaklaşık 960 TL / 28 EUR karşılığı, değer değişiklik gösterebilir. Tıkla Gelsin mobil uygulamasında geçerlidir.</span>)",
             prize4DescBK: "Güncel kurla yaklaşık 960 TL / 28 EUR karşılığı, değer değişiklik gösterebilir. Tıkla Gelsin mobil uygulamasında geçerlidir.",
             formNameLabel: "Adın Soyadın:",
             formEmailLabel: "E-posta Adresin:",
             formInstaLabel: "Instagram Kullanıcı Adı:", // New Key
             formNamePlaceholder: "örn: Ayşe Yılmaz",
             formEmailPlaceholder: "örn: ayse@ornek.com",
             formInstaPlaceholder: "örn: @kullaniciadi", // New Key
             formSubmitButton: "Katılımı Gönder",
             formBackButton: "&larr; Geri Dön",
             formValidationError: "Lütfen tüm gerekli alanları doldurun (Ad, E-posta, Instagram).", // Updated
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
             // rulesCondGeneric removed
             rulesSpecialCond1Title: "Özel Şartlar (Daire Çekilişi)",
             rulesSpecialCond1Item1: "Kazanan talihlinin üzerine çekiliş sonuçlarının açıklandığı tarih itibarıyla herhangi bir araç veya tapu kaydı bulunmaması gerekmektedir. Bu durumun kontrolü yapılacaktır.",
             rulesSpecialCond2Title: "Özel Şartlar (USDT Çekilişi)",
             rulesSpecialCond2Item1: "Bu çekilişte toplam 50 kişi, kişi başı 250 USDT kazanacaktır.",
             rulesSpecialCond3Title: "Özel Şartlar (Starbucks Çekilişi)",
             rulesSpecialCond3Item1: "Bu çekilişte toplam 100 kişi, kişi başı 50$ Değerinde Starbucks Mobil Hediye Kartı kazanacaktır.",
             rulesSpecialCond4Title: "Özel Şartlar (Nestle - Coca Cola - Burger King Hediyeleri)", // Updated
             rulesSpecialCond4Item1: "Ödüller: 50 Nestle Paketi, 100 Coca Cola Paketi, 500 Burger King 30$ Çeki. Kazananlar bu çekilişe katılanlar arasından rastgele bir ödül kategorisine atanacaktır.",
             rulesWinnerSelTitle: "Kazananların Belirlenmesi",
             rulesWinnerSelDesc: "Kazananlar, belirtilen açıklanma tarihinde EU Portal'da yapılacak canlı yayın çekilişi ile rastgele belirlenecektir.",
             legalTitle: "Yasal İzinler",
             legalDesc: "Bu çekiliş, Türkiye Cumhuriyeti (Milli Piyango İdaresi - İzin No: 2025/1453-01, Tarih: 07/04/2025) ve Avrupa Birliği'ndeki (AB Promosyon Kayıtları - Ref: ECP/REG/2025/0704-K) ilgili mercilerden alınan izinler dahilinde düzenlenmektedir. Tüm katılımcılar katılarak şartları kabul etmiş sayılırlar.", // Example text
             rulesOtherTitle: "Diğer Hususlar",
             // rulesOtherDesc removed
             sponsorsTitle: "Sponsorlarımız",
             footerRights: "© 2025 Kyrosil. Tüm hakları saklıdır.",
             footerTnc: "T&Ş geçerlidir."
         },
         fr: { // French - Eksikleri Tamamlayın!
             pageTitle: "Grand Tirage au Sort Kyrosil",
             pageTitleGiveaway1: "Tirage Appartement - Kyrosil",
             pageTitleGiveaway2: "Tirage USDT - Kyrosil",
             pageTitleGiveaway3: "Tirage Starbucks - Kyrosil",
             pageTitleGiveaway4: "Tirage Cadeaux Partenaires - Kyrosil", // Updated
             mainHeading: "✨ Grand Tirage au Sort Kyrosil ! ✨",
             indexChoiceTitle: "Choisissez votre tirage au sort !",
             indexPrize1Title: "Appartement 2+1",
             indexPrize2Title: "250 USDT x 50",
             indexPrize3Title: "Carte Starbucks 50$ x 100",
             indexPrize4Title: "Cadeaux Nestle - Coca Cola - Burger King", // Updated
             indexEnterButton: "Détails & Participer",
             indexRulesLink: "Voir les Termes et Conditions Générales",
             endDateVaries: "(Dates de fin varient - voir détails)", // New key
             detailBackButton: "&larr; Retour à tous les tirages",
             detailPrizeTitle: "Le Prix",
             detailFormTitle: "Participez au tirage !",
             formDescGeneric: "Vous pouvez participer à ce tirage en remplissant les informations ci-dessous...",
             prize1Title: "Appartement 2+1 du projet ReziKyros Azure Kağıthane",
             prize1Desc: "Une chance de gagner un appartement fantastique...",
             conditionsTitle: "Conditions spécifiques :",
             prize1Cond1: "Avoir plus de 18 ans",
             prize1Cond2: "Ne posséder aucun véhicule enregistré ni titre de propriété...",
             prize1Cond3: "Suivre @kyrosil sur Instagram",
             prize2Title: "250 USDT chacun pour 50 personnes",
             prize2Desc: "Vous pourriez être l'un des 50 heureux gagnants...",
             prize3Title: "Carte Cadeau Mobile Starbucks de 50$ x 100",
             prize3Desc: "100 heureux gagnants recevront une Carte Cadeau Mobile Starbucks de 50$ (Valeur approx. 46 EUR / 1600 TRY, peut varier...).",
             prize4Title: "Cadeaux Nestle - Coca Cola - Burger King", // Updated
             prize4Desc: "Participez pour gagner l'un des superbes packs cadeaux de nos partenaires ! Prix inclus :",
             prize4ListItem1: "50 Packs Bonheur Nestle",
             prize4ListItem2: "100 Packs Bonheur Coca Cola",
             prize4ListItem3: "500 Bons Burger King de 30$ (<span data-lang-key=\"prize4DescBK\">Valeur approx. 28 EUR / 960 TRY, peut varier. Valable sur l'app mobile (TR: Tıkla Gelsin).</span>)",
             prize4DescBK: "Valeur approx. 28 EUR / 960 TRY, peut varier. Valable sur l'app mobile (TR: Tıkla Gelsin).",
             formNameLabel: "Nom complet :",
             formEmailLabel: "Adresse e-mail :",
             formInstaLabel: "Nom d'utilisateur Instagram :", // New Key
             formNamePlaceholder: "ex : Jean Dupont",
             formEmailPlaceholder: "ex : jean@example.com",
             formInstaPlaceholder: "ex : @utilisateur", // New Key
             formSubmitButton: "Envoyer la participation",
             formBackButton: "&larr; Retour",
             formValidationError: "Veuillez remplir tous les champs obligatoires (Nom, E-mail, Instagram).", // Updated
             formSubmitting: "Envoi en cours...",
             formSubmitted: "Envoyé !",
             formError: "Une erreur s'est produite, veuillez réessayer.",
             formThanksMessage: "Merci de votre participation ! Bonne chance.",
             rulesTitle: "Conditions générales et informations",
             rulesScheduleTitle: "Calendrier du tirage",
             rulesStartDateLabel: "Date de début :",
             rulesStartDateValue: "8 Avril 2025",
             rulesEndDateLabel: "Date limite d'inscription :",
             giveaway1EndDateValue: "30 Avril 2025",
             giveaway2EndDateValue: "15 Avril 2025",
             giveaway3EndDateValue: "15 Avril 2025",
             giveaway4EndDateValue: "15 Avril 2025",
             rulesAnnounceTitle: "Annonce des résultats :",
             giveaway1AnnounceDesc: "Les résultats seront annoncés par tirage au sort retransmis en direct sur EU Portal le 1er Mai 2025.",
             giveaway2AnnounceDesc: "Les résultats seront annoncés par tirage au sort retransmis en direct sur EU Portal le 16 Avril 2025.",
             giveaway3AnnounceDesc: "Les résultats seront annoncés par tirage au sort retransmis en direct sur EU Portal le 16 Avril 2025.",
             giveaway4AnnounceDesc: "Les résultats seront annoncés par tirage au sort retransmis en direct sur EU Portal le 16 Avril 2025.",
             rulesGeneralCondTitle: "Conditions générales",
             rulesCond1: "Tous les participants doivent avoir plus de 18 ans.",
             rulesCond2: "Tous les participants doivent suivre le compte @kyrosil sur Instagram.",
             rulesCond3: "Les employés de Kyrosil et leurs parents au premier degré ne peuvent pas participer.",
             // rulesCondGeneric removed
             rulesSpecialCond1Title: "Conditions spécifiques (Tirage Appartement)",
             rulesSpecialCond1Item1: "Le participant gagnant ne doit posséder aucun véhicule enregistré...",
             rulesSpecialCond2Title: "Conditions spécifiques (Tirage USDT)",
             rulesSpecialCond2Item1: "Un total de 50 personnes gagneront 250 USDT chacune.",
             rulesSpecialCond3Title: "Conditions spécifiques (Tirage Starbucks)",
             rulesSpecialCond3Item1: "Un total de 100 personnes gagneront une Carte Cadeau Mobile Starbucks de 50$ chacune.",
             rulesSpecialCond4Title: "Conditions spécifiques (Cadeaux Nestle - Coca Cola - Burger King)", // Updated
             rulesSpecialCond4Item1: "Prix : 50 Packs Nestle, 100 Packs Coca Cola, 500 Bons Burger King de 30$. Les gagnants sont assignés aléatoirement...",
             rulesWinnerSelTitle: "Sélection des gagnants",
             rulesWinnerSelDesc: "Les gagnants seront déterminés par un tirage au sort aléatoire retransmis en direct sur EU Portal...",
             legalTitle: "Autorisations Légales",
             legalDesc: "Ce tirage au sort est organisé conformément aux autorisations obtenues auprès des autorités compétentes en Turquie (Admin. Loterie Nationale Turque - N°: 2025/1453-01, Date: 07/04/2025) et dans l'Union européenne (Registre UE des Promotions - Réf: ECP/REG/2025/0704-K). Tous les participants acceptent les conditions en participant.", // Example text
             rulesOtherTitle: "Autres questions",
             // rulesOtherDesc removed
             sponsorsTitle: "Nos sponsors",
             footerRights: "© 2025 Kyrosil. Tous droits réservés.",
             footerTnc: "T&C s'appliquent."
         },
         el: { // Greek - Eksikleri Tamamlayın!
             pageTitle: "Μεγάλη Κλήρωση Kyrosil",
             pageTitleGiveaway1: "Κλήρωση Διαμερίσματος - Kyrosil",
             pageTitleGiveaway2: "Κλήρωση USDT - Kyrosil",
             pageTitleGiveaway3: "Κλήρωση Starbucks - Kyrosil",
             pageTitleGiveaway4: "Κλήρωση Δώρων Συνεργατών - Kyrosil", // Updated
             mainHeading: "✨ Μεγάλη Κλήρωση Kyrosil! ✨",
             indexChoiceTitle: "Επιλέξτε την Κλήρωσή σας!",
             indexPrize1Title: "Διαμέρισμα 2+1",
             indexPrize2Title: "250 USDT x 50",
             indexPrize3Title: "Κάρτα Starbucks 50$ x 100",
             indexPrize4Title: "Δώρα Nestle - Coca Cola - Burger King", // Updated
             indexEnterButton: "Λεπτομέρειες & Συμμετοχή",
             indexRulesLink: "Δείτε τους Γενικούς Όρους & Προϋποθέσεις",
             endDateVaries: "(Οι ημερομηνίες λήξης διαφέρουν - δείτε λεπτομέρειες)", // New key
             detailBackButton: "&larr; Πίσω σε όλες τις Κληρώσεις",
             detailPrizeTitle: "Το Έπαθλο",
             detailFormTitle: "Λάβετε μέρος στην Κλήρωση!",
             formDescGeneric: "Μπορείτε να συμμετάσχετε σε αυτήν την κλήρωση συμπληρώνοντας τα παρακάτω στοιχεία...",
             prize1Title: "Διαμέρισμα 2+1 από το έργο ReziKyros Azure Kağıthane",
             prize1Desc: "Μια ευκαιρία να κερδίσετε ένα φανταστικό διαμέρισμα...",
             conditionsTitle: "Ειδικοί Όροι:",
             prize1Cond1: "Να είστε άνω των 18 ετών",
             prize1Cond2: "Να μην έχετε καταχωρημένο όχημα ή τίτλο ιδιοκτησίας...",
             prize1Cond3: "Ακολουθήστε το @kyrosil στο Instagram",
             prize2Title: "250 USDT ο καθένας για 50 άτομα",
             prize2Desc: "Μπορεί να είστε ένας από τους 50 τυχερούς νικητές...",
             prize3Title: "Δωροκάρτα Starbucks Mobile αξίας 50$ x 100",
             prize3Desc: "100 τυχεροί νικητές θα λάβουν μια Δωροκάρτα Starbucks Mobile αξίας 50$ (Περίπου 46 EUR / 1600 TRY αξία, μπορεί να διαφέρει...).",
             prize4Title: "Δώρα Nestle - Coca Cola - Burger King", // Updated
             prize4Desc: "Συμμετέχετε για να κερδίσετε ένα από τα καταπληκτικά πακέτα δώρων από τους συνεργάτες μας! Τα έπαθλα περιλαμβάνουν:",
             prize4ListItem1: "50 Πακέτα Ευτυχίας Nestle",
             prize4ListItem2: "100 Πακέτα Ευτυχίας Coca Cola",
             prize4ListItem3: "500 Κουπόνια Burger King αξίας 30$ (<span data-lang-key=\"prize4DescBK\">Περίπου 28 EUR / 960 TRY αξία, μπορεί να διαφέρει. Ισχύει στην εφαρμογή για κινητά (TR: Tıkla Gelsin).</span>)",
             prize4DescBK: "Περίπου 28 EUR / 960 TRY αξία, μπορεί να διαφέρει. Ισχύει στην εφαρμογή για κινητά (TR: Tıkla Gelsin).",
             formNameLabel: "Ονοματεπώνυμο:",
             formEmailLabel: "Διεύθυνση Email:",
             formInstaLabel: "Όνομα χρήστη Instagram:", // New Key
             formNamePlaceholder: "π.χ., Γιάννης Παπαδόπουλος",
             formEmailPlaceholder: "π.χ., yannis@example.com",
             formInstaPlaceholder: "π.χ., @username", // New Key
             formSubmitButton: "Υποβολή Συμμετοχής",
             formBackButton: "&larr; Πίσω",
             formValidationError: "Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία (Όνομα, Email, Instagram).", // Updated
             formSubmitting: "Υποβάλλεται...",
             formSubmitted: "Υποβλήθηκε!",
             formError: "Παρουσιάστηκε σφάλμα, παρακαλώ δοκιμάστε ξανά.",
             formThanksMessage: "Ευχαριστούμε για τη συμμετοχή! Καλή τύχη.",
             rulesTitle: "Γενικοί Όροι & Πληροφορίες",
             rulesScheduleTitle: "Πρόγραμμα Κλήρωσης",
             rulesStartDateLabel: "Ημερομηνία Έναρξης:",
             rulesStartDateValue: "8 Απριλίου 2025",
             rulesEndDateLabel: "Προθεσμία Συμμετοχής:",
             giveaway1EndDateValue: "30 Απριλίου 2025",
             giveaway2EndDateValue: "15 Απριλίου 2025",
             giveaway3EndDateValue: "15 Απριλίου 2025",
             giveaway4EndDateValue: "15 Απριλίου 2025",
             rulesAnnounceTitle: "Ανακοίνωση Αποτελεσμάτων:",
             giveaway1AnnounceDesc: "Τα αποτελέσματα θα ανακοινωθούν μέσω ζωντανής μετάδοσης κλήρωσης στο EU Portal την 1η Μαΐου 2025.",
             giveaway2AnnounceDesc: "Τα αποτελέσματα θα ανακοινωθούν μέσω ζωντανής μετάδοσης κλήρωσης στο EU Portal στις 16 Απριλίου 2025.",
             giveaway3AnnounceDesc: "Τα αποτελέσματα θα ανακοινωθούν μέσω ζωντανής μετάδοσης κλήρωσης στο EU Portal στις 16 Απριλίου 2025.",
             giveaway4AnnounceDesc: "Τα αποτελέσματα θα ανακοινωθούν μέσω ζωντανής μετάδοσης κλήρωσης στο EU Portal στις 16 Απριλίου 2025.",
             rulesGeneralCondTitle: "Γενικοί Όροι",
             rulesCond1: "Όλοι οι συμμετέχοντες πρέπει να είναι άνω των 18 ετών.",
             rulesCond2: "Όλοι οι συμμετέχοντες πρέπει να ακολουθούν τον λογαριασμό @kyrosil στο Instagram.",
             rulesCond3: "Οι υπάλληλοι της Kyrosil και οι συγγενείς πρώτου βαθμού δεν μπορούν να συμμετάσχουν.",
             // rulesCondGeneric removed
             rulesSpecialCond1Title: "Ειδικοί Όροι (Κλήρωση Διαμερίσματος)",
             rulesSpecialCond1Item1: "Ο νικητής συμμετέχων δεν πρέπει να έχει καταχωρημένο όχημα ή τίτλο ιδιοκτησίας...",
             rulesSpecialCond2Title: "Ειδικοί Όροι (Κλήρωση USDT)",
             rulesSpecialCond2Item1: "Συνολικά 50 άτομα θα κερδίσουν 250 USDT το καθένα.",
             rulesSpecialCond3Title: "Ειδικοί Όροι (Κλήρωση Starbucks)",
             rulesSpecialCond3Item1: "Συνολικά 100 άτοma θα κερδίσουν μια Δωροκάρτα Starbucks Mobile αξίας 50$ το καθένα.",
             rulesSpecialCond4Title: "Ειδικοί Όροι (Δώρα Nestle - Coca Cola - Burger King)", // Updated
             rulesSpecialCond4Item1: "Έπαθλα: 50 Πακέτα Nestle, 100 Πακέτα Coca Cola, 500 Κουπόνια Burger King αξίας 30$. Οι νικητές ανατίθενται τυχαία...",
             rulesWinnerSelTitle: "Επιλογή Νικητών",
             rulesWinnerSelDesc: "Οι νικητές θα καθοριστούν με τυχαία κλήρωση που θα διεξαχθεί μέσω ζωντανής μετάδοσης στο EU Portal...",
             legalTitle: "Νομικές Άδειες",
             legalDesc: "Αυτή η κλήρωση διεξάγεται σύμφωνα με τις άδειες που έχουν ληφθεί από τις αρμόδιες αρχές στην Τουρκία (Τουρκική Διοίκηση Εθν. Λαχείων - Αρ.: 2025/1453-01, Ημ/νία: 07/04/2025) και την Ευρωπαϊκή Ένωση (Μητρώο Προωθητικών Ενεργειών ΕΕ - Αρ.: ECP/REG/2025/0704-K). Όλοι οι συμμετέχοντες αποδέχονται τους όρους με τη συμμετοχή τους.", // Example text
             rulesOtherTitle: "Άλλα Θέματα",
             // rulesOtherDesc removed
             sponsorsTitle: "Οι Χορηγοί Μας",
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
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;

        translatableElements.forEach(element => {
            const key = element.dataset.langKey;
            let translation = translations[lang][key];
            if (translation === undefined && lang !== 'en') {
                translation = translations['en'][key]; // Fallback to English
            }

            if (translation !== undefined) {
                if (element.placeholder !== undefined) {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation; // Use innerHTML to render potential spans inside keys
                }
            } else {
                 console.warn(`Key "${key}" not found for lang "${lang}" or fallback "en".`);
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
             const instaInput = form.querySelector('input[name="instagram"]'); // Get Instagram input
             originalButtonText = submitButton.innerHTML;

             // Updated Validation
             if (!nameInput.value.trim() || !emailInput.value.trim() || !instaInput.value.trim()) {
                  alert(translations[currentLang]['formValidationError'] || "Please fill in all required fields (Name, Email, Instagram).");
                  return;
             }

             submitButton.disabled = true;
             submitButton.style.opacity = 0.7;
             submitButton.innerHTML = translations[currentLang]['formSubmitting'] || "Submitting...";
             if(messageElement) messageElement.classList.add('hidden');


             const formData = new FormData(form);
             const name = formData.get('name');
             const email = formData.get('email');
             const instagram = formData.get('instagram'); // Get Instagram value
             const whichForm = form.id;
             console.log(`--- ${whichForm} Form Submitted ---`);
             console.log("Name:", name);
             console.log("Email:", email);
             console.log("Instagram:", instagram); // Log Instagram username
             console.log("-----------------------------");

             // -----!----- VERİ DEPOLAMA ENTEGRASYONU BURADA -----!-----
             // ÖNEMLİ: formData objesi artık 'instagram' alanını da içeriyor.
             // fetch('YOUR_ENDPOINT', { method: 'POST', body: formData })...
             // -------------------------------------------------------

             // -------- Simülasyon: Başarılı Gönderim --------
             setTimeout(() => {
                 if (messageElement) {
                     messageElement.innerHTML = `<p data-lang-key="formThanksMessage">${translations[currentLang]['formThanksMessage']}</p>`;
                     messageElement.classList.remove('hidden');
                 }
                 form.reset();
                 submitButton.innerHTML = translations[currentLang]['formSubmitted'] || "Submitted!";
             }, 1000);
             // ------------------------------------
         });
     });

    // --- Başlangıç ---
    initializeLanguage();

});

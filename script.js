document.addEventListener('DOMContentLoaded', () => {

    // =================================================================================
    // ÇEVİRİ OBJESİ - SİTEDEKİ TÜM METİNLER BURADA (TÜM DİLLER TAMAMLANDI)
    // =================================================================================
    const translations = {
        // English (Fully Translated)
        en: {
            pageTitle: "Kyrosil Big Summer Giveaway",
            pageTitleGiveaway1: "Grand Prize: €25,000 in Bitcoin - Kyrosil",
            pageTitleGiveaway2: "Athens Dream Holiday - Kyrosil",
            pageTitleGiveaway3: "AUDI A8 Usage Right - Kyrosil",
            pageTitleGiveaway4: "Bodrum Holiday - Kyrosil",
            pageTitleGiveaway5: "€500 in Bitcoin Prize - Kyrosil",
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
            formNameLabel: "Full Name:",
            formEmailLabel: "Email Address:",
            formUsernameLabel: "EU Portal / Instagram Username:",
            formSubmitButton: "Enter Giveaway",
            formSubmittingButton: "Submitting...",
            formSuccessMessage: "You have successfully entered the giveaway! Good luck!",
            formValidationMessage: "Please fill in all required fields.",
            countdownLabel: "Time left to enter:",
            countdownEnded: "This giveaway has ended!",
            days: "Days", hours: "Hours", minutes: "Mins", seconds: "Secs",
            rulesStartDateValue: "July 15, 2025",
            rulesEndDateValue: "July 31, 2025",
            announceDesc: "Results will be announced on August 1, 2025, via a live broadcast with a notary present.",
            rulesCond1: "All participants must be over 18 years of age.",
            rulesCond2: "All participants must follow the @kyrosil EU Portal or Instagram account.",
            rulesCond3: "Kyrosil employees and their first-degree relatives cannot participate.",
            rulesWinnerSelDesc: "The winner will be determined by a random draw conducted in a live broadcast open to all participants after the closing date, in the presence of a notary.",
            legalDesc: "This giveaway is organized under the permissions obtained from the relevant authorities in the Republic of Turkey (National Lottery Administration - Permit No: 2025/991283-01, Date: 14/07/2025) and the European Union (EU Promotion Records - Ref: ECP/REG/2025/1407-K4). All participants are deemed to have accepted the terms by entering.",
            g1_mainTitle: "Grand Prize: €25,000 in Bitcoin",
            g1_prizeDesc: "Bitcoin equivalent to <strong>€25,000</strong> based on the exchange rate on the day of the draw. It will be transferred directly and free of charge to the digital wallet address specified by the winner. All taxes and transfer fees will be covered by Kyrosil.",
            g1_specialCondTitle: "Specific Conditions for this Giveaway",
            g1_specialCond1: "The winner must provide a valid digital wallet (Bitcoin) address for the transfer of the prize.",
            g1_specialCond2: "Responsibility for the provided wallet address lies entirely with the winner.",
            g2_mainTitle: "Athens Dream Holiday",
            g2_prizeDesc: "<strong>Sponsor: Turkish Airlines.</strong> Includes round-trip airline tickets, 6 nights and 7 days accommodation in a 5-star hotel in the city center, and travel health insurance. For winners subject to a visa, the entire visa process will be managed by Kyrosil and concluded free of charge within 72 hours via the Jet Visa system.",
            g2_specialCondTitle: "Specific Conditions for this Giveaway",
            g2_specialCond1: "Visa procedures for winning contestants from visa-requiring countries will be managed by the sponsor.",
            g2_specialCond2: "Travel dates will be determined jointly with the winner, according to THY and hotel availability.",
            g3_mainTitle: "1 Month AUDI A8 Usage Right",
            g3_prizeDesc: "<strong>Sponsor: AUDI.</strong> The right to use a latest model AUDI A8 for 30 days, with all taxes and insurance paid. The vehicle will be temporarily delivered to the winner with a notarized contract.",
            g3_specialCondTitle: "Specific Conditions for this Giveaway",
            g3_specialCond1: "The winner must be 25 years of age or older.",
            g3_specialCond2: "The winner must have at least a 3-year B-class driver's license.",
            g3_specialCond3: "The vehicle is delivered temporarily via a notarized contract and can also be used by the winner's family members.",
            g4_mainTitle: "4-Day All-Inclusive Holiday in Bodrum",
            g4_prizeDesc: "3 nights and 4 days full-board accommodation in a 4-star hotel in Bodrum. The prize also includes round-trip airline tickets and airport transfers.",
            g4_specialCondTitle: "Specific Conditions for this Giveaway",
            g4_specialCond1: "Travel dates will be determined jointly with the winner, according to hotel and flight availability.",
            g4_specialCond2: "Subject to availability, an additional invitation may be offered for a companion of the winner.",
            g5_mainTitle: "€500 in Bitcoin (100 Winners)",
            g5_prizeDesc: "For 100 winners, Bitcoin equivalent to <strong>€500</strong> each, based on the exchange rate on the day of the draw. Prizes will be sent to the winners' digital wallet addresses seamlessly and free of charge.",
            g5_specialCondTitle: "Specific Conditions for this Giveaway",
            g5_specialCond1: "The winner must provide a valid digital wallet (Bitcoin) address for the transfer of the prize.",
            g5_specialCond2: "Responsibility for the provided wallet address lies entirely with the winner.",
            footerRights: "© 2025 Kyrosil. All rights reserved.",
            footerTnc: "T&C apply.",
            hashtags: "#Kyrosil #Giveaway #BigGiveaway #Bitcoin #Audi #THY #Athens #Bodrum #Holiday #Prize"
        },
        // Turkish (Fully Translated)
        tr: {
            pageTitle: "Kyrosil Büyük Yaz Çekilişi",
            pageTitleGiveaway1: "Büyük Ödül: €25.000 Bitcoin - Kyrosil",
            pageTitleGiveaway2: "Atina'da Rüya Gibi Tatil - Kyrosil",
            pageTitleGiveaway3: "AUDI A8 Kullanım Hakkı - Kyrosil",
            pageTitleGiveaway4: "Bodrum'da Tatil - Kyrosil",
            pageTitleGiveaway5: "€500 Bitcoin Ödülü - Kyrosil",
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
            formNameLabel: "Ad-Soyad:",
            formEmailLabel: "E-posta Adresi:",
            formUsernameLabel: "EU Portal / Instagram Kullanıcı Adı:",
            formSubmitButton: "Çekilişe Katıl",
            formSubmittingButton: "Gönderiliyor...",
            formSuccessMessage: "Çekilişe başarıyla katıldınız! Bol şans!",
            formValidationMessage: "Lütfen tüm gerekli alanları doldurunuz.",
            countdownLabel: "Kalan Süre:",
            countdownEnded: "Bu çekiliş sona erdi!",
            days: "Gün", hours: "Saat", minutes: "Dakika", seconds: "Saniye",
            rulesStartDateValue: "15 Temmuz 2025",
            rulesEndDateValue: "31 Temmuz 2025",
            announceDesc: "Sonuçlar, 1 Ağustos 2025'te noter huzurunda yapılacak canlı yayın ile duyurulacaktır.",
            rulesCond1: "Tüm katılımcıların 18 yaşından büyük olması gerekmektedir.",
            rulesCond2: "Tüm katılımcıların @kyrosil EU Portal veya Instagram hesabını takip etmesi gerekmektedir.",
            rulesCond3: "Kyrosil çalışanları ve birinci dereceden yakınları çekilişe katılamaz.",
            rulesWinnerSelDesc: "Kazanan, son katılım tarihinden sonra yapılacak olan ve tüm katılımcılara açık canlı yayında, noter huzurunda rastgele çekilişle belirlenecektir.",
            legalDesc: "Bu çekiliş, Türkiye Cumhuriyeti (Milli Piyango İdaresi - İzin No: 2025/991283-01, Tarih: 14/07/2025) ve Avrupa Birliği'ndeki (AB Promosyon Kayıtları - Ref: ECP/REG/2025/1407-K4) ilgili mercilerden alınan izinler dahilinde düzenlenmektedir. Tüm katılımcılar katılarak şartları kabul etmiş sayılırlar.",
            g1_mainTitle: "Büyük Ödül: €25.000 Değerinde Bitcoin",
            g1_prizeDesc: "Çekiliş günündeki güncel kur baz alınarak <strong>€25.000</strong> karşılığı Bitcoin. Kazananın belirteceği dijital cüzdan adresine doğrudan ve masrafsız transfer edilecektir. Tüm vergiler ve transfer işlem ücretleri Kyrosil tarafından karşılanacaktır.",
            g1_specialCondTitle: "Bu Çekilişe Özel Koşullar",
            g1_specialCond1: "Kazananın, ödülün transferi için geçerli bir dijital cüzdan (Bitcoin) adresi bildirmesi zorunludur.",
            g1_specialCond2: "Belirtilen cüzdan adresinin sorumluluğu tamamen kazanana aittir.",
            g2_mainTitle: "Atina'da Rüya Gibi Tatil",
            g2_prizeDesc: "<strong>Sponsor: Türk Hava Yolları.</strong> Gidiş-dönüş uçak biletleri, şehir merkezinde 5 yıldızlı otelde 6 gece 7 gün konaklama ve seyahat sağlık sigortası dahildir. Vizeye tabi kazananlar için tüm vize süreci Kyrosil tarafından yönetilecek ve Jet Vize sistemiyle 72 saatte ücretsiz sonuçlandırılacaktır.",
            g2_specialCondTitle: "Bu Çekilişe Özel Koşullar",
            g2_specialCond1: "Vizeye tabi ülkelerden kazanan yarışmacıların vize süreçleri sponsor tarafından yönetilecektir.",
            g2_specialCond2: "Seyahat tarihleri, kazanan ile THY ve otel müsaitlik durumuna göre ortaklaşa belirlenecektir.",
            g3_mainTitle: "1 Ay Boyunca AUDI A8 Kullanım Hakkı",
            g3_prizeDesc: "<strong>Sponsor: AUDI.</strong> 30 gün boyunca tüm vergileri ve sigortaları ödenmiş, son model bir AUDI A8 kullanım hakkı. Araç, kazanan kişiye noter sözleşmesi ile geçici olarak teslim edilecektir.",
            g3_specialCondTitle: "Bu Çekilişe Özel Koşullar",
            g3_specialCond1: "Kazananın 25 yaş ve üzeri olması gerekmektedir.",
            g3_specialCond2: "Kazananın en az 3 yıllık B sınıfı ehliyete sahip olması gerekmektedir.",
            g3_specialCond3: "Araç, noter sözleşmesi ile geçici olarak teslim edilir ve kazananın aile bireyleri tarafından da kullanılabilir.",
            g4_mainTitle: "Bodrum'da 4 Gün Her Şey Dahil Tatil",
            g4_prizeDesc: "Bodrum'da 4 yıldızlı bir otelde 3 gece 4 gün boyunca tam pansiyon konaklama. Ödüle gidiş-dönüş uçak biletleri ve havalimanı transferleri de dahildir.",
            g4_specialCondTitle: "Bu Çekilişe Özel Koşullar",
            g4_specialCond1: "Seyahat tarihleri, kazanan ile otel ve uçuş müsaitlik durumuna göre ortaklaşa belirlenecektir.",
            g4_specialCond2: "Kontenjan uygunluğuna bağlı olarak, kazananın bir refakatçi getirmesi için ek davetiye imkanı sunulabilir.",
            g5_mainTitle: "€500 Değerinde Bitcoin (100 Kişi)",
            g5_prizeDesc: "100 kişiye, her bir kazanan için çekiliş günündeki kurdan <strong>€500</strong> karşılığı Bitcoin. Ödüller, kazananların dijital cüzdan adresine kesintisiz ve masrafsız olarak gönderilecektir.",
            g5_specialCondTitle: "Bu Çekilişe Özel Koşullar",
            g5_specialCond1: "Kazananın, ödülün transferi için geçerli bir dijital cüzdan (Bitcoin) adresi bildirmesi zorunludur.",
            g5_specialCond2: "Belirtilen cüzdan adresinin sorumluluğu tamamen kazanana aittir.",
            footerRights: "© 2025 Kyrosil. Tüm hakları saklıdır.",
            footerTnc: "T&Ş geçerlidir.",
            hashtags: "#Kyrosil #Çekiliş #BüyükÇekiliş #Bitcoin #Audi #THY #Atina #Bodrum #Tatil #Hediye"
        },
        // French (Fully Translated)
        fr: {
            pageTitle: "Grand Tirage d'Été Kyrosil",
            pageTitleGiveaway1: "Grand Prix : 25 000 € en Bitcoin - Kyrosil",
            pageTitleGiveaway2: "Vacances de Rêve à Athènes - Kyrosil",
            pageTitleGiveaway3: "Droit d'Usage AUDI A8 - Kyrosil",
            pageTitleGiveaway4: "Séjour à Bodrum - Kyrosil",
            pageTitleGiveaway5: "Prix de 500 € en Bitcoin - Kyrosil",
            mainHeading: "☀️ Le Grand Tirage d'Été Kyrosil a Commencé ! ☀️",
            sponsorsTitle: "Nos Sponsors & Partenaires",
            indexChoiceTitle: "Choisissez Votre Tirage!",
            indexPrize1Title: "Grand Prix : 25 000 € en Bitcoin",
            indexPrize2Title: "Vacances de Rêve à Athènes (5 Gagnants)",
            indexPrize3Title: "1 Mois d'Usage d'AUDI A8 (5 Gagnants)",
            indexPrize4Title: "Séjour à Bodrum (50 Gagnants)",
            indexPrize5Title: "500 € en Bitcoin (100 Gagnants)",
            viewGiveawayButton: "Voir le Tirage",
            indexRulesLink: "Voir les Conditions Générales",
            detailBackButton: "&larr; Retour à Tous les Tirages",
            detailPrizeTitle: "Détails du Prix",
            participationTitle: "Participer au Tirage",
            rulesTitle: "Conditions Générales et Informations",
            rulesScheduleTitle: "Calendrier du Tirage",
            rulesStartDateLabel: "Début :",
            rulesEndDateLabel: "Fin :",
            rulesAnnounceTitle: "Annonce des Résultats :",
            rulesGeneralCondTitle: "Règles Générales de Participation",
            rulesWinnerSelTitle: "Sélection du Gagnant",
            legalTitle: "Autorisations Légales",
            formNameLabel: "Nom et Prénom :",
            formEmailLabel: "Adresse E-mail :",
            formUsernameLabel: "Nom d'utilisateur EU Portal / Instagram :",
            formSubmitButton: "Participer",
            formSubmittingButton: "Envoi en cours...",
            formSuccessMessage: "Votre participation a été enregistrée avec succès ! Bonne chance !",
            formValidationMessage: "Veuillez remplir tous les champs obligatoires.",
            countdownLabel: "Temps restant :",
            countdownEnded: "Ce tirage est terminé !",
            days: "Jours", hours: "Heures", minutes: "Min", seconds: "Sec",
            rulesStartDateValue: "15 Juillet 2025",
            rulesEndDateValue: "31 Juillet 2025",
            announceDesc: "Les résultats seront annoncés le 1er août 2025, via une diffusion en direct en présence d'un notaire.",
            rulesCond1: "Tous les participants doivent avoir plus de 18 ans.",
            rulesCond2: "Tous les participants doivent suivre le compte @kyrosil sur le Portail EU ou Instagram.",
            rulesCond3: "Les employés de Kyrosil et leurs parents au premier degré ne peuvent pas participer.",
            rulesWinnerSelDesc: "Le gagnant sera déterminé par un tirage au sort effectué en direct, ouvert à tous les participants après la date de clôture, en présence d'un notaire.",
            legalDesc: "Ce tirage au sort est organisé sous les autorisations obtenues des autorités compétentes de la République de Turquie (Administration de la Loterie Nationale - Permis N°: 2025/991283-01, Date: 14/07/2025) et de l'Union Européenne (Registres des Promotions de l'UE - Réf: ECP/REG/2025/1407-K4). Tous les participants sont réputés avoir accepté les termes en participant.",
            g1_mainTitle: "Grand Prix : 25 000 € en Bitcoin",
            g1_prizeDesc: "Équivalent en Bitcoin de <strong>25 000 €</strong> basé sur le taux de change le jour du tirage. Il sera transféré directement et sans frais à l'adresse de portefeuille numérique spécifiée par le gagnant. Toutes les taxes et frais de transfert seront couverts par Kyrosil.",
            g1_specialCondTitle: "Conditions Spécifiques à ce Tirage",
            g1_specialCond1: "Le gagnant doit fournir une adresse de portefeuille numérique (Bitcoin) valide pour le transfert du prix.",
            g1_specialCond2: "La responsabilité de l'adresse de portefeuille fournie incombe entièrement au gagnant.",
            g2_mainTitle: "Vacances de Rêve à Athènes",
            g2_prizeDesc: "<strong>Sponsor : Turkish Airlines.</strong> Comprend les billets d'avion aller-retour, 6 nuits et 7 jours d'hébergement dans un hôtel 5 étoiles en centre-ville, et une assurance santé voyage. Pour les gagnants soumis à un visa, l'ensemble du processus de visa sera géré par Kyrosil et conclu gratuitement dans les 72 heures via le système Jet Visa.",
            g2_specialCondTitle: "Conditions Spécifiques à ce Tirage",
            g2_specialCond1: "Les procédures de visa pour les gagnants des pays nécessitant un visa seront gérées par le sponsor.",
            g2_specialCond2: "Les dates de voyage seront déterminées conjointement avec le gagnant, selon la disponibilité de THY et de l'hôtel.",
            g3_mainTitle: "1 Mois d'Usage d'AUDI A8",
            g3_prizeDesc: "<strong>Sponsor : AUDI.</strong> Le droit d'utiliser une AUDI A8 dernier modèle pendant 30 jours, avec toutes les taxes et assurances payées. Le véhicule sera temporairement livré au gagnant avec un contrat notarié.",
            g3_specialCondTitle: "Conditions Spécifiques à ce Tirage",
            g3_specialCond1: "Le gagnant doit avoir 25 ans ou plus.",
            g3_specialCond2: "Le gagnant doit détenir un permis de conduire de classe B depuis au moins 3 ans.",
            g3_specialCond3: "Le véhicule est livré temporairement via un contrat notarié et peut également être utilisé par les membres de la famille du gagnant.",
            g4_mainTitle: "Séjour de 4 Jours Tout Compris à Bodrum",
            g4_prizeDesc: "3 nuits et 4 jours d'hébergement en pension complète dans un hôtel 4 étoiles à Bodrum. Le prix comprend également les billets d'avion aller-retour et les transferts aéroport.",
            g4_specialCondTitle: "Conditions Spécifiques à ce Tirage",
            g4_specialCond1: "Les dates de voyage seront déterminées conjointement avec le gagnant, selon la disponibilité de l'hôtel et des vols.",
            g4_specialCond2: "Sous réserve de disponibilité, une invitation supplémentaire peut être offerte pour un accompagnant du gagnant.",
            g5_mainTitle: "500 € en Bitcoin (100 Gagnants)",
            g5_prizeDesc: "Pour 100 gagnants, un équivalent en Bitcoin de <strong>500 €</strong> chacun, basé sur le taux de change le jour du tirage. Les prix seront envoyés aux adresses de portefeuille numérique des gagnants de manière transparente et sans frais.",
            g5_specialCondTitle: "Conditions Spécifiques à ce Tirage",
            g5_specialCond1: "Le gagnant doit fournir une adresse de portefeuille numérique (Bitcoin) valide pour le transfert du prix.",
            g5_specialCond2: "La responsabilité de l'adresse de portefeuille fournie incombe entièrement au gagnant.",
            footerRights: "© 2025 Kyrosil. Tous droits réservés.",
            footerTnc: "T&C s'appliquent.",
            hashtags: "#Kyrosil #TirageAuSort #GrandTirage #Bitcoin #Audi #THY #Athenes #Bodrum #Vacances #Prix"
        },
        // Greek (Fully Translated)
        el: {
            pageTitle: "Μεγάλη Καλοκαιρινή Κλήρωση Kyrosil",
            pageTitleGiveaway1: "Μεγάλο Έπαθλο: 25.000 € σε Bitcoin - Kyrosil",
            pageTitleGiveaway2: "Ονειρεμένες Διακοπές στην Αθήνα - Kyrosil",
            pageTitleGiveaway3: "Δικαίωμα Χρήσης AUDI A8 - Kyrosil",
            pageTitleGiveaway4: "Διακοπές στο Μπόντρουμ - Kyrosil",
            pageTitleGiveaway5: "Έπαθλο 500 € σε Bitcoin - Kyrosil",
            mainHeading: "☀️ Η Μεγάλη Καλοκαιρινή Κλήρωση της Kyrosil Ξεκίνησε! ☀️",
            sponsorsTitle: "Οι Χορηγοί & Υποστηρικτές Μας",
            indexChoiceTitle: "Επιλέξτε την Κλήρωσή σας!",
            indexPrize1Title: "Μεγάλο Έπαθλο: 25.000 € σε Bitcoin",
            indexPrize2Title: "Ονειρεμένες Διακοπές στην Αθήνα (5 Νικητές)",
            indexPrize3Title: "1 Μήνας Χρήσης AUDI A8 (5 Νικητές)",
            indexPrize4Title: "Διακοπές στο Μπόντρουμ (50 Νικητές)",
            indexPrize5Title: "500 € σε Bitcoin (100 Νικητές)",
            viewGiveawayButton: "Προβολή Κλήρωσης",
            indexRulesLink: "Δείτε τους Γενικούς Όρους",
            detailBackButton: "&larr; Πίσω σε Όλες τις Κληρώσεις",
            detailPrizeTitle: "Λεπτομέρειες Επάθλου",
            participationTitle: "Λάβετε Μέρος στην Κλήρωση",
            rulesTitle: "Γενικοί Όροι και Πληροφορίες",
            rulesScheduleTitle: "Πρόγραμμα Κλήρωσης",
            rulesStartDateLabel: "Έναρξη:",
            rulesEndDateLabel: "Λήξη:",
            rulesAnnounceTitle: "Ανακοίνωση Αποτελεσμάτων:",
            rulesGeneralCondTitle: "Γενικοί Κανόνες Συμμετοχής",
            rulesWinnerSelTitle: "Επιλογή Νικητή",
            legalTitle: "Νομικές Άδειες",
            formNameLabel: "Ονοματεπώνυμο:",
            formEmailLabel: "Διεύθυνση Email:",
            formUsernameLabel: "Όνομα χρήστη EU Portal / Instagram:",
            formSubmitButton: "Συμμετοχή",
            formSubmittingButton: "Υποβολή...",
            formSuccessMessage: "Η συμμετοχή σας καταχωρήθηκε επιτυχώς! Καλή τύχη!",
            formValidationMessage: "Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία.",
            countdownLabel: "Χρόνος που απομένει:",
            countdownEnded: "Αυτή η κλήρωση έχει λήξει!",
            days: "Μέρες", hours: "Ώρες", minutes: "Λεπτά", seconds: "Δευτ.",
            rulesStartDateValue: "15 Ιουλίου 2025",
            rulesEndDateValue: "31 Ιουλίου 2025",
            announceDesc: "Τα αποτελέσματα θα ανακοινωθούν την 1η Αυγούστου 2025, μέσω ζωντανής μετάδοσης παρουσία συμβολαιογράφου.",
            rulesCond1: "Όλοι οι συμμετέχοντες πρέπει να είναι άνω των 18 ετών.",
            rulesCond2: "Όλοι οι συμμετέχοντες πρέπει να ακολουθούν τον λογαριασμό @kyrosil στο EU Portal ή στο Instagram.",
            rulesCond3: "Οι υπάλληλοι της Kyrosil και οι συγγενείς πρώτου βαθμού δεν μπορούν να συμμετάσχουν.",
            rulesWinnerSelDesc: "Ο νικητής θα καθοριστεί με τυχαία κλήρωση που θα διεξαχθεί σε ζωντανή μετάδοση, ανοιχτή σε όλους τους συμμετέχοντες μετά την ημερομηνία λήξης, παρουσία συμβολαιογράφου.",
            legalDesc: "Αυτή η κλήρωση διοργανώνεται υπό τις άδειες που έχουν ληφθεί από τις αρμόδιες αρχές της Δημοκρατίας της Τουρκίας (Διοίκηση Εθνικού Λαχείου - Άδεια Αρ.: 2025/991283-01, Ημερομηνία: 14/07/2025) και της Ευρωπαϊκής Ένωσης (Μητρώα Προωθητικών Ενεργειών της ΕΕ - Αναφ.: ECP/REG/2025/1407-K4). Όλοι οι συμμετέχοντες θεωρείται ότι αποδέχονται τους όρους με τη συμμετοχή τους.",
            g1_mainTitle: "Μεγάλο Έπαθλο: 25.000 € σε Bitcoin",
            g1_prizeDesc: "Ισοδύναμο σε Bitcoin <strong>25.000 €</strong> με βάση την ισοτιμία την ημέρα της κλήρωσης. Θα μεταφερθεί απευθείας και χωρίς χρέωση στη διεύθυνση ψηφιακού πορτοφολιού που θα υποδείξει ο νικητής. Όλοι οι φόροι και τα τέλη μεταφοράς θα καλυφθούν από την Kyrosil.",
            g1_specialCondTitle: "Ειδικοί Όροι για αυτή την Κλήρωση",
            g1_specialCond1: "Ο νικητής πρέπει να παράσχει μια έγκυρη διεύθυνση ψηφιακού πορτοφολιού (Bitcoin) για τη μεταφορά του επάθλου.",
            g1_specialCond2: "Η ευθύνη για την παρεχόμενη διεύθυνση πορτοφολιού ανήκει εξ ολοκλήρου στον νικητή.",
            g2_mainTitle: "Ονειρεμένες Διακοπές στην Αθήνα",
            g2_prizeDesc: "<strong>Χορηγός: Turkish Airlines.</strong> Περιλαμβάνει αεροπορικά εισιτήρια μετ' επιστροφής, διαμονή 6 διανυκτερεύσεων και 7 ημερών σε ξενοδοχείο 5 αστέρων στο κέντρο της πόλης και ταξιδιωτική ασφάλιση υγείας. Για τους νικητές που υπόκεινται σε βίζα, ολόκληρη η διαδικασία της βίζας θαจัดการ από την Kyrosil και θα ολοκληρωθεί δωρεάν εντός 72 ωρών μέσω του συστήματος Jet Visa.",
            g2_specialCondTitle: "Ειδικοί Όροι για αυτή την Κλήρωση",
            g2_specialCond1: "Οι διαδικασίες έκδοσης βίζας για τους νικητές από χώρες που απαιτούν βίζα θαจัดการ από τον χορηγό.",
            g2_specialCond2: "Οι ημερομηνίες του ταξιδιού θα καθοριστούν από κοινού με τον νικητή, ανάλογα με τη διαθεσιμότητα της THY και του ξενοδοχείου.",
            g3_mainTitle: "1 Μήνας Χρήσης AUDI A8",
            g3_prizeDesc: "<strong>Χορηγός: AUDI.</strong> Το δικαίωμα χρήσης ενός τελευταίου μοντέλου AUDI A8 για 30 ημέρες, με όλους τους φόρους και την ασφάλεια πληρωμένα. Το όχημα θα παραδοθεί προσωρινά στον νικητή με συμβολαιογραφική πράξη.",
            g3_specialCondTitle: "Ειδικοί Όροι για αυτή την Κλήρωση",
            g3_specialCond1: "Ο νικητής πρέπει να είναι 25 ετών και άνω.",
            g3_specialCond2: "Ο νικητής πρέπει να κατέχει άδεια οδήγησης κατηγορίας Β για τουλάχιστον 3 χρόνια.",
            g3_specialCond3: "Το όχημα παραδίδεται προσωρινά μέσω συμβολαιογραφικής πράξης και μπορεί επίσης να χρησιμοποιηθεί από τα μέλη της οικογένειας του νικητή.",
            g4_mainTitle: "4-ήμερες Διακοπές All-Inclusive στο Μπόντρουμ",
            g4_prizeDesc: "Διαμονή 3 διανυκτερεύσεων και 4 ημερών με πλήρη διατροφή σε ξενοδοχείο 4 αστέρων στο Μπόντρουμ. Το έπαθλο περιλαμβάνει επίσης αεροπορικά εισιτήρια μετ' επιστροφής και μεταφορές από/προς το αεροδρόμιο.",
            g4_specialCondTitle: "Ειδικοί Όροι για αυτή την Κλήρωση",
            g4_specialCond1: "Οι ημερομηνίες του ταξιδιού θα καθοριστούν από κοινού με τον νικητή, ανάλογα με τη διαθεσιμότητα του ξενοδοχείου και των πτήσεων.",
            g4_specialCond2: "Ανάλογα με τη διαθεσιμότητα, μπορεί να προσφερθεί επιπλέον πρόσκληση για έναν συνοδό του νικητή.",
            g5_mainTitle: "500 € σε Bitcoin (100 Νικητές)",
            g5_prizeDesc: "Για 100 νικητές, ισοδύναμο σε Bitcoin <strong>500 €</strong> ο καθένας, με βάση την ισοτιμία την ημέρα της κλήρωσης. Τα έπαθλα θα σταλούν στις διευθύνσεις ψηφιακών πορτοφολιών των νικητών απρόσκοπτα και χωρίς χρέωση.",
            g5_specialCondTitle: "Ειδικοί Όροι για αυτή την Κλήρωση",
            g5_specialCond1: "Ο νικητής πρέπει να παράσχει μια έγκυρη διεύθυνση ψηφιακού πορτοφολιού (Bitcoin) για τη μεταφορά του επάθλου.",
            g5_specialCond2: "Η ευθύνη για την παρεχόμενη διεύθυνση πορτοφολιού ανήκει εξ ολοκλήρου στον νικητή.",
            footerRights: "© 2025 Kyrosil. Με επιφύλαξη παντός δικαιώματος.",
            footerTnc: "Ισχύουν Όροι & Προϋποθέσεις.",
            hashtags: "#Kyrosil #Κλήρωση #ΜεγάληΚλήρωση #Bitcoin #Audi #THY #Αθήνα #Μπόντρουμ #Διακοπές #Έπαθλο"
        }
    };

    // =================================================================================
    // ANA FONKSİYONLAR
    // =================================================================================
    let currentLang = 'tr';
    
    function setLanguage(lang) {
        currentLang = translations[lang] ? lang : 'tr';
        document.documentElement.lang = currentLang;
        localStorage.setItem('preferredLanguage', lang);

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.dataset.langKey;
            const translation = translations[currentLang][key] || (translations['en'] ? translations['en'][key] : '');
            if (translation !== undefined) {
                element.innerHTML = translation;
            }
        });

        document.querySelectorAll('.language-switcher button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
        });
    }

    function startCountdown(elementId) {
        const countdownElement = document.getElementById(elementId);
        if (!countdownElement) return;

        const endDate = new Date("2025-07-31T23:59:59").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = endDate - now;

            if (distance < 0) {
                clearInterval(interval);
                countdownElement.innerHTML = `<span data-lang-key="countdownEnded">${translations[currentLang]['countdownEnded']}</span>`;
                return;
            }

            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `
                <span class="label" data-lang-key="countdownLabel">${translations[currentLang]['countdownLabel']}</span>
                <span class="value">${d}</span> <span data-lang-key="days">${translations[currentLang]['days']}</span>
                <span class="value">${h}</span> <span data-lang-key="hours">${translations[currentLang]['hours']}</span>
                <span class="value">${m}</span> <span data-lang-key="minutes">${translations[currentLang]['minutes']}</span>
                <span class="value">${s}</span> <span data-lang-key="seconds">${translations[currentLang]['seconds']}</span>
            `;
        }, 1000);
    }

    function initializeForms() {
        document.querySelectorAll('.participation-form').forEach(form => {
            const formId = form.id;
            const giveawayId = formId.split('-')[0];
            const successMessage = document.getElementById(`${giveawayId}-success-message`);
            const submitButton = form.querySelector('button[type="submit"]');

            if (localStorage.getItem(`${giveawayId}-entered`) === 'true') {
                form.style.display = 'none';
                successMessage.style.display = 'block';
                return;
            }

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const name = form.querySelector('input[name="name"]').value.trim();
                const email = form.querySelector('input[name="email"]').value.trim();
                const username = form.querySelector('input[name="username"]').value.trim();

                if (!name || !email || !username) {
                    alert(translations[currentLang]['formValidationMessage']);
                    return;
                }

                submitButton.disabled = true;
                submitButton.innerHTML = translations[currentLang]['formSubmittingButton'];

                setTimeout(() => {
                    form.style.display = 'none';
                    successMessage.style.display = 'block';
                    localStorage.setItem(`${giveawayId}-entered`, 'true');
                }, 750);
            });
        });
    }

    function initializePage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        const browserLang = navigator.language.split('-')[0];
        const initialLang = savedLang || (translations[browserLang] ? browserLang : 'tr');
        
        setLanguage(initialLang);
        initializeForms();
        document.querySelectorAll('.countdown-timer').forEach(timer => startCountdown(timer.id));
    }

    initializePage();
});

document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        // English (Default & Updated)
        en: {
            pageTitle: "Kyrosil Grand Giveaway",
            pageTitleGiveaway1: "2+1 Flat from ReziKyros Azure Kağıthane Project - Kyrosil", // This page is now a results page
            pageTitleGiveaway2: "USDT Giveaway Results - Kyrosil", 
            pageTitleGiveaway3: "Starbucks Giveaway Results - Kyrosil", 
            pageTitleGiveaway4: "Nestle - Coca Cola - Burger King Gifts Results - Kyrosil", 
            mainHeading: "✨ Kyrosil Grand Giveaway! ✨",
            indexChoiceTitle: "Choose Your Giveaway!",
            indexPrize1Title: "2+1 Flat from ReziKyros Azure Kağıthane Project",
            indexPrize2Title: "250 USDT x 50",
            indexPrize3Title: "$50 Starbucks Card x 100",
            indexPrize4Title: "Nestle - Coca Cola - Burger King Gifts",
            indexEnterButton: "Details & Enter",
            viewResultsButton: "View Results", 
            indexRulesLink: "See General Terms & Conditions",
            endDateVaries: "(End dates vary - see details)",
            detailBackButton: "&larr; Back to All Giveaways",
            detailPrizeTitle: "The Prize",
            detailFormTitle: "Enter the Draw!", 
            formDescGeneric: "You can enter this giveaway by filling out the information below. Please ensure you meet the entry requirements listed in the terms.", 
            prize1Title: "2+1 Flat from the ReziKyros Azure Kağıthane Project",
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
            giveaway1AnnounceDesc: "Results were announced via live broadcast draw on EU Portal on May 1, 2025. Winners are announced on this page.", // Updated for Giveaway 1 results page
            giveaway2AnnounceDesc: "Results were announced via live broadcast draw on EU Portal on April 16, 2025. Winners are listed above.", 
            giveaway3AnnounceDesc: "Results were announced via live broadcast draw on EU Portal on April 16, 2025. Winners are listed above.", 
            giveaway4AnnounceDesc: "Results were announced via live broadcast draw on EU Portal on April 16, 2025. Winners are listed above by prize category.", 
            rulesGeneralCondTitle: "General Conditions",
            rulesCond1: "All participants must be over 18 years of age.",
            rulesCond2: "All participants must follow the @kyrosil account on Instagram.",
            rulesCond3: "Kyrosil employees and their first-degree relatives cannot participate in the draw.",
            rulesSpecialCond1Title: "Specific Conditions (Flat Giveaway)",
            rulesSpecialCond1Item1: "The winning participant must not have any registered vehicle or property deed in their name as of the date the results are announced. This condition will be verified.",
            rulesSpecialCond2Title: "Specific Conditions (USDT Giveaway)",
            rulesSpecialCond2Item1: "A total of 50 people won 250 USDT each.", 
            rulesSpecialCond3Title: "Specific Conditions (Starbucks Giveaway)",
            rulesSpecialCond3Item1: "A total of 100 people won a $50 Starbucks Mobile Gift Card each.", 
            rulesSpecialCond4Title: "Specific Conditions (Nestle - Coca Cola - Burger King Gifts)",
            rulesSpecialCond4Item1: "Prizes awarded: 50 Nestle Packs, 100 Coca Cola Packs, 500 Burger King $30 Vouchers. Winners were randomly assigned to one prize category from the pool of entrants for this specific giveaway.", 
            rulesWinnerSelTitle: "Winner Selection",
            rulesWinnerSelDesc: "Winners were determined by a random draw conducted via live broadcast on the EU Portal on the specified announcement date.", 
            legalTitle: "Legal Permissions",
            legalDesc: "This giveaway was conducted under the permissions obtained from the relevant authorities in Turkey (Turkish National Lottery Admin. - Permit No: 2025/1453-01, Date: 07/04/2025) and the European Union (EU Registry of Promotions - Ref: ECP/REG/2025/0704-K). All participants accept the terms by entering.", 
            rulesOtherTitle: "Other Matters",
            sponsorsTitle: "Our Sponsors",
            footerRights: "© 2025 Kyrosil. All rights reserved.",
            footerTnc: "T&C apply.",
            // --- GIVEAWAY 1 RESULTS PAGE TEXTS (NEW) ---
            giveawayEndedTitle: "The Grand Prize Has Found Its Owner!",
            giveawayThanksAll: "Our draw has concluded. Thank you to everyone who participated!",
            giveawayWinnerMainLabel: "Winner:",
            giveawayWinnerMainName: "METİN ŞAHLI / İZMİR", // Specific winner name
            giveawayWinnerBackupLabel: "Runner-up:",
            giveawayWinnerBackupName: "GAMZE İNAL / İSTANBUL", // Specific runner-up name
            giveawayCongratsMessage: "Congratulations to our winning contestants!",
            giveawayStayTuned: "Stay tuned for our new campaigns!",
            // --- OTHER RESULTS PAGE TEXTS ---
            resultsTitle: "Giveaway Results",
            resultsSummary2: "Congratulations to the 50 lucky winners below, each receiving 250 USDT!", 
            resultsSummary3: "Congratulations to the 100 lucky winners below, each receiving a $50 Starbucks Mobile Gift Card!", 
            winnersListTitle: "Winners List:",
            resultsContact: "Winners will be contacted via the email address provided during entry. Congratulations to all!",
            resultsNestleTitle: "Nestle Happiness Pack Winners (50 People)", 
            resultsCokeTitle: "Coca Cola Happiness Pack Winners (100 People)", 
            resultsBkTitle: "Burger King $30 Voucher Winners (500 People)" 
        },
        // Türkçe (Tamamlandı ve Güncellendi)
        tr: {
             pageTitle: "Kyrosil Büyük Çekiliş",
             pageTitleGiveaway1: "ReziKyros Azure Kağıthane Projesinden 2+1 Daire Sonuçları - Kyrosil", // Güncellendi (Sonuç sayfası)
             pageTitleGiveaway2: "USDT Çekiliş Sonuçları - Kyrosil", 
             pageTitleGiveaway3: "Starbucks Çekiliş Sonuçları - Kyrosil", 
             pageTitleGiveaway4: "Nestle - Coca Cola - Burger King Hediye Sonuçları - Kyrosil", 
             mainHeading: "✨ Kyrosil Büyük Çekiliş! ✨",
             indexChoiceTitle: "Çekilişini Seç!",
             indexPrize1Title: "ReziKyros Azure Kağıthane Projesinden 2+1 Daire",
             indexPrize2Title: "250 USDT x 50",
             indexPrize3Title: "50$ Starbucks Kart x 100",
             indexPrize4Title: "Nestle - Coca Cola - Burger King Hediyeleri",
             indexEnterButton: "Detaylar & Katıl",
             viewResultsButton: "Sonuçları Gör", 
             indexRulesLink: "Genel Katılım Şartları ve Koşulları Gör",
             endDateVaries: "(Bitiş tarihleri farklıdır - detaylara bakın)",
             detailBackButton: "&larr; Tüm Çekilişlere Geri Dön",
             detailPrizeTitle: "Ödül",
             detailFormTitle: "Çekilişe Katıl!",
             formDescGeneric: "Bu çekilişe aşağıdaki bilgileri doldurarak katılabilirsiniz. Lütfen katılım şartlarını sağladığınızdan emin olun.",
             prize1Title: "ReziKyros Azure Kağıthane Projesinden 2+1 Daire",
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
             giveaway1AnnounceDesc: "Sonuçlar 1 Mayıs 2025 tarihinde EU Portal'da yapılan canlı yayın çekilişi ile açıklandı. Kazananlar bu sayfada duyurulmuştur.", // Güncellendi (Çekiliş 1 sonuç sayfası)
             giveaway2AnnounceDesc: "Sonuçlar 16 Nisan 2025 tarihinde EU Portal'da yapılan canlı yayın çekilişi ile açıklandı. Kazananlar yukarıda listelenmiştir.", 
             giveaway3AnnounceDesc: "Sonuçlar 16 Nisan 2025 tarihinde EU Portal'da yapılan canlı yayın çekilişi ile açıklandı. Kazananlar yukarıda listelenmiştir.", 
             giveaway4AnnounceDesc: "Sonuçlar 16 Nisan 2025 tarihinde EU Portal'da yapılan canlı yayın çekilişi ile açıklandı. Kazananlar ödül kategorisine göre yukarıda listelenmiştir.", 
             rulesGeneralCondTitle: "Genel Şartlar",
             rulesCond1: "Tüm katılımcıların 18 yaşından büyük olması gerekmektedir.",
             rulesCond2: "Tüm katılımcıların Instagram'da @kyrosil hesabını takip etmesi gerekmektedir.",
             rulesCond3: "Kyrosil çalışanları ve birinci derece yakınları çekilişe katılamaz.",
             rulesSpecialCond1Title: "Özel Şartlar (Daire Çekilişi)",
             rulesSpecialCond1Item1: "Kazanan talihlinin üzerine çekiliş sonuçlarının açıklandığı tarih itibarıyla herhangi bir araç veya tapu kaydı bulunmaması gerekmektedir. Bu durumun kontrolü yapılacaktır.",
             rulesSpecialCond2Title: "Özel Şartlar (USDT Çekilişi)",
             rulesSpecialCond2Item1: "Bu çekilişte toplam 50 kişi, kişi başı 250 USDT kazandı.", 
             rulesSpecialCond3Title: "Özel Şartlar (Starbucks Çekilişi)",
             rulesSpecialCond3Item1: "Bu çekilişte toplam 100 kişi, kişi başı 50$ Değerinde Starbucks Mobil Hediye Kartı kazandı.", 
             rulesSpecialCond4Title: "Özel Şartlar (Nestle - Coca Cola - Burger King Hediyeleri)",
             rulesSpecialCond4Item1: "Ödüller verildi: 50 Nestle Paketi, 100 Coca Cola Paketi, 500 Burger King 30$ Çeki. Kazananlar bu çekilişe katılanlar arasından rastgele bir ödül kategorisine atandı.", 
             rulesWinnerSelTitle: "Kazananların Belirlenmesi",
             rulesWinnerSelDesc: "Kazananlar, belirtilen açıklanma tarihinde EU Portal'da yapılan canlı yayın çekilişi ile rastgele belirlendi.", 
             legalTitle: "Yasal İzinler",
             legalDesc: "Bu çekiliş, Türkiye Cumhuriyeti (Milli Piyango İdaresi - İzin No: 2025/1453-01, Tarih: 07/04/2025) ve Avrupa Birliği'ndeki (AB Promosyon Kayıtları - Ref: ECP/REG/2025/0704-K) ilgili mercilerden alınan izinler dahilinde düzenlenmiştir. Tüm katılımcılar katılarak şartları kabul etmiş sayılırlar.",
             rulesOtherTitle: "Diğer Hususlar",
             sponsorsTitle: "Sponsorlarımız",
             footerRights: "© 2025 Kyrosil. Tüm hakları saklıdır.",
             footerTnc: "T&Ş geçerlidir.",
            // --- ÇEKİLİŞ 1 SONUÇ SAYFASI METİNLERİ (YENİ) ---
            giveawayEndedTitle: "Büyük Ödül Sahibini Buldu!",
            giveawayThanksAll: "Çekilişimiz sonuçlanmıştır. Katılan herkese teşekkür ederiz!",
            giveawayWinnerMainLabel: "Asil Kazanan:",
            giveawayWinnerMainName: "METİN ŞAHLI / İZMİR", // Özel kazanan ismi
            giveawayWinnerBackupLabel: "Yedek Kazanan:",
            giveawayWinnerBackupName: "GAMZE İNAL / İSTANBUL", // Özel yedek kazanan ismi
            giveawayCongratsMessage: "Kazanan yarışmacılarımızı tebrik ederiz!",
            giveawayStayTuned: "Yeni kampanyalarımız için bizi takip etmeye devam edin!",
             // --- DİĞER SONUÇ SAYFASI METİNLERİ ---
             resultsTitle: "Çekiliş Sonuçları",
             resultsSummary2: "Aşağıdaki 50 şanslı kişiyi tebrik ederiz, her biri 250 USDT kazandı!", 
             resultsSummary3: "Aşağıdaki 100 şanslı kişiyi tebrik ederiz, her biri 50$ Değerinde Starbucks Mobil Hediye Kartı kazandı!", 
             winnersListTitle: "Kazananlar Listesi:",
             resultsContact: "Kazananlarla girişte belirtilen e-posta adresi üzerinden iletişime geçilecektir. Herkesi tebrik ederiz!",
             resultsNestleTitle: "Nestle Mutluluk Paketi Kazananları (50 Kişi)", 
             resultsCokeTitle: "Coca Cola Mutluluk Paketi Kazananları (100 Kişi)", 
             resultsBkTitle: "Burger King 30$ Çeki Kazananları (500 Kişi)" 
        },
        // Français (Tamamlandı ve Güncellendi)
        fr: {
             pageTitle: "Grand Tirage au Sort Kyrosil",
             pageTitleGiveaway1: "Résultats Tirage Appartement Projet ReziKyros Azure Kağıthane - Kyrosil", // Mis à jour (Page de résultats)
             pageTitleGiveaway2: "Résultats Tirage USDT - Kyrosil", 
             pageTitleGiveaway3: "Résultats Tirage Starbucks - Kyrosil", 
             pageTitleGiveaway4: "Résultats Tirage Cadeaux Nestle - Coca Cola - Burger King - Kyrosil", 
             mainHeading: "✨ Grand Tirage au Sort Kyrosil ! ✨",
             indexChoiceTitle: "Choisissez votre tirage au sort !",
             indexPrize1Title: "Appartement 2+1 du Projet ReziKyros Azure Kağıthane",
             indexPrize2Title: "250 USDT x 50",
             indexPrize3Title: "Carte Starbucks 50$ x 100",
             indexPrize4Title: "Cadeaux Nestle - Coca Cola - Burger King",
             indexEnterButton: "Détails & Participer",
             viewResultsButton: "Voir les Résultats", 
             indexRulesLink: "Voir les Termes et Conditions Générales",
             endDateVaries: "(Les dates de fin varient - voir détails)",
             detailBackButton: "&larr; Retour à Tous les Tirages",
             detailPrizeTitle: "Le Prix",
             detailFormTitle: "Participez au Tirage !",
             formDescGeneric: "Vous pouvez participer à ce tirage en remplissant les informations ci-dessous. Assurez-vous de remplir les conditions de participation listées dans les termes.",
             prize1Title: "Appartement 2+1 du Projet ReziKyros Azure Kağıthane",
             prize1Desc: "Une chance de gagner un appartement fantastique dans notre projet ReziKyros Azure Kağıthane bientôt achevé !",
             conditionsTitle: "Conditions spécifiques:",
             prize1Cond1: "Avoir plus de 18 ans",
             prize1Cond2: "Ne posséder aucun véhicule ou titre de propriété enregistré à votre nom",
             prize1Cond3: "Suivre @kyrosil sur Instagram",
             prize2Title: "250 USDT Chacun pour 50 Personnes",
             prize2Desc: "Vous pourriez être l'un des 50 heureux gagnants à recevoir 250 USDT !",
             prize3Title: "Carte Cadeau Mobile Starbucks de 50$ x 100",
             prize3Desc: "100 heureux gagnants recevront une Carte Cadeau Mobile Starbucks de 50$ (Valeur approx. 46 EUR / 1600 TRY, la valeur réelle peut varier selon les taux de change actuels).",
             prize4Title: "Cadeaux Nestle - Coca Cola - Burger King",
             prize4Desc: "Participez pour gagner l'un des incroyables packs cadeaux de nos partenaires ! Les prix incluent :",
             prize4ListItem1: "50 Packs Bonheur Nestle",
             prize4ListItem2: "100 Packs Bonheur Coca Cola",
             prize4ListItem3: "500 Bons Burger King de 30$ (<span data-lang-key=\"prize4DescBK\">Valeur approx. 28 EUR / 960 TRY, la valeur réelle peut varier. Valable sur l'application mobile (TR: Tıkla Gelsin).</span>)",
             prize4DescBK: "Valeur approx. 28 EUR / 960 TRY, la valeur réelle peut varier. Valable sur l'application mobile (TR: Tıkla Gelsin).",
             formNameLabel: "Nom Complet:",
             formEmailLabel: "Adresse E-mail:",
             formInstaLabel: "Nom d'utilisateur Instagram:",
             formNamePlaceholder: "ex: Jean Dupont",
             formEmailPlaceholder: "ex: jean@exemple.com",
             formInstaPlaceholder: "ex: @nomdutilisateur",
             formIpConsentLabel: "Je confirme que mon adresse IP peut être enregistrée pour la sécurité du tirage et la prévention des participations multiples, et j'accepte que mes informations puissent subir des vérifications VPN et Multi-IP avant inclusion dans le tirage.",
             formSubmitButton: "Soumettre Participation",
             formBackButton: "&larr; Retour",
             formValidationError: "Veuillez remplir tous les champs obligatoires (Nom, E-mail, Instagram) et accepter les conditions.",
             formSubmitting: "Soumission...",
             formSubmitted: "Soumis !",
             formError: "Une erreur est survenue, veuillez réessayer.",
             formThanksMessage: "Merci de votre participation ! Bonne chance.",
             rulesTitle: "Termes Généraux & Informations",
             rulesScheduleTitle: "Calendrier du Tirage",
             rulesStartDateLabel: "Date de Début:",
             rulesStartDateValue: "8 Avril 2025",
             rulesEndDateLabel: "Date Limite d'Inscription:",
             giveaway1EndDateValue: "30 Avril 2025",
             giveaway2EndDateValue: "15 Avril 2025",
             giveaway3EndDateValue: "15 Avril 2025",
             giveaway4EndDateValue: "15 Avril 2025",
             rulesAnnounceTitle: "Annonce des Résultats:",
             giveaway1AnnounceDesc: "Les résultats ont été annoncés via un tirage au sort en direct sur le portail EU le 1 Mai 2025. Les gagnants sont annoncés sur cette page.", // Mis à jour (Page de résultats Tirage 1)
             giveaway2AnnounceDesc: "Les résultats ont été annoncés via un tirage au sort en direct sur le portail EU le 16 avril 2025. Les gagnants sont listés ci-dessus.", 
             giveaway3AnnounceDesc: "Les résultats ont été annoncés via un tirage au sort en direct sur le portail EU le 16 avril 2025. Les gagnants sont listés ci-dessus.", 
             giveaway4AnnounceDesc: "Les résultats ont été annoncés via un tirage au sort en direct sur le portail EU le 16 avril 2025. Les gagnants sont listés ci-dessus par catégorie de prix.", 
             rulesGeneralCondTitle: "Conditions Générales",
             rulesCond1: "Tous les participants doivent avoir plus de 18 ans.",
             rulesCond2: "Tous les participants doivent suivre le compte @kyrosil sur Instagram.",
             rulesCond3: "Les employés de Kyrosil et leurs parents au premier degré ne peuvent pas participer au tirage.",
             rulesSpecialCond1Title: "Conditions spécifiques (Tirage Appartement)",
             rulesSpecialCond1Item1: "Le participant gagnant ne doit posséder aucun véhicule ou titre de propriété enregistré à son nom à la date d'annonce des résultats. Cette condition sera vérifiée.",
             rulesSpecialCond2Title: "Conditions spécifiques (Tirage USDT)",
             rulesSpecialCond2Item1: "Un total de 50 personnes ont gagné 250 USDT chacune.", 
             rulesSpecialCond3Title: "Conditions spécifiques (Tirage Starbucks)",
             rulesSpecialCond3Item1: "Un total de 100 personnes ont gagné une Carte Cadeau Mobile Starbucks de 50$ chacune.", 
             rulesSpecialCond4Title: "Conditions spécifiques (Cadeaux Nestle - Coca Cola - Burger King)",
             rulesSpecialCond4Item1: "Prix attribués : 50 Packs Nestle, 100 Packs Coca Cola, 500 Bons Burger King de 30$. Les gagnants ont été assignés aléatoirement à une catégorie de prix parmi les participants à ce tirage spécifique.", 
             rulesWinnerSelTitle: "Sélection des Gagnants",
             rulesWinnerSelDesc: "Les gagnants ont été déterminés par un tirage au sort effectué en direct sur le portail EU à la date d'annonce spécifiée.", 
             legalTitle: "Autorisations Légales",
             legalDesc: "Ce tirage au sort est organisé conformément aux autorisations obtenues auprès des autorités compétentes en Turquie (Admin. Loterie Nationale Turque - N°: 2025/1453-01, Date: 07/04/2025) et dans l'Union européenne (Registre UE des Promotions - Réf: ECP/REG/2025/0704-K). Tous les participants acceptent les conditions en participant.",
             rulesOtherTitle: "Autres Sujets",
             sponsorsTitle: "Nos Sponsors",
             footerRights: "© 2025 Kyrosil. Tous droits réservés.",
             footerTnc: "T&C s'appliquent.",
            // --- TEXTES PAGE RÉSULTATS TIRAGE 1 (NOUVEAU) ---
            giveawayEndedTitle: "Le Grand Prix a Trouvé Son Propriétaire !",
            giveawayThanksAll: "Notre tirage au sort est terminé. Merci à tous ceux qui ont participé !",
            giveawayWinnerMainLabel: "Gagnant Principal :",
            giveawayWinnerMainName: "METİN ŞAHLI / İZMİR", // Nom spécifique du gagnant
            giveawayWinnerBackupLabel: "Gagnant Suppléant :",
            giveawayWinnerBackupName: "GAMZE İNAL / İSTANBUL", // Nom spécifique du gagnant suppléant
            giveawayCongratsMessage: "Félicitations à nos participants gagnants !",
            giveawayStayTuned: "Restez à l'écoute pour nos nouvelles campagnes !",
             // --- NOUVEAUX TEXTES PAGE RESULTATS ---
             resultsTitle: "Résultats du Tirage",
             resultsSummary2: "Félicitations aux 50 heureux gagnants ci-dessous, chacun recevant 250 USDT !", 
             resultsSummary3: "Félicitations aux 100 heureux gagnants ci-dessous, chacun recevant une Carte Cadeau Mobile Starbucks de 50$ !", 
             winnersListTitle: "Liste des Gagnants :",
             resultsContact: "Les gagnants seront contactés via l'adresse e-mail fournie lors de l'inscription. Félicitations à tous !",
             resultsNestleTitle: "Gagnants du Pack Bonheur Nestle (50 Personnes)", 
             resultsCokeTitle: "Gagnants du Pack Bonheur Coca Cola (100 Personnes)", 
             resultsBkTitle: "Gagnants du Bon Burger King 30$ (500 Personnes)" 
        },
        // Ελληνικά (Tamamlandı ve Güncellendi)
        el: {
             pageTitle: "Μεγάλη Κλήρωση Kyrosil",
             pageTitleGiveaway1: "Αποτελέσματα Κλήρωσης Διαμερίσματος Έργου ReziKyros Azure Kağıthane - Kyrosil", // Ενημερώθηκε (Σελίδα αποτελεσμάτων)
             pageTitleGiveaway2: "Αποτελέσματα Κλήρωσης USDT - Kyrosil", 
             pageTitleGiveaway3: "Αποτελέσματα Κλήρωσης Starbucks - Kyrosil", 
             pageTitleGiveaway4: "Αποτελέσματα Κλήρωσης Δώρων Nestle - Coca Cola - Burger King - Kyrosil", 
             mainHeading: "✨ Μεγάλη Κλήρωση Kyrosil! ✨",
             indexChoiceTitle: "Επιλέξτε την Κλήρωσή σας!",
             indexPrize1Title: "Διαμέρισμα 2+1 από το Έργο ReziKyros Azure Kağıthane",
             indexPrize2Title: "250 USDT x 50",
             indexPrize3Title: "Κάρτα Starbucks 50$ x 100",
             indexPrize4Title: "Δώρα Nestle - Coca Cola - Burger King",
             indexEnterButton: "Λεπτομέρειες & Συμμετοχή",
             viewResultsButton: "Δείτε τα Αποτελέσματα", 
             indexRulesLink: "Δείτε τους Γενικούς Όρους & Προϋποθέσεις",
             endDateVaries: "(Οι ημερομηνίες λήξης διαφέρουν - δείτε λεπτομέρειες)",
             detailBackButton: "&larr; Πίσω σε Όλες τις Κληρώσεις",
             detailPrizeTitle: "Το Έπαθλο",
             detailFormTitle: "Λάβετε Μέρος στην Κλήρωση!",
             formDescGeneric: "Μπορείτε να συμμετάσχετε σε αυτή την κλήρωση συμπληρώνοντας τα παρακάτω στοιχεία. Βεβαιωθείτε ότι πληροίτε τις προϋποθέσεις συμμετοχής που αναφέρονται στους όρους.",
             prize1Title: "Διαμέρισμα 2+1 από το Έργο ReziKyros Azure Kağıthane",
             prize1Desc: "Μια ευκαιρία να κερδίσετε ένα φανταστικό διαμέρισμα στο σύντομα ολοκληρωμένο έργο μας ReziKyros Azure Kağıthane!",
             conditionsTitle: "Ειδικοί Όροι:",
             prize1Cond1: "Να είστε άνω των 18 ετών",
             prize1Cond2: "Να μην έχετε κανένα όχημα ή τίτλο ιδιοκτησίας καταχωρημένο στο όνομά σας",
             prize1Cond3: "Να ακολουθείτε το @kyrosil στο Instagram",
             prize2Title: "250 USDT ο Καθένας για 50 Άτομα",
             prize2Desc: "Θα μπορούσατε να είστε ένας από τους 50 τυχερούς νικητές που θα λάβουν 250 USDT!",
             prize3Title: "Δωροκάρτα Starbucks Mobile αξίας 50$ x 100",
             prize3Desc: "100 τυχεροί νικητές θα λάβουν μια Δωροκάρτα Starbucks Mobile αξίας 50$ (Περίπου 46 EUR / 1600 TRY αξία, η πραγματική αξία μπορεί να διαφέρει ανάλογα με τις τρέχουσες συναλλαγματικές ισοτιμίες).",
             prize4Title: "Δώρα Nestle - Coca Cola - Burger King",
             prize4Desc: "Συμμετέχετε για να κερδίσετε ένα από τα καταπληκτικά πακέτα δώρων από τους συνεργάτες μας! Τα έπαθλα περιλαμβάνουν:",
             prize4ListItem1: "50 Πακέτα Ευτυχίας Nestle",
             prize4ListItem2: "100 Πακέτα Ευτυχίας Coca Cola",
             prize4ListItem3: "500 Κουπόνια Burger King αξίας 30$ (<span data-lang-key=\"prize4DescBK\">Περίπου 28 EUR / 960 TRY αξία, η πραγματική αξία μπορεί να διαφέρει. Ισχύει στην εφαρμογή για κινητά (TR: Tıkla Gelsin).</span>)",
             prize4DescBK: "Περίπου 28 EUR / 960 TRY αξία, η πραγματική αξία μπορεί να διαφέρει. Ισχύει στην εφαρμογή για κινητά (TR: Tıkla Gelsin).",
             formNameLabel: "Ονοματεπώνυμο:",
             formEmailLabel: "Διεύθυνση Email:",
             formInstaLabel: "Όνομα Χρήστη Instagram:",
             formNamePlaceholder: "π.χ., Γιάννης Παπαδόπουλος",
             formEmailPlaceholder: "π.χ., yannis@example.com",
             formInstaPlaceholder: "π.χ., @username",
             formIpConsentLabel: "Επιβεβαιώνω ότι η διεύθυνση IP μου μπορεί να καταγραφεί για την ασφάλεια της κλήρωσης και την πρόληψη πολλαπλών συμμετοχών, και αποδέχομαι ότι τα στοιχεία μου ενδέχεται να υποβληθούν σε ελέγχους VPN και Multi-IP πριν συμπεριληφθούν στην κλήρωση.",
             formSubmitButton: "Υποβολή Συμμετοχής",
             formBackButton: "&larr; Πίσω",
             formValidationError: "Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία (Όνομα, Email, Instagram) και αποδεχτείτε τους όρους.",
             formSubmitting: "Υποβολή...",
             formSubmitted: "Υποβλήθηκε!",
             formError: "Παρουσιάστηκε σφάλμα, παρακαλώ προσπαθήστε ξανά.",
             formThanksMessage: "Ευχαριστούμε για τη συμμετοχή σας! Καλή τύχη.",
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
             giveaway1AnnounceDesc: "Τα αποτελέσματα ανακοινώθηκαν μέσω ζωντανής κλήρωσης στο EU Portal την 1η Μαΐου 2025. Οι νικητές ανακοινώνονται σε αυτή τη σελίδα.", // Ενημερώθηκε (Σελίδα αποτελεσμάτων Κλήρωσης 1)
             giveaway2AnnounceDesc: "Τα αποτελέσματα ανακοινώθηκαν μέσω ζωντανής κλήρωσης στο EU Portal στις 16 Απριλίου 2025. Οι νικητές αναφέρονται παραπάνω.", 
             giveaway3AnnounceDesc: "Τα αποτελέσματα ανακοινώθηκαν μέσω ζωντανής κλήρωσης στο EU Portal στις 16 Απριλίου 2025. Οι νικητές αναφέρονται παραπάνω.", 
             giveaway4AnnounceDesc: "Τα αποτελέσματα ανακοινώθηκαν μέσω ζωντανής κλήρωσης στο EU Portal στις 16 Απριλίου 2025. Οι νικητές αναφέρονται παραπάνω ανά κατηγορία βραβείου.", 
             rulesGeneralCondTitle: "Γενικοί Όροι",
             rulesCond1: "Όλοι οι συμμετέχοντες πρέπει να είναι άνω των 18 ετών.",
             rulesCond2: "Όλοι οι συμμετέχοντες πρέπει να ακολουθούν τον λογαριασμό @kyrosil στο Instagram.",
             rulesCond3: "Οι υπάλληλοι της Kyrosil και οι συγγενείς πρώτου βαθμού δεν μπορούν να συμμετάσχουν στην κλήρωση.",
             rulesSpecialCond1Title: "Ειδικοί Όροι (Κλήρωση Διαμερίσματος)",
             rulesSpecialCond1Item1: "Ο νικητής συμμετέχων δεν πρέπει να έχει κανένα όχημα ή τίτλο ιδιοκτησίας καταχωρημένο στο όνομά του κατά την ημερομηνία ανακοίνωσης των αποτελεσμάτων. Αυτός ο όρος θα επαληθευτεί.",
             rulesSpecialCond2Title: "Ειδικοί Όροι (Κλήρωση USDT)",
             rulesSpecialCond2Item1: "Συνολικά 50 άτομα κέρδισαν 250 USDT το καθένα.", 
             rulesSpecialCond3Title: "Ειδικοί Όροι (Κλήρωση Starbucks)",
             rulesSpecialCond3Item1: "Συνολικά 100 άτομα κέρδισαν μια Δωροκάρτα Starbucks Mobile αξίας 50$ το καθένα.", 
             rulesSpecialCond4Title: "Ειδικοί Όροι (Δώρα Nestle - Coca Cola - Burger King)",
             rulesSpecialCond4Item1: "Βραβεία που απονεμήθηκαν: 50 Πακέτα Nestle, 100 Πακέτα Coca Cola, 500 Κουπόνια Burger King 30$. Οι νικητές ανατέθηκαν τυχαία σε μία κατηγορία βραβείου από το σύνολο των συμμετεχόντων σε αυτή τη συγκεκριμένη κλήρωση.", 
             rulesWinnerSelTitle: "Επιλογή Νικητών",
             rulesWinnerSelDesc: "Οι νικητές καθορίστηκαν μέσω τυχαίας κλήρωσης που διεξήχθη ζωντανά στο EU Portal την καθορισμένη ημερομηνία ανακοίνωσης.", 
             legalTitle: "Νομικές Άδειες",
             legalDesc: "Αυτή η κλήρωση διεξάγεται σύμφωνα με τις άδειες που έχουν ληφθεί από τις αρμόδιες αρχές στην Τουρκία (Τουρκική Διοίκηση Εθν. Λαχείων - Αρ.: 2025/1453-01, Ημ/νία: 07/04/2025) και την Ευρωπαϊκή Ένωση (Μητρώο Προωθητικών Ενεργειών ΕΕ - Αρ.: ECP/REG/2025/0704-K). Όλοι οι συμμετέχοντες αποδέχονται τους όρους με τη συμμετοχή τους.",
             rulesOtherTitle: "Άλλα Θέματα",
             sponsorsTitle: "Οι Χορηγοί Μας",
             footerRights: "© 2025 Kyrosil. Με επιφύλαξη παντός δικαιώματος.",
             footerTnc: "Ισχύουν Όροι & Προϋποθέσεις.",
            // --- ΚΕΙΜΕΝΑ ΣΕΛΙΔΑΣ ΑΠΟΤΕΛΕΣΜΑΤΩΝ ΚΛΗΡΩΣΗΣ 1 (ΝΕΑ) ---
            giveawayEndedTitle: "Το Μεγάλο Έπαθλο Βρήκε τον Ιδιοκτήτη του!",
            giveawayThanksAll: "Η κλήρωσή μας ολοκληρώθηκε. Ευχαριστούμε όλους όσους συμμετείχαν!",
            giveawayWinnerMainLabel: "Κύριος Νικητής:",
            giveawayWinnerMainName: "METİN ŞAHLI / İZMİR", // Συγκεκριμένο όνομα νικητή
            giveawayWinnerBackupLabel: "Αναπληρωματικός Νικητής:",
            giveawayWinnerBackupName: "GAMZE İNAL / İSTANBUL", // Συγκεκριμένο όνομα αναπληρωματικού νικητή
            giveawayCongratsMessage: "Συγχαρητήρια στους νικητές διαγωνιζόμενους μας!",
            giveawayStayTuned: "Μείνετε συντονισμένοι για τις νέες μας καμπάνιες!",
             // --- ΝΕΑ ΚΕΙΜΕΝΑ ΣΕΛΙΔΑΣ ΑΠΟΤΕΛΕΣΜΑΤΩΝ ---
             resultsTitle: "Αποτελέσματα Κλήρωσης",
             resultsSummary2: "Συγχαρητήρια στους 50 τυχερούς νικητές παρακάτω, καθένας λαμβάνει 250 USDT!", 
             resultsSummary3: "Συγχαρητήρια στους 100 τυχερούς νικητές παρακάτω, καθένας λαμβάνει μια Δωροκάρτα Starbucks Mobile αξίας 50$!", 
             winnersListTitle: "Λίστα Νικητών:",
             resultsContact: "Θα επικοινωνήσουμε με τους νικητές μέσω της διεύθυνσης email που δόθηκε κατά την εγγραφή. Συγχαρητήρια σε όλους!",
             resultsNestleTitle: "Νικητές Πακέτου Ευτυχίας Nestle (50 Άτομα)", 
             resultsCokeTitle: "Νικητές Πακέτου Ευτυχίας Coca Cola (100 Άτομα)", 
             resultsBkTitle: "Νικητές Κουπονιού Burger King 30$ (500 Άτομα)" 
        }
    };

    // --- DOM Elementleri ---
    const languageButtons = document.querySelectorAll('.language-switcher button');
    const translatableElements = document.querySelectorAll('[data-lang-key]');
    const giveawayForms = document.querySelectorAll('.giveaway-form');

    // --- Dil Fonksiyonları ---
    let currentLang = 'en'; // Varsayılan dil

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found, defaulting to English.`);
            lang = 'en'; 
        }
        if (!translations[lang]) return;

        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;

        translatableElements.forEach(element => {
            const key = element.dataset.langKey;
            let translation = translations[lang][key];

            if (translation === undefined && lang !== 'en') {
                console.warn(`Key "${key}" missing for lang "${lang}", using English fallback.`);
                translation = translations['en'][key];
            }

            if (translation !== undefined) {
                if (element.placeholder !== undefined) {
                    element.placeholder = translation;
                }
                 else if (key === 'prize4ListItem3' || key === 'prize4DescBK') {
                     element.innerHTML = translation;
                 } else {
                    element.innerHTML = translation;
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

    // --- Form Gönderme Mantığı ---
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
            
             setTimeout(() => {
                 if (messageElement) {
                     messageElement.innerHTML = `<p data-lang-key="formThanksMessage">${translations[currentLang]['formThanksMessage']}</p>`;
                     messageElement.classList.remove('hidden');
                     messageElement.style.color = ''; 
                 }
                 form.reset(); 
                 submitButton.innerHTML = translations[currentLang]['formSubmitted'] || "Submitted!";
             }, 1000); 
         });
     });

    initializeLanguage(); 
});

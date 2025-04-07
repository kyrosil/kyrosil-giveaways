document.addEventListener('DOMContentLoaded', () => {
    // Gerekli HTML elementlerini seç
    const sections = document.querySelectorAll('.section'); // Tüm bölümler
    const choiceSection = document.getElementById('choice-section');
    const thankYouSection = document.getElementById('thank-you-section');

    const choiceButtons = document.querySelectorAll('.choice-btn');
    const giveawayForms = document.querySelectorAll('.giveaway-form');
    const backButtons = document.querySelectorAll('.btn-back'); // Geri butonları
    const backToStartBtn = document.getElementById('back-to-start-btn');

    // Yardımcı Fonksiyon: Bölüm Değiştirme
    function switchSection(targetSectionId) {
        sections.forEach(section => {
            if (section.id === targetSectionId) {
                // Gecikmeli olarak active-section ekleyerek animasyonu tetikle
                setTimeout(() => section.classList.add('active-section'), 50);
            } else {
                section.classList.remove('active-section');
            }
        });
        // Sayfanın başına git (isteğe bağlı)
        // window.scrollTo(0, 0);
    }

    // Seçim Butonlarına Tıklama Olayı
    choiceButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedGiveawayId = event.target.closest('.choice-card').dataset.giveaway + '-section';
            switchSection(selectedGiveawayId);
        });
    });

    // Geri Butonlarına Tıklama Olayı
    backButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetSectionId = event.target.dataset.target; // data-target attribute'u ile hedefi al
            switchSection(targetSectionId);
        });
    });

    // Form Gönderme Olayları
    giveawayForms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

            // Basit İstemci Taraflı Doğrulama (isteğe bağlı, zaten required var)
            const nameInput = form.querySelector('input[name="name"]');
            const emailInput = form.querySelector('input[name="email"]');
            if (!nameInput.value.trim() || !emailInput.value.trim()) {
                 alert("Lütfen tüm alanları doldurun.");
                 return;
            }

            // Form verilerini al
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const whichForm = form.id;

            console.log(`--- ${whichForm} Form Gönderildi ---`);
            console.log("Ad Soyad:", name);
            console.log("E-posta:", email);
            console.log("-----------------------------");

            // -----!----- VERİ DEPOLAMA ALANI -----!-----
            // BU KISIM ÇOK ÖNEMLİ! Katılımcıları kaydetmek için
            // aşağıdakilerden birini veya benzer bir yöntemi kullanmalısınız.
            // Bu kod YALNIZCA tarayıcıda çalışır, veriyi SAKLAMAZ.

            // ÖRNEK YÖNTEMLER:
            // 1. Google Forms'a Yönlendirme:
            //    En basit yöntemlerden biri. Google Form oluşturup linkini alın.
            //    Gerekirse önceden doldurulmuş link kullanın:
            //    https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?entry.FIELD_ID_FOR_NAME=Ali+Veli&entry.FIELD_ID_FOR_EMAIL=ali@veli.com
            //    window.location.href = 'YOUR_GOOGLE_FORM_LINK';

            // 2. Google Apps Script Web App'e Gönderme:
            //    Google Sheet'e veri yazmak için ideal. Apps Script ile bir web app oluşturup
            //    deploy edin ve URL'sini buraya yazın.
            //    fetch('YOUR_APPS_SCRIPT_URL', { method: 'POST', body: formData })
            //      .then(response => response.json()) // veya text()
            //      .then(data => { console.log('Başarılı:', data); switchSection('thank-you-section'); })
            //      .catch(error => { console.error('Hata:', error); alert('Bir hata oluştu!'); });
            //    // NOT: fetch işlemi bitince switchSection'ı .then içine taşıyın.

            // 3. Statik Form Servisleri (Formspree, Netlify Forms, Getform vb.):
            //    Bu servisler size bir endpoint URL'si verir. Formun action'ına ekleyebilir
            //    veya fetch ile gönderebilirsiniz.
            //    form.action = 'YOUR_FORMSPREE_URL'; form.method = 'POST'; form.submit(); // Veya
            //    fetch('YOUR_ENDPOINT_URL', { method: 'POST', body: formData, headers: {'Accept': 'application/json'} })
            //        .then(response => { if (response.ok) { switchSection('thank-you-section'); } else { /* Hata yönetimi */ } })
            //        .catch(error => console.error('Error:', error));
            //    // NOT: fetch işlemi bitince switchSection'ı .then içine taşıyın.

            // 4. Kendi Backend'inize Gönderme:
            //    Eğer Node.js, Python, PHP vb. ile kendi backend'iniz varsa,
            //    o backend'e ait API endpoint'ine fetch ile POST isteği yapın.

            // ---- ŞİMDİLİK SADECE TEŞEKKÜR EKRANINI GÖSTERİYORUZ ----
            // Yukarıdaki yöntemlerden birini seçip entegre ettikten sonra
            // bu satırı fetch'in .then() bloğuna taşıyabilirsiniz.
            switchSection('thank-you-section');

            // Formu sıfırla
            form.reset();
        });
    });

    // Başa Dön Butonu (Teşekkürler ekranından)
    backToStartBtn.addEventListener('click', () => {
        switchSection('choice-section');
    });

    // Sayfa ilk yüklendiğinde seçim bölümünü göster
    switchSection('choice-section');

});

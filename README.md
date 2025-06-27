# 🚀 Yazılımcı Portfolyo Sitesi

Modern ve responsive bir portfolyo sitesi. Projelerinizi sergilemek ve sosyal medya profillerinizi paylaşmak için tasarlanmıştır.

## 📋 Özellikler

- ✨ Modern ve şık tasarım
- 📱 Tamamen responsive (mobil uyumlu)
- 🎨 Smooth animasyonlar ve geçişler
- 📧 Çalışan iletişim formu
- 🔗 Sosyal medya entegrasyonu
- ⚡ Hızlı yükleme
- 🎯 SEO dostu

## 🛠️ Teknolojiler

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Poppins)

## 🎨 Özelleştirme Rehberi

### 1. Kişisel Bilgilerinizi Güncelleyin

`index.html` dosyasında aşağıdaki bölümleri düzenleyin:

#### Hero Bölümü (Satır 33-35):
```html
<h1 class="hero-title">Merhaba, Ben <span class="highlight">Adınız Soyadınız</span></h1>
<p class="hero-description">
    Kendi tanıtım metninizi buraya yazın.
</p>
```

#### İstatistikler (Satır 58-68):
```html
<div class="stat">
    <h3>15+</h3> <!-- Proje sayınız -->
    <p>Projeler</p>
</div>
<div class="stat">
    <h3>3+</h3> <!-- Deneyim yılınız -->
    <p>Yıl Deneyim</p>
</div>
```

### 2. Sosyal Medya Linklerinizi Ekleyin

#### Ana sayfa sosyal medya linkleri (Satır 43-55):
```html
<a href="https://github.com/KULLANICI-ADINIZ" target="_blank" class="social-link">
<a href="https://kaggle.com/KULLANICI-ADINIZ" target="_blank" class="social-link">
<a href="https://linkedin.com/in/KULLANICI-ADINIZ" target="_blank" class="social-link">
```

#### İletişim bölümü profil linkleri (Satır 220-232):
```html
<a href="https://github.com/KULLANICI-ADINIZ" target="_blank" class="profile-link">
<a href="https://kaggle.com/KULLANICI-ADINIZ" target="_blank" class="profile-link">
<a href="https://linkedin.com/in/KULLANICI-ADINIZ" target="_blank" class="profile-link">
```

### 3. İletişim Bilgilerinizi Güncelleyin

İletişim bölümünde (Satır 206-215):
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>sizin-email@example.com</span> <!-- E-mail adresiniz -->
</div>

<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Şehriniz, Ülkeniz</span> <!-- Lokasyonunuz -->
</div>
```

### 4. Projelerinizi Ekleyin

Projeler bölümünde (Satır 130-200) mevcut proje kartlarını düzenleyin:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-code"></i> <!-- Proje ikonu -->
    </div>
    <div class="project-content">
        <h3>Proje Adı</h3>
        <p>Proje açıklaması...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span> <!-- Kullanılan teknolojiler -->
            <span class="tech-tag">Node.js</span>
        </div>
        <div class="project-links">
            <a href="GITHUB-LINK" class="project-link">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="DEMO-LINK" class="project-link">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>
        </div>
    </div>
</div>
```

### 5. Yeteneklerinizi Güncelleyin

Hakkımda bölümünde (Satır 98-120) yeteneklerinizi düzenleyin:

```html
<div class="skill-item">
    <i class="fab fa-python"></i> <!-- Teknoloji ikonu -->
    <span>Python</span> <!-- Teknoloji adı -->
</div>
```

### 6. Renk Temasını Değiştirin

`styles.css` dosyasında ana renkleri değiştirebilirsiniz:

```css
/* Ana renkler */
:root {
    --primary-color: #6366f1;    /* Ana renk */
    --secondary-color: #fbbf24;  /* Vurgu rengi */
    --text-color: #1f2937;       /* Metin rengi */
    --background-color: #f8f9fa; /* Arka plan rengi */
}
```

## 🚀 Siteyi Yayınlama

### GitHub Pages ile:
1. GitHub'da yeni bir repository oluşturun
2. Dosyaları repository'ye yükleyin
3. Settings > Pages bölümünden GitHub Pages'i aktifleştirin

### Netlify ile:
1. [Netlify](https://netlify.com)'da hesap oluşturun
2. Dosyaları sürükleyip bırakın
3. Otomatik olarak yayınlanır

### Vercel ile:
1. [Vercel](https://vercel.com)'da hesap oluşturun
2. GitHub repository'nizi bağlayın
3. Otomatik deployment

## 📱 Responsive Tasarım

Site şu ekran boyutları için optimize edilmiştir:
- 📱 Mobil: 320px - 768px
- 📱 Tablet: 768px - 1024px
- 💻 Desktop: 1024px+

## 🎯 SEO İpuçları

1. `index.html`'de title ve meta description'ı güncelleyin:
```html
<title>Adınız Soyadınız - Yazılım Geliştirici</title>
<meta name="description" content="Kendi açıklamanız...">
```

2. Alt etiketleri ekleyin (görsel eklerseniz)
3. Schema markup ekleyin (isteğe bağlı)

## 🔧 Gelişmiş Özelleştirmeler

### Yeni Proje Kartı Ekleme:
Mevcut proje kartlarını kopyalayıp yapıştırın ve içeriği değiştirin.

### Yeni Bölüm Ekleme:
1. HTML'de yeni section oluşturun
2. CSS'de stilleri ekleyin
3. Navigasyon menüsüne link ekleyin

### Animasyon Değiştirme:
`script.js` dosyasında animasyon parametrelerini değiştirebilirsiniz.

## 📞 Destek

Herhangi bir sorun yaşarsanız veya özelleştirme konusunda yardıma ihtiyacınız varsa, GitHub'da issue açabilirsiniz.

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Özgürce kullanabilir ve değiştirebilirsiniz.

---

**🎉 Portfolyo siteniz hazır! Başarılar dilerim!** 
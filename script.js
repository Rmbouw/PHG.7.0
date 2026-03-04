// ========== DATA MEDIA ==========
const mediaData = {
    foto: {
        'Kegiatan Belajar': [
            { src: 'fto/kegiatan-belajar-1.jpg', caption: 'Belajar Tahfidz' },
            { src: 'fto/kegiatan-belajar-2.jpg', caption: 'Murajaah Bersama' },
            { src: 'fto/kegiatan-belajar-3.jpg', caption: 'Belajar Kitab' },
            { src: 'fto/kegiatan-belajar-4.jpg', caption: 'Diskusi Ilmiah' },
            { src: 'fto/kegiatan-belajar-5.jpg', caption: 'Belajar Malam' },
            { src: 'fto/kegiatan-belajar-6.jpg', caption: 'Tahsin Al-Quran' }
        ],
        'Foto Kebersamaan': [
            { src: 'fto/momen-1.jpg', caption: 'Makan Bersama' },
            { src: 'fto/momen-2.jpg', caption: 'Olahraga Pagi' },
            { src: 'fto/momen-3.jpg', caption: 'Berkebun' },
            { src: 'fto/momen-4.jpg', caption: 'Liburan Santri' },
            { src: 'fto/momen-5.jpg', caption: 'Bermain Bersama' },
            { src: 'fto/momen-6.jpg', caption: 'Kegiatan Outdoor' }
        ],
        'Acara Wisuda': [
            { src: 'fto/7.JPG', caption: 'Dokumentasi Wisuda 1' },
            { src: 'fto/8.JPG', caption: 'Dokumentasi Wisuda 2' },
            { src: 'fto/9.JPG', caption: 'Dokumentasi Wisuda 3' },
            { src: 'fto/10.JPG', caption: 'Dokumentasi Wisuda 4' },
            { src: 'fto/11.JPG', caption: 'Dokumentasi Wisuda 5' },
            { src: 'fto/12.JPG', caption: 'Dokumentasi Wisuda 6' },
            { src: 'fto/13.JPG', caption: 'Dokumentasi Wisuda 7' },
            { src: 'fto/14.JPG', caption: 'Dokumentasi Wisuda 8' },
            { src: 'fto/15.JPG', caption: 'Dokumentasi Wisuda 9' },
            { src: 'fto/16.JPG', caption: 'Dokumentasi Wisuda 10' },
            { src: 'fto/17.JPG', caption: 'Dokumentasi Wisuda 11' },
            { src: 'fto/19.JPG', caption: 'Dokumentasi Wisuda 12' },
            { src: 'fto/18.JPG', caption: 'Dokumentasi Wisuda 13' }
        ]
    }
};

// ========== VARIABEL GLOBAL ==========
let currentMainCategory = 'foto';
let currentSubCategory = '';
let selectedSubCategory = '';

// ========== INISIALISASI ==========
window.onload = function() {
    console.log('Window loaded');
    setupScrollAnimations();
    setupTeamCardsAnimation();
    setupBoxGalleryAnimation();
    
    // Sembunyikan elemen yang tidak diperlukan
    const mediaContainer = document.getElementById('mediaContainer');
    if (mediaContainer) mediaContainer.innerHTML = '';
    
    const subWrapper = document.getElementById('subCategoriesWrapper');
    if (subWrapper) subWrapper.style.display = 'none';
};

// ========== ANIMASI SCROLL UNTUK SEMUA SECTION ==========
function setupScrollAnimations() {
    console.log('Setup scroll animations dimulai');
    
    const aboutSection = document.getElementById('about');
    const teamSection = document.getElementById('team');
    const mediaSection = document.getElementById('media');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log('Section terlihat:', entry.target.id);
            
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                
                // Animasi khusus untuk elemen di dalam section
                if (entry.target.id === 'about') {
                    // About image
                    setTimeout(() => {
                        const aboutImg = document.querySelector('.about-image-container');
                        if (aboutImg) aboutImg.classList.add('show');
                    }, 200);
                    
                    // About title
                    setTimeout(() => {
                        const aboutTitle = document.querySelector('#about .section-title');
                        if (aboutTitle) aboutTitle.classList.add('show');
                    }, 400);
                    
                    // About text
                    setTimeout(() => {
                        const aboutText = document.querySelector('.about-text');
                        if (aboutText) aboutText.classList.add('show');
                    }, 600);
                }
                
                if (entry.target.id === 'team') {
                    // Team title
                    setTimeout(() => {
                        const teamTitle = document.querySelector('#team .section-title');
                        if (teamTitle) teamTitle.classList.add('show');
                    }, 300);
                }
                
                if (entry.target.id === 'media') {
                    // Media title
                    setTimeout(() => {
                        const mediaTitle = document.querySelector('#media .section-title');
                        if (mediaTitle) mediaTitle.classList.add('show');
                    }, 300);
                    
                    // Collection title
                    setTimeout(() => {
                        const collectionTitle = document.querySelector('.collection-title');
                        if (collectionTitle) collectionTitle.classList.add('show');
                    }, 500);
                }
                
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    if (aboutSection) sectionObserver.observe(aboutSection);
    if (teamSection) sectionObserver.observe(teamSection);
    if (mediaSection) sectionObserver.observe(mediaSection);
}

// ========== ANIMASI UNTUK TEAM CARDS ==========
function setupTeamCardsAnimation() {
    const teamCards = document.querySelectorAll('.team-card');
    
    if (teamCards.length === 0) {
        console.log('Tidak ada team cards ditemukan');
        return;
    }
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('reveal');
                }, index * 200); // Delay 200ms antar card
                
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });

    teamCards.forEach(card => {
        cardObserver.observe(card);
    });
}

// ========== ANIMASI UNTUK BOX GALLERY ==========
function setupBoxGalleryAnimation() {
    const boxes = document.querySelectorAll('.gallery-box');
    const collectionTitle = document.querySelector('.collection-title');
    
    if (collectionTitle) {
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    titleObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        titleObserver.observe(collectionTitle);
    }
    
    if (boxes.length === 0) {
        console.log('Tidak ada gallery boxes ditemukan');
        return;
    }
    
    const boxObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 400); // Delay 400ms antar box
                
                boxObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });

    boxes.forEach(box => {
        boxObserver.observe(box);
    });
}

// ========== MENU TOGGLE ==========
function toggleMenu() {
    const menu = document.getElementById('offcanvasMenu');
    const overlay = document.getElementById('menuOverlay');
    const toggleBtn = document.querySelector('.menu-toggle i');
    
    if (!menu || !overlay || !toggleBtn) return;
    
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        toggleBtn.className = 'fas fa-times';
    } else {
        toggleBtn.className = 'fas fa-bars';
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('offcanvasMenu');
    const toggleBtn = document.querySelector('.menu-toggle');
    const overlay = document.getElementById('menuOverlay');
    
    if (!menu || !toggleBtn || !overlay) return;
    
    if (!menu.contains(event.target) && !toggleBtn.contains(event.target) && menu.classList.contains('active')) {
        toggleMenu();
    }
});

// ========== RIPPLE EFFECT ==========
function addRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.background = 'rgba(255,255,255,0.4)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.pointerEvents = 'none';
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ========== CLOSE MODAL ==========
function closeModal() {
    const modal = document.getElementById('mediaModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ========== KEYDOWN EVENT ==========
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ========== SCROLL EVENT UNTUK NAVBAR ==========
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ========== PARALLAX EFFECT ==========
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBg = document.getElementById('heroBackground');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========== TAMBAHKAN CSS UNTUK ANIMASI ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .modal-image {
        max-width: 100%;
        max-height: 80vh;
        border-radius: 10px;
    }
    
    /* Pastikan section title muncul dengan animasi */
    .section-title {
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .section-title.show {
        opacity: 1;
        transform: translateY(0);
    }
    
    .section-title::after {
        width: 0;
        transition: width 0.8s ease 0.5s;
    }
    
    .section-title.show::after {
        width: 80px;
    }
    
    /* Animasi untuk about elements */
    .about-image-container, .about-text {
        opacity: 0;
        transition: all 0.8s ease;
    }
    
    .about-image-container.show {
        opacity: 1;
        transform: translateX(0);
    }
    
    .about-text.show {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Animasi untuk team cards */
    .team-card {
        opacity: 0;
        transform: translateY(50px) scale(0.95);
        transition: all 2.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .team-card.reveal {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    
    /* Animasi untuk gallery boxes */
    .gallery-box {
        opacity: 0;
        transform: translateY(50px) scale(0.95);
        transition: all 2.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .gallery-box.show {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    
    .collection-title {
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s ease;
    }
    
    .collection-title.show {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// ===== ANIMASI SCROLL UNTUK STRUKTUR ORGANISASI =====
function setupOrgSectionAnimation() {
    const orgSection = document.querySelector('.org-section');
    
    if (!orgSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('org-show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    observer.observe(orgSection);
}

window.addEventListener('load', function() {
    setupOrgSectionAnimation();
});
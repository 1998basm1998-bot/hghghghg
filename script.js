// دالة محاكاة الدخول مع التحميل
function handleLogin() {
    const pass = document.getElementById('password-input').value;
    
    if(pass === '1234') {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('loader').style.display = 'flex';
        
        // محاكاة جلب البيانات من السيرفر (تأخير 1.5 ثانية)
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('main-app').style.display = 'flex';
            showToast('تم تسجيل الدخول بنجاح', 'success');
        }, 1500);
    } else {
        showToast('رمز الدخول غير صحيح!', 'error');
    }
}

// تبديل التبويبات
function switchTab(tabId, element) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    element.classList.add('active');
}

// نظام الإشعارات المنبثقة (Toast)
function showToast(message, type) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `glass-panel toast ${type}`;
    toast.innerText = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// تبديل الوضع الليلي
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.theme-toggle i');
    if(document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        showToast('تم تفعيل الوضع الليلي', 'info');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        showToast('تم تفعيل وضع النهار', 'info');
    }
}

// إدارة الفيديو
function openVideo(src, title) {
    document.getElementById('video-title').innerText = title;
    const videoObj = document.getElementById('course-video');
    videoObj.src = src;
    document.getElementById('video-modal').style.display = 'flex';
    videoObj.play();
}

function closeVideo() {
    const videoObj = document.getElementById('course-video');
    videoObj.pause();
    document.getElementById('video-modal').style.display = 'none';
}

// نسخ كود الطالب
function copyId(id) {
    navigator.clipboard.writeText(id).then(() => {
        showToast('تم نسخ كود الطالب', 'success');
    });
}

// تحميل ملف
function downloadFile() {
    showToast('جاري بدء التحميل...', 'info');
    // هنا يتم وضع رابط التحميل الفعلي
}

// تسجيل الخروج
function logout() {
    document.getElementById('password-input').value = '';
    document.getElementById('main-app').style.display = 'none';
    document.getElementById('login-screen').style.display = 'block';
    switchTab('home', document.querySelector('.nav-btn'));
    showToast('تم تسجيل الخروج', 'info');
}

const content = {
    'en': {
        'hero-title': 'Welcome to my Portfolio',
        'hero-desc': 'Freelance Data Entry Expert and AI/ML Enthusiast.',
        'service-1-title': 'Data Entry',
        'service-1-desc': 'High speed and accurate data management services.',
        'service-2-title': 'AI & ML',
        'service-2-desc': 'Building smart models and data automation scripts.',
        'contact-text': 'Contact me for projects'
    },
    'ml': {
        'hero-title': 'എന്റെ പോർട്ട്‌ഫോളിയോയിലേക്ക് സ്വാഗതം',
        'hero-desc': 'ഫ്രീലാൻസ് ഡാറ്റ എൻട്രി വിദഗ്ധനും AI/ML പഠിതാവുമാണ്.',
        'service-1-title': 'ഡാറ്റ എൻട്രി',
        'service-1-desc': 'വേഗതയേറിയതും കൃത്യവുമായ ഡാറ്റാ മാനേജ്‌മെന്റ് സേവനങ്ങൾ.',
        'service-2-title': 'AI & ML',
        'service-2-desc': 'സ്മാർട്ട് മോഡലുകളും ഡാറ്റ ഓട്ടോമേഷൻ സ്ക്രിപ്റ്റുകളും നിർമ്മിക്കുന്നു.',
        'contact-text': 'പ്രോജക്റ്റുകൾക്കായി എന്നെ ബന്ധപ്പെടാം'
    },
    'hi': {
        'hero-title': 'मेरे पोर्टफोलियो में आपका स्वागत है',
        'hero-desc': 'फ्रीलांस डेटा एंट्री विशेषज्ञ और AI/ML उत्साही।',
        'service-1-title': 'डेटा एंट्री',
        'service-1-desc': 'उच्च गति और सटीक डेटा प्रबंधन सेवाएं।',
        'service-2-title': 'AI और ML',
        'service-2-desc': 'स्मार्ट मॉडल और डेटा ऑटोमेशन स्क्रिप्ट बनाना।',
        'contact-text': 'परियोजनाओं के लिए मुझसे संपर्क करें'
    },
    'ta': {
        'hero-title': 'எனது போர்ட்ஃபோலியோவிற்கு வரவேற்கிறோம்',
        'hero-desc': 'ஃப்ரீலான்ஸ் தரவு உள்ளீடு நிபுணர் மற்றும் AI/ML ஆர்வலர்.',
        'service-1-title': 'தரவு உள்ளீடு',
        'service-1-desc': 'அதிவேக மற்றும் துல்லியமான தரவு மேலாண்மை சேவைகள்.',
        'service-2-title': 'AI & ML',
        'service-2-desc': 'ஸ்மார்ட் மாடல்கள் மற்றும் தரவு ஆட்டோமேஷன் ஸ்கிரிப்ட்களை உருவாக்குதல்.',
        'contact-text': 'திட்டங்களுக்கு என்னை தொடர்பு கொள்ளவும்'
    }
};

// ഫംഗ്ഷൻ ഗ്ലോബൽ ആയി ഡിക്ലയർ ചെയ്യുന്നു
window.changeLang = function(lang) {
    const langData = content[lang];
    if (!langData) return;
    
    // Loop through each key and update the corresponding HTML element
    for (let id in langData) {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = langData[id];
        }
    }
    
    // Optional: Save language preference to browser
    localStorage.setItem('preferredLang', lang);
}

// Load preferred language on page start
window.onload = () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    changeLang(savedLang);
};

const content = {
    'en': {
        'hero-title': 'Hi, I am Joms',
        'hero-desc': 'Data Entry Expert & AI/ML Enthusiast',
        'col-1-title': 'About Me',
        'col-1-desc': 'A dedicated freelancer specialized in precision data management and exploring the world of Artificial Intelligence.',
        'col-2-title': 'Services',
        'col-2-desc': 'Offering professional Data Entry, Web Research, Python scripting, and basic Machine Learning models.',
        'col-3-title': 'Skills',
        'col-3-desc': 'Expertise in Microsoft Excel, Python, SQL, Data Cleaning, and Predictive Analytics.',
        'col-4-title': 'Contact',
        'col-4-desc': 'Available for freelance projects. Email: jomschacko@gmail.com' // നിങ്ങളുടെ മെയിൽ ഇവിടെ നൽകി
    },
    'ml': {
        'hero-title': 'ഹലോ, ഞാൻ ജോംസ്',
        'hero-desc': 'ഡാറ്റാ എൻട്രി വിദഗ്ധനും AI/ML പഠിതാവുമാണ്',
        'col-1-title': 'എന്നെക്കുറിച്ച്',
        'col-1-desc': 'കൃത്യതയാർന്ന ഡാറ്റാ മാനേജ്‌മെന്റിലും ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസിലും താല്പര്യമുള്ള ഒരു ഫ്രീലാൻസറാണ് ഞാൻ.',
        'col-2-title': 'സേവനങ്ങൾ',
        'col-2-desc': 'ഡാറ്റാ എൻട്രി, വെബ് റിസർച്ച്, പൈത്തൺ ഓട്ടോമേഷൻ, മെഷീൻ ലേണിംഗ് എന്നിവ ചെയ്തു നൽകുന്നു.',
        'col-3-title': 'കഴിവുകൾ',
        'col-3-desc': 'പൈത്തൺ, എക്സൽ, ഡാറ്റാ അനാലിസിസ്, മെഷീൻ ലേണിംഗ് എന്നിവയിൽ പ്രാവീണ്യമുണ്ട്.',
        'col-4-title': 'ബന്ധപ്പെടുക',
        'col-4-desc': 'പ്രോജക്റ്റുകൾക്കായി എന്നെ ബന്ധപ്പെടാം. ഇമെയിൽ: jomschacko@gmail.com'
    }
};

// ഭാഷ മാറ്റാനുള്ള ഫങ്ക്ഷൻ
window.changeLang = function(lang) {
    const langData = content[lang];
    if (langData) {
        for (let id in langData) {
            const element = document.getElementById(id);
            if (element) {
                element.classList.add('fade-in');
                element.innerText = langData[id];
                setTimeout(() => element.classList.remove('fade-in'), 500);
            }
        }
    }
    localStorage.setItem('preferredLang', lang);
};

// പേജ് ലോഡ് ആകുമ്പോൾ മുൻഗണന നൽകിയ ഭാഷ സെറ്റ് ചെയ്യുന്നു
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    window.changeLang(savedLang);

    // Enter കീ പ്രസ് ചെയ്യുമ്പോൾ മെസ്സേജ് അയക്കാൻ
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                window.sendMessage();
            }
        });
    }
});

// ചാറ്റ് വിൻഡോ കാണിക്കാനും മറയ്ക്കാനും
window.toggleChat = function() {
    const chat = document.getElementById('chat-window');
    if (chat) chat.classList.toggle('hidden');
};

// മെസ്സേജ് അയക്കാനുള്ള ഫങ്ക്ഷൻ
window.sendMessage = function() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    
    if (!input || !messages || input.value.trim() === "") return;

    const userText = input.value.trim();
    messages.innerHTML += `<div class="bg-blue-500/30 p-2 rounded-lg text-right ml-10 mb-2 text-white">${userText}</div>`;
    
    const lowerText = userText.toLowerCase();
    input.value = "";

    // ബോട്ട് മറുപടി നൽകുന്നു
    setTimeout(() => {
        let reply = "I'm still learning! Contact Joms at jomschacko@gmail.com / എനിക്ക് ഇതിനെക്കുറിച്ച് കൂടുതൽ അറിയില്ല. ജോംസിനെ ബന്ധപ്പെടുക.";

        if (lowerText.includes("ഹലോ") || lowerText.includes("നമസ്കാരം") || lowerText.includes("hi") || lowerText.includes("hello")) {
            reply = "നമസ്കാരം! എനിക്ക് എങ്ങനെ സഹായിക്കാനാകും? / Hi, how can I help you?";
        } 
        else if (lowerText.includes("സേവനം") || lowerText.includes("services") || lowerText.includes("work")) {
            reply = "Data Entry, Web Research, and Python automation എന്നിവ ജോംസ് ചെയ്തു നൽകുന്നു.";
        } 
        else if (lowerText.includes("skills") || lowerText.includes("കഴിവുകൾ") || lowerText.includes("python")) {
            reply = "Python, Machine Learning, Excel, and SQL എന്നിവയിൽ ജോംസിന് നല്ല അറിവുണ്ട്.";
        }
        else if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("ഫോൺ")) {
            reply = "You can email Joms at jomschacko@gmail.com";
        }
        else if (lowerText.includes("thanks") || lowerText.includes("നന്ദി")) {
            reply = "You're welcome! / സ്വാഗതം!";
        }

        messages.innerHTML += `<div class="bg-white/10 p-2 rounded-lg mr-10 mb-2 border border-white/5 text-white">${reply}</div>`;
        messages.scrollTop = messages.scrollHeight;
    }, 600);
};

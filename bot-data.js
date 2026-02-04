<head>
    </head>
<body>
    <script src="bot-data.js"></script>
    <script>
        window.onload = function() {
            if (typeof botData !== 'undefined') {
                console.log("Success: Data loaded!");
            } else {
                console.error("Error: bot-data.js is still not found!");
            }
        };
  

// bot-data.js
const botQA = [
    // --- Category 1: General & Capabilities (1-15) ---
    { question: "what is an ai customer assistant", answer: "An AI assistant is a smart chatbot that uses Natural Language Processing to interact with users like a human." },
    { question: "different from a standard chatbot", answer: "Yes. Standard bots follow a rigid script; this AI understands intent and handles conversational context." },
    { question: "24/7", answer: "Yes, it provides round-the-clock support without breaks or delays." },
    { question: "languages", answer: "It is multilingual, supporting English, Malayalam, Hindi, Arabic, and 50+ other languages." },
    { question: "multiple customers", answer: "Yes, it can manage thousands of simultaneous conversations without slowing down." },
    { question: "sound like a robot", answer: "No, the responses are generated to be natural, empathetic, and professional." },
    { question: "images and videos", answer: "Yes, it can share product photos, demo videos, and links." },
    { question: "mobile-friendly", answer: "Yes, the chat interface is fully responsive on all devices." },
    { question: "typos", answer: "Yes, AI understands the meaning even if the user makes spelling or grammar mistakes." },
    { question: "past interactions", answer: "Within a session, it remembers what was said earlier to provide relevant follow-up answers." },
    { question: "existing website", answer: "Yes, it requires just one line of code to be embedded." },
    { question: "manual updates", answer: "No, once trained, it uses its knowledge base to answer. You only update it when your business info changes." },
    { question: "name", answer: "Yes, if the user is logged in or provides their name, the bot uses it." },
    { question: "limit", answer: "No, it can be trained on thousands of pages of information." },
    { question: "jokes", answer: "Yes, we can enable 'Small Talk' to make the bot more engaging." },

    // --- Category 2: Business & Sales (16-35) ---
    { question: "book appointments", answer: "Yes, it integrates with Google Calendar or Calendly to schedule meetings." },
    { question: "generate leads", answer: "Yes, it captures names, emails, and phone numbers during the chat." },
    { question: "take orders", answer: "Yes, it can guide users through a product catalog and take order details." },
    { question: "process payments", answer: "Yes, by providing secure links to Stripe, PayPal, or Razorpay." },
    { question: "track orders", answer: "Yes, if integrated with your database, it can give real-time order status." },
    { question: "cross-selling", answer: "Yes, it can suggest related products based on user interest." },
    { question: "discount codes", answer: "Yes, it can offer coupons to users who are about to leave the site." },
    { question: "refund policies", answer: "Yes, it can clearly state your terms and conditions." },
    { question: "surveys", answer: "Yes, it can ask for feedback or ratings after a conversation." },
    { question: "seo", answer: "Indirectly, yes, by increasing the time users spend on your website." },
    { question: "negotiations", answer: "It can be programmed with specific logic for discounts or bulk pricing." },
    { question: "pdf brochures", answer: "Yes, it can provide direct download links for files." },
    { question: "real estate", answer: "Yes, by showing property listings and booking visits." },
    { question: "restaurants", answer: "Yes, by showing menus and taking table reservations." },
    { question: "healthcare", answer: "Yes, for booking consultations and answering general health FAQs." },
    { question: "bounce rates", answer: "Yes, by engaging visitors immediately when they land on your page." },
    { question: "hot lead", answer: "Yes, it can send an instant email/SMS when a high-value lead is chatting." },
    { question: "compare products", answer: "Yes, it can list the differences between two items for the user." },
    { question: "e-commerce", answer: "Yes, it integrates with platforms like Shopify and WooCommerce." },
    { question: "complaints", answer: "Yes, it can log a complaint and provide a ticket number." },

    // --- Category 3: Technical & Integration (36-55) ---
    { question: "ai models", answer: "I use GPT-4, Gemini Pro, or Claude depending on the use case." },
    { question: "whatsapp", answer: "Yes, via the WhatsApp Business API." },
    { question: "instagram", answer: "Yes, for automated DM management." },
    { question: "secure", answer: "Yes, we use industry-standard encryption for all data handling." },
    { question: "hosted", answer: "Usually on secure cloud servers like AWS, Google Cloud, or Azure." },
    { question: "crm", answer: "Yes, it integrates with HubSpot, Salesforce, Zoho, etc." },
    { question: "apis", answer: "Yes, it can fetch data from any external API." },
    { question: "gdpr", answer: "Yes, we can set it up to respect user privacy laws." },
    { question: "train", answer: "By uploading your website URL, PDFs, and text documents." },
    { question: "location", answer: "Yes, to provide location-specific info (like nearby stores)." },
    { question: "wordpress", answer: "Yes, it is compatible with all CMS platforms." },
    { question: "webhooks", answer: "Yes, to trigger actions in other apps when a chat finishes." },
    { question: "fast", answer: "Usually under 2 seconds." },
    { question: "token usage", answer: "It refers to the amount of data processed by the AI model per chat." },
    { question: "offline", answer: "No, it requires an internet connection to access the AI brain." },
    { question: "white-labeled", answer: "Yes, there will be no branding except yours." },
    { question: "voice-to-text", answer: "Yes, users can click a mic icon to speak." },
    { question: "translate", answer: "Yes, if a user speaks in another language, it can reply in the same." },
    { question: "chat history", answer: "Yes, an admin dashboard allows you to view all logs." },
    { question: "turn it off", answer: "Yes, you have full control over its availability." },

    // --- Category 4: UI, Customization & UX (56-75) ---
    { question: "color", answer: "Yes, the bot's color can be changed to match your brand's theme." },
    { question: "logo", answer: "Yes, the bot icon can be your brand logo." },
    { question: "typing", answer: "Yes, it shows a 'Typing...' indicator to make it feel more human." },
    { question: "emojis", answer: "Yes, it uses emojis to keep the tone friendly." },
    { question: "full-page chat", answer: "Yes, it can be a full-page interface or a small bubble in the corner." },
    { question: "proactively start", answer: "Yes, it can greet a user after they spend a few seconds on the page." },
    { question: "multiple-choice", answer: "Yes, it can provide options for quick navigation." },
    { question: "dark mode", answer: "Yes, it can switch between light and dark modes based on user preference." },
    { question: "map", answer: "Yes, it can embed Google Maps links for locations." },
    { question: "verify otps", answer: "Yes, for secure account access or verification." },
    { question: "popular questions", answer: "Yes, it can suggest common queries as 'Quick Reply' buttons." },
    { question: "accessible", answer: "Yes, it is compatible with screen readers for the disabled." },
    { question: "file uploads", answer: "Yes, users can upload images or PDFs for the bot to analyze." },
    { question: "slow internet", answer: "Yes, it is optimized for low-bandwidth connections." },
    { question: "specific buttons", answer: "Yes, clicking a button like 'Contact Us' can trigger the bot." },
    { question: "progress bar", answer: "Yes, for processes like onboarding or form filling." },
    { question: "custom fonts", answer: "Yes, to match your website typography." },
    { question: "hidden", answer: "Yes, you can choose specific pages where the bot should not appear." },
    { question: "search bar", answer: "It acts like a search bar, but provides conversational results." },
    { question: "how-to steps", answer: "Yes, it provides clear, numbered instructions for tasks." },

    // --- Category 5: Advanced AI & Logic (76-90) ---
    { question: "sentiment analysis", answer: "The bot detects user emotions and adjusts its tone accordingly." },
    { question: "human handoff", answer: "It can transfer the chat to a real person when the AI is stuck." },
    { question: "hallucination", answer: "That's when AI makes up facts; I use 'Grounding' to prevent this." },
    { question: "math problems", answer: "Yes, it has advanced reasoning capabilities for calculations." },
    { question: "write code", answer: "Yes, it can assist with technical snippets and programming." },
    { question: "summarize", answer: "Yes, it can summarize long articles or text pasted by the user." },
    { question: "learn", answer: "It can be set to improve over time based on user feedback." },
    { question: "ambiguous", answer: "It asks clarifying questions to understand the user better." },
    { question: "guardrails", answer: "Safety filters that prevent the bot from saying anything offensive." },
    { question: "execute logic", answer: "Yes, like calculating a loan EMI or a shipping fee." },
    { question: "external tools", answer: "Yes, through 'Function Calling' (e.g., checking weather)." },
    { question: "context aware", answer: "Yes, it remembers the user's name and previous points throughout the chat." },
    { question: "sarcasm", answer: "Advanced AI models are very good at identifying sarcastic tones." },
    { question: "citations", answer: "Yes, it can link to the source of the info, like a specific manual page." },
    { question: "generate images", answer: "Yes, if integrated with models like DALL-E or Midjourney." },

    // --- Category 6: Pricing, Support & Future (91-100) ---
    { question: "cost", answer: "It depends on the complexity (Basic vs Advanced). Contact Joms for details." },
    { question: "monthly fees", answer: "Yes, for AI model usage, hosting, and maintenance." },
    { question: "trial", answer: "Yes, I can set up a basic demo for your business." },
    { question: "training period", answer: "Usually 24-48 hours for the AI to ingest all your data." },
    { question: "content changes", answer: "The bot can be set to auto-sync with your site daily." },
    { question: "technical support", answer: "Yes, I offer ongoing maintenance packages." },
    { question: "dashboard", answer: "Yes, you get a dashboard to track leads and performance." },
    { question: "multiple bots", answer: "Yes, you can have separate bots for Sales and Support." },
    { question: "get started", answer: "Just share your website URL and goals with me to begin!" },
    { question: "why choose you", answer: "I provide custom-tailored, high-accuracy AI solutions that drive real ROI." }
];

// Making data available to ai-assistant.html
window.botData = botQA;

  </script>
</body>

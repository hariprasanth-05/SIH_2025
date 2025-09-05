document.addEventListener('DOMContentLoaded', () => {
    // Translation data
    const translations = {
        en: {
            welcome: "Welcome Back, Farmer! 👋",
            monitor: "Monitor your farm's health and productivity",
            digitalTwin: "Digital Twin Farm",
            realTime: "Real-time farm monitoring and analytics",
            livestockHealth: "Livestock Health: 95%",
            cropStatus: "Crop Status: Good",
            dailyScan: "Daily Scan",
            uploadPhotos: "Upload photos for AI health analysis",
            tapUpload: "📷 Tap to upload photo",
            startScan: "Start Scan",
            activeAlerts: "Active Alerts",
            diseaseCheck: "Disease Check 🔬",
            aiPowered: "AI-powered disease detection and diagnosis",
            uploadMedia: "Upload Media",
            uploadPhoto: "Upload Photo",
            takePhoto: "Take a clear photo of the affected animal/crop",
            choosePhoto: "Choose Photo",
            uploadVideo: "Upload Video",
            recordVideo: "Record animal behavior or symptoms",
            recordVideoBtn: "Record Video",
            voiceSymptoms: "Voice Symptoms",
            describeSymptoms: "Describe symptoms in your language",
            startRecording: "Start Recording",
            aiDiagnosis: "AI Diagnosis",
            analyzing: "Analyzing... 85%",
            possibleCause: "Possible Cause: Foot & Mouth Disease (Confidence: 85%)",
            nutritionalDef: "Possible Cause: Nutritional Deficiency (Confidence: 60%)",
            preventiveSteps: "Preventive Steps:",
            isolate: "Isolate affected animals immediately",
            disinfect: "Disinfect feeding areas",
            contactVet: "Contact veterinarian",
            monitorAnimals: "Monitor other animals closely",
            expertVerification: "Expert Verification",
            vetTyping: "Veterinarian is typing...",
            chatVet: "Chat with Veterinarian",
            askFarmers: "Ask Fellow Farmers",
            outbreakMap: "Outbreak Map 🗺️",
            realTimeOutbreak: "Real-time disease outbreak monitoring in your area",
            all: "All",
            animal: "Animal",
            crop: "Crop",
            climate: "Climate",
            highRisk: "High Risk",
            mediumRisk: "Medium Risk",
            yourFarm: "Your Farm",
            high: "High",
            medium: "Medium",
            low: "Low",
            recentAlerts: "Recent Alerts",
            highAlert: "🚨 High Alert",
            mediumAlert: "⚠️ Medium Alert",
            weatherAlert: "🌧️ Weather Alert",
            allClear: "✅ All Clear",
            farmRecords: "Farm Records 📋",
            digitalDiary: "Digital diary for your farm activities",
            vaccination: "Vaccination",
            treatment: "Treatment",
            sanitation: "Sanitation",
            productivity: "Productivity",
            addEntry: "Add Entry",
            complete: "Complete",
            dueSoon: "Due Soon",
            ongoing: "Ongoing",
            belowTarget: "Below Target",
            exportPDF: "Export PDF",
            shareReport: "Share Report",
            hygiene: "Hygiene & Sanitation Scanner 🧽",
            hygieneAssessment: "AI-powered hygiene assessment and recommendations",
            cameraScanner: "Camera Scanner",
            scanArea: "📷 Scan Your Farm Area",
            pointCamera: "Point camera at water tanks, feeding areas, or livestock shelters",
            hygieneScore: "Current Hygiene Score: 78",
            goodScore: "Good - Minor improvements needed",
            recommendations: "Recommendations",
            cleanWater: "💧 ✔ Clean Water Tank",
            disinfectShed: "🏠 ✔ Disinfect Shed",
            pestControl: "🐛 ✔ Pest Control",
            goodPractices: "✅ ✔ Good Practices",
            quickTips: "Quick Tips:",
            cleanWaterDaily: "Clean water sources daily",
            removeManure: "Remove manure regularly",
            disinfectTools: "Disinfect tools after use",
            monitorPests: "Monitor for pest signs",
            buddyAI: "Farmer Buddy AI 🤖",
            farmingAssistant: "Your intelligent farming assistant",
            voiceAssistant: "Voice Assistant",
            tapSpeak: "Tap to speak in your language",
            hello: "Hello! I'm your farming buddy. How can I help you today?",
            cowSick: "My cow seems sick, what should I do?",
            askSymptoms: "I can help! Can you describe the symptoms? Is the cow eating normally? Any visible signs of distress?",
            send: "Send",
            ivrSupport: "📞 IVR Support",
            smsSupport: "💬 SMS Support",
            tipDay: "💡 Tip of the Day",
            tempMonitor: "🌡️ Temperature Monitoring",
            tempGuide: "Check your livestock's body temperature regularly. Normal temperature for cattle is 101.5°F (38.6°C). Higher temperatures may indicate fever or heat stress.",
            setReminder: "Set Temperature Reminder",
            learnMore: "Learn More",
            relatedTopics: "Related Topics:",
            heatStress: "Heat stress prevention",
            feverTreatment: "Fever treatment guide",
            thermometer: "Thermometer usage"
        },
        ta: {
            // Your existing Tamil translations from the provided script.js (I've completed any truncated ones based on context)
            welcome: "மீண்டும் வருக, விவசாயி! 👋",
            monitor: "உங்கள் பண்ணையின் ஆரோக்யத்தையும் உற்பத்தித்திறனையும் கண்காணிக்கவும்",
            digitalTwin: "டிஜிட்டல் இரட்டை பண்ணை",
            realTime: "நிகழ்நேர பண்ணை கண்காணிப்பு மற்றும் பகுப்பாய்வு",
            livestockHealth: "கால்நடை ஆரோக்யம்: 95%",
            cropStatus: "பயிர் நிலை: நல்லது",
            dailyScan: "தினசரி ஸ்கேன்",
            uploadPhotos: "AI ஆரோக்ய பகுப்பாய்வுக்கு புகைப்படங்களை பதிவேற்றவும்",
            tapUpload: "📷 புகைப்படத்தை பதிவேற்ற டேப் செய்யவும்",
            startScan: "ஸ்கேனை தொடங்கு",
            activeAlerts: "செயலில் உள்ள எச்சரிக்கைகள்",
            diseaseCheck: "நோய் சோதனை 🔬",
            aiPowered: "AI-இயங்கும் நோய் கண்டறிதல் மற்றும் நோயறிதல்",
            uploadMedia: "மீடியாவை பதிவேற்றவும்",
            uploadPhoto: "புகைப்படத்தை பதிவேற்றவும்",
            takePhoto: "பாதிக்கப்பட்ட விலங்கு/பயிரின் தெளிவான புகைப்படத்தை எடுக்கவும்",
            choosePhoto: "புகைப்படத்தை தேர்வு செய்யவும்",
            uploadVideo: "வீடியோவை பதிவேற்றவும்",
            recordVideo: "விலங்கு நடத்தை அல்லது அறிகுறிகளை பதிவு செய்யவும்",
            recordVideoBtn: "வீடியோவை பதிவு செய்யவும்",
            voiceSymptoms: "குரல் அறிகுறிகள்",
            describeSymptoms: "உங்கள் மொழியில் அறிகுறிகளை விவரிக்கவும்",
            startRecording: "பதிவு தொடங்கவும்",
            aiDiagnosis: "AI நோயறிதல்",
            analyzing: "பகுப்பாய்வு செய்கிறது... 85%",
            possibleCause: "சாத்தியமான காரணம்: கால் & வாய் நோய் (நம்பிக்கை: 85%)",
            nutritionalDef: "சாத்தியமான காரணம்: ஊட்டச்சத்து குறைபாடு (நம்பிக்கை: 60%)",
            preventiveSteps: "தடுப்பு படிகள்:",
            isolate: "பாதிக்கப்பட்ட விலங்குகளை உடனடியாக தனிமைப்படுத்தவும்",
            disinfect: "உணவு பகுதிகளை கிருமி நாசினி செய்யவும்",
            contactVet: "கால்நடை மருத்துவரை தொடர்பு கொள்ளவும்",
            monitorAnimals: "பிற விலங்குகளை கண்காணிக்கவும்",
            expertVerification: "நிபுணர் சரிபார்ப்பு",
            vetTyping: "கால்நடை மருத்துவர் டைப்பிங்...",
            chatVet: "கால்நடை மருத்துவருடன் அரட்டை",
            askFarmers: "சக விவசாயிகளிடம் கேளுங்கள்",
            outbreakMap: "வெடிப்பு வரைபடம் 🗺️",
            realTimeOutbreak: "உங்கள் பகுதியில் நிகழ்நேர நோய் வெடிப்பு கண்காணிப்பு",
            all: "அனைத்து",
            animal: "விலங்கு",
            crop: "பயிர்",
            climate: "காலநிலை",
            highRisk: "உயர் ஆபத்து",
            mediumRisk: "நடுத்தர ஆபத்து",
            yourFarm: "உங்கள் பண்ணை",
            high: "உயர்",
            medium: "நடுத்தர",
            low: "குறைவு",
            recentAlerts: "சமீபத்திய எச்சரிக்கைகள்",
            highAlert: "🚨 உயர் எச்சரிக்கை",
            mediumAlert: "⚠️ நடுத்தர எச்சரிக்கை",
            weatherAlert: "🌧️ வானிலை எச்சரிக்கை",
            allClear: "✅ அனைத்தும் தெளிவு",
            farmRecords: "பண்ணை பதிவுகள் 📋",
            digitalDiary: "உங்கள் பண்ணை செயல்பாடுகளுக்கான டிஜிட்டல் டைரி",
            vaccination: "தடுப்பூசி",
            treatment: "சிகிச்சை",
            sanitation: "சுகாதாரம்",
            productivity: "உற்பத்தித்திறன்",
            addEntry: "உள்ளீட்டை சேர்க்கவும்",
            complete: "முடிந்தது",
            dueSoon: "விரைவில் காலாவதி",
            ongoing: "நடந்து கொண்டிருக்கிறது",
            belowTarget: "இலக்குக்கு கீழே",
            exportPDF: "PDF ஏற்றுமதி",
            shareReport: "அறிக்கையை பகிரவும்",
            hygiene: "சுகாதாரம் & சுத்திகரிப்பு ஸ்கேனர் 🧽",
            hygieneAssessment: "AI-இயங்கும் சுகாதார மதிப்பீடு மற்றும் பரிந்துரைகள்",
            cameraScanner: "கேமரா ஸ்கேனர்",
            scanArea: "📷 உங்கள் பண்ணை பகுதியை ஸ்கேன் செய்யவும்",
            pointCamera: "நீர் தொட்டிகள், உணவு பகுதிகள் அல்லது கால்நடை தங்குமிடங்களில் கேமராவை சுட்டிக்காட்டவும்",
            hygieneScore: "தற்போதைய சுகாதார மதிப்பெண்: 78",
            goodScore: "நல்லது - சிறிய மேம்பாடுகள் தேவை",
            recommendations: "பரிந்துரைகள்",
            cleanWater: "💧 ✔ நீர் தொட்டியை சுத்தம் செய்யவும்",
            disinfectShed: "🏠 ✔ கொட்டகையை கிருமி நாசினி செய்யவும்",
            pestControl: "🐛 ✔ பூச்சி கட்டுப்பாடு",
            goodPractices: "✅ ✔ நல்ல நடைமுறைகள்",
            quickTips: "விரைவு உதவிக்குறிப்புகள்:",
            cleanWaterDaily: "தினசரி நீர் ஆதாரங்களை சுத்தம் செய்யவும்",
            removeManure: "சாணத்தை தவறாமல் அகற்றவும்",
            disinfectTools: "பயன்படுத்திய பிறகு கருவிகளை கிருமி நாசினி செய்யவும்",
            monitorPests: "பூச்சி அறிகுறிகளை கண்காணிக்கவும்",
            buddyAI: "விவசாயி நண்பர் AI 🤖",
            farmingAssistant: "உங்கள் அறிவார்ந்த விவசாய உதவியாளர்",
            voiceAssistant: "குரல் உதவியாளர்",
            tapSpeak: "உங்கள் மொழியில் பேச டேப் செய்யவும்",
            hello: "வணக்கம்! நான் உங்கள் விவசாய நண்பர். இன்று உங்களுக்கு எப்படி உதவலாம்?",
            cowSick: "என் பசு நோய்வாய்ப்பட்டதாக தெரிகிறது, என்ன செய்ய வேண்டும்?",
            askSymptoms: "நான் உதவலாம்! அறிகுறிகளை விவரிக்க முடியுமா? பசு சாதாரணமாக சாப்பிடுகிறதா? எந்தவித துன்ப அறிகுறிகளும் தெரிகிறதா?",
            send: "அனுப்பு",
            ivrSupport: "📞 IVR ஆதரவு",
            smsSupport: "💬 SMS ஆதரவு",
            tipDay: "💡 நாளின் உதவிக்குறிப்பு",
            tempMonitor: "🌡️ வெப்பநிலை கண்காணிப்பு",
            tempGuide: "உங்கள் கால்நடையின் உடல் வெப்பநிலையை தவறாமல் சோதிக்கவும். கால்நடைகளுக்கான சாதாரண வெப்பநிலை 101.5°F (38.6°C). உயர் வெப்பநிலை காய்ச்சல் அல்லது வெப்ப அழுத்தத்தை குறிக்கலாம்.",
            setReminder: "வெப்பநிலை நினைவூட்டலை அமைக்கவும்",
            learnMore: "மேலும் அறியவும்",
            relatedTopics: "தொடர்புடைய தலைப்புகள்:",
            heatStress: "வெப்ப அழுத்த தடுப்பு",
            feverTreatment: "காய்ச்சல் சிகிச்சை வழிகாட்டி",
            thermometer: "தெர்மாமீட்டர் பயன்பாடு"
        },
        te: {
            welcome: "తిరిగి స్వాగతం, రైతు! 👋",
            monitor: "మీ ఫామ్ ఆరోగ్యం మరియు ఉత్పాదకతను మానిటర్ చేయండి",
            digitalTwin: "డిజిటల్ ట్విన్ ఫామ్",
            realTime: "రియల్-టైమ్ ఫామ్ మానిటరింగ్ మరియు అనలిటిక్స్",
            livestockHealth: "పశువుల ఆరోగ్యం: 95%",
            cropStatus: "పంట స్థితి: మంచి",
            dailyScan: "రోజువారీ స్కాన్",
            uploadPhotos: "AI ఆరోగ్య విశ్లేషణ కోసం ఫోటోలను అప్‌లోడ్ చేయండి",
            tapUpload: "📷 ఫోటో అప్‌లోడ్ చేయడానికి ట్యాప్ చేయండి",
            startScan: "స్కాన్ ప్రారంభించండి",
            activeAlerts: "యాక్టివ్ అలర్ట్స్",
            diseaseCheck: "డిసీజ్ చెక్ 🔬",
            aiPowered: "AI-పవర్డ్ డిసీజ్ డిటెక్షన్ మరియు డయాగ్నోసిస్",
            uploadMedia: "మీడియాను అప్‌లోడ్ చేయండి",
            uploadPhoto: "ఫోటో అప్‌లోడ్ చేయండి",
            takePhoto: "ప్రభావిత జంతువు/పంట యొక్క స్పష్టమైన ఫోటో తీయండి",
            choosePhoto: "ఫోటో ఎంచుకోండి",
            uploadVideo: "వీడియో అప్‌లోడ్ చేయండి",
            recordVideo: "జంతువు ప్రవర్తన లేదా లక్షణాలను రికార్డ్ చేయండి",
            recordVideoBtn: "వీడియో రికార్డ్ చేయండి",
            voiceSymptoms: "వాయిస్ లక్షణాలు",
            describeSymptoms: "మీ భాషలో లక్షణాలను వివరించండి",
            startRecording: "రికార్డింగ్ ప్రారంభించండి",
            aiDiagnosis: "AI డయాగ్నోసిస్",
            analyzing: "విశ్లేషిస్తున్నారు... 85%",
            possibleCause: "సంభావ్య కారణం: ఫుట్ & మౌత్ డిసీజ్ (కాన్ఫిడెన్స్: 85%)",
            nutritionalDef: "సంభావ్య కారణం: పోషకాహార లోపం (కాన్ఫిడెన్స్: 60%)",
            preventiveSteps: "ముందస్తు చర్యలు:",
            isolate: "ప్రభావిత జంతువులను తక్షణమే ఐసోలేట్ చేయండి",
            disinfect: "ఫీడింగ్ ఏరియాలను డిసిన్ఫెక్ట్ చేయండి",
            contactVet: "వెటర్నరీని సంప్రదించండి",
            monitorAnimals: "ఇతర జంతువులను దగ్గరగా మానిటర్ చేయండి",
            expertVerification: "నిపుణుల ధృవీకరణ",
            vetTyping: "వెటర్నరీ టైపింగ్...",
            chatVet: "వెటర్నరీతో చాట్",
            askFarmers: "సహ రైతులను అడగండి",
            outbreakMap: "అవుట్‌బ్రేక్ మ్యాప్ 🗺️",
            realTimeOutbreak: "మీ ప్రాంతంలో రియల్-టైమ్ డిసీజ్ అవుట్‌బ్రేక్ మానిటరింగ్",
            all: "అన్ని",
            animal: "జంతువు",
            crop: "పంట",
            climate: "క్లైమేట్",
            highRisk: "హై రిస్క్",
            mediumRisk: "మీడియం రిస్క్",
            yourFarm: "మీ ఫామ్",
            high: "హై",
            medium: "మీడియం",
            low: "లో",
            recentAlerts: "ఇటీవలి అలర్ట్స్",
            highAlert: "🚨 హై అలర్ట్",
            mediumAlert: "⚠️ మీడియం అలర్ట్",
            weatherAlert: "🌧️ వెదర్ అలర్ట్",
            allClear: "✅ అన్ని క్లియర్",
            farmRecords: "ఫామ్ రికార్డులు 📋",
            digitalDiary: "మీ ఫామ్ యాక్టివిటీలకు డిజిటల్ డైరీ",
            vaccination: "వ్యాక్సినేషన్",
            treatment: "ట్రీట్మెంట్",
            sanitation: "సానిటేషన్",
            productivity: "ప్రొడక్టివిటీ",
            addEntry: "ఎంట్రీ జోడించండి",
            complete: "పూర్తి",
            dueSoon: "త్వరలో డ్యూ",
            ongoing: "ఆన్‌గోయింగ్",
            belowTarget: "టార్గెట్ కంటే తక్కువ",
            exportPDF: "PDF ఎక్స్‌పోర్ట్",
            shareReport: "రిపోర్ట్ షేర్ చేయండి",
            hygiene: "హైజీన్ & సానిటేషన్ స్కానర్ 🧽",
            hygieneAssessment: "AI-పవర్డ్ హైజీన్ అసెస్‌మెంట్ మరియు రికమెండేషన్లు",
            cameraScanner: "కెమెరా స్కానర్",
            scanArea: "📷 మీ ఫామ్ ఏరియాను స్కాన్ చేయండి",
            pointCamera: "వాటర్ ట్యాంకులు, ఫీడింగ్ ఏరియాలు లేదా పశువుల షెల్టర్ల వద్ద కెమెరాను పాయింట్ చేయండి",
            hygieneScore: "కరెంట్ హైజీన్ స్కోర్: 78",
            goodScore: "మంచి - చిన్న మెరుగుదలలు అవసరం",
            recommendations: "రికమెండేషన్లు",
            cleanWater: "💧 ✔ క్లీన్ వాటర్ ట్యాంక్",
            disinfectShed: "🏠 ✔ డిసిన్ఫెక్ట్ షెడ్",
            pestControl: "🐛 ✔ పెస్ట్ కంట్రోల్",
            goodPractices: "✅ ✔ మంచి ప్రాక్టీసులు",
            quickTips: "క్విక్ టిప్స్:",
            cleanWaterDaily: "రోజువారీ వాటర్ సోర్సులను క్లీన్ చేయండి",
            removeManure: "మాన్యూర్‌ను రెగ్యులర్‌గా తొలగించండి",
            disinfectTools: "యూజ్ తర్వాత టూల్స్‌ను డిసిన్ఫెక్ట్ చేయండి",
            monitorPests: "పెస్ట్ సైన్‌లను మానిటర్ చేయండి",
            buddyAI: "ఫార్మర్ బడ్డీ AI 🤖",
            farmingAssistant: "మీ ఇంటెలిజెంట్ ఫార్మింగ్ అసిస్టెంట్",
            voiceAssistant: "వాయిస్ అసిస్టెంట్",
            tapSpeak: "మీ భాషలో మాట్లాడటానికి ట్యాప్ చేయండి",
            hello: "హలో! నేను మీ ఫార్మింగ్ బడ్డీ. ఈరోజు మీకు ఎలా సహాయం చేయగలను?",
            cowSick: "నా ఆవు అనారోగ్యంగా కనిపిస్తోంది, ఏం చేయాలి?",
            askSymptoms: "నేను సహాయం చేయగలను! లక్షణాలను వివరించగలరా? ఆవు సాధారణంగా తింటోందా? ఏదైనా డిస్ట్రెస్ సైన్‌లు కనిపిస్తున్నాయా?",
            send: "పంపండి",
            ivrSupport: "📞 IVR సపోర్ట్",
            smsSupport: "💬 SMS సపోర్ట్",
            tipDay: "💡 డే ఆఫ్ టిప్",
            tempMonitor: "🌡️ టెంపరేచర్ మానిటరింగ్",
            tempGuide: "మీ పశువుల బాడీ టెంపరేచర్‌ను రెగ్యులర్‌గా చెక్ చేయండి. పశువులకు నార్మల్ టెంపరేచర్ 101.5°F (38.6°C). హై టెంపరేచర్లు ఫీవర్ లేదా హీట్ స్ట్రెస్‌ను సూచిస్తాయి.",
            setReminder: "టెంపరేచర్ రిమైండర్ సెట్ చేయండి",
            learnMore: "మరిన్ని తెలుసుకోండి",
            relatedTopics: "సంబంధిత టాపిక్స్:",
            heatStress: "హీట్ స్ట్రెస్ ప్రివెన్షన్",
            feverTreatment: "ఫీవర్ ట్రీట్మెంట్ గైడ్",
            thermometer: "థర్మామీటర్ యూసేజ్"
        },
        ml: {
            welcome: "തിരിച്ചു വരവ്, കർഷക! 👋",
            monitor: "നിങ്ങളുടെ ഫാമിന്റെ ആരോഗ്യവും ഉൽപ്പാദനക്ഷമതയും മോണിറ്റർ ചെയ്യുക",
            digitalTwin: "ഡിജിറ്റൽ ട്വിൻ ഫാം",
            realTime: "റിയൽ-ടൈം ഫാം മോണിറ്ററിങ്ങും അനലിറ്റിക്സും",
            livestockHealth: "മൃഗങ്ങളുടെ ആരോഗ്യം: 95%",
            cropStatus: "വിള നില: നല്ലത്",
            dailyScan: "ദൈനംദിന സ്കാൻ",
            uploadPhotos: "AI ആരോഗ്യ വിശകലനത്തിനായി ഫോട്ടോകൾ അപ്‌ലോഡ് ചെയ്യുക",
            tapUpload: "📷 ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യാൻ ടാപ്പ് ചെയ്യുക",
            startScan: "സ്കാൻ ആരംഭിക്കുക",
            activeAlerts: "സജീവ അലേർട്ടുകൾ",
            diseaseCheck: "രോഗ പരിശോധന 🔬",
            aiPowered: "AI-പവർഡ് രോഗ കണ്ടെത്തലും ഡയഗ്നോസിസും",
            uploadMedia: "മീഡിയ അപ്‌ലോഡ് ചെയ്യുക",
            uploadPhoto: "ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക",
            takePhoto: "ബാധിച്ച മൃഗം/വിളയുടെ വ്യക്തമായ ഫോട്ടോ എടുക്കുക",
            choosePhoto: "ഫോട്ടോ തിരഞ്ഞെടുക്കുക",
            uploadVideo: "വീഡിയോ അപ്‌ലോഡ് ചെയ്യുക",
            recordVideo: "മൃഗ പെരുമാറ്റമോ ലക്ഷണങ്ങളോ റെക്കോർഡ് ചെയ്യുക",
            recordVideoBtn: "വീഡിയോ റെക്കോർഡ് ചെയ്യുക",
            voiceSymptoms: "വോയ്‌സ് ലക്ഷണങ്ങൾ",
            describeSymptoms: "നിങ്ങളുടെ ഭാഷയിൽ ലക്ഷണങ്ങൾ വിവരിക്കുക",
            startRecording: "റെക്കോർഡിംഗ് ആരംഭിക്കുക",
            aiDiagnosis: "AI ഡയഗ്നോസിസ്",
            analyzing: "വിശകലനം ചെയ്യുന്നു... 85%",
            possibleCause: "സാധ്യതയുള്ള കാരണം: ഫൂട്ട് & മൗത്ത് ഡിസീസ് (കോൺഫിഡൻസ്: 85%)",
            nutritionalDef: "സാധ്യതയുള്ള കാരണം: പോഷകാഹാരക്കുറവ് (കോൺഫിഡൻസ്: 60%)",
            preventiveSteps: "പ്രതിരോധ നടപടികൾ:",
            isolate: "ബാധിച്ച മൃഗങ്ങളെ ഉടൻ ഐസൊലേറ്റ് ചെയ്യുക",
            disinfect: "ഫീഡിംഗ് ഏരിയകൾ ഡിസിൻഫെക്റ്റ് ചെയ്യുക",
            contactVet: "വെറ്ററിനറിയെ ബന്ധപ്പെടുക",
            monitorAnimals: "മറ്റ് മൃഗങ്ങളെ അടുത്ത് മോണിറ്റർ ചെയ്യുക",
            expertVerification: "വിദഗ്ധ ക്രമീകരണം",
            vetTyping: "വെറ്ററിനറി ടൈപ്പിംഗ്...",
            chatVet: "വെറ്ററിനറിയുമായി ചാറ്റ്",
            askFarmers: "സഹ കർഷകരോട് ചോദിക്കുക",
            outbreakMap: "ഔട്ട്‌ബ്രേക്ക് മാപ്പ് 🗺️",
            realTimeOutbreak: "നിങ്ങളുടെ പ്രദേശത്തിലെ റിയൽ-ടൈം രോഗ ഔട്ട്‌ബ്രേക്ക് മോണിറ്ററിംഗ്",
            all: "എല്ലാം",
            animal: "മൃഗം",
            crop: "വിള",
            climate: "കാലാവസ്ഥ",
            highRisk: "ഉയർന്ന റിസ്ക്",
            mediumRisk: "മീഡിയം റിസ്ക്",
            yourFarm: "നിങ്ങളുടെ ഫാം",
            high: "ഉയർന്ന",
            medium: "മീഡിയം",
            low: "താഴ്ന്ന",
            recentAlerts: "അടുത്തിടെയുള്ള അലേർട്ടുകൾ",
            highAlert: "🚨 ഉയർന്ന അലേർട്ട്",
            mediumAlert: "⚠️ മീഡിയം അലേർട്ട്",
            weatherAlert: "🌧️ കാലാവസ്ഥ അലേർട്ട്",
            allClear: "✅ എല്ലാം ക്ലിയർ",
            farmRecords: "ഫാം റെക്കോർഡുകൾ 📋",
            digitalDiary: "നിങ്ങളുടെ ഫാം പ്രവർത്തനങ്ങൾക്കുള്ള ഡിജിറ്റൽ ഡയറി",
            vaccination: "വാക്സിനേഷൻ",
            treatment: "ചികിത്സ",
            sanitation: "സാനിറ്റേഷൻ",
            productivity: "ഉൽപ്പാദനക്ഷമത",
            addEntry: "എൻട്രി ചേർക്കുക",
            complete: "പൂർത്തിയായി",
            dueSoon: "ഉടൻ ഡ്യൂ",
            ongoing: "ഓൺഗോയിംഗ്",
            belowTarget: "ടാർഗറ്റിന് താഴെ",
            exportPDF: "PDF എക്സ്പോർട്ട്",
            shareReport: "റിപ്പോർട്ട് ഷെയർ ചെയ്യുക",
            hygiene: "ഹൈജീൻ & സാനിറ്റേഷൻ സ്കാനർ 🧽",
            hygieneAssessment: "AI-പവർഡ് ഹൈജീൻ അസസ്മെന്റും ശുപാർശകളും",
            cameraScanner: "ക്യാമറ സ്കാനർ",
            scanArea: "📷 നിങ്ങളുടെ ഫാം ഏരിയ സ്കാൻ ചെയ്യുക",
            pointCamera: "വാട്ടർ ടാങ്കുകൾ, ഫീഡിംഗ് ഏരിയകൾ അല്ലെങ്കിൽ മൃഗങ്ങളുടെ ഷെൽട്ടറുകളിൽ ക്യാമറ പോയിന്റ് ചെയ്യുക",
            hygieneScore: "നിലവിലെ ഹൈജീൻ സ്കോർ: 78",
            goodScore: "നല്ലത് - ചെറിയ മെച്ചപ്പെടുത്തലുകൾ ആവശ്യമാണ്",
            recommendations: "ശുപാർശകൾ",
            cleanWater: "💧 ✔ ക്ലീൻ വാട്ടർ ടാങ്ക്",
            disinfectShed: "🏠 ✔ ഡിസിൻഫെക്റ്റ് ഷെഡ്",
            pestControl: "🐛 ✔ പെസ്റ്റ് കൺട്രോൾ",
            goodPractices: "✅ ✔ നല്ല പ്രാക്ടീസുകൾ",
            quickTips: "ക്വിക്ക് ടിപ്സ്:",
            cleanWaterDaily: "ദൈനംദിന വാട്ടർ സോഴ്സുകൾ ക്ലീൻ ചെയ്യുക",
            removeManure: "മാന്യൂർ റെഗുലറായി നീക്കം ചെയ്യുക",
            disinfectTools: "ഉപയോഗിച്ച ശേഷം ടൂളുകൾ ഡിസിൻഫെക്റ്റ് ചെയ്യുക",
            monitorPests: "പെസ്റ്റ് അടയാളങ്ങൾ മോണിറ്റർ ചെയ്യുക",
            buddyAI: "ഫാർമർ ബഡ്ഡി AI 🤖",
            farmingAssistant: "നിങ്ങളുടെ ഇന്റലിജന്റ് ഫാർമിംഗ് അസിസ്റ്റന്റ്",
            voiceAssistant: "വോയ്‌സ് അസിസ്റ്റന്റ്",
            tapSpeak: "നിങ്ങളുടെ ഭാഷയിൽ സംസാരിക്കാൻ ടാപ്പ് ചെയ്യുക",
            hello: "ഹലോ! ഞാൻ നിങ്ങളുടെ ഫാർമിംഗ് ബഡ്ഡിയാണ്. ഇന്ന് നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?",
            cowSick: "എന്റെ പശു രോഗബാധിതമാണെന്ന് തോന്നുന്നു, എന്ത് ചെയ്യണം?",
            askSymptoms: "ഞാൻ സഹായിക്കാം! ലക്ഷണങ്ങൾ വിവരിക്കാമോ? പശു സാധാരണയായി ഭക്ഷണം കഴിക്കുന്നുണ്ടോ? ഏതെങ്കിലും ഡിസ്ട്രസ് അടയാളങ്ങൾ കാണുന്നുണ്ടോ?",
            send: "അയക്കുക",
            ivrSupport: "📞 IVR സപ്പോർട്ട്",
            smsSupport: "💬 SMS സപ്പോർട്ട്",
            tipDay: "💡 ഡേ ഓഫ് ടിപ്പ്",
            tempMonitor: "🌡️ ടെമ്പറേച്ചർ മോണിറ്ററിംഗ്",
            tempGuide: "നിങ്ങളുടെ മൃഗങ്ങളുടെ ബോഡി ടെമ്പറേച്ചർ റെഗുലറായി ചെക്ക് ചെയ്യുക. പശുക്കൾക്കുള്ള സാധാരണ ടെമ്പറേച്ചർ 101.5°F (38.6°C). ഉയർന്ന ടെമ്പറേച്ചറുകൾ ഫീവർ അല്ലെങ്കിൽ ഹീറ്റ് സ്ട്രെസ് സൂചിപ്പിക്കാം.",
            setReminder: "ടെമ്പറേച്ചർ റിമൈൻഡർ സെറ്റ് ചെയ്യുക",
            learnMore: "കൂടുതൽ അറിയുക",
            relatedTopics: "ബന്ധപ്പെട്ട ടോപ്പിക്കുകൾ:",
            heatStress: "ഹീറ്റ് സ്ട്രെസ് പ്രിവൻഷൻ",
            feverTreatment: "ഫീവർ ട്രീട്ട്മെന്റ് ഗൈഡ്",
            thermometer: "തെർമോമീറ്റർ ഉപയോഗം"
        },
        kn: {
            welcome: "ತಿರುಗಿ ಸ್ವಾಗತ, ಕೃಷಿಕ! 👋",
            monitor: "ನಿಮ್ಮ ಫಾರ್ಮ್‌ನ ಆರೋಗ್ಯ ಮತ್ತು ಉತ್ಪಾದಕತೆಯನ್ನು ಮಾನಿಟರ್ ಮಾಡಿ",
            digitalTwin: "ಡಿಜಿಟಲ್ ಟ್ವಿನ್ ಫಾರ್ಮ್",
            realTime: "ರಿಯಲ್-ಟೈಮ್ ಫಾರ್ಮ್ ಮಾನಿಟರಿಂಗ್ ಮತ್ತು ಅನಲಿಟಿಕ್ಸ್",
            livestockHealth: "ಪಶುಗಳ ಆರೋಗ್ಯ: 95%",
            cropStatus: "ಬೆಳೆ ಸ್ಥಿತಿ: ಉತ್ತಮ",
            dailyScan: "ದೈನಂದಿನ ಸ್ಕ್ಯಾನ್",
            uploadPhotos: "AI ಆರೋಗ್ಯ ವಿಶ್ಲೇಷಣೆಗಾಗಿ ಫೋಟೋಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
            tapUpload: "📷 ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ",
            startScan: "ಸ್ಕ್ಯಾನ್ ಪ್ರಾರಂಭಿಸಿ",
            activeAlerts: "ಸಕ್ರಿಯ ಅಲರ್ಟ್‌ಗಳು",
            diseaseCheck: "ರೋಗ ಪರೀಕ್ಷೆ 🔬",
            aiPowered: "AI-ಪವರ್ಡ್ ರೋಗ ಪತ್ತೆ ಮತ್ತು ಡಯಾಗ್ನೋಸಿಸ್",
            uploadMedia: "ಮೀಡಿಯಾ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
            uploadPhoto: "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
            takePhoto: "ಪ್ರಭಾವಿತ ಪ್ರಾಣಿ/ಬೆಳೆಯ ಸ್ಪಷ್ಟ ಫೋಟೋ ತೆಗೆಯಿರಿ",
            choosePhoto: "ಫೋಟೋ ಆಯ್ಕೆಮಾಡಿ",
            uploadVideo: "ವೀಡಿಯೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
            recordVideo: "ಪ್ರಾಣಿ ನಡವಳಿಕೆ ಅಥವಾ ಲಕ್ಷಣಗಳನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಿ",
            recordVideoBtn: "ವೀಡಿಯೋ ರೆಕಾರ್ಡ್ ಮಾಡಿ",
            voiceSymptoms: "ಧ್ವನಿ ಲಕ್ಷಣಗಳು",
            describeSymptoms: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ",
            startRecording: "ರೆಕಾರ್ಡಿಂಗ್ ಪ್ರಾರಂಭಿಸಿ",
            aiDiagnosis: "AI ಡಯಾಗ್ನೋಸಿಸ್",
            analyzing: "ವಿಶ್ಲೇಷಣೆ ಮಾಡುತ್ತಿದೆ... 85%",
            possibleCause: "ಸಂಭವನೀಯ ಕಾರಣ: ಫುಟ್ & ಮೌತ್ ಡಿಸೀಸ್ (ವಿಶ್ವಾಸ: 85%)",
            nutritionalDef: "ಸಂಭವನೀಯ ಕಾರಣ: ಪೌಷ್ಟಿಕತೆ ಕೊರತೆ (ವಿಶ್ವಾಸ: 60%)",
            preventiveSteps: "ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳು:",
            isolate: "ಪ್ರಭಾವಿತ ಪ್ರಾಣಿಗಳನ್ನು ತಕ್ಷಣವೇ ಐಸೋಲೇಟ್ ಮಾಡಿ",
            disinfect: "ಫೀಡಿಂಗ್ ಏರಿಯಾಗಳನ್ನು ಡಿಸಿನ್ಫೆಕ್ಟ್ ಮಾಡಿ",
            contactVet: "ಪಶುವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ",
            monitorAnimals: "ಇತರ ಪ್ರಾಣಿಗಳನ್ನು ಹತ್ತಿರದಿಂದ ಮಾನಿಟರ್ ಮಾಡಿ",
            expertVerification: "ತಜ್ಞ ದೃಢೀಕರಣ",
            vetTyping: "ಪಶುವೈದ್ಯ ಟೈಪಿಂಗ್...",
            chatVet: "ಪಶುವೈದ್ಯರೊಂದಿಗೆ ಚಾಟ್",
            askFarmers: "ಸಹ ಕೃಷಿಕರನ್ನು ಕೇಳಿ",
            outbreakMap: "ಔಟ್‌ಬ್ರೇಕ್ ಮ್ಯಾಪ್ 🗺️",
            realTimeOutbreak: "ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ರಿಯಲ್-ಟೈಮ್ ರೋಗ ಔಟ್‌ಬ್ರೇಕ್ ಮಾನಿಟರಿಂಗ್",
            all: "ಎಲ್ಲಾ",
            animal: "ಪ್ರಾಣಿ",
            crop: "ಬೆಳೆ",
            climate: "ಹವಾಮಾನ",
            highRisk: "ಹೈ ರಿಸ್ಕ್",
            mediumRisk: "ಮೀಡಿಯಂ ರಿಸ್ಕ್",
            yourFarm: "ನಿಮ್ಮ ಫಾರ್ಮ್",
            high: "ಹೈ",
            medium: "ಮೀಡಿಯಂ",
            low: "ಕಡಿಮೆ",
            recentAlerts: "ಇತ್ತೀಚಿನ ಅಲರ್ಟ್‌ಗಳು",
            highAlert: "🚨 ಹೈ ಅಲರ್ಟ್",
            mediumAlert: "⚠️ ಮೀಡಿಯಂ ಅಲರ್ಟ್",
            weatherAlert: "🌧️ ಹವಾಮಾನ ಅಲರ್ಟ್",
            allClear: "✅ ಎಲ್ಲಾ ಕ್ಲಿಯರ್",
            farmRecords: "ಫಾರ್ಮ್ ರೆಕಾರ್ಡ್‌ಗಳು 📋",
            digitalDiary: "ನಿಮ್ಮ ಫಾರ್ಮ್ ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ ಡಿಜಿಟಲ್ ಡೈರಿ",
            vaccination: "ಲಸಿಕೆ",
            treatment: "ಚಿಕಿತ್ಸೆ",
            sanitation: "ಸ್ಯಾನಿಟೇಶನ್",
            productivity: "ಉತ್ಪಾದಕತೆ",
            addEntry: "ಎಂಟ್ರಿ ಸೇರಿಸಿ",
            complete: "ಪೂರ್ಣಗೊಂಡಿದೆ",
            dueSoon: "ಶೀಘ್ರದಲ್ಲೇ ಡ್ಯೂ",
            ongoing: "ನಡೆಯುತ್ತಿದೆ",
            belowTarget: "ಟಾರ್ಗೆಟ್‌ಗಿಂತ ಕಡಿಮೆ",
            exportPDF: "PDF ರಫ್ತು",
            shareReport: "ರಿಪೋರ್ಟ್ ಹಂಚಿಕೊಳ್ಳಿ",
            hygiene: "ಹೈಜೀನ್ & ಸ್ಯಾನಿಟೇಶನ್ ಸ್ಕ್ಯಾನರ್ 🧽",
            hygieneAssessment: "AI-ಪವರ್ಡ್ ಹೈಜೀನ್ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಶಿಫಾರಸುಗಳು",
            cameraScanner: "ಕ್ಯಾಮೆರಾ ಸ್ಕ್ಯಾನರ್",
            scanArea: "📷 ನಿಮ್ಮ ಫಾರ್ಮ್ ಏರಿಯಾ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
            pointCamera: "ನೀರಿನ ಟ್ಯಾಂಕ್‌ಗಳು, ಫೀಡಿಂಗ್ ಏರಿಯಾಗಳು ಅಥವಾ ಪಶುಗಳ ಆಶ್ರಯಗಳಲ್ಲಿ ಕ್ಯಾಮೆರಾ ಪಾಯಿಂಟ್ ಮಾಡಿ",
            hygieneScore: "ಪ್ರಸ್ತುತ ಹೈಜೀನ್ ಸ್ಕೋರ್: 78",
            goodScore: "ಉತ್ತಮ - ಸಣ್ಣ ಸುಧಾರಣೆಗಳು ಬೇಕು",
            recommendations: "ಶಿಫಾರಸುಗಳು",
            cleanWater: "💧 ✔ ಕ್ಲೀನ್ ವಾಟರ್ ಟ್ಯಾಂಕ್",
            disinfectShed: "🏠 ✔ ಡಿಸಿನ್ಫೆಕ್ಟ್ ಶೆಡ್",
            pestControl: "🐛 ✔ ಪೆಸ್ಟ್ ಕಂಟ್ರೋಲ್",
            goodPractices: "✅ ✔ ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು",
            quickTips: "ಕ್ವಿಕ್ ಟಿಪ್ಸ್:",
            cleanWaterDaily: "ದೈನಂದಿನ ನೀರಿನ ಮೂಲಗಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ",
            removeManure: "ಕಸವನ್ನು ನಿಯಮಿತವಾಗಿ ತೆಗೆಯಿರಿ",
            disinfectTools: "ಬಳಸಿದ ನಂತರ ಉಪಕರಣಗಳನ್ನು ಡಿಸಿನ್ಫೆಕ್ಟ್ ಮಾಡಿ",
            monitorPests: "ಪೆಸ್ಟ್ ಚಿಹ್ನೆಗಳನ್ನು ಮಾನಿಟರ್ ಮಾಡಿ",
            buddyAI: "ಫಾರ್ಮರ್ ಬಡ್ಡಿ AI 🤖",
            farmingAssistant: "ನಿಮ್ಮ ಬುದ್ಧಿವಂತ ಕೃಷಿ ಸಹಾಯಕ",
            voiceAssistant: "ಧ್ವನಿ ಸಹಾಯಕ",
            tapSpeak: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ",
            hello: "ಹಲೋ! ನಾನು ನಿಮ್ಮ ಫಾರ್ಮಿಂಗ್ ಬಡ್ಡಿ. ಇಂದು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
            cowSick: "ನನ್ನ ಹಸು ಅನಾರೋಗ್ಯದಂತೆ ಕಾಣುತ್ತದೆ, ಏನು ಮಾಡಬೇಕು?",
            askSymptoms: "ನಾನು ಸಹಾಯ ಮಾಡಬಲ್ಲೆ! ಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಬಲ್ಲಿರಾ? ಹಸು ಸಾಮಾನ್ಯವಾಗಿ ತಿನ್ನುತ್ತಿದೆಯೇ? ಯಾವುದೇ ಡಿಸ್ಟ್ರೆಸ್ ಚಿಹ್ನೆಗಳು ಕಾಣುತ್ತವೆಯೇ?",
            send: "ಕಳುಹಿಸಿ",
            ivrSupport: "📞 IVR ಬೆಂಬಲ",
            smsSupport: "💬 SMS ಬೆಂಬಲ",
            tipDay: "💡 ದಿನದ ಟಿಪ್",
            tempMonitor: "🌡️ ತಾಪಮಾನ ಮಾನಿಟರಿಂಗ್",
            tempGuide: "ನಿಮ್ಮ ಪಶುಗಳ ದೇಹ ತಾಪಮಾನವನ್ನು ನಿಯಮಿತವಾಗಿ ಪರೀಕ್ಷಿಸಿ. ಜಾನುವಾರುಗಳಿಗೆ ಸಾಮಾನ್ಯ ತಾಪಮಾನ 101.5°F (38.6°C). ಹೆಚ್ಚಿನ ತಾಪಮಾನಗಳು ಜ್ವರ ಅಥವಾ ಶಾಖ ಒತ್ತಡವನ್ನು ಸೂಚಿಸಬಹುದು.",
            setReminder: "ತಾಪಮಾನ ನೆನಪಿಸುವಿಕೆಯನ್ನು ಸೆಟ್ ಮಾಡಿ",
            learnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
            relatedTopics: "ಸಂಬಂಧಿತ ವಿಷಯಗಳು:",
            heatStress: "ಶಾಖ ಒತ್ತಡ ತಡೆಗಟ್ಟುವಿಕೆ",
            feverTreatment: "ಜ್ವರ ಚಿಕಿತ್ಸೆ ಮಾರ್ಗದರ್ಶಿ",
            thermometer: "ಥರ್ಮಾಮೀಟರ್ ಬಳಕೆ"
        }
    };

    // Language selector (fixed to use <a> tags instead of <select>)
    const languageSelectors = document.querySelectorAll('.language-selector a');
    languageSelectors.forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            translatePage(lang);
        });
    });

    // Function to translate page content (expanded to cover more elements from all pages)
    function translatePage(lang) {
        const langData = translations[lang] || translations['en'];

        // Update main headings across pages
        document.querySelectorAll('section h2').forEach(h2 => {
            const text = h2.textContent.trim();
            if (text.includes('Welcome Back, Farmer')) h2.textContent = langData.welcome;
            if (text.includes('Disease Check')) h2.textContent = langData.diseaseCheck;
            if (text.includes('Outbreak Map')) h2.textContent = langData.outbreakMap;
            if (text.includes('Farm Records')) h2.textContent = langData.farmRecords;
            if (text.includes('Hygiene & Sanitation Scanner')) h2.textContent = langData.hygiene;
            if (text.includes('Farmer Buddy AI')) h2.textContent = langData.buddyAI;
            // Add for community if needed
        });

        // Update paragraphs and subtitles
        document.querySelectorAll('section p').forEach(p => {
            const text = p.textContent.trim();
            if (text.includes('Monitor your farm')) p.textContent = langData.monitor;
            if (text.includes('Real-time farm monitoring')) p.textContent = langData.realTime;
            if (text.includes('Upload photos for AI')) p.textContent = langData.uploadPhotos;
            if (text.includes('AI-powered disease detection')) p.textContent = langData.aiPowered;
            if (text.includes('Real-time disease outbreak')) p.textContent = langData.realTimeOutbreak;
            if (text.includes('Digital diary for your farm')) p.textContent = langData.digitalDiary;
            if (text.includes('AI-powered hygiene assessment')) p.textContent = langData.hygieneAssessment;
            if (text.includes('Your intelligent farming assistant')) p.textContent = langData.farmingAssistant;
            // Add more as needed for other paragraphs
        });

        // Update card headings and content
        document.querySelectorAll('.card h3').forEach(h3 => {
            const text = h3.textContent.trim();
            if (text === 'Digital Twin Farm') h3.textContent = langData.digitalTwin;
            if (text === 'Daily Scan') h3.textContent = langData.dailyScan;
            if (text === 'Active Alerts') h3.textContent = langData.activeAlerts;
            // Add more
        });

        document.querySelectorAll('.card .stats div, .card ul li').forEach(div => {
            const text = div.textContent.trim();
            if (text.includes('Livestock Health')) div.textContent = langData.livestockHealth;
            if (text.includes('Crop Status')) div.textContent = langData.cropStatus;
            // Add more for alerts, etc.
        });

        // Update buttons
        document.querySelectorAll('button').forEach(btn => {
            const text = btn.textContent.trim();
            if (text === 'Start Scan') btn.textContent = langData.startScan;
            if (text === 'Choose Photo') btn.textContent = langData.choosePhoto;
            if (text === 'Record Video') btn.textContent = langData.recordVideoBtn;
            if (text === 'Start Recording') btn.textContent = langData.startRecording;
            if (text === 'Chat with Veterinarian') btn.textContent = langData.chatVet;
            if (text === 'Ask Fellow Farmers') btn.textContent = langData.askFarmers;
            if (text === 'Add Entry') btn.textContent = langData.addEntry;
            if (text === 'Export PDF') btn.textContent = langData.exportPDF;
            if (text === 'Share Report') btn.textContent = langData.shareReport;
            if (text === 'Set Temperature Reminder') btn.textContent = langData.setReminder;
            if (text === 'Learn More') btn.textContent = langData.learnMore;
            // Add more for filters, tabs, etc.
        });

        // Update upload sections
        document.querySelectorAll('.option h3').forEach(h3 => {
            const text = h3.textContent.trim();
            if (text === 'Upload Photo') h3.textContent = langData.uploadPhoto;
            if (text === 'Upload Video') h3.textContent = langData.uploadVideo;
            if (text === 'Voice Symptoms') h3.textContent = langData.voiceSymptoms;
        });

        document.querySelectorAll('.option p').forEach(p => {
            const text = p.textContent.trim();
            if (text.includes('Take a clear photo')) p.textContent = langData.takePhoto;
            if (text.includes('Record animal behavior')) p.textContent = langData.recordVideo;
            if (text.includes('Describe symptoms')) p.textContent = langData.describeSymptoms;
        });

        // Update diagnosis and recommendations
        document.querySelectorAll('.progress').forEach(p => {
            if (p.textContent.includes('Analyzing')) p.textContent = langData.analyzing;
        });

        document.querySelectorAll('.results p').forEach(p => {
            const text = p.textContent.trim();
            if (text.includes('Foot & Mouth Disease')) p.textContent = langData.possibleCause;
            if (text.includes('Nutritional Deficiency')) p.textContent = langData.nutritionalDef;
        });

        document.querySelectorAll('.steps h3, .recommendations h3').forEach(h3 => {
            if (h3.textContent.includes('Preventive Steps')) h3.textContent = langData.preventiveSteps;
            if (h3.textContent.includes('Recommendations')) h3.textContent = langData.recommendations;
        });

        document.querySelectorAll('.steps ul li, .tips ul li, .rec p').forEach(li => {
            const text = li.textContent.trim();
            if (text.includes('Isolate affected')) li.textContent = langData.isolate;
            if (text.includes('Disinfect feeding')) li.textContent = langData.disinfect;
            if (text.includes('Contact veterinarian')) li.textContent = langData.contactVet;
            if (text.includes('Monitor other animals')) li.textContent = langData.monitorAnimals;
            if (text.includes('Clean Water Tank')) li.textContent = langData.cleanWater;
            if (text.includes('Disinfect Shed')) li.textContent = langData.disinfectShed;
            if (text.includes('Pest Control')) li.textContent = langData.pestControl;
            if (text.includes('Good Practices')) li.textContent = langData.goodPractices;
            if (text.includes('Clean water sources daily')) li.textContent = langData.cleanWaterDaily;
            if (text.includes('Remove manure regularly')) li.textContent = langData.removeManure;
            if (text.includes('Disinfect tools after use')) li.textContent = langData.disinfectTools;
            if (text.includes('Monitor for pest signs')) li.textContent = langData.monitorPests;
            // Add more
        });

        // Update AI chat
        document.querySelectorAll('.chat-box .message').forEach(msg => {
            const text = msg.textContent.trim();
            if (text.includes('Hello! I\'m your farming buddy')) msg.textContent = langData.hello;
            if (text.includes('My cow seems sick')) msg.textContent = langData.cowSick;
            if (text.includes('I can help! Can you describe the symptoms')) msg.textContent = langData.askSymptoms;
        });

        // Update tip of the day
        document.querySelectorAll('.tips h3').forEach(h3 => {
            if (h3.textContent.includes('Tip of the Day')) h3.textContent = langData.tipDay;
            if (h3.textContent.includes('Temperature Monitoring')) h3.textContent = langData.tempMonitor;
        });

        document.querySelectorAll('.tips p').forEach(p => {
            if (p.textContent.includes('Check your livestock\'s body temperature')) p.textContent = langData.tempGuide;
        });

        document.querySelectorAll('.tips ul li').forEach(li => {
            const text = li.textContent.trim();
            if (text === 'Heat stress prevention') li.textContent = langData.heatStress;
            if (text === 'Fever treatment guide') li.textContent = langData.feverTreatment;
            if (text === 'Thermometer usage') li.textContent = langData.thermometer;
        });

        // Update map filters and alerts
        document.querySelectorAll('.filters button').forEach(btn => {
            const text = btn.textContent.trim();
            if (text === 'All') btn.textContent = langData.all;
            if (text === 'Animal') btn.textContent = langData.animal;
            if (text === 'Crop') btn.textContent = langData.crop;
            if (text === 'Climate') btn.textContent = langData.climate;
        });

        document.querySelectorAll('.alerts h3').forEach(h3 => {
            if (h3.textContent.includes('Recent Alerts')) h3.textContent = langData.recentAlerts;
        });

        document.querySelectorAll('.alert span').forEach(span => {
            const text = span.textContent.trim();
            if (text.includes('High Alert')) span.textContent = langData.highAlert;
            if (text.includes('Medium Alert')) span.textContent = langData.mediumAlert;
            if (text.includes('Weather Alert')) span.textContent = langData.weatherAlert;
            if (text.includes('All Clear')) span.textContent = langData.allClear;
        });

        // Update farm records tabs and entries
        document.querySelectorAll('.tabs button').forEach(btn => {
            const text = btn.textContent.trim();
            if (text === 'Vaccination') btn.textContent = langData.vaccination;
            if (text === 'Treatment') btn.textContent = langData.treatment;
            if (text === 'Sanitation') btn.textContent = langData.sanitation;
            if (text === 'Productivity') btn.textContent = langData.productivity;
        });

        document.querySelectorAll('.entry span:last-child').forEach(span => {
            const text = span.textContent.trim();
            if (text === 'Complete') span.textContent = langData.complete;
            if (text === 'Due Soon') span.textContent = langData.dueSoon;
            if (text === 'Ongoing') span.textContent = langData.ongoing;
            if (text === 'Below Target') span.textContent = langData.belowTarget;
        });

        // Update hygiene scanner
        document.querySelectorAll('.scan-area p').forEach(p => {
            const text = p.textContent.trim();
            if (text.includes('Scan Your Farm Area')) p.textContent = langData.scanArea;
            if (text.includes('Point camera at')) p.textContent = langData.pointCamera;
            if (text.includes('Current Hygiene Score')) p.textContent = langData.hygieneScore;
            if (text.includes('Good - Minor improvements needed')) p.textContent = langData.goodScore;
        });

        // Add similar updates for community page if needed
    }

    // Button interactions (unchanged)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent.includes('Upload') || button.textContent.includes('Record') || button.textContent.includes('Scan')) {
                console.log(`${button.textContent} initiated`);
                // Add file upload or camera logic
            } else if (button.textContent.includes('Chat') || button.textContent.includes('Send')) {
                console.log(`${button.textContent} initiated`);
                // Add chat logic
            } else if (button.textContent.includes('Export') || button.textContent.includes('Share')) {
                console.log(`${button.textContent} initiated`);
                // Add export/share logic
            } else {
                console.log(`${button.textContent} clicked`);
                // Add generic button logic
            }
        });
    });

    // Map filter buttons (unchanged)
    const filterButtons = document.querySelectorAll('.filters button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Filter applied: ${button.textContent}`);
            // Add map filter logic
        });
    });

    // Tab functionality (unchanged)
    const tabButtons = document.querySelectorAll('.tabs button');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Tab switched to: ${button.textContent}`);
            // Add tab switching logic
        });
    });
});

// Map initialization with Leaflet (added)
if (document.getElementById('map')) {
    var map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India, zoom level 5

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Example markers and risk areas (customize with real data)
    L.marker([20.5937, 78.9629]).addTo(map).bindPopup("Your Farm");
    L.circle([21.0, 79.0], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100000 // 100km radius
    }).addTo(map).bindPopup("High Risk: Foot & Mouth Disease");
    L.circle([20.0, 78.0], {
        color: 'yellow',
        fillColor: '#ff0',
        fillOpacity: 0.5,
        radius: 100000
    }).addTo(map).bindPopup("Medium Risk: Crop Blight");

    // Optional: Link filters to update map layers (example stub)
    const filterButtons = document.querySelectorAll('.filters button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Filter applied: ${button.textContent}`);
            // Add logic to add/remove layers based on filter (e.g., animal vs crop)
        });
    });
}
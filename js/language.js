// ===== СИСТЕМА СМЕНЫ ЯЗЫКА =====
const translations = {
    en: {
        // Hero Section
        "hello": "Hello, I'm Diana",
        "fullstack": "Full Stack",
        "developer": "Developer",
        "hero_desc": "Passionate about creating beautiful and functional applications",
        "contact_me": "Contact Me",
        "view_work": "View My Work",
        
        // Quote
        "quote_text": "\"You don't have to be great to start, but you have to start to be great\"",
        "quote_author": "- Diana Kadyrova",
        
        // About Section
        "about_me": "About Me",
        "about_desc": "Kadyrova Diana Ulanbekovna, 17 years old, from Kyrgyzstan 🇰🇬",
        "about_text1": "I am a beginner full-stack programmer, a second-year student at the IT and Business College at MUA University, faculty SCA-24C (Computer Software and Systems Automation). I am studying and developing my skills, and am currently interested in mobile development and front-end development. In the future, I hope to find my niche, but for now, I am trying everything.",
        "about_text2": "I strive to develop as a specialist and as a person, and I enjoy working in a team and self-development. With 2 years of experience in Java development and participation in various hackathons including Startup Nation, I've developed strong problem-solving skills and the ability to work effectively in teams.",
        "about_text3": "Interesting facts about me: In my free time, I enjoy reading books and am interested in psychology. I studied public speaking, SMM, and speed reading, and was a member of a discussion club where I completed 12 training courses, including ones on Agile and Scrum. During my school years, I was interested in acting and played leading roles in works by Ch. Aitmatov. I took second place in regional competitions, did gymnastics for three years, and, like everyone else, I love watching TV series and analyzing them.",
        
        // Cards
        "experience": "Experience",
        "exp1": "2 years learning Java development",
        "exp2": "Volunteer in projects and hackathons",
        "exp3": "Experience with backend APIs and databases",
        "exp4": "Currently learning React and Flutter",
        
        "certificates": "Certificates",
        "cert1": "Java Programming Certificate",
        "cert2": "Programming course certificate",
        "cert3": "Startup Nation Hackathon Participant",
        "cert4": "TIFE Certificate",
        "cert5": "Public speaking, SMM Certificates",
        "cert6": "Speed reading, gymnastics, and acting Certificates",
        
        "hard_skills": "Hard Skills",
        "skill1": "HTML, CSS, JavaScript",
        "skill2": "Java, JavaFx, Python basics",
        "skill3": "Spring Boot basics",
        "skill4": "SQL & NoSQL Databases",
        "skill5": "React and Flutter learning",
        
        "soft_skills": "Soft Skills",
        "soft1": "Teamwork & Collaboration",
        "soft2": "Problem-solving",
        "soft3": "Communication",
        "soft4": "Time Management",
        "soft5": "Empathetic",
        "soft6": "Creative",
        "soft7": "MBTI - ENTJ",
        "soft8": "Goal-oriented",
        
        // Tools
        "tools_title": "Tools & Technologies",
        "tools_desc": "Technologies and tools I use to bring ideas to life",
        
        // Education
        "education": "Education",
        "education_desc": "My educational journey in technology",
        "school_title": "School #69",
        "school_desc": "I graduated from school №69, studied there until the 9th grade with excellent grades, and went to college.",
        "visit_school": "Visit School Website",
        "college_title": "IT and Business College at MUA University",
        "college_desc": "2nd year student, specializing in programming. Learning software development, database management, and web technologies.",
        "visit_college": "Visit College Website",
        
        // Extracurricular Activities
        "extracurricular_title": "Extracurricular Activities",
        "extracurricular_desc": "My participation in clubs, volunteer work, and projects",
        "debate_club": "AUCA Debate Club",
        "debate_desc": "Member of the debate club, developing public speaking and critical thinking skills.",
        "volunteer_leadership": "Leadership Academy Volunteer",
        "leadership_desc": "Volunteer at Leadership Academy, contributing to youth development programs.",
        "hospice_volunteer": "First Children's Hospice Volunteer",
        "hospice_desc": "Volunteer at the first children's hospice, providing support and assistance.",
        "tife_project": "TIFE Project Finalist",
        "tife_desc": "Finalist of the TIFE project at AUCA, participating in innovative educational initiatives.",
        "startup_hackathon": "Startup Nation Hackathon",
        "startup_desc": "Participated in Startup Nation hackathon with a project idea for Kyrgyz Test platform.",
        "conference": "International Conference",
        "conference_desc": "Participant in International Student Conference \"Trends and Perspectives of Education Development in Digitalization\".",
        "view_profile": "View Instagram",
        "visit_website": "Visit Website",
        "learn_more": "Learn More",
        
        // Languages
        "languages": "Languages",
        "languages_desc": "Languages I speak and write",
        "kyrgyz": "Kyrgyz",
        "russian": "Russian",
        "english": "English",
        "german": "German",
        "native": "Native",
        "fluent": "C1/Fluent",
        "fluent_b2": "B2/Fluent",
        "basic": "A1/Basic",

        // Projects
        "projects": "My Projects",
        "projects_desc": "Some of my recent work and personal projects",
        "landing_page": "Landing Page",
        "gallows_game": "Gallows Game",
        "photo_editor": "Photo Editor",
        "portfolio_site": "Portfolio Website",
        "project1_desc": "Responsive landing page with modern design and smooth animations.",
        "project2_desc": "Classic word guessing game with graphical interface.",
        "project3_desc": "Image editing application with various filters and tools.",
        "project4_desc": "This responsive portfolio website built with modern technologies.",
        "coming_soon": "More Projects Coming Soon",
        
        // Contact
        "contact": "Contact Me",
        "contact_desc": "I would love to hear about your project and how I can help.",
        "get_in_touch": "Get In Touch",
        "email": "Email",
        "phone": "Phone",
        "location": "Location",
        "kyrgyzstan": "Kyrgyzstan",
        "your_name": "Your Name *",
        "your_email": "Your Email *",
        "your_message": "Your Message *",
        "send_message": "Send Message",
        
        // Footer
        "footer_desc": "Full Stack Developer passionate about creating amazing digital experiences."
    },
    
    ru: {
        // Hero Section
        "hello": "Привет, я Диана",
        "fullstack": "Full Stack",
        "developer": "Разработчик",
        "hero_desc": "Увлечена созданием красивых и функциональных приложений",
        "contact_me": "Связаться со мной",
        "view_work": "Мои работы",
        
        // Quote
        "quote_text": "\"Не обязательно быть великим, чтобы начать, но нужно начать, чтобы стать великим\"",
        "quote_author": "- Диана Кадырова",
        
        // About Section
        "about_me": "Обо мне",
        "about_desc": "Кадырова Диана Уланбековна, 17 лет, из Кыргызстана 🇰🇬",
        "about_text1": "Я начинающий full-stack программист, студентка 2 курса IT и Бизнес Колледжа при Университете МУА, факультет SCA-24C (Компьютерное программное обеспечение и автоматизация систем). Я изучаю и развиваю свои навыки, и в настоящее время интересуюсь мобильной разработкой и фронтенд-разработкой. В будущем я надеюсь найти свою нишу, но пока пробую всё.",
        "about_text2": "Я стремлюсь развиваться как специалист и как личность, и мне нравится работать в команде и заниматься саморазвитием. Имея 2 года опыта в разработке на Java и участие в различных хакатонах, включая Startup Nation, я развила сильные навыки решения проблем и способность эффективно работать в командах.",
        "about_text3": "Интересные факты обо мне: В свободное время я люблю читать книги и интересуюсь психологией. Изучала ораторское искусство, SMM и скорочтение, была участницей дискуссионного клуба, где прошла 12 учебных курсов, включая курсы по Agile и Scrum. В школьные годы увлекалась актерским мастерством и играла главные роли в произведениях Ч. Айтматова. Заняла второе место в региональных конкурсах, три года занималась гимнастикой и, как и все, люблю смотреть сериалы и анализировать их.",
        
        // Cards
        "experience": "Опыт",
        "exp1": "2 года изучения Java разработки",
        "exp2": "Волонтер в проектах и хакатонах",
        "exp3": "Опыт работы с backend API и базами данных",
        "exp4": "В настоящее время изучаю React и Flutter",
        
        "certificates": "Сертификаты",
        "cert1": "Сертификат по программированию на Java",
        "cert2": "Сертификат курса программирования",
        "cert3": "Участник хакатона Startup Nation",
        "cert4": "Сертификат TIFE",
        "cert5": "Сертификаты по ораторскому искусству, SMM",
        "cert6": "Сертификаты по скорочтению, гимнастике и актерскому мастерству",
        
        "hard_skills": "Технические навыки",
        "skill1": "HTML, CSS, JavaScript",
        "skill2": "Java, JavaFx, основы Python",
        "skill3": "Основы Spring Boot",
        "skill4": "SQL & NoSQL базы данных",
        "skill5": "Изучаю React и Flutter",
        
        "soft_skills": "Гибкие навыки",
        "soft1": "Командная работа",
        "soft2": "Решение проблем",
        "soft3": "Коммуникация",
        "soft4": "Тайм-менеджмент",
        "soft5": "Эмпатия",
        "soft6": "Креативность",
        "soft7": "MBTI - ENTJ",
        "soft8": "Целеустремленность",
        
        // Tools
        "tools_title": "Инструменты и технологии",
        "tools_desc": "Технологии и инструменты, которые я использую для воплощения идей в жизнь",
        
        // Education
        "education": "Образование",
        "education_desc": "Мой образовательный путь в технологиях",
        "school_title": "Школа №69",
        "school_desc": "Я окончила школу №69, училась там до 9 класса с отличными оценками и поступила в колледж.",
        "visit_school": "Посетить сайт школы",
        "college_title": "IT и Бизнес Колледж при Университете МУА",
        "college_desc": "Студентка 2 курса, специализация программирование. Изучаю разработку программного обеспечения, управление базами данных и веб-технологии.",
        "visit_college": "Посетить сайт колледжа",
        
        // Extracurricular Activities
        "extracurricular_title": "Внеклассная деятельность",
        "extracurricular_desc": "Мое участие в клубах, волонтерской работе и проектах",
        "debate_club": "Дебатный клуб AUCA",
        "debate_desc": "Участница дебатного клуба, развиваю навыки публичных выступлений и критического мышления.",
        "volunteer_leadership": "Волонтер Leadership Academy",
        "leadership_desc": "Волонтер в Leadership Academy, участвую в программах развития молодежи.",
        "hospice_volunteer": "Волонтер Первого детского хосписа",
        "hospice_desc": "Волонтер в первом детском хосписе, оказываю поддержку и помощь.",
        "tife_project": "Финалист проекта TIFE",
        "tife_desc": "Финалист проекта TIFE при AUCA, участвую в инновационных образовательных инициативах.",
        "startup_hackathon": "Хакатон Startup Nation",
        "startup_desc": "Участница хакатона Startup Nation с проектом для платформы Кыргыз Тест.",
        "conference": "Международная конференция",
        "conference_desc": "Участница Международной студенческой конференции \"Тенденции и перспективы развития образования в условиях цифровизации\".",
        "view_profile": "Посмотреть Instagram",
        "visit_website": "Посетить сайт",
        "learn_more": "Узнать больше",
        
        // Languages
        "languages": "Языки",
        "languages_desc": "Языки, на которых я говорю и пишу",
        "kyrgyz": "Кыргызский",
        "russian": "Русский",
        "english": "Английский",
        "german": "Немецкий",
        "native": "Родной",
        "fluent": "C1/Свободно",
        "fluent_b2": "B2/Свободно",
        "basic": "A1/Базовый",
        
        // Projects
        "projects": "Мои проекты",
        "projects_desc": "Некоторые из моих последних работ и личных проектов",
        "landing_page": "Лендинг Пейдж",
        "gallows_game": "Игра Виселица",
        "photo_editor": "Фоторедактор",
        "portfolio_site": "Сайт-портфолио",
        "project1_desc": "Адаптивная посадочная страница с современным дизайном и плавными анимациями.",
        "project2_desc": "Классическая игра в угадывание слов с графическим интерфейсом.",
        "project3_desc": "Приложение для редактирования изображений с различными фильтрами и инструментами.",
        "project4_desc": "Этот адаптивный сайт-портфолио, созданный с использованием современных технологий.",
        "coming_soon": "Скоро больше проектов",
        
        // Contact
        "contact": "Связаться со мной",
        "contact_desc": "Буду рада услышать о вашем проекте и о том, как я могу помочь.",
        "get_in_touch": "Связаться",
        "email": "Email",
        "phone": "Телефон",
        "location": "Местоположение",
        "kyrgyzstan": "Кыргызстан",
        "your_name": "Ваше имя *",
        "your_email": "Ваш email *",
        "your_message": "Ваше сообщение *",
        "send_message": "Отправить сообщение",
        
        // Footer
        "footer_desc": "Full Stack разработчик, увлеченный созданием удивительных цифровых впечатлений."
    }
};

// ===== ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ ЯЗЫКА =====
function initLanguageSystem() {
    const languageToggle = document.getElementById('languageToggle');
    let currentLanguage = localStorage.getItem('language') || 'en';
    
    // Устанавливаем начальный язык
    setLanguage(currentLanguage);
    
    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
        setLanguage(currentLanguage);
        localStorage.setItem('language', currentLanguage);
        
        // Анимация кнопки
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
}

function setLanguage(language) {
    // Обновляем все элементы с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[language][key];
            } else {
                element.textContent = translations[language][key];
            }
        }
    });
    
    // Обновляем атрибут lang у html элемента
    document.documentElement.setAttribute('lang', language);
    
    console.log(`🌐 Язык изменен на: ${language}`);
}

// Запускаем систему языка при загрузке DOM
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSystem();
    console.log('✅ Система языка инициализирована!');
});
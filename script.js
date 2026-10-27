const translations = {
  en: {
    navHome:"Home",navAbout:"About",navProjects:"Projects",navVision:"Vision",navContact:"Contact",
    heroEyebrow:"INDEPENDENT BUILDER · MOROCCO",hello:"Hello, I'm",heroRole:"Founder · Developer · E-commerce Entrepreneur",
    heroDescription:"I turn ideas into digital experiences — exploring AI, building useful products, and learning by shipping.",
    exploreProjects:"Explore my projects",contactMe:"Contact me",heroMeta:"Curiosity in motion. Progress by design.",artCaption:"IDEAS → IMPACT",scroll:"SCROLL TO DISCOVER",
    aboutKicker:"01 / ABOUT",aboutTitle:"A builder's mindset.<br><em>A long-term vision.</em>",
    aboutLead:"I'm Brahim, a Moroccan developer and entrepreneur interested in what happens when technology meets real-world business.",
    aboutText:"I'm developing my skills by creating real projects, testing ideas, and learning from each iteration. My focus today is on AI-powered tools and e-commerce — with a belief that consistent progress matters more than perfect beginnings.",
    principleOne:"Build with purpose",principleTwo:"Learn through action",principleThree:"Think long-term",
    projectsKicker:"02 / SELECTED PROJECTS",projectsNote:"Early-stage projects. Built with ambition.",projectsTitle:"Ideas into<br><em>real products.</em>",
    projectsIntro:"Two different paths, one goal: use technology and commerce to create something useful.",
    atlasSubtitle:"AI-powered platform",atlasDescription:"An early-stage project exploring how AI tools can help e-commerce businesses work smarter and improve productivity.",
    statusPrototype:"Prototype · In development",visitProject:"Visit project",shopVisualLabel:"COMMERCE IN MOTION",shopSubtitle:"Online store",
    shopDescription:"An e-commerce venture focused on product discovery, online selling, and learning the practical side of digital commerce.",
    statusStore:"Store · Online",visitStore:"Visit store",visionKicker:"03 / THE VISION",visionTitle:"Start small.<br><em>Build with intention.</em>",
    visionText:"My goal is to keep learning, turn experiments into useful products, and grow projects that solve real problems. The journey is still unfolding — this is where I document the work.",
    connect:"Let's connect",contactKicker:"04 / CONTACT",contactTitle:"Have an idea?<br><em>Let's talk.</em>",
    contactText:"Open to meaningful conversations, collaborations, and opportunities to build.",emailMe:"Email me",
    contactNote:"Currently building and learning, one iteration at a time.",footerLine:"Designed with intent. Built in progress."
  },
  ar: {
    navHome:"الرئيسية",navAbout:"من أنا",navProjects:"المشاريع",navVision:"الرؤية",navContact:"تواصل معي",
    heroEyebrow:"صانع مستقل · المغرب",hello:"مرحباً، أنا",heroRole:"مؤسس · مطوّر · رائد أعمال في التجارة الإلكترونية",
    heroDescription:"أحوّل الأفكار إلى تجارب رقمية، وأستكشف الذكاء الاصطناعي وأطوّر منتجات مفيدة من خلال التجربة والتعلّم.",
    exploreProjects:"اكتشف مشاريعي",contactMe:"تواصل معي",heroMeta:"فضول مستمر. وتقدّم بخطوات مدروسة.",artCaption:"من الفكرة إلى الأثر",scroll:"اكتشف المزيد",
    aboutKicker:"01 / من أنا",aboutTitle:"عقلية صانع.<br><em>ورؤية بعيدة المدى.</em>",
    aboutLead:"أنا إبراهيم، مطوّر ورائد أعمال مغربي، يهمّني بناء حلول تجمع بين التكنولوجيا واحتياجات الأعمال الحقيقية.",
    aboutText:"أطوّر مهاراتي من خلال إنشاء مشاريع حقيقية وتجربة الأفكار والتعلّم من كل محاولة. أركّز حالياً على أدوات الذكاء الاصطناعي والتجارة الإلكترونية، وأؤمن أن التقدّم المستمر أهم من انتظار البداية المثالية.",
    principleOne:"ابنِ بهدف واضح",principleTwo:"تعلّم بالتطبيق",principleThree:"فكّر على المدى البعيد",
    projectsKicker:"02 / مشاريع مختارة",projectsNote:"مشاريع في بدايتها، وطموحها كبير.",projectsTitle:"من الأفكار إلى<br><em>منتجات حقيقية.</em>",
    projectsIntro:"مساران مختلفان وهدف واحد: استخدام التكنولوجيا والتجارة لصناعة شيء مفيد.",
    atlasSubtitle:"منصة مدعومة بالذكاء الاصطناعي",atlasDescription:"مشروع في مراحله الأولى يستكشف كيف يمكن لأدوات الذكاء الاصطناعي مساعدة متاجر التجارة الإلكترونية على تحسين العمل والإنتاجية.",
    statusPrototype:"نسخة أولية · قيد التطوير",visitProject:"زيارة المشروع",shopVisualLabel:"التجارة في تطوّر",shopSubtitle:"متجر إلكتروني",
    shopDescription:"مشروع في التجارة الإلكترونية يهتم باكتشاف المنتجات والبيع عبر الإنترنت والتعلّم العملي لتسيير متجر رقمي.",
    statusStore:"المتجر · متاح على الإنترنت",visitStore:"زيارة المتجر",visionKicker:"03 / الرؤية",visionTitle:"ابدأ صغيراً.<br><em>وابنِ بوعي.</em>",
    visionText:"هدفي هو مواصلة التعلّم وتحويل التجارب إلى منتجات مفيدة وتطوير مشاريع تحلّ مشاكل حقيقية. الرحلة ما زالت مستمرة، وهنا أوثّق خطواتها.",
    connect:"لنتواصل",contactKicker:"04 / التواصل",contactTitle:"لديك فكرة؟<br><em>لنتحدث عنها.</em>",
    contactText:"أرحّب بالنقاشات الجادة والتعاون والفرص التي تتيح لنا بناء شيء مفيد.",emailMe:"راسلني",
    contactNote:"أبني وأتعلّم حالياً، خطوة بعد خطوة.",footerLine:"تصميم بهدف واضح، ومشروع يتطوّر باستمرار."
  }
};

const languageButton = document.getElementById("language-toggle");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".desktop-nav");
let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;
  const isArabic = language === "ar";
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  languageButton.textContent = isArabic ? "EN" : "عربي";
  languageButton.setAttribute("aria-label", isArabic ? "Switch to English" : "التبديل إلى العربية");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });
  document.title = isArabic
    ? "إبراهيم النجار | مؤسس ومطوّر ورائد أعمال"
    : "Brahim Ennajjar | Founder · Developer · Entrepreneur";
  document.querySelector('meta[name="description"]').content = isArabic
    ? "إبراهيم النجار، مطوّر ورائد أعمال مغربي، ومؤسس مشروع Atlas AI وصاحب تجربة في التجارة الإلكترونية."
    : "Brahim Ennajjar — Moroccan developer, founder of Atlas AI, and e-commerce entrepreneur building useful digital products.";
  try { localStorage.setItem("be-language", language); } catch (_) {}
}
languageButton.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "ar" : "en"));

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
document.querySelectorAll(".desktop-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const progressBar = document.getElementById("progress-bar");
function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
}
window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

document.getElementById("year").textContent = new Date().getFullYear();

// A subtle theme switch: press "T" on desktop to toggle light/dark mode.
document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "t" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    document.body.classList.toggle("light-mode");
  }
});
try {
  const savedLanguage = localStorage.getItem("be-language");
  if (savedLanguage === "ar") setLanguage("ar");
} catch (_) {}

const T={
fr:{nProj:"Projets",nExp:"Parcours",nSk:"Compétences",nEdu:"Formation",nCta:"Me contacter",status:"Disponible pour un stage de fin d’études",
role:"Élève ingénieure en génie logiciel et informatique décisionnelle",pitch:"Étudiante en troisième année de génie informatique à l’Institut International de Technologie (IIT), spécialisée en génie logiciel et informatique décisionnelle, à la recherche d’un stage de fin d’études. Ce stage est l’occasion de mettre en pratique mes compétences en IA, data et développement, de contribuer à des projets innovants et d’enrichir mon expérience au sein d’une équipe dynamique.",
cv:"Télécharger mon CV",seeProj:"Voir mes projets",hProj:"Projets",leadProj:"Des projets académiques et personnels, de l’IA agentique au mobile. Choisis un projet pour voir le détail.",
hExp:"Parcours professionnel",hSk:"Compétences",hEdu:"Formation et certificats",hCt:"Travaillons ensemble",leadCt:"Je cherche un stage de fin d’études en IA, data ou développement. Écris-moi, je réponds vite.",
langs:"<b>Langues :</b> arabe, français, anglais",all:"Tous",tech:"Technologies",title:"Khawla Ben Abdallah — Ingénieure en génie logiciel et informatique décisionnelle",btn:"EN"},
en:{nProj:"Projects",nExp:"Experience",nSk:"Skills",nEdu:"Education",nCta:"Contact me",status:"Available for an end-of-studies internship",
role:"Engineering student in software engineering and business intelligence",pitch:"Third-year computer engineering student at the International Institute of Technology (IIT), specializing in software engineering and business intelligence, and looking for an end-of-studies internship. This internship is a chance to apply my skills in AI, data and development, contribute to innovative projects and build my professional experience within a dynamic team.",
cv:"Download my CV",seeProj:"See my projects",hProj:"Projects",leadProj:"Academic and personal projects, from agentic AI to mobile. Pick a project to see the details.",
hExp:"Professional experience",hSk:"Skills",hEdu:"Education and certificates",hCt:"Let’s work together",leadCt:"I’m looking for an end-of-studies internship in AI, data or development. Write to me, I reply quickly.",
langs:"<b>Languages:</b> Arabic, French, English",all:"All",tech:"Technologies",title:"Khawla Ben Abdallah — Software engineering and business intelligence student",btn:"FR"}};
const CAT={IA:{fr:"IA",en:"AI"},Web:{fr:"Web",en:"Web"},Mobile:{fr:"Mobile",en:"Mobile"},Data:{fr:"Data",en:"Data"}};
const projects=[
{cat:"IA",date:{fr:"Sept. 2026",en:"Sept. 2026"},title:{fr:"SmartCampus AI",en:"SmartCampus AI"},sub:{fr:"Plateforme agentique d’orientation universitaire",en:"Agentic platform for university guidance"},
 text:{fr:"Plateforme basée sur l’IA générative et des agents autonomes qui personnalise l’orientation universitaire, assiste la préinscription et suit les candidats via une interface conversationnelle multilingue. Le RAG ancre chaque réponse dans les données de l’établissement ; la voix est gérée avec Whisper.",
 en:"A platform built on generative AI and autonomous agents that personalizes university guidance, assists with pre-registration and follows candidates through a multilingual conversational interface. RAG grounds every answer in the institution’s data; voice is handled with Whisper."},
 stack:["Python","FastAPI","Angular","PostgreSQL","LangGraph","LLM","RAG","pgvector","Whisper"]},
{cat:"Web",date:{fr:"2026",en:"2026"},title:{fr:"EduCampus",en:"EduCampus"},sub:{fr:"Plateforme universitaire en microservices",en:"Microservices-based university platform"},
 text:{fr:"Plateforme universitaire qui centralise la gestion des étudiants et des cours, les examens en ligne et la réservation des salles. Elle repose sur des microservices indépendants qui communiquent en REST, gRPC et SOAP.",
 en:"A university platform that centralizes student and course management, online exams and room booking. It relies on independent microservices that communicate through REST, gRPC and SOAP."},
 stack:["Microservices","REST","gRPC","SOAP"]},
{cat:"Web",date:{fr:"Mai 2026",en:"May 2026"},title:{fr:"Module ERP School CRM",en:"School CRM ERP module"},sub:{fr:"Gestion des étudiants",en:"Student management"},
 text:{fr:"Conception et développement d’un module ERP dédié à la gestion des étudiants : inscription, suivi des dossiers, gestion des classes, des paiements et des informations académiques.",
 en:"Design and development of an ERP module dedicated to student management: enrollment, record tracking, class management, payments and academic information."},
 stack:["ERP","School CRM"]},
{cat:"IA",date:{fr:"Févr. – mai 2026",en:"Feb – May 2026"},title:{fr:"Extraction des fiches de notes",en:"Grade sheet extraction"},sub:{fr:"Vision par ordinateur et OCR",en:"Computer vision and OCR"},
 text:{fr:"Application web qui détecte la structure des fiches de notes, extrait les données imprimées et manuscrites, puis permet leur correction, validation et archivage.",
 en:"A web app that detects the structure of grade sheets, extracts printed and handwritten data, then lets staff correct, validate and archive it."},
 stack:["Python","Flask","Angular","MySQL","YOLOv8","PyTorch","ResNet-18","OpenCV","Tesseract OCR","EasyOCR"]},
{cat:"Mobile",date:{fr:"2026",en:"2026"},title:{fr:"Smart Study",en:"Smart Study"},sub:{fr:"Application mobile intelligente pour les étudiants",en:"Intelligent mobile app for students"},
 text:{fr:"Application mobile qui facilite l’apprentissage et la gestion des études, développée avec Flutter, ML Kit et des API modernes.",
 en:"A mobile app that makes learning and study management easier, built with Flutter, ML Kit and modern APIs."},
 stack:["Flutter","Dart","Google ML Kit","API REST"]},
{cat:"Web",date:{fr:"2026",en:"2026"},title:{fr:"Plateforme de communication anonyme",en:"Anonymous communication platform"},sub:{fr:"Application web simple, intuitive et sécurisée",en:"Simple, intuitive and secure web app"},
 text:{fr:"Application web qui permet aux utilisateurs de communiquer de manière anonyme. Le frontend et le backend sont séparés pour faciliter la maintenance, l’évolution et la gestion des fonctionnalités.",
 en:"A web app that lets users communicate anonymously. The frontend and backend are separated to ease maintenance, evolution and feature management."},
 layers:[[{fr:"Frontend",en:"Frontend"},["Angular","TypeScript","HTML5 / CSS3"]],[{fr:"Backend",en:"Backend"},["Laravel","API REST"]],[{fr:"Base de données",en:"Database"},["MySQL"]]]},
{cat:"Data",date:{fr:"Avr. 2026",en:"Apr. 2026"},title:{fr:"Dashboard analytique pour agence de voyage",en:"Travel agency analytics dashboard"},sub:{fr:"Informatique décisionnelle",en:"Business intelligence"},
 text:{fr:"Solution décisionnelle qui centralise et analyse les données d’une agence de voyage grâce à un Data Warehouse, des processus ETL et un cube OLAP.",
 en:"A business intelligence solution that centralizes and analyzes a travel agency’s data through a Data Warehouse, ETL processes and an OLAP cube."},
 stack:["SQL Server","SSIS","SSAS","Power BI"]}];
const jobs=[
[{fr:"Juin – août 2026",en:"Jun – Aug 2026"},"TCodeX, Tunis",{fr:"Assistant IA pour la prévision et la résolution des problèmes qualité",en:"AI assistant for quality forecasting and issue resolution"},
 {fr:"Assistant intelligent qui associe un modèle de Machine Learning et un chatbot basé sur Groq pour prédire les retards de traitement, anticiper les risques qualité et expliquer les alertes.",en:"An intelligent assistant combining a Machine Learning model with a Groq-based chatbot to predict processing delays, anticipate quality risks and explain alerts."},
 ["Python","FastAPI","Scikit-learn","Pandas","NumPy","Groq","Angular"]],
[{fr:"Juin – août 2025",en:"Jun – Aug 2025"},"OneFold Tech, Sfax",{fr:"Plateforme de gestion et d’analyse des données agricoles",en:"Agricultural data management and analytics platform"},
 {fr:"Plateforme web full-stack d’analyse des données agricoles et d’aide à la décision, conteneurisée avec Docker et déployée via une chaîne CI/CD.",en:"A full-stack web platform for agricultural data analysis and decision support, containerized with Docker and deployed through a CI/CD pipeline."},
 ["Spring Boot","Angular","PostgreSQL","Docker","Docker Compose","GitLab","Swagger"]],
[{fr:"Févr. – juin 2025",en:"Feb – Jun 2025"},"ENET’Com, Sfax",{fr:"Détection précoce du kératocône par approche ensembliste",en:"Early keratoconus detection with an ensemble approach"},
 {fr:"Modèle ensembliste (transfert d’apprentissage, CNN et GNN) appliqué à des images de topographie cornéenne.",en:"An ensemble model (transfer learning, CNN and GNN) applied to corneal topography images."},
 ["Python","TensorFlow","PyTorch","PyTorch Geometric","Scikit-learn","OpenCV","Google Colab"]],
[{fr:"Févr. – mai 2023",en:"Feb – May 2023"},"Délice Holding",{fr:"Vision industrielle pour la détection de packs manquants",en:"Industrial vision for missing pack detection"},
 {fr:"Système de vision par ordinateur qui détecte automatiquement les packs manquants sur une ligne de production, avec YOLO en temps réel et un Raspberry Pi pour l’acquisition et le traitement embarqués.",en:"A computer vision system that automatically detects missing packs on a production line, using YOLO in real time and a Raspberry Pi for embedded acquisition and processing."},
 ["Python","YOLO","PyTorch","OpenCV","Raspberry Pi"]]];
const skills=[
[{fr:"IA générative et agentique",en:"Generative and agentic AI"},["LLM","RAG","AI agents","Multi-agent systems"]],
[{fr:"IA et Machine Learning",en:"AI and Machine Learning"},["Scikit-learn","TensorFlow","PyTorch","Keras","Pandas","NumPy"]],
[{fr:"Deep Learning et vision",en:"Deep Learning and vision"},["CNN","GNN","YOLO","OpenCV","OCR"]],
[{fr:"Data engineering et Big Data",en:"Data engineering and Big Data"},["Apache Spark","Hadoop","ETL","Data Warehouse","Power BI"]],
[{fr:"Langages",en:"Languages"},["Python","Java","C","PHP","JavaScript","Dart"]],
[{fr:"Web et mobile",en:"Web and mobile"},["Angular","Laravel","ASP.NET Core","Spring Boot","Flutter","React Native"]],
[{fr:"DevOps et méthodes",en:"DevOps and methods"},["Git","GitHub","Docker","Docker Compose","CI/CD","UML","Agile/Scrum"]]];
const edu=[
[{fr:"2024 – présent",en:"2024 – present"},{fr:"Cycle ingénieur en génie logiciel et informatique décisionnelle",en:"Engineering cycle in software engineering and business intelligence"},"Institut International de Technologie (IIT), Sfax"],
[{fr:"2023 – 2025",en:"2023 – 2025"},{fr:"Mastère en ingénierie des systèmes intelligents",en:"Master’s in intelligent systems engineering"},"ENET’Com, Sfax"],
[{fr:"2020 – 2023",en:"2020 – 2023"},{fr:"Licence en électronique, électrotechnique et automatique (informatique industrielle)",en:"Bachelor’s in electronics, electrical engineering and automation (industrial computing)"},"ISSAT Mahdia"],
[{fr:"2019 – 2020",en:"2019 – 2020"},{fr:"Baccalauréat en sciences expérimentales",en:"Baccalaureate in experimental sciences"},{fr:"Lycée Ibn Rochd, Chebba",en:"Ibn Rochd High School, Chebba"}]];
const certs=[[{fr:"Azure AI Fundamentals",en:"Azure AI Fundamentals"},"azure-ai"],[{fr:"Azure Data Fundamentals",en:"Azure Data Fundamentals"},"azure-data"],
[{fr:"Security, Compliance and Identity Fundamentals",en:"Security, Compliance and Identity Fundamentals"},"security"],[{fr:"Formation en intelligence artificielle",en:"Artificial intelligence training"},"ai-training"]];

const $=s=>document.querySelector(s);
let lang="fr",cat="all",cur=0;
try{lang=localStorage.getItem("lang")||(navigator.language||"").startsWith("en")?"en":"fr";const s=localStorage.getItem("lang");if(s)lang=s}catch(e){}
const L=o=>typeof o==="string"?o:o[lang];
const tags=a=>`<ul class="tags">${a.map(t=>`<li>${t}</li>`).join("")}</ul>`;
const catName=c=>CAT[c][lang];
function detail(p,anim){
 const d=$("#pdetail");
 d.innerHTML=`<span class="badge">${catName(p.cat)}</span><h3>${L(p.title)}</h3><p class="sub">${L(p.sub)} · ${L(p.date)}</p><p>${L(p.text)}</p>`+
 (p.layers?`<div class="layers">${p.layers.map(l=>`<div><h4>${L(l[0])}</h4>${tags(l[1])}</div>`).join("")}</div>`:`<h4>${T[lang].tech}</h4>${tags(p.stack)}`);
 if(anim){d.classList.remove("swap");void d.offsetWidth;d.classList.add("swap")}
}
function projectsUI(){
 const cs=["all",...Object.keys(CAT)];
 $(".filters").innerHTML=cs.map(c=>`<button class="chip" data-c="${c}" aria-pressed="${c===cat}">${c==="all"?T[lang].all:catName(c)}</button>`).join("");
 const vis=projects.filter(p=>cat==="all"||p.cat===cat);
 if(!vis.includes(projects[cur]))cur=projects.indexOf(vis[0]);
 $(".plist").innerHTML=vis.map(p=>{const i=projects.indexOf(p);return `<li><button role="tab" aria-selected="${i===cur}" data-i="${i}"><b>${L(p.title)}</b><small>${catName(p.cat)} · ${L(p.date)}</small></button></li>`}).join("");
 detail(projects[cur],false);
}
function render(){
 document.documentElement.lang=lang;document.title=T[lang].title;$("#lang").textContent=T[lang].btn;
 document.querySelectorAll("[data-i]").forEach(e=>e.innerHTML=T[lang][e.dataset.i]);
 projectsUI();
 $("#timeline").innerHTML=jobs.map(j=>`<li><div class="when"><b>${L(j[0])}</b><span>${j[1]}</span></div><div class="card"><h3>${L(j[2])}</h3><p>${L(j[3])}</p>${tags(j[4])}</div></li>`).join("");
 $("#skills").innerHTML=skills.map(s=>`<div class="card"><h3>${L(s[0])}</h3>${tags(s[1])}</div>`).join("");
 $("#edu").innerHTML=edu.map(e=>`<li><span>${L(e[0])}</span><b>${L(e[1])}</b><span>${L(e[2])}</span></li>`).join("");
 $("#certs").innerHTML=certs.map(c=>`<a href="assets/certs/${c[1]}.jpg" target="_blank" rel="noopener"><img src="assets/certs/${c[1]}.jpg" alt="${L(c[0])}" loading="lazy"><span>${L(c[0])}</span></a>`).join("");
}
$(".filters").addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;cat=b.dataset.c;projectsUI()});
$(".plist").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;cur=+b.dataset.i;
 document.querySelectorAll(".plist button").forEach(x=>x.setAttribute("aria-selected",x===b));detail(projects[cur],true)});
$("#lang").addEventListener("click",()=>{lang=lang==="fr"?"en":"fr";try{localStorage.setItem("lang",lang)}catch(e){}render()});
const burger=$(".burger"),menu=$("#menu");
burger.addEventListener("click",()=>{const o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)});
menu.addEventListener("click",e=>{if(e.target.tagName==="A"){menu.classList.remove("open");burger.setAttribute("aria-expanded","false")}});
render();

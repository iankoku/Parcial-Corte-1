// Datos iniciales (mock)
export const profiles = [
  {
    id: "p1",
    name: "Vermen Ayala",
    profession: "Desarrollador FullStack",
    description:
      "Apasionado por el diseño de interfaces, accesibilidad y la enseñanza. 3+ años construyendo UIs en React.",
    image: "/profile1.png",
    experiences: [
      {
        id: "e1",
        role: "Frontend Developer",
        company: "TechNova",
        period: "2023–2025",
        summary:
          "Responsable del desarrollo de interfaces con React y Tailwind. Mejora de la performance en un 30%.",
      },
      {
        id: "e2",
        role: "UI Engineer",
        company: "PixelCraft",
        period: "2021–2023",
        summary:
          "Diseño y desarrollo de componentes UI reutilizables. Trabajo cercano con equipos de diseño UX.",
      },
      {
        id: "e3",
        role: "Web Designer",
        company: "Creativix",
        period: "2019–2021",
        summary:
          "Diseño de sitios web responsive y prototipos interactivos para clientes en diferentes industrias.",
      },
    ],
    education: [
      { id: "ed1", degree: "Ing. Sistemas", institution: "Uni. Central", year: "2014–2019" },
      { id: "ed2", degree: "Diplomado UX/UI", institution: "CETIC", year: "2020" },
      { id: "ed3", degree: "React Avanzado", institution: "Platzi", year: "2022" },
    ],
  },
  {
    id: "p2",
    name: "Mariana López",
    profession: null,
    description:
      "Especialista en investigación de usuarios y diseño centrado en la accesibilidad. Experiencia en Figma y prototipado ágil.",
    image: "/profile2.png",
    experiences: [
      {
        id: "e4",
        role: "UX Designer",
        company: "InnoSoft",
        period: "2022–2025",
        summary:
          "Lideró investigaciones de usuario y validación de prototipos. Redujo en un 20% los abandonos en flujo de compra.",
      },
      {
        id: "e5",
        role: "UI Designer",
        company: "DesignHub",
        period: "2020–2022",
        summary:
          "Creación de sistemas de diseño modulares con Figma y componentes reutilizables.",
      },
      {
        id: "e6",
        role: "Intern UX Researcher",
        company: "UserFirst",
        period: "2019–2020",
        summary:
          "Apoyo en pruebas de usabilidad y entrevistas con usuarios.",
      },
    ],
    education: [
      { id: "ed4", degree: "Lic. Diseño Gráfico", institution: "Uni. Creativa", year: "2015–2019" },
      { id: "ed5", degree: "Master UX Research", institution: "Uni. Barcelona", year: "2021–2022" },
      { id: "ed6", degree: "Curso Avanzado de Prototipado", institution: "Coursera", year: "2023" },
    ],
  },
  {
    id: "p3",
    name: "Carlos Méndez",
    profession: "Data Scientist",
    description:
      "Experto en machine learning y análisis predictivo. Combina experiencia en estadística con desarrollo backend.",
    image: "/profile3.png",
    experiences: [
      {
        id: "e7",
        role: "Data Scientist",
        company: "AI Labs",
        period: "2021–2025",
        summary:
          "Construcción de modelos predictivos con Python y TensorFlow. Aumento del 15% en precisión de predicciones.",
      },
      {
        id: "e8",
        role: "Data Analyst",
        company: "MarketData",
        period: "2018–2021",
        summary:
          "Análisis de series temporales y dashboards interactivos en PowerBI.",
      },
      {
        id: "e9",
        role: "Backend Intern",
        company: "SoftSolutions",
        period: "2017–2018",
        summary:
          "Desarrollo de APIs REST para proyectos internos de analítica.",
      },
    ],
    education: [
      { id: "ed7", degree: "Lic. Matemáticas", institution: "Uni. Nacional", year: "2013–2017" },
      { id: "ed8", degree: "MSc Data Science", institution: "Uni. Complutense", year: "2018–2020" },
      { id: "ed9", degree: "Curso Deep Learning", institution: "FastAI", year: "2021" },
    ],
  },
];

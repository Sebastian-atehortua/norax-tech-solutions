(function () {
  "use strict";

  var ICONS = {
    server: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><line x1="6" y1="7" x2="6.01" y2="7"/><line x1="6" y1="17" x2="6.01" y2="17"/></svg>',
    network: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-2h14v2"/></svg>',
    headset: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg>',
    lifebuoy: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="m4.9 4.9 4.2 4.2M14.9 14.9l4.2 4.2M14.9 9.1l4.2-4.2M4.9 19.1l4.2-4.2"/></svg>',
    shield: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    clipboard: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="7" y="3" width="10" height="4" rx="1"/><path d="M17 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><path d="M8 12h8M8 16h5"/></svg>',
    search: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    bulb: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18h6M10 22h4"/><path d="M12 2a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6V15h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 2z"/></svg>',
    settings: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7.5 19l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 13.6H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.7 7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 2.7-1.1V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1.3z"/></svg>',
    trending: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m3 17 6-6 4 4 7-7"/><path d="M14 8h6v6"/></svg>',
    arrow: '<svg class="arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17 17 7M9 7h8v8"/></svg>'
  };

  var services = [
    { icon: "server", title: "Infraestructura tecnológica", description: "Diseño, implementación y mantenimiento de servidores, almacenamiento, virtualización y centros de datos." },
    { icon: "network", title: "Redes empresariales", description: "Diseño, configuración y administración de redes cableadas e inalámbricas seguras y eficientes." },
    { icon: "headset", title: "Soporte técnico empresarial", description: "Soporte remoto y presencial para equipos, software y usuarios, con resolución rápida y efectiva." },
    { icon: "lifebuoy", title: "Mesa de ayuda TI", description: "Gestión de incidencias y requerimientos con seguimiento y atención oportuna para tu equipo." },
    { icon: "shield", title: "Seguridad informática", description: "Buenas prácticas, firewalls, copias de seguridad y protección de datos." },
    { icon: "clipboard", title: "Asesoría y proyectos", description: "Planeación y ejecución de proyectos tecnológicos que impulsan la transformación digital." }
  ];

  var steps = [
    { icon: "search", title: "Analizamos", description: "Entendemos tus necesidades y objetivos." },
    { icon: "bulb", title: "Diseñamos", description: "Proponemos soluciones tecnológicas a la medida." },
    { icon: "settings", title: "Implementamos", description: "Ejecutamos con calidad, cumpliendo tiempos y estándares." },
    { icon: "trending", title: "Acompañamos", description: "Brindamos soporte y optimización continua." }
  ];

  function render() {
    var grid = document.getElementById("servicesGrid");
    grid.innerHTML = services.map(function (s, i) {
      return '<article class="service-card">' +
        '<div class="icon">' + ICONS[s.icon] + '</div>' +
        '<span class="num">0' + (i + 1) + '</span>' +
        '<h3>' + s.title + '</h3>' +
        '<p>' + s.description + '</p>' +
        '</article>';
    }).join("");

    var stepsGrid = document.getElementById("stepsGrid");
    stepsGrid.innerHTML = steps.map(function (s, i) {
      return '<div class="step">' +
        '<div class="circle">' + ICONS[s.icon] + '</div>' +
        '<span class="num">0' + (i + 1) + '</span>' +
        '<h3>' + s.title + '</h3>' +
        '<p>' + s.description + '</p>' +
        '</div>';
    }).join("");
  }

  function setupMenu() {
    var toggle = document.getElementById("menuToggle");
    var nav = document.getElementById("navMobile");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var toastTimer;
  function showToast(message, isError) {
    var toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "toast show" + (isError ? " error" : "");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.className = "toast"; }, 4000);
  }

  function setupForm() {
    var form = document.getElementById("contactForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "").trim();
      var email = (data.get("email") || "").trim();
      var message = (data.get("message") || "").trim();
      if (!name || !email || !message) {
        showToast("Por favor completa todos los campos requeridos.", true);
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast("Ingresa un correo electrónico válido.", true);
        return;
      }
      showToast("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
      form.reset();
    });
  }

  function setupWhatsApp() {
    var url = "https://wa.me/573004857022?text=" +
      encodeURIComponent("Hola, me gustaría hablar con un especialista de Norax Technology.");
    document.getElementById("waLink").href = url;
    document.getElementById("waButton").href = url;
  }

  document.addEventListener("DOMContentLoaded", function () {
    render();
    setupMenu();
    setupForm();
    setupWhatsApp();
    document.getElementById("year").textContent = String(new Date().getFullYear());
  });
})();

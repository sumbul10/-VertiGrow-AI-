// ======================================
// VERTIGROW AI - PLANT DATABASE
// ======================================

const plants = [
  {
    id: 1,
    name: "Money Plant",
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=800&auto=format&fit=crop&q=85",
    days: "30-60 days",
    difficulty: "Easy",
    description: "A beautiful indoor climbing plant, ideal for homes, balconies and hanging pots.",
    temperature: "18-30°C",
    sunlight: "Bright indirect light",
    water: "When the top 2-3 cm of soil is dry",
    soil: "Well-draining potting mix",
    spacing: "15-20 cm",
    growth: "Fast",
    harvest: "Usually grown for decoration",
    tips: "Trim long stems to encourage bushier growth. Healthy stem cuttings can grow roots in water."
  },
  {
    id: 2,
    name: "Tomato",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&auto=format&fit=crop&q=85",
    days: "60-90 days",
    difficulty: "Medium",
    description: "A popular fruit vegetable that can grow in containers with enough sunlight.",
    temperature: "18-29°C",
    sunlight: "6-8 hours direct sunlight",
    water: "Keep soil consistently moist",
    soil: "Rich, fertile, well-draining soil",
    spacing: "30-45 cm",
    growth: "Fast",
    harvest: "Usually 60-90 days after transplanting",
    tips: "Use a large pot and a support stake. Avoid irregular watering and waterlogged soil."
  },
  {
    id: 3,
    name: "Mint",
    category: "Herbs",
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=800&auto=format&fit=crop&q=85",
    days: "30-45 days",
    difficulty: "Easy",
    description: "A fragrant herb used in drinks, chutneys and everyday cooking.",
    temperature: "15-30°C",
    sunlight: "4-6 hours of sunlight",
    water: "Keep soil slightly moist",
    soil: "Rich, moist, well-draining soil",
    spacing: "20-30 cm",
    growth: "Fast",
    harvest: "Pick leaves once the plant is established",
    tips: "Grow mint in its own pot because its roots spread quickly. Pinch the tips to encourage bushy growth."
  },
  {
    id: 4,
    name: "Basil",
    category: "Herbs",
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=800&auto=format&fit=crop&q=85",
    days: "30-60 days",
    difficulty: "Easy",
    description: "An aromatic herb with fresh leaves used in salads and cooking.",
    temperature: "20-30°C",
    sunlight: "6-8 hours of sunlight",
    water: "Water when the surface begins to dry",
    soil: "Fertile, well-draining soil",
    spacing: "20-30 cm",
    growth: "Fast",
    harvest: "Pick leaves when the plant is established",
    tips: "Remove flower buds to encourage leaf production. Protect from cold weather."
  },
  {
    id: 5,
    name: "Marigold",
    category: "Flowers",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&auto=format&fit=crop&q=85",
    days: "45-60 days",
    difficulty: "Easy",
    description: "A bright flowering plant suitable for balconies, pots and garden borders.",
    temperature: "18-30°C",
    sunlight: "6-8 hours direct sunlight",
    water: "Water when the top soil feels dry",
    soil: "Well-draining garden soil",
    spacing: "20-30 cm",
    growth: "Fast",
    harvest: "Flowers often appear around 45-60 days",
    tips: "Remove faded flowers to encourage new blooms. Avoid waterlogged soil."
  },
  {
    id: 6,
    name: "Aloe Vera",
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1509423350716-97f2360af3e4?w=800&auto=format&fit=crop&q=85",
    days: "Several months",
    difficulty: "Easy",
    description: "A succulent plant that stores water in its thick leaves.",
    temperature: "18-30°C",
    sunlight: "Bright light",
    water: "Only after soil dries completely",
    soil: "Cactus or succulent potting mix",
    spacing: "20-30 cm",
    growth: "Slow",
    harvest: "Mature outer leaves can be harvested carefully",
    tips: "Use a pot with drainage holes. Avoid standing water and cold temperatures."
  },
  {
    id: 7,
    name: "Spinach",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&auto=format&fit=crop&q=85",
    days: "30-45 days",
    difficulty: "Easy",
    description: "A leafy vegetable that grows well in containers and shallow planters.",
    temperature: "10-24°C",
    sunlight: "4-6 hours sunlight or partial shade",
    water: "Keep soil evenly moist",
    soil: "Rich, loose, well-draining soil",
    spacing: "10-15 cm",
    growth: "Fast",
    harvest: "Often 30-45 days after sowing",
    tips: "Spinach prefers cooler conditions. Harvest outer leaves and leave the center growing."
  },
  {
    id: 8,
    name: "Chili",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=800&auto=format&fit=crop&q=85",
    days: "60-100 days",
    difficulty: "Medium",
    description: "A productive container plant that grows well in warm, sunny places.",
    temperature: "20-32°C",
    sunlight: "6-8 hours direct sunlight",
    water: "Water when the top soil begins to dry",
    soil: "Fertile, well-draining soil",
    spacing: "30-40 cm",
    growth: "Moderate",
    harvest: "Often 60-100 days depending on variety",
    tips: "Use a container with drainage. Avoid excessive nitrogen fertilizer."
  },
  {
    id: 9,
    name: "Coriander",
    category: "Herbs",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800&auto=format&fit=crop&q=85",
    days: "30-45 days",
    difficulty: "Easy",
    description: "A popular kitchen herb grown for its fresh leaves and seeds.",
    temperature: "15-25°C",
    sunlight: "4-6 hours sunlight",
    water: "Keep soil lightly moist",
    soil: "Loose, fertile soil",
    spacing: "10-15 cm",
    growth: "Fast",
    harvest: "Leaves can often be cut after 30-45 days",
    tips: "Sow seeds directly in the final pot. Hot weather can cause early flowering."
  },
  {
    id: 10,
    name: "Rose",
    category: "Flowers",
    image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=800&auto=format&fit=crop&q=85",
    days: "Varies by variety",
    difficulty: "Medium",
    description: "A beautiful flowering shrub that can be grown in a large container.",
    temperature: "15-28°C",
    sunlight: "6+ hours sunlight",
    water: "Water deeply when top soil begins to dry",
    soil: "Rich, well-draining soil",
    spacing: "40-60 cm",
    growth: "Moderate",
    harvest: "Flowering depends on variety and season",
    tips: "Remove faded flowers, prune carefully and inspect regularly for pests."
  },
  {
    id: 11,
    name: "Snake Plant",
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b0a?w=800&auto=format&fit=crop&q=85",
    days: "Slow growing",
    difficulty: "Easy",
    description: "A hardy indoor plant with upright leaves that tolerates lower light.",
    temperature: "18-30°C",
    sunlight: "Indirect light; tolerates lower light",
    water: "Allow soil to dry between watering",
    soil: "Well-draining succulent mix",
    spacing: "20-30 cm",
    growth: "Slow",
    harvest: "Usually grown for decoration",
    tips: "Do not overwater. Keep away from prolonged cold and soggy soil."
  },
  {
    id: 12,
    name: "Tulsi",
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f?w=800&auto=format&fit=crop&q=85",
    days: "60-90 days",
    difficulty: "Easy",
    description: "A fragrant herb traditionally grown in home gardens.",
    temperature: "20-30°C",
    sunlight: "4-6 hours sunlight",
    water: "Water when the top soil starts drying",
    soil: "Fertile, well-draining soil",
    spacing: "20-30 cm",
    growth: "Moderate",
    harvest: "Pick leaves once established",
    tips: "Pinch growing tips for bushier growth. Traditional uses are not a substitute for medical treatment."
  }
];

// ======================================
// STORAGE
// ======================================

function readStorage(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Storage error:", error);
  }
}

let growingPlants = readStorage("vertigrow-plants", []);
let selectedCategory = "All";

// ======================================
// NAVIGATION
// ======================================

const sections = document.querySelectorAll(".page-section");
const navLinks = document.querySelectorAll(".nav-link");
const sidebar = document.getElementById("sidebar");

function showSection(id) {
  const target = document.getElementById(id);

  if (!target || !target.classList.contains("page-section")) return;

  sections.forEach(section => section.classList.remove("active"));
  target.classList.add("active");

  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.section === id);
  });

  sidebar.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const id = link.dataset.section;
    showSection(id);
    history.replaceState(null, "", "#" + id);
  });
});

document.getElementById("menuBtn").addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => {
    const id = button.dataset.go;
    showSection(id);
    history.replaceState(null, "", "#" + id);
  });
});

const initialHash = location.hash.replace("#", "");
if (initialHash && document.getElementById(initialHash)?.classList.contains("page-section")) {
  showSection(initialHash);
}

// ======================================
// PLANT CARDS AND IMAGES
// ======================================

function createPlantCard(plant) {
  return `
    <article class="plant-card">
      <div class="plant-image">
        <img
          src="${plant.image}"
          alt="${plant.name} plant"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=700&auto=format&fit=crop&q=80';"
        >
      </div>

      <div class="plant-info">
        <span class="plant-category">${plant.category.toUpperCase()}</span>
        <h3>${plant.name}</h3>
        <p>${plant.description}</p>

        <div class="plant-meta">
          <span>⏱ ${plant.days}</span>
          <span>⭐ ${plant.difficulty}</span>
        </div>

        <button class="details-btn" data-details="${plant.id}">
          View growing guide →
        </button>
      </div>
    </article>
  `;
}

function renderPlants() {
  const grid = document.getElementById("plantGrid");
  const search = document.getElementById("plantSearch").value.toLowerCase().trim();

  const filtered = plants.filter(plant => {
    const matchesSearch =
      plant.name.toLowerCase().includes(search) ||
      plant.category.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" ||
      plant.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  grid.innerHTML = filtered.length
    ? filtered.map(createPlantCard).join("")
    : `<p class="empty-message">No plants found. Try another search.</p>`;
}

function renderFeatured() {
  document.getElementById("featuredPlants").innerHTML =
    plants.slice(0, 3).map(createPlantCard).join("");
}

document.getElementById("plantSearch").addEventListener("input", renderPlants);

document.getElementById("categoryFilter").addEventListener("change", event => {
  selectedCategory = event.target.value;
  renderPlants();
});

document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;
    document.getElementById("categoryFilter").value = selectedCategory;
    document.getElementById("plantSearch").value = "";

    showSection("library");
    renderPlants();
  });
});

// ======================================
// PLANT DETAILS
// ======================================

const modal = document.getElementById("plantModal");
const plantDetails = document.getElementById("plantDetails");

function openPlantDetails(id) {
  const plant = plants.find(item => item.id === Number(id));
  if (!plant) return;

  plantDetails.innerHTML = `
    <img
      class="detail-photo"
      src="${plant.image}"
      alt="${plant.name}"
      onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=700&auto=format&fit=crop&q=80';"
    >

    <span class="plant-category">${plant.category.toUpperCase()}</span>
    <h2 class="detail-title">${plant.name}</h2>
    <p class="detail-description">${plant.description}</p>

    <div class="detail-grid">
      <div class="detail-box"><strong>⏱ Growing time</strong><span>${plant.days}</span></div>
      <div class="detail-box"><strong>🌡 Temperature</strong><span>${plant.temperature}</span></div>
      <div class="detail-box"><strong>☀️ Sunlight</strong><span>${plant.sunlight}</span></div>
      <div class="detail-box"><strong>💧 Watering</strong><span>${plant.water}</span></div>
      <div class="detail-box"><strong>🌱 Soil type</strong><span>${plant.soil}</span></div>
      <div class="detail-box"><strong>📏 Plant spacing</strong><span>${plant.spacing}</span></div>
      <div class="detail-box"><strong>📈 Growth speed</strong><span>${plant.growth}</span></div>
      <div class="detail-box"><strong>🧺 Harvesting</strong><span>${plant.harvest}</span></div>
      <div class="detail-box" style="grid-column:1/-1">
        <strong>💡 Growing tips</strong>
        <span>${plant.tips}</span>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

document.addEventListener("click", event => {
  const button = event.target.closest("[data-details]");
  if (button) openPlantDetails(button.dataset.details);
});

document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", event => {
  if (event.target === modal) modal.classList.add("hidden");
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") modal.classList.add("hidden");
});

// ======================================
// PLANT DOCTOR
// ======================================

const diagnoses = {
  yellow: {
    title: "🍃 Yellow leaves",
    cause: "Possible causes include overwatering, poor drainage, insufficient light or natural aging.",
    care: "Check soil moisture before watering, ensure the pot drains properly and provide suitable light."
  },
  brown: {
    title: "🍂 Brown leaf tips",
    cause: "Possible causes include dry air, irregular watering, fertilizer buildup or water quality.",
    care: "Review watering, avoid excess fertilizer and trim only fully damaged tips."
  },
  drooping: {
    title: "🥀 Drooping or wilting",
    cause: "The plant may be underwatered, overwatered, overheated or experiencing root damage.",
    care: "Check soil moisture first. Water if dry. If wet, improve drainage and inspect roots if the problem continues."
  },
  spots: {
    title: "🔴 Spots on leaves",
    cause: "Spots may result from fungal or bacterial disease, pests, sun scorch or water damage.",
    care: "Improve airflow, avoid wetting leaves, remove badly affected leaves with clean tools and inspect for pests."
  },
  slow: {
    title: "🐢 Slow growth",
    cause: "Possible causes include low light, unsuitable temperature, poor nutrition or crowded roots.",
    care: "Check light and temperature requirements. Review the soil and consider suitable fertilizer during active growth."
  },
  roots: {
    title: "⚠️ Soft or rotten roots",
    cause: "Soft, dark or unpleasant-smelling roots can indicate root rot.",
    care: "Remove the plant carefully, trim rotten roots with clean tools and repot in fresh well-draining soil if healthy roots remain."
  },
  pests: {
    title: "🐛 Possible pest problem",
    cause: "Tiny insects may be aphids, spider mites, whiteflies or mealybugs.",
    care: "Inspect leaf undersides, isolate the affected plant and use a plant-safe treatment according to its label."
  }
};

document.getElementById("diagnoseBtn").addEventListener("click", () => {
  const symptom = document.getElementById("plantSymptom").value;
  const result = document.getElementById("diagnosisResult");

  if (!symptom) {
    result.innerHTML = "<h3>Please select a symptom</h3><p>Choose a symptom to receive care suggestions.</p>";
    result.classList.remove("hidden");
    return;
  }

  const diagnosis = diagnoses[symptom];

  result.innerHTML = `
    <h3>${diagnosis.title}</h3>
    <p><strong>Possible cause:</strong> ${diagnosis.cause}</p>
    <p><strong>Suggested care:</strong> ${diagnosis.care}</p>
  `;

  result.classList.remove("hidden");
});

// ======================================
// GROWTH TRACKER
// ======================================

const trackerSelect = document.getElementById("trackerPlant");

function populateTracker() {
  trackerSelect.innerHTML = plants.map(plant =>
    `<option value="${plant.id}">${plant.name}</option>`
  ).join("");
}

function daysGrowing(dateString) {
  const start = new Date(dateString + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return Math.max(0, Math.floor((today - start) / 86400000));
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function renderRecords() {
  const container = document.getElementById("growthRecords");

  if (!growingPlants.length) {
    container.innerHTML = `<p class="empty-message">Your garden is empty. Add your first plant!</p>`;
    updateOverview();
    return;
  }

  container.innerHTML = growingPlants.map(record => {
    const plant = plants.find(item => item.id === Number(record.plantId));
    const name = plant ? plant.name : "Unknown plant";
    const days = daysGrowing(record.date);

    return `
      <div class="record-item">
        <div>
          <h4>${name}</h4>
          <p>Planted: ${record.date}</p>
          <p>Growing for ${days} day${days === 1 ? "" : "s"}</p>
          ${record.notes ? `<p>📝 ${escapeHTML(record.notes)}</p>` : ""}
        </div>
        <button data-delete="${record.id}" aria-label="Delete plant">✕</button>
      </div>
    `;
  }).join("");

  updateOverview();
}

document.getElementById("addPlantBtn").addEventListener("click", () => {
  const plantId = Number(trackerSelect.value);
  const date = document.getElementById("plantDate").value;
  const notes = document.getElementById("plantNotes").value.trim();
  const message = document.getElementById("trackerMessage");

  if (!plantId || !date) {
    message.textContent = "Please select a plant and planting date.";
    return;
  }

  const selectedDate = new Date(date + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate > today) {
    message.textContent = "Planting date cannot be in the future.";
    return;
  }

  growingPlants.push({
    id: Date.now(),
    plantId,
    date,
    notes
  });

  saveStorage("vertigrow-plants", growingPlants);
  renderRecords();

  document.getElementById("plantNotes").value = "";
  message.textContent = "🌱 Successfully added to your garden!";
});

document.getElementById("growthRecords").addEventListener("click", event => {
  const button = event.target.closest("[data-delete]");
  if (!button) return;

  const id = Number(button.dataset.delete);
  growingPlants = growingPlants.filter(record => record.id !== id);

  saveStorage("vertigrow-plants", growingPlants);
  renderRecords();
});

// ======================================
// VERTICAL GARDEN PLANNER
// ======================================

document.getElementById("calculateSpace").addEventListener("click", () => {
  const width = Number(document.getElementById("spaceWidth").value);
  const height = Number(document.getElementById("spaceHeight").value);
  const spacing = Number(document.getElementById("plantSpacing").value);
  const result = document.getElementById("plannerResult");

  if (
    !Number.isFinite(width) ||
    !Number.isFinite(height) ||
    !Number.isFinite(spacing) ||
    width <= 0 ||
    height <= 0 ||
    spacing <= 0
  ) {
    result.innerHTML = `
      <h3>⚠️ Check your measurements</h3>
      <p>Enter positive numbers for width, height and spacing.</p>
    `;
    result.classList.remove("hidden");
    return;
  }

  const columns = Math.floor(width / spacing);
  const rows = Math.floor(height / spacing);
  const capacity = columns * rows;

  result.innerHTML = `
    <h3>🌿 Your garden estimate</h3>
    <p><strong>${capacity} plants</strong> could fit in a simple grid.</p>
    <p>Columns: ${columns} · Rows: ${rows}</p>
    <p>Space: ${width} × ${height} cm</p>
    <p>Actual capacity depends on pot size, plant type, light, airflow and support structure.</p>
  `;

  result.classList.remove("hidden");
});

// ======================================
// DASHBOARD STATISTICS
// ======================================

function updateOverview() {
  document.getElementById("totalPlants").textContent = plants.length;
  document.getElementById("totalGrowing").textContent = growingPlants.length;

  const totalDays = growingPlants.reduce((total, record) => {
    return total + daysGrowing(record.date);
  }, 0);

  document.getElementById("totalDays").textContent = totalDays;
}

// ======================================
// INITIALIZE APP
// ======================================

function initializeApp() {
  const today = new Date();
  const localDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  document.getElementById("plantDate").value = localDate;
  document.getElementById("plantDate").max = localDate;

  renderPlants();
  renderFeatured();
  populateTracker();
  renderRecords();
  updateOverview();
}

initializeApp();
const VANADIEL_EPOCH = Date.UTC(2002, 5, 23, 15, 0, 0);
const EARTH_MS_PER_VANA_MINUTE = 2400;
const DAYS = [
  { name: "Firesday", element: "Fire", gradient: "linear-gradient(145deg, #ffd3a4, #e85b32)", glow: "rgba(255, 121, 62, 0.45)" },
  { name: "Earthsday", element: "Earth", gradient: "linear-gradient(145deg, #e0d593, #917a34)", glow: "rgba(222, 194, 92, 0.42)" },
  { name: "Watersday", element: "Water", gradient: "linear-gradient(145deg, #afe7ff, #2268d9)", glow: "rgba(78, 159, 255, 0.42)" },
  { name: "Windsday", element: "Wind", gradient: "linear-gradient(145deg, #d5ffd7, #40b86b)", glow: "rgba(95, 230, 135, 0.4)" },
  { name: "Iceday", element: "Ice", gradient: "linear-gradient(145deg, #f4fdff, #73cdf0)", glow: "rgba(151, 226, 255, 0.42)" },
  { name: "Lightningday", element: "Lightning", gradient: "linear-gradient(145deg, #f0ddff, #8666ff)", glow: "rgba(168, 132, 255, 0.45)" },
  { name: "Lightsday", element: "Light", gradient: "linear-gradient(145deg, #fff7c7, #f0cf5a)", glow: "rgba(255, 228, 121, 0.45)" },
  { name: "Darksday", element: "Dark", gradient: "linear-gradient(145deg, #9ba0b9, #272a44)", glow: "rgba(129, 135, 166, 0.45)" }
];

const WEATHER = {
  clear: { name: "Clear Skies", icon: "☼", note: "Good travel weather. No elemental pressure detected.", gradient: "linear-gradient(145deg, #fff0a8, #4aa6ff)", glow: "rgba(255, 232, 123, 0.34)" },
  clouds: { name: "Clouds", icon: "☁", note: "Soft cloud cover drifting over the region.", gradient: "linear-gradient(145deg, #d8e3f0, #60708b)", glow: "rgba(200, 218, 240, 0.28)" },
  fog: { name: "Fog", icon: "≋", note: "Visibility is low. Move carefully through aggro paths.", gradient: "linear-gradient(145deg, #e7edf3, #8b9bad)", glow: "rgba(226, 236, 245, 0.3)" },
  fire: { name: "Fire", icon: "△", note: "Heat shimmer and fire crystals are active.", gradient: "linear-gradient(145deg, #ffd6a1, #f05a28)", glow: "rgba(255, 103, 54, 0.42)" },
  earth: { name: "Dust", icon: "◆", note: "Dry winds are carrying earth-aspected dust.", gradient: "linear-gradient(145deg, #e9db9a, #8e6f35)", glow: "rgba(215, 183, 93, 0.34)" },
  water: { name: "Rain", icon: "☂", note: "Rainfall is feeding water elemental conditions.", gradient: "linear-gradient(145deg, #b9f0ff, #2f6fd4)", glow: "rgba(88, 160, 255, 0.4)" },
  wind: { name: "Wind", icon: "◌", note: "Air currents are strong and wind-aspected.", gradient: "linear-gradient(145deg, #d9ffd9, #35b870)", glow: "rgba(92, 232, 137, 0.34)" },
  ice: { name: "Snow", icon: "✧", note: "Snowfall brings ice-aspected conditions.", gradient: "linear-gradient(145deg, #ffffff, #77d3f5)", glow: "rgba(174, 237, 255, 0.43)" },
  thunder: { name: "Thunder", icon: "ϟ", note: "Lightning pressure is high. Expect charged skies.", gradient: "linear-gradient(145deg, #efe0ff, #7057ff)", glow: "rgba(167, 127, 255, 0.44)" },
  aurora: { name: "Auroras", icon: "✦", note: "Rare light shimmers ripple across the sky.", gradient: "linear-gradient(145deg, #fff7bf, #73ffdd 45%, #7c77ff)", glow: "rgba(154, 255, 225, 0.48)" },
  gloom: { name: "Gloom", icon: "●", note: "Dark-aspected weather hangs over the area.", gradient: "linear-gradient(145deg, #8990af, #20243f)", glow: "rgba(119, 126, 165, 0.36)" }
};

const WEATHER_SEARCH_ORDER = ["clear", "clouds", "fog", "fire", "earth", "water", "wind", "ice", "thunder", "aurora", "gloom"];

const BACKGROUNDS = [
  "assets/backgrounds/coastal-dunes.png",
  "assets/backgrounds/aurora-glacier.png",
  "assets/backgrounds/jungle-ruins.png"
];

const LOCATION_NAMES = [
  "Abdhaljs Isle-Purgonorgo", "Abyssea - Altepa", "Abyssea - Attohwa", "Abyssea - Empyreal Paradox",
  "Abyssea - Grauberg", "Abyssea - Konschtat", "Abyssea - La Theine", "Abyssea - Misareaux",
  "Abyssea - Tahrongi", "Abyssea - Uleguerand", "Abyssea - Vunkerl", "Aht Urhgan Whitegate",
  "Al Zahbi", "Al'Taieu", "Altar Room", "Alzadaal Undersea Ruins", "Apollyon", "Arrapago Reef",
  "Arrapago Remnants", "Attohwa Chasm", "Aydeewa Subterrane", "Balga's Dais", "Bastok Markets",
  "Bastok Markets [S]", "Bastok Mines", "Bastok-Jeuno Airship", "Batallia Downs", "Batallia Downs [S]",
  "Beadeaux", "Beadeaux [S]", "Bearclaw Pinnacle", "Beaucedine Glacier", "Beaucedine Glacier [S]",
  "Behemoth's Dominion", "Bhaflau Remnants", "Bhaflau Thickets", "Bibiki Bay", "Boneyard Gully",
  "Bostaunieux Oubliette", "Buburimu Peninsula", "Caedarva Mire", "Cape Teriggan", "Carpenters' Landing",
  "Castle Oztroja", "Castle Oztroja [S]", "Castle Zvahl Baileys", "Castle Zvahl Baileys [S]",
  "Castle Zvahl Keep", "Castle Zvahl Keep [S]", "Ceizak Battlegrounds", "Celennia Memorial Library",
  "Chamber of Oracles", "Chateau d'Oraguille", "Chocobo Circuit", "Cirdas Caverns", "Cirdas Caverns [U]",
  "Cloister of Flames", "Cloister of Frost", "Cloister of Gales", "Cloister of Storms",
  "Cloister of Tides", "Cloister of Tremors", "Crawlers' Nest", "Crawlers' Nest [S]", "Dangruf Wadi",
  "Davoi", "Den of Rancor", "Desuetia - Empyreal Paradox", "Dho Gates", "Diorama Abdhaljs-Ghelsba",
  "Dragon's Aery", "Dynamis - Bastok", "Dynamis - Bastok [D]", "Dynamis - Beaucedine",
  "Dynamis - Buburimu", "Dynamis - Jeuno", "Dynamis - Jeuno [D]", "Dynamis - Qufim",
  "Dynamis - San d'Oria", "Dynamis - San d'Oria [D]", "Dynamis - Tavnazia", "Dynamis - Valkurm",
  "Dynamis - Windurst", "Dynamis - Windurst [D]", "Dynamis - Xarcabard", "East Ronfaure",
  "East Ronfaure [S]", "East Sarutabaruta", "Eastern Adoulin", "Eastern Altepa Desert",
  "Empyreal Paradox", "Escha - Ru'Aun", "Escha - Zi'Tah", "Everbloom Hollow", "Fei'Yin", "Feretory",
  "Foret de Hennetiel", "Fort Ghelsba", "Fort Karugo-Narugo [S]", "Full Moon Fountain",
  "Garlaige Citadel", "Garlaige Citadel [S]", "Ghelsba Outpost", "Ghoyu's Reverie", "Giddeus",
  "Grand Palace of Hu'Xzoi", "Grauberg [S]", "Gusgen Mines", "Gustav Tunnel", "Gwora - Corridor",
  "Gwora - Throne Room", "Hall of Transference", "Hall of the Gods", "Halvung", "Hazhalm Testing Grounds",
  "Heavens Tower", "Horlais Peak", "Ifrit's Cauldron", "Ilrusi Atoll", "Inner Horutoto Ruins",
  "Jade Sepulcher", "Jugner Forest", "Jugner Forest [S]", "Kamihr Drifts", "Kazham", "Kazham-Jeuno Airship",
  "King Ranperre's Tomb", "Konschtat Highlands", "Korroloka Tunnel", "Kuftal Tunnel", "La Theine Plateau",
  "La Vaule [S]", "La'Loff Amphitheater", "Labyrinth of Onzozo", "Leafallia", "Lebros Cavern",
  "Leujaoam Sanctum", "Lower Delkfutt's Tower", "Lower Jeuno", "Lufaise Meadows", "Mamook",
  "Mamool Ja Training Grounds", "Manaclipper", "Maquette Abdhaljs-Legion", "Maquette Abdhaljs-LegionB",
  "Marjami Ravine", "Maze of Shakhrami", "Meriphataud Mountains", "Meriphataud Mountains [S]",
  "Metalworks", "Mhaura", "Middle Delkfutt's Tower", "Mine Shaft #2716", "Misareaux Coast",
  "Mog Garden", "Moh Gates", "Monarch Linn", "Monastic Cavern", "Mordion Gaol", "Morimar Basalt Fields",
  "Mount Kamihr", "Mount Zhayolm", "Nashmau", "Navukgo Execution Chamber", "Newton Movalpolos", "Norg",
  "North Gustaberg", "North Gustaberg [S]", "Northern San d'Oria", "Nyzul Isle", "Oldton Movalpolos",
  "Open sea route to Al Zahbi", "Open sea route to Mhaura", "Ordelle's Caves", "Outer Horutoto Ruins",
  "Outer Ra'Kaznar", "Outer Ra'Kaznar [U2]", "Outer Ra'Kaznar [U3]", "Outer Ra'Kaznar [U]",
  "Palborough Mines", "Pashhow Marshlands", "Pashhow Marshlands [S]", "Periqia", "Phanauet Channel",
  "Phomiuna Aqueducts", "Port Bastok", "Port Jeuno", "Port San d'Oria", "Port Windurst",
  "Promyvion - Dem", "Promyvion - Holla", "Promyvion - Mea", "Promyvion - Vahzl", "Provenance",
  "Pso'Xja", "Qu'Bia Arena", "Qufim Island", "Quicksand Caves", "Qulun Dome", "Ra'Kaznar Inner Court",
  "Ra'Kaznar Turris", "Rabao", "Rala Waterways", "Rala Waterways [U]", "Ranguemont Pass", "Reisenjima",
  "Reisenjima Henge", "Reisenjima Sanctorium", "Riverne - Site #A01", "Riverne - Site #B01", "Ro'Maeve",
  "Rolanberry Fields", "Rolanberry Fields [S]", "Ru'Aun Gardens", "Ru'Lude Gardens", "Ruhotz Silvermines",
  "Sacrarium", "Sacrificial Chamber", "San d'Oria-Jeuno Airship", "Sauromugue Champaign",
  "Sauromugue Champaign [S]", "Sea Serpent Grotto", "Sealion's Den", "Selbina", "Ship bound for Mhaura",
  "Ship bound for Selbina", "Sih Gates", "Silver Knife", "Silver Sea Remnants", "Silver Sea route to Al Zahbi",
  "Silver Sea route to Nashmau", "South Gustaberg", "Southern San d'Oria", "Southern San d'Oria [S]",
  "Spire of Dem", "Spire of Holla", "Spire of Mea", "Spire of Vahzl", "Stellar Fulcrum", "Tahrongi Canyon",
  "Talacca Cove", "Tavnazian Safehold", "Temenos", "Temple of Uggalepih", "The Ashu Talif",
  "The Boyahda Tree", "The Celestial Nexus", "The Colosseum", "The Eldieme Necropolis",
  "The Eldieme Necropolis [S]", "The Garden of Ru'Hmet", "The Sanctuary of Zi'Tah",
  "The Shrine of Ru'Avitau", "The Shrouded Maw", "Throne Room", "Throne Room [S]", "Throne Room [V]",
  "Toraimarai Canal", "Uleguerand Range", "Upper Delkfutt's Tower", "Upper Jeuno", "Valkurm Dunes",
  "Valley of Sorrows", "Ve'Lugannon Palace", "Vunkerl Inlet [S]", "Wajaom Woodlands", "Walk of Echoes",
  "Walk of Echoes [P1]", "Walk of Echoes [P2]", "Waughroon Shrine", "West Ronfaure", "West Sarutabaruta",
  "West Sarutabaruta [S]", "Western Adoulin", "Western Altepa Desert", "Windurst Walls", "Windurst Waters",
  "Windurst Waters [S]", "Windurst Woods", "Windurst-Jeuno Airship", "Woh Gates", "Xarcabard",
  "Xarcabard [S]", "Yahse Hunting Grounds", "Yhoator Jungle", "Yorcia Weald", "Yorcia Weald [U]",
  "Yughott Grotto", "Yuhtunga Jungle", "Zeruhn Mines", "Zhayolm Remnants"
];

function inferWeather(name) {
  const lower = name.toLowerCase();
  const profiles = [
    { keys: ["beaucedine", "xarcabard", "uleguerand", "kamihr", "frost", "vahzl", "pso'xja", "fei'yin"], weather: ["ice", "ice", "clouds", "fog", "aurora"] },
    { keys: ["altepa", "quicksand", "rabao", "gustaberg", "konschtat", "wadi", "morimar", "zhayolm", "halvung", "tremors"], weather: ["clear", "earth", "earth", "fire", "clouds"] },
    { keys: ["yuhtunga", "yhoator", "kazham", "mamook", "wajaom", "bhaflau", "ceizak", "yahse", "yorcia", "zi'tah", "boyahda", "hennetiel", "sarutabaruta"], weather: ["water", "water", "wind", "clouds", "thunder"] },
    { keys: ["sea", "reef", "bay", "coast", "mhaura", "selbina", "norg", "manaclipper", "channel", "aqueduct", "tides", "waterways", "al'taieu", "silver sea"], weather: ["water", "clouds", "fog", "wind", "thunder"] },
    { keys: ["dynamis", "promyvion", "rancor", "zvahl", "shrouded", "ranguemont", "necropolis", "oubliette", "gaol", "rancor", "sacrificial"], weather: ["gloom", "fog", "thunder", "clouds", "ice"] },
    { keys: ["castle", "citadel", "tower", "palace", "temple", "ruins", "tomb", "caves", "cavern", "grotto", "mines", "tunnel", "gates", "remnants", "sanctorium"], weather: ["clouds", "fog", "earth", "gloom", "water"] },
    { keys: ["airship", "open sea route", "ship bound", "route"], weather: ["clear", "clouds", "wind", "water", "thunder"] },
    { keys: ["bastok", "san d'oria", "windurst", "jeuno", "adoulin", "whitegate", "al zahbi", "nashmau", "mhaura", "selbina", "kazham"], weather: ["clear", "clear", "clouds", "fog", "wind"] },
    { keys: ["ronfaure", "la theine", "jugner", "batallia", "rolanberry", "sauromugue", "buburimu", "tahrongi", "meriphataud", "lufaise", "vunkerl", "grauberg"], weather: ["clear", "clouds", "water", "wind", "thunder"] },
    { keys: ["ifrit", "flames"], weather: ["fire", "fire", "earth", "clear", "clouds"] },
    { keys: ["storms", "lightning"], weather: ["thunder", "thunder", "clouds", "water", "wind"] },
    { keys: ["gales"], weather: ["wind", "wind", "clouds", "clear", "water"] }
  ];

  const profile = profiles.find((item) => item.keys.some((key) => lower.includes(key)));
  return profile ? profile.weather : ["clear", "clouds", "fog", "water", "wind"];
}

const ZONES = LOCATION_NAMES.map((name) => ({ name, weather: inferWeather(name) }));

const TIMEZONE_BY_ZIP_PREFIX = [
  { min: 6, max: 9, timeZone: "America/Puerto_Rico", label: "Atlantic Time" },
  { min: 10, max: 399, timeZone: "America/New_York", label: "Eastern Time" },
  { min: 400, max: 418, timeZone: "America/New_York", label: "Eastern Time" },
  { min: 419, max: 427, timeZone: "America/Chicago", label: "Central Time" },
  { min: 430, max: 499, timeZone: "America/New_York", label: "Eastern Time" },
  { min: 500, max: 588, timeZone: "America/Chicago", label: "Central Time" },
  { min: 590, max: 599, timeZone: "America/Denver", label: "Mountain Time" },
  { min: 600, max: 799, timeZone: "America/Chicago", label: "Central Time" },
  { min: 800, max: 831, timeZone: "America/Denver", label: "Mountain Time" },
  { min: 832, max: 838, timeZone: "America/Boise", label: "Mountain Time" },
  { min: 840, max: 847, timeZone: "America/Denver", label: "Mountain Time" },
  { min: 850, max: 865, timeZone: "America/Phoenix", label: "Arizona Time" },
  { min: 870, max: 884, timeZone: "America/Denver", label: "Mountain Time" },
  { min: 885, max: 885, timeZone: "America/Denver", label: "Mountain Time" },
  { min: 889, max: 898, timeZone: "America/Los_Angeles", label: "Pacific Time" },
  { min: 900, max: 961, timeZone: "America/Los_Angeles", label: "Pacific Time" },
  { min: 967, max: 968, timeZone: "Pacific/Honolulu", label: "Hawaii Time" },
  { min: 969, max: 969, timeZone: "Pacific/Guam", label: "Chamorro Time" },
  { min: 970, max: 994, timeZone: "America/Los_Angeles", label: "Pacific Time" },
  { min: 995, max: 999, timeZone: "America/Anchorage", label: "Alaska Time" }
];

const els = {
  vanaTime: document.querySelector("#vanaTime"),
  vanaDate: document.querySelector("#vanaDate"),
  vanaDay: document.querySelector("#vanaDay"),
  currentElement: document.querySelector("#currentElement"),
  earthTime: document.querySelector("#earthTime"),
  earthZone: document.querySelector("#earthZone"),
  moonPhase: document.querySelector("#moonPhase"),
  dayOrb: document.querySelector("#dayOrb"),
  zoneSelect: document.querySelector("#zoneSelect"),
  weatherIcon: document.querySelector("#weatherIcon"),
  weatherName: document.querySelector("#weatherName"),
  weatherNote: document.querySelector("#weatherNote"),
  forecast: document.querySelector("#forecast"),
  weatherSearch: document.querySelector("#weatherSearch"),
  weatherSearchClear: document.querySelector("#weatherSearchClear"),
  weatherSearchSummary: document.querySelector("#weatherSearchSummary"),
  weatherResults: document.querySelector("#weatherResults"),
  compactToggle: document.querySelector("#compactToggle"),
  settingsToggle: document.querySelector("#settingsToggle"),
  settingsPanel: document.querySelector("#settingsPanel"),
  zipInput: document.querySelector("#zipInput"),
  saveSettings: document.querySelector("#saveSettings"),
  clearSettings: document.querySelector("#clearSettings"),
  settingsStatus: document.querySelector("#settingsStatus"),
  widget: document.querySelector(".widget"),
  backdropA: document.querySelector("#backdropA"),
  backdropB: document.querySelector("#backdropB")
};

let activeBackdrop = 0;
let currentBackgroundIndex = -1;
let clockSettings = loadClockSettings();

function pad(value) {
  return String(value).padStart(2, "0");
}

function getVanaTime(now = Date.now()) {
  const vanaMinutes = Math.floor((now - VANADIEL_EPOCH) / EARTH_MS_PER_VANA_MINUTE);
  const minute = ((vanaMinutes % 60) + 60) % 60;
  const totalHours = Math.floor(vanaMinutes / 60);
  const hour = ((totalHours % 24) + 24) % 24;
  const totalDays = Math.floor(totalHours / 24);
  const dayIndex = ((totalDays % 8) + 8) % 8;
  const dayOfYear = ((totalDays % 360) + 360) % 360;
  const year = 886 + Math.floor(totalDays / 360);
  const month = Math.floor(dayOfYear / 30) + 1;
  const day = (dayOfYear % 30) + 1;
  const moonAge = ((totalDays % 84) + 84) % 84;
  return { minute, hour, totalDays, dayIndex, year, month, day, moonAge };
}

function moonPhase(age) {
  if (age <= 3 || age >= 81) return "New Moon";
  if (age < 21) return "Waxing Crescent";
  if (age < 25) return "First Quarter";
  if (age < 39) return "Waxing Gibbous";
  if (age < 45) return "Full Moon";
  if (age < 63) return "Waning Gibbous";
  if (age < 67) return "Last Quarter";
  return "Waning Crescent";
}

function cleanZip(zip) {
  return (zip || "").trim().match(/\d{5}/)?.[0] || "";
}

function timeZoneFromZip(zip) {
  const clean = cleanZip(zip);
  if (!clean) return null;
  const prefix = Number(clean.slice(0, 3));
  const match = TIMEZONE_BY_ZIP_PREFIX.find((item) => prefix >= item.min && prefix <= item.max);
  return match ? { ...match, zip: clean } : null;
}

function loadClockSettings() {
  try {
    return JSON.parse(localStorage.getItem("vanaClockSettings")) || {};
  } catch {
    return {};
  }
}

function saveClockSettings(settings) {
  clockSettings = settings;
  localStorage.setItem("vanaClockSettings", JSON.stringify(settings));
}

function localTimeZoneInfo() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  return { timeZone, label: "Device Time", zip: "" };
}

function getClockTimeZoneInfo() {
  return clockSettings.timeZone ? clockSettings : localTimeZoneInfo();
}

function timeZoneAbbreviation(date, timeZone) {
  try {
    const parts = new Intl.DateTimeFormat([], { timeZone, timeZoneName: "short" }).formatToParts(date);
    return parts.find((part) => part.type === "timeZoneName")?.value || timeZone;
  } catch {
    return timeZone;
  }
}

function refreshSettingsPanel() {
  const info = getClockTimeZoneInfo();
  els.zipInput.value = clockSettings.zip || "";
  els.settingsStatus.textContent = clockSettings.zip
    ? `Using ${clockSettings.zip}: ${info.label} (${info.timeZone}).`
    : `Using this device: ${info.timeZone}.`;
}

function weatherFor(zone, day, slotOffset = 0) {
  const slot = Math.floor((Date.now() / (1000 * 60 * 8)) + slotOffset);
  const index = Math.abs((slot + day * 3 + zone.name.length) % zone.weather.length);
  return WEATHER[zone.weather[index]];
}

function renderForecast(zone, vana) {
  els.forecast.innerHTML = "";
  for (let index = 1; index <= 4; index += 1) {
    const weather = weatherFor(zone, vana.totalDays, index);
    const item = document.createElement("div");
    item.innerHTML = `<span>+${index * 8}m</span><strong>${weather.icon}</strong>`;
    item.title = weather.name;
    els.forecast.appendChild(item);
  }
}

function forecastHitForZone(zone, vana, weatherKey) {
  for (let index = 0; index <= 4; index += 1) {
    const weather = weatherFor(zone, vana.totalDays, index);
    if (weather === WEATHER[weatherKey]) {
      return index === 0 ? "Now" : `+${index * 8}m`;
    }
  }
  return "";
}

function renderWeatherSearchResults(vana) {
  const weatherKey = els.weatherSearch.value;
  els.weatherResults.innerHTML = "";

  if (!weatherKey) {
    els.weatherSearchSummary.textContent = "Search all locations by current or upcoming weather.";
    return;
  }

  const weather = WEATHER[weatherKey];
  const matches = ZONES
    .map((zone, index) => ({ zone, index, hit: forecastHitForZone(zone, vana, weatherKey) }))
    .filter((item) => item.hit);

  els.weatherSearchSummary.textContent = matches.length
    ? `${matches.length} locations show ${weather.name} now or within 32 minutes.`
    : `No locations show ${weather.name} in the next 32 minutes.`;

  matches.slice(0, 40).forEach((item) => {
    const button = document.createElement("button");
    const icon = document.createElement("span");
    const name = document.createElement("strong");
    const time = document.createElement("span");

    button.type = "button";
    button.className = "weather-result";
    icon.className = "weather-hit-icon";
    time.className = "weather-hit-time";

    icon.textContent = weather.icon;
    name.textContent = item.zone.name;
    time.textContent = item.hit;

    button.appendChild(icon);
    button.appendChild(name);
    button.appendChild(time);
    button.addEventListener("click", () => {
      els.zoneSelect.selectedIndex = item.index;
      update();
    });

    els.weatherResults.appendChild(button);
  });

  if (matches.length > 40) {
    const overflow = document.createElement("p");
    overflow.className = "weather-search-summary";
    overflow.textContent = `Showing first 40 matches. Narrow by waiting for the next weather cycle.`;
    els.weatherResults.appendChild(overflow);
  }
}

function chooseBackgroundIndex() {
  if (BACKGROUNDS.length === 1) return 0;
  let nextIndex = Math.floor(Math.random() * BACKGROUNDS.length);
  while (nextIndex === currentBackgroundIndex) {
    nextIndex = Math.floor(Math.random() * BACKGROUNDS.length);
  }
  return nextIndex;
}

function rotateBackground() {
  const nextIndex = chooseBackgroundIndex();
  const incoming = activeBackdrop === 0 ? els.backdropB : els.backdropA;
  const outgoing = activeBackdrop === 0 ? els.backdropA : els.backdropB;

  incoming.style.backgroundImage = `url("${BACKGROUNDS[nextIndex]}")`;
  incoming.classList.add("active");
  outgoing.classList.remove("active");

  activeBackdrop = activeBackdrop === 0 ? 1 : 0;
  currentBackgroundIndex = nextIndex;
}

function update() {
  const vana = getVanaTime();
  const day = DAYS[vana.dayIndex];
  const zone = ZONES[els.zoneSelect.selectedIndex] || ZONES[0];
  const weather = weatherFor(zone, vana.totalDays);
  const now = new Date();
  const timeZoneInfo = getClockTimeZoneInfo();
  const timeZoneName = timeZoneAbbreviation(now, timeZoneInfo.timeZone);

  els.vanaTime.textContent = `${pad(vana.hour)}:${pad(vana.minute)}`;
  els.vanaDate.textContent = `${pad(vana.month)}/${pad(vana.day)}/${vana.year}`;
  els.vanaDay.textContent = day.name;
  els.currentElement.textContent = day.element;
  els.moonPhase.textContent = moonPhase(vana.moonAge);
  els.earthTime.textContent = new Intl.DateTimeFormat([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: timeZoneInfo.timeZone
  }).format(now);
  els.earthZone.textContent = clockSettings.zip
    ? `${timeZoneInfo.label} · ${timeZoneName} · ZIP ${clockSettings.zip}`
    : `${timeZoneInfo.label} · ${timeZoneName}`;

  els.dayOrb.style.setProperty("--day-gradient", day.gradient);
  els.dayOrb.style.setProperty("--day-glow", day.glow);
  els.weatherIcon.textContent = weather.icon;
  els.weatherName.textContent = weather.name;
  els.weatherNote.textContent = weather.note;
  els.weatherIcon.style.setProperty("--weather-gradient", weather.gradient);
  els.weatherIcon.style.setProperty("--weather-glow", weather.glow);

  renderForecast(zone, vana);
  renderWeatherSearchResults(vana);
}

const defaultWeatherOption = document.createElement("option");
defaultWeatherOption.value = "";
defaultWeatherOption.textContent = "Choose weather...";
els.weatherSearch.appendChild(defaultWeatherOption);

WEATHER_SEARCH_ORDER.forEach((weatherKey) => {
  const option = document.createElement("option");
  option.value = weatherKey;
  option.textContent = WEATHER[weatherKey].name;
  els.weatherSearch.appendChild(option);
});

ZONES.forEach((zone) => {
  const option = document.createElement("option");
  option.textContent = zone.name;
  option.value = zone.name;
  els.zoneSelect.appendChild(option);
});

els.zoneSelect.addEventListener("change", update);
els.weatherSearch.addEventListener("change", update);
els.weatherSearchClear.addEventListener("click", () => {
  els.weatherSearch.value = "";
  update();
});

els.settingsToggle.addEventListener("click", () => {
  els.settingsPanel.hidden = !els.settingsPanel.hidden;
  els.settingsToggle.setAttribute("aria-label", els.settingsPanel.hidden ? "Open settings" : "Close settings");
});

els.saveSettings.addEventListener("click", () => {
  const match = timeZoneFromZip(els.zipInput.value);
  if (!match) {
    els.settingsStatus.textContent = "Enter a valid 5-digit U.S. ZIP code.";
    return;
  }

  saveClockSettings(match);
  refreshSettingsPanel();
  update();
});

els.clearSettings.addEventListener("click", () => {
  localStorage.removeItem("vanaClockSettings");
  clockSettings = {};
  refreshSettingsPanel();
  update();
});

els.zipInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    els.saveSettings.click();
  }
});

els.compactToggle.addEventListener("click", () => {
  els.widget.classList.toggle("compact");
  els.compactToggle.textContent = els.widget.classList.contains("compact") ? "Full" : "Compact";
});

refreshSettingsPanel();
update();
rotateBackground();
setInterval(update, 1000);
setInterval(rotateBackground, 120000);

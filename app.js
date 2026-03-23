const personas = [
  {
    id: "mediterranean",
    label: "Mediterranean Glow",
    region: "Southern European-inspired styling",
    description:
      "Warm citrus tones, sculpted gold jewelry, and sunlit elegance with a dramatic silhouette.",
    palette: {
      background: "linear-gradient(160deg, #f2d6a2 0%, #dd8759 48%, #7f3929 100%)",
      skin: "#dba57f",
      hair: "#2d1b15",
      garment: "#8a2f23",
      accent: "#f6d58e",
      shadow: "#8d5131",
    },
  },
  {
    id: "east-asia",
    label: "Lacquer Night",
    region: "East Asian-inspired styling",
    description:
      "Ink-dark hair, luminous florals, and a refined editorial silhouette grounded in deep crimson.",
    palette: {
      background: "linear-gradient(165deg, #f5d9cb 0%, #c96d58 54%, #5e1e24 100%)",
      skin: "#f0c6aa",
      hair: "#1f1214",
      garment: "#b53a36",
      accent: "#ffdca7",
      shadow: "#6a2f31",
    },
  },
  {
    id: "north-africa",
    label: "Desert Saffron",
    region: "North African-inspired styling",
    description:
      "Saffron drapery, bold geometry, and a regal pose against a sandstorm sunset palette.",
    palette: {
      background: "linear-gradient(160deg, #f2cb83 0%, #d17d47 44%, #6c3e2a 100%)",
      skin: "#c98557",
      hair: "#251813",
      garment: "#2d6a5b",
      accent: "#ffd487",
      shadow: "#77492e",
    },
  },
  {
    id: "afrodiaspora",
    label: "Velvet Voltage",
    region: "Afro-diasporic-inspired styling",
    description:
      "Electric color blocking, commanding posture, and a jewel-toned nightclub energy.",
    palette: {
      background: "linear-gradient(160deg, #f4a673 0%, #a14c58 46%, #2c1634 100%)",
      skin: "#6d3f32",
      hair: "#181111",
      garment: "#3f8c7c",
      accent: "#f6c35e",
      shadow: "#472632",
    },
  },
  {
    id: "south-asia",
    label: "Monsoon Silk",
    region: "South Asian-inspired styling",
    description:
      "Saturated jewel shades, fluid fabric, and a cinematic profile touched by monsoon light.",
    palette: {
      background: "linear-gradient(160deg, #f6c36d 0%, #dd7b56 38%, #6d2057 100%)",
      skin: "#b87353",
      hair: "#211516",
      garment: "#175e74",
      accent: "#ffd98f",
      shadow: "#6b3a37",
    },
  },
  {
    id: "latina",
    label: "Neon Fiesta",
    region: "Latin American-inspired styling",
    description:
      "Confident waves, tropical contrast, and nightlife color with a vivid street-fashion edge.",
    palette: {
      background: "linear-gradient(160deg, #f6c084 0%, #e16056 40%, #5d2a5b 100%)",
      skin: "#cb8a65",
      hair: "#2f1f18",
      garment: "#274b8c",
      accent: "#ffd56a",
      shadow: "#7e4a39",
    },
  },
];

const languages = [
  {
    id: "english",
    label: "English",
    locale: "UK / US bite",
    voiceLocales: ["en-GB", "en-US", "en"],
    roasts: [
      {
        text: "You absolute disaster in shoes.",
        translation: "Direct meaning: a stylishly delivered insult for someone hopeless.",
        context: "Sharp, dry, and theatrical without leaning on slurs.",
      },
      {
        text: "I've seen abandoned shopping carts with more direction than you.",
        translation: "Direct meaning: you seem wildly unfocused.",
        context: "A sarcastic roast built on pure disappointment.",
      },
      {
        text: "You're not the main character. You're buffering.",
        translation: "Direct meaning: you are lagging behind the moment.",
        context: "Contemporary, petty, and annoyingly effective.",
      },
    ],
  },
  {
    id: "spanish",
    label: "Spanish",
    locale: "Broad Latin flavor",
    voiceLocales: ["es-ES", "es-MX", "es-US", "es"],
    roasts: [
      {
        text: "Eres un desastre con Wi-Fi.",
        translation: "English: You're a disaster with Wi-Fi.",
        context: "Modern and compact, with the insult landing on competence.",
      },
      {
        text: "Tienes la energía de una excusa mal inventada.",
        translation: "English: You have the energy of a badly invented excuse.",
        context: "Theatrical irritation, more mocking than cruel.",
      },
      {
        text: "Ni el drama te queda bien.",
        translation: "English: Even drama doesn't suit you.",
        context: "Elegant contempt with fashion-magazine attitude.",
      },
    ],
  },
  {
    id: "french",
    label: "French",
    locale: "Parisian sting",
    voiceLocales: ["fr-FR", "fr-CA", "fr"],
    roasts: [
      {
        text: "Tu es fatiguant, meme quand tu te tais.",
        translation: "English: You're exhausting, even when you're quiet.",
        context: "Cold, concise, and devastatingly dismissive.",
      },
      {
        text: "Tu rates meme ton arrogance.",
        translation: "English: You even fail at being arrogant.",
        context: "A crisp roast that attacks performance, not identity.",
      },
      {
        text: "Quel dommage, tu avais l'air plus intelligent de loin.",
        translation: "English: What a shame, you looked smarter from a distance.",
        context: "Catwalk-grade contempt with a smirk attached.",
      },
    ],
  },
  {
    id: "arabic",
    label: "Arabic",
    locale: "Levantine-style delivery",
    voiceLocales: ["ar-SA", "ar-AE", "ar"],
    roasts: [
      {
        text: "ya zalameh, inta fashal biseer lahu sot",
        translation: "English gloss: Man, you're failure with a voice.",
        context: "Rendered in transliteration to keep the UI readable without Arabic font support.",
      },
      {
        text: "inta drama bila karizma",
        translation: "English gloss: You're drama without charisma.",
        context: "Short, musical, and perfect for a side-eye moment.",
      },
      {
        text: "law kan fi ja'izeh lil ihraj, inta btektosoh",
        translation: "English gloss: If there were an award for embarrassment, you'd sweep it.",
        context: "A showy insult that lands as comic humiliation.",
      },
    ],
  },
  {
    id: "japanese",
    label: "Japanese",
    locale: "Cutting and composed",
    voiceLocales: ["ja-JP", "ja"],
    roasts: [
      {
        text: "Anata no hanashi wa nagai noni naka ga nai.",
        translation: "English: You talk for a long time and say nothing.",
        context: "Polite surface, ruthless core.",
      },
      {
        text: "Kakkotsukete mo, zannen wa kakusenai yo.",
        translation: "English: Even if you act cool, you can't hide the disappointment.",
        context: "Clean and understated, but it still twists the knife.",
      },
      {
        text: "Kimi wa majime ni hazukashii.",
        translation: "English: You are sincerely embarrassing.",
        context: "Blunt, compact, and almost too calm.",
      },
    ],
  },
  {
    id: "dutch",
    label: "Dutch",
    locale: "Straight-to-the-face",
    voiceLocales: ["nl-NL", "nl-BE", "nl"],
    roasts: [
      {
        text: "Jij bent echt een wandelende verkeerde beslissing.",
        translation: "English: You are truly a walking bad decision.",
        context: "Direct, dry, and wonderfully unsentimental.",
      },
      {
        text: "Zelfs je chaos is middelmatig.",
        translation: "English: Even your chaos is mediocre.",
        context: "Short and mean in a very efficient way.",
      },
      {
        text: "Je praat groot voor iemand met zoveel softwarefouten.",
        translation: "English: You talk big for someone with this many software errors.",
        context: "Tech-flavored contempt with local bluntness.",
      },
    ],
  },
];

const languageSelect = document.getElementById("languageSelect");
const personaSelect = document.getElementById("personaSelect");
const voiceSelect = document.getElementById("voiceSelect");
const speakButton = document.getElementById("speakButton");
const stopButton = document.getElementById("stopButton");
const voiceStatus = document.getElementById("voiceStatus");
const roastButton = document.getElementById("roastButton");
const shuffleButton = document.getElementById("shuffleButton");
const pairingLabel = document.getElementById("pairingLabel");
const pairingDescription = document.getElementById("pairingDescription");
const roastText = document.getElementById("roastText");
const roastTranslation = document.getElementById("roastTranslation");
const roastContext = document.getElementById("roastContext");
const portrait = document.getElementById("portrait");
const portraitCard = document.querySelector(".portrait-card");
const synth = window.speechSynthesis;

let availableVoices = [];
let currentRoast = null;

const femaleVoiceHints = [
  "alice",
  "allison",
  "alva",
  "amara",
  "ana",
  "ava",
  "catherine",
  "emma",
  "female",
  "fiona",
  "joanna",
  "karen",
  "kendra",
  "lisa",
  "lucia",
  "marie",
  "martha",
  "microsoft aria",
  "microsoft ava",
  "microsoft katja",
  "moira",
  "monica",
  "nora",
  "samantha",
  "sara",
  "serena",
  "siri female",
  "sofia",
  "susan",
  "tessa",
  "victoria",
  "zira",
];

function populateSelect(select, items, formatter) {
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = formatter(item);
    select.appendChild(option);
  });
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function populateVoiceSelect(select, voices) {
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = describeVoice(voice);
    select.appendChild(option);
  });
}

function clearSelect(select) {
  select.innerHTML = "";
}

function isVoiceMatch(voice, language) {
  return language.voiceLocales.some((locale) => voice.lang.toLowerCase().startsWith(locale.toLowerCase()));
}

function isLikelyFemaleVoice(voice) {
  const name = voice.name.toLowerCase();
  return femaleVoiceHints.some((hint) => name.includes(hint));
}

function describeVoice(voice) {
  const source = voice.localService ? "device" : "cloud";
  return `${voice.name} (${voice.lang}, ${source})`;
}

function setVoiceStatus(message) {
  voiceStatus.textContent = message;
}

function getLanguageById(id) {
  return languages.find((item) => item.id === id);
}

function getSelectedVoice() {
  return availableVoices.find((voice) => voice.name === voiceSelect.value) ?? null;
}

function updateVoiceOptions(preferredVoiceName) {
  const language = getLanguageById(languageSelect.value);
  const matchingVoices = availableVoices.filter((voice) => isVoiceMatch(voice, language));
  const femaleVoices = matchingVoices.filter(isLikelyFemaleVoice);
  const voicesToRender = femaleVoices.length > 0 ? femaleVoices : matchingVoices;

  clearSelect(voiceSelect);

  if (voicesToRender.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = `No ${language.label} voices available in this browser`;
    voiceSelect.appendChild(option);
    voiceSelect.disabled = true;
    setVoiceStatus(`No ${language.label} speech voice is currently available on this device.`);
    return;
  }

  voiceSelect.disabled = false;
  populateVoiceSelect(voiceSelect, voicesToRender);

  const selectedVoice =
    voicesToRender.find((voice) => voice.name === preferredVoiceName) ??
    voicesToRender.find((voice) => voice.default) ??
    voicesToRender[0];

  voiceSelect.value = selectedVoice.name;

  if (femaleVoices.length > 0) {
    setVoiceStatus(`${femaleVoices.length} likely female ${language.label} voice${femaleVoices.length === 1 ? "" : "s"} ready.`);
    return;
  }

  setVoiceStatus(`Using the available ${language.label} voice set because no clearly female-labelled option was found.`);
}

function loadVoices() {
  if (!synth) {
    voiceSelect.disabled = true;
    speakButton.disabled = true;
    stopButton.disabled = true;
    setVoiceStatus("This browser does not support speech synthesis.");
    return;
  }

  availableVoices = synth.getVoices().slice().sort((left, right) => left.name.localeCompare(right.name));
  updateVoiceOptions(getSelectedVoice()?.name);
}

function renderPortrait(persona) {
  const { background, skin, hair, garment, accent, shadow } = persona.palette;

  portraitCard.style.setProperty("--portrait-bg", background);
  portrait.innerHTML = `
    <svg viewBox="0 0 420 480" role="img" aria-label="${persona.label} portrait">
      <defs>
        <linearGradient id="garmentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${garment}" />
          <stop offset="100%" stop-color="${shadow}" />
        </linearGradient>
      </defs>
      <circle cx="210" cy="158" r="102" fill="${accent}" opacity="0.18" />
      <g class="muse-shell">
        <g class="muse-shoulders">
          <path
            d="M118 452c16-83 58-128 92-140h68c37 14 79 59 95 140Z"
            fill="url(#garmentGradient)"
          />
          <path
            d="M100 450c16-22 53-39 78-42 18 25 48 38 69 38 30 0 53-13 72-38 31 6 60 20 81 42"
            fill="none"
            stroke="${accent}"
            stroke-opacity="0.42"
            stroke-width="10"
            stroke-linecap="round"
          />
        </g>
        <g class="muse-head">
          <path
            d="M145 158c0-58 32-104 75-104 49 0 94 43 94 109 0 64-39 119-94 119-44 0-75-58-75-124Z"
            fill="${skin}"
          />
          <path
            d="M121 160c0-86 48-130 110-130 66 0 114 52 114 122 0 31-11 51-24 70-3-44-14-86-46-108-20-14-46-16-69-9-35 11-63 41-85 84-1-9 0-19 0-29Z"
            fill="${hair}"
          />
          <path
            d="M194 273c10 7 22 11 36 11 17 0 31-5 42-12-8 27-23 45-41 45-18 0-31-19-37-44Z"
            fill="${skin}"
            opacity="0.95"
          />
          <path
            d="M168 181c13-13 28-15 43-8 14 7 22 6 39-3 14-8 31-6 46 10"
            fill="none"
            stroke="${hair}"
            stroke-width="11"
            stroke-linecap="round"
          />
          <ellipse class="muse-eye" cx="185" cy="198" rx="6" ry="6" fill="${hair}" />
          <ellipse class="muse-eye" cx="252" cy="197" rx="6" ry="6" fill="${hair}" />
          <ellipse
            class="muse-mouth"
            cx="215"
            cy="223"
            rx="18"
            ry="5"
            fill="#9b4b40"
            opacity="0.95"
          />
        </g>
      </g>
      <circle cx="118" cy="186" r="10" fill="${accent}" />
      <circle cx="319" cy="187" r="10" fill="${accent}" />
    </svg>
  `;
}

function setSpeakingState(isSpeaking) {
  portraitCard.classList.toggle("is-speaking", isSpeaking);
}

function renderSelection() {
  const language = getLanguageById(languageSelect.value);
  const persona = personas.find((item) => item.id === personaSelect.value);

  pairingLabel.textContent = `${language.label} x ${persona.label}`;
  pairingDescription.textContent = `${language.locale}. ${persona.region}. ${persona.description}`;

  renderPortrait(persona);
}

function roastCurrentSelection() {
  const language = getLanguageById(languageSelect.value);
  const roast = randomItem(language.roasts);
  currentRoast = roast;

  roastText.textContent = roast.text;
  roastTranslation.textContent = roast.translation;
  roastContext.textContent = roast.context;

  return roast;
}

function speakRoast(roast = currentRoast) {
  if (!synth) {
    setVoiceStatus("Speech synthesis is not supported in this browser.");
    return;
  }

  if (!roast) {
    setVoiceStatus("Generate a roast first so the voice has something to say.");
    return;
  }

  const selectedVoice = getSelectedVoice();

  if (!selectedVoice) {
    setVoiceStatus("Choose an available voice before starting playback.");
    return;
  }

  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(roast.text);
  utterance.voice = selectedVoice;
  utterance.lang = selectedVoice.lang;
  utterance.pitch = 1.15;
  utterance.rate = 0.95;

  utterance.onstart = () => {
    setSpeakingState(true);
    setVoiceStatus(`Speaking with ${selectedVoice.name}.`);
  };

  utterance.onend = () => {
    setSpeakingState(false);
    setVoiceStatus(`Finished speaking with ${selectedVoice.name}.`);
  };

  utterance.onerror = () => {
    setSpeakingState(false);
    setVoiceStatus("Voice playback failed in this browser session.");
  };

  synth.speak(utterance);
}

function shuffleAll() {
  const language = randomItem(languages);
  const persona = randomItem(personas);

  languageSelect.value = language.id;
  personaSelect.value = persona.id;

  renderSelection();
  updateVoiceOptions();
  speakRoast(roastCurrentSelection());
}

populateSelect(languageSelect, languages, (item) => `${item.label} (${item.locale})`);
populateSelect(personaSelect, personas, (item) => `${item.label} (${item.region})`);

languageSelect.value = languages[0].id;
personaSelect.value = personas[0].id;

languageSelect.addEventListener("change", () => {
  updateVoiceOptions();
  renderSelection();
  speakRoast(roastCurrentSelection());
});

voiceSelect.addEventListener("change", () => {
  const selectedVoice = getSelectedVoice();
  if (selectedVoice) {
    setVoiceStatus(`Selected ${selectedVoice.name} for spoken roasts.`);
  }
});

personaSelect.addEventListener("change", renderSelection);
roastButton.addEventListener("click", () => {
  speakRoast(roastCurrentSelection());
});
shuffleButton.addEventListener("click", shuffleAll);
speakButton.addEventListener("click", () => speakRoast());
stopButton.addEventListener("click", () => {
  if (!synth) {
    return;
  }

  synth.cancel();
  setSpeakingState(false);
  setVoiceStatus("Voice playback stopped.");
});

if (synth) {
  synth.addEventListener("voiceschanged", loadVoices);
}

renderSelection();
roastCurrentSelection();
loadVoices();

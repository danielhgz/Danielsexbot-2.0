const personas = [
  {
    id: "london-noir",
    languageId: "english",
    label: "Naomi, London Noir",
    region: "London-inspired styling",
    description:
      "Tailored glamour, polished gold accents, and the kind of composure that makes a weak excuse sound even weaker.",
    palette: {
      background: "linear-gradient(160deg, #dfccb9 0%, #a26f63 50%, #36242a 100%)",
      skin: "#c58a6c",
      hair: "#22171c",
      garment: "#4f2430",
      accent: "#f1d2a3",
      shadow: "#2f1820",
    },
  },
  {
    id: "cdmx-neon",
    languageId: "spanish",
    label: "Valeria, CDMX Neon",
    region: "Mexico City-inspired styling",
    description:
      "Glossy nightlife color, confident tailoring, and a fast-talking socialite energy sharpened for public embarrassment.",
    palette: {
      background: "linear-gradient(165deg, #f4c4a3 0%, #df6a5d 52%, #5f275e 100%)",
      skin: "#c98762",
      hair: "#261818",
      garment: "#214d8c",
      accent: "#ffd36d",
      shadow: "#6d3840",
    },
  },
  {
    id: "paris-tailored",
    languageId: "french",
    label: "Camille, Paris Tailored",
    region: "Paris-inspired styling",
    description:
      "Structured elegance, immaculate posture, and a gaze that suggests your self-confidence was a clerical error.",
    palette: {
      background: "linear-gradient(160deg, #ead3c3 0%, #bb7c6c 46%, #402730 100%)",
      skin: "#f0c6aa",
      hair: "#201516",
      garment: "#7a2f35",
      accent: "#f7ddb0",
      shadow: "#4a2830",
    },
  },
  {
    id: "beirut-saffron",
    languageId: "arabic",
    label: "Layla, Beirut Saffron",
    region: "Beirut-inspired styling",
    description:
      "Warm evening tones, statement jewelry, and a poised delivery designed for elegant destruction.",
    palette: {
      background: "linear-gradient(160deg, #f1c680 0%, #ca7d4c 44%, #5c2f2b 100%)",
      skin: "#c6875a",
      hair: "#241716",
      garment: "#2f6c60",
      accent: "#ffd58d",
      shadow: "#6c4030",
    },
  },
  {
    id: "tokyo-lacquer",
    languageId: "japanese",
    label: "Aiko, Tokyo Lacquer",
    region: "Tokyo-inspired styling",
    description:
      "Lacquer-dark shine, precise styling, and a composed expression that makes your chaos look even louder.",
    palette: {
      background: "linear-gradient(160deg, #f3d6cc 0%, #c96459 42%, #541d29 100%)",
      skin: "#f0c6aa",
      hair: "#1c1113",
      garment: "#b43a37",
      accent: "#ffdda8",
      shadow: "#662f32",
    },
  },
  {
    id: "amsterdam-glass",
    languageId: "dutch",
    label: "Sanne, Amsterdam Glass",
    region: "Amsterdam-inspired styling",
    description:
      "Clean lines, cool confidence, and a brutally calm expression that suits efficient insults.",
    palette: {
      background: "linear-gradient(160deg, #d9d6cf 0%, #8ca3a1 42%, #2c394f 100%)",
      skin: "#d7a98a",
      hair: "#3a2b25",
      garment: "#30506d",
      accent: "#f0d39e",
      shadow: "#334050",
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
        text: "You type like every sentence lost a custody battle with common sense.",
        translation: "Direct meaning: your messages sound embarrassingly confused.",
        context: "Personal, contemporary, and aimed at the user's behavior rather than identity.",
      },
      {
        text: "You talk about macroeconomics like a podcast thumbnail learned to type.",
        translation: "Direct meaning: your financial takes sound loud, shallow, and second-hand.",
        context: "Sharper and more personal, focused on performative economics talk and bad analysis.",
      },
      {
        text: "You are not mysterious. You are what happens when overconfidence forgets to prepare.",
        translation: "Direct meaning: you act impressive, but the act falls apart quickly.",
        context: "Cold, direct, and built to puncture ego.",
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
        text: "Tienes cara de mandar 'hola perdida' y luego no saber que decir.",
        translation: "English: You look like the type to send 'hey stranger' and then have nothing to say.",
        context: "Specific to bad DM behavior, with a mocking social tone.",
      },
      {
        text: "Hablas de criptomonedas como si perder dinero te diera autoridad.",
        translation: "English: You talk about cryptocurrencies as if losing money gave you authority.",
        context: "Stylish contempt aimed at crypto posturing and empty conviction.",
      },
      {
        text: "Hablas con una seguridad que tu criterio no puede mantener.",
        translation: "English: You speak with a confidence your judgment cannot support.",
        context: "Clean, personal, and built around exposed delusion.",
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
        text: "Tu parles d'economie avec l'assurance de quelqu'un qui confond un graphique avec une revelation.",
        translation: "English: You talk about economics with the confidence of someone who mistakes a chart for a revelation.",
        context: "Personal and polished, targeting loud certainty built on flimsy economic analysis.",
      },
      {
        text: "Tu veux etre troublant, mais tu es surtout previsible.",
        translation: "English: You want to be unsettling, but mostly you're predictable.",
        context: "Measured contempt that cuts through a performative persona.",
      },
      {
        text: "Le plus impressionnant chez toi, c'est la distance entre ton ego et la realite.",
        translation: "English: The most impressive thing about you is the distance between your ego and reality.",
        context: "Elegant, direct, and ideal for a clean public takedown.",
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
        text: "inta btfakker halak mohem, bas kel klamak copy paste",
        translation: "English gloss: You think you're important, but everything you say feels copy-paste.",
        context: "Transliterated for UI readability, with the insult aimed at fake originality.",
      },
      {
        text: "ya zalameh, hatta th2tak bnafsak bedda th2a",
        translation: "English gloss: Man, even your confidence needs confidence.",
        context: "Short and rhythmic, landing on overconfidence and public embarrassment.",
      },
      {
        text: "kol ma tehki aktar, kol ma bein enno ma fi shi jowatak",
        translation: "English gloss: The more you talk, the clearer it gets there's nothing behind it.",
        context: "Personal and escalating, focused on exposed emptiness rather than identity.",
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
        text: "Kimi no messeeji wa tsuyoki na no ni, naka mi ga sukkarakan da ne.",
        translation: "English: Your messages sound bold, but they're empty inside.",
        context: "Personal and composed, focused on the gap between tone and substance.",
      },
      {
        text: "Jibun ni horeteru no wa wakaru kedo, sore de minna wa damasenai yo.",
        translation: "English: I can see you're in love with yourself, but that doesn't fool everyone else.",
        context: "Still calm on the surface, but far more personally humiliating.",
      },
      {
        text: "Mysterious no tsumori kamo shirenai kedo, tada setsumei busoku na dake.",
        translation: "English: Maybe you're trying to seem mysterious, but really you're just underdeveloped.",
        context: "Precise, modern, and aimed at a familiar dating-app persona.",
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
        text: "Jij klinkt als iemand die zichzelf interessant vindt omdat niemand anders dat doet.",
        translation: "English: You sound like someone who finds himself interesting because nobody else does.",
        context: "Direct, personal, and built around ego with no backup.",
      },
      {
        text: "Je profiel straalt precies genoeg zelfvertrouwen uit om direct vermoeiend te zijn.",
        translation: "English: Your profile gives off exactly enough confidence to become tiring immediately.",
        context: "Targeted at platform behavior, with a flat Dutch delivery.",
      },
      {
        text: "Hoe langer je praat, hoe duidelijker het wordt dat je vooral volume hebt.",
        translation: "English: The longer you talk, the clearer it gets that volume is all you have.",
        context: "Efficient and personal, aimed at empty swagger.",
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

function getPersonaByLanguageId(languageId) {
  return personas.find((item) => item.languageId === languageId) ?? personas[0];
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
        <g class="muse-gesture" aria-hidden="true">
          <path
            class="muse-arm"
            d="M292 342c30 4 54 22 67 48 11 23 15 47 18 67"
            fill="none"
            stroke="${skin}"
            stroke-width="18"
            stroke-linecap="round"
          />
          <g class="muse-hand">
            <path
              d="M350 384c8-12 23-16 36-11 11 4 18 15 18 27 0 13-8 24-20 29-17 7-38-1-44-19-3-9-1-18 10-26Z"
              fill="${skin}"
            />
            <path
              class="muse-finger"
              d="M379 360c4-22 11-35 20-39 7-3 14 1 16 8 2 8-2 17-9 22-6 4-10 10-12 19"
              fill="none"
              stroke="${skin}"
              stroke-width="14"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M366 378c-1-12 3-21 11-24 7-3 14 2 15 9 2 8-2 16-10 20"
              fill="none"
              stroke="${skin}"
              stroke-width="11"
              stroke-linecap="round"
            />
            <path
              d="M354 389c-2-10 0-18 8-22 7-3 14 1 16 8 2 8-2 15-9 20"
              fill="none"
              stroke="${skin}"
              stroke-width="10"
              stroke-linecap="round"
            />
            <path
              d="M350 401c-2-8-1-14 5-18 6-3 12 0 14 6 2 7-1 13-7 17"
              fill="none"
              stroke="${skin}"
              stroke-width="9"
              stroke-linecap="round"
            />
          </g>
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
  const persona = getPersonaByLanguageId(language.id);

  languageSelect.value = language.id;
  personaSelect.value = persona.id;

  renderSelection();
  updateVoiceOptions();
  speakRoast(roastCurrentSelection());
}

populateSelect(languageSelect, languages, (item) => `${item.label} (${item.locale})`);
populateSelect(personaSelect, personas, (item) => `${item.label} (${item.region})`);

languageSelect.value = languages[0].id;
personaSelect.value = getPersonaByLanguageId(languages[0].id).id;

languageSelect.addEventListener("change", () => {
  personaSelect.value = getPersonaByLanguageId(languageSelect.value).id;
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

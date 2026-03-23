const personas = [
  {
    id: "london-noir",
    languageId: "english",
    label: "Naomi, London Noir",
    region: "London-inspired styling",
    description:
      "Tailored glamour, polished gold accents, and the kind of composure that can turn a shaky market thesis into a public humiliation.",
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
      "Glossy nightlife color, confident tailoring, and a fast-talking socialite energy sharpened for crypto delusion.",
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
      "Structured elegance, immaculate posture, and a gaze that suggests your inflation take belongs in a museum of bad judgment.",
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
      "Warm evening tones, statement jewelry, and a poised delivery designed for elegant market destruction.",
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
      "Lacquer-dark shine, precise styling, and a composed expression that makes your trading chaos look even louder.",
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
      "Clean lines, cool confidence, and a brutally calm expression that suits efficient financial mockery.",
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
        text: "You explain inflation like you met one graph and built a personality around it.",
        translation: "Direct meaning: your economics takes sound shallow and overconfident.",
        context: "Personal, contemporary, and built around bad macro commentary.",
      },
      {
        text: "You talk about macroeconomics like a podcast thumbnail learned to type.",
        translation: "Direct meaning: your financial takes sound loud, shallow, and second-hand.",
        context: "Sharper and more personal, focused on performative economics talk and bad analysis.",
      },
      {
        text: "Your crypto strategy looks like three buzzwords in a trench coat pretending to be due diligence.",
        translation: "Direct meaning: your investing logic is flimsy and performative.",
        context: "Cold, direct, and built to puncture fake conviction around crypto.",
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
        text: "Hablas de recesion como si repetir titulares fuera analisis.",
        translation: "English: You talk about recession as if repeating headlines were analysis.",
        context: "Specific to shallow economics talk, with a mocking social tone.",
      },
      {
        text: "Hablas de criptomonedas como si perder dinero te diera autoridad.",
        translation: "English: You talk about cryptocurrencies as if losing money gave you authority.",
        context: "Stylish contempt aimed at crypto posturing and empty conviction.",
      },
      {
        text: "Tu portafolio suena exactamente como una apuesta vestida de vocabulario financiero.",
        translation: "English: Your portfolio sounds exactly like a gamble dressed up in financial vocabulary.",
        context: "Clean, personal, and built around exposed delusion in investing talk.",
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
        text: "Tu parles de crypto comme si la volatilite etait une preuve d'intelligence.",
        translation: "English: You talk about crypto as if volatility were proof of intelligence.",
        context: "Measured contempt aimed at performative crypto sophistication.",
      },
      {
        text: "Le plus impressionnant chez toi, c'est la distance entre ton ego et ton rendement.",
        translation: "English: The most impressive thing about you is the distance between your ego and your returns.",
        context: "Elegant, direct, and ideal for a clean financial takedown.",
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
        text: "inta بتحكي عن el iqtisad kello k2anno thread men wa7ad ma bya3ref y2ra arqam",
        translation: "English gloss: You talk about economics like a thread from someone who cannot read numbers.",
        context: "Transliterated for UI readability, aimed at fake economic authority.",
      },
      {
        text: "ya zalameh, crypto advice taba3ak bya3mel panic aktar men el sou2",
        translation: "English gloss: Man, your crypto advice causes more panic than the market.",
        context: "Short and rhythmic, landing on bad crypto judgment and public embarrassment.",
      },
      {
        text: "kol ma tehki aktar 3an el istithmar, kol ma bein enno ma fi khitta aslan",
        translation: "English gloss: The more you talk about investing, the clearer it gets there was never a plan.",
        context: "Personal and escalating, focused on exposed emptiness in investment talk.",
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
        text: "Kimi no keizai no hanashi, grafu wo mite kashikoku natta ki ni natteiru dake da ne.",
        translation: "English: Your economics talk is just you feeling smart after looking at a chart.",
        context: "Personal and composed, focused on the gap between market jargon and substance.",
      },
      {
        text: "Crypto ni kuwashii furi wo shiteiru kedo, sore tte takai jugyou ryou no gamburu da yo ne.",
        translation: "English: You act like you're knowledgeable about crypto, but it's really just expensive gambling.",
        context: "Still calm on the surface, but far more personally humiliating in a crypto context.",
      },
      {
        text: "Kimi no toushi senryaku wa fukuzatsu janai, setsumei dekinaidake.",
        translation: "English: Your investment strategy is not sophisticated, you just can't explain it.",
        context: "Precise, modern, and aimed at fake sophistication in investing.",
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
        text: "Jij praat over economie alsof een podcastsamenvatting hetzelfde is als inzicht.",
        translation: "English: You talk about economics as if a podcast summary were the same thing as insight.",
        context: "Direct, personal, and built around ego with no analytical backup.",
      },
      {
        text: "Jouw cryptovertrouwen klinkt alsof verlies voor jou gewoon branding is.",
        translation: "English: Your crypto confidence sounds like losses are just branding to you.",
        context: "Targeted at crypto behavior, with a flat Dutch delivery.",
      },
      {
        text: "Hoe langer je over beleggen praat, hoe duidelijker het wordt dat je vooral gokken bedoelt.",
        translation: "English: The longer you talk about investing, the clearer it gets you really mean gambling.",
        context: "Efficient and personal, aimed at empty swagger in finance talk.",
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
  "amira",
  "amy",
  "anna",
  "ava",
  "bella",
  "cora",
  "catherine",
  "clara",
  "elena",
  "emma",
  "eva",
  "female",
  "fiona",
  "helena",
  "isabella",
  "jenny",
  "joanna",
  "julia",
  "karen",
  "kendra",
  "luna",
  "lisa",
  "lucia",
  "maddie",
  "marie",
  "martha",
  "microsoft aria",
  "microsoft ava",
  "microsoft hazel",
  "microsoft katja",
  "microsoft natasha",
  "microsoft sonia",
  "moira",
  "monica",
  "nora",
  "paulina",
  "paula",
  "salli",
  "samantha",
  "sara",
  "serena",
  "siri female",
  "sofia",
  "sonia",
  "stefanie",
  "susan",
  "tessa",
  "veena",
  "victoria",
  "zira desktop",
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
  const voicesToRender = femaleVoices;

  clearSelect(voiceSelect);

  if (voicesToRender.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = `No female ${language.label} voices available in this browser`;
    voiceSelect.appendChild(option);
    voiceSelect.disabled = true;
    setVoiceStatus(`No female-labelled ${language.label} speech voice is currently available on this device.`);
    return;
  }

  voiceSelect.disabled = false;
  populateVoiceSelect(voiceSelect, voicesToRender);

  const selectedVoice =
    voicesToRender.find((voice) => voice.name === preferredVoiceName) ??
    voicesToRender.find((voice) => voice.default) ??
    voicesToRender[0];

  voiceSelect.value = selectedVoice.name;
  setVoiceStatus(`${femaleVoices.length} likely female ${language.label} voice${femaleVoices.length === 1 ? "" : "s"} ready.`);
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
        <radialGradient id="skinLight" cx="42%" cy="30%" r="68%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.38" />
          <stop offset="34%" stop-color="${skin}" />
          <stop offset="100%" stop-color="${shadow}" stop-opacity="0.22" />
        </radialGradient>
        <radialGradient id="skinShade" cx="58%" cy="56%" r="48%">
          <stop offset="0%" stop-color="${shadow}" stop-opacity="0" />
          <stop offset="100%" stop-color="${shadow}" stop-opacity="0.22" />
        </radialGradient>
        <linearGradient id="hairGloss" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stop-color="${hair}" />
          <stop offset="40%" stop-color="${shadow}" />
          <stop offset="100%" stop-color="${hair}" />
        </linearGradient>
        <linearGradient id="lipColor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b15f58" />
          <stop offset="100%" stop-color="#7f3a3b" />
        </linearGradient>
      </defs>
      <circle cx="210" cy="156" r="112" fill="${accent}" opacity="0.18" />
      <ellipse cx="204" cy="402" rx="124" ry="34" fill="${shadow}" opacity="0.14" />
      <g class="muse-shell">
        <g class="muse-shoulders">
          <path
            d="M100 454c19-89 66-139 112-148h66c49 14 90 60 108 148Z"
            fill="url(#garmentGradient)"
          />
          <path
            d="M121 451c17-26 48-48 73-54 19 26 45 36 69 36 27 0 53-12 73-37 31 8 62 29 82 55"
            fill="none"
            stroke="${accent}"
            stroke-opacity="0.34"
            stroke-width="8"
            stroke-linecap="round"
          />
          <path
            d="M170 318c12 35 32 51 50 51 21 0 42-17 54-51"
            fill="none"
            stroke="${accent}"
            stroke-opacity="0.2"
            stroke-width="18"
            stroke-linecap="round"
          />
        </g>
        <g class="muse-gesture" aria-hidden="true">
          <path
            class="muse-arm"
            d="M286 338c30 0 57 14 77 39 18 23 31 53 33 83"
            fill="none"
            stroke="${skin}"
            stroke-width="22"
            stroke-linecap="round"
          />
          <g class="muse-hand">
            <path
              d="M344 389c10-14 30-18 46-10 12 6 20 19 21 33 1 14-5 27-16 35-16 12-43 10-57-4-8-8-12-19-10-31 2-9 7-16 16-23Z"
              fill="url(#skinLight)"
            />
            <path
              d="M372 341c0-22 4-38 12-49 7-9 17-13 26-9 8 4 12 12 12 22 0 9-4 17-11 22-7 6-11 13-11 24v24h-28Z"
              fill="url(#skinLight)"
            />
            <path
              class="muse-knuckle"
              d="M353 398c10-8 20-11 29-9 8 2 12 8 13 16 1 10-4 19-14 24"
              fill="none"
              stroke="${shadow}"
              stroke-opacity="0.28"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M344 397c1-9 6-17 14-22 8-5 17-4 23 2 6 6 7 16 3 24-4 8-11 14-20 18"
              fill="none"
              stroke="${skin}"
              stroke-width="12"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M349 409c1-9 5-16 12-21 7-5 16-5 21 0 6 5 8 13 6 21-3 9-10 15-18 20"
              fill="none"
              stroke="${skin}"
              stroke-width="10"
              stroke-linecap="round"
            />
            <path
              d="M356 420c0-7 3-13 8-17 6-5 13-6 18-2 5 4 6 11 4 18-2 8-7 14-15 18"
              fill="none"
              stroke="${skin}"
              stroke-width="9"
              stroke-linecap="round"
            />
            <path
              d="M346 409c-3-11-1-20 7-27 6-6 15-9 22-8 8 2 13 8 14 16 1 8-2 15-8 22"
              fill="none"
              stroke="${skin}"
              stroke-width="11"
              stroke-linecap="round"
            />
            <path
              class="muse-finger"
              d="M387 342c0-26 6-47 18-60 8-10 19-13 28-9 8 3 13 12 13 23 1 13-4 24-12 31-8 8-12 16-12 28v46h-35Z"
              fill="none"
              stroke="${skin}"
              stroke-width="18"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M405 349c5-17 13-27 24-30"
              fill="none"
              stroke="${shadow}"
              stroke-opacity="0.16"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              d="M402 432c8-1 16-4 23-10"
              fill="none"
              stroke="${shadow}"
              stroke-opacity="0.18"
              stroke-width="4"
              stroke-linecap="round"
            />
            <path
              d="M345 415c6 15 18 23 35 25 15 2 29-2 42-12"
              fill="url(#skinShade)"
              opacity="0.75"
            />
          </g>
        </g>
        <g class="muse-head">
          <path
            d="M145 162c0-64 35-111 80-116 56-7 102 36 108 107 5 68-31 127-90 136-53 8-98-49-98-127Z"
            fill="url(#skinLight)"
          />
          <path
            d="M119 164c0-92 50-136 112-136 68 0 119 51 119 127 0 36-10 61-27 82-2-43-11-82-37-109-18-18-43-29-72-27-38 3-72 26-97 72-1-4-1-7-1-9Z"
            fill="url(#hairGloss)"
          />
          <path
            d="M170 171c12-10 26-16 42-17 15 0 29 3 40 10 16-10 34-14 51-11 18 3 32 12 43 25-8-28-20-52-38-67-21-18-47-24-74-19-56 9-93 57-101 112 9-13 22-24 37-33Z"
            fill="url(#hairGloss)"
            opacity="0.98"
          />
          <path
            d="M193 285c12 8 26 12 40 12 16 0 31-5 43-13-7 25-23 45-43 47-21 2-35-15-40-46Z"
            fill="${skin}"
            opacity="0.9"
          />
          <path
            d="M162 181c13-11 28-14 44-10 14 3 25 2 41-5 17-7 34-6 51 8"
            fill="none"
            stroke="${hair}"
            stroke-width="9"
            stroke-linecap="round"
          />
          <path
            d="M166 212c8-12 18-18 31-18 12 0 23 6 32 17-9 5-20 8-31 8-13 0-23-2-32-7Z"
            fill="#f6eee8"
            opacity="0.95"
          />
          <path
            d="M233 211c9-12 19-18 32-18 12 0 23 6 33 17-10 6-21 8-33 8-12 0-23-2-32-7Z"
            fill="#f6eee8"
            opacity="0.95"
          />
          <ellipse class="muse-eye" cx="187" cy="210" rx="7" ry="8" fill="${hair}" />
          <ellipse class="muse-eye" cx="255" cy="209" rx="7" ry="8" fill="${hair}" />
          <circle cx="190" cy="207" r="1.6" fill="#ffffff" opacity="0.85" />
          <circle cx="258" cy="206" r="1.6" fill="#ffffff" opacity="0.85" />
          <path
            d="M214 203c4 14 3 25-3 39 7 4 14 5 22 4"
            fill="none"
            stroke="${shadow}"
            stroke-opacity="0.28"
            stroke-width="3.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M195 253c12 5 24 8 38 8 16 0 30-3 42-10"
            fill="none"
            stroke="${shadow}"
            stroke-opacity="0.2"
            stroke-width="3"
            stroke-linecap="round"
          />
          <ellipse
            class="muse-mouth"
            cx="220"
            cy="258"
            rx="22"
            ry="7"
            fill="url(#lipColor)"
            opacity="0.94"
          />
          <path
            d="M183 244c8 7 17 11 28 13"
            fill="none"
            stroke="${accent}"
            stroke-opacity="0.24"
            stroke-width="6"
            stroke-linecap="round"
          />
        </g>
      </g>
      <ellipse cx="125" cy="216" rx="7" ry="12" fill="${accent}" opacity="0.82" />
      <ellipse cx="315" cy="216" rx="7" ry="12" fill="${accent}" opacity="0.82" />
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

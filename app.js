const CHARACTER_NAMES = [
  "DUKE",
  "ASSASSIN",
  "CAPTAIN",
  "AMBASSADOR",
  "CONTESSA",
  "INQUISITOR",
  "BUREAUCRAT",
  "SPECULATOR",
  "JESTER",
  "SOCIALIST",
];

const CHARACTER_TRANSLATIONS_ZHTW = {
  DUKE: "公爵",
  ASSASSIN: "刺客",
  CAPTAIN: "隊長",
  AMBASSADOR: "大使",
  CONTESSA: "伯爵夫人",
  INQUISITOR: "審判官",
  BUREAUCRAT: "官僚",
  SPECULATOR: "投機者",
  JESTER: "小丑",
  SOCIALIST: "社會主義者",
};

const VOCAB_TRANSLATIONS_ZHTW = {
  accept: "接受",
  accumulate: "累積",
  accumulated: "已累積的",
  accuracy: "準確性",
  accusation: "指控",
  accuse: "指控",
  adapt: "適應",
  additional: "額外的",
  adjustment: "調整",
  advantage: "優勢",
  agreement: "協議",
  allow: "允許",
  alternative: "替代方案",
  anticipate: "預期",
  apparently: "顯然",
  application: "申請",
  appreciate: "感激",
  appropriate: "適當的",
  approval: "批准",
  arrangement: "安排",
  assistance: "協助",
  assumption: "假設",
  "at a cost": "付出代價",
  "at someone’s expense": "以某人為代價",
  attempt: "嘗試",
  "attract attention": "引起注意",
  authority: "權威",
  authorization: "授權",
  benefit: "受益",
  bluff: "虛張聲勢",
  "calculated risk": "經過盤算的風險",
  campaign: "行動計畫",
  candidate: "候選人",
  challenge: "質疑",
  chaos: "混亂",
  claim: "宣稱",
  collapse: "崩潰",
  "come to an end": "結束",
  community: "社群",
  competition: "競爭",
  conclusion: "結論",
  confidence: "自信",
  contribute: "貢獻",
  contribution: "貢獻",
  convenient: "方便的",
  convince: "說服",
  convincing: "有說服力的",
  cooperation: "合作",
  costly: "代價高昂的",
  credibility: "可信度",
  currently: "目前",
  "deal with": "處理",
  deception: "欺騙",
  decisive: "果斷的",
  defense: "防禦",
  deny: "否決",
  determine: "查明",
  diplomacy: "外交",
  disorder: "失序",
  distribute: "分配",
  distribution: "分配",
  doubt: "懷疑",
  eliminate: "淘汰",
  equality: "平等",
  equally: "平等地",
  evidence: "證據",
  examine: "檢查",
  expect: "預期",
  exploitation: "剝削",
  expose: "揭露",
  fail: "失敗",
  "fair share": "公平份額",
  fairly: "公平地",
  fairness: "公平",
  financial: "財務的",
  "for now": "暫時",
  fortunate: "幸運的",
  fortune: "財富",
  "gather evidence": "蒐集證據",
  genuine: "真實的",
  "give someone the benefit of the doubt": "姑且相信某人",
  "go according to plan": "照計畫進行",
  greed: "貪婪",
  "have no choice": "別無選擇",
  hostile: "敵對的",
  identity: "身分",
  imbalance: "不平衡",
  improve: "改善",
  income: "收入",
  incorrect: "不正確的",
  increase: "增加",
  individual: "個人的",
  influence: "影響力",
  inspection: "檢查",
  intention: "意圖",
  interfere: "干涉",
  investigate: "調查",
  investment: "投資",
  judge: "判斷",
  justify: "證明合理",
  "let it go": "算了",
  liability: "負擔",
  limit: "限制",
  limited: "有限的",
  maintain: "維持",
  "make a difference": "產生影響",
  "makes a difference": "產生影響",
  miscalculate: "計算錯誤",
  misjudge: "誤判",
  modest: "適度的",
  negotiate: "協商",
  object: "反對",
  objection: "反對",
  "one too many": "太多一次",
  opportunity: "機會",
  option: "選項",
  "outside help": "外部協助",
  participation: "參與",
  "pay off": "有回報",
  "pay the price": "付出代價",
  position: "位置",
  potential: "潛在的",
  powerful: "強大的",
  predictable: "可預測的",
  prevent: "阻止",
  proceed: "繼續",
  proof: "證明",
  proposal: "提議",
  prosperity: "繁榮",
  protection: "保護",
  purpose: "目的",
  qualified: "有資格的",
  questionable: "可疑的",
  rearrange: "重新排列",
  reckless: "魯莽的",
  reconsider: "重新考慮",
  recover: "恢復",
  redistribute: "重新分配",
  reduce: "降低",
  regret: "後悔",
  regulation: "規定",
  reject: "拒絕",
  relationship: "關係",
  "rely on": "依靠",
  request: "請求",
  requirement: "要求",
  resource: "資源",
  resources: "資源",
  return: "回報",
  reveal: "揭露",
  reward: "獎勵",
  risk: "風險",
  risky: "有風險的",
  secure: "穩固的；取得",
  "see through someone": "看穿某人",
  seek: "尋求",
  seize: "抓住",
  setback: "挫折",
  "settle an argument": "解決爭論",
  significantly: "顯著地",
  situation: "情況",
  society: "社會",
  "stand corrected": "承認錯誤",
  status: "身分地位",
  "stay out of something": "不介入某事",
  strategic: "策略性的",
  strategy: "策略",
  strengthen: "加強",
  suit: "適合",
  suitable: "合適的",
  support: "支持",
  survive: "生存",
  suspicion: "懷疑",
  suspicious: "可疑的",
  "take a risk": "冒險",
  "take action": "採取行動",
  "take advantage of": "利用",
  "take one’s chances": "碰運氣",
  "take the risk": "承擔風險",
  takeover: "接管",
  target: "目標",
  threat: "威脅",
  tolerate: "容忍",
  trust: "信任",
  unacceptable: "不可接受的",
  uncertainty: "不確定性",
  underestimate: "低估",
  "worth a try": "值得一試",
};

const VOCAB_FORM_VARIANTS = {
  accumulate: ["accumulated"],
  accumulated: ["accumulate"],
  accusation: ["accuse", "accused"],
  accuse: ["accusation", "accused"],
  approval: ["approve"],
  assumption: ["assume", "assumed"],
  authorization: ["authorize", "authorized"],
  benefit: ["benefits"],
  bluff: ["bluffing"],
  challenge: ["challenged", "challenges", "challenging"],
  claim: ["claimed", "claiming"],
  convince: ["convinced", "convincing"],
  convincing: ["convince", "convinced"],
  decisive: ["decision"],
  deny: ["denied"],
  doubt: ["doubts"],
  eliminate: ["eliminated"],
  expose: ["exposed"],
  fail: ["failed"],
  "gather evidence": ["gather more evidence", "gathered evidence"],
  "go according to plan": ["according to plan"],
  "have no choice": ["no choice"],
  investigate: ["investigation"],
  judge: ["judged"],
  justify: ["justified"],
  "make a difference": ["makes a difference"],
  "makes a difference": ["make a difference"],
  miscalculate: ["miscalculated"],
  misjudge: ["misjudged"],
  opportunity: ["opportunities"],
  "pay off": ["pays off", "paid off"],
  "pay the price": ["paid the price"],
  prevent: ["preventing"],
  proof: ["prove"],
  question: ["questioning"],
  questionable: ["question", "questioning"],
  reject: ["rejected"],
  request: ["requesting", "requested", "requests"],
  resource: ["resources"],
  resources: ["resource"],
  reveal: ["revealed"],
  risk: ["risks"],
  "see through someone": ["saw right through me", "see through me"],
  "settle an argument": ["settles the argument"],
  suspicion: ["suspicious"],
  suspicious: ["suspicion"],
  "take a risk": ["take the risk", "took the risk"],
  "take action": ["taking action"],
  "take advantage of": ["take advantage", "taking advantage"],
  "take one’s chances": ["take my chances", "take your chances", "take one's chances"],
  "take the risk": ["take a risk", "took the risk"],
  underestimate: ["underestimated"],
};

const GLOBAL_TARGET_VOCAB = [
  "makes a difference",
  "resources",
  "request",
  "situation",
  "influence",
  "accumulated",
  "regret",
  "secure",
  "fortune",
];

const UNIVERSAL_CHARACTER_CATEGORIES = [
  "SUCCESSFULLY DEFENDING A CHALLENGE",
  "BEING CAUGHT BLUFFING",
  "REVEALING A CARD AFTER A SUCCESSFUL CHALLENGE DEFENSE",
  "DRAWING A REPLACEMENT CARD",
];

const MY_TURN_GENERAL = [
  { label: "Income", source: "INCOME — TAKE 1 COIN" },
  { label: "Foreign support", source: "FOREIGN AID — TAKE 2 COINS" },
  { label: "Coup", source: "COUP — PAY 7 COINS", extras: ["DECLARING A TARGET", "ELIMINATING ANOTHER PLAYER"] },
  { label: "Forced coup", source: "FORCED COUP — PLAYER HAS 10 OR MORE COINS", extras: ["DECLARING A TARGET", "ELIMINATING ANOTHER PLAYER"] },
];

const NOT_MY_TURN = [
  "ACCEPTING AN ACTION",
  "DECIDING NOT TO CHALLENGE",
  "LOSING A CHALLENGE",
  "LOSING AN INFLUENCE",
  "BEING ELIMINATED",
];

const GENERAL_SECTION_TITLES = [
  ...MY_TURN_GENERAL.flatMap((action) => [action.source, ...(action.extras || [])]),
  ...NOT_MY_TURN,
  "CHALLENGING ANY CLAIM",
  ...UNIVERSAL_CHARACTER_CATEGORIES,
  "LOSING A CHALLENGE",
  "LOSING AN INFLUENCE",
  "BEING CAUGHT BLUFFING",
];

const TARGET_REQUIRED = {
  ASSASSIN: true,
  CAPTAIN: true,
  INQUISITOR: true,
  JESTER: true,
  SOCIALIST: true,
};

const ELIMINATES_PLAYER = {
  ASSASSIN: true,
};

const state = {
  data: null,
  route: "home",
  testMode: localStorage.getItem("coup-test-mode") === "true",
  showChineseNames: localStorage.getItem("coup-show-chinese-names") !== "false",
  showVocabTranslations: localStorage.getItem("coup-show-vocab-translations") !== "false",
  linePools: loadLinePools(),
};

const app = document.querySelector("#app");
const backButton = document.querySelector(".back-button");
const settingsButton = document.querySelector(".settings-button");
const settingsModal = document.querySelector("#settings-modal");
const testModeInput = document.querySelector("#test-mode");
const modal = document.querySelector("#line-modal");
const modalTitle = document.querySelector("#modal-title");
const modalKicker = document.querySelector("#modal-kicker");
const modalContent = document.querySelector("#modal-content");
const showChineseInput = document.querySelector("#show-chinese");
const showVocabTranslationInput = document.querySelector("#show-vocab-translation");

init();

async function init() {
  testModeInput.checked = state.testMode;
  showChineseInput.checked = state.showChineseNames;
  showVocabTranslationInput.checked = state.showVocabTranslations;
  bindShellEvents();

  try {
    const response = await fetch("voice lines.txt");
    if (!response.ok) throw new Error("Could not load voice lines.txt");
    state.data = parseVoiceLines(await response.text());
    render();
  } catch (error) {
    app.innerHTML = `<div class="empty-state">Voice lines could not be loaded. Start the local server and refresh this page.</div>`;
  }
}

function bindShellEvents() {
  backButton.addEventListener("click", () => {
    state.route = "home";
    render();
  });

  settingsButton.addEventListener("click", () => settingsModal.showModal());
  document.querySelector(".close-settings").addEventListener("click", () => settingsModal.close());
  document.querySelector(".close-modal").addEventListener("click", () => modal.close());

  testModeInput.addEventListener("change", () => {
    state.testMode = testModeInput.checked;
    localStorage.setItem("coup-test-mode", String(state.testMode));
    if (modal.open) redrawOpenModal();
  });

  showChineseInput.addEventListener("change", () => {
    state.showChineseNames = showChineseInput.checked;
    localStorage.setItem("coup-show-chinese-names", String(state.showChineseNames));
    render();
  });

  showVocabTranslationInput.addEventListener("change", () => {
    state.showVocabTranslations = showVocabTranslationInput.checked;
    localStorage.setItem("coup-show-vocab-translations", String(state.showVocabTranslations));
    if (modal.open) redrawOpenModal();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });

  settingsModal.addEventListener("click", (event) => {
    if (event.target === settingsModal) settingsModal.close();
  });
}

function render() {
  backButton.classList.toggle("hidden", state.route === "home");

  if (state.route === "home") {
    app.innerHTML = `
      <section class="home-grid" aria-label="Choose your gameplay state">
        <button class="big-choice" type="button" data-route="my-turn">
          <strong>My turn</strong>
          <span>Choose an action or character claim.</span>
        </button>
        <button class="big-choice" type="button" data-route="not-my-turn">
          <strong>Not<br>my turn</strong>
          <span>Respond, block, challenge, or lose influence.</span>
        </button>
      </section>
    `;

    app.querySelectorAll("[data-route]").forEach((button) => {
      button.addEventListener("click", () => {
        state.route = button.dataset.route;
        render();
      });
    });
    return;
  }

  if (state.route === "my-turn") renderMyTurn();
  if (state.route === "not-my-turn") renderNotMyTurn();
}

function renderMyTurn() {
  app.innerHTML = `
    <section class="menu-grid" aria-label="My turn options">
      <details class="menu-card">
        <summary>General actions</summary>
        <div class="chip-grid">
          ${MY_TURN_GENERAL.map((action, index) => actionButton(action.label, `general-${index}`)).join("")}
        </div>
      </details>
      <details class="menu-card">
        <summary>Character actions</summary>
        <div class="chip-grid">
          ${CHARACTER_NAMES.map((name, index) => actionButton(characterDisplayName(name), `character-${index}`, characterSubline(name))).join("")}
        </div>
      </details>
    </section>
  `;

  MY_TURN_GENERAL.forEach((action, index) => {
    const button = app.querySelector(`[data-open="general-${index}"]`);
    button.addEventListener("click", () => openGeneralAction(action));
  });

  CHARACTER_NAMES.forEach((name, index) => {
    const button = app.querySelector(`[data-open="character-${index}"]`);
    button.addEventListener("click", () => openCharacter(name));
  });
}

function renderNotMyTurn() {
  const blockers = getBlockingCharacters();
  const challengers = getClaimChallengeCharacters();

  app.innerHTML = `
    <section class="menu-grid" aria-label="Not my turn options">
      <details class="menu-card">
        <summary>Blocking an action</summary>
        <div class="chip-grid">
          ${actionButton("General block", "block-general", "Use when no character-specific block fits.")}
          ${blockers.map((blocker, index) => actionButton(characterDisplayName(blocker.name), `block-${index}`, blocker.categories.map((category) => toSentence(category.title)).join(" / "))).join("")}
        </div>
      </details>
      <details class="menu-card">
        <summary>Challenge a claim</summary>
        <div class="chip-grid">
          ${actionButton("General challenge", "challenge-general", "Use when no character-specific challenge fits.")}
          ${challengers.map((challenger, index) => actionButton(characterDisplayName(challenger.name), `challenge-${index}`, challenger.categories.map((category) => toSentence(category.title)).join(" / "))).join("")}
        </div>
      </details>
      <div class="chip-grid">
        ${NOT_MY_TURN.map((name) => actionButton(toSentence(name), name)).join("")}
      </div>
    </section>
  `;

  app.querySelector(`[data-open="block-general"]`).addEventListener("click", () => {
    openLineModal("General block", "Blocking an action", [state.data.general["BLOCKING AN ACTION"]].filter(Boolean));
  });

  blockers.forEach((blocker, index) => {
    app.querySelector(`[data-open="block-${index}"]`).addEventListener("click", () => {
      openLineModal(characterDisplayName(blocker.name), "Blocking an action", blocker.categories);
    });
  });

  app.querySelector(`[data-open="challenge-general"]`).addEventListener("click", () => {
    openLineModal("Challenge a claim", "Not my turn", [state.data.general["CHALLENGING ANY CLAIM"]].filter(Boolean));
  });

  challengers.forEach((challenger, index) => {
    app.querySelector(`[data-open="challenge-${index}"]`).addEventListener("click", () => {
      openLineModal(characterDisplayName(challenger.name), "Challenge a claim", challenger.categories);
    });
  });

  NOT_MY_TURN.forEach((name) => {
    app.querySelector(`[data-open="${name}"]`).addEventListener("click", () => {
      openLineModal(toSentence(name), "Not my turn", [state.data.general[name]].filter(Boolean));
    });
  });
}

function actionButton(label, key, subline = "") {
  return `
    <button class="action-chip" type="button" data-open="${escapeHtml(key)}">
      ${escapeHtml(label)}
      ${subline ? `<small>${escapeHtml(subline)}</small>` : ""}
    </button>
  `;
}

function openGeneralAction(action) {
  const groups = [state.data.general[action.source]];
  if (action.extras) groups.push(...action.extras.map((name) => state.data.general[name]));
  openLineModal(action.label, "My turn", groups.filter(Boolean));
}

function openCharacter(name) {
  const character = state.data.characters[name];
  const groups = character.categories.filter((category) => !isBlockCategory(category) && !isClaimChallengeCategory(category));

  if (TARGET_REQUIRED[name]) groups.push(state.data.general["DECLARING A TARGET"]);
  if (ELIMINATES_PLAYER[name]) groups.push(state.data.general["ELIMINATING ANOTHER PLAYER"]);

  UNIVERSAL_CHARACTER_CATEGORIES.forEach((category) => {
    groups.push(state.data.general[category]);
  });

  openLineModal(characterDisplayName(name), "Character actions", groups.filter(Boolean));
}

function getBlockingCharacters() {
  return CHARACTER_NAMES
    .map((name) => ({
      name,
      categories: (state.data.characters[name]?.categories || []).filter(isBlockCategory),
    }))
    .filter((character) => character.categories.length);
}

function getClaimChallengeCharacters() {
  return CHARACTER_NAMES
    .map((name) => ({
      name,
      categories: (state.data.characters[name]?.categories || []).filter(isClaimChallengeCategory),
    }))
    .filter((character) => character.categories.length);
}

function openLineModal(title, kicker, groups) {
  modal.dataset.currentTitle = title;
  modal.dataset.currentKicker = kicker;
  modal.dataset.currentGroups = JSON.stringify(groups);
  modalTitle.textContent = title;
  modalKicker.textContent = kicker;
  const shouldOpenOnlyGroup = groups.length === 1;
  modalContent.innerHTML = groups.length
    ? groups.map((group) => renderLineGroup(group, shouldOpenOnlyGroup)).join("")
    : `<div class="empty-state">No voice lines found for this option.</div>`;
  modal.showModal();
}

function redrawOpenModal() {
  const groups = JSON.parse(modal.dataset.currentGroups || "[]");
  const shouldOpenOnlyGroup = groups.length === 1;
  modalContent.innerHTML = groups.map((group) => renderLineGroup(group, shouldOpenOnlyGroup)).join("");
}

function renderLineGroup(group, open) {
  const visibleLines = state.testMode ? [drawLineFromPool(group)] : group.lines;
  const relevantVocabulary = getRelevantVocabulary(visibleLines, mergeVocabulary(group.vocabulary, GLOBAL_TARGET_VOCAB));
  const lines = visibleLines.map((line) => `<p class="voice-line">${highlightVocabulary(line, relevantVocabulary)}</p>`).join("");
  const vocab = state.testMode
    ? ""
    : relevantVocabulary.map((word) => `<span class="vocab-chip">${escapeHtml(displayVocab(word, word, visibleLines.join(" ")))}</span>`).join("");

  return `
    <details class="line-group" ${open ? "open" : ""}>
      <summary>${escapeHtml(toSentence(group.title))}</summary>
      <div class="line-list">${lines}</div>
      ${vocab ? `<div class="vocab-list" aria-label="Useful vocabulary">${vocab}</div>` : ""}
    </details>
  `;
}

function drawLineFromPool(group) {
  if (group.lines.length <= 1) return group.lines[0] || "";

  const key = poolKey(group);
  if (!state.linePools[key] || state.linePools[key].length === 0) {
    state.linePools[key] = group.lines.map((_, index) => index);
  }

  let pool = state.linePools[key].filter((index) => Number.isInteger(index) && index >= 0 && index < group.lines.length);
  if (!pool.length) pool = group.lines.map((_, index) => index);
  state.linePools[key] = pool;
  const poolPosition = Math.floor(Math.random() * pool.length);
  const [lineIndex] = pool.splice(poolPosition, 1);
  saveLinePools();
  return group.lines[lineIndex];
}

function poolKey(group) {
  return `${group.title}::${group.lines.join("||")}`;
}

function loadLinePools() {
  try {
    return JSON.parse(localStorage.getItem("coup-line-pools") || "{}");
  } catch {
    return {};
  }
}

function saveLinePools() {
  localStorage.setItem("coup-line-pools", JSON.stringify(state.linePools));
}

function parseVoiceLines(text) {
  const lines = text.replace(/\r/g, "").split("\n").map((line) => line.trim());
  const general = {};
  const characters = {};

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (!line || isDivider(line)) {
      i += 1;
      continue;
    }

    if (CHARACTER_NAMES.includes(line)) {
      const parsed = parseCharacter(lines, i);
      characters[line] = parsed.character;
      i = parsed.next;
      continue;
    }

    if (looksLikeSectionTitle(lines, i)) {
      const parsed = parseGeneralSection(lines, i);
      general[parsed.section.title] = parsed.section;
      i = parsed.next;
      continue;
    }

    i += 1;
  }

  return { general, characters };
}

function parseGeneralSection(lines, start) {
  const title = lines[start];
  let i = start + 1;
  if (isDivider(lines[i])) i += 1;

  const body = [];
  while (i < lines.length && !isDivider(lines[i]) && !CHARACTER_NAMES.includes(lines[i])) {
    if (lines[i]) body.push(lines[i]);
    i += 1;
  }

  return {
    section: sectionFromBody(title, body),
    next: i,
  };
}

function parseCharacter(lines, start) {
  const name = lines[start];
  let i = start + 1;
  const categories = [];
  let current = null;

  while (i < lines.length) {
    const line = lines[i];
    if (isDivider(line)) break;
    if (!line) {
      i += 1;
      continue;
    }

    if (line === "USEFUL VOCABULARY") {
      const vocabulary = [];
      i += 1;
      while (i < lines.length && !lines[i]) {
        i += 1;
      }
      while (i < lines.length && lines[i] && !isDivider(lines[i])) {
        vocabulary.push(lines[i]);
        i += 1;
      }
      categories.forEach((category) => {
        category.vocabulary = vocabulary;
      });
      continue;
    }

    if (isCharacterSubheading(line)) {
      current = { title: line, lines: [], vocabulary: [] };
      categories.push(current);
    } else if (current && isVoiceLine(line)) {
      current.lines.push(stripQuotes(line));
    }

    i += 1;
  }

  return {
    character: { name, categories: categories.filter((category) => category.lines.length) },
    next: i,
  };
}

function sectionFromBody(title, body) {
  const usefulIndex = body.indexOf("USEFUL VOCABULARY");
  const linePart = usefulIndex >= 0 ? body.slice(0, usefulIndex) : body;
  const vocabulary = usefulIndex >= 0 ? body.slice(usefulIndex + 1) : [];

  return {
    title,
    lines: linePart.filter(isVoiceLine).map(stripQuotes),
    vocabulary,
  };
}

function looksLikeSectionTitle(lines, index) {
  if (!lines[index]) return false;
  if (lines[index] === "USEFUL VOCABULARY") return false;
  if (lines[index] === "GENERAL PLAYER ACTIONS") return false;
  return GENERAL_SECTION_TITLES.includes(lines[index]) || isDivider(lines[index + 1]) || lines[index].startsWith("GENERAL ");
}

function isCharacterSubheading(line) {
  return line.includes(":") || line.startsWith("WHEN ") || line.startsWith("CHALLENGING ");
}

function isBlockCategory(category) {
  return category.title.startsWith("BLOCK:");
}

function isClaimChallengeCategory(category) {
  return category.title.startsWith("CHALLENGING SOMEONE CLAIMING ");
}

function isDivider(line) {
  return /^=+$/.test(line);
}

function isVoiceLine(line) {
  return line.startsWith("\u201c") || line.startsWith('"');
}

function stripQuotes(line) {
  return line.replace(/^[\u201c"]|[\u201d"]$/g, "");
}

function highlightVocabulary(line, vocabulary) {
  if (!vocabulary.length) return escapeHtml(line);

  const matches = [];
  vocabulary.forEach((word) => {
    vocabularyPatterns(word).forEach((patternText) => {
      const pattern = termPattern(patternText);
      for (const match of line.matchAll(pattern)) {
        const text = match[1];
        const start = match.index + match[0].indexOf(text);
        matches.push({ start, end: start + text.length, word, text });
      }
    });
  });

  const selectedMatches = selectNonOverlappingMatches(matches);
  if (!selectedMatches.length) return escapeHtml(line);

  let html = "";
  let cursor = 0;
  selectedMatches.forEach((match) => {
    html += escapeHtml(line.slice(cursor, match.start));
    html += `<span class="vocab">${escapeHtml(displayVocab(match.text, match.word, line))}</span>`;
    cursor = match.end;
  });
  html += escapeHtml(line.slice(cursor));
  return html;
}

function getRelevantVocabulary(lines, vocabulary) {
  return vocabulary.filter((word) => {
    return lines.some((line) => vocabularyPatterns(word).some((patternText) => termPattern(patternText).test(line)));
  });
}

function mergeVocabulary(...groups) {
  const seen = new Set();
  return groups.flat().filter((word) => {
    const key = normalizeVocabKey(word);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function vocabularyPatterns(word) {
  const normalized = normalizeVocabKey(word);
  return [word, ...(VOCAB_FORM_VARIANTS[normalized] || [])];
}

function termPattern(term) {
  const escaped = escapeRegExp(term).replace(/\\ /g, "\\s+");
  return new RegExp(`(?:^|[^A-Za-z])(${escaped})(?=$|[^A-Za-z])`, "gi");
}

function selectNonOverlappingMatches(matches) {
  return matches
    .sort((a, b) => (b.end - b.start) - (a.end - a.start) || a.start - b.start)
    .reduce((selected, match) => {
      if (!selected.some((item) => match.start < item.end && match.end > item.start)) {
        selected.push(match);
      }
      return selected;
    }, [])
    .sort((a, b) => a.start - b.start);
}

function displayVocab(word, sourceWord = word, context = "") {
  const visibleWord = state.testMode
    ? word.replace(/[A-Za-z][A-Za-z'’]*/g, (token) => token[0] + "_".repeat(Math.max(1, token.length - 1)))
    : word;
  const translation = vocabTranslation(sourceWord, context);
  return state.showVocabTranslations && translation ? `${visibleWord} (${translation})` : visibleWord;
}

function vocabTranslation(word, context = "") {
  const normalized = normalizeVocabKey(word);
  if (normalized === "secure") {
    return /\bmore\s+secure\b|\bsecure\s+than\b/i.test(context) ? "穩固的" : "取得；確保";
  }
  return VOCAB_TRANSLATIONS_ZHTW[normalized];
}

function normalizeVocabKey(word) {
  return word.toLowerCase().replace(/'/g, "’");
}

function characterSubline(name) {
  const character = state.data.characters[name];
  if (!character) return "";
  return character.categories
    .filter((category) => !isBlockCategory(category) && !isClaimChallengeCategory(category))
    .map((category) => toSentence(category.title))
    .slice(0, 2)
    .join(" / ");
}

function characterDisplayName(name) {
  const englishName = toTitle(name);
  const chineseName = CHARACTER_TRANSLATIONS_ZHTW[name];
  return state.showChineseNames && chineseName ? `${englishName} (${chineseName})` : englishName;
}

function toTitle(text) {
  return text.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function toSentence(text) {
  return text
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\bA\b/g, "a")
    .replace(/\bAn\b/g, "an")
    .replace(/\bThe\b/g, "the")
    .replace(/\bOr\b/g, "or")
    .replace(/\bAfter\b/g, "after")
    .replace(/\bOf\b/g, "of");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return map[char];
  });
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

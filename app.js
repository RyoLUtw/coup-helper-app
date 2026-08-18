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
  { label: "Coup", source: "COUP — PAY 7 COINS", extras: ["DECLARING A TARGET"], eliminatesTarget: true },
  { label: "Forced coup", source: "FORCED COUP — PLAYER HAS 10 OR MORE COINS", extras: ["DECLARING A TARGET"], eliminatesTarget: true },
];

const NOT_MY_TURN = [
  "ACCEPTING AN ACTION",
  "ACCEPTING WITHOUT A CHOICE",
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

const MIN_SHARED_PLAYERS = 2;
const MAX_SHARED_PLAYERS = 10;
const CHALLENGE_DEFENSE_PREFIX = "WHEN SOMEONE CHALLENGES THE ";
const CHARACTER_ACTION_PREFIX = "ACTION:";
const VOICE_LAYER_STORAGE_KEY = "coup-voice-line-layers-v2";
const VOICE_LINE_LAYERS = [
  {
    id: "common-actions",
    label: "Common actions",
    description: "Income, Foreign Aid, Coup, and Forced Coup.",
  },
  {
    id: "character-actions",
    label: "Character actions",
    description: "Character turn actions such as Tax, Assassinate, Steal, and Exchange.",
  },
  {
    id: "target-declaration",
    label: "Target declaration",
    description: "Lines for naming the target of a targeted action.",
  },
  {
    id: "normal-accept",
    label: "Normal accept / pass",
    description: "Voluntary accept and deciding not to challenge.",
  },
  {
    id: "forced-accept",
    label: "Forced accept",
    description: "Accepting without a legal response.",
  },
  {
    id: "initiate-challenge",
    label: "Initiate challenge",
    description: "Starting a challenge against a claim or block.",
  },
  {
    id: "resolve-challenge",
    label: "Resolve challenge",
    description: "Proving, failing, revealing, and replacing after a challenge.",
  },
  {
    id: "initiate-block",
    label: "Initiate block",
    description: "Blocking Foreign Aid, Steal, Disorder, or Assassination.",
  },
  {
    id: "resolve-block",
    label: "Resolve block",
    description: "Accepting a block or moving into a block challenge.",
  },
  {
    id: "influence-loss",
    label: "Influence loss / elimination",
    description: "Losing influence, losing a challenge, and being eliminated.",
  },
  {
    id: "successful-elimination",
    label: "Successful elimination",
    description: "Lines for the player who eliminated someone.",
  },
  {
    id: "action-follow-up",
    label: "Action follow-up result",
    description: "Secondary action results like giving a coin or redistributing.",
  },
];
const COMMON_ACTION_TITLES = new Set(MY_TURN_GENERAL.map((action) => action.source));
const VOICE_LINE_LAYER_IDS = VOICE_LINE_LAYERS.map((layer) => layer.id);
const DEFAULT_VISIBLE_VOICE_LAYER_IDS = new Set(["common-actions", "character-actions"]);

const state = {
  data: null,
  route: "home",
  testMode: localStorage.getItem("coup-test-mode") === "true",
  showChineseNames: localStorage.getItem("coup-show-chinese-names") !== "false",
  showVocabTranslations: localStorage.getItem("coup-show-vocab-translations") !== "false",
  visibleVoiceLayers: loadVisibleVoiceLayers(),
  linePools: loadLinePools(),
  shared: createSharedState(),
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
const voiceLayerOptions = document.querySelector("#voice-layer-options");
const sharedSetupModal = document.querySelector("#shared-setup-modal");
const sharedSetupContent = document.querySelector("#shared-setup-content");

init();

async function init() {
  testModeInput.checked = state.testMode;
  showChineseInput.checked = state.showChineseNames;
  showVocabTranslationInput.checked = state.showVocabTranslations;
  renderVoiceLayerSettings();
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
    state.route = ["my-turn", "not-my-turn"].includes(state.route) ? "own-device" : "home";
    render();
  });

  settingsButton.addEventListener("click", () => settingsModal.showModal());
  document.querySelector(".close-settings").addEventListener("click", () => settingsModal.close());
  document.querySelector(".close-modal").addEventListener("click", () => modal.close());
  document.querySelector(".close-shared-setup").addEventListener("click", () => sharedSetupModal.close());

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

  voiceLayerOptions.addEventListener("change", (event) => {
    const input = event.target.closest("[data-voice-layer]");
    if (!input) return;
    state.visibleVoiceLayers[input.dataset.voiceLayer] = input.checked;
    saveVisibleVoiceLayers();
    if (modal.open) redrawOpenModal();
  });

  settingsModal.addEventListener("click", (event) => {
    const button = event.target.closest("[data-voice-layer-select]");
    if (!button) return;
    setAllVoiceLayersVisible(button.dataset.voiceLayerSelect === "all");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });

  settingsModal.addEventListener("click", (event) => {
    if (event.target === settingsModal) settingsModal.close();
  });

  sharedSetupModal.addEventListener("click", (event) => {
    if (event.target === sharedSetupModal) sharedSetupModal.close();
  });
}

function renderVoiceLayerSettings() {
  voiceLayerOptions.innerHTML = VOICE_LINE_LAYERS.map((layer) => `
    <label class="layer-toggle">
      <span>
        <strong>${escapeHtml(layer.label)}</strong>
        <small>${escapeHtml(layer.description)}</small>
      </span>
      <input type="checkbox" role="switch" data-voice-layer="${escapeHtml(layer.id)}" ${isVoiceLayerVisible(layer.id) ? "checked" : ""}>
    </label>
  `).join("");
}

function setAllVoiceLayersVisible(visible) {
  VOICE_LINE_LAYER_IDS.forEach((id) => {
    state.visibleVoiceLayers[id] = visible;
  });
  voiceLayerOptions.querySelectorAll("[data-voice-layer]").forEach((input) => {
    input.checked = visible;
  });
  saveVisibleVoiceLayers();
  if (modal.open) redrawOpenModal();
}

function render() {
  backButton.classList.toggle("hidden", state.route === "home");

  if (state.route === "home") {
    app.innerHTML = `
      <section class="home-grid" aria-label="Choose device mode">
        <button class="big-choice" type="button" data-route="own-device">
          <strong>My Own Device</strong>
          <span>Practice from your own turn state.</span>
        </button>
        <button class="big-choice" type="button" data-open-shared-setup>
          <strong>Shared Device</strong>
          <span>Pass one device around the table.</span>
        </button>
      </section>
    `;

    app.querySelectorAll("[data-route]").forEach((button) => {
      button.addEventListener("click", () => {
        state.route = button.dataset.route;
        render();
      });
    });
    app.querySelector("[data-open-shared-setup]").addEventListener("click", openSharedSetupModal);
    return;
  }

  if (state.route === "own-device") renderOwnDeviceHome();
  if (state.route === "my-turn") renderMyTurn();
  if (state.route === "not-my-turn") renderNotMyTurn();
  if (state.route === "shared-device") renderSharedDevice();
}

function renderOwnDeviceHome() {
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

function renderSharedDevice() {
  const shared = state.shared;
  const winner = getSharedWinner();
  if (winner) {
    renderSharedWinner(winner);
    return;
  }

  if (shared.players[shared.currentPlayerIndex]?.eliminated) {
    startNextSharedTurn();
    return;
  }

  const currentPlayer = shared.players[shared.currentPlayerIndex];

  if (!currentPlayer) {
    state.route = "home";
    render();
    return;
  }

  if (shared.phase === "turn-action") {
    app.innerHTML = `
      <section class="shared-status">
        <p class="eyebrow">Shared Device</p>
        <h2>${escapeHtml(currentPlayer.name)}'s turn</h2>
        <p>Choose the action to practice.</p>
      </section>
      ${renderSharedActionPicker()}
    `;
    bindSharedActionButtons();
    return;
  }

  if (shared.phase === "reaction") {
    const responder = shared.players[shared.reactionOrder[shared.reactionIndex]];
    const options = getReactionOptions(shared.action, responder);
    if (isAcceptOnlyReaction(options)) {
      presentSharedReactionOrAutoAccept();
      return;
    }
    app.innerHTML = `
      <section class="shared-status">
        <p class="eyebrow">Reaction</p>
        <h2>${escapeHtml(responder.name)} responds to ${escapeHtml(currentPlayer.name)}</h2>
        <p>${escapeHtml(getSharedActionSummary())}</p>
      </section>
      <section class="reaction-panel" aria-label="Possible reactions">
        ${options.map((option) => actionButton(option.label, option.id, option.subline || "")).join("")}
      </section>
    `;
    options.forEach((option) => {
      app.querySelector(`[data-open="${option.id}"]`).addEventListener("click", () => handleSharedReaction(option, responder));
    });
  }
}

function renderSharedWinner(winner) {
  app.innerHTML = `
    <section class="shared-status winner-panel">
      <p class="eyebrow">Winner</p>
      <h2>${escapeHtml(winner.name)} wins</h2>
      <p>All other players have been eliminated.</p>
    </section>
    <section class="reaction-panel" aria-label="Game over actions">
      ${actionButton("New shared game", "new-shared-game", "Set up players again.")}
      ${actionButton("Home", "home", "Return to mode selection.")}
    </section>
  `;

  app.querySelector(`[data-open="new-shared-game"]`).addEventListener("click", openSharedSetupModal);
  app.querySelector(`[data-open="home"]`).addEventListener("click", () => {
    state.shared = createSharedState();
    state.route = "home";
    render();
  });
}

function renderSharedActionPicker() {
  return `
    <section class="menu-grid" aria-label="Shared device turn actions">
      <details class="menu-card" open>
        <summary>Common actions</summary>
        <div class="nested-menu">
          <details class="sub-card" open>
            <summary>Coin actions</summary>
            <div class="chip-grid">
              ${MY_TURN_GENERAL.map((action, index) => actionButton(action.label, `shared-general-${index}`)).join("")}
            </div>
          </details>
        </div>
      </details>
      <details class="menu-card">
        <summary>Character actions</summary>
        <div class="nested-menu">
          ${CHARACTER_NAMES.map((name) => renderSharedCharacterActionGroup(name)).join("")}
        </div>
      </details>
    </section>
  `;
}

function renderSharedCharacterActionGroup(name) {
  const actions = getCharacterTurnActions(name);
  if (!actions.length) return "";

  return `
    <details class="sub-card">
      <summary>${escapeHtml(characterDisplayName(name))}</summary>
      <div class="chip-grid">
        ${actions.map((action, index) => actionButton(sharedCategoryLabel(action.primary.title), `shared-character-${name}-${index}`, action.extras.map((category) => toSentence(category.title)).join(" / "))).join("")}
      </div>
    </details>
  `;
}

function bindSharedActionButtons() {
  MY_TURN_GENERAL.forEach((action, index) => {
    app.querySelector(`[data-open="shared-general-${index}"]`).addEventListener("click", () => {
      openSharedActionConfirm(createSharedGeneralAction(action));
    });
  });

  CHARACTER_NAMES.forEach((name) => {
    getCharacterTurnActions(name).forEach((turnAction, index) => {
      app.querySelector(`[data-open="shared-character-${name}-${index}"]`).addEventListener("click", () => {
        openSharedActionConfirm(createSharedCharacterAction(name, turnAction));
      });
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
  const groups = getCharacterTurnActions(name).flatMap((action) => [action.primary, ...action.extras]);

  if (TARGET_REQUIRED[name]) groups.push(state.data.general["DECLARING A TARGET"]);
  if (ELIMINATES_PLAYER[name]) groups.push(state.data.general["ELIMINATING ANOTHER PLAYER"]);

  UNIVERSAL_CHARACTER_CATEGORIES.forEach((category) => {
    groups.push(state.data.general[category]);
  });

  openLineModal(characterDisplayName(name), "Character actions", groups.filter(Boolean));
}

function createSharedState() {
  return {
    setupCount: 4,
    players: [],
    currentPlayerIndex: 0,
    phase: "turn-action",
    action: null,
    reactionOrder: [],
    reactionIndex: 0,
    forcedAcceptShownForAction: false,
    pendingTargetPlayerId: null,
  };
}

function openSharedSetupModal() {
  renderSharedSetupModal();
  sharedSetupModal.showModal();
}

function renderSharedSetupModal() {
  const existingNames = Array.from(sharedSetupContent.querySelectorAll("[data-player-name]")).map((input) => input.value.trim());
  sharedSetupContent.innerHTML = `
    <div class="player-count-row">
      <span>Number of players</span>
      <div class="stepper" aria-label="Number of players">
        <button class="icon-button" type="button" data-player-count="-1" aria-label="Remove player">-</button>
        <strong>${state.shared.setupCount}</strong>
        <button class="icon-button" type="button" data-player-count="1" aria-label="Add player">+</button>
      </div>
    </div>
    <div class="player-fields">
      ${Array.from({ length: state.shared.setupCount }, (_, index) => `
        <label class="player-field">
          <span>Player ${index + 1}</span>
          <input data-player-name type="text" value="${escapeHtml(existingNames[index] || state.shared.players[index]?.name || "")}" placeholder="Optional name">
        </label>
      `).join("")}
    </div>
    <button class="primary-button" type="button" data-start-shared>Start shared game</button>
  `;

  sharedSetupContent.querySelectorAll("[data-player-count]").forEach((button) => {
    button.addEventListener("click", () => {
      const delta = Number(button.dataset.playerCount);
      state.shared.setupCount = clamp(state.shared.setupCount + delta, MIN_SHARED_PLAYERS, MAX_SHARED_PLAYERS);
      renderSharedSetupModal();
    });
  });

  sharedSetupContent.querySelector("[data-start-shared]").addEventListener("click", () => {
    const names = Array.from(sharedSetupContent.querySelectorAll("[data-player-name]")).map((input, index) => {
      return input.value.trim() || `Player ${index + 1}`;
    });
    state.shared = {
      ...createSharedState(),
      setupCount: names.length,
      players: names.map((name, index) => ({ id: index + 1, name })),
    };
    state.route = "shared-device";
    sharedSetupModal.close();
    render();
  });
}

function openSharedActionConfirm(action) {
  const targetOptions = getSharedTargetOptions();
  const needsTarget = action.requiresTarget || action.eliminatesTarget;
  state.shared.pendingTargetPlayerId = needsTarget ? targetOptions[0]?.id || null : null;
  modalContent.dataset.selectedTargetPlayer = state.shared.pendingTargetPlayerId || "";
  modal.dataset.currentTitle = action.label;
  modal.dataset.currentKicker = `${currentSharedPlayer().name}'s turn`;
  modal.dataset.currentGroups = JSON.stringify(action.groups);
  modalTitle.textContent = action.label;
  modalKicker.textContent = `${currentSharedPlayer().name}'s turn`;
  modalContent.innerHTML = `
    <div class="confirm-card">
      <p>${escapeHtml(currentSharedPlayer().name)} chose:</p>
      <strong>${escapeHtml(action.label)}</strong>
      ${action.subline ? `<small>${escapeHtml(action.subline)}</small>` : ""}
    </div>
    ${needsTarget ? `
      <div class="target-picker" aria-label="Choose target">
        <p class="eyebrow">Target</p>
        <div class="target-grid">
          ${targetOptions.map((player) => `
            <button class="target-option ${player.id === state.shared.pendingTargetPlayerId ? "selected" : ""}" type="button" data-target-player="${player.id}">
              ${escapeHtml(player.name)}
            </button>
          `).join("")}
        </div>
      </div>
    ` : ""}
    <div class="modal-actions">
      <button class="secondary-button" type="button" data-cancel-confirm>Change action</button>
      <button class="primary-button" type="button" data-confirm-action>Show voice lines</button>
    </div>
  `;
  modalContent.querySelector("[data-cancel-confirm]").addEventListener("click", () => modal.close());
  modalContent.querySelectorAll("[data-target-player]").forEach((button) => {
    button.addEventListener("click", () => {
      state.shared.pendingTargetPlayerId = Number(button.dataset.targetPlayer);
      modalContent.dataset.selectedTargetPlayer = button.dataset.targetPlayer;
      modalContent.querySelectorAll("[data-target-player]").forEach((targetButton) => {
        targetButton.classList.toggle("selected", targetButton === button);
      });
    });
  });
  modalContent.querySelector("[data-confirm-action]").addEventListener("click", () => {
    const selectedTargetId = Number(modalContent.dataset.selectedTargetPlayer || state.shared.pendingTargetPlayerId);
    if (needsTarget && !selectedTargetId) return;
    state.shared.action = {
      ...action,
      targetPlayerId: needsTarget ? selectedTargetId : null,
    };
    openSharedLineModal(action.label, `${currentSharedPlayer().name}'s turn`, action.groups, "Next player choice", startSharedReactions);
  });
  modal.showModal();
}

function openSharedLineModal(title, kicker, groups, nextLabel, nextHandler) {
  const visibleGroups = getVisibleLineGroups(groups);
  if (!visibleGroups.length) {
    if (modal.open) modal.close();
    nextHandler();
    return;
  }

  modal.dataset.currentTitle = title;
  modal.dataset.currentKicker = kicker;
  modal.dataset.currentGroups = JSON.stringify(groups);
  modal.dataset.currentNextLabel = nextLabel;
  modal._sharedNextHandler = nextHandler;
  modalTitle.textContent = title;
  modalKicker.textContent = kicker;
  const shouldOpenOnlyGroup = visibleGroups.length === 1;
  modalContent.innerHTML = `
    ${visibleGroups.map((group) => renderLineGroup(group, shouldOpenOnlyGroup)).join("")}
    <div class="modal-actions sticky-actions">
      <button class="primary-button" type="button" data-shared-next>${escapeHtml(nextLabel)}</button>
    </div>
  `;
  modalContent.querySelector("[data-shared-next]").addEventListener("click", () => {
    modal.close();
    nextHandler();
  });
  if (!modal.open) modal.showModal();
}

function startSharedReactions() {
  const shared = state.shared;
  const targetPlayerId = shared.action?.targetPlayerId;
  const activeResponders = shared.players
    .map((player, index) => ({ player, index }))
    .filter(({ player, index }) => index !== shared.currentPlayerIndex && !player.eliminated);
  const targetResponder = activeResponders.find(({ player }) => player.id === targetPlayerId);
  const nonTargetResponders = activeResponders.filter(({ player }) => player.id !== targetPlayerId);
  shared.reactionOrder = [
    ...(targetResponder ? [targetResponder.index] : []),
    ...nonTargetResponders.map(({ index }) => index),
  ];
  shared.reactionIndex = 0;
  presentSharedReactionOrAutoAccept();
}

function handleSharedReaction(option, responder) {
  const action = state.shared.action;

  if (option.type === "accept") {
    const isForcedAccept = action.eliminatesTarget && isSharedActionTarget(responder);
    openSharedLineModal(
      isForcedAccept ? "Forced accept" : "Accept the action",
      responder.name,
      isForcedAccept ? getForcedAcceptGroups() : [state.data.general["ACCEPTING AN ACTION"]].filter(Boolean),
      "Next reaction",
      () => {
        if (isForcedAccept) state.shared.forcedAcceptShownForAction = true;
        advanceSharedReaction();
      },
    );
    return;
  }

  if (option.type === "challenge-action") {
    const groups = [
      getClaimChallengeGroup(action.claimCharacter),
      state.data.general["CHALLENGING ANY CLAIM"],
    ].filter(Boolean);
    openSharedLineModal("Challenge the claim", responder.name, groups, "Resolve challenge", () => {
      renderChallengeOutcome({
        challenger: responder,
        challengee: currentSharedPlayer(),
        characterName: action.claimCharacter,
        afterSuccess: () => chooseInfluenceLoss(currentSharedPlayer(), "challenge-successful", startNextSharedTurn),
        afterFailure: () => chooseInfluenceLoss(responder, "challenge-failed", startNextSharedTurn),
      });
    });
    return;
  }

  if (option.type === "block") {
    openSharedLineModal(option.label, responder.name, option.groups, "Current player responds", () => {
      renderBlockResponse(option, responder);
    });
  }
}

function renderBlockResponse(blockOption, blocker) {
  const currentPlayer = currentSharedPlayer();
  app.innerHTML = `
    <section class="shared-status">
      <p class="eyebrow">Block Response</p>
      <h2>${escapeHtml(currentPlayer.name)} responds to ${escapeHtml(blocker.name)}</h2>
      <p>${escapeHtml(blocker.name)} blocked ${escapeHtml(state.shared.action.label)}.</p>
    </section>
    <section class="reaction-panel" aria-label="Block response">
      ${actionButton("Accept the block", "accept-block", "The action stops.")}
      ${actionButton("Challenge the block", "challenge-block", "Ask the blocker to prove the character.")}
    </section>
  `;

  app.querySelector(`[data-open="accept-block"]`).addEventListener("click", () => {
    openSharedLineModal("Accept the block", currentPlayer.name, [withVoiceLayer(state.data.general["DECIDING NOT TO CHALLENGE"], "resolve-block")].filter(Boolean), "Start next turn", startNextSharedTurn);
  });

  app.querySelector(`[data-open="challenge-block"]`).addEventListener("click", () => {
    const groups = [
      getBlockChallengeGroup(blockOption),
      state.data.general["CHALLENGING ANY CLAIM"],
    ].filter(Boolean);
    openSharedLineModal("Challenge the block", currentPlayer.name, groups, "Resolve challenge", () => {
      renderChallengeOutcome({
        challenger: currentPlayer,
        challengee: blocker,
        characterName: blockOption.character,
        afterSuccess: () => chooseInfluenceLoss(blocker, "challenge-successful", completeSharedAction),
        afterFailure: () => chooseInfluenceLoss(currentPlayer, "challenge-failed", startNextSharedTurn),
      });
    });
  });
}

function renderChallengeOutcome(challenge) {
  const { characterName, challengee } = challenge;
  const challengeeName = challengee.name;
  const characterLabel = characterName ? characterDisplayName(characterName) : "the claim";
  app.innerHTML = `
    <section class="shared-status">
      <p class="eyebrow">Challenge Outcome</p>
      <h2>${escapeHtml(challengeeName)} resolves the challenge</h2>
      <p>Choose the result from the challengee's point of view.</p>
    </section>
    <section class="reaction-panel" aria-label="Challenge outcome">
      ${actionButton("Challenge failed", "challenge-failed", `${challengeeName} proves ${characterLabel}.`)}
      ${actionButton("Challenge successful", "challenge-successful", `${challengeeName} was bluffing.`)}
    </section>
  `;

  app.querySelector(`[data-open="challenge-failed"]`).addEventListener("click", () => {
    const groups = [
      state.data.general["SUCCESSFULLY DEFENDING A CHALLENGE"],
      state.data.general["REVEALING A CARD AFTER A SUCCESSFUL CHALLENGE DEFENSE"],
      state.data.general["DRAWING A REPLACEMENT CARD"],
    ].filter(Boolean);
    openSharedLineModal("Challenge failed", challengeeName, groups, "Choose influence loss", challenge.afterFailure);
  });

  app.querySelector(`[data-open="challenge-successful"]`).addEventListener("click", () => {
    const groups = [
      state.data.general["BEING CAUGHT BLUFFING"],
      state.data.general["LOSING AN INFLUENCE"],
    ].filter(Boolean);
    openSharedLineModal("Challenge successful", challengeeName, groups, "Choose influence loss", challenge.afterSuccess);
  });
}

function chooseInfluenceLoss(player, reason, nextHandler) {
  app.innerHTML = `
    <section class="shared-status">
      <p class="eyebrow">Influence Loss</p>
      <h2>${escapeHtml(player.name)} loses influence</h2>
      <p>Choose whether this player still has influence left.</p>
    </section>
    <section class="reaction-panel" aria-label="Influence loss">
      ${actionButton("Lose influence", "lose-influence", `${player.name} remains in the game.`)}
      ${actionButton("Eliminated", "be-eliminated", `${player.name} has no influence left.`)}
    </section>
  `;

  app.querySelector(`[data-open="lose-influence"]`).addEventListener("click", () => {
    openSharedLineModal("Lose influence", player.name, getInfluenceLossGroups(reason), "Continue", nextHandler);
  });

  app.querySelector(`[data-open="be-eliminated"]`).addEventListener("click", () => {
    openSharedLineModal("Eliminated", player.name, getEliminatedGroups(reason), "Continue", () => {
      eliminateSharedPlayer(player);
      nextHandler();
    });
  });
}

function completeSharedAction() {
  if (!state.shared.action?.eliminatesTarget) {
    startNextSharedTurn();
    return;
  }

  const target = currentSharedTargetPlayer();
  if (state.shared.forcedAcceptShownForAction) {
    chooseActionTargetInfluenceLoss(target);
    return;
  }

  openSharedLineModal("Forced accept", target.name, getForcedAcceptGroups(), "Choose influence loss", () => {
    state.shared.forcedAcceptShownForAction = true;
    chooseActionTargetInfluenceLoss(target);
  });
}

function chooseActionTargetInfluenceLoss(target) {
  app.innerHTML = `
    <section class="shared-status">
      <p class="eyebrow">Action Succeeds</p>
      <h2>${escapeHtml(target.name)} loses influence</h2>
      <p>Choose whether this player still has influence left.</p>
    </section>
    <section class="reaction-panel" aria-label="Target influence loss">
      ${actionButton("Lose influence", "target-lose-influence", `${target.name} remains in the game.`)}
      ${actionButton("Eliminated", "target-eliminated", `${target.name} has no influence left.`)}
    </section>
  `;

  app.querySelector(`[data-open="target-lose-influence"]`).addEventListener("click", () => {
    openSharedLineModal("Must lose influence", target.name, getInfluenceLossGroups("forced-action"), "Start next turn", startNextSharedTurn);
  });

  app.querySelector(`[data-open="target-eliminated"]`).addEventListener("click", () => {
    openSharedLineModal("Eliminated", target.name, getEliminatedGroups("forced-action"), "Complete elimination", () => {
      eliminateSharedPlayer(target);
      openSharedLineModal("Successful elimination", currentSharedPlayer().name, [state.data.general["ELIMINATING ANOTHER PLAYER"]].filter(Boolean), "Start next turn", startNextSharedTurn);
    });
  });
}

function getInfluenceLossGroups(reason) {
  const groups = [];
  if (reason === "challenge-failed") groups.push(state.data.general["LOSING A CHALLENGE"]);
  groups.push(state.data.general["LOSING AN INFLUENCE"]);
  return groups.filter(Boolean);
}

function getEliminatedGroups(reason) {
  const groups = [];
  if (reason === "challenge-failed") groups.push(state.data.general["LOSING A CHALLENGE"]);
  groups.push(state.data.general["BEING ELIMINATED"]);
  return groups.filter(Boolean);
}

function advanceSharedReaction() {
  state.shared.reactionIndex += 1;
  presentSharedReactionOrAutoAccept();
}

function presentSharedReactionOrAutoAccept() {
  const shared = state.shared;
  if (shared.reactionIndex >= shared.reactionOrder.length) {
    completeSharedAction();
    return;
  }

  const responder = shared.players[shared.reactionOrder[shared.reactionIndex]];
  const options = getReactionOptions(shared.action, responder);
  if (!options.length) {
    advanceSharedReaction();
    return;
  }
  if (isAcceptOnlyReaction(options)) {
    const nextLabel = shared.reactionIndex + 1 >= shared.reactionOrder.length ? "Continue" : "Next reaction";
    const isForcedAccept = shared.action.eliminatesTarget && isSharedActionTarget(responder);
    openSharedLineModal(
      isForcedAccept ? "Forced accept" : "Must accept",
      responder.name,
      getForcedAcceptGroups(),
      nextLabel,
      () => {
        if (isForcedAccept) state.shared.forcedAcceptShownForAction = true;
        advanceSharedReaction();
      },
    );
    return;
  }

  shared.phase = "reaction";
  render();
}

function startNextSharedTurn() {
  const winner = getSharedWinner();
  if (winner) {
    renderSharedWinner(winner);
    return;
  }

  state.shared.currentPlayerIndex = nextActivePlayerIndex(state.shared.currentPlayerIndex);
  state.shared.phase = "turn-action";
  state.shared.action = null;
  state.shared.reactionOrder = [];
  state.shared.reactionIndex = 0;
  state.shared.forcedAcceptShownForAction = false;
  state.shared.pendingTargetPlayerId = null;
  render();
}

function currentSharedPlayer() {
  return state.shared.players[state.shared.currentPlayerIndex];
}

function currentSharedTargetPlayer() {
  const shared = state.shared;
  const selectedTarget = shared.players.find((player) => player.id === shared.action?.targetPlayerId && !player.eliminated);
  if (selectedTarget) return selectedTarget;

  const nextPlayerIndex = nextActivePlayerIndex(shared.currentPlayerIndex);
  const reactionTargetIndex = shared.reactionOrder.find((index) => !shared.players[index]?.eliminated) ?? nextPlayerIndex;
  return shared.players[reactionTargetIndex] || shared.players[nextPlayerIndex];
}

function getSharedTargetOptions() {
  const currentPlayer = currentSharedPlayer();
  return state.shared.players.filter((player) => player.id !== currentPlayer.id && !player.eliminated);
}

function isSharedActionTarget(player) {
  return Boolean(player && state.shared.action?.targetPlayerId === player.id);
}

function getSharedActionSummary() {
  const currentPlayer = currentSharedPlayer();
  const target = currentSharedTargetPlayer();
  const base = `${currentPlayer.name} chose ${state.shared.action.label}`;
  return state.shared.action?.targetPlayerId && target ? `${base} targeting ${target.name}.` : `${base}.`;
}

function activeSharedPlayers() {
  return state.shared.players.filter((player) => !player.eliminated);
}

function getSharedWinner() {
  const activePlayers = activeSharedPlayers();
  return state.shared.players.length > 1 && activePlayers.length === 1 ? activePlayers[0] : null;
}

function eliminateSharedPlayer(player) {
  const match = state.shared.players.find((candidate) => candidate.id === player.id);
  if (match) match.eliminated = true;
}

function nextActivePlayerIndex(fromIndex) {
  const players = state.shared.players;
  if (!players.length) return 0;

  for (let offset = 1; offset <= players.length; offset += 1) {
    const index = (fromIndex + offset) % players.length;
    if (!players[index].eliminated) return index;
  }

  return fromIndex;
}

function createSharedGeneralAction(action) {
  const groups = [state.data.general[action.source]];
  if (action.extras) groups.push(...action.extras.map((name) => state.data.general[name]));

  return {
    id: action.source,
    type: "general",
    label: action.label,
    subline: toSentence(action.source),
    source: action.source,
    claimCharacter: null,
    eliminatesTarget: Boolean(action.eliminatesTarget),
    requiresTarget: Boolean(action.eliminatesTarget),
    groups: groups.filter(Boolean),
  };
}

function createSharedCharacterAction(name, turnAction) {
  const groups = [turnAction.primary, ...turnAction.extras];
  if (TARGET_REQUIRED[name]) groups.push(state.data.general["DECLARING A TARGET"]);

  return {
    id: `${name}-${turnAction.primary.title}`,
    type: "character",
    label: `${characterDisplayName(name)} - ${sharedCategoryLabel(turnAction.primary.title)}`,
    subline: toSentence(turnAction.primary.title),
    source: turnAction.primary.title,
    claimCharacter: name,
    eliminatesTarget: Boolean(ELIMINATES_PLAYER[name]),
    requiresTarget: Boolean(TARGET_REQUIRED[name]),
    groups: groups.filter(Boolean),
  };
}

function getCharacterTurnActions(name) {
  const character = state.data.characters[name];
  if (!character) return [];

  const actions = [];
  let currentAction = null;
  character.categories.forEach((category) => {
    if (category.title.startsWith(CHARACTER_ACTION_PREFIX)) {
      currentAction = { primary: category, extras: [] };
      actions.push(currentAction);
      return;
    }

    if (currentAction && isTurnActionSupplement(category)) {
      currentAction.extras.push(category);
    }

    if (isBlockCategory(category) || category.title.startsWith("CHALLENGING ")) {
      currentAction = null;
    }
  });

  return actions;
}

function isTurnActionSupplement(category) {
  return category.title.startsWith("WHEN ")
    && !category.title.startsWith(CHALLENGE_DEFENSE_PREFIX)
    && !category.title.startsWith("WHEN SOMEONE ");
}

function getReactionOptions(action, responder = null) {
  if (!action) return [];
  const responderIsTarget = isSharedActionTarget(responder);
  const targetOnlyAction = action.eliminatesTarget && action.targetPlayerId;

  const options = [
    {
      id: "reaction-accept",
      type: "accept",
      label: action.eliminatesTarget && responderIsTarget ? "Forced accept" : "Accept",
      subline: action.eliminatesTarget && responderIsTarget ? "No block or challenge is used." : "Let the original action continue.",
    },
  ];

  if (!targetOnlyAction || responderIsTarget) {
    getBlockOptionsForAction(action).forEach((blockOption, index) => {
      options.push({
        ...blockOption,
        id: `reaction-block-${index}`,
        type: "block",
      });
    });
  }

  if (action.claimCharacter) {
    options.push({
      id: "reaction-challenge-action",
      type: "challenge-action",
      label: "Challenge",
      subline: `Challenge the ${characterDisplayName(action.claimCharacter)} claim.`,
    });
  }

  if (targetOnlyAction && !responderIsTarget && !action.claimCharacter) return [];
  return options;
}

function isAcceptOnlyReaction(options) {
  return options.length === 1 && options[0].type === "accept";
}

function getForcedAcceptGroups() {
  return [
    state.data.general["ACCEPTING WITHOUT A CHOICE"],
  ].filter(Boolean);
}

function getBlockOptionsForAction(action) {
  const blockGroups = [];
  const actionText = `${action.label} ${action.source}`.toUpperCase();

  getBlockingCharacters().forEach((blocker) => {
    blocker.categories.forEach((category) => {
      if (blockMatchesAction(category.title, actionText)) {
        blockGroups.push({
          label: `Block with ${characterDisplayName(blocker.name)}`,
          subline: toSentence(category.title),
          character: blocker.name,
          groups: [category],
          categoryTitle: category.title,
        });
      }
    });
  });

  return blockGroups;
}

function blockMatchesAction(blockTitle, actionText) {
  const title = blockTitle.toUpperCase();
  if (title.includes("FOREIGN AID")) return actionText.includes("FOREIGN") || actionText.includes("AID");
  if (title.includes("ASSASSINATION")) return actionText.includes("ASSASSIN");
  if (title.includes("STEAL")) return actionText.includes("STEAL") || actionText.includes("CAPTAIN") || actionText.includes("SOCIALIST");
  if (title.includes("DISORDER")) return actionText.includes("DISORDER") || actionText.includes("JESTER");
  return false;
}

function getClaimChallengeGroup(characterName) {
  if (!characterName) return null;
  const character = state.data.characters[characterName];
  return character?.categories.find((category) => category.title === `CHALLENGING SOMEONE CLAIMING ${characterName}`) || null;
}

function getBlockChallengeGroup(blockOption) {
  if (blockOption.categoryTitle?.includes("STEAL")) {
    const captain = state.data.characters.CAPTAIN?.categories.find((category) => category.title === "CHALLENGING SOMEONE WHO BLOCKS YOUR STEAL");
    if (captain) return captain;
  }
  return getClaimChallengeGroup(blockOption.character);
}

function getChallengeDefenseGroup(characterName) {
  if (!characterName) return null;
  const character = state.data.characters[characterName];
  return character?.categories.find((category) => category.title === `${CHALLENGE_DEFENSE_PREFIX}${characterName}`) || null;
}

function sharedCategoryLabel(title) {
  return toSentence(title.replace(/^ACTION:\s*/i, "").replace(/^WHEN\s+/i, ""));
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
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
  const visibleGroups = getVisibleLineGroups(groups);
  if (!visibleGroups.length) return;

  modal.dataset.currentTitle = title;
  modal.dataset.currentKicker = kicker;
  modal.dataset.currentGroups = JSON.stringify(groups);
  delete modal.dataset.currentNextLabel;
  modal._sharedNextHandler = null;
  modalTitle.textContent = title;
  modalKicker.textContent = kicker;
  const shouldOpenOnlyGroup = visibleGroups.length === 1;
  modalContent.innerHTML = visibleGroups.map((group) => renderLineGroup(group, shouldOpenOnlyGroup)).join("");
  modal.showModal();
}

function redrawOpenModal() {
  const groups = JSON.parse(modal.dataset.currentGroups || "[]");
  const visibleGroups = getVisibleLineGroups(groups);
  if (!visibleGroups.length) {
    const nextHandler = modal._sharedNextHandler;
    modal.close();
    if (nextHandler) nextHandler();
    return;
  }

  const shouldOpenOnlyGroup = visibleGroups.length === 1;
  const nextLabel = modal.dataset.currentNextLabel;
  modalContent.innerHTML = `
    ${visibleGroups.map((group) => renderLineGroup(group, shouldOpenOnlyGroup)).join("")}
    ${nextLabel ? `<div class="modal-actions sticky-actions"><button class="primary-button" type="button" data-shared-next>${escapeHtml(nextLabel)}</button></div>` : ""}
  `;
  modalContent.querySelector("[data-shared-next]")?.addEventListener("click", () => {
    modal.close();
    modal._sharedNextHandler?.();
  });
}

function getVisibleLineGroups(groups) {
  return groups.filter((group) => group && isVoiceLayerVisible(getVoiceLayerForGroup(group)));
}

function isVoiceLayerVisible(layerId) {
  return state.visibleVoiceLayers[layerId] !== false;
}

function getVoiceLayerForGroup(group) {
  if (group?.layerId) return group.layerId;
  const title = group?.title || "";

  if (COMMON_ACTION_TITLES.has(title)) return "common-actions";
  if (title === "DECLARING A TARGET") return "target-declaration";
  if (title === "ACCEPTING WITHOUT A CHOICE") return "forced-accept";
  if (["ACCEPTING AN ACTION", "DECIDING NOT TO CHALLENGE"].includes(title)) return "normal-accept";
  if (title === "CHALLENGING ANY CLAIM" || title.startsWith("CHALLENGING ")) return "initiate-challenge";
  if (title === "BLOCKING AN ACTION" || title.startsWith("BLOCK:")) return "initiate-block";
  if (title.startsWith("ACTION:")) return "character-actions";
  if ([
    "SUCCESSFULLY DEFENDING A CHALLENGE",
    "BEING CAUGHT BLUFFING",
    "REVEALING A CARD AFTER A SUCCESSFUL CHALLENGE DEFENSE",
    "DRAWING A REPLACEMENT CARD",
  ].includes(title) || title.startsWith(CHALLENGE_DEFENSE_PREFIX)) {
    return "resolve-challenge";
  }
  if (["LOSING A CHALLENGE", "LOSING AN INFLUENCE", "BEING ELIMINATED"].includes(title)) return "influence-loss";
  if (title === "ELIMINATING ANOTHER PLAYER") return "successful-elimination";
  if (title.startsWith("WHEN ")) return "action-follow-up";

  return "character-actions";
}

function withVoiceLayer(group, layerId) {
  return group ? { ...group, layerId } : null;
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

function loadVisibleVoiceLayers() {
  const fallback = Object.fromEntries(VOICE_LINE_LAYER_IDS.map((id) => [id, DEFAULT_VISIBLE_VOICE_LAYER_IDS.has(id)]));
  try {
    const stored = JSON.parse(localStorage.getItem(VOICE_LAYER_STORAGE_KEY) || "{}");
    return {
      ...fallback,
      ...Object.fromEntries(VOICE_LINE_LAYER_IDS.map((id) => [id, typeof stored[id] === "boolean" ? stored[id] : fallback[id]])),
    };
  } catch {
    return fallback;
  }
}

function saveVisibleVoiceLayers() {
  localStorage.setItem(VOICE_LAYER_STORAGE_KEY, JSON.stringify(state.visibleVoiceLayers));
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
  return getCharacterTurnActions(name)
    .map((action) => toSentence(action.primary.title))
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

const CONFIG = {
    size: { width: 1280, height: 720 },
    backgrounds: {
        outside: "assets/bg/bg-ancient-outside.png",
        unfinished: "assets/bg/bg-ancient-unfinished.png",
        finishedNoColor: "assets/bg/bg-ancient-finished-nocolor.png",
        finished: "assets/bg/bg-ancient-finished.png",
        modern: "assets/bg/bg-modern.png"
    },
    characters: {
        a: {
            body: "assets/characters/mason_a/body/mason_a_breath_02.png",
            face: {
                neutral: "assets/characters/mason_a/face/mason_a_expr_neutral.png",
                annoyed: "assets/characters/mason_a/face/mason_a_expr_annoyed.png",
                surprised: "assets/characters/mason_a/face/mason_a_surprised.png",
                smile: "assets/characters/mason_a/face/mason_a_expr_smile.png"
            }
        },
        b: {
            body: "assets/characters/mason_b/body/mason_b_breath_02.png",
            face: {
                neutral: "assets/characters/mason_b/face/mason_b_expr_neutral.png",
                annoyed: "assets/characters/mason_b/face/mason_b_expr_annoyed.png",
                surprised: "assets/characters/mason_b/face/mason_b_expr_surprised.png",
                smile: "assets/characters/mason_b/face/mason_b_expr_smile.png"
            }
        }
    },
    props: {
        pipa: "assets/props/pipa.png",
        bili: "assets/props/bili.png"
    },
    audio: {
        bgm: "audio/BGM-Pingcheng-loop.mp3",
        duet: "audio/BGM-pipawithbili.mp3",
        wind: "audio/wind.wav",
        sand: "audio/sand.wav",
        pipa: "audio/pipa.wav",
        bili: "audio/bili.wav",
        chisel: "audio/chisel.wav"
    },
    typingSpeed: 28,
    instrumentTriggerPadding: 52,
    erosionBrushRadius: 70,
    erosionFinishAt: 0.74
};

const DIALOGUE_BEFORE = [
    { speaker: "a", expression: "neutral", text: "师父走之前明明说了，这两处就照旧样补齐。" },
    { speaker: "b", expression: "surprised", text: "还是五弦直颈琵琶，横抱持拨的姿势？" },
    { speaker: "a", expression: "neutral", text: "嗯。管乐、弦乐的位置，也照旧样的来。" },
    { speaker: "b", expression: "neutral", text: "那套样都用了多少年了。" },
    { speaker: "a", expression: "neutral", text: "用了多少年，也是前辈一刀一刀定下来的。" },
    { speaker: "b", expression: "neutral", text: "我没说旧样错。但那是他们当年看见的乐班。" },
    { speaker: "a", expression: "annoyed", text: "怎么，他们记下来的东西到了你这里就不算数了？" },
    { speaker: "b", expression: "neutral", text: "当然算。" },
    { speaker: "b", expression: "neutral", text: "可我们现在看见的，也是真的。" },
    { speaker: "b", expression: "neutral", text: "曲项琵琶已经换了斜抱持拨的弹法，觱篥也就在旁边——" },
    { speaker: "b", expression: "neutral", text: "……这么说吧，你天天从墙下走，没见过那班乐人？" },
    { speaker: "a", expression: "neutral", text: "怎么没见过。" },
    { speaker: "b", expression: "neutral", text: "弹曲项琵琶的，从凉州来。" },
    { speaker: "b", expression: "neutral", text: "吹觱篥的，说家里是从龟兹一路东来的。" },
    { speaker: "b", expression: "neutral", text: "旁边击鼓的是平城长大的鲜卑乐工。" },
    { speaker: "b", expression: "neutral", text: "那个吹笙的，是从中原来的。" },
    { speaker: "a", expression: "surprised", text: "难怪平时听他们说话，腔调都千方百样的。" },
    { speaker: "a", expression: "annoyed", text: "但别扯远了——乐班今天添一样，明天换一样，难道石壁也天天跟着改？" },
    { speaker: "b", expression: "neutral", text: "石壁当然不能天天改。" },
    { speaker: "a", expression: "annoyed", text: "那不就结了。" },
    { speaker: "b", expression: "neutral", text: "正因为不能改，第一刀才更该想清楚。" },
    { speaker: "b", expression: "neutral", text: "师父的样，记的是师父当年见过的。" },
    { speaker: "b", expression: "neutral", text: "可我们今天看见的、听见的，是今天的平城。" },
    { speaker: "a", expression: "annoyed", text: "平城的变化这么快，石壁就这么大，还能样样都刻？" },
    { speaker: "b", expression: "neutral", text: "不能。所以才要选。" },
    { speaker: "a", expression: "smile", text: "你倒终于说了句像石匠的话。" },
    { speaker: "b", expression: "smile", text: "我本来就是石匠。" },
    { speaker: "a", expression: "annoyed", text: "那就别光顾着听热闹。" },
    { speaker: "b", expression: "neutral", text: "我听的不是热闹。" },
    { speaker: "a", expression: "neutral", text: "那你听出了什么？" },
    { speaker: "b", expression: "smile", text: "你自己好好听听。" }
];

const DIALOGUE_PIPA = [
    { speaker: "a", expression: "neutral", text: "声短，落得也快。" },
    { speaker: "b", expression: "neutral", text: "拨下去很利落。" },
    { speaker: "a", expression: "neutral", text: "刻在这一边，姿势倒也好看清。" },
    { speaker: "b", expression: "smile", text: "看来你已经开始想好怎么刻了？" },
    { speaker: "a", expression: "annoyed", text: "……我只是想想而已。" }
];

const DIALOGUE_BILI = [
    { speaker: "b", expression: "neutral", text: "觱篥的声就不一样了。" },
    { speaker: "a", expression: "neutral", text: "拖得长些，也更直。" },
    { speaker: "b", expression: "neutral", text: "离得这么近，单听倒真不像一路声音。" },
    { speaker: "a", expression: "smile", text: "现在知道我为什么说不能什么都往墙上塞了？" },
    { speaker: "b", expression: "annoyed", text: "急什么，还没听完呢。" }
];

const DIALOGUE_INSTRUMENT_BRIDGE = [
    { speaker: "a", expression: "neutral", text: "一个声脆，一个声直。各响各的，倒都清楚。" },
    { speaker: "b", expression: "neutral", text: "昨天墙下那班乐人，可不是各响各的。" },
    { speaker: "a", expression: "surprised", text: "你是说后来接上的那一段？" },
    { speaker: "b", expression: "neutral", text: "嗯。第一遍还乱得很。" },
    { speaker: "a", expression: "neutral", text: "弹琵琶的嫌觱篥压了他的尾音。" },
    { speaker: "b", expression: "smile", text: "吹觱篥的还嫌他拨得太急。" },
    { speaker: "a", expression: "smile", text: "差点吵起来。" },
    { speaker: "b", expression: "smile", text: "跟我们现在差不多。" },
    { speaker: "a", expression: "annoyed", text: "少把我算进去。" },
    { speaker: "b", expression: "smile", text: "行，不算你。后来那一遍呢？" },
    { speaker: "a", expression: "neutral", text: "……后来倒是合上了。" },
    { speaker: "b", expression: "neutral", text: "怎么合上的？" },
    { speaker: "a", expression: "neutral", text: "当时没留意。" },
    { speaker: "b", expression: "neutral", text: "那就再听一次。" }
];

const DIALOGUE_AFTER = [
    { speaker: "a", expression: "surprised", text: "……唉。" },
    { speaker: "b", expression: "smile", text: "听出来了？" },
    { speaker: "a", expression: "neutral", text: "琵琶的尾音短了，觱篥也没急着压上来。" },
    { speaker: "a", expression: "neutral", text: "这又是谁教谁的？" },
    { speaker: "b", expression: "neutral", text: "没人教。" },
    { speaker: "b", expression: "neutral", text: "他们只是听了一耳朵对方怎么奏。" },
    { speaker: "a", expression: "neutral", text: "那原来的弹法呢？" },
    { speaker: "b", expression: "neutral", text: "其实也还在乐班里。只是合到一处，又有了新的奏法。" },

    { speaker: "b", expression: "neutral", text: "就像你前几天修的那道衣褶，也不是原来的刀法。" },
    { speaker: "a", expression: "annoyed", text: "怎么又扯到我身上？" },
    { speaker: "b", expression: "neutral", text: "你自己的刀法从哪学的？" },
    { speaker: "a", expression: "neutral", text: "我师父。" },
    { speaker: "b", expression: "neutral", text: "哪儿的人？" },
    { speaker: "a", expression: "neutral", text: "代北人。" },
    { speaker: "a", expression: "neutral", text: "他教我先定轮廓，再收石边。" },
    { speaker: "a", expression: "neutral", text: "刀要稳，线不能散。" },
    { speaker: "b", expression: "neutral", text: "那道衣褶呢？" },
    { speaker: "a", expression: "neutral", text: "凉州来的曹师傅教的。" },
    { speaker: "b", expression: "neutral", text: "怎么教的？" },
    { speaker: "a", expression: "neutral", text: "他下刀不全走直线。" },
    { speaker: "a", expression: "neutral", text: "转过去，再挑回来，衣褶才有起伏。" },
    { speaker: "b", expression: "neutral", text: "所以你有自己的方法，但还是学了新的分发。" },
    { speaker: "a", expression: "neutral", text: "好用为什么不学？" },
    { speaker: "b", expression: "neutral", text: "对啊，就像昨天曹师傅还在学你的收边。" },
    { speaker: "a", expression: "surprised", text: "他学我？" },
    { speaker: "b", expression: "smile", text: "你没发现？" },
    { speaker: "a", expression: "neutral", text: "……我还真没看。" },
    { speaker: "b", expression: "neutral", text: "一个从代北学来的收边，一个从凉州学来的转刀。现在都在你一双手里呢。" },
    { speaker: "a", expression: "neutral", text: "……平时下刀，谁还想这些。" },
    { speaker: "b", expression: "neutral", text: "正因为没人想，才说明早就用惯了。" },
    { speaker: "a", expression: "neutral", text: "只是哪个好，就拿来用。" },
    { speaker: "b", expression: "smile", text: "乐人不也是这样。" },
    { speaker: "a", expression: "annoyed", text: "你就等着绕回这一句。" },
    { speaker: "b", expression: "smile", text: "等半天了。" },

    { speaker: "a", expression: "neutral", text: "可学会一种刀法，和留在石壁上还是不一样。" },
    { speaker: "b", expression: "neutral", text: "当然不一样。" },
    { speaker: "a", expression: "neutral", text: "这一刀落下去，往后的人见到的，就是这个样子。" },
    { speaker: "b", expression: "neutral", text: "所以，就更该刻下我们亲眼见过的——这些从各处而来的声音，彼此交流之后的样子。" },
    { speaker: "a", expression: "neutral", text: "不是为了说哪一种最好。" },
    { speaker: "b", expression: "neutral", text: "嗯。" },
    { speaker: "a", expression: "neutral", text: "旧样也没错。" },
    { speaker: "a", expression: "neutral", text: "那是从前的人，看见他们那个时候的平城，留下来的。" },
    { speaker: "a", expression: "neutral", text: "我们现在要刻的……" },
    { speaker: "a", expression: "neutral", text: "是我们这个时候的平城。" },

    { speaker: "a", expression: "neutral", text: "上面已经照旧样刻好的，不动。" },
    { speaker: "a", expression: "neutral", text: "那是前人的样，也该留下。" },
    { speaker: "b", expression: "surprised", text: "我们这两处呢？" },
    { speaker: "a", expression: "neutral", text: "左边，曲项琵琶。不照旧样，照墙下那个凉州乐人的抱法来。" },
    { speaker: "b", expression: "neutral", text: "右边？" },
    { speaker: "a", expression: "neutral", text: "觱篥。就照那个西域乐人持管、落指的样子。" },
    { speaker: "b", expression: "surprised", text: "让他们挨这么近？" },
    { speaker: "a", expression: "neutral", text: "他们本来就站这么近。" },
    { speaker: "b", expression: "smile", text: "两个都刻？" },
    { speaker: "a", expression: "smile", text: "两个都刻。" },

    { speaker: "b", expression: "neutral", text: "师父问起来呢？" },
    { speaker: "a", expression: "neutral", text: "我来答。" },
    { speaker: "b", expression: "surprised", text: "主意明明是我出的。" },
    { speaker: "a", expression: "smile", text: "第一刀是我下。" },
    { speaker: "b", expression: "smile", text: "那要是挨骂呢？" },
    { speaker: "a", expression: "neutral", text: "就一起挨。" },
    { speaker: "b", expression: "smile", text: "这还差不多。" },
    { speaker: "a", expression: "annoyed", text: "凿子。" },
    { speaker: "b", expression: "smile", text: "给。" }
];

const DIALOGUE_FINISHED = [
    { speaker: "b", expression: "neutral", text: "看着倒像本来就该在这里。" },
    { speaker: "a", expression: "neutral", text: "刚才你可不是这么说的。" },
    { speaker: "b", expression: "annoyed", text: "刚才嫌变来变去的人明明是你。" },
    { speaker: "a", expression: "smile", text: "我说的是不能乱刻。" },
    { speaker: "b", expression: "neutral", text: "那我们这样，是在旧样上乱来吗？" },
    { speaker: "a", expression: "neutral", text: "当然不是。总是要有新样的。" },
    { speaker: "a", expression: "smile", text: "更何况，等后来的人看见，它就是旧样了。" },
    { speaker: "b", expression: "neutral", text: "再以后呢？" },
    { speaker: "a", expression: "neutral", text: "谁知道。" },
    { speaker: "a", expression: "smile", text: "石头留得比我们久。" },
    { speaker: "a", expression: "neutral", text: "让它自己告诉后来人吧。" }
];

const STUDY_DIALOGUE = [
    { speaker: "学生甲", text: "老师，这些乐器原本就是一套的吗？" },
    { speaker: "老师", text: "未必。" },
    { speaker: "老师", text: "它们从不同地方来，也经过不同人的手。" },
    { speaker: "学生乙", text: "可最后都在同一面墙上。" },
    { speaker: "老师", text: "因为当时的平城，本来就聚着从四方来的人。" },
    { speaker: "老师", text: "人来了，声音、手艺，也跟着来了。" },
    { speaker: "学生甲", text: "所以我们现在看到的……" },
    { speaker: "学生甲", text: "是他们那时候的“现在”？" },
    { speaker: "老师", text: "嗯。" },
    { speaker: "老师", text: "只是他们大概想不到，我们这么久以后还会站在这里看。" },
    { speaker: "学生乙", text: "起风了。" }
];

const $ = (selector) => document.querySelector(selector);
const game = $("#game");
const world = $("#world");
const background = $("#background");
const backgroundNext = $("#background-next");
const masonA = $("#mason-a");
const masonB = $("#mason-b");
const instruments = $("#instruments");
const pipaTarget = $("#pipa-target");
const biliTarget = $("#bili-target");
const pipa = $("#pipa");
const bili = $("#bili");
const farA = $("#far-dialogue-a");
const farB = $("#far-dialogue-b");
const titleScreen = $("#title-screen");
const sceneTip = $("#scene-tip");
const dialogueBox = $("#dialogue-box");
const portrait = $("#portrait");
const speakerName = $("#speaker-name");
const dialogueText = $("#dialogue-text");
const ambientText = $("#ambient-text");
const centerText = $("#center-text");
const studyDialogue = $("#study-dialogue");
const studySpeaker = $("#study-speaker");
const studyText = $("#study-text");
const endCard = $("#end-card");
const restartBtn = $("#restart-btn");
const windCanvas = $("#wind-canvas");
const windCtx = windCanvas.getContext("2d");
const eyeCanvas = $("#eye-transition");
const eyeCtx = eyeCanvas.getContext("2d");
const erosionCanvas = $("#erosion-canvas");
const erosionCtx = erosionCanvas.getContext("2d");

const bgm = new Audio(CONFIG.audio.bgm);
const duetAudio = new Audio(CONFIG.audio.duet);
const windBurst = new Audio(CONFIG.audio.wind);
const windLoop = new Audio(CONFIG.audio.wind);
const sandVoices = [new Audio(CONFIG.audio.sand), new Audio(CONFIG.audio.sand)];
const pipaAudio = new Audio(CONFIG.audio.pipa);
const biliAudio = new Audio(CONFIG.audio.bili);
const chiselAudio = new Audio(CONFIG.audio.chisel);

bgm.loop = true;
bgm.volume = 0.18;
windBurst.volume = 0.28;
windLoop.loop = true;
windLoop.volume = 0.1;
sandVoices.forEach((audio) => { audio.volume = 0.07; });
pipaAudio.volume = 0.68;
biliAudio.volume = 0.56;
chiselAudio.volume = 0.78;
duetAudio.volume = 0.72;

let state = "title";
let currentDialogue = [];
let dialogueIndex = 0;
let dialogueCallback = null;
let typingTimer = null;
let typingFinished = false;
let currentFullText = "";
let currentPortraitStill = "";
let studyDialogueIndex = 0;
let studyDialogueCallback = null;
let studyTypingTimer = null;
let studyTypingFinished = false;
let studyFullText = "";
let instrumentStep = "";
let heardPipa = false;
let heardBili = false;
let instrumentRound = 0;
let soloPlaying = false;
let duetStarted = false;

/* 合奏期间的固定流动风线 */
let duetFlowActive = false;
let duetFlowStartedAt = 0;

let previousWindPoint = null;
let previousSoundPoint = null;
let lastSandAt = 0;
let sandVoiceIndex = 0;
let windSegments = [];
let windParticles = [];
let erosionEnabled = false;
let erosionProgress = 0;
let erosionCheckCounter = 0;
let erosionThresholdsShown = new Set();
const maskCanvas = document.createElement("canvas");
maskCanvas.width = 160;
maskCanvas.height = 90;
const maskCtx = maskCanvas.getContext("2d");

function init() {
    background.src = CONFIG.backgrounds.outside;
    backgroundNext.src = CONFIG.backgrounds.unfinished;
    masonA.src = CONFIG.characters.a.body;
    masonB.src = CONFIG.characters.b.body;
    pipa.src = CONFIG.props.pipa;
    bili.src = CONFIG.props.bili;

    preloadAssets();
    requestAnimationFrame(drawWind);

    game.addEventListener("click", handleClick);
    game.addEventListener("pointermove", handlePointerMove);
    game.addEventListener("pointerleave", resetPointerTracking);
    game.addEventListener("keydown", handleKeydown);
    restartBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        location.reload();
    });

    game.focus({ preventScroll: true });
}

function preloadAssets() {
    const images = [
        ...Object.values(CONFIG.backgrounds),
        CONFIG.characters.a.body,
        CONFIG.characters.b.body,
        ...Object.values(CONFIG.characters.a.face),
        ...Object.values(CONFIG.characters.b.face),
        ...Object.values(CONFIG.props),
        "assets/UI/title.png",
        "assets/UI/UI asset.png",
        "assets/UI/dialogue2.png",
        "assets/UI/dialogue-box-right.png",
        "assets/UI/prompt-long-notactive.png"
    ];

    images.forEach((src) => {
        const image = new Image();
        image.src = src;
    });

    [bgm, duetAudio, windBurst, windLoop, ...sandVoices, pipaAudio, biliAudio, chiselAudio]
        .forEach((audio) => audio.load());
}

function handleClick() {
    if (state === "title") {
        beginGame();
        return;
    }

    if (state === "far-wait") {
        approachCharacters();
        return;
    }

    if (state === "dialogue") {
        handleDialogueClick();
        return;
    }

    if (state === "study-dialogue") {
        handleStudyDialogueClick();
    }
}

function handleKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") {
        return;
    }

    if (["title", "far-wait", "dialogue", "study-dialogue"].includes(state)) {
        event.preventDefault();
        handleClick();
    }
}

async function beginGame() {
    if (state !== "title") {
        return;
    }

    state = "transitioning";
    const entrySand = sandVoices[0];
    entrySand.currentTime = 0;
    entrySand.volume = 0.11;
    safePlay(entrySand);
    safePlay(bgm);
    titleScreen.classList.add("leaving");
    await wait(300);

    eyeCanvas.classList.remove("hidden");
    await animateEye(1, 0, 520);
    titleScreen.classList.add("hidden");
    game.classList.remove("title-mode");
    await wait(90);
    await animateEye(0, 1, 900);
    eyeCanvas.classList.add("hidden");

    await showCenterSequence([
        { text: "你没有脚步，也没有影子。", ms: 1250 },
        { text: "你是一阵风。", ms: 1350 },
        { text: "你越过武州山的石崖，穿过尚未凿完的窟门。", ms: 1650 },
        { text: "凿石声、说话声、远处的乐声，都随着你穿行其间。", ms: 1750 },
        { text: "远处的风向你耳语，把两位石匠的争执送到你面前。", ms: 1750 },
        { text: "去看看是怎么回事吧。", ms: 1250 }
    ]);

    startFarScene();
}

async function startFarScene() {
    state = "far";
    background.src = CONFIG.backgrounds.outside;
    game.classList.add("far");
    resetPointerTracking();

    const lines = [
        { who: "a", text: "师父的旧样不能改！" },
        { who: "b", text: "可如今平城的乐班，早不是旧样里的样子了！" },
        { who: "a", text: "乐班是乐班，石壁是石壁！" },
        { who: "b", text: "那你倒说说，我们刻的是什么？" }
    ];

    for (const line of lines) {
        await showFarBubble(line.who, line.text);
    }

    showTip("循声靠近");
    state = "far-wait";
}

async function showFarBubble(who, text) {
    clearFarBubbles();
    const bubble = who === "a" ? farA : farB;
    bubble.querySelector("span").textContent = text;
    await wait(70);
    bubble.classList.add("show");
    await wait(1380);
    bubble.classList.remove("show");
    await wait(190);
}

function clearFarBubbles() {
    farA.classList.remove("show");
    farB.classList.remove("show");
}

async function approachCharacters() {
    if (state !== "far-wait") {
        return;
    }

    state = "approaching";
    hideTip();
    clearFarBubbles();
    resetPointerTracking();

    windBurst.currentTime = 0;
    safePlay(windBurst);
    world.classList.add("approaching");
    backgroundNext.src = CONFIG.backgrounds.unfinished;

    await wait(160);
    backgroundNext.classList.add("show");

    /*
       关键修正：远景小人先淡出。
       在完全看不见时一次性切换成近景尺寸和最终争吵站位，
       再让近景立绘淡入。这样不会出现“从小弹到大”或出现后再横移。
    */
    await wait(120);
    masonA.classList.add("swap-hidden");
    masonB.classList.add("swap-hidden");
    await wait(230);

    game.classList.remove("far");

    await wait(40);
    masonA.classList.remove("swap-hidden");
    masonB.classList.remove("swap-hidden");
    await wait(280);

    background.src = CONFIG.backgrounds.unfinished;
    backgroundNext.classList.remove("show");
    world.classList.remove("approaching");
    fadeAudioTo(windBurst, 0, 320, true);

    await wait(180);
    startDialogue(DIALOGUE_BEFORE, () => startInstrumentRound(1));
}

function startDialogue(dialogue, callback) {
    state = "dialogue";

    // 对话时恢复背景与人物的正常亮度。
    // 乙的近景大立绘位置始终固定，不再切换任何站位 class。
    game.classList.remove("instrument-focus");

    currentDialogue = dialogue;
    dialogueIndex = 0;
    dialogueCallback = callback;
    dialogueBox.classList.remove("hidden");
    showDialogue();
}

function showDialogue() {
    clearTyping();

    if (dialogueIndex >= currentDialogue.length) {
        dialogueBox.classList.add("hidden");
        masonA.classList.remove("active", "dim");
        masonB.classList.remove("active", "dim");

        const callback = dialogueCallback;
        dialogueCallback = null;

        if (callback) {
            callback();
        }
        return;
    }

    const line = currentDialogue[dialogueIndex];
    const character = CONFIG.characters[line.speaker];
    currentPortraitStill = character.face[line.expression] || character.face.neutral;

    speakerName.textContent = line.speaker === "a" ? "石匠甲" : "石匠乙";
    portrait.alt = speakerName.textContent;
    portrait.className = line.speaker === "a" ? "portrait-a" : "portrait-b";
    portrait.src = currentPortraitStill;
    setSpeaker(line.speaker);

    currentFullText = line.text;
    dialogueText.textContent = "";
    typingFinished = false;

    let characterIndex = 0;
    typingTimer = setInterval(() => {
        characterIndex += 1;
        dialogueText.textContent = currentFullText.slice(0, characterIndex);

        if (characterIndex >= currentFullText.length) {
            finishTyping();
        }
    }, CONFIG.typingSpeed);
}

function finishTyping() {
    clearTyping();
    dialogueText.textContent = currentFullText;
    typingFinished = true;
}

function handleDialogueClick() {
    if (!typingFinished) {
        finishTyping();
        return;
    }

    dialogueIndex += 1;
    showDialogue();
}

function clearTyping() {
    if (typingTimer) {
        clearInterval(typingTimer);
        typingTimer = null;
    }
}

function setSpeaker(speaker) {
    masonA.classList.remove("active", "dim");
    masonB.classList.remove("active", "dim");

    if (speaker === "a") {
        masonA.classList.add("active");
        masonB.classList.add("dim");
    } else {
        masonB.classList.add("active");
        masonA.classList.add("dim");
    }
}

function startInstrumentRound(round) {
    state = "instrument";
    game.classList.add("instrument-focus");
    instrumentRound = round;
    heardPipa = false;
    heardBili = false;
    soloPlaying = false;
    duetStarted = false;
    instruments.classList.remove("hidden");
    instruments.setAttribute("aria-hidden", "false");

    pipaTarget.classList.remove("heard", "near", "locked", "ready");
    biliTarget.classList.remove("heard", "near", "locked", "ready");

    if (round === 1) {
        instrumentStep = "pipa";
        pipaTarget.classList.add("ready");
        biliTarget.classList.add("locked");
        showTip("让风掠过曲项琵琶");
    } else {
        instrumentStep = "pipa";
        pipaTarget.classList.add("ready");
        biliTarget.classList.add("locked");
        showTip("再让风掠过曲项琵琶");
    }

    resetPointerTracking();
}

function resumeRoundOneBili() {
    state = "instrument";
    game.classList.add("instrument-focus");
    instrumentRound = 1;
    instrumentStep = "bili";
    soloPlaying = false;
    instruments.classList.remove("hidden");
    instruments.setAttribute("aria-hidden", "false");

    pipaTarget.classList.remove("ready", "near");
    pipaTarget.classList.add("heard", "locked");
    biliTarget.classList.remove("locked", "heard", "near");
    biliTarget.classList.add("ready");

    showTip("让风掠过觱篥");
    resetPointerTracking();
}

function handlePointerMove(event) {
    const point = getGamePoint(event);

    /*
       合奏播放期间，玩家仍然是“风”：
       鼠标移动继续产生自由风轨迹，但不会再次触发乐器判定。
    */
    const activeWindState = [
        "title",
        "instrument",
        "duet-playing",
        "erosion"
    ].includes(state);

    if (activeWindState) {
        addWindPoint(point.x, point.y);
    }

    if (state === "title") {
        playTitleSand(point);
    } else {
        previousSoundPoint = null;
    }

    if (state === "instrument") {
        checkInstrument(point.x, point.y);
    }

    if (state === "erosion" && erosionEnabled) {
        erodeAt(point.x, point.y);
    }
}

function getGamePoint(event) {
    const rect = game.getBoundingClientRect();
    return {
        x: (event.clientX - rect.left) / rect.width * CONFIG.size.width,
        y: (event.clientY - rect.top) / rect.height * CONFIG.size.height
    };
}

function resetPointerTracking() {
    previousWindPoint = null;
    previousSoundPoint = null;
}

function playTitleSand(point) {
    const now = performance.now();
    if (!previousSoundPoint) {
        previousSoundPoint = { ...point, time: now };
        return;
    }

    const distance = Math.hypot(
        point.x - previousSoundPoint.x,
        point.y - previousSoundPoint.y
    );
    const elapsed = Math.max(16, now - previousSoundPoint.time);
    const speed = distance / elapsed * 16.7;
    previousSoundPoint = { ...point, time: now };

    if (speed < 9 || now - lastSandAt < 380) {
        return;
    }

    lastSandAt = now;
    const audio = sandVoices[sandVoiceIndex % sandVoices.length];
    sandVoiceIndex += 1;
    audio.pause();
    audio.currentTime = Math.min(0.18, Math.random() * 0.12);
    audio.volume = Math.min(0.14, 0.035 + speed / 520);
    safePlay(audio);
}

function getLogicalRect(element) {
    const gameRect = game.getBoundingClientRect();
    const rect = element.getBoundingClientRect();
    return {
        x: (rect.left - gameRect.left) / gameRect.width * CONFIG.size.width,
        y: (rect.top - gameRect.top) / gameRect.height * CONFIG.size.height,
        width: rect.width / gameRect.width * CONFIG.size.width,
        height: rect.height / gameRect.height * CONFIG.size.height
    };
}

function expandRect(rect, padding) {
    return {
        x: rect.x - padding,
        y: rect.y - padding,
        width: rect.width + padding * 2,
        height: rect.height + padding * 2
    };
}

function inside(x, y, rect) {
    return x >= rect.x
        && x <= rect.x + rect.width
        && y >= rect.y
        && y <= rect.y + rect.height;
}

function checkInstrument(x, y) {
    if (soloPlaying || duetStarted) {
        return;
    }

    const pipaRect = expandRect(getLogicalRect(pipaTarget), CONFIG.instrumentTriggerPadding);
    const biliRect = expandRect(getLogicalRect(biliTarget), CONFIG.instrumentTriggerPadding);
    const inPipa = inside(x, y, pipaRect);
    const inBili = inside(x, y, biliRect);

    if (instrumentRound === 1) {
        const canPipa = instrumentStep === "pipa";
        const canBili = instrumentStep === "bili";

        pipaTarget.classList.toggle("near", canPipa && inPipa);
        biliTarget.classList.toggle("near", canBili && inBili);

        if (canPipa && inPipa) {
            playInstrumentSolo("pipa");
        } else if (canBili && inBili) {
            playInstrumentSolo("bili");
        }
        return;
    }

    pipaTarget.classList.toggle("near", inPipa && !heardPipa);
    biliTarget.classList.toggle("near", inBili && heardPipa && !heardBili);

    if (inPipa && !heardPipa) {
        triggerDuetGesture("pipa");
    } else if (inBili && heardPipa && !heardBili) {
        triggerDuetGesture("bili");
    }
}

function playInstrumentSolo(name) {
    const isPipa = name === "pipa";
    const target = isPipa ? pipaTarget : biliTarget;
    const audio = isPipa ? pipaAudio : biliAudio;

    soloPlaying = true;
    hideTip();
    target.classList.add("heard");
    target.classList.remove("ready", "near");

    if (isPipa) {
        heardPipa = true;
        showAmbientText("你掠过曲颈琵琶的弦上。", 1050);
    } else {
        heardBili = true;
        showAmbientText("你从管间穿过。", 1050);
    }

    fadeAudioTo(bgm, 0.07, 180);
    audio.pause();
    audio.currentTime = 0;

    let completed = false;
    const expectedName = name;
    const finishSolo = () => {
        if (completed) {
            return;
        }
        completed = true;
        clearTimeout(audio._sceneTimer);
        audio.onended = null;

        if (state !== "instrument" || instrumentRound !== 1) {
            return;
        }

        soloPlaying = false;
        fadeAudioTo(bgm, 0.18, 280);
        instruments.classList.add("hidden");
        instruments.setAttribute("aria-hidden", "true");
        state = "instrument-between";

        if (expectedName === "pipa") {
            startDialogue(DIALOGUE_PIPA, resumeRoundOneBili);
        } else {
            startDialogue(
                [...DIALOGUE_BILI, ...DIALOGUE_INSTRUMENT_BRIDGE],
                () => startInstrumentRound(2)
            );
        }
    };

    audio.onended = finishSolo;
    audio._sceneTimer = setTimeout(finishSolo, 2500);
    safePlay(audio);
}

function triggerDuetGesture(name) {
    const isPipa = name === "pipa";
    const target = isPipa ? pipaTarget : biliTarget;

    if (isPipa) {
        heardPipa = true;
        instrumentStep = "bili";
        target.classList.add("heard");
        target.classList.remove("ready", "near");
        biliTarget.classList.remove("locked");
        biliTarget.classList.add("ready");

        // 第二轮先真正听见一小段琵琶，再把余音“送”向觱篥。
        pipaAudio.pause();
        pipaAudio.currentTime = 0;
        pipaAudio.volume = 0.62;
        safePlay(pipaAudio);
        fadeAudioTo(bgm, 0.08, 180);

        showAmbientText("风带走了琵琶最后一个音。", 1200);
        showTip("把声音送向觱篥");
        return;
    }

    heardBili = true;
    pipaAudio.pause();
    pipaAudio.currentTime = 0;
    target.classList.add("heard");
    target.classList.remove("ready", "near");
    hideTip();
    showAmbientText("把它送向另一种声音。", 1200);

    if (heardPipa && heardBili) {
        setTimeout(playFullDuet, 260);
    }
}

function playFullDuet() {
    if (duetStarted || state !== "instrument" || instrumentRound !== 2) {
        return;
    }

    duetStarted = true;
    state = "duet-playing";
    hideTip();

    /*
       从“单乐器聚焦”切换到“合奏聚焦”。
       两件乐器都保留在画面中，不再隐藏。
    */
    game.classList.remove("instrument-focus");
    game.classList.add("duet-flow-mode");

    instruments.classList.remove("hidden");
    instruments.setAttribute("aria-hidden", "false");

    /*
       清除单乐器阶段的明暗状态，让两件乐器在合奏时
       处于同一视觉层级。
    */
    pipaTarget.classList.remove(
        "ready",
        "heard",
        "near",
        "locked"
    );

    biliTarget.classList.remove(
        "ready",
        "heard",
        "near",
        "locked"
    );

    pipaTarget.classList.add("duet-active");
    biliTarget.classList.add("duet-active");

    duetFlowActive = true;
    duetFlowStartedAt = performance.now();
    resetPointerTracking();

    fadeAudioTo(bgm, 0, 420, true, false);

    /*
       完整播放现有 BGM-pipawithbili.mp3。
       不设置 12 秒上限，也不主动截断。
       音乐自然播完后才进入下一段对白。
    */
    duetAudio.pause();
    duetAudio.currentTime = 0;
    duetAudio.volume = 0.72;
    duetAudio.onended = finishInstrumentScene;
    safePlay(duetAudio);
}

async function finishInstrumentScene() {
    if (state !== "duet-playing") {
        return;
    }

    state = "instrument-ending";
    duetAudio.onended = null;

    /*
       合奏自然结束后，停止固定风线。
    */
    duetFlowActive = false;

    pipaTarget.classList.remove("duet-active");
    biliTarget.classList.remove("duet-active");

    /*
       留一点很短的余韵，再恢复正常画面。
    */
    await wait(280);

    game.classList.remove("duet-flow-mode");
    instruments.classList.add("hidden");
    instruments.setAttribute("aria-hidden", "true");

    bgm.volume = 0;
    safePlay(bgm);
    fadeAudioTo(bgm, 0.18, 800);

    await wait(520);

    startDialogue(DIALOGUE_AFTER, startCarving);
}

async function startCarving() {
    state = "carving";
    game.classList.remove("instrument-focus");
    hideTip();
    instruments.classList.add("hidden");
    masonA.classList.remove("active", "dim");
    masonB.classList.remove("active", "dim");
    fadeAudioTo(bgm, 0.11, 350);

    await wait(360);
    playChiselStrike();
    showAmbientText("你从新凿出的沟槽间穿过，把细小的石粉卷向远处。", 1500);
    await wait(760);
    playChiselStrike();
    await wait(640);
    playChiselStrike();
    await wait(280);

    backgroundNext.src = CONFIG.backgrounds.finishedNoColor;
    backgroundNext.classList.add("show");

    await wait(1500);
    background.src = CONFIG.backgrounds.finishedNoColor;
    backgroundNext.classList.remove("show");
    fadeAudioTo(bgm, 0.18, 850);

    await wait(420);
    startDialogue(DIALOGUE_FINISHED, revealPaintedGrotto);
}

async function revealPaintedGrotto() {
    state = "painting-transition";
    masonA.classList.add("fade-out");
    masonB.classList.add("fade-out");
    backgroundNext.src = CONFIG.backgrounds.finished;
    backgroundNext.classList.add("show");

    await wait(1250);
    background.src = CONFIG.backgrounds.finished;
    backgroundNext.classList.remove("show");

    await showCenterSequence([
        { text: "很久以后。", ms: 1200 },
        { text: "你还在。", ms: 1200 },
        { text: "你仍是那阵风。", ms: 1450 },
        { text: "风又吹了起来。", ms: 1350 }
    ]);

    startErosion();
}

function playChiselStrike() {
    chiselAudio.pause();
    chiselAudio.currentTime = 0;
    safePlay(chiselAudio);
}

function startErosion() {
    state = "erosion";
    game.classList.remove("instrument-focus");
    erosionEnabled = false;
    erosionProgress = 0;
    erosionCheckCounter = 0;
    erosionThresholdsShown.clear();
    background.src = CONFIG.backgrounds.modern;
    erosionCanvas.classList.remove("hidden");
    erosionCanvas.style.opacity = "1";

    const ancientImage = new Image();
    ancientImage.onload = () => {
        erosionCtx.clearRect(0, 0, CONFIG.size.width, CONFIG.size.height);
        erosionCtx.imageSmoothingEnabled = false;
        erosionCtx.drawImage(ancientImage, 0, 0, CONFIG.size.width, CONFIG.size.height);

        maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
        maskCtx.fillStyle = "#fff";
        maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);

        windLoop.currentTime = 0;
        safePlay(windLoop);
        fadeAudioTo(bgm, 0.12, 700);
        showTip("让风吹过石壁");
        resetPointerTracking();

        setTimeout(() => {
            erosionEnabled = true;
        }, 420);
    };
    ancientImage.src = CONFIG.backgrounds.finished;
}

function erodeAt(x, y) {
    const radius = CONFIG.erosionBrushRadius;
    const grid = 12;

    for (let dx = -radius; dx <= radius; dx += grid) {
        for (let dy = -radius; dy <= radius; dy += grid) {
            if (dx * dx + dy * dy > radius * radius || Math.random() > 0.56) {
                continue;
            }

            const size = 10 + Math.floor(Math.random() * 10);
            erosionCtx.clearRect(
                Math.round((x + dx) / 4) * 4,
                Math.round((y + dy) / 4) * 4,
                size,
                size
            );
        }
    }

    const mx = x / CONFIG.size.width * maskCanvas.width;
    const my = y / CONFIG.size.height * maskCanvas.height;
    const mr = radius / CONFIG.size.width * maskCanvas.width;
    maskCtx.save();
    maskCtx.globalCompositeOperation = "destination-out";
    maskCtx.beginPath();
    maskCtx.arc(mx, my, Math.max(2.6, mr), 0, Math.PI * 2);
    maskCtx.fill();
    maskCtx.restore();

    erosionCheckCounter += 1;
    if (erosionCheckCounter % 8 === 0) {
        updateErosionProgress();
    }
}

function updateErosionProgress() {
    const data = maskCtx.getImageData(0, 0, maskCanvas.width, maskCanvas.height).data;
    let remaining = 0;
    const total = maskCanvas.width * maskCanvas.height;

    for (let index = 3; index < data.length; index += 4) {
        if (data[index] > 20) {
            remaining += 1;
        }
    }

    erosionProgress = 1 - remaining / total;
    const milestones = [
        [0.18, "一年。"],
        [0.34, "十年。"],
        [0.50, "百年。"],
        [0.64, "很久，很久。"],
        [0.70, "风还在吹。"]
    ];

    milestones.forEach(([threshold, text]) => {
        if (erosionProgress >= threshold && !erosionThresholdsShown.has(threshold)) {
            erosionThresholdsShown.add(threshold);
            showAmbientText(text, 1050);
        }
    });

    if (erosionProgress >= CONFIG.erosionFinishAt) {
        finishErosion();
    }
}

async function finishErosion() {
    if (!erosionEnabled) {
        return;
    }

    erosionEnabled = false;
    state = "ending";
    hideTip();
    erosionCanvas.style.opacity = "0";
    fadeAudioTo(windLoop, 0, 900, true);
    fadeAudioTo(bgm, 0.16, 900);

    await wait(1350);
    await showCenterSequence([
        { text: "风把声音带到这里。", ms: 1500 },
        { text: "也把石上的痕迹，一点一点带走。", ms: 1950 },
        { text: "可那些曾经相遇的声音，并没有完全消失。", ms: 2050 },
        { text: "我们今天仍能看见它们。", ms: 1650 }
    ]);

    await showCenterSequence([
        { text: "一队游学的学生停在石壁前。", ms: 1400 }
    ]);

    startStudyDialogue(STUDY_DIALOGUE, finishStudySequence);
}

function startStudyDialogue(dialogue, callback) {
    state = "study-dialogue";
    studyDialogueIndex = 0;
    studyDialogueCallback = callback;
    studyDialogue._lines = dialogue;
    studyDialogue.classList.remove("hidden");
    showStudyDialogueLine();
}

function showStudyDialogueLine() {
    clearStudyTyping();
    const lines = studyDialogue._lines || [];

    if (studyDialogueIndex >= lines.length) {
        studyDialogue.classList.add("hidden");
        const callback = studyDialogueCallback;
        studyDialogueCallback = null;
        if (callback) {
            callback();
        }
        return;
    }

    const line = lines[studyDialogueIndex];
    studySpeaker.textContent = line.speaker;
    studyFullText = line.text;
    studyText.textContent = "";
    studyTypingFinished = false;

    let index = 0;
    studyTypingTimer = setInterval(() => {
        index += 1;
        studyText.textContent = studyFullText.slice(0, index);
        if (index >= studyFullText.length) {
            finishStudyTyping();
        }
    }, CONFIG.typingSpeed);
}

function finishStudyTyping() {
    clearStudyTyping();
    studyText.textContent = studyFullText;
    studyTypingFinished = true;
}

function handleStudyDialogueClick() {
    if (!studyTypingFinished) {
        finishStudyTyping();
        return;
    }

    studyDialogueIndex += 1;
    showStudyDialogueLine();
}

function clearStudyTyping() {
    if (studyTypingTimer) {
        clearInterval(studyTypingTimer);
        studyTypingTimer = null;
    }
}

async function finishStudySequence() {
    state = "study-ending";
    windBurst.currentTime = 0;
    windBurst.volume = 0.18;
    safePlay(windBurst);

    await showCenterSequence([
        { text: "你轻轻掠过他们的发梢。", ms: 1500 },
        { text: "然后继续向前。", ms: 1500 }
    ]);

    endCard.classList.remove("hidden");
}

function addWindPoint(x, y) {
    const isTitle = state === "title";
    const isErosion = state === "erosion";
    const isSandMode = isTitle || isErosion;

    if (previousWindPoint) {
        const dx = x - previousWindPoint.x;
        const dy = y - previousWindPoint.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 2) {
            windSegments.push({
                x1: previousWindPoint.x,
                y1: previousWindPoint.y,
                x2: x,
                y2: y,
                life: isTitle ? 1.22 : 1,
                sand: isSandMode,
                spread: isTitle ? 1.85 : 1,
                thickness: isTitle ? 1.35 : 1
            });

            /*
               标题页故意让风沙覆盖范围更大：
               粒子更多、散布更宽、存留稍久。
            */
            const particleCount = isTitle ? 7 : (isErosion ? 3 : 2);

            for (let index = 0; index < particleCount; index += 1) {
                windParticles.push({
                    x: x + (Math.random() - 0.5) * (isTitle ? 92 : 44),
                    y: y + (Math.random() - 0.5) * (isTitle ? 62 : 34),
                    vx: -(isTitle ? 0.9 : 0.55) - Math.random() * (isTitle ? 1.25 : 0.9),
                    vy: (Math.random() - 0.5) * (isTitle ? 0.9 : 0.55),
                    life: isTitle ? 1.2 : 1,
                    sand: isSandMode,
                    size: isTitle ? 3 + Math.floor(Math.random() * 3) : 3
                });
            }
        }
    }

    previousWindPoint = { x, y };

    const maxSegments = isTitle ? 190 : 110;
    const maxParticles = isTitle ? 280 : 140;

    if (windSegments.length > maxSegments) {
        windSegments.splice(0, windSegments.length - maxSegments);
    }

    if (windParticles.length > maxParticles) {
        windParticles.splice(0, windParticles.length - maxParticles);
    }
}


/* =========================================================
   合奏风线
   ---------------------------------------------------------
   在第二轮合奏播放期间，从曲项琵琶附近向觱篥附近绘制
   多条缓慢流动的弧形气流。玩家自己的鼠标风轨迹仍会
   同时存在。
   ========================================================= */

function getElementFlowPoint(element, side = "center") {
    const rect = getLogicalRect(element);

    if (side === "right") {
        return {
            x: rect.x + rect.width * 0.72,
            y: rect.y + rect.height * 0.46
        };
    }

    if (side === "left") {
        return {
            x: rect.x + rect.width * 0.28,
            y: rect.y + rect.height * 0.48
        };
    }

    return {
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2
    };
}

function quadraticPoint(p0, p1, p2, t) {
    const oneMinusT = 1 - t;

    return {
        x:
            oneMinusT * oneMinusT * p0.x +
            2 * oneMinusT * t * p1.x +
            t * t * p2.x,

        y:
            oneMinusT * oneMinusT * p0.y +
            2 * oneMinusT * t * p1.y +
            t * t * p2.y
    };
}

function drawDuetFlow(now) {
    if (!duetFlowActive || state !== "duet-playing") {
        return;
    }

    const start = getElementFlowPoint(pipaTarget, "right");
    const end = getElementFlowPoint(biliTarget, "left");
    const elapsed = now - duetFlowStartedAt;

    const middleX = (start.x + end.x) / 2;
    const middleY =
        (start.y + end.y) / 2
        - 34
        + Math.sin(elapsed * 0.0015) * 7;

    const strandOffsets = [-18, -9, 0, 9, 18];

    windCtx.save();
    windCtx.lineCap = "round";

    strandOffsets.forEach((offset, index) => {
        const distanceFromCenter = Math.abs(index - 2);
        const strength = 1 - distanceFromCenter * 0.18;

        const p0 = {
            x: start.x,
            y: start.y + offset
        };

        const p1 = {
            x: middleX,
            y: middleY + offset * 0.55
        };

        const p2 = {
            x: end.x,
            y: end.y + offset
        };

        /*
           虚线偏移随时间变化，因此气流看起来会持续从琵琶
           向觱篥方向缓慢流动，而不是一条静止的连接线。
        */
        windCtx.setLineDash([18, 16]);
        windCtx.lineDashOffset =
            -(elapsed * 0.035 + index * 13);

        windCtx.strokeStyle =
            `rgba(233, 213, 176, ${0.15 * strength})`;

        windCtx.lineWidth =
            index === 2 ? 2.1 : 1.2;

        windCtx.beginPath();
        windCtx.moveTo(p0.x, p0.y);
        windCtx.quadraticCurveTo(
            p1.x,
            p1.y,
            p2.x,
            p2.y
        );
        windCtx.stroke();

        /*
           少量砂粒沿同一条曲线缓慢移动。
        */
        const particleT =
            ((elapsed * 0.00012) + index * 0.19) % 1;

        const particle =
            quadraticPoint(p0, p1, p2, particleT);

        const particleAlpha =
            0.14 + 0.16 * Math.sin(particleT * Math.PI);

        windCtx.fillStyle =
            `rgba(218, 183, 127, ${particleAlpha})`;

        const particleSize =
            index === 2 ? 4 : 3;

        windCtx.fillRect(
            Math.round(particle.x / 2) * 2,
            Math.round(particle.y / 2) * 2,
            particleSize,
            particleSize
        );
    });

    windCtx.setLineDash([]);
    windCtx.restore();
}

function drawWind() {
    windCtx.clearRect(0, 0, CONFIG.size.width, CONFIG.size.height);
    windCtx.lineCap = "round";

    /*
       合奏期间的固定引导气流。
       与玩家鼠标产生的自由风轨迹同时绘制。
    */
    drawDuetFlow(performance.now());

    windSegments.forEach((segment) => {
        segment.life -= 0.032;

        const dx = segment.x2 - segment.x1;
        const dy = segment.y2 - segment.y1;
        const length = Math.max(1, Math.hypot(dx, dy));
        const nx = -dy / length;
        const ny = dx / length;

        const spread = segment.spread || 1;
        const offsets = [-22, -14, -7, 0, 7, 14, 22].map((value) => value * spread);

        offsets.forEach((offset, index) => {
            const strength = Math.max(0.12, 1 - Math.abs(offset) / (39 * spread));
            const alphaBase = segment.sand ? 0.25 : 0.25;
            const alpha = Math.max(0, segment.life) * alphaBase * strength;

            windCtx.strokeStyle = segment.sand
                ? "rgba(220, 188, 132," + alpha + ")"
                : "rgba(239, 230, 207," + alpha + ")";

            const centerIndex = Math.floor(offsets.length / 2);
            windCtx.lineWidth = index === centerIndex
                ? 2.7 * (segment.thickness || 1)
                : 1.25 * (segment.thickness || 1);

            const x1 = segment.x1 + nx * offset;
            const y1 = segment.y1 + ny * offset;
            const x2 = segment.x2 + nx * offset;
            const y2 = segment.y2 + ny * offset;

            windCtx.beginPath();
            windCtx.moveTo(x1, y1);
            windCtx.quadraticCurveTo(
                (x1 + x2) / 2,
                (y1 + y2) / 2 - 4,
                x2,
                y2
            );
            windCtx.stroke();
        });
    });

    windParticles.forEach((particle) => {
        particle.life -= 0.035;
        particle.x += particle.vx;
        particle.y += particle.vy;

        const alpha = Math.max(0, particle.life) * (particle.sand ? 0.43 : 0.34);

        windCtx.fillStyle = particle.sand
            ? "rgba(205, 166, 105," + alpha + ")"
            : "rgba(239, 230, 207," + alpha + ")";

        const size = particle.size || 3;

        windCtx.fillRect(
            Math.round(particle.x / 2) * 2,
            Math.round(particle.y / 2) * 2,
            size,
            size
        );
    });

    windSegments = windSegments.filter((segment) => segment.life > 0);
    windParticles = windParticles.filter((particle) => particle.life > 0);

    requestAnimationFrame(drawWind);
}

function showTip(text) {
    sceneTip.querySelector(".prompt-text").textContent = text;
    sceneTip.classList.remove("hidden");
}

function hideTip() {
    sceneTip.classList.add("hidden");
}

function showAmbientText(text, duration = 1150) {
    clearTimeout(showAmbientText.timer);
    ambientText.textContent = text;
    ambientText.classList.remove("hidden");

    requestAnimationFrame(() => {
        ambientText.classList.add("show");
    });

    showAmbientText.timer = setTimeout(() => {
        ambientText.classList.remove("show");
        setTimeout(() => {
            if (!ambientText.classList.contains("show")) {
                ambientText.classList.add("hidden");
            }
        }, 360);
    }, duration);
}

async function showCenterSequence(items) {
    centerText.classList.remove("hidden");

    for (const item of items) {
        centerText.style.opacity = "0";
        centerText.textContent = item.text;
        await wait(120);
        centerText.style.opacity = "1";
        await wait(item.ms);
        centerText.style.opacity = "0";
        await wait(300);
    }

    centerText.classList.add("hidden");
}

function safePlay(audio) {
    audio.play().catch(() => {});
}

function fadeAudioTo(audio, targetVolume, duration, pauseAtEnd = false, resetAtEnd = true) {
    if (audio._fadeTimer) {
        clearInterval(audio._fadeTimer);
    }

    const startVolume = audio.volume;
    const steps = Math.max(1, Math.round(duration / 40));
    let step = 0;

    audio._fadeTimer = setInterval(() => {
        step += 1;
        audio.volume = startVolume + (targetVolume - startVolume) * (step / steps);

        if (step >= steps) {
            clearInterval(audio._fadeTimer);
            audio._fadeTimer = null;
            audio.volume = targetVolume;
            if (pauseAtEnd) {
                audio.pause();
                if (resetAtEnd) {
                    audio.currentTime = 0;
                }
            }
        }
    }, duration / steps);
}

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function drawAlmond(centerX, centerY, halfWidth, halfHeight) {
    eyeCtx.beginPath();
    eyeCtx.moveTo(centerX - halfWidth, centerY);
    eyeCtx.bezierCurveTo(
        centerX - halfWidth * 0.55,
        centerY - halfHeight,
        centerX + halfWidth * 0.55,
        centerY - halfHeight,
        centerX + halfWidth,
        centerY
    );
    eyeCtx.bezierCurveTo(
        centerX + halfWidth * 0.55,
        centerY + halfHeight,
        centerX - halfWidth * 0.55,
        centerY + halfHeight,
        centerX - halfWidth,
        centerY
    );
    eyeCtx.closePath();
    eyeCtx.fill();
}

function drawEye(openAmount) {
    const width = CONFIG.size.width;
    const height = CONFIG.size.height;
    const eased = openAmount * openAmount * (3 - 2 * openAmount);
    const halfWidth = 36 + 790 * eased;
    const halfHeight = 0.7 + 440 * eased;

    eyeCtx.clearRect(0, 0, width, height);
    eyeCtx.globalCompositeOperation = "source-over";
    eyeCtx.fillStyle = "#000";
    eyeCtx.fillRect(0, 0, width, height);
    eyeCtx.save();
    eyeCtx.globalCompositeOperation = "destination-out";
    eyeCtx.fillStyle = "#000";
    drawAlmond(width / 2, height / 2, halfWidth, halfHeight);
    eyeCtx.restore();
}

function animateEye(from, to, duration) {
    return new Promise((resolve) => {
        const start = performance.now();

        function frame(now) {
            const progress = Math.min(1, (now - start) / duration);
            drawEye(from + (to - from) * progress);

            if (progress < 1) {
                requestAnimationFrame(frame);
            } else {
                resolve();
            }
        }

        requestAnimationFrame(frame);
    });
}

init();

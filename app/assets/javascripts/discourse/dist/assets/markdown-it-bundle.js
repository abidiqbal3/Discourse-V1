/*! markdown-it 13.0.1 https://github.com/markdown-it/markdown-it @license MIT */
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, 
  global.markdownit = factory());
})(this, (function() {
  "use strict";
  function createCommonjsModule(fn, basedir, module) {
    return module = {
      path: basedir,
      exports: {},
      require: function(path, base) {
        return commonjsRequire(path, base === undefined || base === null ? module.path : base);
      }
    }, fn(module, module.exports), module.exports;
  }
  function getAugmentedNamespace(n) {
    if (n.__esModule) return n;
    var a = Object.defineProperty({}, "__esModule", {
      value: true
    });
    Object.keys(n).forEach((function(k) {
      var d = Object.getOwnPropertyDescriptor(n, k);
      Object.defineProperty(a, k, d.get ? d : {
        enumerable: true,
        get: function() {
          return n[k];
        }
      });
    }));
    return a;
  }
  function commonjsRequire() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }
  var require$$0 = {
    Aacute: "\xc1",
    aacute: "\xe1",
    Abreve: "\u0102",
    abreve: "\u0103",
    ac: "\u223e",
    acd: "\u223f",
    acE: "\u223e\u0333",
    Acirc: "\xc2",
    acirc: "\xe2",
    acute: "\xb4",
    Acy: "\u0410",
    acy: "\u0430",
    AElig: "\xc6",
    aelig: "\xe6",
    af: "\u2061",
    Afr: "\ud835\udd04",
    afr: "\ud835\udd1e",
    Agrave: "\xc0",
    agrave: "\xe0",
    alefsym: "\u2135",
    aleph: "\u2135",
    Alpha: "\u0391",
    alpha: "\u03b1",
    Amacr: "\u0100",
    amacr: "\u0101",
    amalg: "\u2a3f",
    amp: "&",
    AMP: "&",
    andand: "\u2a55",
    And: "\u2a53",
    and: "\u2227",
    andd: "\u2a5c",
    andslope: "\u2a58",
    andv: "\u2a5a",
    ang: "\u2220",
    ange: "\u29a4",
    angle: "\u2220",
    angmsdaa: "\u29a8",
    angmsdab: "\u29a9",
    angmsdac: "\u29aa",
    angmsdad: "\u29ab",
    angmsdae: "\u29ac",
    angmsdaf: "\u29ad",
    angmsdag: "\u29ae",
    angmsdah: "\u29af",
    angmsd: "\u2221",
    angrt: "\u221f",
    angrtvb: "\u22be",
    angrtvbd: "\u299d",
    angsph: "\u2222",
    angst: "\xc5",
    angzarr: "\u237c",
    Aogon: "\u0104",
    aogon: "\u0105",
    Aopf: "\ud835\udd38",
    aopf: "\ud835\udd52",
    apacir: "\u2a6f",
    ap: "\u2248",
    apE: "\u2a70",
    ape: "\u224a",
    apid: "\u224b",
    apos: "'",
    ApplyFunction: "\u2061",
    approx: "\u2248",
    approxeq: "\u224a",
    Aring: "\xc5",
    aring: "\xe5",
    Ascr: "\ud835\udc9c",
    ascr: "\ud835\udcb6",
    Assign: "\u2254",
    ast: "*",
    asymp: "\u2248",
    asympeq: "\u224d",
    Atilde: "\xc3",
    atilde: "\xe3",
    Auml: "\xc4",
    auml: "\xe4",
    awconint: "\u2233",
    awint: "\u2a11",
    backcong: "\u224c",
    backepsilon: "\u03f6",
    backprime: "\u2035",
    backsim: "\u223d",
    backsimeq: "\u22cd",
    Backslash: "\u2216",
    Barv: "\u2ae7",
    barvee: "\u22bd",
    barwed: "\u2305",
    Barwed: "\u2306",
    barwedge: "\u2305",
    bbrk: "\u23b5",
    bbrktbrk: "\u23b6",
    bcong: "\u224c",
    Bcy: "\u0411",
    bcy: "\u0431",
    bdquo: "\u201e",
    becaus: "\u2235",
    because: "\u2235",
    Because: "\u2235",
    bemptyv: "\u29b0",
    bepsi: "\u03f6",
    bernou: "\u212c",
    Bernoullis: "\u212c",
    Beta: "\u0392",
    beta: "\u03b2",
    beth: "\u2136",
    between: "\u226c",
    Bfr: "\ud835\udd05",
    bfr: "\ud835\udd1f",
    bigcap: "\u22c2",
    bigcirc: "\u25ef",
    bigcup: "\u22c3",
    bigodot: "\u2a00",
    bigoplus: "\u2a01",
    bigotimes: "\u2a02",
    bigsqcup: "\u2a06",
    bigstar: "\u2605",
    bigtriangledown: "\u25bd",
    bigtriangleup: "\u25b3",
    biguplus: "\u2a04",
    bigvee: "\u22c1",
    bigwedge: "\u22c0",
    bkarow: "\u290d",
    blacklozenge: "\u29eb",
    blacksquare: "\u25aa",
    blacktriangle: "\u25b4",
    blacktriangledown: "\u25be",
    blacktriangleleft: "\u25c2",
    blacktriangleright: "\u25b8",
    blank: "\u2423",
    blk12: "\u2592",
    blk14: "\u2591",
    blk34: "\u2593",
    block: "\u2588",
    bne: "=\u20e5",
    bnequiv: "\u2261\u20e5",
    bNot: "\u2aed",
    bnot: "\u2310",
    Bopf: "\ud835\udd39",
    bopf: "\ud835\udd53",
    bot: "\u22a5",
    bottom: "\u22a5",
    bowtie: "\u22c8",
    boxbox: "\u29c9",
    boxdl: "\u2510",
    boxdL: "\u2555",
    boxDl: "\u2556",
    boxDL: "\u2557",
    boxdr: "\u250c",
    boxdR: "\u2552",
    boxDr: "\u2553",
    boxDR: "\u2554",
    boxh: "\u2500",
    boxH: "\u2550",
    boxhd: "\u252c",
    boxHd: "\u2564",
    boxhD: "\u2565",
    boxHD: "\u2566",
    boxhu: "\u2534",
    boxHu: "\u2567",
    boxhU: "\u2568",
    boxHU: "\u2569",
    boxminus: "\u229f",
    boxplus: "\u229e",
    boxtimes: "\u22a0",
    boxul: "\u2518",
    boxuL: "\u255b",
    boxUl: "\u255c",
    boxUL: "\u255d",
    boxur: "\u2514",
    boxuR: "\u2558",
    boxUr: "\u2559",
    boxUR: "\u255a",
    boxv: "\u2502",
    boxV: "\u2551",
    boxvh: "\u253c",
    boxvH: "\u256a",
    boxVh: "\u256b",
    boxVH: "\u256c",
    boxvl: "\u2524",
    boxvL: "\u2561",
    boxVl: "\u2562",
    boxVL: "\u2563",
    boxvr: "\u251c",
    boxvR: "\u255e",
    boxVr: "\u255f",
    boxVR: "\u2560",
    bprime: "\u2035",
    breve: "\u02d8",
    Breve: "\u02d8",
    brvbar: "\xa6",
    bscr: "\ud835\udcb7",
    Bscr: "\u212c",
    bsemi: "\u204f",
    bsim: "\u223d",
    bsime: "\u22cd",
    bsolb: "\u29c5",
    bsol: "\\",
    bsolhsub: "\u27c8",
    bull: "\u2022",
    bullet: "\u2022",
    bump: "\u224e",
    bumpE: "\u2aae",
    bumpe: "\u224f",
    Bumpeq: "\u224e",
    bumpeq: "\u224f",
    Cacute: "\u0106",
    cacute: "\u0107",
    capand: "\u2a44",
    capbrcup: "\u2a49",
    capcap: "\u2a4b",
    cap: "\u2229",
    Cap: "\u22d2",
    capcup: "\u2a47",
    capdot: "\u2a40",
    CapitalDifferentialD: "\u2145",
    caps: "\u2229\ufe00",
    caret: "\u2041",
    caron: "\u02c7",
    Cayleys: "\u212d",
    ccaps: "\u2a4d",
    Ccaron: "\u010c",
    ccaron: "\u010d",
    Ccedil: "\xc7",
    ccedil: "\xe7",
    Ccirc: "\u0108",
    ccirc: "\u0109",
    Cconint: "\u2230",
    ccups: "\u2a4c",
    ccupssm: "\u2a50",
    Cdot: "\u010a",
    cdot: "\u010b",
    cedil: "\xb8",
    Cedilla: "\xb8",
    cemptyv: "\u29b2",
    cent: "\xa2",
    centerdot: "\xb7",
    CenterDot: "\xb7",
    cfr: "\ud835\udd20",
    Cfr: "\u212d",
    CHcy: "\u0427",
    chcy: "\u0447",
    check: "\u2713",
    checkmark: "\u2713",
    Chi: "\u03a7",
    chi: "\u03c7",
    circ: "\u02c6",
    circeq: "\u2257",
    circlearrowleft: "\u21ba",
    circlearrowright: "\u21bb",
    circledast: "\u229b",
    circledcirc: "\u229a",
    circleddash: "\u229d",
    CircleDot: "\u2299",
    circledR: "\xae",
    circledS: "\u24c8",
    CircleMinus: "\u2296",
    CirclePlus: "\u2295",
    CircleTimes: "\u2297",
    cir: "\u25cb",
    cirE: "\u29c3",
    cire: "\u2257",
    cirfnint: "\u2a10",
    cirmid: "\u2aef",
    cirscir: "\u29c2",
    ClockwiseContourIntegral: "\u2232",
    CloseCurlyDoubleQuote: "\u201d",
    CloseCurlyQuote: "\u2019",
    clubs: "\u2663",
    clubsuit: "\u2663",
    colon: ":",
    Colon: "\u2237",
    Colone: "\u2a74",
    colone: "\u2254",
    coloneq: "\u2254",
    comma: ",",
    commat: "@",
    comp: "\u2201",
    compfn: "\u2218",
    complement: "\u2201",
    complexes: "\u2102",
    cong: "\u2245",
    congdot: "\u2a6d",
    Congruent: "\u2261",
    conint: "\u222e",
    Conint: "\u222f",
    ContourIntegral: "\u222e",
    copf: "\ud835\udd54",
    Copf: "\u2102",
    coprod: "\u2210",
    Coproduct: "\u2210",
    copy: "\xa9",
    COPY: "\xa9",
    copysr: "\u2117",
    CounterClockwiseContourIntegral: "\u2233",
    crarr: "\u21b5",
    cross: "\u2717",
    Cross: "\u2a2f",
    Cscr: "\ud835\udc9e",
    cscr: "\ud835\udcb8",
    csub: "\u2acf",
    csube: "\u2ad1",
    csup: "\u2ad0",
    csupe: "\u2ad2",
    ctdot: "\u22ef",
    cudarrl: "\u2938",
    cudarrr: "\u2935",
    cuepr: "\u22de",
    cuesc: "\u22df",
    cularr: "\u21b6",
    cularrp: "\u293d",
    cupbrcap: "\u2a48",
    cupcap: "\u2a46",
    CupCap: "\u224d",
    cup: "\u222a",
    Cup: "\u22d3",
    cupcup: "\u2a4a",
    cupdot: "\u228d",
    cupor: "\u2a45",
    cups: "\u222a\ufe00",
    curarr: "\u21b7",
    curarrm: "\u293c",
    curlyeqprec: "\u22de",
    curlyeqsucc: "\u22df",
    curlyvee: "\u22ce",
    curlywedge: "\u22cf",
    curren: "\xa4",
    curvearrowleft: "\u21b6",
    curvearrowright: "\u21b7",
    cuvee: "\u22ce",
    cuwed: "\u22cf",
    cwconint: "\u2232",
    cwint: "\u2231",
    cylcty: "\u232d",
    dagger: "\u2020",
    Dagger: "\u2021",
    daleth: "\u2138",
    darr: "\u2193",
    Darr: "\u21a1",
    dArr: "\u21d3",
    dash: "\u2010",
    Dashv: "\u2ae4",
    dashv: "\u22a3",
    dbkarow: "\u290f",
    dblac: "\u02dd",
    Dcaron: "\u010e",
    dcaron: "\u010f",
    Dcy: "\u0414",
    dcy: "\u0434",
    ddagger: "\u2021",
    ddarr: "\u21ca",
    DD: "\u2145",
    dd: "\u2146",
    DDotrahd: "\u2911",
    ddotseq: "\u2a77",
    deg: "\xb0",
    Del: "\u2207",
    Delta: "\u0394",
    delta: "\u03b4",
    demptyv: "\u29b1",
    dfisht: "\u297f",
    Dfr: "\ud835\udd07",
    dfr: "\ud835\udd21",
    dHar: "\u2965",
    dharl: "\u21c3",
    dharr: "\u21c2",
    DiacriticalAcute: "\xb4",
    DiacriticalDot: "\u02d9",
    DiacriticalDoubleAcute: "\u02dd",
    DiacriticalGrave: "`",
    DiacriticalTilde: "\u02dc",
    diam: "\u22c4",
    diamond: "\u22c4",
    Diamond: "\u22c4",
    diamondsuit: "\u2666",
    diams: "\u2666",
    die: "\xa8",
    DifferentialD: "\u2146",
    digamma: "\u03dd",
    disin: "\u22f2",
    div: "\xf7",
    divide: "\xf7",
    divideontimes: "\u22c7",
    divonx: "\u22c7",
    DJcy: "\u0402",
    djcy: "\u0452",
    dlcorn: "\u231e",
    dlcrop: "\u230d",
    dollar: "$",
    Dopf: "\ud835\udd3b",
    dopf: "\ud835\udd55",
    Dot: "\xa8",
    dot: "\u02d9",
    DotDot: "\u20dc",
    doteq: "\u2250",
    doteqdot: "\u2251",
    DotEqual: "\u2250",
    dotminus: "\u2238",
    dotplus: "\u2214",
    dotsquare: "\u22a1",
    doublebarwedge: "\u2306",
    DoubleContourIntegral: "\u222f",
    DoubleDot: "\xa8",
    DoubleDownArrow: "\u21d3",
    DoubleLeftArrow: "\u21d0",
    DoubleLeftRightArrow: "\u21d4",
    DoubleLeftTee: "\u2ae4",
    DoubleLongLeftArrow: "\u27f8",
    DoubleLongLeftRightArrow: "\u27fa",
    DoubleLongRightArrow: "\u27f9",
    DoubleRightArrow: "\u21d2",
    DoubleRightTee: "\u22a8",
    DoubleUpArrow: "\u21d1",
    DoubleUpDownArrow: "\u21d5",
    DoubleVerticalBar: "\u2225",
    DownArrowBar: "\u2913",
    downarrow: "\u2193",
    DownArrow: "\u2193",
    Downarrow: "\u21d3",
    DownArrowUpArrow: "\u21f5",
    DownBreve: "\u0311",
    downdownarrows: "\u21ca",
    downharpoonleft: "\u21c3",
    downharpoonright: "\u21c2",
    DownLeftRightVector: "\u2950",
    DownLeftTeeVector: "\u295e",
    DownLeftVectorBar: "\u2956",
    DownLeftVector: "\u21bd",
    DownRightTeeVector: "\u295f",
    DownRightVectorBar: "\u2957",
    DownRightVector: "\u21c1",
    DownTeeArrow: "\u21a7",
    DownTee: "\u22a4",
    drbkarow: "\u2910",
    drcorn: "\u231f",
    drcrop: "\u230c",
    Dscr: "\ud835\udc9f",
    dscr: "\ud835\udcb9",
    DScy: "\u0405",
    dscy: "\u0455",
    dsol: "\u29f6",
    Dstrok: "\u0110",
    dstrok: "\u0111",
    dtdot: "\u22f1",
    dtri: "\u25bf",
    dtrif: "\u25be",
    duarr: "\u21f5",
    duhar: "\u296f",
    dwangle: "\u29a6",
    DZcy: "\u040f",
    dzcy: "\u045f",
    dzigrarr: "\u27ff",
    Eacute: "\xc9",
    eacute: "\xe9",
    easter: "\u2a6e",
    Ecaron: "\u011a",
    ecaron: "\u011b",
    Ecirc: "\xca",
    ecirc: "\xea",
    ecir: "\u2256",
    ecolon: "\u2255",
    Ecy: "\u042d",
    ecy: "\u044d",
    eDDot: "\u2a77",
    Edot: "\u0116",
    edot: "\u0117",
    eDot: "\u2251",
    ee: "\u2147",
    efDot: "\u2252",
    Efr: "\ud835\udd08",
    efr: "\ud835\udd22",
    eg: "\u2a9a",
    Egrave: "\xc8",
    egrave: "\xe8",
    egs: "\u2a96",
    egsdot: "\u2a98",
    el: "\u2a99",
    Element: "\u2208",
    elinters: "\u23e7",
    ell: "\u2113",
    els: "\u2a95",
    elsdot: "\u2a97",
    Emacr: "\u0112",
    emacr: "\u0113",
    empty: "\u2205",
    emptyset: "\u2205",
    EmptySmallSquare: "\u25fb",
    emptyv: "\u2205",
    EmptyVerySmallSquare: "\u25ab",
    emsp13: "\u2004",
    emsp14: "\u2005",
    emsp: "\u2003",
    ENG: "\u014a",
    eng: "\u014b",
    ensp: "\u2002",
    Eogon: "\u0118",
    eogon: "\u0119",
    Eopf: "\ud835\udd3c",
    eopf: "\ud835\udd56",
    epar: "\u22d5",
    eparsl: "\u29e3",
    eplus: "\u2a71",
    epsi: "\u03b5",
    Epsilon: "\u0395",
    epsilon: "\u03b5",
    epsiv: "\u03f5",
    eqcirc: "\u2256",
    eqcolon: "\u2255",
    eqsim: "\u2242",
    eqslantgtr: "\u2a96",
    eqslantless: "\u2a95",
    Equal: "\u2a75",
    equals: "=",
    EqualTilde: "\u2242",
    equest: "\u225f",
    Equilibrium: "\u21cc",
    equiv: "\u2261",
    equivDD: "\u2a78",
    eqvparsl: "\u29e5",
    erarr: "\u2971",
    erDot: "\u2253",
    escr: "\u212f",
    Escr: "\u2130",
    esdot: "\u2250",
    Esim: "\u2a73",
    esim: "\u2242",
    Eta: "\u0397",
    eta: "\u03b7",
    ETH: "\xd0",
    eth: "\xf0",
    Euml: "\xcb",
    euml: "\xeb",
    euro: "\u20ac",
    excl: "!",
    exist: "\u2203",
    Exists: "\u2203",
    expectation: "\u2130",
    exponentiale: "\u2147",
    ExponentialE: "\u2147",
    fallingdotseq: "\u2252",
    Fcy: "\u0424",
    fcy: "\u0444",
    female: "\u2640",
    ffilig: "\ufb03",
    fflig: "\ufb00",
    ffllig: "\ufb04",
    Ffr: "\ud835\udd09",
    ffr: "\ud835\udd23",
    filig: "\ufb01",
    FilledSmallSquare: "\u25fc",
    FilledVerySmallSquare: "\u25aa",
    fjlig: "fj",
    flat: "\u266d",
    fllig: "\ufb02",
    fltns: "\u25b1",
    fnof: "\u0192",
    Fopf: "\ud835\udd3d",
    fopf: "\ud835\udd57",
    forall: "\u2200",
    ForAll: "\u2200",
    fork: "\u22d4",
    forkv: "\u2ad9",
    Fouriertrf: "\u2131",
    fpartint: "\u2a0d",
    frac12: "\xbd",
    frac13: "\u2153",
    frac14: "\xbc",
    frac15: "\u2155",
    frac16: "\u2159",
    frac18: "\u215b",
    frac23: "\u2154",
    frac25: "\u2156",
    frac34: "\xbe",
    frac35: "\u2157",
    frac38: "\u215c",
    frac45: "\u2158",
    frac56: "\u215a",
    frac58: "\u215d",
    frac78: "\u215e",
    frasl: "\u2044",
    frown: "\u2322",
    fscr: "\ud835\udcbb",
    Fscr: "\u2131",
    gacute: "\u01f5",
    Gamma: "\u0393",
    gamma: "\u03b3",
    Gammad: "\u03dc",
    gammad: "\u03dd",
    gap: "\u2a86",
    Gbreve: "\u011e",
    gbreve: "\u011f",
    Gcedil: "\u0122",
    Gcirc: "\u011c",
    gcirc: "\u011d",
    Gcy: "\u0413",
    gcy: "\u0433",
    Gdot: "\u0120",
    gdot: "\u0121",
    ge: "\u2265",
    gE: "\u2267",
    gEl: "\u2a8c",
    gel: "\u22db",
    geq: "\u2265",
    geqq: "\u2267",
    geqslant: "\u2a7e",
    gescc: "\u2aa9",
    ges: "\u2a7e",
    gesdot: "\u2a80",
    gesdoto: "\u2a82",
    gesdotol: "\u2a84",
    gesl: "\u22db\ufe00",
    gesles: "\u2a94",
    Gfr: "\ud835\udd0a",
    gfr: "\ud835\udd24",
    gg: "\u226b",
    Gg: "\u22d9",
    ggg: "\u22d9",
    gimel: "\u2137",
    GJcy: "\u0403",
    gjcy: "\u0453",
    gla: "\u2aa5",
    gl: "\u2277",
    glE: "\u2a92",
    glj: "\u2aa4",
    gnap: "\u2a8a",
    gnapprox: "\u2a8a",
    gne: "\u2a88",
    gnE: "\u2269",
    gneq: "\u2a88",
    gneqq: "\u2269",
    gnsim: "\u22e7",
    Gopf: "\ud835\udd3e",
    gopf: "\ud835\udd58",
    grave: "`",
    GreaterEqual: "\u2265",
    GreaterEqualLess: "\u22db",
    GreaterFullEqual: "\u2267",
    GreaterGreater: "\u2aa2",
    GreaterLess: "\u2277",
    GreaterSlantEqual: "\u2a7e",
    GreaterTilde: "\u2273",
    Gscr: "\ud835\udca2",
    gscr: "\u210a",
    gsim: "\u2273",
    gsime: "\u2a8e",
    gsiml: "\u2a90",
    gtcc: "\u2aa7",
    gtcir: "\u2a7a",
    gt: ">",
    GT: ">",
    Gt: "\u226b",
    gtdot: "\u22d7",
    gtlPar: "\u2995",
    gtquest: "\u2a7c",
    gtrapprox: "\u2a86",
    gtrarr: "\u2978",
    gtrdot: "\u22d7",
    gtreqless: "\u22db",
    gtreqqless: "\u2a8c",
    gtrless: "\u2277",
    gtrsim: "\u2273",
    gvertneqq: "\u2269\ufe00",
    gvnE: "\u2269\ufe00",
    Hacek: "\u02c7",
    hairsp: "\u200a",
    half: "\xbd",
    hamilt: "\u210b",
    HARDcy: "\u042a",
    hardcy: "\u044a",
    harrcir: "\u2948",
    harr: "\u2194",
    hArr: "\u21d4",
    harrw: "\u21ad",
    Hat: "^",
    hbar: "\u210f",
    Hcirc: "\u0124",
    hcirc: "\u0125",
    hearts: "\u2665",
    heartsuit: "\u2665",
    hellip: "\u2026",
    hercon: "\u22b9",
    hfr: "\ud835\udd25",
    Hfr: "\u210c",
    HilbertSpace: "\u210b",
    hksearow: "\u2925",
    hkswarow: "\u2926",
    hoarr: "\u21ff",
    homtht: "\u223b",
    hookleftarrow: "\u21a9",
    hookrightarrow: "\u21aa",
    hopf: "\ud835\udd59",
    Hopf: "\u210d",
    horbar: "\u2015",
    HorizontalLine: "\u2500",
    hscr: "\ud835\udcbd",
    Hscr: "\u210b",
    hslash: "\u210f",
    Hstrok: "\u0126",
    hstrok: "\u0127",
    HumpDownHump: "\u224e",
    HumpEqual: "\u224f",
    hybull: "\u2043",
    hyphen: "\u2010",
    Iacute: "\xcd",
    iacute: "\xed",
    ic: "\u2063",
    Icirc: "\xce",
    icirc: "\xee",
    Icy: "\u0418",
    icy: "\u0438",
    Idot: "\u0130",
    IEcy: "\u0415",
    iecy: "\u0435",
    iexcl: "\xa1",
    iff: "\u21d4",
    ifr: "\ud835\udd26",
    Ifr: "\u2111",
    Igrave: "\xcc",
    igrave: "\xec",
    ii: "\u2148",
    iiiint: "\u2a0c",
    iiint: "\u222d",
    iinfin: "\u29dc",
    iiota: "\u2129",
    IJlig: "\u0132",
    ijlig: "\u0133",
    Imacr: "\u012a",
    imacr: "\u012b",
    image: "\u2111",
    ImaginaryI: "\u2148",
    imagline: "\u2110",
    imagpart: "\u2111",
    imath: "\u0131",
    Im: "\u2111",
    imof: "\u22b7",
    imped: "\u01b5",
    Implies: "\u21d2",
    incare: "\u2105",
    in: "\u2208",
    infin: "\u221e",
    infintie: "\u29dd",
    inodot: "\u0131",
    intcal: "\u22ba",
    int: "\u222b",
    Int: "\u222c",
    integers: "\u2124",
    Integral: "\u222b",
    intercal: "\u22ba",
    Intersection: "\u22c2",
    intlarhk: "\u2a17",
    intprod: "\u2a3c",
    InvisibleComma: "\u2063",
    InvisibleTimes: "\u2062",
    IOcy: "\u0401",
    iocy: "\u0451",
    Iogon: "\u012e",
    iogon: "\u012f",
    Iopf: "\ud835\udd40",
    iopf: "\ud835\udd5a",
    Iota: "\u0399",
    iota: "\u03b9",
    iprod: "\u2a3c",
    iquest: "\xbf",
    iscr: "\ud835\udcbe",
    Iscr: "\u2110",
    isin: "\u2208",
    isindot: "\u22f5",
    isinE: "\u22f9",
    isins: "\u22f4",
    isinsv: "\u22f3",
    isinv: "\u2208",
    it: "\u2062",
    Itilde: "\u0128",
    itilde: "\u0129",
    Iukcy: "\u0406",
    iukcy: "\u0456",
    Iuml: "\xcf",
    iuml: "\xef",
    Jcirc: "\u0134",
    jcirc: "\u0135",
    Jcy: "\u0419",
    jcy: "\u0439",
    Jfr: "\ud835\udd0d",
    jfr: "\ud835\udd27",
    jmath: "\u0237",
    Jopf: "\ud835\udd41",
    jopf: "\ud835\udd5b",
    Jscr: "\ud835\udca5",
    jscr: "\ud835\udcbf",
    Jsercy: "\u0408",
    jsercy: "\u0458",
    Jukcy: "\u0404",
    jukcy: "\u0454",
    Kappa: "\u039a",
    kappa: "\u03ba",
    kappav: "\u03f0",
    Kcedil: "\u0136",
    kcedil: "\u0137",
    Kcy: "\u041a",
    kcy: "\u043a",
    Kfr: "\ud835\udd0e",
    kfr: "\ud835\udd28",
    kgreen: "\u0138",
    KHcy: "\u0425",
    khcy: "\u0445",
    KJcy: "\u040c",
    kjcy: "\u045c",
    Kopf: "\ud835\udd42",
    kopf: "\ud835\udd5c",
    Kscr: "\ud835\udca6",
    kscr: "\ud835\udcc0",
    lAarr: "\u21da",
    Lacute: "\u0139",
    lacute: "\u013a",
    laemptyv: "\u29b4",
    lagran: "\u2112",
    Lambda: "\u039b",
    lambda: "\u03bb",
    lang: "\u27e8",
    Lang: "\u27ea",
    langd: "\u2991",
    langle: "\u27e8",
    lap: "\u2a85",
    Laplacetrf: "\u2112",
    laquo: "\xab",
    larrb: "\u21e4",
    larrbfs: "\u291f",
    larr: "\u2190",
    Larr: "\u219e",
    lArr: "\u21d0",
    larrfs: "\u291d",
    larrhk: "\u21a9",
    larrlp: "\u21ab",
    larrpl: "\u2939",
    larrsim: "\u2973",
    larrtl: "\u21a2",
    latail: "\u2919",
    lAtail: "\u291b",
    lat: "\u2aab",
    late: "\u2aad",
    lates: "\u2aad\ufe00",
    lbarr: "\u290c",
    lBarr: "\u290e",
    lbbrk: "\u2772",
    lbrace: "{",
    lbrack: "[",
    lbrke: "\u298b",
    lbrksld: "\u298f",
    lbrkslu: "\u298d",
    Lcaron: "\u013d",
    lcaron: "\u013e",
    Lcedil: "\u013b",
    lcedil: "\u013c",
    lceil: "\u2308",
    lcub: "{",
    Lcy: "\u041b",
    lcy: "\u043b",
    ldca: "\u2936",
    ldquo: "\u201c",
    ldquor: "\u201e",
    ldrdhar: "\u2967",
    ldrushar: "\u294b",
    ldsh: "\u21b2",
    le: "\u2264",
    lE: "\u2266",
    LeftAngleBracket: "\u27e8",
    LeftArrowBar: "\u21e4",
    leftarrow: "\u2190",
    LeftArrow: "\u2190",
    Leftarrow: "\u21d0",
    LeftArrowRightArrow: "\u21c6",
    leftarrowtail: "\u21a2",
    LeftCeiling: "\u2308",
    LeftDoubleBracket: "\u27e6",
    LeftDownTeeVector: "\u2961",
    LeftDownVectorBar: "\u2959",
    LeftDownVector: "\u21c3",
    LeftFloor: "\u230a",
    leftharpoondown: "\u21bd",
    leftharpoonup: "\u21bc",
    leftleftarrows: "\u21c7",
    leftrightarrow: "\u2194",
    LeftRightArrow: "\u2194",
    Leftrightarrow: "\u21d4",
    leftrightarrows: "\u21c6",
    leftrightharpoons: "\u21cb",
    leftrightsquigarrow: "\u21ad",
    LeftRightVector: "\u294e",
    LeftTeeArrow: "\u21a4",
    LeftTee: "\u22a3",
    LeftTeeVector: "\u295a",
    leftthreetimes: "\u22cb",
    LeftTriangleBar: "\u29cf",
    LeftTriangle: "\u22b2",
    LeftTriangleEqual: "\u22b4",
    LeftUpDownVector: "\u2951",
    LeftUpTeeVector: "\u2960",
    LeftUpVectorBar: "\u2958",
    LeftUpVector: "\u21bf",
    LeftVectorBar: "\u2952",
    LeftVector: "\u21bc",
    lEg: "\u2a8b",
    leg: "\u22da",
    leq: "\u2264",
    leqq: "\u2266",
    leqslant: "\u2a7d",
    lescc: "\u2aa8",
    les: "\u2a7d",
    lesdot: "\u2a7f",
    lesdoto: "\u2a81",
    lesdotor: "\u2a83",
    lesg: "\u22da\ufe00",
    lesges: "\u2a93",
    lessapprox: "\u2a85",
    lessdot: "\u22d6",
    lesseqgtr: "\u22da",
    lesseqqgtr: "\u2a8b",
    LessEqualGreater: "\u22da",
    LessFullEqual: "\u2266",
    LessGreater: "\u2276",
    lessgtr: "\u2276",
    LessLess: "\u2aa1",
    lesssim: "\u2272",
    LessSlantEqual: "\u2a7d",
    LessTilde: "\u2272",
    lfisht: "\u297c",
    lfloor: "\u230a",
    Lfr: "\ud835\udd0f",
    lfr: "\ud835\udd29",
    lg: "\u2276",
    lgE: "\u2a91",
    lHar: "\u2962",
    lhard: "\u21bd",
    lharu: "\u21bc",
    lharul: "\u296a",
    lhblk: "\u2584",
    LJcy: "\u0409",
    ljcy: "\u0459",
    llarr: "\u21c7",
    ll: "\u226a",
    Ll: "\u22d8",
    llcorner: "\u231e",
    Lleftarrow: "\u21da",
    llhard: "\u296b",
    lltri: "\u25fa",
    Lmidot: "\u013f",
    lmidot: "\u0140",
    lmoustache: "\u23b0",
    lmoust: "\u23b0",
    lnap: "\u2a89",
    lnapprox: "\u2a89",
    lne: "\u2a87",
    lnE: "\u2268",
    lneq: "\u2a87",
    lneqq: "\u2268",
    lnsim: "\u22e6",
    loang: "\u27ec",
    loarr: "\u21fd",
    lobrk: "\u27e6",
    longleftarrow: "\u27f5",
    LongLeftArrow: "\u27f5",
    Longleftarrow: "\u27f8",
    longleftrightarrow: "\u27f7",
    LongLeftRightArrow: "\u27f7",
    Longleftrightarrow: "\u27fa",
    longmapsto: "\u27fc",
    longrightarrow: "\u27f6",
    LongRightArrow: "\u27f6",
    Longrightarrow: "\u27f9",
    looparrowleft: "\u21ab",
    looparrowright: "\u21ac",
    lopar: "\u2985",
    Lopf: "\ud835\udd43",
    lopf: "\ud835\udd5d",
    loplus: "\u2a2d",
    lotimes: "\u2a34",
    lowast: "\u2217",
    lowbar: "_",
    LowerLeftArrow: "\u2199",
    LowerRightArrow: "\u2198",
    loz: "\u25ca",
    lozenge: "\u25ca",
    lozf: "\u29eb",
    lpar: "(",
    lparlt: "\u2993",
    lrarr: "\u21c6",
    lrcorner: "\u231f",
    lrhar: "\u21cb",
    lrhard: "\u296d",
    lrm: "\u200e",
    lrtri: "\u22bf",
    lsaquo: "\u2039",
    lscr: "\ud835\udcc1",
    Lscr: "\u2112",
    lsh: "\u21b0",
    Lsh: "\u21b0",
    lsim: "\u2272",
    lsime: "\u2a8d",
    lsimg: "\u2a8f",
    lsqb: "[",
    lsquo: "\u2018",
    lsquor: "\u201a",
    Lstrok: "\u0141",
    lstrok: "\u0142",
    ltcc: "\u2aa6",
    ltcir: "\u2a79",
    lt: "<",
    LT: "<",
    Lt: "\u226a",
    ltdot: "\u22d6",
    lthree: "\u22cb",
    ltimes: "\u22c9",
    ltlarr: "\u2976",
    ltquest: "\u2a7b",
    ltri: "\u25c3",
    ltrie: "\u22b4",
    ltrif: "\u25c2",
    ltrPar: "\u2996",
    lurdshar: "\u294a",
    luruhar: "\u2966",
    lvertneqq: "\u2268\ufe00",
    lvnE: "\u2268\ufe00",
    macr: "\xaf",
    male: "\u2642",
    malt: "\u2720",
    maltese: "\u2720",
    Map: "\u2905",
    map: "\u21a6",
    mapsto: "\u21a6",
    mapstodown: "\u21a7",
    mapstoleft: "\u21a4",
    mapstoup: "\u21a5",
    marker: "\u25ae",
    mcomma: "\u2a29",
    Mcy: "\u041c",
    mcy: "\u043c",
    mdash: "\u2014",
    mDDot: "\u223a",
    measuredangle: "\u2221",
    MediumSpace: "\u205f",
    Mellintrf: "\u2133",
    Mfr: "\ud835\udd10",
    mfr: "\ud835\udd2a",
    mho: "\u2127",
    micro: "\xb5",
    midast: "*",
    midcir: "\u2af0",
    mid: "\u2223",
    middot: "\xb7",
    minusb: "\u229f",
    minus: "\u2212",
    minusd: "\u2238",
    minusdu: "\u2a2a",
    MinusPlus: "\u2213",
    mlcp: "\u2adb",
    mldr: "\u2026",
    mnplus: "\u2213",
    models: "\u22a7",
    Mopf: "\ud835\udd44",
    mopf: "\ud835\udd5e",
    mp: "\u2213",
    mscr: "\ud835\udcc2",
    Mscr: "\u2133",
    mstpos: "\u223e",
    Mu: "\u039c",
    mu: "\u03bc",
    multimap: "\u22b8",
    mumap: "\u22b8",
    nabla: "\u2207",
    Nacute: "\u0143",
    nacute: "\u0144",
    nang: "\u2220\u20d2",
    nap: "\u2249",
    napE: "\u2a70\u0338",
    napid: "\u224b\u0338",
    napos: "\u0149",
    napprox: "\u2249",
    natural: "\u266e",
    naturals: "\u2115",
    natur: "\u266e",
    nbsp: "\xa0",
    nbump: "\u224e\u0338",
    nbumpe: "\u224f\u0338",
    ncap: "\u2a43",
    Ncaron: "\u0147",
    ncaron: "\u0148",
    Ncedil: "\u0145",
    ncedil: "\u0146",
    ncong: "\u2247",
    ncongdot: "\u2a6d\u0338",
    ncup: "\u2a42",
    Ncy: "\u041d",
    ncy: "\u043d",
    ndash: "\u2013",
    nearhk: "\u2924",
    nearr: "\u2197",
    neArr: "\u21d7",
    nearrow: "\u2197",
    ne: "\u2260",
    nedot: "\u2250\u0338",
    NegativeMediumSpace: "\u200b",
    NegativeThickSpace: "\u200b",
    NegativeThinSpace: "\u200b",
    NegativeVeryThinSpace: "\u200b",
    nequiv: "\u2262",
    nesear: "\u2928",
    nesim: "\u2242\u0338",
    NestedGreaterGreater: "\u226b",
    NestedLessLess: "\u226a",
    NewLine: "\n",
    nexist: "\u2204",
    nexists: "\u2204",
    Nfr: "\ud835\udd11",
    nfr: "\ud835\udd2b",
    ngE: "\u2267\u0338",
    nge: "\u2271",
    ngeq: "\u2271",
    ngeqq: "\u2267\u0338",
    ngeqslant: "\u2a7e\u0338",
    nges: "\u2a7e\u0338",
    nGg: "\u22d9\u0338",
    ngsim: "\u2275",
    nGt: "\u226b\u20d2",
    ngt: "\u226f",
    ngtr: "\u226f",
    nGtv: "\u226b\u0338",
    nharr: "\u21ae",
    nhArr: "\u21ce",
    nhpar: "\u2af2",
    ni: "\u220b",
    nis: "\u22fc",
    nisd: "\u22fa",
    niv: "\u220b",
    NJcy: "\u040a",
    njcy: "\u045a",
    nlarr: "\u219a",
    nlArr: "\u21cd",
    nldr: "\u2025",
    nlE: "\u2266\u0338",
    nle: "\u2270",
    nleftarrow: "\u219a",
    nLeftarrow: "\u21cd",
    nleftrightarrow: "\u21ae",
    nLeftrightarrow: "\u21ce",
    nleq: "\u2270",
    nleqq: "\u2266\u0338",
    nleqslant: "\u2a7d\u0338",
    nles: "\u2a7d\u0338",
    nless: "\u226e",
    nLl: "\u22d8\u0338",
    nlsim: "\u2274",
    nLt: "\u226a\u20d2",
    nlt: "\u226e",
    nltri: "\u22ea",
    nltrie: "\u22ec",
    nLtv: "\u226a\u0338",
    nmid: "\u2224",
    NoBreak: "\u2060",
    NonBreakingSpace: "\xa0",
    nopf: "\ud835\udd5f",
    Nopf: "\u2115",
    Not: "\u2aec",
    not: "\xac",
    NotCongruent: "\u2262",
    NotCupCap: "\u226d",
    NotDoubleVerticalBar: "\u2226",
    NotElement: "\u2209",
    NotEqual: "\u2260",
    NotEqualTilde: "\u2242\u0338",
    NotExists: "\u2204",
    NotGreater: "\u226f",
    NotGreaterEqual: "\u2271",
    NotGreaterFullEqual: "\u2267\u0338",
    NotGreaterGreater: "\u226b\u0338",
    NotGreaterLess: "\u2279",
    NotGreaterSlantEqual: "\u2a7e\u0338",
    NotGreaterTilde: "\u2275",
    NotHumpDownHump: "\u224e\u0338",
    NotHumpEqual: "\u224f\u0338",
    notin: "\u2209",
    notindot: "\u22f5\u0338",
    notinE: "\u22f9\u0338",
    notinva: "\u2209",
    notinvb: "\u22f7",
    notinvc: "\u22f6",
    NotLeftTriangleBar: "\u29cf\u0338",
    NotLeftTriangle: "\u22ea",
    NotLeftTriangleEqual: "\u22ec",
    NotLess: "\u226e",
    NotLessEqual: "\u2270",
    NotLessGreater: "\u2278",
    NotLessLess: "\u226a\u0338",
    NotLessSlantEqual: "\u2a7d\u0338",
    NotLessTilde: "\u2274",
    NotNestedGreaterGreater: "\u2aa2\u0338",
    NotNestedLessLess: "\u2aa1\u0338",
    notni: "\u220c",
    notniva: "\u220c",
    notnivb: "\u22fe",
    notnivc: "\u22fd",
    NotPrecedes: "\u2280",
    NotPrecedesEqual: "\u2aaf\u0338",
    NotPrecedesSlantEqual: "\u22e0",
    NotReverseElement: "\u220c",
    NotRightTriangleBar: "\u29d0\u0338",
    NotRightTriangle: "\u22eb",
    NotRightTriangleEqual: "\u22ed",
    NotSquareSubset: "\u228f\u0338",
    NotSquareSubsetEqual: "\u22e2",
    NotSquareSuperset: "\u2290\u0338",
    NotSquareSupersetEqual: "\u22e3",
    NotSubset: "\u2282\u20d2",
    NotSubsetEqual: "\u2288",
    NotSucceeds: "\u2281",
    NotSucceedsEqual: "\u2ab0\u0338",
    NotSucceedsSlantEqual: "\u22e1",
    NotSucceedsTilde: "\u227f\u0338",
    NotSuperset: "\u2283\u20d2",
    NotSupersetEqual: "\u2289",
    NotTilde: "\u2241",
    NotTildeEqual: "\u2244",
    NotTildeFullEqual: "\u2247",
    NotTildeTilde: "\u2249",
    NotVerticalBar: "\u2224",
    nparallel: "\u2226",
    npar: "\u2226",
    nparsl: "\u2afd\u20e5",
    npart: "\u2202\u0338",
    npolint: "\u2a14",
    npr: "\u2280",
    nprcue: "\u22e0",
    nprec: "\u2280",
    npreceq: "\u2aaf\u0338",
    npre: "\u2aaf\u0338",
    nrarrc: "\u2933\u0338",
    nrarr: "\u219b",
    nrArr: "\u21cf",
    nrarrw: "\u219d\u0338",
    nrightarrow: "\u219b",
    nRightarrow: "\u21cf",
    nrtri: "\u22eb",
    nrtrie: "\u22ed",
    nsc: "\u2281",
    nsccue: "\u22e1",
    nsce: "\u2ab0\u0338",
    Nscr: "\ud835\udca9",
    nscr: "\ud835\udcc3",
    nshortmid: "\u2224",
    nshortparallel: "\u2226",
    nsim: "\u2241",
    nsime: "\u2244",
    nsimeq: "\u2244",
    nsmid: "\u2224",
    nspar: "\u2226",
    nsqsube: "\u22e2",
    nsqsupe: "\u22e3",
    nsub: "\u2284",
    nsubE: "\u2ac5\u0338",
    nsube: "\u2288",
    nsubset: "\u2282\u20d2",
    nsubseteq: "\u2288",
    nsubseteqq: "\u2ac5\u0338",
    nsucc: "\u2281",
    nsucceq: "\u2ab0\u0338",
    nsup: "\u2285",
    nsupE: "\u2ac6\u0338",
    nsupe: "\u2289",
    nsupset: "\u2283\u20d2",
    nsupseteq: "\u2289",
    nsupseteqq: "\u2ac6\u0338",
    ntgl: "\u2279",
    Ntilde: "\xd1",
    ntilde: "\xf1",
    ntlg: "\u2278",
    ntriangleleft: "\u22ea",
    ntrianglelefteq: "\u22ec",
    ntriangleright: "\u22eb",
    ntrianglerighteq: "\u22ed",
    Nu: "\u039d",
    nu: "\u03bd",
    num: "#",
    numero: "\u2116",
    numsp: "\u2007",
    nvap: "\u224d\u20d2",
    nvdash: "\u22ac",
    nvDash: "\u22ad",
    nVdash: "\u22ae",
    nVDash: "\u22af",
    nvge: "\u2265\u20d2",
    nvgt: ">\u20d2",
    nvHarr: "\u2904",
    nvinfin: "\u29de",
    nvlArr: "\u2902",
    nvle: "\u2264\u20d2",
    nvlt: "<\u20d2",
    nvltrie: "\u22b4\u20d2",
    nvrArr: "\u2903",
    nvrtrie: "\u22b5\u20d2",
    nvsim: "\u223c\u20d2",
    nwarhk: "\u2923",
    nwarr: "\u2196",
    nwArr: "\u21d6",
    nwarrow: "\u2196",
    nwnear: "\u2927",
    Oacute: "\xd3",
    oacute: "\xf3",
    oast: "\u229b",
    Ocirc: "\xd4",
    ocirc: "\xf4",
    ocir: "\u229a",
    Ocy: "\u041e",
    ocy: "\u043e",
    odash: "\u229d",
    Odblac: "\u0150",
    odblac: "\u0151",
    odiv: "\u2a38",
    odot: "\u2299",
    odsold: "\u29bc",
    OElig: "\u0152",
    oelig: "\u0153",
    ofcir: "\u29bf",
    Ofr: "\ud835\udd12",
    ofr: "\ud835\udd2c",
    ogon: "\u02db",
    Ograve: "\xd2",
    ograve: "\xf2",
    ogt: "\u29c1",
    ohbar: "\u29b5",
    ohm: "\u03a9",
    oint: "\u222e",
    olarr: "\u21ba",
    olcir: "\u29be",
    olcross: "\u29bb",
    oline: "\u203e",
    olt: "\u29c0",
    Omacr: "\u014c",
    omacr: "\u014d",
    Omega: "\u03a9",
    omega: "\u03c9",
    Omicron: "\u039f",
    omicron: "\u03bf",
    omid: "\u29b6",
    ominus: "\u2296",
    Oopf: "\ud835\udd46",
    oopf: "\ud835\udd60",
    opar: "\u29b7",
    OpenCurlyDoubleQuote: "\u201c",
    OpenCurlyQuote: "\u2018",
    operp: "\u29b9",
    oplus: "\u2295",
    orarr: "\u21bb",
    Or: "\u2a54",
    or: "\u2228",
    ord: "\u2a5d",
    order: "\u2134",
    orderof: "\u2134",
    ordf: "\xaa",
    ordm: "\xba",
    origof: "\u22b6",
    oror: "\u2a56",
    orslope: "\u2a57",
    orv: "\u2a5b",
    oS: "\u24c8",
    Oscr: "\ud835\udcaa",
    oscr: "\u2134",
    Oslash: "\xd8",
    oslash: "\xf8",
    osol: "\u2298",
    Otilde: "\xd5",
    otilde: "\xf5",
    otimesas: "\u2a36",
    Otimes: "\u2a37",
    otimes: "\u2297",
    Ouml: "\xd6",
    ouml: "\xf6",
    ovbar: "\u233d",
    OverBar: "\u203e",
    OverBrace: "\u23de",
    OverBracket: "\u23b4",
    OverParenthesis: "\u23dc",
    para: "\xb6",
    parallel: "\u2225",
    par: "\u2225",
    parsim: "\u2af3",
    parsl: "\u2afd",
    part: "\u2202",
    PartialD: "\u2202",
    Pcy: "\u041f",
    pcy: "\u043f",
    percnt: "%",
    period: ".",
    permil: "\u2030",
    perp: "\u22a5",
    pertenk: "\u2031",
    Pfr: "\ud835\udd13",
    pfr: "\ud835\udd2d",
    Phi: "\u03a6",
    phi: "\u03c6",
    phiv: "\u03d5",
    phmmat: "\u2133",
    phone: "\u260e",
    Pi: "\u03a0",
    pi: "\u03c0",
    pitchfork: "\u22d4",
    piv: "\u03d6",
    planck: "\u210f",
    planckh: "\u210e",
    plankv: "\u210f",
    plusacir: "\u2a23",
    plusb: "\u229e",
    pluscir: "\u2a22",
    plus: "+",
    plusdo: "\u2214",
    plusdu: "\u2a25",
    pluse: "\u2a72",
    PlusMinus: "\xb1",
    plusmn: "\xb1",
    plussim: "\u2a26",
    plustwo: "\u2a27",
    pm: "\xb1",
    Poincareplane: "\u210c",
    pointint: "\u2a15",
    popf: "\ud835\udd61",
    Popf: "\u2119",
    pound: "\xa3",
    prap: "\u2ab7",
    Pr: "\u2abb",
    pr: "\u227a",
    prcue: "\u227c",
    precapprox: "\u2ab7",
    prec: "\u227a",
    preccurlyeq: "\u227c",
    Precedes: "\u227a",
    PrecedesEqual: "\u2aaf",
    PrecedesSlantEqual: "\u227c",
    PrecedesTilde: "\u227e",
    preceq: "\u2aaf",
    precnapprox: "\u2ab9",
    precneqq: "\u2ab5",
    precnsim: "\u22e8",
    pre: "\u2aaf",
    prE: "\u2ab3",
    precsim: "\u227e",
    prime: "\u2032",
    Prime: "\u2033",
    primes: "\u2119",
    prnap: "\u2ab9",
    prnE: "\u2ab5",
    prnsim: "\u22e8",
    prod: "\u220f",
    Product: "\u220f",
    profalar: "\u232e",
    profline: "\u2312",
    profsurf: "\u2313",
    prop: "\u221d",
    Proportional: "\u221d",
    Proportion: "\u2237",
    propto: "\u221d",
    prsim: "\u227e",
    prurel: "\u22b0",
    Pscr: "\ud835\udcab",
    pscr: "\ud835\udcc5",
    Psi: "\u03a8",
    psi: "\u03c8",
    puncsp: "\u2008",
    Qfr: "\ud835\udd14",
    qfr: "\ud835\udd2e",
    qint: "\u2a0c",
    qopf: "\ud835\udd62",
    Qopf: "\u211a",
    qprime: "\u2057",
    Qscr: "\ud835\udcac",
    qscr: "\ud835\udcc6",
    quaternions: "\u210d",
    quatint: "\u2a16",
    quest: "?",
    questeq: "\u225f",
    quot: '"',
    QUOT: '"',
    rAarr: "\u21db",
    race: "\u223d\u0331",
    Racute: "\u0154",
    racute: "\u0155",
    radic: "\u221a",
    raemptyv: "\u29b3",
    rang: "\u27e9",
    Rang: "\u27eb",
    rangd: "\u2992",
    range: "\u29a5",
    rangle: "\u27e9",
    raquo: "\xbb",
    rarrap: "\u2975",
    rarrb: "\u21e5",
    rarrbfs: "\u2920",
    rarrc: "\u2933",
    rarr: "\u2192",
    Rarr: "\u21a0",
    rArr: "\u21d2",
    rarrfs: "\u291e",
    rarrhk: "\u21aa",
    rarrlp: "\u21ac",
    rarrpl: "\u2945",
    rarrsim: "\u2974",
    Rarrtl: "\u2916",
    rarrtl: "\u21a3",
    rarrw: "\u219d",
    ratail: "\u291a",
    rAtail: "\u291c",
    ratio: "\u2236",
    rationals: "\u211a",
    rbarr: "\u290d",
    rBarr: "\u290f",
    RBarr: "\u2910",
    rbbrk: "\u2773",
    rbrace: "}",
    rbrack: "]",
    rbrke: "\u298c",
    rbrksld: "\u298e",
    rbrkslu: "\u2990",
    Rcaron: "\u0158",
    rcaron: "\u0159",
    Rcedil: "\u0156",
    rcedil: "\u0157",
    rceil: "\u2309",
    rcub: "}",
    Rcy: "\u0420",
    rcy: "\u0440",
    rdca: "\u2937",
    rdldhar: "\u2969",
    rdquo: "\u201d",
    rdquor: "\u201d",
    rdsh: "\u21b3",
    real: "\u211c",
    realine: "\u211b",
    realpart: "\u211c",
    reals: "\u211d",
    Re: "\u211c",
    rect: "\u25ad",
    reg: "\xae",
    REG: "\xae",
    ReverseElement: "\u220b",
    ReverseEquilibrium: "\u21cb",
    ReverseUpEquilibrium: "\u296f",
    rfisht: "\u297d",
    rfloor: "\u230b",
    rfr: "\ud835\udd2f",
    Rfr: "\u211c",
    rHar: "\u2964",
    rhard: "\u21c1",
    rharu: "\u21c0",
    rharul: "\u296c",
    Rho: "\u03a1",
    rho: "\u03c1",
    rhov: "\u03f1",
    RightAngleBracket: "\u27e9",
    RightArrowBar: "\u21e5",
    rightarrow: "\u2192",
    RightArrow: "\u2192",
    Rightarrow: "\u21d2",
    RightArrowLeftArrow: "\u21c4",
    rightarrowtail: "\u21a3",
    RightCeiling: "\u2309",
    RightDoubleBracket: "\u27e7",
    RightDownTeeVector: "\u295d",
    RightDownVectorBar: "\u2955",
    RightDownVector: "\u21c2",
    RightFloor: "\u230b",
    rightharpoondown: "\u21c1",
    rightharpoonup: "\u21c0",
    rightleftarrows: "\u21c4",
    rightleftharpoons: "\u21cc",
    rightrightarrows: "\u21c9",
    rightsquigarrow: "\u219d",
    RightTeeArrow: "\u21a6",
    RightTee: "\u22a2",
    RightTeeVector: "\u295b",
    rightthreetimes: "\u22cc",
    RightTriangleBar: "\u29d0",
    RightTriangle: "\u22b3",
    RightTriangleEqual: "\u22b5",
    RightUpDownVector: "\u294f",
    RightUpTeeVector: "\u295c",
    RightUpVectorBar: "\u2954",
    RightUpVector: "\u21be",
    RightVectorBar: "\u2953",
    RightVector: "\u21c0",
    ring: "\u02da",
    risingdotseq: "\u2253",
    rlarr: "\u21c4",
    rlhar: "\u21cc",
    rlm: "\u200f",
    rmoustache: "\u23b1",
    rmoust: "\u23b1",
    rnmid: "\u2aee",
    roang: "\u27ed",
    roarr: "\u21fe",
    robrk: "\u27e7",
    ropar: "\u2986",
    ropf: "\ud835\udd63",
    Ropf: "\u211d",
    roplus: "\u2a2e",
    rotimes: "\u2a35",
    RoundImplies: "\u2970",
    rpar: ")",
    rpargt: "\u2994",
    rppolint: "\u2a12",
    rrarr: "\u21c9",
    Rrightarrow: "\u21db",
    rsaquo: "\u203a",
    rscr: "\ud835\udcc7",
    Rscr: "\u211b",
    rsh: "\u21b1",
    Rsh: "\u21b1",
    rsqb: "]",
    rsquo: "\u2019",
    rsquor: "\u2019",
    rthree: "\u22cc",
    rtimes: "\u22ca",
    rtri: "\u25b9",
    rtrie: "\u22b5",
    rtrif: "\u25b8",
    rtriltri: "\u29ce",
    RuleDelayed: "\u29f4",
    ruluhar: "\u2968",
    rx: "\u211e",
    Sacute: "\u015a",
    sacute: "\u015b",
    sbquo: "\u201a",
    scap: "\u2ab8",
    Scaron: "\u0160",
    scaron: "\u0161",
    Sc: "\u2abc",
    sc: "\u227b",
    sccue: "\u227d",
    sce: "\u2ab0",
    scE: "\u2ab4",
    Scedil: "\u015e",
    scedil: "\u015f",
    Scirc: "\u015c",
    scirc: "\u015d",
    scnap: "\u2aba",
    scnE: "\u2ab6",
    scnsim: "\u22e9",
    scpolint: "\u2a13",
    scsim: "\u227f",
    Scy: "\u0421",
    scy: "\u0441",
    sdotb: "\u22a1",
    sdot: "\u22c5",
    sdote: "\u2a66",
    searhk: "\u2925",
    searr: "\u2198",
    seArr: "\u21d8",
    searrow: "\u2198",
    sect: "\xa7",
    semi: ";",
    seswar: "\u2929",
    setminus: "\u2216",
    setmn: "\u2216",
    sext: "\u2736",
    Sfr: "\ud835\udd16",
    sfr: "\ud835\udd30",
    sfrown: "\u2322",
    sharp: "\u266f",
    SHCHcy: "\u0429",
    shchcy: "\u0449",
    SHcy: "\u0428",
    shcy: "\u0448",
    ShortDownArrow: "\u2193",
    ShortLeftArrow: "\u2190",
    shortmid: "\u2223",
    shortparallel: "\u2225",
    ShortRightArrow: "\u2192",
    ShortUpArrow: "\u2191",
    shy: "\xad",
    Sigma: "\u03a3",
    sigma: "\u03c3",
    sigmaf: "\u03c2",
    sigmav: "\u03c2",
    sim: "\u223c",
    simdot: "\u2a6a",
    sime: "\u2243",
    simeq: "\u2243",
    simg: "\u2a9e",
    simgE: "\u2aa0",
    siml: "\u2a9d",
    simlE: "\u2a9f",
    simne: "\u2246",
    simplus: "\u2a24",
    simrarr: "\u2972",
    slarr: "\u2190",
    SmallCircle: "\u2218",
    smallsetminus: "\u2216",
    smashp: "\u2a33",
    smeparsl: "\u29e4",
    smid: "\u2223",
    smile: "\u2323",
    smt: "\u2aaa",
    smte: "\u2aac",
    smtes: "\u2aac\ufe00",
    SOFTcy: "\u042c",
    softcy: "\u044c",
    solbar: "\u233f",
    solb: "\u29c4",
    sol: "/",
    Sopf: "\ud835\udd4a",
    sopf: "\ud835\udd64",
    spades: "\u2660",
    spadesuit: "\u2660",
    spar: "\u2225",
    sqcap: "\u2293",
    sqcaps: "\u2293\ufe00",
    sqcup: "\u2294",
    sqcups: "\u2294\ufe00",
    Sqrt: "\u221a",
    sqsub: "\u228f",
    sqsube: "\u2291",
    sqsubset: "\u228f",
    sqsubseteq: "\u2291",
    sqsup: "\u2290",
    sqsupe: "\u2292",
    sqsupset: "\u2290",
    sqsupseteq: "\u2292",
    square: "\u25a1",
    Square: "\u25a1",
    SquareIntersection: "\u2293",
    SquareSubset: "\u228f",
    SquareSubsetEqual: "\u2291",
    SquareSuperset: "\u2290",
    SquareSupersetEqual: "\u2292",
    SquareUnion: "\u2294",
    squarf: "\u25aa",
    squ: "\u25a1",
    squf: "\u25aa",
    srarr: "\u2192",
    Sscr: "\ud835\udcae",
    sscr: "\ud835\udcc8",
    ssetmn: "\u2216",
    ssmile: "\u2323",
    sstarf: "\u22c6",
    Star: "\u22c6",
    star: "\u2606",
    starf: "\u2605",
    straightepsilon: "\u03f5",
    straightphi: "\u03d5",
    strns: "\xaf",
    sub: "\u2282",
    Sub: "\u22d0",
    subdot: "\u2abd",
    subE: "\u2ac5",
    sube: "\u2286",
    subedot: "\u2ac3",
    submult: "\u2ac1",
    subnE: "\u2acb",
    subne: "\u228a",
    subplus: "\u2abf",
    subrarr: "\u2979",
    subset: "\u2282",
    Subset: "\u22d0",
    subseteq: "\u2286",
    subseteqq: "\u2ac5",
    SubsetEqual: "\u2286",
    subsetneq: "\u228a",
    subsetneqq: "\u2acb",
    subsim: "\u2ac7",
    subsub: "\u2ad5",
    subsup: "\u2ad3",
    succapprox: "\u2ab8",
    succ: "\u227b",
    succcurlyeq: "\u227d",
    Succeeds: "\u227b",
    SucceedsEqual: "\u2ab0",
    SucceedsSlantEqual: "\u227d",
    SucceedsTilde: "\u227f",
    succeq: "\u2ab0",
    succnapprox: "\u2aba",
    succneqq: "\u2ab6",
    succnsim: "\u22e9",
    succsim: "\u227f",
    SuchThat: "\u220b",
    sum: "\u2211",
    Sum: "\u2211",
    sung: "\u266a",
    sup1: "\xb9",
    sup2: "\xb2",
    sup3: "\xb3",
    sup: "\u2283",
    Sup: "\u22d1",
    supdot: "\u2abe",
    supdsub: "\u2ad8",
    supE: "\u2ac6",
    supe: "\u2287",
    supedot: "\u2ac4",
    Superset: "\u2283",
    SupersetEqual: "\u2287",
    suphsol: "\u27c9",
    suphsub: "\u2ad7",
    suplarr: "\u297b",
    supmult: "\u2ac2",
    supnE: "\u2acc",
    supne: "\u228b",
    supplus: "\u2ac0",
    supset: "\u2283",
    Supset: "\u22d1",
    supseteq: "\u2287",
    supseteqq: "\u2ac6",
    supsetneq: "\u228b",
    supsetneqq: "\u2acc",
    supsim: "\u2ac8",
    supsub: "\u2ad4",
    supsup: "\u2ad6",
    swarhk: "\u2926",
    swarr: "\u2199",
    swArr: "\u21d9",
    swarrow: "\u2199",
    swnwar: "\u292a",
    szlig: "\xdf",
    Tab: "\t",
    target: "\u2316",
    Tau: "\u03a4",
    tau: "\u03c4",
    tbrk: "\u23b4",
    Tcaron: "\u0164",
    tcaron: "\u0165",
    Tcedil: "\u0162",
    tcedil: "\u0163",
    Tcy: "\u0422",
    tcy: "\u0442",
    tdot: "\u20db",
    telrec: "\u2315",
    Tfr: "\ud835\udd17",
    tfr: "\ud835\udd31",
    there4: "\u2234",
    therefore: "\u2234",
    Therefore: "\u2234",
    Theta: "\u0398",
    theta: "\u03b8",
    thetasym: "\u03d1",
    thetav: "\u03d1",
    thickapprox: "\u2248",
    thicksim: "\u223c",
    ThickSpace: "\u205f\u200a",
    ThinSpace: "\u2009",
    thinsp: "\u2009",
    thkap: "\u2248",
    thksim: "\u223c",
    THORN: "\xde",
    thorn: "\xfe",
    tilde: "\u02dc",
    Tilde: "\u223c",
    TildeEqual: "\u2243",
    TildeFullEqual: "\u2245",
    TildeTilde: "\u2248",
    timesbar: "\u2a31",
    timesb: "\u22a0",
    times: "\xd7",
    timesd: "\u2a30",
    tint: "\u222d",
    toea: "\u2928",
    topbot: "\u2336",
    topcir: "\u2af1",
    top: "\u22a4",
    Topf: "\ud835\udd4b",
    topf: "\ud835\udd65",
    topfork: "\u2ada",
    tosa: "\u2929",
    tprime: "\u2034",
    trade: "\u2122",
    TRADE: "\u2122",
    triangle: "\u25b5",
    triangledown: "\u25bf",
    triangleleft: "\u25c3",
    trianglelefteq: "\u22b4",
    triangleq: "\u225c",
    triangleright: "\u25b9",
    trianglerighteq: "\u22b5",
    tridot: "\u25ec",
    trie: "\u225c",
    triminus: "\u2a3a",
    TripleDot: "\u20db",
    triplus: "\u2a39",
    trisb: "\u29cd",
    tritime: "\u2a3b",
    trpezium: "\u23e2",
    Tscr: "\ud835\udcaf",
    tscr: "\ud835\udcc9",
    TScy: "\u0426",
    tscy: "\u0446",
    TSHcy: "\u040b",
    tshcy: "\u045b",
    Tstrok: "\u0166",
    tstrok: "\u0167",
    twixt: "\u226c",
    twoheadleftarrow: "\u219e",
    twoheadrightarrow: "\u21a0",
    Uacute: "\xda",
    uacute: "\xfa",
    uarr: "\u2191",
    Uarr: "\u219f",
    uArr: "\u21d1",
    Uarrocir: "\u2949",
    Ubrcy: "\u040e",
    ubrcy: "\u045e",
    Ubreve: "\u016c",
    ubreve: "\u016d",
    Ucirc: "\xdb",
    ucirc: "\xfb",
    Ucy: "\u0423",
    ucy: "\u0443",
    udarr: "\u21c5",
    Udblac: "\u0170",
    udblac: "\u0171",
    udhar: "\u296e",
    ufisht: "\u297e",
    Ufr: "\ud835\udd18",
    ufr: "\ud835\udd32",
    Ugrave: "\xd9",
    ugrave: "\xf9",
    uHar: "\u2963",
    uharl: "\u21bf",
    uharr: "\u21be",
    uhblk: "\u2580",
    ulcorn: "\u231c",
    ulcorner: "\u231c",
    ulcrop: "\u230f",
    ultri: "\u25f8",
    Umacr: "\u016a",
    umacr: "\u016b",
    uml: "\xa8",
    UnderBar: "_",
    UnderBrace: "\u23df",
    UnderBracket: "\u23b5",
    UnderParenthesis: "\u23dd",
    Union: "\u22c3",
    UnionPlus: "\u228e",
    Uogon: "\u0172",
    uogon: "\u0173",
    Uopf: "\ud835\udd4c",
    uopf: "\ud835\udd66",
    UpArrowBar: "\u2912",
    uparrow: "\u2191",
    UpArrow: "\u2191",
    Uparrow: "\u21d1",
    UpArrowDownArrow: "\u21c5",
    updownarrow: "\u2195",
    UpDownArrow: "\u2195",
    Updownarrow: "\u21d5",
    UpEquilibrium: "\u296e",
    upharpoonleft: "\u21bf",
    upharpoonright: "\u21be",
    uplus: "\u228e",
    UpperLeftArrow: "\u2196",
    UpperRightArrow: "\u2197",
    upsi: "\u03c5",
    Upsi: "\u03d2",
    upsih: "\u03d2",
    Upsilon: "\u03a5",
    upsilon: "\u03c5",
    UpTeeArrow: "\u21a5",
    UpTee: "\u22a5",
    upuparrows: "\u21c8",
    urcorn: "\u231d",
    urcorner: "\u231d",
    urcrop: "\u230e",
    Uring: "\u016e",
    uring: "\u016f",
    urtri: "\u25f9",
    Uscr: "\ud835\udcb0",
    uscr: "\ud835\udcca",
    utdot: "\u22f0",
    Utilde: "\u0168",
    utilde: "\u0169",
    utri: "\u25b5",
    utrif: "\u25b4",
    uuarr: "\u21c8",
    Uuml: "\xdc",
    uuml: "\xfc",
    uwangle: "\u29a7",
    vangrt: "\u299c",
    varepsilon: "\u03f5",
    varkappa: "\u03f0",
    varnothing: "\u2205",
    varphi: "\u03d5",
    varpi: "\u03d6",
    varpropto: "\u221d",
    varr: "\u2195",
    vArr: "\u21d5",
    varrho: "\u03f1",
    varsigma: "\u03c2",
    varsubsetneq: "\u228a\ufe00",
    varsubsetneqq: "\u2acb\ufe00",
    varsupsetneq: "\u228b\ufe00",
    varsupsetneqq: "\u2acc\ufe00",
    vartheta: "\u03d1",
    vartriangleleft: "\u22b2",
    vartriangleright: "\u22b3",
    vBar: "\u2ae8",
    Vbar: "\u2aeb",
    vBarv: "\u2ae9",
    Vcy: "\u0412",
    vcy: "\u0432",
    vdash: "\u22a2",
    vDash: "\u22a8",
    Vdash: "\u22a9",
    VDash: "\u22ab",
    Vdashl: "\u2ae6",
    veebar: "\u22bb",
    vee: "\u2228",
    Vee: "\u22c1",
    veeeq: "\u225a",
    vellip: "\u22ee",
    verbar: "|",
    Verbar: "\u2016",
    vert: "|",
    Vert: "\u2016",
    VerticalBar: "\u2223",
    VerticalLine: "|",
    VerticalSeparator: "\u2758",
    VerticalTilde: "\u2240",
    VeryThinSpace: "\u200a",
    Vfr: "\ud835\udd19",
    vfr: "\ud835\udd33",
    vltri: "\u22b2",
    vnsub: "\u2282\u20d2",
    vnsup: "\u2283\u20d2",
    Vopf: "\ud835\udd4d",
    vopf: "\ud835\udd67",
    vprop: "\u221d",
    vrtri: "\u22b3",
    Vscr: "\ud835\udcb1",
    vscr: "\ud835\udccb",
    vsubnE: "\u2acb\ufe00",
    vsubne: "\u228a\ufe00",
    vsupnE: "\u2acc\ufe00",
    vsupne: "\u228b\ufe00",
    Vvdash: "\u22aa",
    vzigzag: "\u299a",
    Wcirc: "\u0174",
    wcirc: "\u0175",
    wedbar: "\u2a5f",
    wedge: "\u2227",
    Wedge: "\u22c0",
    wedgeq: "\u2259",
    weierp: "\u2118",
    Wfr: "\ud835\udd1a",
    wfr: "\ud835\udd34",
    Wopf: "\ud835\udd4e",
    wopf: "\ud835\udd68",
    wp: "\u2118",
    wr: "\u2240",
    wreath: "\u2240",
    Wscr: "\ud835\udcb2",
    wscr: "\ud835\udccc",
    xcap: "\u22c2",
    xcirc: "\u25ef",
    xcup: "\u22c3",
    xdtri: "\u25bd",
    Xfr: "\ud835\udd1b",
    xfr: "\ud835\udd35",
    xharr: "\u27f7",
    xhArr: "\u27fa",
    Xi: "\u039e",
    xi: "\u03be",
    xlarr: "\u27f5",
    xlArr: "\u27f8",
    xmap: "\u27fc",
    xnis: "\u22fb",
    xodot: "\u2a00",
    Xopf: "\ud835\udd4f",
    xopf: "\ud835\udd69",
    xoplus: "\u2a01",
    xotime: "\u2a02",
    xrarr: "\u27f6",
    xrArr: "\u27f9",
    Xscr: "\ud835\udcb3",
    xscr: "\ud835\udccd",
    xsqcup: "\u2a06",
    xuplus: "\u2a04",
    xutri: "\u25b3",
    xvee: "\u22c1",
    xwedge: "\u22c0",
    Yacute: "\xdd",
    yacute: "\xfd",
    YAcy: "\u042f",
    yacy: "\u044f",
    Ycirc: "\u0176",
    ycirc: "\u0177",
    Ycy: "\u042b",
    ycy: "\u044b",
    yen: "\xa5",
    Yfr: "\ud835\udd1c",
    yfr: "\ud835\udd36",
    YIcy: "\u0407",
    yicy: "\u0457",
    Yopf: "\ud835\udd50",
    yopf: "\ud835\udd6a",
    Yscr: "\ud835\udcb4",
    yscr: "\ud835\udcce",
    YUcy: "\u042e",
    yucy: "\u044e",
    yuml: "\xff",
    Yuml: "\u0178",
    Zacute: "\u0179",
    zacute: "\u017a",
    Zcaron: "\u017d",
    zcaron: "\u017e",
    Zcy: "\u0417",
    zcy: "\u0437",
    Zdot: "\u017b",
    zdot: "\u017c",
    zeetrf: "\u2128",
    ZeroWidthSpace: "\u200b",
    Zeta: "\u0396",
    zeta: "\u03b6",
    zfr: "\ud835\udd37",
    Zfr: "\u2128",
    ZHcy: "\u0416",
    zhcy: "\u0436",
    zigrarr: "\u21dd",
    zopf: "\ud835\udd6b",
    Zopf: "\u2124",
    Zscr: "\ud835\udcb5",
    zscr: "\ud835\udccf",
    zwj: "\u200d",
    zwnj: "\u200c"
  };
  /*eslint quotes:0*/  var entities = require$$0;
  var regex$4 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
  var encodeCache = {};
  // Create a lookup array where anything but characters in `chars` string
  // and alphanumeric chars is percent-encoded.
  
    function getEncodeCache(exclude) {
    var i, ch, cache = encodeCache[exclude];
    if (cache) {
      return cache;
    }
    cache = encodeCache[exclude] = [];
    for (i = 0; i < 128; i++) {
      ch = String.fromCharCode(i);
      if (/^[0-9a-z]$/i.test(ch)) {
        // always allow unencoded alphanumeric characters
        cache.push(ch);
      } else {
        cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
      }
    }
    for (i = 0; i < exclude.length; i++) {
      cache[exclude.charCodeAt(i)] = exclude[i];
    }
    return cache;
  }
  // Encode unsafe characters with percent-encoding, skipping already
  // encoded sequences.
  
  //  - string       - string to encode
  //  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
  //  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
  
    function encode$2(string, exclude, keepEscaped) {
    var i, l, code, nextCode, cache, result = "";
    if (typeof exclude !== "string") {
      // encode(string, keepEscaped)
      keepEscaped = exclude;
      exclude = encode$2.defaultChars;
    }
    if (typeof keepEscaped === "undefined") {
      keepEscaped = true;
    }
    cache = getEncodeCache(exclude);
    for (i = 0, l = string.length; i < l; i++) {
      code = string.charCodeAt(i);
      if (keepEscaped && code === 37 /* % */ && i + 2 < l) {
        if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
          result += string.slice(i, i + 3);
          i += 2;
          continue;
        }
      }
      if (code < 128) {
        result += cache[code];
        continue;
      }
      if (code >= 55296 && code <= 57343) {
        if (code >= 55296 && code <= 56319 && i + 1 < l) {
          nextCode = string.charCodeAt(i + 1);
          if (nextCode >= 56320 && nextCode <= 57343) {
            result += encodeURIComponent(string[i] + string[i + 1]);
            i++;
            continue;
          }
        }
        result += "%EF%BF%BD";
        continue;
      }
      result += encodeURIComponent(string[i]);
    }
    return result;
  }
  encode$2.defaultChars = ";/?:@&=+$,-_.!~*'()#";
  encode$2.componentChars = "-_.!~*'()";
  var encode_1 = encode$2;
  /* eslint-disable no-bitwise */  var decodeCache = {};
  function getDecodeCache(exclude) {
    var i, ch, cache = decodeCache[exclude];
    if (cache) {
      return cache;
    }
    cache = decodeCache[exclude] = [];
    for (i = 0; i < 128; i++) {
      ch = String.fromCharCode(i);
      cache.push(ch);
    }
    for (i = 0; i < exclude.length; i++) {
      ch = exclude.charCodeAt(i);
      cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
    }
    return cache;
  }
  // Decode percent-encoded string.
  
    function decode$2(string, exclude) {
    var cache;
    if (typeof exclude !== "string") {
      exclude = decode$2.defaultChars;
    }
    cache = getDecodeCache(exclude);
    return string.replace(/(%[a-f0-9]{2})+/gi, (function(seq) {
      var i, l, b1, b2, b3, b4, chr, result = "";
      for (i = 0, l = seq.length; i < l; i += 3) {
        b1 = parseInt(seq.slice(i + 1, i + 3), 16);
        if (b1 < 128) {
          result += cache[b1];
          continue;
        }
        if ((b1 & 224) === 192 && i + 3 < l) {
          // 110xxxxx 10xxxxxx
          b2 = parseInt(seq.slice(i + 4, i + 6), 16);
          if ((b2 & 192) === 128) {
            chr = b1 << 6 & 1984 | b2 & 63;
            if (chr < 128) {
              result += "\ufffd\ufffd";
            } else {
              result += String.fromCharCode(chr);
            }
            i += 3;
            continue;
          }
        }
        if ((b1 & 240) === 224 && i + 6 < l) {
          // 1110xxxx 10xxxxxx 10xxxxxx
          b2 = parseInt(seq.slice(i + 4, i + 6), 16);
          b3 = parseInt(seq.slice(i + 7, i + 9), 16);
          if ((b2 & 192) === 128 && (b3 & 192) === 128) {
            chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
            if (chr < 2048 || chr >= 55296 && chr <= 57343) {
              result += "\ufffd\ufffd\ufffd";
            } else {
              result += String.fromCharCode(chr);
            }
            i += 6;
            continue;
          }
        }
        if ((b1 & 248) === 240 && i + 9 < l) {
          // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
          b2 = parseInt(seq.slice(i + 4, i + 6), 16);
          b3 = parseInt(seq.slice(i + 7, i + 9), 16);
          b4 = parseInt(seq.slice(i + 10, i + 12), 16);
          if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
            chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
            if (chr < 65536 || chr > 1114111) {
              result += "\ufffd\ufffd\ufffd\ufffd";
            } else {
              chr -= 65536;
              result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
            }
            i += 9;
            continue;
          }
        }
        result += "\ufffd";
      }
      return result;
    }));
  }
  decode$2.defaultChars = ";/?:@&=+$,#";
  decode$2.componentChars = "";
  var decode_1 = decode$2;
  var format$1 = function format(url) {
    var result = "";
    result += url.protocol || "";
    result += url.slashes ? "//" : "";
    result += url.auth ? url.auth + "@" : "";
    if (url.hostname && url.hostname.indexOf(":") !== -1) {
      // ipv6 address
      result += "[" + url.hostname + "]";
    } else {
      result += url.hostname || "";
    }
    result += url.port ? ":" + url.port : "";
    result += url.pathname || "";
    result += url.search || "";
    result += url.hash || "";
    return result;
  };
  // Copyright Joyent, Inc. and other Node contributors.
  
  // Changes from joyent/node:
  
  // 1. No leading slash in paths,
  //    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
  
  // 2. Backslashes are not replaced with slashes,
  //    so `http:\\example.org\` is treated like a relative path
  
  // 3. Trailing colon is treated like a part of the path,
  //    i.e. in `http://example.org:foo` pathname is `:foo`
  
  // 4. Nothing is URL-encoded in the resulting object,
  //    (in joyent/node some chars in auth and paths are encoded)
  
  // 5. `url.parse()` does not have `parseQueryString` argument
  
  // 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
  //    which can be constructed using other parts of the url.
  
    function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.pathname = null;
  }
  // Reference: RFC 3986, RFC 1808, RFC 2396
  // define these here so at least they only have to be
  // compiled once on the first module load.
    var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, 
  // Special case for a simple path URL
  simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, 
  // RFC 2396: characters reserved for delimiting URLs.
  // We actually just auto-escape these.
  delims = [ "<", ">", '"', "`", " ", "\r", "\n", "\t" ], 
  // RFC 2396: characters not allowed for various reasons.
  unwise = [ "{", "}", "|", "\\", "^", "`" ].concat(delims), 
  // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
  autoEscape = [ "'" ].concat(unwise), 
  // Characters that are never ever allowed in a hostname.
  // Note that any invalid chars are also handled, but these
  // are the ones that are *expected* to be seen, so we fast-path
  // them.
  nonHostChars = [ "%", "/", "?", ";", "#" ].concat(autoEscape), hostEndingChars = [ "/", "?", "#" ], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, 
  // protocols that can allow "unsafe" and "unwise" chars.
  /* eslint-disable no-script-url */
  // protocols that never have a hostname.
  hostlessProtocol = {
    javascript: true,
    "javascript:": true
  }, 
  // protocols that always contain a // bit.
  slashedProtocol = {
    http: true,
    https: true,
    ftp: true,
    gopher: true,
    file: true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
  };
  /* eslint-enable no-script-url */  function urlParse(url, slashesDenoteHost) {
    if (url && url instanceof Url) {
      return url;
    }
    var u = new Url;
    u.parse(url, slashesDenoteHost);
    return u;
  }
  Url.prototype.parse = function(url, slashesDenoteHost) {
    var i, l, lowerProto, hec, slashes, rest = url;
    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
        rest = rest.trim();
    if (!slashesDenoteHost && url.split("#").length === 1) {
      // Try fast path regexp
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
        }
        return this;
      }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      lowerProto = proto.toLowerCase();
      this.protocol = proto;
      rest = rest.substr(proto.length);
    }
    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
        if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      slashes = rest.substr(0, 2) === "//";
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
      // there's a hostname.
      // the first instance of /, ?, ;, or # ends the host.
      // If there is an @ in the hostname, then non-host chars *are* allowed
      // to the left of the last @ sign, unless some host-ending character
      // comes *before* the @-sign.
      // URLs are obnoxious.
      // ex:
      // http://a@b@c/ => user:a@b host:c
      // http://a@b?@c => user:a host:c path:/?@c
      // v0.12 TODO(isaacs): This is not quite how Chrome does things.
      // Review our test case against browsers more comprehensively.
      // find the first instance of any hostEndingChars
      var hostEnd = -1;
      for (i = 0; i < hostEndingChars.length; i++) {
        hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      }
      // at this point, either we have an explicit point where the
      // auth portion cannot go past, or the last @ char is the decider.
            var auth, atSign;
      if (hostEnd === -1) {
        // atSign can be anywhere.
        atSign = rest.lastIndexOf("@");
      } else {
        // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf("@", hostEnd);
      }
      // Now we have a portion which is definitely the auth.
      // Pull that off.
            if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = auth;
      }
      // the host is the remaining to the left of the first non-host char
            hostEnd = -1;
      for (i = 0; i < nonHostChars.length; i++) {
        hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      }
      // if we still have not hit it, then the entire thing is a host.
            if (hostEnd === -1) {
        hostEnd = rest.length;
      }
      if (rest[hostEnd - 1] === ":") {
        hostEnd--;
      }
      var host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);
      // pull out port.
            this.parseHost(host);
      // we've indicated that there is a hostname,
      // so even if it's empty, it has to be present.
            this.hostname = this.hostname || "";
      // if hostname begins with [ and ends with ]
      // assume that it's an IPv6 address.
            var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      // validate a little.
            if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) {
            continue;
          }
          if (!part.match(hostnamePartPattern)) {
            var newpart = "";
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                // we replace non-ASCII char with a temporary placeholder
                // we need this to make sure size of hostname is not
                // broken by replacing non-ASCII by nothing
                newpart += "x";
              } else {
                newpart += part[j];
              }
            }
            // we test again with ASCII char only
                        if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = notHost.join(".") + rest;
              }
              this.hostname = validParts.join(".");
              break;
            }
          }
        }
      }
      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = "";
      }
      // strip [ and ] from the hostname
      // the host field still retains them, though
            if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      }
    }
    // chop off from the tail first.
        var hash = rest.indexOf("#");
    if (hash !== -1) {
      // got a fragment string.
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf("?");
    if (qm !== -1) {
      this.search = rest.substr(qm);
      rest = rest.slice(0, qm);
    }
    if (rest) {
      this.pathname = rest;
    }
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = "";
    }
    return this;
  };
  Url.prototype.parseHost = function(host) {
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ":") {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) {
      this.hostname = host;
    }
  };
  var parse$1 = urlParse;
  var encode$1 = encode_1;
  var decode$1 = decode_1;
  var format = format$1;
  var parse = parse$1;
  var mdurl = {
    encode: encode$1,
    decode: decode$1,
    format: format,
    parse: parse
  };
  var regex$3 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var regex$2 = /[\0-\x1F\x7F-\x9F]/;
  var regex$1 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
  var regex = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
  var Any = regex$3;
  var Cc = regex$2;
  var Cf = regex$1;
  var P = regex$4;
  var Z = regex;
  var uc_micro = {
    Any: Any,
    Cc: Cc,
    Cf: Cf,
    P: P,
    Z: Z
  };
  var utils = createCommonjsModule((function(module, exports) {
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function isString(obj) {
      return _class(obj) === "[object String]";
    }
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function has(object, key) {
      return _hasOwnProperty.call(object, key);
    }
    // Merge objects
    
        function assign(obj /*from1, from2, from3, ...*/) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach((function(source) {
        if (!source) {
          return;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be object");
        }
        Object.keys(source).forEach((function(key) {
          obj[key] = source[key];
        }));
      }));
      return obj;
    }
    // Remove element from array and put another array at those position.
    // Useful for some operations with tokens
        function arrayReplaceAt(src, pos, newElements) {
      return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
    }
    ////////////////////////////////////////////////////////////////////////////////
        function isValidEntityCode(c) {
      /*eslint no-bitwise:0*/
      // broken sequence
      if (c >= 55296 && c <= 57343) {
        return false;
      }
      // never used
            if (c >= 64976 && c <= 65007) {
        return false;
      }
      if ((c & 65535) === 65535 || (c & 65535) === 65534) {
        return false;
      }
      // control codes
            if (c >= 0 && c <= 8) {
        return false;
      }
      if (c === 11) {
        return false;
      }
      if (c >= 14 && c <= 31) {
        return false;
      }
      if (c >= 127 && c <= 159) {
        return false;
      }
      // out of range
            if (c > 1114111) {
        return false;
      }
      return true;
    }
    function fromCodePoint(c) {
      /*eslint no-bitwise:0*/
      if (c > 65535) {
        c -= 65536;
        var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
        return String.fromCharCode(surrogate1, surrogate2);
      }
      return String.fromCharCode(c);
    }
    var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
    var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
    var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
    var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
    function replaceEntityPattern(match, name) {
      var code = 0;
      if (has(entities, name)) {
        return entities[name];
      }
      if (name.charCodeAt(0) === 35 /* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
        code = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
        if (isValidEntityCode(code)) {
          return fromCodePoint(code);
        }
      }
      return match;
    }
    /*function replaceEntities(str) {
	  if (str.indexOf('&') < 0) { return str; }

	  return str.replace(ENTITY_RE, replaceEntityPattern);
	}*/    function unescapeMd(str) {
      if (str.indexOf("\\") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_MD_RE, "$1");
    }
    function unescapeAll(str) {
      if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_ALL_RE, (function(match, escaped, entity) {
        if (escaped) {
          return escaped;
        }
        return replaceEntityPattern(match, entity);
      }));
    }
    ////////////////////////////////////////////////////////////////////////////////
        var HTML_ESCAPE_TEST_RE = /[&<>"]/;
    var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
    var HTML_REPLACEMENTS = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function replaceUnsafeChar(ch) {
      return HTML_REPLACEMENTS[ch];
    }
    function escapeHtml(str) {
      if (HTML_ESCAPE_TEST_RE.test(str)) {
        return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
      }
      return str;
    }
    ////////////////////////////////////////////////////////////////////////////////
        var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
    function escapeRE(str) {
      return str.replace(REGEXP_ESCAPE_RE, "\\$&");
    }
    ////////////////////////////////////////////////////////////////////////////////
        function isSpace(code) {
      switch (code) {
       case 9:
       case 32:
        return true;
      }
      return false;
    }
    // Zs (unicode class) || [\t\f\v\r\n]
        function isWhiteSpace(code) {
      if (code >= 8192 && code <= 8202) {
        return true;
      }
      switch (code) {
       case 9:
 // \t
               case 10:
 // \n
               case 11:
 // \v
               case 12:
 // \f
               case 13:
 // \r
               case 32:
       case 160:
       case 5760:
       case 8239:
       case 8287:
       case 12288:
        return true;
      }
      return false;
    }
    ////////////////////////////////////////////////////////////////////////////////
    /*eslint-disable max-len*/
    // Currently without astral characters support.
        function isPunctChar(ch) {
      return regex$4.test(ch);
    }
    // Markdown ASCII punctuation characters.
    
    // !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
    // http://spec.commonmark.org/0.15/#ascii-punctuation-character
    
    // Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
    
        function isMdAsciiPunct(ch) {
      switch (ch) {
       case 33 /* ! */ :
       case 34 /* " */ :
       case 35 /* # */ :
       case 36 /* $ */ :
       case 37 /* % */ :
       case 38 /* & */ :
       case 39 /* ' */ :
       case 40 /* ( */ :
       case 41 /* ) */ :
       case 42 /* * */ :
       case 43 /* + */ :
       case 44 /* , */ :
       case 45 /* - */ :
       case 46 /* . */ :
       case 47 /* / */ :
       case 58 /* : */ :
       case 59 /* ; */ :
       case 60 /* < */ :
       case 61 /* = */ :
       case 62 /* > */ :
       case 63 /* ? */ :
       case 64 /* @ */ :
       case 91 /* [ */ :
       case 92 /* \ */ :
       case 93 /* ] */ :
       case 94 /* ^ */ :
       case 95 /* _ */ :
       case 96 /* ` */ :
       case 123 /* { */ :
       case 124 /* | */ :
       case 125 /* } */ :
       case 126 /* ~ */ :
        return true;

       default:
        return false;
      }
    }
    // Hepler to unify [reference labels].
    
        function normalizeReference(str) {
      // Trim and collapse whitespace
      str = str.trim().replace(/\s+/g, " ");
      // In node v10 'ẞ'.toLowerCase() === 'Ṿ', which is presumed to be a bug
      // fixed in v12 (couldn't find any details).
      
      // So treat this one as a special case
      // (remove this when node v10 is no longer supported).
      
            if ("\u1e9e".toLowerCase() === "\u1e7e") {
        str = str.replace(/\u1e9e/g, "\xdf");
      }
      // .toLowerCase().toUpperCase() should get rid of all differences
      // between letter variants.
      
      // Simple .toLowerCase() doesn't normalize 125 code points correctly,
      // and .toUpperCase doesn't normalize 6 of them (list of exceptions:
      // İ, ϴ, ẞ, Ω, K, Å - those are already uppercased, but have differently
      // uppercased versions).
      
      // Here's an example showing how it happens. Lets take greek letter omega:
      // uppercase U+0398 (Θ), U+03f4 (ϴ) and lowercase U+03b8 (θ), U+03d1 (ϑ)
      
      // Unicode entries:
      // 0398;GREEK CAPITAL LETTER THETA;Lu;0;L;;;;;N;;;;03B8;
      // 03B8;GREEK SMALL LETTER THETA;Ll;0;L;;;;;N;;;0398;;0398
      // 03D1;GREEK THETA SYMBOL;Ll;0;L;<compat> 03B8;;;;N;GREEK SMALL LETTER SCRIPT THETA;;0398;;0398
      // 03F4;GREEK CAPITAL THETA SYMBOL;Lu;0;L;<compat> 0398;;;;N;;;;03B8;
      
      // Case-insensitive comparison should treat all of them as equivalent.
      
      // But .toLowerCase() doesn't change ϑ (it's already lowercase),
      // and .toUpperCase() doesn't change ϴ (already uppercase).
      
      // Applying first lower then upper case normalizes any character:
      // '\u0398\u03f4\u03b8\u03d1'.toLowerCase().toUpperCase() === '\u0398\u0398\u0398\u0398'
      
      // Note: this is equivalent to unicode case folding; unicode normalization
      // is a different step that is not required here.
      
      // Final result should be uppercased, because it's later stored in an object
      // (this avoid a conflict with Object.prototype members,
      // most notably, `__proto__`)
      
            return str.toLowerCase().toUpperCase();
    }
    ////////////////////////////////////////////////////////////////////////////////
    // Re-export libraries commonly used in both markdown-it and its plugins,
    // so plugins won't have to depend on them explicitly, which reduces their
    // bundled size (e.g. a browser build).
    
        exports.lib = {};
    exports.lib.mdurl = mdurl;
    exports.lib.ucmicro = uc_micro;
    exports.assign = assign;
    exports.isString = isString;
    exports.has = has;
    exports.unescapeMd = unescapeMd;
    exports.unescapeAll = unescapeAll;
    exports.isValidEntityCode = isValidEntityCode;
    exports.fromCodePoint = fromCodePoint;
    // exports.replaceEntities     = replaceEntities;
        exports.escapeHtml = escapeHtml;
    exports.arrayReplaceAt = arrayReplaceAt;
    exports.isSpace = isSpace;
    exports.isWhiteSpace = isWhiteSpace;
    exports.isMdAsciiPunct = isMdAsciiPunct;
    exports.isPunctChar = isPunctChar;
    exports.escapeRE = escapeRE;
    exports.normalizeReference = normalizeReference;
  }));
  // Parse link label
    var parse_link_label = function parseLinkLabel(state, start, disableNested) {
    var level, found, marker, prevPos, labelEnd = -1, max = state.posMax, oldPos = state.pos;
    state.pos = start + 1;
    level = 1;
    while (state.pos < max) {
      marker = state.src.charCodeAt(state.pos);
      if (marker === 93 /* ] */) {
        level--;
        if (level === 0) {
          found = true;
          break;
        }
      }
      prevPos = state.pos;
      state.md.inline.skipToken(state);
      if (marker === 91 /* [ */) {
        if (prevPos === state.pos - 1) {
          // increase level if we find text `[`, which is not a part of any token
          level++;
        } else if (disableNested) {
          state.pos = oldPos;
          return -1;
        }
      }
    }
    if (found) {
      labelEnd = state.pos;
    }
    // restore old state
        state.pos = oldPos;
    return labelEnd;
  };
  var unescapeAll$2 = utils.unescapeAll;
  var parse_link_destination = function parseLinkDestination(str, pos, max) {
    var code, level, lines = 0, start = pos, result = {
      ok: false,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (str.charCodeAt(pos) === 60 /* < */) {
      pos++;
      while (pos < max) {
        code = str.charCodeAt(pos);
        if (code === 10 /* \n */) {
          return result;
        }
        if (code === 60 /* < */) {
          return result;
        }
        if (code === 62 /* > */) {
          result.pos = pos + 1;
          result.str = unescapeAll$2(str.slice(start + 1, pos));
          result.ok = true;
          return result;
        }
        if (code === 92 /* \ */ && pos + 1 < max) {
          pos += 2;
          continue;
        }
        pos++;
      }
      // no closing '>'
            return result;
    }
    // this should be ... } else { ... branch
        level = 0;
    while (pos < max) {
      code = str.charCodeAt(pos);
      if (code === 32) {
        break;
      }
      // ascii control characters
            if (code < 32 || code === 127) {
        break;
      }
      if (code === 92 /* \ */ && pos + 1 < max) {
        if (str.charCodeAt(pos + 1) === 32) {
          break;
        }
        pos += 2;
        continue;
      }
      if (code === 40 /* ( */) {
        level++;
        if (level > 32) {
          return result;
        }
      }
      if (code === 41 /* ) */) {
        if (level === 0) {
          break;
        }
        level--;
      }
      pos++;
    }
    if (start === pos) {
      return result;
    }
    if (level !== 0) {
      return result;
    }
    result.str = unescapeAll$2(str.slice(start, pos));
    result.lines = lines;
    result.pos = pos;
    result.ok = true;
    return result;
  };
  var unescapeAll$1 = utils.unescapeAll;
  var parse_link_title = function parseLinkTitle(str, pos, max) {
    var code, marker, lines = 0, start = pos, result = {
      ok: false,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (pos >= max) {
      return result;
    }
    marker = str.charCodeAt(pos);
    if (marker !== 34 /* " */ && marker !== 39 /* ' */ && marker !== 40 /* ( */) {
      return result;
    }
    pos++;
    // if opening marker is "(", switch it to closing marker ")"
        if (marker === 40) {
      marker = 41;
    }
    while (pos < max) {
      code = str.charCodeAt(pos);
      if (code === marker) {
        result.pos = pos + 1;
        result.lines = lines;
        result.str = unescapeAll$1(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      } else if (code === 40 /* ( */ && marker === 41 /* ) */) {
        return result;
      } else if (code === 10) {
        lines++;
      } else if (code === 92 /* \ */ && pos + 1 < max) {
        pos++;
        if (str.charCodeAt(pos) === 10) {
          lines++;
        }
      }
      pos++;
    }
    return result;
  };
  var parseLinkLabel = parse_link_label;
  var parseLinkDestination = parse_link_destination;
  var parseLinkTitle = parse_link_title;
  var helpers = {
    parseLinkLabel: parseLinkLabel,
    parseLinkDestination: parseLinkDestination,
    parseLinkTitle: parseLinkTitle
  };
  var assign$1 = utils.assign;
  var unescapeAll = utils.unescapeAll;
  var escapeHtml = utils.escapeHtml;
  ////////////////////////////////////////////////////////////////////////////////
    var default_rules = {};
  default_rules.code_inline = function(tokens, idx, options, env, slf) {
    var token = tokens[idx];
    return "<code" + slf.renderAttrs(token) + ">" + escapeHtml(tokens[idx].content) + "</code>";
  };
  default_rules.code_block = function(tokens, idx, options, env, slf) {
    var token = tokens[idx];
    return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
  };
  default_rules.fence = function(tokens, idx, options, env, slf) {
    var token = tokens[idx], info = token.info ? unescapeAll(token.info).trim() : "", langName = "", langAttrs = "", highlighted, i, arr, tmpAttrs, tmpToken;
    if (info) {
      arr = info.split(/(\s+)/g);
      langName = arr[0];
      langAttrs = arr.slice(2).join("");
    }
    if (options.highlight) {
      highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
    } else {
      highlighted = escapeHtml(token.content);
    }
    if (highlighted.indexOf("<pre") === 0) {
      return highlighted + "\n";
    }
    // If language exists, inject class gently, without modifying original token.
    // May be, one day we will add .deepClone() for token and simplify this part, but
    // now we prefer to keep things local.
        if (info) {
      i = token.attrIndex("class");
      tmpAttrs = token.attrs ? token.attrs.slice() : [];
      if (i < 0) {
        tmpAttrs.push([ "class", options.langPrefix + langName ]);
      } else {
        tmpAttrs[i] = tmpAttrs[i].slice();
        tmpAttrs[i][1] += " " + options.langPrefix + langName;
      }
      // Fake token just to render attributes
            tmpToken = {
        attrs: tmpAttrs
      };
      return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
    }
    return "<pre><code" + slf.renderAttrs(token) + ">" + highlighted + "</code></pre>\n";
  };
  default_rules.image = function(tokens, idx, options, env, slf) {
    var token = tokens[idx];
    // "alt" attr MUST be set, even if empty. Because it's mandatory and
    // should be placed on proper position for tests.
    
    // Replace content with actual value
        token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env);
    return slf.renderToken(tokens, idx, options);
  };
  default_rules.hardbreak = function(tokens, idx, options /*, env */) {
    return options.xhtmlOut ? "<br />\n" : "<br>\n";
  };
  default_rules.softbreak = function(tokens, idx, options /*, env */) {
    return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
  };
  default_rules.text = function(tokens, idx /*, options, env */) {
    return escapeHtml(tokens[idx].content);
  };
  default_rules.html_block = function(tokens, idx /*, options, env */) {
    return tokens[idx].content;
  };
  default_rules.html_inline = function(tokens, idx /*, options, env */) {
    return tokens[idx].content;
  };
  /**
	 * new Renderer()
	 *
	 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
	 **/  function Renderer() {
    /**
	   * Renderer#rules -> Object
	   *
	   * Contains render rules for tokens. Can be updated and extended.
	   *
	   * ##### Example
	   *
	   * ```javascript
	   * var md = require('markdown-it')();
	   *
	   * md.renderer.rules.strong_open  = function () { return '<b>'; };
	   * md.renderer.rules.strong_close = function () { return '</b>'; };
	   *
	   * var result = md.renderInline(...);
	   * ```
	   *
	   * Each rule is called as independent static function with fixed signature:
	   *
	   * ```javascript
	   * function my_token_render(tokens, idx, options, env, renderer) {
	   *   // ...
	   *   return renderedHTML;
	   * }
	   * ```
	   *
	   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
	   * for more details and examples.
	   **/
    this.rules = assign$1({}, default_rules);
  }
  /**
	 * Renderer.renderAttrs(token) -> String
	 *
	 * Render token attributes to string.
	 **/  Renderer.prototype.renderAttrs = function renderAttrs(token) {
    var i, l, result;
    if (!token.attrs) {
      return "";
    }
    result = "";
    for (i = 0, l = token.attrs.length; i < l; i++) {
      result += " " + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
    }
    return result;
  };
  /**
	 * Renderer.renderToken(tokens, idx, options) -> String
	 * - tokens (Array): list of tokens
	 * - idx (Numbed): token index to render
	 * - options (Object): params of parser instance
	 *
	 * Default token renderer. Can be overriden by custom function
	 * in [[Renderer#rules]].
	 **/  Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
    var nextToken, result = "", needLf = false, token = tokens[idx];
    // Tight list paragraphs
        if (token.hidden) {
      return "";
    }
    // Insert a newline between hidden paragraph and subsequent opening
    // block-level tag.
    
    // For example, here we should insert a newline before blockquote:
    //  - a
    //    >
    
        if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
      result += "\n";
    }
    // Add token name, e.g. `<img`
        result += (token.nesting === -1 ? "</" : "<") + token.tag;
    // Encode attributes, e.g. `<img src="foo"`
        result += this.renderAttrs(token);
    // Add a slash for self-closing tags, e.g. `<img src="foo" /`
        if (token.nesting === 0 && options.xhtmlOut) {
      result += " /";
    }
    // Check if we need to add a newline after this tag
        if (token.block) {
      needLf = true;
      if (token.nesting === 1) {
        if (idx + 1 < tokens.length) {
          nextToken = tokens[idx + 1];
          if (nextToken.type === "inline" || nextToken.hidden) {
            // Block-level tag containing an inline tag.
            needLf = false;
          } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
            // Opening tag + closing tag of the same type. E.g. `<li></li>`.
            needLf = false;
          }
        }
      }
    }
    result += needLf ? ">\n" : ">";
    return result;
  };
  /**
	 * Renderer.renderInline(tokens, options, env) -> String
	 * - tokens (Array): list on block tokens to render
	 * - options (Object): params of parser instance
	 * - env (Object): additional data from parsed input (references, for example)
	 *
	 * The same as [[Renderer.render]], but for single token of `inline` type.
	 **/  Renderer.prototype.renderInline = function(tokens, options, env) {
    var type, result = "", rules = this.rules;
    for (var i = 0, len = tokens.length; i < len; i++) {
      type = tokens[i].type;
      if (typeof rules[type] !== "undefined") {
        result += rules[type](tokens, i, options, env, this);
      } else {
        result += this.renderToken(tokens, i, options);
      }
    }
    return result;
  };
  /** internal
	 * Renderer.renderInlineAsText(tokens, options, env) -> String
	 * - tokens (Array): list on block tokens to render
	 * - options (Object): params of parser instance
	 * - env (Object): additional data from parsed input (references, for example)
	 *
	 * Special kludge for image `alt` attributes to conform CommonMark spec.
	 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
	 * instead of simple escaping.
	 **/  Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
    var result = "";
    for (var i = 0, len = tokens.length; i < len; i++) {
      if (tokens[i].type === "text") {
        result += tokens[i].content;
      } else if (tokens[i].type === "image") {
        result += this.renderInlineAsText(tokens[i].children, options, env);
      } else if (tokens[i].type === "softbreak") {
        result += "\n";
      }
    }
    return result;
  };
  /**
	 * Renderer.render(tokens, options, env) -> String
	 * - tokens (Array): list on block tokens to render
	 * - options (Object): params of parser instance
	 * - env (Object): additional data from parsed input (references, for example)
	 *
	 * Takes token stream and generates HTML. Probably, you will never need to call
	 * this method directly.
	 **/  Renderer.prototype.render = function(tokens, options, env) {
    var i, len, type, result = "", rules = this.rules;
    for (i = 0, len = tokens.length; i < len; i++) {
      type = tokens[i].type;
      if (type === "inline") {
        result += this.renderInline(tokens[i].children, options, env);
      } else if (typeof rules[type] !== "undefined") {
        result += rules[tokens[i].type](tokens, i, options, env, this);
      } else {
        result += this.renderToken(tokens, i, options, env);
      }
    }
    return result;
  };
  var renderer = Renderer;
  /**
	 * class Ruler
	 *
	 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
	 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
	 *
	 * - keep rules in defined order
	 * - assign the name to each rule
	 * - enable/disable rules
	 * - add/replace rules
	 * - allow assign rules to additional named chains (in the same)
	 * - cacheing lists of active rules
	 *
	 * You will not need use this class directly until write plugins. For simple
	 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
	 * [[MarkdownIt.use]].
	 **/
  /**
	 * new Ruler()
	 **/  function Ruler() {
    // List of added rules. Each element is:
    // {
    //   name: XXX,
    //   enabled: Boolean,
    //   fn: Function(),
    //   alt: [ name2, name3 ]
    // }
    this.__rules__ = [];
    // Cached rule chains.
    
    // First level - chain name, '' for default.
    // Second level - diginal anchor for fast filtering by charcodes.
    
        this.__cache__ = null;
  }
  ////////////////////////////////////////////////////////////////////////////////
  // Helper methods, should not be used directly
  // Find rule index by name
  
    Ruler.prototype.__find__ = function(name) {
    for (var i = 0; i < this.__rules__.length; i++) {
      if (this.__rules__[i].name === name) {
        return i;
      }
    }
    return -1;
  };
  // Build rules lookup cache
  
    Ruler.prototype.__compile__ = function() {
    var self = this;
    var chains = [ "" ];
    // collect unique names
        self.__rules__.forEach((function(rule) {
      if (!rule.enabled) {
        return;
      }
      rule.alt.forEach((function(altName) {
        if (chains.indexOf(altName) < 0) {
          chains.push(altName);
        }
      }));
    }));
    self.__cache__ = {};
    chains.forEach((function(chain) {
      self.__cache__[chain] = [];
      self.__rules__.forEach((function(rule) {
        if (!rule.enabled) {
          return;
        }
        if (chain && rule.alt.indexOf(chain) < 0) {
          return;
        }
        self.__cache__[chain].push(rule.fn);
      }));
    }));
  };
  /**
	 * Ruler.at(name, fn [, options])
	 * - name (String): rule name to replace.
	 * - fn (Function): new rule function.
	 * - options (Object): new rule options (not mandatory).
	 *
	 * Replace rule by name with new function & options. Throws error if name not
	 * found.
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * Replace existing typographer replacement rule with new one:
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.core.ruler.at('replacements', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/  Ruler.prototype.at = function(name, fn, options) {
    var index = this.__find__(name);
    var opt = options || {};
    if (index === -1) {
      throw new Error("Parser rule not found: " + name);
    }
    this.__rules__[index].fn = fn;
    this.__rules__[index].alt = opt.alt || [];
    this.__cache__ = null;
  };
  /**
	 * Ruler.before(beforeName, ruleName, fn [, options])
	 * - beforeName (String): new rule will be added before this one.
	 * - ruleName (String): name of added rule.
	 * - fn (Function): rule function.
	 * - options (Object): rule options (not mandatory).
	 *
	 * Add new rule to chain before one with given name. See also
	 * [[Ruler.after]], [[Ruler.push]].
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/  Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
    var index = this.__find__(beforeName);
    var opt = options || {};
    if (index === -1) {
      throw new Error("Parser rule not found: " + beforeName);
    }
    this.__rules__.splice(index, 0, {
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  /**
	 * Ruler.after(afterName, ruleName, fn [, options])
	 * - afterName (String): new rule will be added after this one.
	 * - ruleName (String): name of added rule.
	 * - fn (Function): rule function.
	 * - options (Object): rule options (not mandatory).
	 *
	 * Add new rule to chain after one with given name. See also
	 * [[Ruler.before]], [[Ruler.push]].
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/  Ruler.prototype.after = function(afterName, ruleName, fn, options) {
    var index = this.__find__(afterName);
    var opt = options || {};
    if (index === -1) {
      throw new Error("Parser rule not found: " + afterName);
    }
    this.__rules__.splice(index + 1, 0, {
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  /**
	 * Ruler.push(ruleName, fn [, options])
	 * - ruleName (String): name of added rule.
	 * - fn (Function): rule function.
	 * - options (Object): rule options (not mandatory).
	 *
	 * Push new rule to the end of chain. See also
	 * [[Ruler.before]], [[Ruler.after]].
	 *
	 * ##### Options:
	 *
	 * - __alt__ - array with names of "alternate" chains.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 *
	 * md.core.ruler.push('my_rule', function replace(state) {
	 *   //...
	 * });
	 * ```
	 **/  Ruler.prototype.push = function(ruleName, fn, options) {
    var opt = options || {};
    this.__rules__.push({
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  /**
	 * Ruler.enable(list [, ignoreInvalid]) -> Array
	 * - list (String|Array): list of rule names to enable.
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Enable rules with given names. If any rule name not found - throw Error.
	 * Errors can be disabled by second param.
	 *
	 * Returns list of found rule names (if no exception happened).
	 *
	 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
	 **/  Ruler.prototype.enable = function(list, ignoreInvalid) {
    if (!Array.isArray(list)) {
      list = [ list ];
    }
    var result = [];
    // Search by name and enable
        list.forEach((function(name) {
      var idx = this.__find__(name);
      if (idx < 0) {
        if (ignoreInvalid) {
          return;
        }
        throw new Error("Rules manager: invalid rule name " + name);
      }
      this.__rules__[idx].enabled = true;
      result.push(name);
    }), this);
    this.__cache__ = null;
    return result;
  };
  /**
	 * Ruler.enableOnly(list [, ignoreInvalid])
	 * - list (String|Array): list of rule names to enable (whitelist).
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Enable rules with given names, and disable everything else. If any rule name
	 * not found - throw Error. Errors can be disabled by second param.
	 *
	 * See also [[Ruler.disable]], [[Ruler.enable]].
	 **/  Ruler.prototype.enableOnly = function(list, ignoreInvalid) {
    if (!Array.isArray(list)) {
      list = [ list ];
    }
    this.__rules__.forEach((function(rule) {
      rule.enabled = false;
    }));
    this.enable(list, ignoreInvalid);
  };
  /**
	 * Ruler.disable(list [, ignoreInvalid]) -> Array
	 * - list (String|Array): list of rule names to disable.
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Disable rules with given names. If any rule name not found - throw Error.
	 * Errors can be disabled by second param.
	 *
	 * Returns list of found rule names (if no exception happened).
	 *
	 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
	 **/  Ruler.prototype.disable = function(list, ignoreInvalid) {
    if (!Array.isArray(list)) {
      list = [ list ];
    }
    var result = [];
    // Search by name and disable
        list.forEach((function(name) {
      var idx = this.__find__(name);
      if (idx < 0) {
        if (ignoreInvalid) {
          return;
        }
        throw new Error("Rules manager: invalid rule name " + name);
      }
      this.__rules__[idx].enabled = false;
      result.push(name);
    }), this);
    this.__cache__ = null;
    return result;
  };
  /**
	 * Ruler.getRules(chainName) -> Array
	 *
	 * Return array of active functions (rules) for given chain name. It analyzes
	 * rules configuration, compiles caches if not exists and returns result.
	 *
	 * Default chain name is `''` (empty string). It can't be skipped. That's
	 * done intentionally, to keep signature monomorphic for high speed.
	 **/  Ruler.prototype.getRules = function(chainName) {
    if (this.__cache__ === null) {
      this.__compile__();
    }
    // Chain can be empty, if rules disabled. But we still have to return Array.
        return this.__cache__[chainName] || [];
  };
  var ruler = Ruler;
  // Normalize input string
  // https://spec.commonmark.org/0.29/#line-ending
    var NEWLINES_RE = /\r\n?|\n/g;
  var NULL_RE = /\0/g;
  var normalize = function normalize(state) {
    var str;
    // Normalize newlines
        str = state.src.replace(NEWLINES_RE, "\n");
    // Replace NULL characters
        str = str.replace(NULL_RE, "\ufffd");
    state.src = str;
  };
  var block = function block(state) {
    var token;
    if (state.inlineMode) {
      token = new state.Token("inline", "", 0);
      token.content = state.src;
      token.map = [ 0, 1 ];
      token.children = [];
      state.tokens.push(token);
    } else {
      state.md.block.parse(state.src, state.md, state.env, state.tokens);
    }
  };
  var inline = function inline(state) {
    var tokens = state.tokens, tok, i, l;
    // Parse inlines
        for (i = 0, l = tokens.length; i < l; i++) {
      tok = tokens[i];
      if (tok.type === "inline") {
        state.md.inline.parse(tok.content, state.md, state.env, tok.children);
      }
    }
  };
  var arrayReplaceAt = utils.arrayReplaceAt;
  function isLinkOpen$1(str) {
    return /^<a[>\s]/i.test(str);
  }
  function isLinkClose$1(str) {
    return /^<\/a\s*>/i.test(str);
  }
  var linkify$1 = function linkify(state) {
    var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
    if (!state.md.options.linkify) {
      return;
    }
    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
        continue;
      }
      tokens = blockTokens[j].children;
      htmlLinkLevel = 0;
      // We scan from the end, to keep position when new tags added.
      // Use reversed logic in links start/end match
            for (i = tokens.length - 1; i >= 0; i--) {
        currentToken = tokens[i];
        // Skip content of markdown links
                if (currentToken.type === "link_close") {
          i--;
          while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
            i--;
          }
          continue;
        }
        // Skip content of html tag links
                if (currentToken.type === "html_inline") {
          if (isLinkOpen$1(currentToken.content) && htmlLinkLevel > 0) {
            htmlLinkLevel--;
          }
          if (isLinkClose$1(currentToken.content)) {
            htmlLinkLevel++;
          }
        }
        if (htmlLinkLevel > 0) {
          continue;
        }
        if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
          text = currentToken.content;
          links = state.md.linkify.match(text);
          // Now split string to nodes
                    nodes = [];
          level = currentToken.level;
          lastPos = 0;
          // forbid escape sequence at the start of the string,
          // this avoids http\://example.com/ from being linkified as
          // http:<a href="//example.com/">//example.com/</a>
                    if (links.length > 0 && links[0].index === 0 && i > 0 && tokens[i - 1].type === "text_special") {
            links = links.slice(1);
          }
          for (ln = 0; ln < links.length; ln++) {
            url = links[ln].url;
            fullUrl = state.md.normalizeLink(url);
            if (!state.md.validateLink(fullUrl)) {
              continue;
            }
            urlText = links[ln].text;
            // Linkifier might send raw hostnames like "example.com", where url
            // starts with domain name. So we prepend http:// in those cases,
            // and remove it afterwards.
            
                        if (!links[ln].schema) {
              urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
            } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
              urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
            } else {
              urlText = state.md.normalizeLinkText(urlText);
            }
            pos = links[ln].index;
            if (pos > lastPos) {
              token = new state.Token("text", "", 0);
              token.content = text.slice(lastPos, pos);
              token.level = level;
              nodes.push(token);
            }
            token = new state.Token("link_open", "a", 1);
            token.attrs = [ [ "href", fullUrl ] ];
            token.level = level++;
            token.markup = "linkify";
            token.info = "auto";
            nodes.push(token);
            token = new state.Token("text", "", 0);
            token.content = urlText;
            token.level = level;
            nodes.push(token);
            token = new state.Token("link_close", "a", -1);
            token.level = --level;
            token.markup = "linkify";
            token.info = "auto";
            nodes.push(token);
            lastPos = links[ln].lastIndex;
          }
          if (lastPos < text.length) {
            token = new state.Token("text", "", 0);
            token.content = text.slice(lastPos);
            token.level = level;
            nodes.push(token);
          }
          // replace current node
                    blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
        }
      }
    }
  };
  // Simple typographic replacements
  // TODO:
  // - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
  // - multiplications 2 x 4 -> 2 × 4
    var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
  // Workaround for phantomjs - need regex without /g flag,
  // or root check will fail every second time
    var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
  var SCOPED_ABBR_RE = /\((c|tm|r)\)/gi;
  var SCOPED_ABBR = {
    c: "\xa9",
    r: "\xae",
    tm: "\u2122"
  };
  function replaceFn(match, name) {
    return SCOPED_ABBR[name.toLowerCase()];
  }
  function replace_scoped(inlineTokens) {
    var i, token, inside_autolink = 0;
    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];
      if (token.type === "text" && !inside_autolink) {
        token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
      }
      if (token.type === "link_open" && token.info === "auto") {
        inside_autolink--;
      }
      if (token.type === "link_close" && token.info === "auto") {
        inside_autolink++;
      }
    }
  }
  function replace_rare(inlineTokens) {
    var i, token, inside_autolink = 0;
    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];
      if (token.type === "text" && !inside_autolink) {
        if (RARE_RE.test(token.content)) {
          token.content = token.content.replace(/\+-/g, "\xb1").replace(/\.{2,}/g, "\u2026").replace(/([?!])\u2026/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1\u2014").replace(/(^|\s)--(?=\s|$)/gm, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1\u2013");
        }
      }
      if (token.type === "link_open" && token.info === "auto") {
        inside_autolink--;
      }
      if (token.type === "link_close" && token.info === "auto") {
        inside_autolink++;
      }
    }
  }
  var replacements = function replace(state) {
    var blkIdx;
    if (!state.md.options.typographer) {
      return;
    }
    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state.tokens[blkIdx].type !== "inline") {
        continue;
      }
      if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
        replace_scoped(state.tokens[blkIdx].children);
      }
      if (RARE_RE.test(state.tokens[blkIdx].content)) {
        replace_rare(state.tokens[blkIdx].children);
      }
    }
  };
  var isWhiteSpace$1 = utils.isWhiteSpace;
  var isPunctChar$1 = utils.isPunctChar;
  var isMdAsciiPunct$1 = utils.isMdAsciiPunct;
  var QUOTE_TEST_RE = /['"]/;
  var QUOTE_RE = /['"]/g;
  var APOSTROPHE = "\u2019";
 /* ’ */  function replaceAt(str, index, ch) {
    return str.slice(0, index) + ch + str.slice(index + 1);
  }
  function process_inlines(tokens, state) {
    var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
    stack = [];
    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      thisLevel = tokens[i].level;
      for (j = stack.length - 1; j >= 0; j--) {
        if (stack[j].level <= thisLevel) {
          break;
        }
      }
      stack.length = j + 1;
      if (token.type !== "text") {
        continue;
      }
      text = token.content;
      pos = 0;
      max = text.length;
      /*eslint no-labels:0,block-scoped-var:0*/      OUTER: while (pos < max) {
        QUOTE_RE.lastIndex = pos;
        t = QUOTE_RE.exec(text);
        if (!t) {
          break;
        }
        canOpen = canClose = true;
        pos = t.index + 1;
        isSingle = t[0] === "'";
        // Find previous character,
        // default to space if it's the beginning of the line
        
                lastChar = 32;
        if (t.index - 1 >= 0) {
          lastChar = text.charCodeAt(t.index - 1);
        } else {
          for (j = i - 1; j >= 0; j--) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break;
 // lastChar defaults to 0x20
                        if (!tokens[j].content) continue;
 // should skip all tokens except 'text', 'html_inline' or 'code_inline'
                        lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
            break;
          }
        }
        // Find next character,
        // default to space if it's the end of the line
        
                nextChar = 32;
        if (pos < max) {
          nextChar = text.charCodeAt(pos);
        } else {
          for (j = i + 1; j < tokens.length; j++) {
            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break;
 // nextChar defaults to 0x20
                        if (!tokens[j].content) continue;
 // should skip all tokens except 'text', 'html_inline' or 'code_inline'
                        nextChar = tokens[j].content.charCodeAt(0);
            break;
          }
        }
        isLastPunctChar = isMdAsciiPunct$1(lastChar) || isPunctChar$1(String.fromCharCode(lastChar));
        isNextPunctChar = isMdAsciiPunct$1(nextChar) || isPunctChar$1(String.fromCharCode(nextChar));
        isLastWhiteSpace = isWhiteSpace$1(lastChar);
        isNextWhiteSpace = isWhiteSpace$1(nextChar);
        if (isNextWhiteSpace) {
          canOpen = false;
        } else if (isNextPunctChar) {
          if (!(isLastWhiteSpace || isLastPunctChar)) {
            canOpen = false;
          }
        }
        if (isLastWhiteSpace) {
          canClose = false;
        } else if (isLastPunctChar) {
          if (!(isNextWhiteSpace || isNextPunctChar)) {
            canClose = false;
          }
        }
        if (nextChar === 34 /* " */ && t[0] === '"') {
          if (lastChar >= 48 /* 0 */ && lastChar <= 57 /* 9 */) {
            // special case: 1"" - count first quote as an inch
            canClose = canOpen = false;
          }
        }
        if (canOpen && canClose) {
          // Replace quotes in the middle of punctuation sequence, but not
          // in the middle of the words, i.e.:
          // 1. foo " bar " baz - not replaced
          // 2. foo-"-bar-"-baz - replaced
          // 3. foo"bar"baz     - not replaced
          canOpen = isLastPunctChar;
          canClose = isNextPunctChar;
        }
        if (!canOpen && !canClose) {
          // middle of word
          if (isSingle) {
            token.content = replaceAt(token.content, t.index, APOSTROPHE);
          }
          continue;
        }
        if (canClose) {
          // this could be a closing quote, rewind the stack to get a match
          for (j = stack.length - 1; j >= 0; j--) {
            item = stack[j];
            if (stack[j].level < thisLevel) {
              break;
            }
            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];
              if (isSingle) {
                openQuote = state.md.options.quotes[2];
                closeQuote = state.md.options.quotes[3];
              } else {
                openQuote = state.md.options.quotes[0];
                closeQuote = state.md.options.quotes[1];
              }
              // replace token.content *before* tokens[item.token].content,
              // because, if they are pointing at the same token, replaceAt
              // could mess up indices when quote length != 1
                            token.content = replaceAt(token.content, t.index, closeQuote);
              tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
              pos += closeQuote.length - 1;
              if (item.token === i) {
                pos += openQuote.length - 1;
              }
              text = token.content;
              max = text.length;
              stack.length = j;
              continue OUTER;
            }
          }
        }
        if (canOpen) {
          stack.push({
            token: i,
            pos: t.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
      }
    }
  }
  var smartquotes = function smartquotes(state) {
    /*eslint max-depth:0*/
    var blkIdx;
    if (!state.md.options.typographer) {
      return;
    }
    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
        continue;
      }
      process_inlines(state.tokens[blkIdx].children, state);
    }
  };
  // Join raw text tokens with the rest of the text
    var text_join = function text_join(state) {
    var j, l, tokens, curr, max, last, blockTokens = state.tokens;
    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== "inline") continue;
      tokens = blockTokens[j].children;
      max = tokens.length;
      for (curr = 0; curr < max; curr++) {
        if (tokens[curr].type === "text_special") {
          tokens[curr].type = "text";
        }
      }
      for (curr = last = 0; curr < max; curr++) {
        if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
          // collapse two adjacent text nodes
          tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
        } else {
          if (curr !== last) {
            tokens[last] = tokens[curr];
          }
          last++;
        }
      }
      if (curr !== last) {
        tokens.length = last;
      }
    }
  };
  // Token class
  /**
	 * class Token
	 **/
  /**
	 * new Token(type, tag, nesting)
	 *
	 * Create new token and fill passed properties.
	 **/  function Token(type, tag, nesting) {
    /**
	   * Token#type -> String
	   *
	   * Type of the token (string, e.g. "paragraph_open")
	   **/
    this.type = type;
    /**
	   * Token#tag -> String
	   *
	   * html tag name, e.g. "p"
	   **/    this.tag = tag;
    /**
	   * Token#attrs -> Array
	   *
	   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
	   **/    this.attrs = null;
    /**
	   * Token#map -> Array
	   *
	   * Source map info. Format: `[ line_begin, line_end ]`
	   **/    this.map = null;
    /**
	   * Token#nesting -> Number
	   *
	   * Level change (number in {-1, 0, 1} set), where:
	   *
	   * -  `1` means the tag is opening
	   * -  `0` means the tag is self-closing
	   * - `-1` means the tag is closing
	   **/    this.nesting = nesting;
    /**
	   * Token#level -> Number
	   *
	   * nesting level, the same as `state.level`
	   **/    this.level = 0;
    /**
	   * Token#children -> Array
	   *
	   * An array of child nodes (inline and img tokens)
	   **/    this.children = null;
    /**
	   * Token#content -> String
	   *
	   * In a case of self-closing tag (code, html, fence, etc.),
	   * it has contents of this tag.
	   **/    this.content = "";
    /**
	   * Token#markup -> String
	   *
	   * '*' or '_' for emphasis, fence string for fence, etc.
	   **/    this.markup = "";
    /**
	   * Token#info -> String
	   *
	   * Additional information:
	   *
	   * - Info string for "fence" tokens
	   * - The value "auto" for autolink "link_open" and "link_close" tokens
	   * - The string value of the item marker for ordered-list "list_item_open" tokens
	   **/    this.info = "";
    /**
	   * Token#meta -> Object
	   *
	   * A place for plugins to store an arbitrary data
	   **/    this.meta = null;
    /**
	   * Token#block -> Boolean
	   *
	   * True for block-level tokens, false for inline tokens.
	   * Used in renderer to calculate line breaks
	   **/    this.block = false;
    /**
	   * Token#hidden -> Boolean
	   *
	   * If it's true, ignore this element when rendering. Used for tight lists
	   * to hide paragraphs.
	   **/    this.hidden = false;
  }
  /**
	 * Token.attrIndex(name) -> Number
	 *
	 * Search attribute index by name.
	 **/  Token.prototype.attrIndex = function attrIndex(name) {
    var attrs, i, len;
    if (!this.attrs) {
      return -1;
    }
    attrs = this.attrs;
    for (i = 0, len = attrs.length; i < len; i++) {
      if (attrs[i][0] === name) {
        return i;
      }
    }
    return -1;
  };
  /**
	 * Token.attrPush(attrData)
	 *
	 * Add `[ name, value ]` attribute to list. Init attrs if necessary
	 **/  Token.prototype.attrPush = function attrPush(attrData) {
    if (this.attrs) {
      this.attrs.push(attrData);
    } else {
      this.attrs = [ attrData ];
    }
  };
  /**
	 * Token.attrSet(name, value)
	 *
	 * Set `name` attribute to `value`. Override old value if exists.
	 **/  Token.prototype.attrSet = function attrSet(name, value) {
    var idx = this.attrIndex(name), attrData = [ name, value ];
    if (idx < 0) {
      this.attrPush(attrData);
    } else {
      this.attrs[idx] = attrData;
    }
  };
  /**
	 * Token.attrGet(name)
	 *
	 * Get the value of attribute `name`, or null if it does not exist.
	 **/  Token.prototype.attrGet = function attrGet(name) {
    var idx = this.attrIndex(name), value = null;
    if (idx >= 0) {
      value = this.attrs[idx][1];
    }
    return value;
  };
  /**
	 * Token.attrJoin(name, value)
	 *
	 * Join value to existing attribute via space. Or create new attribute if not
	 * exists. Useful to operate with token classes.
	 **/  Token.prototype.attrJoin = function attrJoin(name, value) {
    var idx = this.attrIndex(name);
    if (idx < 0) {
      this.attrPush([ name, value ]);
    } else {
      this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
    }
  };
  var token = Token;
  function StateCore(src, md, env) {
    this.src = src;
    this.env = env;
    this.tokens = [];
    this.inlineMode = false;
    this.md = md;
 // link to parser instance
    }
  // re-export Token class to use in core rules
    StateCore.prototype.Token = token;
  var state_core = StateCore;
  var _rules$2 = [ [ "normalize", normalize ], [ "block", block ], [ "inline", inline ], [ "linkify", linkify$1 ], [ "replacements", replacements ], [ "smartquotes", smartquotes ], 
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  [ "text_join", text_join ] ];
  /**
	 * new Core()
	 **/  function Core() {
    /**
	   * Core#ruler -> Ruler
	   *
	   * [[Ruler]] instance. Keep configuration of core rules.
	   **/
    this.ruler = new ruler;
    for (var i = 0; i < _rules$2.length; i++) {
      this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
    }
  }
  /**
	 * Core.process(state)
	 *
	 * Executes core chain rules.
	 **/  Core.prototype.process = function(state) {
    var i, l, rules;
    rules = this.ruler.getRules("");
    for (i = 0, l = rules.length; i < l; i++) {
      rules[i](state);
    }
  };
  Core.prototype.State = state_core;
  var parser_core = Core;
  var isSpace$a = utils.isSpace;
  function getLine(state, line) {
    var pos = state.bMarks[line] + state.tShift[line], max = state.eMarks[line];
    return state.src.slice(pos, max);
  }
  function escapedSplit(str) {
    var result = [], pos = 0, max = str.length, ch, isEscaped = false, lastPos = 0, current = "";
    ch = str.charCodeAt(pos);
    while (pos < max) {
      if (ch === 124 /* | */) {
        if (!isEscaped) {
          // pipe separating cells, '|'
          result.push(current + str.substring(lastPos, pos));
          current = "";
          lastPos = pos + 1;
        } else {
          // escaped pipe, '\|'
          current += str.substring(lastPos, pos - 1);
          lastPos = pos;
        }
      }
      isEscaped = ch === 92 /* \ */;
      pos++;
      ch = str.charCodeAt(pos);
    }
    result.push(current + str.substring(lastPos));
    return result;
  }
  var table = function table(state, startLine, endLine, silent) {
    var ch, lineText, pos, i, l, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh;
    // should have at least two lines
        if (startLine + 2 > endLine) {
      return false;
    }
    nextLine = startLine + 1;
    if (state.sCount[nextLine] < state.blkIndent) {
      return false;
    }
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
      return false;
    }
    // first character of the second line should be '|', '-', ':',
    // and no other characters are allowed but spaces;
    // basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
    if (pos >= state.eMarks[nextLine]) {
      return false;
    }
    firstCh = state.src.charCodeAt(pos++);
    if (firstCh !== 124 /* | */ && firstCh !== 45 /* - */ && firstCh !== 58 /* : */) {
      return false;
    }
    if (pos >= state.eMarks[nextLine]) {
      return false;
    }
    secondCh = state.src.charCodeAt(pos++);
    if (secondCh !== 124 /* | */ && secondCh !== 45 /* - */ && secondCh !== 58 /* : */ && !isSpace$a(secondCh)) {
      return false;
    }
    // if first character is '-', then second character must not be a space
    // (due to parsing ambiguity with list)
        if (firstCh === 45 /* - */ && isSpace$a(secondCh)) {
      return false;
    }
    while (pos < state.eMarks[nextLine]) {
      ch = state.src.charCodeAt(pos);
      if (ch !== 124 /* | */ && ch !== 45 /* - */ && ch !== 58 /* : */ && !isSpace$a(ch)) {
        return false;
      }
      pos++;
    }
    lineText = getLine(state, startLine + 1);
    columns = lineText.split("|");
    aligns = [];
    for (i = 0; i < columns.length; i++) {
      t = columns[i].trim();
      if (!t) {
        // allow empty columns before and after table, but not in between columns;
        // e.g. allow ` |---| `, disallow ` ---||--- `
        if (i === 0 || i === columns.length - 1) {
          continue;
        } else {
          return false;
        }
      }
      if (!/^:?-+:?$/.test(t)) {
        return false;
      }
      if (t.charCodeAt(t.length - 1) === 58 /* : */) {
        aligns.push(t.charCodeAt(0) === 58 /* : */ ? "center" : "right");
      } else if (t.charCodeAt(0) === 58 /* : */) {
        aligns.push("left");
      } else {
        aligns.push("");
      }
    }
    lineText = getLine(state, startLine).trim();
    if (lineText.indexOf("|") === -1) {
      return false;
    }
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === "") columns.shift();
    if (columns.length && columns[columns.length - 1] === "") columns.pop();
    // header row will define an amount of columns in the entire table,
    // and align row should be exactly the same (the rest of the rows can differ)
        columnCount = columns.length;
    if (columnCount === 0 || columnCount !== aligns.length) {
      return false;
    }
    if (silent) {
      return true;
    }
    oldParentType = state.parentType;
    state.parentType = "table";
    // use 'blockquote' lists for termination because it's
    // the most similar to tables
        terminatorRules = state.md.block.ruler.getRules("blockquote");
    token = state.push("table_open", "table", 1);
    token.map = tableLines = [ startLine, 0 ];
    token = state.push("thead_open", "thead", 1);
    token.map = [ startLine, startLine + 1 ];
    token = state.push("tr_open", "tr", 1);
    token.map = [ startLine, startLine + 1 ];
    for (i = 0; i < columns.length; i++) {
      token = state.push("th_open", "th", 1);
      if (aligns[i]) {
        token.attrs = [ [ "style", "text-align:" + aligns[i] ] ];
      }
      token = state.push("inline", "", 0);
      token.content = columns[i].trim();
      token.children = [];
      token = state.push("th_close", "th", -1);
    }
    token = state.push("tr_close", "tr", -1);
    token = state.push("thead_close", "thead", -1);
    for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
      lineText = getLine(state, nextLine).trim();
      if (!lineText) {
        break;
      }
      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        break;
      }
      columns = escapedSplit(lineText);
      if (columns.length && columns[0] === "") columns.shift();
      if (columns.length && columns[columns.length - 1] === "") columns.pop();
      if (nextLine === startLine + 2) {
        token = state.push("tbody_open", "tbody", 1);
        token.map = tbodyLines = [ startLine + 2, 0 ];
      }
      token = state.push("tr_open", "tr", 1);
      token.map = [ nextLine, nextLine + 1 ];
      for (i = 0; i < columnCount; i++) {
        token = state.push("td_open", "td", 1);
        if (aligns[i]) {
          token.attrs = [ [ "style", "text-align:" + aligns[i] ] ];
        }
        token = state.push("inline", "", 0);
        token.content = columns[i] ? columns[i].trim() : "";
        token.children = [];
        token = state.push("td_close", "td", -1);
      }
      token = state.push("tr_close", "tr", -1);
    }
    if (tbodyLines) {
      token = state.push("tbody_close", "tbody", -1);
      tbodyLines[1] = nextLine;
    }
    token = state.push("table_close", "table", -1);
    tableLines[1] = nextLine;
    state.parentType = oldParentType;
    state.line = nextLine;
    return true;
  };
  // Code block (4 spaces padded)
    var code = function code(state, startLine, endLine /*, silent*/) {
    var nextLine, last, token;
    if (state.sCount[startLine] - state.blkIndent < 4) {
      return false;
    }
    last = nextLine = startLine + 1;
    while (nextLine < endLine) {
      if (state.isEmpty(nextLine)) {
        nextLine++;
        continue;
      }
      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        nextLine++;
        last = nextLine;
        continue;
      }
      break;
    }
    state.line = last;
    token = state.push("code_block", "code", 0);
    token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
    token.map = [ startLine, state.line ];
    return true;
  };
  // fences (``` lang, ~~~ lang)
    var fence = function fence(state, startLine, endLine, silent) {
    var marker, len, params, nextLine, mem, token, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    if (pos + 3 > max) {
      return false;
    }
    marker = state.src.charCodeAt(pos);
    if (marker !== 126 /* ~ */ && marker !== 96 /* ` */) {
      return false;
    }
    // scan marker length
        mem = pos;
    pos = state.skipChars(pos, marker);
    len = pos - mem;
    if (len < 3) {
      return false;
    }
    markup = state.src.slice(mem, pos);
    params = state.src.slice(pos, max);
    if (marker === 96 /* ` */) {
      if (params.indexOf(String.fromCharCode(marker)) >= 0) {
        return false;
      }
    }
    // Since start is found, we can report success here in validation mode
        if (silent) {
      return true;
    }
    // search end of block
        nextLine = startLine;
    for (;;) {
      nextLine++;
      if (nextLine >= endLine) {
        // unclosed block should be autoclosed by end of document.
        // also block seems to be autoclosed by end of parent
        break;
      }
      pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      if (pos < max && state.sCount[nextLine] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break;
      }
      if (state.src.charCodeAt(pos) !== marker) {
        continue;
      }
      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        // closing fence should be indented less than 4 spaces
        continue;
      }
      pos = state.skipChars(pos, marker);
      // closing code fence must be at least as long as the opening one
            if (pos - mem < len) {
        continue;
      }
      // make sure tail has spaces only
            pos = state.skipSpaces(pos);
      if (pos < max) {
        continue;
      }
      haveEndMarker = true;
      // found!
            break;
    }
    // If a fence has heading spaces, they should be removed from its inner block
        len = state.sCount[startLine];
    state.line = nextLine + (haveEndMarker ? 1 : 0);
    token = state.push("fence", "code", 0);
    token.info = params;
    token.content = state.getLines(startLine + 1, nextLine, len, true);
    token.markup = markup;
    token.map = [ startLine, state.line ];
    return true;
  };
  var isSpace$9 = utils.isSpace;
  var blockquote = function blockquote(state, startLine, endLine, silent) {
    var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token, isOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    // check the block quote marker
        if (state.src.charCodeAt(pos++) !== 62 /* > */) {
      return false;
    }
    // we know that it's going to be a valid blockquote,
    // so no point trying to find the end of it in silent mode
        if (silent) {
      return true;
    }
    // set offset past spaces and ">"
        initial = offset = state.sCount[startLine] + 1;
    // skip one optional space after '>'
        if (state.src.charCodeAt(pos) === 32 /* space */) {
      // ' >   test '
      //     ^ -- position start of line here:
      pos++;
      initial++;
      offset++;
      adjustTab = false;
      spaceAfterMarker = true;
    } else if (state.src.charCodeAt(pos) === 9 /* tab */) {
      spaceAfterMarker = true;
      if ((state.bsCount[startLine] + offset) % 4 === 3) {
        // '  >\t  test '
        //       ^ -- position start of line here (tab has width===1)
        pos++;
        initial++;
        offset++;
        adjustTab = false;
      } else {
        // ' >\t  test '
        //    ^ -- position start of line here + shift bsCount slightly
        //         to make extra space appear
        adjustTab = true;
      }
    } else {
      spaceAfterMarker = false;
    }
    oldBMarks = [ state.bMarks[startLine] ];
    state.bMarks[startLine] = pos;
    while (pos < max) {
      ch = state.src.charCodeAt(pos);
      if (isSpace$9(ch)) {
        if (ch === 9) {
          offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
        } else {
          offset++;
        }
      } else {
        break;
      }
      pos++;
    }
    oldBSCount = [ state.bsCount[startLine] ];
    state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);
    lastLineEmpty = pos >= max;
    oldSCount = [ state.sCount[startLine] ];
    state.sCount[startLine] = offset - initial;
    oldTShift = [ state.tShift[startLine] ];
    state.tShift[startLine] = pos - state.bMarks[startLine];
    terminatorRules = state.md.block.ruler.getRules("blockquote");
    oldParentType = state.parentType;
    state.parentType = "blockquote";
    // Search the end of the block
    
    // Block ends with either:
    //  1. an empty line outside:
    //     ```
    //     > test
    
    //     ```
    //  2. an empty line inside:
    //     ```
    //     >
    //     test
    //     ```
    //  3. another tag:
    //     ```
    //     > test
    //      - - -
    //     ```
        for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
      // check if it's outdented, i.e. it's inside list item and indented
      // less than said list item:
      // ```
      // 1. anything
      //    > current blockquote
      // 2. checking this line
      // ```
      isOutdented = state.sCount[nextLine] < state.blkIndent;
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      if (pos >= max) {
        // Case 1: line is not inside the blockquote, and this line is empty.
        break;
      }
      if (state.src.charCodeAt(pos++) === 62 /* > */ && !isOutdented) {
        // This line is inside the blockquote.
        // set offset past spaces and ">"
        initial = offset = state.sCount[nextLine] + 1;
        // skip one optional space after '>'
                if (state.src.charCodeAt(pos) === 32 /* space */) {
          // ' >   test '
          //     ^ -- position start of line here:
          pos++;
          initial++;
          offset++;
          adjustTab = false;
          spaceAfterMarker = true;
        } else if (state.src.charCodeAt(pos) === 9 /* tab */) {
          spaceAfterMarker = true;
          if ((state.bsCount[nextLine] + offset) % 4 === 3) {
            // '  >\t  test '
            //       ^ -- position start of line here (tab has width===1)
            pos++;
            initial++;
            offset++;
            adjustTab = false;
          } else {
            // ' >\t  test '
            //    ^ -- position start of line here + shift bsCount slightly
            //         to make extra space appear
            adjustTab = true;
          }
        } else {
          spaceAfterMarker = false;
        }
        oldBMarks.push(state.bMarks[nextLine]);
        state.bMarks[nextLine] = pos;
        while (pos < max) {
          ch = state.src.charCodeAt(pos);
          if (isSpace$9(ch)) {
            if (ch === 9) {
              offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
            } else {
              offset++;
            }
          } else {
            break;
          }
          pos++;
        }
        lastLineEmpty = pos >= max;
        oldBSCount.push(state.bsCount[nextLine]);
        state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] = offset - initial;
        oldTShift.push(state.tShift[nextLine]);
        state.tShift[nextLine] = pos - state.bMarks[nextLine];
        continue;
      }
      // Case 2: line is not inside the blockquote, and the last line was empty.
            if (lastLineEmpty) {
        break;
      }
      // Case 3: another tag found.
            terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        // Quirk to enforce "hard termination mode" for paragraphs;
        // normally if you call `tokenize(state, startLine, nextLine)`,
        // paragraphs will look below nextLine for paragraph continuation,
        // but if blockquote is terminated by another tag, they shouldn't
        state.lineMax = nextLine;
        if (state.blkIndent !== 0) {
          // state.blkIndent was non-zero, we now set it to zero,
          // so we need to re-calculate all offsets to appear as
          // if indent wasn't changed
          oldBMarks.push(state.bMarks[nextLine]);
          oldBSCount.push(state.bsCount[nextLine]);
          oldTShift.push(state.tShift[nextLine]);
          oldSCount.push(state.sCount[nextLine]);
          state.sCount[nextLine] -= state.blkIndent;
        }
        break;
      }
      oldBMarks.push(state.bMarks[nextLine]);
      oldBSCount.push(state.bsCount[nextLine]);
      oldTShift.push(state.tShift[nextLine]);
      oldSCount.push(state.sCount[nextLine]);
      // A negative indentation means that this is a paragraph continuation
      
            state.sCount[nextLine] = -1;
    }
    oldIndent = state.blkIndent;
    state.blkIndent = 0;
    token = state.push("blockquote_open", "blockquote", 1);
    token.markup = ">";
    token.map = lines = [ startLine, 0 ];
    state.md.block.tokenize(state, startLine, nextLine);
    token = state.push("blockquote_close", "blockquote", -1);
    token.markup = ">";
    state.lineMax = oldLineMax;
    state.parentType = oldParentType;
    lines[1] = state.line;
    // Restore original tShift; this might not be necessary since the parser
    // has already been here, but just to make sure we can do that.
        for (i = 0; i < oldTShift.length; i++) {
      state.bMarks[i + startLine] = oldBMarks[i];
      state.tShift[i + startLine] = oldTShift[i];
      state.sCount[i + startLine] = oldSCount[i];
      state.bsCount[i + startLine] = oldBSCount[i];
    }
    state.blkIndent = oldIndent;
    return true;
  };
  var isSpace$8 = utils.isSpace;
  var hr = function hr(state, startLine, endLine, silent) {
    var marker, cnt, ch, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    marker = state.src.charCodeAt(pos++);
    // Check hr marker
        if (marker !== 42 /* * */ && marker !== 45 /* - */ && marker !== 95 /* _ */) {
      return false;
    }
    // markers can be mixed with spaces, but there should be at least 3 of them
        cnt = 1;
    while (pos < max) {
      ch = state.src.charCodeAt(pos++);
      if (ch !== marker && !isSpace$8(ch)) {
        return false;
      }
      if (ch === marker) {
        cnt++;
      }
    }
    if (cnt < 3) {
      return false;
    }
    if (silent) {
      return true;
    }
    state.line = startLine + 1;
    token = state.push("hr", "hr", 0);
    token.map = [ startLine, state.line ];
    token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
    return true;
  };
  var isSpace$7 = utils.isSpace;
  // Search `[-+*][\n ]`, returns next pos after marker on success
  // or -1 on fail.
    function skipBulletListMarker(state, startLine) {
    var marker, pos, max, ch;
    pos = state.bMarks[startLine] + state.tShift[startLine];
    max = state.eMarks[startLine];
    marker = state.src.charCodeAt(pos++);
    // Check bullet
        if (marker !== 42 /* * */ && marker !== 45 /* - */ && marker !== 43 /* + */) {
      return -1;
    }
    if (pos < max) {
      ch = state.src.charCodeAt(pos);
      if (!isSpace$7(ch)) {
        // " -test " - is not a list item
        return -1;
      }
    }
    return pos;
  }
  // Search `\d+[.)][\n ]`, returns next pos after marker on success
  // or -1 on fail.
    function skipOrderedListMarker(state, startLine) {
    var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max = state.eMarks[startLine];
    // List marker should have at least 2 chars (digit + dot)
        if (pos + 1 >= max) {
      return -1;
    }
    ch = state.src.charCodeAt(pos++);
    if (ch < 48 /* 0 */ || ch > 57 /* 9 */) {
      return -1;
    }
    for (;;) {
      // EOL -> fail
      if (pos >= max) {
        return -1;
      }
      ch = state.src.charCodeAt(pos++);
      if (ch >= 48 /* 0 */ && ch <= 57 /* 9 */) {
        // List marker should have no more than 9 digits
        // (prevents integer overflow in browsers)
        if (pos - start >= 10) {
          return -1;
        }
        continue;
      }
      // found valid marker
            if (ch === 41 /* ) */ || ch === 46 /* . */) {
        break;
      }
      return -1;
    }
    if (pos < max) {
      ch = state.src.charCodeAt(pos);
      if (!isSpace$7(ch)) {
        // " 1.test " - is not a list item
        return -1;
      }
    }
    return pos;
  }
  function markTightParagraphs(state, idx) {
    var i, l, level = state.level + 2;
    for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
      if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
        state.tokens[i + 2].hidden = true;
        state.tokens[i].hidden = true;
        i += 2;
      }
    }
  }
  var list = function list(state, startLine, endLine, silent) {
    var ch, contentStart, i, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max, nextLine, offset, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token, isTerminatingParagraph = false, tight = true;
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    // Special case:
    //  - item 1
    //   - item 2
    //    - item 3
    //     - item 4
    //      - this one is a paragraph continuation
        if (state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) {
      return false;
    }
    // limit conditions when list can interrupt
    // a paragraph (validation mode only)
        if (silent && state.parentType === "paragraph") {
      // Next list item should still terminate previous list item;
      // This code can fail if plugins use blkIndent as well as lists,
      // but I hope the spec gets fixed long before that happens.
      if (state.sCount[startLine] >= state.blkIndent) {
        isTerminatingParagraph = true;
      }
    }
    // Detect list type and position after marker
        if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
      isOrdered = true;
      start = state.bMarks[startLine] + state.tShift[startLine];
      markerValue = Number(state.src.slice(start, posAfterMarker - 1));
      // If we're starting a new ordered list right after
      // a paragraph, it should start with 1.
            if (isTerminatingParagraph && markerValue !== 1) return false;
    } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
      isOrdered = false;
    } else {
      return false;
    }
    // If we're starting a new unordered list right after
    // a paragraph, first line should not be empty.
        if (isTerminatingParagraph) {
      if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]) return false;
    }
    // We should terminate list on style change. Remember first one to compare.
        markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
    // For validation mode we can terminate immediately
        if (silent) {
      return true;
    }
    // Start list
        listTokIdx = state.tokens.length;
    if (isOrdered) {
      token = state.push("ordered_list_open", "ol", 1);
      if (markerValue !== 1) {
        token.attrs = [ [ "start", markerValue ] ];
      }
    } else {
      token = state.push("bullet_list_open", "ul", 1);
    }
    token.map = listLines = [ startLine, 0 ];
    token.markup = String.fromCharCode(markerCharCode);
    
    // Iterate list items
    
        nextLine = startLine;
    prevEmptyEnd = false;
    terminatorRules = state.md.block.ruler.getRules("list");
    oldParentType = state.parentType;
    state.parentType = "list";
    while (nextLine < endLine) {
      pos = posAfterMarker;
      max = state.eMarks[nextLine];
      initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);
      while (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (ch === 9) {
          offset += 4 - (offset + state.bsCount[nextLine]) % 4;
        } else if (ch === 32) {
          offset++;
        } else {
          break;
        }
        pos++;
      }
      contentStart = pos;
      if (contentStart >= max) {
        // trimming space in "-    \n  3" case, indent is 1 here
        indentAfterMarker = 1;
      } else {
        indentAfterMarker = offset - initial;
      }
      // If we have more than 4 spaces, the indent is 1
      // (the rest is just indented code block)
            if (indentAfterMarker > 4) {
        indentAfterMarker = 1;
      }
      // "  -  test"
      //  ^^^^^ - calculating total length of this thing
            indent = initial + indentAfterMarker;
      // Run subparser & write tokens
            token = state.push("list_item_open", "li", 1);
      token.markup = String.fromCharCode(markerCharCode);
      token.map = itemLines = [ startLine, 0 ];
      if (isOrdered) {
        token.info = state.src.slice(start, posAfterMarker - 1);
      }
      // change current state, then restore it after parser subcall
            oldTight = state.tight;
      oldTShift = state.tShift[startLine];
      oldSCount = state.sCount[startLine];
      //  - example list
      // ^ listIndent position will be here
      //   ^ blkIndent position will be here
      
            oldListIndent = state.listIndent;
      state.listIndent = state.blkIndent;
      state.blkIndent = indent;
      state.tight = true;
      state.tShift[startLine] = contentStart - state.bMarks[startLine];
      state.sCount[startLine] = offset;
      if (contentStart >= max && state.isEmpty(startLine + 1)) {
        // workaround for this case
        // (list item is empty, list terminates before "foo"):
        // ~~~~~~~~
        //   -
        //     foo
        // ~~~~~~~~
        state.line = Math.min(state.line + 2, endLine);
      } else {
        state.md.block.tokenize(state, startLine, endLine, true);
      }
      // If any of list item is tight, mark list as tight
            if (!state.tight || prevEmptyEnd) {
        tight = false;
      }
      // Item become loose if finish with empty line,
      // but we should filter last element, because it means list finish
            prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
      state.blkIndent = state.listIndent;
      state.listIndent = oldListIndent;
      state.tShift[startLine] = oldTShift;
      state.sCount[startLine] = oldSCount;
      state.tight = oldTight;
      token = state.push("list_item_close", "li", -1);
      token.markup = String.fromCharCode(markerCharCode);
      nextLine = startLine = state.line;
      itemLines[1] = nextLine;
      contentStart = state.bMarks[startLine];
      if (nextLine >= endLine) {
        break;
      }
      
      // Try to check if list is terminated or continued.
      
            if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      // if it's indented more than 3 spaces, it should be a code block
            if (state.sCount[startLine] - state.blkIndent >= 4) {
        break;
      }
      // fail if terminating block found
            terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
      // fail if list has another type
            if (isOrdered) {
        posAfterMarker = skipOrderedListMarker(state, nextLine);
        if (posAfterMarker < 0) {
          break;
        }
        start = state.bMarks[nextLine] + state.tShift[nextLine];
      } else {
        posAfterMarker = skipBulletListMarker(state, nextLine);
        if (posAfterMarker < 0) {
          break;
        }
      }
      if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
        break;
      }
    }
    // Finalize list
        if (isOrdered) {
      token = state.push("ordered_list_close", "ol", -1);
    } else {
      token = state.push("bullet_list_close", "ul", -1);
    }
    token.markup = String.fromCharCode(markerCharCode);
    listLines[1] = nextLine;
    state.line = nextLine;
    state.parentType = oldParentType;
    // mark paragraphs tight if needed
        if (tight) {
      markTightParagraphs(state, listTokIdx);
    }
    return true;
  };
  var normalizeReference$2 = utils.normalizeReference;
  var isSpace$6 = utils.isSpace;
  var reference = function reference(state, startLine, _endLine, silent) {
    var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, oldParentType, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine], nextLine = startLine + 1;
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    if (state.src.charCodeAt(pos) !== 91 /* [ */) {
      return false;
    }
    // Simple check to quickly interrupt scan on [link](url) at the start of line.
    // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
        while (++pos < max) {
      if (state.src.charCodeAt(pos) === 93 /* ] */ && state.src.charCodeAt(pos - 1) !== 92 /* \ */) {
        if (pos + 1 === max) {
          return false;
        }
        if (state.src.charCodeAt(pos + 1) !== 58 /* : */) {
          return false;
        }
        break;
      }
    }
    endLine = state.lineMax;
    // jump line-by-line until empty one or EOF
        terminatorRules = state.md.block.ruler.getRules("reference");
    oldParentType = state.parentType;
    state.parentType = "reference";
    for (;nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.sCount[nextLine] - state.blkIndent > 3) {
        continue;
      }
      // quirk for blockquotes, this line should already be checked by that rule
            if (state.sCount[nextLine] < 0) {
        continue;
      }
      // Some tags can terminate paragraph without empty line.
            terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
    }
    str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    max = str.length;
    for (pos = 1; pos < max; pos++) {
      ch = str.charCodeAt(pos);
      if (ch === 91 /* [ */) {
        return false;
      } else if (ch === 93 /* ] */) {
        labelEnd = pos;
        break;
      } else if (ch === 10 /* \n */) {
        lines++;
      } else if (ch === 92 /* \ */) {
        pos++;
        if (pos < max && str.charCodeAt(pos) === 10) {
          lines++;
        }
      }
    }
    if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58 /* : */) {
      return false;
    }
    // [label]:   destination   'title'
    //         ^^^ skip optional whitespace here
        for (pos = labelEnd + 2; pos < max; pos++) {
      ch = str.charCodeAt(pos);
      if (ch === 10) {
        lines++;
      } else if (isSpace$6(ch)) ; else {
        break;
      }
    }
    // [label]:   destination   'title'
    //            ^^^^^^^^^^^ parse this
        res = state.md.helpers.parseLinkDestination(str, pos, max);
    if (!res.ok) {
      return false;
    }
    href = state.md.normalizeLink(res.str);
    if (!state.md.validateLink(href)) {
      return false;
    }
    pos = res.pos;
    lines += res.lines;
    // save cursor state, we could require to rollback later
        destEndPos = pos;
    destEndLineNo = lines;
    // [label]:   destination   'title'
    //                       ^^^ skipping those spaces
        start = pos;
    for (;pos < max; pos++) {
      ch = str.charCodeAt(pos);
      if (ch === 10) {
        lines++;
      } else if (isSpace$6(ch)) ; else {
        break;
      }
    }
    // [label]:   destination   'title'
    //                          ^^^^^^^ parse this
        res = state.md.helpers.parseLinkTitle(str, pos, max);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;
      lines += res.lines;
    } else {
      title = "";
      pos = destEndPos;
      lines = destEndLineNo;
    }
    // skip trailing spaces until the rest of the line
        while (pos < max) {
      ch = str.charCodeAt(pos);
      if (!isSpace$6(ch)) {
        break;
      }
      pos++;
    }
    if (pos < max && str.charCodeAt(pos) !== 10) {
      if (title) {
        // garbage at the end of the line after title,
        // but it could still be a valid reference if we roll back
        title = "";
        pos = destEndPos;
        lines = destEndLineNo;
        while (pos < max) {
          ch = str.charCodeAt(pos);
          if (!isSpace$6(ch)) {
            break;
          }
          pos++;
        }
      }
    }
    if (pos < max && str.charCodeAt(pos) !== 10) {
      // garbage at the end of the line
      return false;
    }
    label = normalizeReference$2(str.slice(1, labelEnd));
    if (!label) {
      // CommonMark 0.20 disallows empty labels
      return false;
    }
    // Reference can not terminate anything. This check is for safety only.
    /*istanbul ignore if*/    if (silent) {
      return true;
    }
    if (typeof state.env.references === "undefined") {
      state.env.references = {};
    }
    if (typeof state.env.references[label] === "undefined") {
      state.env.references[label] = {
        title: title,
        href: href
      };
    }
    state.parentType = oldParentType;
    state.line = startLine + lines + 1;
    return true;
  };
  // List of valid html blocks names, accorting to commonmark spec
    var html_blocks = [ "address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul" ];
  // Regexps to match html elements
    var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
  var unquoted = "[^\"'=<>`\\x00-\\x20]+";
  var single_quoted = "'[^']*'";
  var double_quoted = '"[^"]*"';
  var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
  var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
  var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
  var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
  var comment = "\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e";
  var processing = "<[?][\\s\\S]*?[?]>";
  var declaration = "<![A-Z]+\\s+[^>]*>";
  var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
  var HTML_TAG_RE$1 = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
  var HTML_OPEN_CLOSE_TAG_RE$1 = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
  var HTML_TAG_RE_1 = HTML_TAG_RE$1;
  var HTML_OPEN_CLOSE_TAG_RE_1 = HTML_OPEN_CLOSE_TAG_RE$1;
  var html_re = {
    HTML_TAG_RE: HTML_TAG_RE_1,
    HTML_OPEN_CLOSE_TAG_RE: HTML_OPEN_CLOSE_TAG_RE_1
  };
  var HTML_OPEN_CLOSE_TAG_RE = html_re.HTML_OPEN_CLOSE_TAG_RE;
  // An array of opening and corresponding closing sequences for html tags,
  // last argument defines whether it can terminate a paragraph or not
  
    var HTML_SEQUENCES = [ [ /^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true ], [ /^<!--/, /-->/, true ], [ /^<\?/, /\?>/, true ], [ /^<![A-Z]/, />/, true ], [ /^<!\[CDATA\[/, /\]\]>/, true ], [ new RegExp("^</?(" + html_blocks.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true ], [ new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false ] ];
  var html_block = function html_block(state, startLine, endLine, silent) {
    var i, nextLine, token, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    if (!state.md.options.html) {
      return false;
    }
    if (state.src.charCodeAt(pos) !== 60 /* < */) {
      return false;
    }
    lineText = state.src.slice(pos, max);
    for (i = 0; i < HTML_SEQUENCES.length; i++) {
      if (HTML_SEQUENCES[i][0].test(lineText)) {
        break;
      }
    }
    if (i === HTML_SEQUENCES.length) {
      return false;
    }
    if (silent) {
      // true if this sequence can be a terminator, false otherwise
      return HTML_SEQUENCES[i][2];
    }
    nextLine = startLine + 1;
    // If we are here - we detected HTML block.
    // Let's roll down till block end.
        if (!HTML_SEQUENCES[i][1].test(lineText)) {
      for (;nextLine < endLine; nextLine++) {
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        lineText = state.src.slice(pos, max);
        if (HTML_SEQUENCES[i][1].test(lineText)) {
          if (lineText.length !== 0) {
            nextLine++;
          }
          break;
        }
      }
    }
    state.line = nextLine;
    token = state.push("html_block", "", 0);
    token.map = [ startLine, nextLine ];
    token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
    return true;
  };
  var isSpace$5 = utils.isSpace;
  var heading = function heading(state, startLine, endLine, silent) {
    var ch, level, tmp, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    ch = state.src.charCodeAt(pos);
    if (ch !== 35 /* # */ || pos >= max) {
      return false;
    }
    // count heading level
        level = 1;
    ch = state.src.charCodeAt(++pos);
    while (ch === 35 /* # */ && pos < max && level <= 6) {
      level++;
      ch = state.src.charCodeAt(++pos);
    }
    if (level > 6 || pos < max && !isSpace$5(ch)) {
      return false;
    }
    if (silent) {
      return true;
    }
    // Let's cut tails like '    ###  ' from the end of string
        max = state.skipSpacesBack(max, pos);
    tmp = state.skipCharsBack(max, 35, pos);
 // #
        if (tmp > pos && isSpace$5(state.src.charCodeAt(tmp - 1))) {
      max = tmp;
    }
    state.line = startLine + 1;
    token = state.push("heading_open", "h" + String(level), 1);
    token.markup = "########".slice(0, level);
    token.map = [ startLine, state.line ];
    token = state.push("inline", "", 0);
    token.content = state.src.slice(pos, max).trim();
    token.map = [ startLine, state.line ];
    token.children = [];
    token = state.push("heading_close", "h" + String(level), -1);
    token.markup = "########".slice(0, level);
    return true;
  };
  // lheading (---, ===)
    var lheading = function lheading(state, startLine, endLine /*, silent*/) {
    var content, terminate, i, l, token, pos, max, level, marker, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
    // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    oldParentType = state.parentType;
    state.parentType = "paragraph";
 // use paragraph to match terminatorRules
    // jump line-by-line until empty one or EOF
        for (;nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.sCount[nextLine] - state.blkIndent > 3) {
        continue;
      }
      
      // Check for underline in setext header
      
            if (state.sCount[nextLine] >= state.blkIndent) {
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        if (pos < max) {
          marker = state.src.charCodeAt(pos);
          if (marker === 45 /* - */ || marker === 61 /* = */) {
            pos = state.skipChars(pos, marker);
            pos = state.skipSpaces(pos);
            if (pos >= max) {
              level = marker === 61 /* = */ ? 1 : 2;
              break;
            }
          }
        }
      }
      // quirk for blockquotes, this line should already be checked by that rule
            if (state.sCount[nextLine] < 0) {
        continue;
      }
      // Some tags can terminate paragraph without empty line.
            terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
    }
    if (!level) {
      // Didn't find valid underline
      return false;
    }
    content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    state.line = nextLine + 1;
    token = state.push("heading_open", "h" + String(level), 1);
    token.markup = String.fromCharCode(marker);
    token.map = [ startLine, state.line ];
    token = state.push("inline", "", 0);
    token.content = content;
    token.map = [ startLine, state.line - 1 ];
    token.children = [];
    token = state.push("heading_close", "h" + String(level), -1);
    token.markup = String.fromCharCode(marker);
    state.parentType = oldParentType;
    return true;
  };
  // Paragraph
    var paragraph = function paragraph(state, startLine /*, endLine*/) {
    var content, terminate, i, l, token, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph"), endLine = state.lineMax;
    oldParentType = state.parentType;
    state.parentType = "paragraph";
    // jump line-by-line until empty one or EOF
        for (;nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.sCount[nextLine] - state.blkIndent > 3) {
        continue;
      }
      // quirk for blockquotes, this line should already be checked by that rule
            if (state.sCount[nextLine] < 0) {
        continue;
      }
      // Some tags can terminate paragraph without empty line.
            terminate = false;
      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
    }
    content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    state.line = nextLine;
    token = state.push("paragraph_open", "p", 1);
    token.map = [ startLine, state.line ];
    token = state.push("inline", "", 0);
    token.content = content;
    token.map = [ startLine, state.line ];
    token.children = [];
    token = state.push("paragraph_close", "p", -1);
    state.parentType = oldParentType;
    return true;
  };
  var isSpace$4 = utils.isSpace;
  function StateBlock(src, md, env, tokens) {
    var ch, s, start, pos, len, indent, offset, indent_found;
    this.src = src;
    // link to parser instance
        this.md = md;
    this.env = env;
    
    // Internal state vartiables
    
        this.tokens = tokens;
    this.bMarks = [];
 // line begin offsets for fast jumps
        this.eMarks = [];
 // line end offsets for fast jumps
        this.tShift = [];
 // offsets of the first non-space characters (tabs not expanded)
        this.sCount = [];
 // indents for each line (tabs expanded)
    // An amount of virtual spaces (tabs expanded) between beginning
    // of each line (bMarks) and real beginning of that line.
    
    // It exists only as a hack because blockquotes override bMarks
    // losing information in the process.
    
    // It's used only when expanding tabs, you can think about it as
    // an initial tab length, e.g. bsCount=21 applied to string `\t123`
    // means first tab should be expanded to 4-21%4 === 3 spaces.
    
        this.bsCount = [];
    // block parser variables
        this.blkIndent = 0;
 // required block content indent (for example, if we are
    // inside a list, it would be positioned after list marker)
        this.line = 0;
 // line index in src
        this.lineMax = 0;
 // lines count
        this.tight = false;
 // loose/tight mode for lists
        this.ddIndent = -1;
 // indent of the current dd block (-1 if there isn't any)
        this.listIndent = -1;
 // indent of the current list block (-1 if there isn't any)
    // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
    // used in lists to determine if they interrupt a paragraph
        this.parentType = "root";
    this.level = 0;
    // renderer
        this.result = "";
    // Create caches
    // Generate markers.
        s = this.src;
    indent_found = false;
    for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
      ch = s.charCodeAt(pos);
      if (!indent_found) {
        if (isSpace$4(ch)) {
          indent++;
          if (ch === 9) {
            offset += 4 - offset % 4;
          } else {
            offset++;
          }
          continue;
        } else {
          indent_found = true;
        }
      }
      if (ch === 10 || pos === len - 1) {
        if (ch !== 10) {
          pos++;
        }
        this.bMarks.push(start);
        this.eMarks.push(pos);
        this.tShift.push(indent);
        this.sCount.push(offset);
        this.bsCount.push(0);
        indent_found = false;
        indent = 0;
        offset = 0;
        start = pos + 1;
      }
    }
    // Push fake entry to simplify cache bounds checks
        this.bMarks.push(s.length);
    this.eMarks.push(s.length);
    this.tShift.push(0);
    this.sCount.push(0);
    this.bsCount.push(0);
    this.lineMax = this.bMarks.length - 1;
 // don't count last fake line
    }
  // Push new token to "stream".
  
    StateBlock.prototype.push = function(type, tag, nesting) {
    var token$1 = new token(type, tag, nesting);
    token$1.block = true;
    if (nesting < 0) this.level--;
 // closing tag
        token$1.level = this.level;
    if (nesting > 0) this.level++;
 // opening tag
        this.tokens.push(token$1);
    return token$1;
  };
  StateBlock.prototype.isEmpty = function isEmpty(line) {
    return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
  };
  StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
    for (var max = this.lineMax; from < max; from++) {
      if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
        break;
      }
    }
    return from;
  };
  // Skip spaces from given position.
    StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
    var ch;
    for (var max = this.src.length; pos < max; pos++) {
      ch = this.src.charCodeAt(pos);
      if (!isSpace$4(ch)) {
        break;
      }
    }
    return pos;
  };
  // Skip spaces from given position in reverse.
    StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
    if (pos <= min) {
      return pos;
    }
    while (pos > min) {
      if (!isSpace$4(this.src.charCodeAt(--pos))) {
        return pos + 1;
      }
    }
    return pos;
  };
  // Skip char codes from given position
    StateBlock.prototype.skipChars = function skipChars(pos, code) {
    for (var max = this.src.length; pos < max; pos++) {
      if (this.src.charCodeAt(pos) !== code) {
        break;
      }
    }
    return pos;
  };
  // Skip char codes reverse from given position - 1
    StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
    if (pos <= min) {
      return pos;
    }
    while (pos > min) {
      if (code !== this.src.charCodeAt(--pos)) {
        return pos + 1;
      }
    }
    return pos;
  };
  // cut lines range from source.
    StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
    var i, lineIndent, ch, first, last, queue, lineStart, line = begin;
    if (begin >= end) {
      return "";
    }
    queue = new Array(end - begin);
    for (i = 0; line < end; line++, i++) {
      lineIndent = 0;
      lineStart = first = this.bMarks[line];
      if (line + 1 < end || keepLastLF) {
        // No need for bounds check because we have fake entry on tail.
        last = this.eMarks[line] + 1;
      } else {
        last = this.eMarks[line];
      }
      while (first < last && lineIndent < indent) {
        ch = this.src.charCodeAt(first);
        if (isSpace$4(ch)) {
          if (ch === 9) {
            lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
          } else {
            lineIndent++;
          }
        } else if (first - lineStart < this.tShift[line]) {
          // patched tShift masked characters to look like spaces (blockquotes, list markers)
          lineIndent++;
        } else {
          break;
        }
        first++;
      }
      if (lineIndent > indent) {
        // partially expanding tabs in code blocks, e.g '\t\tfoobar'
        // with indent=2 becomes '  \tfoobar'
        queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
      } else {
        queue[i] = this.src.slice(first, last);
      }
    }
    return queue.join("");
  };
  // re-export Token class to use in block rules
    StateBlock.prototype.Token = token;
  var state_block = StateBlock;
  var _rules$1 = [ 
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  [ "table", table, [ "paragraph", "reference" ] ], [ "code", code ], [ "fence", fence, [ "paragraph", "reference", "blockquote", "list" ] ], [ "blockquote", blockquote, [ "paragraph", "reference", "blockquote", "list" ] ], [ "hr", hr, [ "paragraph", "reference", "blockquote", "list" ] ], [ "list", list, [ "paragraph", "reference", "blockquote" ] ], [ "reference", reference ], [ "html_block", html_block, [ "paragraph", "reference", "blockquote" ] ], [ "heading", heading, [ "paragraph", "reference", "blockquote" ] ], [ "lheading", lheading ], [ "paragraph", paragraph ] ];
  /**
	 * new ParserBlock()
	 **/  function ParserBlock() {
    /**
	   * ParserBlock#ruler -> Ruler
	   *
	   * [[Ruler]] instance. Keep configuration of block rules.
	   **/
    this.ruler = new ruler;
    for (var i = 0; i < _rules$1.length; i++) {
      this.ruler.push(_rules$1[i][0], _rules$1[i][1], {
        alt: (_rules$1[i][2] || []).slice()
      });
    }
  }
  // Generate tokens for input range
  
    ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
    var ok, i, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
    while (line < endLine) {
      state.line = line = state.skipEmptyLines(line);
      if (line >= endLine) {
        break;
      }
      // Termination condition for nested calls.
      // Nested calls currently used for blockquotes & lists
            if (state.sCount[line] < state.blkIndent) {
        break;
      }
      // If nesting level exceeded - skip tail to the end. That's not ordinary
      // situation and we should not care about content.
            if (state.level >= maxNesting) {
        state.line = endLine;
        break;
      }
      // Try all possible rules.
      // On success, rule should:
      
      // - update `state.line`
      // - update `state.tokens`
      // - return true
            for (i = 0; i < len; i++) {
        ok = rules[i](state, line, endLine, false);
        if (ok) {
          break;
        }
      }
      // set state.tight if we had an empty line before current tag
      // i.e. latest empty line should not count
            state.tight = !hasEmptyLines;
      // paragraph might "eat" one newline after it in nested lists
            if (state.isEmpty(state.line - 1)) {
        hasEmptyLines = true;
      }
      line = state.line;
      if (line < endLine && state.isEmpty(line)) {
        hasEmptyLines = true;
        line++;
        state.line = line;
      }
    }
  };
  /**
	 * ParserBlock.parse(str, md, env, outTokens)
	 *
	 * Process input string and push block tokens into `outTokens`
	 **/  ParserBlock.prototype.parse = function(src, md, env, outTokens) {
    var state;
    if (!src) {
      return;
    }
    state = new this.State(src, md, env, outTokens);
    this.tokenize(state, state.line, state.lineMax);
  };
  ParserBlock.prototype.State = state_block;
  var parser_block = ParserBlock;
  // Skip text characters for text token, place those to pending buffer
  // Rule to skip pure text
  // '{}$%@~+=:' reserved for extentions
  // !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
  // !!!! Don't confuse with "Markdown ASCII Punctuation" chars
  // http://spec.commonmark.org/0.15/#ascii-punctuation-character
    function isTerminatorChar(ch) {
    switch (ch) {
     case 10 /* \n */ :
     case 33 /* ! */ :
     case 35 /* # */ :
     case 36 /* $ */ :
     case 37 /* % */ :
     case 38 /* & */ :
     case 42 /* * */ :
     case 43 /* + */ :
     case 45 /* - */ :
     case 58 /* : */ :
     case 60 /* < */ :
     case 61 /* = */ :
     case 62 /* > */ :
     case 64 /* @ */ :
     case 91 /* [ */ :
     case 92 /* \ */ :
     case 93 /* ] */ :
     case 94 /* ^ */ :
     case 95 /* _ */ :
     case 96 /* ` */ :
     case 123 /* { */ :
     case 125 /* } */ :
     case 126 /* ~ */ :
      return true;

     default:
      return false;
    }
  }
  var text = function text(state, silent) {
    var pos = state.pos;
    while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
      pos++;
    }
    if (pos === state.pos) {
      return false;
    }
    if (!silent) {
      state.pending += state.src.slice(state.pos, pos);
    }
    state.pos = pos;
    return true;
  };
  // Process links like https://example.org/
  // RFC3986: scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
    var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
  var linkify = function linkify(state, silent) {
    var pos, max, match, proto, link, url, fullUrl, token;
    if (!state.md.options.linkify) return false;
    if (state.linkLevel > 0) return false;
    pos = state.pos;
    max = state.posMax;
    if (pos + 3 > max) return false;
    if (state.src.charCodeAt(pos) !== 58 /* : */) return false;
    if (state.src.charCodeAt(pos + 1) !== 47 /* / */) return false;
    if (state.src.charCodeAt(pos + 2) !== 47 /* / */) return false;
    match = state.pending.match(SCHEME_RE);
    if (!match) return false;
    proto = match[1];
    link = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
    if (!link) return false;
    url = link.url;
    // disallow '*' at the end of the link (conflicts with emphasis)
        url = url.replace(/\*+$/, "");
    fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) return false;
    if (!silent) {
      state.pending = state.pending.slice(0, -proto.length);
      token = state.push("link_open", "a", 1);
      token.attrs = [ [ "href", fullUrl ] ];
      token.markup = "linkify";
      token.info = "auto";
      token = state.push("text", "", 0);
      token.content = state.md.normalizeLinkText(url);
      token = state.push("link_close", "a", -1);
      token.markup = "linkify";
      token.info = "auto";
    }
    state.pos += url.length - proto.length;
    return true;
  };
  var isSpace$3 = utils.isSpace;
  var newline = function newline(state, silent) {
    var pmax, max, ws, pos = state.pos;
    if (state.src.charCodeAt(pos) !== 10 /* \n */) {
      return false;
    }
    pmax = state.pending.length - 1;
    max = state.posMax;
    // '  \n' -> hardbreak
    // Lookup in pending chars is bad practice! Don't copy to other rules!
    // Pending string is stored in concat mode, indexed lookups will cause
    // convertion to flat mode.
        if (!silent) {
      if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
        if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
          // Find whitespaces tail of pending chars.
          ws = pmax - 1;
          while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32) ws--;
          state.pending = state.pending.slice(0, ws);
          state.push("hardbreak", "br", 0);
        } else {
          state.pending = state.pending.slice(0, -1);
          state.push("softbreak", "br", 0);
        }
      } else {
        state.push("softbreak", "br", 0);
      }
    }
    pos++;
    // skip heading spaces for next line
        while (pos < max && isSpace$3(state.src.charCodeAt(pos))) {
      pos++;
    }
    state.pos = pos;
    return true;
  };
  var isSpace$2 = utils.isSpace;
  var ESCAPED = [];
  for (var i = 0; i < 256; i++) {
    ESCAPED.push(0);
  }
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((function(ch) {
    ESCAPED[ch.charCodeAt(0)] = 1;
  }));
  var _escape = function escape(state, silent) {
    var ch1, ch2, origStr, escapedStr, token, pos = state.pos, max = state.posMax;
    if (state.src.charCodeAt(pos) !== 92 /* \ */) return false;
    pos++;
    // '\' at the end of the inline block
        if (pos >= max) return false;
    ch1 = state.src.charCodeAt(pos);
    if (ch1 === 10) {
      if (!silent) {
        state.push("hardbreak", "br", 0);
      }
      pos++;
      // skip leading whitespaces from next line
            while (pos < max) {
        ch1 = state.src.charCodeAt(pos);
        if (!isSpace$2(ch1)) break;
        pos++;
      }
      state.pos = pos;
      return true;
    }
    escapedStr = state.src[pos];
    if (ch1 >= 55296 && ch1 <= 56319 && pos + 1 < max) {
      ch2 = state.src.charCodeAt(pos + 1);
      if (ch2 >= 56320 && ch2 <= 57343) {
        escapedStr += state.src[pos + 1];
        pos++;
      }
    }
    origStr = "\\" + escapedStr;
    if (!silent) {
      token = state.push("text_special", "", 0);
      if (ch1 < 256 && ESCAPED[ch1] !== 0) {
        token.content = escapedStr;
      } else {
        token.content = origStr;
      }
      token.markup = origStr;
      token.info = "escape";
    }
    state.pos = pos + 1;
    return true;
  };
  // Parse backticks
    var backticks = function backtick(state, silent) {
    var start, max, marker, token, matchStart, matchEnd, openerLength, closerLength, pos = state.pos, ch = state.src.charCodeAt(pos);
    if (ch !== 96 /* ` */) {
      return false;
    }
    start = pos;
    pos++;
    max = state.posMax;
    // scan marker length
        while (pos < max && state.src.charCodeAt(pos) === 96 /* ` */) {
      pos++;
    }
    marker = state.src.slice(start, pos);
    openerLength = marker.length;
    if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
      if (!silent) state.pending += marker;
      state.pos += openerLength;
      return true;
    }
    matchStart = matchEnd = pos;
    // Nothing found in the cache, scan until the end of the line (or until marker is found)
        while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
      matchEnd = matchStart + 1;
      // scan marker length
            while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96 /* ` */) {
        matchEnd++;
      }
      closerLength = matchEnd - matchStart;
      if (closerLength === openerLength) {
        // Found matching closer length.
        if (!silent) {
          token = state.push("code_inline", "code", 0);
          token.markup = marker;
          token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
        }
        state.pos = matchEnd;
        return true;
      }
      // Some different length found, put it in cache as upper limit of where closer can be found
            state.backticks[closerLength] = matchStart;
    }
    // Scanned through the end, didn't find anything
        state.backticksScanned = true;
    if (!silent) state.pending += marker;
    state.pos += openerLength;
    return true;
  };
  // ~~strike through~~
  // Insert each marker as a separate text token, and add it to delimiter list
  
    var tokenize$1 = function strikethrough(state, silent) {
    var i, scanned, token, len, ch, start = state.pos, marker = state.src.charCodeAt(start);
    if (silent) {
      return false;
    }
    if (marker !== 126 /* ~ */) {
      return false;
    }
    scanned = state.scanDelims(state.pos, true);
    len = scanned.length;
    ch = String.fromCharCode(marker);
    if (len < 2) {
      return false;
    }
    if (len % 2) {
      token = state.push("text", "", 0);
      token.content = ch;
      len--;
    }
    for (i = 0; i < len; i += 2) {
      token = state.push("text", "", 0);
      token.content = ch + ch;
      state.delimiters.push({
        marker: marker,
        length: 0,
        // disable "rule of 3" length checks meant for emphasis
        token: state.tokens.length - 1,
        end: -1,
        open: scanned.can_open,
        close: scanned.can_close
      });
    }
    state.pos += scanned.length;
    return true;
  };
  function postProcess$1(state, delimiters) {
    var i, j, startDelim, endDelim, token, loneMarkers = [], max = delimiters.length;
    for (i = 0; i < max; i++) {
      startDelim = delimiters[i];
      if (startDelim.marker !== 126 /* ~ */) {
        continue;
      }
      if (startDelim.end === -1) {
        continue;
      }
      endDelim = delimiters[startDelim.end];
      token = state.tokens[startDelim.token];
      token.type = "s_open";
      token.tag = "s";
      token.nesting = 1;
      token.markup = "~~";
      token.content = "";
      token = state.tokens[endDelim.token];
      token.type = "s_close";
      token.tag = "s";
      token.nesting = -1;
      token.markup = "~~";
      token.content = "";
      if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
        loneMarkers.push(endDelim.token - 1);
      }
    }
    // If a marker sequence has an odd number of characters, it's splitted
    // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
    // start of the sequence.
    
    // So, we have to move all those markers after subsequent s_close tags.
    
        while (loneMarkers.length) {
      i = loneMarkers.pop();
      j = i + 1;
      while (j < state.tokens.length && state.tokens[j].type === "s_close") {
        j++;
      }
      j--;
      if (i !== j) {
        token = state.tokens[j];
        state.tokens[j] = state.tokens[i];
        state.tokens[i] = token;
      }
    }
  }
  // Walk through delimiter list and replace text tokens with tags
  
    var postProcess_1$1 = function strikethrough(state) {
    var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
    postProcess$1(state, state.delimiters);
    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        postProcess$1(state, tokens_meta[curr].delimiters);
      }
    }
  };
  var strikethrough = {
    tokenize: tokenize$1,
    postProcess: postProcess_1$1
  };
  // Process *this* and _that_
  // Insert each marker as a separate text token, and add it to delimiter list
  
    var tokenize = function emphasis(state, silent) {
    var i, scanned, token, start = state.pos, marker = state.src.charCodeAt(start);
    if (silent) {
      return false;
    }
    if (marker !== 95 /* _ */ && marker !== 42 /* * */) {
      return false;
    }
    scanned = state.scanDelims(state.pos, marker === 42);
    for (i = 0; i < scanned.length; i++) {
      token = state.push("text", "", 0);
      token.content = String.fromCharCode(marker);
      state.delimiters.push({
        // Char code of the starting marker (number).
        marker: marker,
        // Total length of these series of delimiters.
        length: scanned.length,
        // A position of the token this delimiter corresponds to.
        token: state.tokens.length - 1,
        // If this delimiter is matched as a valid opener, `end` will be
        // equal to its position, otherwise it's `-1`.
        end: -1,
        // Boolean flags that determine if this delimiter could open or close
        // an emphasis.
        open: scanned.can_open,
        close: scanned.can_close
      });
    }
    state.pos += scanned.length;
    return true;
  };
  function postProcess(state, delimiters) {
    var i, startDelim, endDelim, token, ch, isStrong, max = delimiters.length;
    for (i = max - 1; i >= 0; i--) {
      startDelim = delimiters[i];
      if (startDelim.marker !== 95 /* _ */ && startDelim.marker !== 42 /* * */) {
        continue;
      }
      // Process only opening markers
            if (startDelim.end === -1) {
        continue;
      }
      endDelim = delimiters[startDelim.end];
      // If the previous delimiter has the same marker and is adjacent to this one,
      // merge those into one strong delimiter.
      
      // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
      
            isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && 
      // check that first two markers match and adjacent
      delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && 
      // check that last two markers are adjacent (we can safely assume they match)
      delimiters[startDelim.end + 1].token === endDelim.token + 1;
      ch = String.fromCharCode(startDelim.marker);
      token = state.tokens[startDelim.token];
      token.type = isStrong ? "strong_open" : "em_open";
      token.tag = isStrong ? "strong" : "em";
      token.nesting = 1;
      token.markup = isStrong ? ch + ch : ch;
      token.content = "";
      token = state.tokens[endDelim.token];
      token.type = isStrong ? "strong_close" : "em_close";
      token.tag = isStrong ? "strong" : "em";
      token.nesting = -1;
      token.markup = isStrong ? ch + ch : ch;
      token.content = "";
      if (isStrong) {
        state.tokens[delimiters[i - 1].token].content = "";
        state.tokens[delimiters[startDelim.end + 1].token].content = "";
        i--;
      }
    }
  }
  // Walk through delimiter list and replace text tokens with tags
  
    var postProcess_1 = function emphasis(state) {
    var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
    postProcess(state, state.delimiters);
    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        postProcess(state, tokens_meta[curr].delimiters);
      }
    }
  };
  var emphasis = {
    tokenize: tokenize,
    postProcess: postProcess_1
  };
  var normalizeReference$1 = utils.normalizeReference;
  var isSpace$1 = utils.isSpace;
  var link = function link(state, silent) {
    var attrs, code, label, labelEnd, labelStart, pos, res, ref, token, href = "", title = "", oldPos = state.pos, max = state.posMax, start = state.pos, parseReference = true;
    if (state.src.charCodeAt(state.pos) !== 91 /* [ */) {
      return false;
    }
    labelStart = state.pos + 1;
    labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
    // parser failed to find ']', so it's not a valid link
        if (labelEnd < 0) {
      return false;
    }
    pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 40 /* ( */) {
      // Inline link
      // might have found a valid shortcut link, disable reference parsing
      parseReference = false;
      // [link](  <href>  "title"  )
      //        ^^ skipping these spaces
            pos++;
      for (;pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace$1(code) && code !== 10) {
          break;
        }
      }
      if (pos >= max) {
        return false;
      }
      // [link](  <href>  "title"  )
      //          ^^^^^^ parsing link destination
            start = pos;
      res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
      if (res.ok) {
        href = state.md.normalizeLink(res.str);
        if (state.md.validateLink(href)) {
          pos = res.pos;
        } else {
          href = "";
        }
        // [link](  <href>  "title"  )
        //                ^^ skipping these spaces
                start = pos;
        for (;pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace$1(code) && code !== 10) {
            break;
          }
        }
        // [link](  <href>  "title"  )
        //                  ^^^^^^^ parsing link title
                res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
        if (pos < max && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos;
          // [link](  <href>  "title"  )
          //                         ^^ skipping these spaces
                    for (;pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace$1(code) && code !== 10) {
              break;
            }
          }
        }
      }
      if (pos >= max || state.src.charCodeAt(pos) !== 41 /* ) */) {
        // parsing a valid shortcut link failed, fallback to reference
        parseReference = true;
      }
      pos++;
    }
    if (parseReference) {
      // Link reference
      if (typeof state.env.references === "undefined") {
        return false;
      }
      if (pos < max && state.src.charCodeAt(pos) === 91 /* [ */) {
        start = pos + 1;
        pos = state.md.helpers.parseLinkLabel(state, pos);
        if (pos >= 0) {
          label = state.src.slice(start, pos++);
        } else {
          pos = labelEnd + 1;
        }
      } else {
        pos = labelEnd + 1;
      }
      // covers label === '' and label === undefined
      // (collapsed reference link and shortcut reference link respectively)
            if (!label) {
        label = state.src.slice(labelStart, labelEnd);
      }
      ref = state.env.references[normalizeReference$1(label)];
      if (!ref) {
        state.pos = oldPos;
        return false;
      }
      href = ref.href;
      title = ref.title;
    }
    
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    
        if (!silent) {
      state.pos = labelStart;
      state.posMax = labelEnd;
      token = state.push("link_open", "a", 1);
      token.attrs = attrs = [ [ "href", href ] ];
      if (title) {
        attrs.push([ "title", title ]);
      }
      state.linkLevel++;
      state.md.inline.tokenize(state);
      state.linkLevel--;
      token = state.push("link_close", "a", -1);
    }
    state.pos = pos;
    state.posMax = max;
    return true;
  };
  var normalizeReference = utils.normalizeReference;
  var isSpace = utils.isSpace;
  var image = function image(state, silent) {
    var attrs, code, content, label, labelEnd, labelStart, pos, ref, res, title, token, tokens, start, href = "", oldPos = state.pos, max = state.posMax;
    if (state.src.charCodeAt(state.pos) !== 33 /* ! */) {
      return false;
    }
    if (state.src.charCodeAt(state.pos + 1) !== 91 /* [ */) {
      return false;
    }
    labelStart = state.pos + 2;
    labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
    // parser failed to find ']', so it's not a valid link
        if (labelEnd < 0) {
      return false;
    }
    pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 40 /* ( */) {
      // Inline link
      // [link](  <href>  "title"  )
      //        ^^ skipping these spaces
      pos++;
      for (;pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 10) {
          break;
        }
      }
      if (pos >= max) {
        return false;
      }
      // [link](  <href>  "title"  )
      //          ^^^^^^ parsing link destination
            start = pos;
      res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
      if (res.ok) {
        href = state.md.normalizeLink(res.str);
        if (state.md.validateLink(href)) {
          pos = res.pos;
        } else {
          href = "";
        }
      }
      // [link](  <href>  "title"  )
      //                ^^ skipping these spaces
            start = pos;
      for (;pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 10) {
          break;
        }
      }
      // [link](  <href>  "title"  )
      //                  ^^^^^^^ parsing link title
            res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        // [link](  <href>  "title"  )
        //                         ^^ skipping these spaces
                for (;pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 10) {
            break;
          }
        }
      } else {
        title = "";
      }
      if (pos >= max || state.src.charCodeAt(pos) !== 41 /* ) */) {
        state.pos = oldPos;
        return false;
      }
      pos++;
    } else {
      // Link reference
      if (typeof state.env.references === "undefined") {
        return false;
      }
      if (pos < max && state.src.charCodeAt(pos) === 91 /* [ */) {
        start = pos + 1;
        pos = state.md.helpers.parseLinkLabel(state, pos);
        if (pos >= 0) {
          label = state.src.slice(start, pos++);
        } else {
          pos = labelEnd + 1;
        }
      } else {
        pos = labelEnd + 1;
      }
      // covers label === '' and label === undefined
      // (collapsed reference link and shortcut reference link respectively)
            if (!label) {
        label = state.src.slice(labelStart, labelEnd);
      }
      ref = state.env.references[normalizeReference(label)];
      if (!ref) {
        state.pos = oldPos;
        return false;
      }
      href = ref.href;
      title = ref.title;
    }
    
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    
        if (!silent) {
      content = state.src.slice(labelStart, labelEnd);
      state.md.inline.parse(content, state.md, state.env, tokens = []);
      token = state.push("image", "img", 0);
      token.attrs = attrs = [ [ "src", href ], [ "alt", "" ] ];
      token.children = tokens;
      token.content = content;
      if (title) {
        attrs.push([ "title", title ]);
      }
    }
    state.pos = pos;
    state.posMax = max;
    return true;
  };
  // Process autolinks '<protocol:...>'
  /*eslint max-len:0*/  var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
  var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  var autolink = function autolink(state, silent) {
    var url, fullUrl, token, ch, start, max, pos = state.pos;
    if (state.src.charCodeAt(pos) !== 60 /* < */) {
      return false;
    }
    start = state.pos;
    max = state.posMax;
    for (;;) {
      if (++pos >= max) return false;
      ch = state.src.charCodeAt(pos);
      if (ch === 60 /* < */) return false;
      if (ch === 62 /* > */) break;
    }
    url = state.src.slice(start + 1, pos);
    if (AUTOLINK_RE.test(url)) {
      fullUrl = state.md.normalizeLink(url);
      if (!state.md.validateLink(fullUrl)) {
        return false;
      }
      if (!silent) {
        token = state.push("link_open", "a", 1);
        token.attrs = [ [ "href", fullUrl ] ];
        token.markup = "autolink";
        token.info = "auto";
        token = state.push("text", "", 0);
        token.content = state.md.normalizeLinkText(url);
        token = state.push("link_close", "a", -1);
        token.markup = "autolink";
        token.info = "auto";
      }
      state.pos += url.length + 2;
      return true;
    }
    if (EMAIL_RE.test(url)) {
      fullUrl = state.md.normalizeLink("mailto:" + url);
      if (!state.md.validateLink(fullUrl)) {
        return false;
      }
      if (!silent) {
        token = state.push("link_open", "a", 1);
        token.attrs = [ [ "href", fullUrl ] ];
        token.markup = "autolink";
        token.info = "auto";
        token = state.push("text", "", 0);
        token.content = state.md.normalizeLinkText(url);
        token = state.push("link_close", "a", -1);
        token.markup = "autolink";
        token.info = "auto";
      }
      state.pos += url.length + 2;
      return true;
    }
    return false;
  };
  var HTML_TAG_RE = html_re.HTML_TAG_RE;
  function isLinkOpen(str) {
    return /^<a[>\s]/i.test(str);
  }
  function isLinkClose(str) {
    return /^<\/a\s*>/i.test(str);
  }
  function isLetter(ch) {
    /*eslint no-bitwise:0*/
    var lc = ch | 32;
 // to lower case
        return lc >= 97 /* a */ && lc <= 122 /* z */;
  }
  var html_inline = function html_inline(state, silent) {
    var ch, match, max, token, pos = state.pos;
    if (!state.md.options.html) {
      return false;
    }
    // Check start
        max = state.posMax;
    if (state.src.charCodeAt(pos) !== 60 /* < */ || pos + 2 >= max) {
      return false;
    }
    // Quick fail on second char
        ch = state.src.charCodeAt(pos + 1);
    if (ch !== 33 /* ! */ && ch !== 63 /* ? */ && ch !== 47 /* / */ && !isLetter(ch)) {
      return false;
    }
    match = state.src.slice(pos).match(HTML_TAG_RE);
    if (!match) {
      return false;
    }
    if (!silent) {
      token = state.push("html_inline", "", 0);
      token.content = state.src.slice(pos, pos + match[0].length);
      if (isLinkOpen(token.content)) state.linkLevel++;
      if (isLinkClose(token.content)) state.linkLevel--;
    }
    state.pos += match[0].length;
    return true;
  };
  var has = utils.has;
  var isValidEntityCode = utils.isValidEntityCode;
  var fromCodePoint = utils.fromCodePoint;
  var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
  var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
  var entity = function entity(state, silent) {
    var ch, code, match, token, pos = state.pos, max = state.posMax;
    if (state.src.charCodeAt(pos) !== 38 /* & */) return false;
    if (pos + 1 >= max) return false;
    ch = state.src.charCodeAt(pos + 1);
    if (ch === 35 /* # */) {
      match = state.src.slice(pos).match(DIGITAL_RE);
      if (match) {
        if (!silent) {
          code = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
          token = state.push("text_special", "", 0);
          token.content = isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(65533);
          token.markup = match[0];
          token.info = "entity";
        }
        state.pos += match[0].length;
        return true;
      }
    } else {
      match = state.src.slice(pos).match(NAMED_RE);
      if (match) {
        if (has(entities, match[1])) {
          if (!silent) {
            token = state.push("text_special", "", 0);
            token.content = entities[match[1]];
            token.markup = match[0];
            token.info = "entity";
          }
          state.pos += match[0].length;
          return true;
        }
      }
    }
    return false;
  };
  // For each opening emphasis-like marker find a matching closing one
    function processDelimiters(state, delimiters) {
    var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max = delimiters.length;
    if (!max) return;
    // headerIdx is the first delimiter of the current (where closer is) delimiter run
        var headerIdx = 0;
    var lastTokenIdx = -2;
 // needs any value lower than -1
        var jumps = [];
    for (closerIdx = 0; closerIdx < max; closerIdx++) {
      closer = delimiters[closerIdx];
      jumps.push(0);
      // markers belong to same delimiter run if:
      //  - they have adjacent tokens
      //  - AND markers are the same
      
            if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
        headerIdx = closerIdx;
      }
      lastTokenIdx = closer.token;
      // Length is only used for emphasis-specific "rule of 3",
      // if it's not defined (in strikethrough or 3rd party plugins),
      // we can default it to 0 to disable those checks.
      
            closer.length = closer.length || 0;
      if (!closer.close) continue;
      // Previously calculated lower bounds (previous fails)
      // for each marker, each delimiter length modulo 3,
      // and for whether this closer can be an opener;
      // https://github.com/commonmark/cmark/commit/34250e12ccebdc6372b8b49c44fab57c72443460
            if (!openersBottom.hasOwnProperty(closer.marker)) {
        openersBottom[closer.marker] = [ -1, -1, -1, -1, -1, -1 ];
      }
      minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
      openerIdx = headerIdx - jumps[headerIdx] - 1;
      newMinOpenerIdx = openerIdx;
      for (;openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
        opener = delimiters[openerIdx];
        if (opener.marker !== closer.marker) continue;
        if (opener.open && opener.end < 0) {
          isOddMatch = false;
          // from spec:
          
          // If one of the delimiters can both open and close emphasis, then the
          // sum of the lengths of the delimiter runs containing the opening and
          // closing delimiters must not be a multiple of 3 unless both lengths
          // are multiples of 3.
          
                    if (opener.close || closer.open) {
            if ((opener.length + closer.length) % 3 === 0) {
              if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
                isOddMatch = true;
              }
            }
          }
          if (!isOddMatch) {
            // If previous delimiter cannot be an opener, we can safely skip
            // the entire sequence in future checks. This is required to make
            // sure algorithm has linear complexity (see *_*_*_*_*_... case).
            lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
            jumps[closerIdx] = closerIdx - openerIdx + lastJump;
            jumps[openerIdx] = lastJump;
            closer.open = false;
            opener.end = closerIdx;
            opener.close = false;
            newMinOpenerIdx = -1;
            // treat next token as start of run,
            // it optimizes skips in **<...>**a**<...>** pathological case
                        lastTokenIdx = -2;
            break;
          }
        }
      }
      if (newMinOpenerIdx !== -1) {
        // If match for this delimiter run failed, we want to set lower bound for
        // future lookups. This is required to make sure algorithm has linear
        // complexity.
        // See details here:
        // https://github.com/commonmark/cmark/issues/178#issuecomment-270417442
        openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
      }
    }
  }
  var balance_pairs = function link_pairs(state) {
    var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
    processDelimiters(state, state.delimiters);
    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        processDelimiters(state, tokens_meta[curr].delimiters);
      }
    }
  };
  // Clean up tokens after emphasis and strikethrough postprocessing:
    var fragments_join = function fragments_join(state) {
    var curr, last, level = 0, tokens = state.tokens, max = state.tokens.length;
    for (curr = last = 0; curr < max; curr++) {
      // re-calculate levels after emphasis/strikethrough turns some text nodes
      // into opening/closing tags
      if (tokens[curr].nesting < 0) level--;
 // closing tag
            tokens[curr].level = level;
      if (tokens[curr].nesting > 0) level++;
 // opening tag
            if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
        // collapse two adjacent text nodes
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
      } else {
        if (curr !== last) {
          tokens[last] = tokens[curr];
        }
        last++;
      }
    }
    if (curr !== last) {
      tokens.length = last;
    }
  };
  var isWhiteSpace = utils.isWhiteSpace;
  var isPunctChar = utils.isPunctChar;
  var isMdAsciiPunct = utils.isMdAsciiPunct;
  function StateInline(src, md, env, outTokens) {
    this.src = src;
    this.env = env;
    this.md = md;
    this.tokens = outTokens;
    this.tokens_meta = Array(outTokens.length);
    this.pos = 0;
    this.posMax = this.src.length;
    this.level = 0;
    this.pending = "";
    this.pendingLevel = 0;
    // Stores { start: end } pairs. Useful for backtrack
    // optimization of pairs parse (emphasis, strikes).
        this.cache = {};
    // List of emphasis-like delimiters for current tag
        this.delimiters = [];
    // Stack of delimiter lists for upper level tags
        this._prev_delimiters = [];
    // backtick length => last seen position
        this.backticks = {};
    this.backticksScanned = false;
    // Counter used to disable inline linkify-it execution
    // inside <a> and markdown links
        this.linkLevel = 0;
  }
  // Flush pending text
  
    StateInline.prototype.pushPending = function() {
    var token$1 = new token("text", "", 0);
    token$1.content = this.pending;
    token$1.level = this.pendingLevel;
    this.tokens.push(token$1);
    this.pending = "";
    return token$1;
  };
  // Push new token to "stream".
  // If pending text exists - flush it as text token
  
    StateInline.prototype.push = function(type, tag, nesting) {
    if (this.pending) {
      this.pushPending();
    }
    var token$1 = new token(type, tag, nesting);
    var token_meta = null;
    if (nesting < 0) {
      // closing tag
      this.level--;
      this.delimiters = this._prev_delimiters.pop();
    }
    token$1.level = this.level;
    if (nesting > 0) {
      // opening tag
      this.level++;
      this._prev_delimiters.push(this.delimiters);
      this.delimiters = [];
      token_meta = {
        delimiters: this.delimiters
      };
    }
    this.pendingLevel = this.level;
    this.tokens.push(token$1);
    this.tokens_meta.push(token_meta);
    return token$1;
  };
  // Scan a sequence of emphasis-like markers, and determine whether
  // it can start an emphasis sequence or end an emphasis sequence.
  
  //  - start - position to scan from (it should point at a valid marker);
  //  - canSplitWord - determine if these markers can be found inside a word
  
    StateInline.prototype.scanDelims = function(start, canSplitWord) {
    var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max = this.posMax, marker = this.src.charCodeAt(start);
    // treat beginning of the line as a whitespace
        lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
    while (pos < max && this.src.charCodeAt(pos) === marker) {
      pos++;
    }
    count = pos - start;
    // treat end of the line as a whitespace
        nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
    isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
    isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
    isLastWhiteSpace = isWhiteSpace(lastChar);
    isNextWhiteSpace = isWhiteSpace(nextChar);
    if (isNextWhiteSpace) {
      left_flanking = false;
    } else if (isNextPunctChar) {
      if (!(isLastWhiteSpace || isLastPunctChar)) {
        left_flanking = false;
      }
    }
    if (isLastWhiteSpace) {
      right_flanking = false;
    } else if (isLastPunctChar) {
      if (!(isNextWhiteSpace || isNextPunctChar)) {
        right_flanking = false;
      }
    }
    if (!canSplitWord) {
      can_open = left_flanking && (!right_flanking || isLastPunctChar);
      can_close = right_flanking && (!left_flanking || isNextPunctChar);
    } else {
      can_open = left_flanking;
      can_close = right_flanking;
    }
    return {
      can_open: can_open,
      can_close: can_close,
      length: count
    };
  };
  // re-export Token class to use in block rules
    StateInline.prototype.Token = token;
  var state_inline = StateInline;
  ////////////////////////////////////////////////////////////////////////////////
  // Parser rules
    var _rules = [ [ "text", text ], [ "linkify", linkify ], [ "newline", newline ], [ "escape", _escape ], [ "backticks", backticks ], [ "strikethrough", strikethrough.tokenize ], [ "emphasis", emphasis.tokenize ], [ "link", link ], [ "image", image ], [ "autolink", autolink ], [ "html_inline", html_inline ], [ "entity", entity ] ];
  // `rule2` ruleset was created specifically for emphasis/strikethrough
  // post-processing and may be changed in the future.
  
  // Don't use this for anything except pairs (plugins working with `balance_pairs`).
  
    var _rules2 = [ [ "balance_pairs", balance_pairs ], [ "strikethrough", strikethrough.postProcess ], [ "emphasis", emphasis.postProcess ], 
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  [ "fragments_join", fragments_join ] ];
  /**
	 * new ParserInline()
	 **/  function ParserInline() {
    var i;
    /**
	   * ParserInline#ruler -> Ruler
	   *
	   * [[Ruler]] instance. Keep configuration of inline rules.
	   **/    this.ruler = new ruler;
    for (i = 0; i < _rules.length; i++) {
      this.ruler.push(_rules[i][0], _rules[i][1]);
    }
    /**
	   * ParserInline#ruler2 -> Ruler
	   *
	   * [[Ruler]] instance. Second ruler used for post-processing
	   * (e.g. in emphasis-like rules).
	   **/    this.ruler2 = new ruler;
    for (i = 0; i < _rules2.length; i++) {
      this.ruler2.push(_rules2[i][0], _rules2[i][1]);
    }
  }
  // Skip single token by running all rules in validation mode;
  // returns `true` if any rule reported success
  
    ParserInline.prototype.skipToken = function(state) {
    var ok, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
    if (typeof cache[pos] !== "undefined") {
      state.pos = cache[pos];
      return;
    }
    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        // Increment state.level and decrement it later to limit recursion.
        // It's harmless to do here, because no tokens are created. But ideally,
        // we'd need a separate private state variable for this purpose.
        state.level++;
        ok = rules[i](state, true);
        state.level--;
        if (ok) {
          break;
        }
      }
    } else {
      // Too much nesting, just skip until the end of the paragraph.
      // NOTE: this will cause links to behave incorrectly in the following case,
      //       when an amount of `[` is exactly equal to `maxNesting + 1`:
      //       [[[[[[[[[[[[[[[[[[[[[foo]()
      // TODO: remove this workaround when CM standard will allow nested links
      //       (we can replace it by preventing links from being parsed in
      //       validation mode)
      state.pos = state.posMax;
    }
    if (!ok) {
      state.pos++;
    }
    cache[pos] = state.pos;
  };
  // Generate tokens for input range
  
    ParserInline.prototype.tokenize = function(state) {
    var ok, i, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
    while (state.pos < end) {
      // Try all possible rules.
      // On success, rule should:
      // - update `state.pos`
      // - update `state.tokens`
      // - return true
      if (state.level < maxNesting) {
        for (i = 0; i < len; i++) {
          ok = rules[i](state, false);
          if (ok) {
            break;
          }
        }
      }
      if (ok) {
        if (state.pos >= end) {
          break;
        }
        continue;
      }
      state.pending += state.src[state.pos++];
    }
    if (state.pending) {
      state.pushPending();
    }
  };
  /**
	 * ParserInline.parse(str, md, env, outTokens)
	 *
	 * Process input string and push inline tokens into `outTokens`
	 **/  ParserInline.prototype.parse = function(str, md, env, outTokens) {
    var i, rules, len;
    var state = new this.State(str, md, env, outTokens);
    this.tokenize(state);
    rules = this.ruler2.getRules("");
    len = rules.length;
    for (i = 0; i < len; i++) {
      rules[i](state);
    }
  };
  ParserInline.prototype.State = state_inline;
  var parser_inline = ParserInline;
  var re = function(opts) {
    var re = {};
    opts = opts || {};
    // Use direct extract instead of `regenerate` to reduse browserified size
        re.src_Any = regex$3.source;
    re.src_Cc = regex$2.source;
    re.src_Z = regex.source;
    re.src_P = regex$4.source;
    // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
        re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join("|");
    // \p{\Z\Cc} (white spaces + control)
        re.src_ZCc = [ re.src_Z, re.src_Cc ].join("|");
    // Experimental. List of chars, completely prohibited in links
    // because can separate it from other part of text
        var text_separators = "[><\uff5c]";
    // All possible word characters (everything without punctuation, spaces & controls)
    // Defined via punctuation & spaces to save space
    // Should be something like \p{\L\N\S\M} (\w but without `_`)
        re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
    // The same as abothe but without [0-9]
    // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';
    ////////////////////////////////////////////////////////////////////////////////
        re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
        re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
    re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
    re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")" + "(?!" + (opts["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
    re.src_path = "(?:" + "[/?#]" + "(?:" + "(?!" + re.src_ZCc + "|" + text_separators + "|[()[\\]{}.,\"'?!\\-;]).|" + "\\[(?:(?!" + re.src_ZCc + "|\\]).)*\\]|" + "\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|" + "\\{(?:(?!" + re.src_ZCc + "|[}]).)*\\}|" + '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' + "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" + "\\'(?=" + re.src_pseudo_letter + "|[-])|" + // allow `I'm_king` if no pair found
    "\\.{2,}[a-zA-Z0-9%/&]|" + // google has many dots in "google search" links (#66, #81).
    // github has ... in commit range links,
    // Restrict to
    // - english
    // - percent-encoded
    // - parts of file path
    // - params separator
    // until more examples found.
    "\\.(?!" + re.src_ZCc + "|[.]|$)|" + (opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re.src_ZCc + "|$)|" + // allow `,,,` in paths
    ";(?!" + re.src_ZCc + "|$)|" + // allow `;` if not followed by space-like char
    "\\!+(?!" + re.src_ZCc + "|[!]|$)|" + // allow `!!!` in paths, but not at the end
    "\\?(?!" + re.src_ZCc + "|[?]|$)" + ")+" + "|\\/" + ")?";
    // Allow anything in markdown spec, forbid quote (") at the first position
    // because emails enclosed in quotes are far more common
        re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
    re.src_xn = "xn--[a-z0-9\\-]{1,59}";
    // More to read about domain names
    // http://serverfault.com/questions/638260/
        re.src_domain_root = 
    // Allow letters & digits (http://test1)
    "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63}" + ")";
    re.src_domain = "(?:" + re.src_xn + "|" + "(?:" + re.src_pseudo_letter + ")" + "|" + "(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + ")" + ")";
    re.src_host = "(?:" + 
    // Don't need IP check, because digits are already allowed in normal domain names
    //   src_ip4 +
    // '|' +
    "(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain /*_root*/ + ")" + ")";
    re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|" + "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))" + ")";
    re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
    re.src_host_strict = re.src_host + re.src_host_terminator;
    re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
    re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
    re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
    re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
    ////////////////////////////////////////////////////////////////////////////////
    // Main rules
    // Rude test fuzzy links by host, for quick deny
        re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
    re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")" + "(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
    re.tpl_link_fuzzy = 
    // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|" + re.src_ZPCc + "))" + "((?![$+<=>^`|\uff5c])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
    re.tpl_link_no_ip_fuzzy = 
    // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|" + re.src_ZPCc + "))" + "((?![$+<=>^`|\uff5c])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
    return re;
  };
  ////////////////////////////////////////////////////////////////////////////////
  // Helpers
  // Merge objects
  
    function assign(obj /*from1, from2, from3, ...*/) {
    var sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach((function(source) {
      if (!source) {
        return;
      }
      Object.keys(source).forEach((function(key) {
        obj[key] = source[key];
      }));
    }));
    return obj;
  }
  function _class(obj) {
    return Object.prototype.toString.call(obj);
  }
  function isString(obj) {
    return _class(obj) === "[object String]";
  }
  function isObject(obj) {
    return _class(obj) === "[object Object]";
  }
  function isRegExp(obj) {
    return _class(obj) === "[object RegExp]";
  }
  function isFunction(obj) {
    return _class(obj) === "[object Function]";
  }
  function escapeRE(str) {
    return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  ////////////////////////////////////////////////////////////////////////////////
    var defaultOptions = {
    fuzzyLink: true,
    fuzzyEmail: true,
    fuzzyIP: false
  };
  function isOptionsObj(obj) {
    return Object.keys(obj || {}).reduce((function(acc, k) {
      return acc || defaultOptions.hasOwnProperty(k);
    }), false);
  }
  var defaultSchemas = {
    "http:": {
      validate: function(text, pos, self) {
        var tail = text.slice(pos);
        if (!self.re.http) {
          // compile lazily, because "host"-containing variables can change on tlds update.
          self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i");
        }
        if (self.re.http.test(tail)) {
          return tail.match(self.re.http)[0].length;
        }
        return 0;
      }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
      validate: function(text, pos, self) {
        var tail = text.slice(pos);
        if (!self.re.no_http) {
          // compile lazily, because "host"-containing variables can change on tlds update.
          self.re.no_http = new RegExp("^" + self.re.src_auth + 
          // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i");
        }
        if (self.re.no_http.test(tail)) {
          // should not be `://` & `///`, that protects from errors in protocol name
          if (pos >= 3 && text[pos - 3] === ":") {
            return 0;
          }
          if (pos >= 3 && text[pos - 3] === "/") {
            return 0;
          }
          return tail.match(self.re.no_http)[0].length;
        }
        return 0;
      }
    },
    "mailto:": {
      validate: function(text, pos, self) {
        var tail = text.slice(pos);
        if (!self.re.mailto) {
          self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i");
        }
        if (self.re.mailto.test(tail)) {
          return tail.match(self.re.mailto)[0].length;
        }
        return 0;
      }
    }
  };
  /*eslint-disable max-len*/
  // RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
    var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
  // DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
    var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
  /*eslint-enable max-len*/
  ////////////////////////////////////////////////////////////////////////////////
    function resetScanCache(self) {
    self.__index__ = -1;
    self.__text_cache__ = "";
  }
  function createValidator(re) {
    return function(text, pos) {
      var tail = text.slice(pos);
      if (re.test(tail)) {
        return tail.match(re)[0].length;
      }
      return 0;
    };
  }
  function createNormalizer() {
    return function(match, self) {
      self.normalize(match);
    };
  }
  // Schemas compiler. Build regexps.
  
    function compile(self) {
    // Load & clone RE patterns.
    var re$1 = self.re = re(self.__opts__);
    // Define dynamic patterns
        var tlds = self.__tlds__.slice();
    self.onCompile();
    if (!self.__tlds_replaced__) {
      tlds.push(tlds_2ch_src_re);
    }
    tlds.push(re$1.src_xn);
    re$1.src_tlds = tlds.join("|");
    function untpl(tpl) {
      return tpl.replace("%TLDS%", re$1.src_tlds);
    }
    re$1.email_fuzzy = RegExp(untpl(re$1.tpl_email_fuzzy), "i");
    re$1.link_fuzzy = RegExp(untpl(re$1.tpl_link_fuzzy), "i");
    re$1.link_no_ip_fuzzy = RegExp(untpl(re$1.tpl_link_no_ip_fuzzy), "i");
    re$1.host_fuzzy_test = RegExp(untpl(re$1.tpl_host_fuzzy_test), "i");
    
    // Compile each schema
    
        var aliases = [];
    self.__compiled__ = {};
 // Reset compiled data
        function schemaError(name, val) {
      throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
    }
    Object.keys(self.__schemas__).forEach((function(name) {
      var val = self.__schemas__[name];
      // skip disabled methods
            if (val === null) {
        return;
      }
      var compiled = {
        validate: null,
        link: null
      };
      self.__compiled__[name] = compiled;
      if (isObject(val)) {
        if (isRegExp(val.validate)) {
          compiled.validate = createValidator(val.validate);
        } else if (isFunction(val.validate)) {
          compiled.validate = val.validate;
        } else {
          schemaError(name, val);
        }
        if (isFunction(val.normalize)) {
          compiled.normalize = val.normalize;
        } else if (!val.normalize) {
          compiled.normalize = createNormalizer();
        } else {
          schemaError(name, val);
        }
        return;
      }
      if (isString(val)) {
        aliases.push(name);
        return;
      }
      schemaError(name, val);
    }));
    
    // Compile postponed aliases
    
        aliases.forEach((function(alias) {
      if (!self.__compiled__[self.__schemas__[alias]]) {
        // Silently fail on missed schemas to avoid errons on disable.
        // schemaError(alias, self.__schemas__[alias]);
        return;
      }
      self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
      self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
    }));
    
    // Fake record for guessed links
    
        self.__compiled__[""] = {
      validate: null,
      normalize: createNormalizer()
    };
    
    // Build schema condition
    
        var slist = Object.keys(self.__compiled__).filter((function(name) {
      // Filter disabled & fake schemas
      return name.length > 0 && self.__compiled__[name];
    })).map(escapeRE).join("|");
    // (?!_) cause 1.5x slowdown
        self.re.schema_test = RegExp("(^|(?!_)(?:[><\uff5c]|" + re$1.src_ZPCc + "))(" + slist + ")", "i");
    self.re.schema_search = RegExp("(^|(?!_)(?:[><\uff5c]|" + re$1.src_ZPCc + "))(" + slist + ")", "ig");
    self.re.schema_at_start = RegExp("^" + self.re.schema_search.source, "i");
    self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i");
    
    // Cleanup
    
        resetScanCache(self);
  }
  /**
	 * class Match
	 *
	 * Match result. Single element of array, returned by [[LinkifyIt#match]]
	 **/  function Match(self, shift) {
    var start = self.__index__, end = self.__last_index__, text = self.__text_cache__.slice(start, end);
    /**
	   * Match#schema -> String
	   *
	   * Prefix (protocol) for matched string.
	   **/    this.schema = self.__schema__.toLowerCase();
    /**
	   * Match#index -> Number
	   *
	   * First position of matched string.
	   **/    this.index = start + shift;
    /**
	   * Match#lastIndex -> Number
	   *
	   * Next position after matched string.
	   **/    this.lastIndex = end + shift;
    /**
	   * Match#raw -> String
	   *
	   * Matched string.
	   **/    this.raw = text;
    /**
	   * Match#text -> String
	   *
	   * Notmalized text of matched string.
	   **/    this.text = text;
    /**
	   * Match#url -> String
	   *
	   * Normalized url of matched string.
	   **/    this.url = text;
  }
  function createMatch(self, shift) {
    var match = new Match(self, shift);
    self.__compiled__[match.schema].normalize(match, self);
    return match;
  }
  /**
	 * class LinkifyIt
	 **/
  /**
	 * new LinkifyIt(schemas, options)
	 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
	 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
	 *
	 * Creates new linkifier instance with optional additional schemas.
	 * Can be called without `new` keyword for convenience.
	 *
	 * By default understands:
	 *
	 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
	 * - "fuzzy" links and emails (example.com, foo@bar.com).
	 *
	 * `schemas` is an object, where each key/value describes protocol/rule:
	 *
	 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
	 *   for example). `linkify-it` makes shure that prefix is not preceeded with
	 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
	 * - __value__ - rule to check tail after link prefix
	 *   - _String_ - just alias to existing rule
	 *   - _Object_
	 *     - _validate_ - validator function (should return matched length on success),
	 *       or `RegExp`.
	 *     - _normalize_ - optional function to normalize text & url of matched result
	 *       (for example, for @twitter mentions).
	 *
	 * `options`:
	 *
	 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
	 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
	 *   like version numbers. Default `false`.
	 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
	 *
	 **/  function LinkifyIt(schemas, options) {
    if (!(this instanceof LinkifyIt)) {
      return new LinkifyIt(schemas, options);
    }
    if (!options) {
      if (isOptionsObj(schemas)) {
        options = schemas;
        schemas = {};
      }
    }
    this.__opts__ = assign({}, defaultOptions, options);
    // Cache last tested result. Used to skip repeating steps on next `match` call.
        this.__index__ = -1;
    this.__last_index__ = -1;
 // Next scan position
        this.__schema__ = "";
    this.__text_cache__ = "";
    this.__schemas__ = assign({}, defaultSchemas, schemas);
    this.__compiled__ = {};
    this.__tlds__ = tlds_default;
    this.__tlds_replaced__ = false;
    this.re = {};
    compile(this);
  }
  /** chainable
	 * LinkifyIt#add(schema, definition)
	 * - schema (String): rule name (fixed pattern prefix)
	 * - definition (String|RegExp|Object): schema definition
	 *
	 * Add new rule definition. See constructor description for details.
	 **/  LinkifyIt.prototype.add = function add(schema, definition) {
    this.__schemas__[schema] = definition;
    compile(this);
    return this;
  };
  /** chainable
	 * LinkifyIt#set(options)
	 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
	 *
	 * Set recognition options for links without schema.
	 **/  LinkifyIt.prototype.set = function set(options) {
    this.__opts__ = assign(this.__opts__, options);
    return this;
  };
  /**
	 * LinkifyIt#test(text) -> Boolean
	 *
	 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
	 **/  LinkifyIt.prototype.test = function test(text) {
    // Reset scan cache
    this.__text_cache__ = text;
    this.__index__ = -1;
    if (!text.length) {
      return false;
    }
    var m, ml, me, len, shift, next, re, tld_pos, at_pos;
    // try to scan for link with schema - that's the most simple rule
        if (this.re.schema_test.test(text)) {
      re = this.re.schema_search;
      re.lastIndex = 0;
      while ((m = re.exec(text)) !== null) {
        len = this.testSchemaAt(text, m[2], re.lastIndex);
        if (len) {
          this.__schema__ = m[2];
          this.__index__ = m.index + m[1].length;
          this.__last_index__ = m.index + m[0].length + len;
          break;
        }
      }
    }
    if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
      // guess schemaless links
      tld_pos = text.search(this.re.host_fuzzy_test);
      if (tld_pos >= 0) {
        // if tld is located after found link - no need to check fuzzy pattern
        if (this.__index__ < 0 || tld_pos < this.__index__) {
          if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
            shift = ml.index + ml[1].length;
            if (this.__index__ < 0 || shift < this.__index__) {
              this.__schema__ = "";
              this.__index__ = shift;
              this.__last_index__ = ml.index + ml[0].length;
            }
          }
        }
      }
    }
    if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
      // guess schemaless emails
      at_pos = text.indexOf("@");
      if (at_pos >= 0) {
        // We can't skip this check, because this cases are possible:
        // 192.168.1.1@gmail.com, my.in@example.com
        if ((me = text.match(this.re.email_fuzzy)) !== null) {
          shift = me.index + me[1].length;
          next = me.index + me[0].length;
          if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
            this.__schema__ = "mailto:";
            this.__index__ = shift;
            this.__last_index__ = next;
          }
        }
      }
    }
    return this.__index__ >= 0;
  };
  /**
	 * LinkifyIt#pretest(text) -> Boolean
	 *
	 * Very quick check, that can give false positives. Returns true if link MAY BE
	 * can exists. Can be used for speed optimization, when you need to check that
	 * link NOT exists.
	 **/  LinkifyIt.prototype.pretest = function pretest(text) {
    return this.re.pretest.test(text);
  };
  /**
	 * LinkifyIt#testSchemaAt(text, name, position) -> Number
	 * - text (String): text to scan
	 * - name (String): rule (schema) name
	 * - position (Number): text offset to check from
	 *
	 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
	 * at given position. Returns length of found pattern (0 on fail).
	 **/  LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
    // If not supported schema check requested - terminate
    if (!this.__compiled__[schema.toLowerCase()]) {
      return 0;
    }
    return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
  };
  /**
	 * LinkifyIt#match(text) -> Array|null
	 *
	 * Returns array of found link descriptions or `null` on fail. We strongly
	 * recommend to use [[LinkifyIt#test]] first, for best speed.
	 *
	 * ##### Result match description
	 *
	 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
	 *   protocol-neutral  links.
	 * - __index__ - offset of matched text
	 * - __lastIndex__ - index of next char after mathch end
	 * - __raw__ - matched text
	 * - __text__ - normalized text
	 * - __url__ - link, generated from matched text
	 **/  LinkifyIt.prototype.match = function match(text) {
    var shift = 0, result = [];
    // Try to take previous element from cache, if .test() called before
        if (this.__index__ >= 0 && this.__text_cache__ === text) {
      result.push(createMatch(this, shift));
      shift = this.__last_index__;
    }
    // Cut head if cache was used
        var tail = shift ? text.slice(shift) : text;
    // Scan string until end reached
        while (this.test(tail)) {
      result.push(createMatch(this, shift));
      tail = tail.slice(this.__last_index__);
      shift += this.__last_index__;
    }
    if (result.length) {
      return result;
    }
    return null;
  };
  /**
	 * LinkifyIt#matchAtStart(text) -> Match|null
	 *
	 * Returns fully-formed (not fuzzy) link if it starts at the beginning
	 * of the string, and null otherwise.
	 **/  LinkifyIt.prototype.matchAtStart = function matchAtStart(text) {
    // Reset scan cache
    this.__text_cache__ = text;
    this.__index__ = -1;
    if (!text.length) return null;
    var m = this.re.schema_at_start.exec(text);
    if (!m) return null;
    var len = this.testSchemaAt(text, m[2], m[0].length);
    if (!len) return null;
    this.__schema__ = m[2];
    this.__index__ = m.index + m[1].length;
    this.__last_index__ = m.index + m[0].length + len;
    return createMatch(this, 0);
  };
  /** chainable
	 * LinkifyIt#tlds(list [, keepOld]) -> this
	 * - list (Array): list of tlds
	 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
	 *
	 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
	 * to avoid false positives. By default this algorythm used:
	 *
	 * - hostname with any 2-letter root zones are ok.
	 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
	 *   are ok.
	 * - encoded (`xn--...`) root zones are ok.
	 *
	 * If list is replaced, then exact match for 2-chars root zones will be checked.
	 **/  LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
    list = Array.isArray(list) ? list : [ list ];
    if (!keepOld) {
      this.__tlds__ = list.slice();
      this.__tlds_replaced__ = true;
      compile(this);
      return this;
    }
    this.__tlds__ = this.__tlds__.concat(list).sort().filter((function(el, idx, arr) {
      return el !== arr[idx - 1];
    })).reverse();
    compile(this);
    return this;
  };
  /**
	 * LinkifyIt#normalize(match)
	 *
	 * Default normalizer (if schema does not define it's own).
	 **/  LinkifyIt.prototype.normalize = function normalize(match) {
    // Do minimal possible changes by default. Need to collect feedback prior
    // to move forward https://github.com/markdown-it/linkify-it/issues/1
    if (!match.schema) {
      match.url = "http://" + match.url;
    }
    if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
      match.url = "mailto:" + match.url;
    }
  };
  /**
	 * LinkifyIt#onCompile()
	 *
	 * Override to modify basic RegExp-s.
	 **/  LinkifyIt.prototype.onCompile = function onCompile() {};
  var linkifyIt = LinkifyIt;
  /*! https://mths.be/punycode v1.4.1 by @mathias */
  /** Highest positive signed 32-bit float value */  var maxInt = 2147483647;
 // aka. 0x7FFFFFFF or 2^31-1
  /** Bootstring parameters */  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128;
 // 0x80
    var delimiter = "-";
 // '\x2D'
  /** Regular expressions */  var regexPunycode = /^xn--/;
  var regexNonASCII = /[^\x20-\x7E]/;
 // unprintable ASCII chars + non-ASCII chars
    var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
 // RFC 3490 separators
  /** Error messages */  var errors = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
  };
  /** Convenience shortcuts */  var baseMinusTMin = base - tMin;
  var floor = Math.floor;
  var stringFromCharCode = String.fromCharCode;
  /*--------------------------------------------------------------------------*/
  /**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */  function error(type) {
    throw new RangeError(errors[type]);
  }
  /**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */  function map(array, fn) {
    var length = array.length;
    var result = [];
    while (length--) {
      result[length] = fn(array[length]);
    }
    return result;
  }
  /**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */  function mapDomain(string, fn) {
    var parts = string.split("@");
    var result = "";
    if (parts.length > 1) {
      // In email addresses, only the domain name should be punycoded. Leave
      // the local part (i.e. everything up to `@`) intact.
      result = parts[0] + "@";
      string = parts[1];
    }
    // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, ".");
    var labels = string.split(".");
    var encoded = map(labels, fn).join(".");
    return result + encoded;
  }
  /**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */  function ucs2decode(string) {
    var output = [], counter = 0, length = string.length, value, extra;
    while (counter < length) {
      value = string.charCodeAt(counter++);
      if (value >= 55296 && value <= 56319 && counter < length) {
        // high surrogate, and there is a next character
        extra = string.charCodeAt(counter++);
        if ((extra & 64512) == 56320) {
          // low surrogate
          output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
        } else {
          // unmatched surrogate; only append this code unit, in case the next
          // code unit is the high surrogate of a surrogate pair
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  }
  /**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */  function ucs2encode(array) {
    return map(array, (function(value) {
      var output = "";
      if (value > 65535) {
        value -= 65536;
        output += stringFromCharCode(value >>> 10 & 1023 | 55296);
        value = 56320 | value & 1023;
      }
      output += stringFromCharCode(value);
      return output;
    })).join("");
  }
  /**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */  function basicToDigit(codePoint) {
    if (codePoint - 48 < 10) {
      return codePoint - 22;
    }
    if (codePoint - 65 < 26) {
      return codePoint - 65;
    }
    if (codePoint - 97 < 26) {
      return codePoint - 97;
    }
    return base;
  }
  /**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */  function digitToBasic(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  }
  /**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */  function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    for (;delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }
    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  }
  /**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */  function decode(input) {
    // Don't use UCS-2
    var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, 
    /** Cached calculation results */
    baseMinusT;
    // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.
        basic = input.lastIndexOf(delimiter);
    if (basic < 0) {
      basic = 0;
    }
    for (j = 0; j < basic; ++j) {
      // if it's not a basic code point
      if (input.charCodeAt(j) >= 128) {
        error("not-basic");
      }
      output.push(input.charCodeAt(j));
    }
    // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.
        for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
      // `index` is the index of the next character to be consumed.
      // Decode a generalized variable-length integer into `delta`,
      // which gets added to `i`. The overflow checking is easier
      // if we increase `i` as we go, then subtract off its starting
      // value at the end to obtain `delta`.
      for (oldi = i, w = 1, k = base; ;k += base) {
        if (index >= inputLength) {
          error("invalid-input");
        }
        digit = basicToDigit(input.charCodeAt(index++));
        if (digit >= base || digit > floor((maxInt - i) / w)) {
          error("overflow");
        }
        i += digit * w;
        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
        if (digit < t) {
          break;
        }
        baseMinusT = base - t;
        if (w > floor(maxInt / baseMinusT)) {
          error("overflow");
        }
        w *= baseMinusT;
      }
      out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0);
      // `i` was supposed to wrap around from `out` to `0`,
      // incrementing `n` each time, so we'll fix that now:
            if (floor(i / out) > maxInt - n) {
        error("overflow");
      }
      n += floor(i / out);
      i %= out;
      // Insert `n` at position `i` of the output
            output.splice(i++, 0, n);
    }
    return ucs2encode(output);
  }
  /**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */  function encode(input) {
    var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], 
    /** `inputLength` will hold the number of code points in `input`. */
    inputLength, 
    /** Cached calculation results */
    handledCPCountPlusOne, baseMinusT, qMinusT;
    // Convert the input in UCS-2 to Unicode
        input = ucs2decode(input);
    // Cache the length
        inputLength = input.length;
    // Initialize the state
        n = initialN;
    delta = 0;
    bias = initialBias;
    // Handle the basic code points
        for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue < 128) {
        output.push(stringFromCharCode(currentValue));
      }
    }
    handledCPCount = basicLength = output.length;
    // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.
    // Finish the basic string - if it is not empty - with a delimiter
        if (basicLength) {
      output.push(delimiter);
    }
    // Main encoding loop:
        while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next
      // larger one:
      for (m = maxInt, j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      }
      // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
      // but guard against overflow
            handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error("overflow");
      }
      delta += (m - n) * handledCPCountPlusOne;
      n = m;
      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue < n && ++delta > maxInt) {
          error("overflow");
        }
        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer
          for (q = delta, k = base; ;k += base) {
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (q < t) {
              break;
            }
            qMinusT = q - t;
            baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
            q = floor(qMinusT / baseMinusT);
          }
          output.push(stringFromCharCode(digitToBasic(q, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }
      ++delta;
      ++n;
    }
    return output.join("");
  }
  /**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */  function toUnicode(input) {
    return mapDomain(input, (function(string) {
      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    }));
  }
  /**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */  function toASCII(input) {
    return mapDomain(input, (function(string) {
      return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
    }));
  }
  var version = "1.4.1";
  /**
	 * An object of methods to convert from JavaScript's internal character
	 * representation (UCS-2) to Unicode code points, and back.
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode
	 * @type Object
	 */  var ucs2 = {
    decode: ucs2decode,
    encode: ucs2encode
  };
  var punycode$1 = {
    version: version,
    ucs2: ucs2,
    toASCII: toASCII,
    toUnicode: toUnicode,
    encode: encode,
    decode: decode
  };
  var punycode$2 =  Object.freeze({
    __proto__: null,
    decode: decode,
    encode: encode,
    toUnicode: toUnicode,
    toASCII: toASCII,
    version: version,
    ucs2: ucs2,
    default: punycode$1
  });
  // markdown-it default options
    var _default = {
    options: {
      html: false,
      // Enable HTML tags in source
      xhtmlOut: false,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: false,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "\u201c\u201d\u2018\u2019",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      // function (/*str, lang*/) { return ''; }
      highlight: null,
      maxNesting: 100
    },
    components: {
      core: {},
      block: {},
      inline: {}
    }
  };
  // "Zero" preset, with nothing enabled. Useful for manual configuring of simple
    var zero = {
    options: {
      html: false,
      // Enable HTML tags in source
      xhtmlOut: false,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: false,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "\u201c\u201d\u2018\u2019",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      // function (/*str, lang*/) { return ''; }
      highlight: null,
      maxNesting: 20
    },
    components: {
      core: {
        rules: [ "normalize", "block", "inline", "text_join" ]
      },
      block: {
        rules: [ "paragraph" ]
      },
      inline: {
        rules: [ "text" ],
        rules2: [ "balance_pairs", "fragments_join" ]
      }
    }
  };
  // Commonmark default options
    var commonmark = {
    options: {
      html: true,
      // Enable HTML tags in source
      xhtmlOut: true,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: false,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "\u201c\u201d\u2018\u2019",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      // function (/*str, lang*/) { return ''; }
      highlight: null,
      maxNesting: 20
    },
    components: {
      core: {
        rules: [ "normalize", "block", "inline", "text_join" ]
      },
      block: {
        rules: [ "blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph" ]
      },
      inline: {
        rules: [ "autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text" ],
        rules2: [ "balance_pairs", "emphasis", "fragments_join" ]
      }
    }
  };
  var punycode =  getAugmentedNamespace(punycode$2);
  var config = {
    default: _default,
    zero: zero,
    commonmark: commonmark
  };
  ////////////////////////////////////////////////////////////////////////////////
  
  // This validator can prohibit more than really needed to prevent XSS. It's a
  // tradeoff to keep code simple and to be secure by default.
  
  // If you need different setup - override validator method as you wish. Or
  // replace it with dummy function and use external sanitizer.
  
    var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
  var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
  function validateLink(url) {
    // url should be normalized at this point, and existing entities are decoded
    var str = url.trim().toLowerCase();
    return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
  }
  ////////////////////////////////////////////////////////////////////////////////
    var RECODE_HOSTNAME_FOR = [ "http:", "https:", "mailto:" ];
  function normalizeLink(url) {
    var parsed = mdurl.parse(url, true);
    if (parsed.hostname) {
      // Encode hostnames in urls like:
      // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
      // We don't encode unknown schemas, because it's likely that we encode
      // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
      if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
        try {
          parsed.hostname = punycode.toASCII(parsed.hostname);
        } catch (er) {}
      }
    }
    return mdurl.encode(mdurl.format(parsed));
  }
  function normalizeLinkText(url) {
    var parsed = mdurl.parse(url, true);
    if (parsed.hostname) {
      // Encode hostnames in urls like:
      // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
      // We don't encode unknown schemas, because it's likely that we encode
      // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
      if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
        try {
          parsed.hostname = punycode.toUnicode(parsed.hostname);
        } catch (er) {}
      }
    }
    // add '%' to exclude list because of https://github.com/markdown-it/markdown-it/issues/720
        return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
  }
  /**
	 * class MarkdownIt
	 *
	 * Main parser/renderer class.
	 *
	 * ##### Usage
	 *
	 * ```javascript
	 * // node.js, "classic" way:
	 * var MarkdownIt = require('markdown-it'),
	 *     md = new MarkdownIt();
	 * var result = md.render('# markdown-it rulezz!');
	 *
	 * // node.js, the same, but with sugar:
	 * var md = require('markdown-it')();
	 * var result = md.render('# markdown-it rulezz!');
	 *
	 * // browser without AMD, added to "window" on script load
	 * // Note, there are no dash.
	 * var md = window.markdownit();
	 * var result = md.render('# markdown-it rulezz!');
	 * ```
	 *
	 * Single line rendering, without paragraph wrap:
	 *
	 * ```javascript
	 * var md = require('markdown-it')();
	 * var result = md.renderInline('__markdown-it__ rulezz!');
	 * ```
	 **/
  /**
	 * new MarkdownIt([presetName, options])
	 * - presetName (String): optional, `commonmark` / `zero`
	 * - options (Object)
	 *
	 * Creates parser instanse with given config. Can be called without `new`.
	 *
	 * ##### presetName
	 *
	 * MarkdownIt provides named presets as a convenience to quickly
	 * enable/disable active syntax rules and options for common use cases.
	 *
	 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
	 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
	 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
	 *   similar to GFM, used when no preset name given. Enables all available rules,
	 *   but still without html, typographer & autolinker.
	 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
	 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
	 *   For example, when you need only `bold` and `italic` markup and nothing else.
	 *
	 * ##### options:
	 *
	 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
	 *   That's not safe! You may need external sanitizer to protect output from XSS.
	 *   It's better to extend features via plugins, instead of enabling HTML.
	 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
	 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
	 *   world you will need HTML output.
	 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
	 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
	 *   Can be useful for external highlighters.
	 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
	 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
	 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
	 *   quotes beautification (smartquotes).
	 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
	 *   pairs, when typographer enabled and smartquotes on. For example, you can
	 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
	 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
	 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
	 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
	 *   return empty string if the source was not changed and should be escaped
	 *   externaly. If result starts with <pre... internal wrapper is skipped.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * // commonmark mode
	 * var md = require('markdown-it')('commonmark');
	 *
	 * // default mode
	 * var md = require('markdown-it')();
	 *
	 * // enable everything
	 * var md = require('markdown-it')({
	 *   html: true,
	 *   linkify: true,
	 *   typographer: true
	 * });
	 * ```
	 *
	 * ##### Syntax highlighting
	 *
	 * ```js
	 * var hljs = require('highlight.js') // https://highlightjs.org/
	 *
	 * var md = require('markdown-it')({
	 *   highlight: function (str, lang) {
	 *     if (lang && hljs.getLanguage(lang)) {
	 *       try {
	 *         return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
	 *       } catch (__) {}
	 *     }
	 *
	 *     return ''; // use external default escaping
	 *   }
	 * });
	 * ```
	 *
	 * Or with full wrapper override (if you need assign class to `<pre>`):
	 *
	 * ```javascript
	 * var hljs = require('highlight.js') // https://highlightjs.org/
	 *
	 * // Actual default values
	 * var md = require('markdown-it')({
	 *   highlight: function (str, lang) {
	 *     if (lang && hljs.getLanguage(lang)) {
	 *       try {
	 *         return '<pre class="hljs"><code>' +
	 *                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
	 *                '</code></pre>';
	 *       } catch (__) {}
	 *     }
	 *
	 *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
	 *   }
	 * });
	 * ```
	 *
	 **/  function MarkdownIt(presetName, options) {
    if (!(this instanceof MarkdownIt)) {
      return new MarkdownIt(presetName, options);
    }
    if (!options) {
      if (!utils.isString(presetName)) {
        options = presetName || {};
        presetName = "default";
      }
    }
    /**
	   * MarkdownIt#inline -> ParserInline
	   *
	   * Instance of [[ParserInline]]. You may need it to add new rules when
	   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	   * [[MarkdownIt.enable]].
	   **/    this.inline = new parser_inline;
    /**
	   * MarkdownIt#block -> ParserBlock
	   *
	   * Instance of [[ParserBlock]]. You may need it to add new rules when
	   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	   * [[MarkdownIt.enable]].
	   **/    this.block = new parser_block;
    /**
	   * MarkdownIt#core -> Core
	   *
	   * Instance of [[Core]] chain executor. You may need it to add new rules when
	   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
	   * [[MarkdownIt.enable]].
	   **/    this.core = new parser_core;
    /**
	   * MarkdownIt#renderer -> Renderer
	   *
	   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
	   * rules for new token types, generated by plugins.
	   *
	   * ##### Example
	   *
	   * ```javascript
	   * var md = require('markdown-it')();
	   *
	   * function myToken(tokens, idx, options, env, self) {
	   *   //...
	   *   return result;
	   * };
	   *
	   * md.renderer.rules['my_token'] = myToken
	   * ```
	   *
	   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
	   **/    this.renderer = new renderer;
    /**
	   * MarkdownIt#linkify -> LinkifyIt
	   *
	   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
	   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
	   * rule.
	   **/    this.linkify = new linkifyIt;
    /**
	   * MarkdownIt#validateLink(url) -> Boolean
	   *
	   * Link validation function. CommonMark allows too much in links. By default
	   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
	   * except some embedded image types.
	   *
	   * You can change this behaviour:
	   *
	   * ```javascript
	   * var md = require('markdown-it')();
	   * // enable everything
	   * md.validateLink = function () { return true; }
	   * ```
	   **/    this.validateLink = validateLink;
    /**
	   * MarkdownIt#normalizeLink(url) -> String
	   *
	   * Function used to encode link url to a machine-readable format,
	   * which includes url-encoding, punycode, etc.
	   **/    this.normalizeLink = normalizeLink;
    /**
	   * MarkdownIt#normalizeLinkText(url) -> String
	   *
	   * Function used to decode link url to a human-readable format`
	   **/    this.normalizeLinkText = normalizeLinkText;
    // Expose utils & helpers for easy acces from plugins
    /**
	   * MarkdownIt#utils -> utils
	   *
	   * Assorted utility functions, useful to write plugins. See details
	   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
	   **/    this.utils = utils;
    /**
	   * MarkdownIt#helpers -> helpers
	   *
	   * Link components parser functions, useful to write plugins. See details
	   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
	   **/    this.helpers = utils.assign({}, helpers);
    this.options = {};
    this.configure(presetName);
    if (options) {
      this.set(options);
    }
  }
  /** chainable
	 * MarkdownIt.set(options)
	 *
	 * Set parser options (in the same format as in constructor). Probably, you
	 * will never need it, but you can change options after constructor call.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')()
	 *             .set({ html: true, breaks: true })
	 *             .set({ typographer, true });
	 * ```
	 *
	 * __Note:__ To achieve the best possible performance, don't modify a
	 * `markdown-it` instance options on the fly. If you need multiple configurations
	 * it's best to create multiple instances and initialize each with separate
	 * config.
	 **/  MarkdownIt.prototype.set = function(options) {
    utils.assign(this.options, options);
    return this;
  };
  /** chainable, internal
	 * MarkdownIt.configure(presets)
	 *
	 * Batch load of all options and compenent settings. This is internal method,
	 * and you probably will not need it. But if you will - see available presets
	 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
	 *
	 * We strongly recommend to use presets instead of direct config loads. That
	 * will give better compatibility with next versions.
	 **/  MarkdownIt.prototype.configure = function(presets) {
    var self = this, presetName;
    if (utils.isString(presets)) {
      presetName = presets;
      presets = config[presetName];
      if (!presets) {
        throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
      }
    }
    if (!presets) {
      throw new Error("Wrong `markdown-it` preset, can't be empty");
    }
    if (presets.options) {
      self.set(presets.options);
    }
    if (presets.components) {
      Object.keys(presets.components).forEach((function(name) {
        if (presets.components[name].rules) {
          self[name].ruler.enableOnly(presets.components[name].rules);
        }
        if (presets.components[name].rules2) {
          self[name].ruler2.enableOnly(presets.components[name].rules2);
        }
      }));
    }
    return this;
  };
  /** chainable
	 * MarkdownIt.enable(list, ignoreInvalid)
	 * - list (String|Array): rule name or list of rule names to enable
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * Enable list or rules. It will automatically find appropriate components,
	 * containing rules with given names. If rule not found, and `ignoreInvalid`
	 * not set - throws exception.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var md = require('markdown-it')()
	 *             .enable(['sub', 'sup'])
	 *             .disable('smartquotes');
	 * ```
	 **/  MarkdownIt.prototype.enable = function(list, ignoreInvalid) {
    var result = [];
    if (!Array.isArray(list)) {
      list = [ list ];
    }
    [ "core", "block", "inline" ].forEach((function(chain) {
      result = result.concat(this[chain].ruler.enable(list, true));
    }), this);
    result = result.concat(this.inline.ruler2.enable(list, true));
    var missed = list.filter((function(name) {
      return result.indexOf(name) < 0;
    }));
    if (missed.length && !ignoreInvalid) {
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
    }
    return this;
  };
  /** chainable
	 * MarkdownIt.disable(list, ignoreInvalid)
	 * - list (String|Array): rule name or list of rule names to disable.
	 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
	 *
	 * The same as [[MarkdownIt.enable]], but turn specified rules off.
	 **/  MarkdownIt.prototype.disable = function(list, ignoreInvalid) {
    var result = [];
    if (!Array.isArray(list)) {
      list = [ list ];
    }
    [ "core", "block", "inline" ].forEach((function(chain) {
      result = result.concat(this[chain].ruler.disable(list, true));
    }), this);
    result = result.concat(this.inline.ruler2.disable(list, true));
    var missed = list.filter((function(name) {
      return result.indexOf(name) < 0;
    }));
    if (missed.length && !ignoreInvalid) {
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
    }
    return this;
  };
  /** chainable
	 * MarkdownIt.use(plugin, params)
	 *
	 * Load specified plugin with given params into current parser instance.
	 * It's just a sugar to call `plugin(md, params)` with curring.
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * var iterator = require('markdown-it-for-inline');
	 * var md = require('markdown-it')()
	 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
	 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
	 *             });
	 * ```
	 **/  MarkdownIt.prototype.use = function(plugin /*, params, ... */) {
    var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
    plugin.apply(plugin, args);
    return this;
  };
  /** internal
	 * MarkdownIt.parse(src, env) -> Array
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * Parse input string and return list of block tokens (special token type
	 * "inline" will contain list of inline tokens). You should not call this
	 * method directly, until you write custom renderer (for example, to produce
	 * AST).
	 *
	 * `env` is used to pass data between "distributed" rules and return additional
	 * metadata like reference info, needed for the renderer. It also can be used to
	 * inject data in specific cases. Usually, you will be ok to pass `{}`,
	 * and then pass updated object to renderer.
	 **/  MarkdownIt.prototype.parse = function(src, env) {
    if (typeof src !== "string") {
      throw new Error("Input data should be a String");
    }
    var state = new this.core.State(src, this, env);
    this.core.process(state);
    return state.tokens;
  };
  /**
	 * MarkdownIt.render(src [, env]) -> String
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * Render markdown string into html. It does all magic for you :).
	 *
	 * `env` can be used to inject additional metadata (`{}` by default).
	 * But you will not need it with high probability. See also comment
	 * in [[MarkdownIt.parse]].
	 **/  MarkdownIt.prototype.render = function(src, env) {
    env = env || {};
    return this.renderer.render(this.parse(src, env), this.options, env);
  };
  /** internal
	 * MarkdownIt.parseInline(src, env) -> Array
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
	 * block tokens list with the single `inline` element, containing parsed inline
	 * tokens in `children` property. Also updates `env` object.
	 **/  MarkdownIt.prototype.parseInline = function(src, env) {
    var state = new this.core.State(src, this, env);
    state.inlineMode = true;
    this.core.process(state);
    return state.tokens;
  };
  /**
	 * MarkdownIt.renderInline(src [, env]) -> String
	 * - src (String): source string
	 * - env (Object): environment sandbox
	 *
	 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
	 * will NOT be wrapped into `<p>` tags.
	 **/  MarkdownIt.prototype.renderInline = function(src, env) {
    env = env || {};
    return this.renderer.render(this.parseInline(src, env), this.options, env);
  };
  var lib = MarkdownIt;
  var markdownIt = lib;
  return markdownIt;
}));

define("pretty-text/engines/discourse-markdown/anchor", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  function setup(helper) {
    if (helper.getOptions().previewing) {
      return;
    }

    helper.registerPlugin(md => {
      md.core.ruler.push("anchor", state => {
        for (let idx = 0, lvl = 0, headingId = 0; idx < state.tokens.length; idx++) {
          if (state.tokens[idx].type === "blockquote_open" || state.tokens[idx].type === "bbcode_open" && state.tokens[idx].tag === "aside") {
            ++lvl;
          } else if (state.tokens[idx].type === "blockquote_close" || state.tokens[idx].type === "bbcode_close" && state.tokens[idx].tag === "aside") {
            --lvl;
          }

          if (lvl > 0 || state.tokens[idx].type !== "heading_open") {
            continue;
          }

          const linkOpen = new state.Token("link_open", "a", 1);
          const linkClose = new state.Token("link_close", "a", -1);
          let slug = state.tokens[idx + 1].content.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");

          if (slug.match(/^[^a-z]/)) {
            slug = `h-${slug}`;
          }

          slug = `${slug || "h"}-${++headingId}`;
          linkOpen.attrSet("name", slug);
          linkOpen.attrSet("class", "anchor");
          linkOpen.attrSet("href", "#" + slug);
          state.tokens[idx + 1].children.unshift(linkClose);
          state.tokens[idx + 1].children.unshift(linkOpen);
        }
      });
    });
  }
});
define("pretty-text/engines/discourse-markdown/bbcode-block", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.parseBBCodeTag = parseBBCodeTag;
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  let isWhiteSpace;

  function trailingSpaceOnly(src, start, max) {
    let i;

    for (i = start; i < max; i++) {
      let code = src.charCodeAt(i);

      if (code === 0x0a) {
        return true;
      }

      if (!isWhiteSpace(code)) {
        return false;
      }
    }

    return true;
  }

  const ATTR_REGEX = /^\s*=(.+)$|((([a-z0-9]*)\s*)=)([“”"][^“”"]*[“”"]|['][^']*[']|[^"'“”]\S*)/gi; // parse a tag [test a=1 b=2] to a data structure
  // {tag: "test", attrs={a: "1", b: "2"}

  function parseBBCodeTag(src, start, max, multiline) {
    let i;
    let tag;
    let attrs = {};
    let closed = false;
    let length = 0;
    let closingTag = false; // closing tag

    if (src.charCodeAt(start + 1) === 47) {
      closingTag = true;
      start += 1;
    }

    for (i = start + 1; i < max; i++) {
      let letter = src[i];

      if (!(letter >= "a" && letter <= "z" || letter >= "A" && letter <= "Z")) {
        break;
      }
    }

    tag = src.slice(start + 1, i);

    if (!tag) {
      return;
    }

    if (closingTag) {
      if (src[i] === "]") {
        if (multiline && !trailingSpaceOnly(src, i + 1, max)) {
          return;
        }

        tag = tag.toLowerCase();
        return {
          tag,
          length: tag.length + 3,
          closing: true
        };
      }

      return;
    }

    for (; i < max; i++) {
      let letter = src[i];

      if (letter === "]") {
        closed = true;
        break;
      }
    }

    if (closed) {
      length = i - start + 1;
      let raw = src.slice(start + tag.length + 1, i); // trivial parser that is going to have to be rewritten at some point

      if (raw) {
        let match, key, val;

        while (match = ATTR_REGEX.exec(raw)) {
          if (match[1]) {
            key = "_default";
          } else {
            key = match[4];
          }

          val = match[1] || match[5];

          if (val) {
            val = val.trim();
            val = val.replace(/^["'“”](.*)["'“”]$/, "$1");
            attrs[key] = val;
          }
        }
      }

      if (multiline && !trailingSpaceOnly(src, start + length, max)) {
        return;
      }

      tag = tag.toLowerCase();
      return {
        tag,
        attrs,
        length
      };
    }
  }

  function findBlockCloseTag(state, openTag, startLine, endLine) {
    let nesting = 0,
        line = startLine - 1,
        start,
        closeTag,
        max;

    for (;;) {
      line++;

      if (line >= endLine) {
        // unclosed bbcode block should not be autoclosed by end of document.
        return;
      }

      start = state.bMarks[line] + state.tShift[line];
      max = state.eMarks[line];

      if (start < max && state.sCount[line] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break;
      } // bbcode close [ === 91


      if (91 !== state.src.charCodeAt(start)) {
        continue;
      }

      if (state.sCount[line] - state.blkIndent >= 4) {
        // closing bbcode less than 4 spaces
        continue;
      }

      closeTag = parseBBCodeTag(state.src, start, max, true);

      if (closeTag && closeTag.closing && closeTag.tag === openTag.tag) {
        if (nesting === 0) {
          closeTag.line = line;
          closeTag.block = true;
          break;
        }

        nesting--;
      }

      if (closeTag && !closeTag.closing && closeTag.tag === openTag.tag) {
        nesting++;
      }

      closeTag = null;
    }

    return closeTag;
  }

  function findInlineCloseTag(state, openTag, start, max) {
    let closeTag;
    let possibleTag = false;

    for (let j = max - 1; j > start; j--) {
      if (!possibleTag) {
        if (state.src.charCodeAt(j) === 93
        /* ] */
        ) {
          possibleTag = true;
          continue;
        }

        if (!isWhiteSpace(state.src.charCodeAt(j))) {
          break;
        }
      } else {
        if (state.src.charCodeAt(j) === 91
        /* [ */
        ) {
          closeTag = parseBBCodeTag(state.src, j, max);

          if (!closeTag || closeTag.tag !== openTag.tag || !closeTag.closing) {
            closeTag = null;
          } else {
            closeTag.start = j;
            break;
          }
        }
      }
    }

    return closeTag;
  }

  function applyBBCode(state, startLine, endLine, silent, md) {
    let nextLine,
        oldParent,
        oldLineMax,
        rule,
        start = state.bMarks[startLine] + state.tShift[startLine],
        initial = start,
        max = state.eMarks[startLine]; // [ === 91

    if (91 !== state.src.charCodeAt(start)) {
      return false;
    }

    let info = parseBBCodeTag(state.src, start, max);

    if (!info || info.closing) {
      return false;
    }

    let ruleInfo = md.block.bbcode.ruler.getRuleForTag(info.tag);

    if (!ruleInfo) {
      return false;
    }

    rule = ruleInfo.rule; // Since start is found, we can report success here in validation mode

    if (silent) {
      return true;
    } // Search for the end of the block


    nextLine = startLine; // We might have a single inline bbcode

    let closeTag = findInlineCloseTag(state, info, start + info.length, max);

    if (!closeTag) {
      if (!trailingSpaceOnly(state.src, start + info.length, max)) {
        return false;
      }

      closeTag = findBlockCloseTag(state, info, nextLine + 1, endLine);
    }

    if (!closeTag) {
      return false;
    }

    nextLine = closeTag.line || startLine;
    oldParent = state.parentType;
    oldLineMax = state.lineMax; // this will prevent lazy continuations from ever going past our end marker
    // which can happen if we are parsing a bbcode block

    state.lineMax = nextLine;

    if (rule.replace) {
      let content;

      if (startLine === nextLine) {
        content = state.src.slice(start + info.length, closeTag.start);
      } else {
        content = state.src.slice(state.bMarks[startLine + 1], state.eMarks[nextLine - 1]);
      }

      if (!rule.replace.call(this, state, info, content)) {
        return false;
      }
    } else {
      if (rule.before) {
        rule.before.call(this, state, info, state.src.slice(initial, initial + info.length + 1));
      }

      let wrapTag;

      if (rule.wrap) {
        let token;

        if (typeof rule.wrap === "function") {
          token = new state.Token("wrap_bbcode", "div", 1);
          token.level = state.level + 1;

          if (!rule.wrap(token, info)) {
            return false;
          }

          state.tokens.push(token);
          state.level = token.level;
          wrapTag = token.tag;
        } else {
          let split = rule.wrap.split(".");
          wrapTag = split[0];
          let className = split.slice(1).join(" ");
          token = state.push("wrap_bbcode", wrapTag, 1);

          if (className) {
            token.attrs = [["class", className]];
          }
        }
      }

      let lastToken = state.tokens[state.tokens.length - 1];
      lastToken.map = [startLine, nextLine];

      if (closeTag.block) {
        state.md.block.tokenize(state, startLine + 1, nextLine);
      } else {
        let token = state.push("paragraph_open", "p", 1);
        token.map = [startLine, startLine];
        token = state.push("inline", "", 0);
        token.children = [];
        token.map = [startLine, startLine];
        token.content = state.src.slice(start + info.length, closeTag.start);
        state.push("paragraph_close", "p", -1);
      }

      if (rule.wrap) {
        state.push("wrap_bbcode", wrapTag, -1);
      }

      if (rule.after) {
        rule.after.call(this, state, lastToken, state.src.slice(start - 2, start + closeTag.length - 1));
      }
    }

    state.parentType = oldParent;
    state.lineMax = oldLineMax;
    state.line = nextLine + 1;
    return true;
  }

  function setup(helper) {
    helper.registerPlugin(md => {
      const ruler = md.block.bbcode.ruler;
      ruler.push("excerpt", {
        tag: "excerpt",
        wrap: "div.excerpt"
      });
      ruler.push("code", {
        tag: "code",

        replace(state, tagInfo, content) {
          let token;
          token = state.push("fence", "code", 0);
          token.content = content;
          return true;
        }

      });
      isWhiteSpace = md.utils.isWhiteSpace;
      md.block.ruler.after("fence", "bbcode", (state, startLine, endLine, silent) => {
        return applyBBCode(state, startLine, endLine, silent, md);
      }, {
        alt: ["paragraph", "reference", "blockquote", "list"]
      });
    });
  }
});
define("pretty-text/engines/discourse-markdown/bbcode-inline", ["exports", "pretty-text/engines/discourse-markdown/bbcode-block"], function (_exports, _bbcodeBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71f0,"pretty-text/engines/discourse-markdown/bbcode-block"eaimeta@70e063a35619d71f

  function tokenizeBBCode(state, silent, ruler) {
    let pos = state.pos; // 91 = [

    if (silent || state.src.charCodeAt(pos) !== 91) {
      return false;
    }

    const tagInfo = (0, _bbcodeBlock.parseBBCodeTag)(state.src, pos, state.posMax);

    if (!tagInfo) {
      return false;
    }

    let rule, i;
    let ruleInfo = ruler.getRuleForTag(tagInfo.tag);

    if (!ruleInfo) {
      return false;
    }

    rule = ruleInfo.rule;

    if (rule.replace) {
      // special handling for replace
      // we pass raw contents to callback so we simply need to greedy match to end tag
      if (tagInfo.closing) {
        return false;
      }

      let closeTag = "[/" + tagInfo.tag + "]";
      let found = false;

      for (i = state.pos + tagInfo.length; i <= state.posMax - closeTag.length; i++) {
        if (state.src.charCodeAt(pos) === 91 && state.src.slice(i, i + closeTag.length).toLowerCase() === closeTag) {
          found = true;
          break;
        }
      }

      if (!found) {
        return false;
      }

      let content = state.src.slice(state.pos + tagInfo.length, i);

      if (rule.replace(state, tagInfo, content)) {
        state.pos = i + closeTag.length;
        return true;
      } else {
        return false;
      }
    } else {
      tagInfo.rule = rule;
      let token = state.push("text", "", 0);
      token.content = state.src.slice(pos, pos + tagInfo.length);
      token.meta = "bbcode";
      state.delimiters.push({
        bbInfo: tagInfo,
        marker: "bb" + tagInfo.tag,
        open: !tagInfo.closing,
        close: !!tagInfo.closing,
        token: state.tokens.length - 1,
        level: state.level,
        end: -1,
        jump: 0
      });
      state.pos = pos + tagInfo.length;
      return true;
    }
  }

  function processBBCode(state, silent) {
    let i,
        startDelim,
        endDelim,
        tagInfo,
        delimiters = state.delimiters,
        max = delimiters.length;

    if (silent) {
      return;
    }

    for (i = 0; i < max - 1; i++) {
      startDelim = delimiters[i];
      tagInfo = startDelim.bbInfo;

      if (!tagInfo) {
        continue;
      }

      if (startDelim.end === -1) {
        continue;
      }

      endDelim = delimiters[startDelim.end];
      let tag, className;
      const startToken = state.tokens[startDelim.token];
      const endToken = state.tokens[endDelim.token];

      if (typeof tagInfo.rule.wrap === "function") {
        let content = "";

        for (let j = startDelim.token + 1; j < endDelim.token; j++) {
          let inner = state.tokens[j];

          if (inner.type === "text" && inner.meta !== "bbcode") {
            content += inner.content;
          }
        }

        tagInfo.rule.wrap(startToken, endToken, tagInfo, content, state);
        continue;
      } else {
        let split = tagInfo.rule.wrap.split(".");
        tag = split[0];
        className = split.slice(1).join(" ");
      }

      startToken.type = "bbcode_" + tagInfo.tag + "_open";
      startToken.tag = tag;

      if (className) {
        startToken.attrs = [["class", className]];
      }

      startToken.nesting = 1;
      startToken.markup = startToken.content;
      startToken.content = "";
      endToken.type = "bbcode_" + tagInfo.tag + "_close";
      endToken.tag = tag;
      endToken.nesting = -1;
      endToken.markup = startToken.content;
      endToken.content = "";
    }

    return false;
  }

  function setup(helper) {
    helper.allowList(["span.bbcode-b", "span.bbcode-i", "span.bbcode-u", "span.bbcode-s"]);
    helper.registerOptions(opts => {
      opts.features["bbcode-inline"] = true;
    });
    helper.registerPlugin(md => {
      const ruler = md.inline.bbcode.ruler;
      md.inline.ruler.push("bbcode-inline", (state, silent) => tokenizeBBCode(state, silent, ruler));
      md.inline.ruler2.before("fragments_join", "bbcode-inline", processBBCode);
      ruler.push("code", {
        tag: "code",

        replace(state, tagInfo, content) {
          let token;
          token = state.push("code_inline", "code", 0);
          token.content = content;
          return true;
        }

      });
      const simpleUrlRegex = /^https?:\/\//;
      ruler.push("url", {
        tag: "url",

        wrap(startToken, endToken, tagInfo, content, state) {
          const url = (tagInfo.attrs["_default"] || content).trim();
          let linkifyFound = false;

          if (state.md.options.linkify) {
            const tokens = state.tokens;
            const startIndex = tokens.indexOf(startToken);
            const endIndex = tokens.indexOf(endToken); // reuse existing tokens from linkify if they exist

            for (let index = startIndex + 1; index < endIndex; index++) {
              const token = tokens[index];

              if (token.markup === "linkify" && token.info === "auto" && token.type === "link_open") {
                linkifyFound = true;
                token.attrs.push(["data-bbcode", "true"]);
                break;
              }
            }
          }

          if (!linkifyFound && simpleUrlRegex.test(url)) {
            startToken.type = "link_open";
            startToken.tag = "a";
            startToken.attrs = [["href", url], ["data-bbcode", "true"]];
            startToken.content = "";
            startToken.nesting = 1;
            endToken.type = "link_close";
            endToken.tag = "a";
            endToken.content = "";
            endToken.nesting = -1;
          } else {
            // just strip the bbcode tag
            endToken.content = "";
            startToken.content = ""; // edge case, we don't want this detected as a onebox if auto linked
            // this ensures it is not stripped

            startToken.type = "html_inline";
          }

          return false;
        }

      });
      ruler.push("email", {
        tag: "email",

        replace(state, tagInfo, content) {
          let token;
          const email = tagInfo.attrs["_default"] || content;
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", "mailto:" + email], ["data-bbcode", "true"]];
          token = state.push("text", "", 0);
          token.content = content;
          state.push("link_close", "a", -1);
          return true;
        }

      });
      ruler.push("image", {
        tag: "img",

        replace(state, tagInfo, content) {
          let token = state.push("image", "img", 0);
          token.attrs = [["src", content], ["alt", ""]];
          token.children = [];
          return true;
        }

      });
      ruler.push("bold", {
        tag: "b",
        wrap: "span.bbcode-b"
      });
      ruler.push("italic", {
        tag: "i",
        wrap: "span.bbcode-i"
      });
      ruler.push("underline", {
        tag: "u",
        wrap: "span.bbcode-u"
      });
      ruler.push("strike", {
        tag: "s",
        wrap: "span.bbcode-s"
      });
    });
  }
});
define("pretty-text/engines/discourse-markdown/category-hashtag", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  function addHashtag(buffer, matches, state) {
    const options = state.md.options.discourse;
    const slug = matches[1];
    const categoryHashtagLookup = options.categoryHashtagLookup;
    const result = categoryHashtagLookup && categoryHashtagLookup(slug);
    let token;

    if (result) {
      token = new state.Token("link_open", "a", 1);
      token.attrs = [["class", "hashtag"], ["href", result[0]]];
      token.block = false;
      buffer.push(token);
      token = new state.Token("text", "", 0);
      token.content = "#";
      buffer.push(token);
      token = new state.Token("span_open", "span", 1);
      token.block = false;
      buffer.push(token);
      token = new state.Token("text", "", 0);
      token.content = result[1];
      buffer.push(token);
      buffer.push(new state.Token("span_close", "span", -1));
      buffer.push(new state.Token("link_close", "a", -1));
    } else {
      token = new state.Token("span_open", "span", 1);
      token.attrs = [["class", "hashtag"]];
      buffer.push(token);
      token = new state.Token("text", "", 0);
      token.content = matches[0];
      buffer.push(token);
      token = new state.Token("span_close", "span", -1);
      buffer.push(token);
    }
  }

  function setup(helper) {
    helper.registerPlugin(md => {
      const rule = {
        matcher: /#([\u00C0-\u1FFF\u2C00-\uD7FF\w:-]{1,101})/,
        onMatch: addHashtag
      };
      md.core.textPostProcess.ruler.push("category-hashtag", rule);
    });
  }
});
define("pretty-text/engines/discourse-markdown/censored", ["exports", "pretty-text/censored-words"], function (_exports, _censoredWords) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71f0,"pretty-text/censored-words"eaimeta@70e063a35619d71f

  function recurse(tokens, apply) {
    let i;

    for (i = 0; i < tokens.length; i++) {
      if (tokens[i].type === "html_raw" && tokens[i].onebox) {
        continue;
      }

      apply(tokens[i]);

      if (tokens[i].children) {
        recurse(tokens[i].children, apply);
      }
    }
  }

  function censorTree(state, censor) {
    if (!state.tokens) {
      return;
    }

    recurse(state.tokens, token => {
      if (token.content) {
        token.content = censor(token.content);
      }
    });
  }

  function setup(helper) {
    helper.registerPlugin(md => {
      const censoredRegexps = md.options.discourse.censoredRegexp;

      if (Array.isArray(censoredRegexps) && censoredRegexps.length > 0) {
        const replacement = String.fromCharCode(9632);
        const censor = (0, _censoredWords.censorFn)(censoredRegexps, replacement);
        md.core.ruler.push("censored", state => censorTree(state, censor));
      }
    });
  }
});
define("pretty-text/engines/discourse-markdown/code", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  // we need a custom renderer for code blocks cause we have a slightly non compliant
  // format with special handling for text and so on
  const TEXT_CODE_CLASSES = ["text", "pre", "plain"];

  function extractTokenInfo(info, md) {
    if (!info) {
      return;
    }

    info = info.trim();
    const matches = info.match(/(^\s*\S*)\s*(.*)/i);

    if (!matches) {
      return;
    } // ensure the token has only valid chars
    // c++, strucuted-text and p91, are all valid


    if (!/^[\w+-]*$/i.test(matches[1])) {
      return;
    }

    const ASCII_REGEX = /[^\x00-\x7F]/;
    const tag = md.utils.unescapeAll(matches[1].replace(ASCII_REGEX, ""));
    const extractedData = {
      tag,
      attributes: {}
    };

    if (matches[2]?.length) {
      md.utils.unescapeAll(matches[2].replace(ASCII_REGEX, "")).split(",").forEach(potentialPair => {
        const [key, value] = potentialPair.trim().split(/\s+/g)[0].split("="); // invalid pairs would get caught here and not used, eg `foo=`

        if (key && value) {
          extractedData.attributes[key] = value;
        }
      });
    }

    return extractedData;
  }

  function render(tokens, idx, options, env, slf, md) {
    const token = tokens[idx];
    const escapedContent = md.utils.escapeHtml(token.content);
    const tokenInfo = extractTokenInfo(token.info, md);
    const tag = tokenInfo?.tag || md.options.discourse.defaultCodeLang;
    const attributes = tokenInfo?.attributes || {};
    let className;
    const acceptableCodeClasses = md.options.discourse.acceptableCodeClasses || [];

    if (TEXT_CODE_CLASSES.includes(tag)) {
      className = "lang-nohighlight";
    } else if (acceptableCodeClasses.includes(tag)) {
      className = `lang-${tag}`;
    } else {
      className = "lang-nohighlight";
      attributes["wrap"] = tag;
    }

    const dataAttributes = Object.keys(attributes).map(key => {
      const value = md.utils.escapeHtml(attributes[key]);
      key = md.utils.escapeHtml(key);
      return `data-code-${key}="${value}"`;
    }).join(" ");
    return `<pre${dataAttributes ? ` ${dataAttributes}` : ""}><code${className ? ` class="${className}"` : ""}>${escapedContent}</code></pre>\n`;
  }

  function setup(helper) {
    helper.registerOptions((opts, siteSettings) => {
      opts.defaultCodeLang = siteSettings.default_code_lang;
      opts.acceptableCodeClasses = (siteSettings.highlighted_languages || "").split("|").filter(Boolean).concat(["auto", "nohighlight"]);
    });
    helper.allowList(["pre[data-code-*]"]);
    helper.allowList({
      custom(tag, name, value) {
        if (tag === "code" && name === "class") {
          const m = /^lang\-(.+)$/.exec(value);

          if (m) {
            return helper.getOptions().acceptableCodeClasses.includes(m[1]);
          }
        }
      }

    });
    helper.registerPlugin(md => {
      md.renderer.rules.fence = (tokens, idx, options, env, slf) => render(tokens, idx, options, env, slf, md);
    });
  }
});
define("pretty-text/engines/discourse-markdown/custom-typographer-replacements", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  // Simple typographic replacements
  //
  // (tm) (TM) → ™
  // +- → ±
  // ... → … (also ?.... → ?.., !.... → !..)
  // ???????? → ???, !!!!! → !!!, `,,` → `,`
  // -- → &ndash;, --- → &mdash;
  // --> <-- -> <- to → ← → ←
  // (pa) (PA) → ¶
  //
  // Disabled replacements:
  //
  // (c) (C) → ©
  // (r) (R) → ®
  // (p) (P) -> §
  let RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--|-->|<--|->|<-/;
  let SCOPED_ABBR_RE = /\((tm|pa)\)/gi;
  let SCOPED_ABBR = {
    pa: "¶",
    tm: "™"
  };

  function replaceFn(match, name) {
    return SCOPED_ABBR[name.toLowerCase()];
  }

  function replaceScoped(inlineTokens) {
    let i, token;

    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];

      if (token.type === "text") {
        token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
      }
    }
  }

  function replaceRare(inlineTokens) {
    let i,
        token,
        inside_autolink = 0;

    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];

      if (token.type === "text" && !inside_autolink) {
        if (RARE_RE.test(token.content)) {
          token.content = token.content.replace(/\+-/g, "±") // Custom arrows
          .replace(/(^|\s)-{1,2}>(\s|$)/gm, "\u0020\u2192\u0020").replace(/(^|\s)<-{1,2}(\s|$)/gm, "\u0020\u2190\u0020") // .., ..., ....... -> …
          // but ?..... & !..... -> ?.. & !..
          .replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",") // em-dash
          .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1\u2014") // en-dash
          .replace(/(^|\s)--(?=\s|$)/gm, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1\u2013");
        }
      }

      if (token.type === "link_open" && token.info === "auto") {
        inside_autolink--;
      }

      if (token.type === "link_close" && token.info === "auto") {
        inside_autolink++;
      }
    }
  }

  function replace(state) {
    let blkIdx;

    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state.tokens[blkIdx].type !== "inline") {
        continue;
      }

      if (SCOPED_ABBR_RE.test(state.tokens[blkIdx].content)) {
        replaceScoped(state.tokens[blkIdx].children);
      }

      if (RARE_RE.test(state.tokens[blkIdx].content)) {
        replaceRare(state.tokens[blkIdx].children);
      }
    }
  }

  function setup(helper) {
    helper.registerPlugin(md => {
      if (md.options.typographer) {
        md.core.ruler.at("replacements", replace);
      }
    });
  }
});
define("pretty-text/engines/discourse-markdown/d-wrap", ["exports", "pretty-text/engines/discourse-markdown/bbcode-block"], function (_exports, _bbcodeBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71f0,"pretty-text/engines/discourse-markdown/bbcode-block"eaimeta@70e063a35619d71f

  const WRAP_CLASS = "d-wrap";

  function parseAttributes(tagInfo) {
    const attributes = tagInfo.attrs._default || "";
    return (0, _bbcodeBlock.parseBBCodeTag)(`[wrap wrap=${attributes}]`, 0, attributes.length + 12).attrs || {};
  }

  function camelCaseToDash(str) {
    return str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
  }

  function applyDataAttributes(token, state, attributes) {
    Object.keys(attributes).forEach(tag => {
      const value = state.md.utils.escapeHtml(attributes[tag]);
      tag = camelCaseToDash(state.md.utils.escapeHtml(tag.replace(/[^A-Za-z\-0-9]/g, "")));

      if (value && tag && tag.length > 1) {
        token.attrs.push([`data-${tag}`, value]);
      }
    });
  }

  const blockRule = {
    tag: "wrap",

    before(state, tagInfo) {
      let token = state.push("wrap_open", "div", 1);
      token.attrs = [["class", WRAP_CLASS]];
      applyDataAttributes(token, state, parseAttributes(tagInfo));
    },

    after(state) {
      state.push("wrap_close", "div", -1);
    }

  };
  const inlineRule = {
    tag: "wrap",

    replace(state, tagInfo, content) {
      let token = state.push("wrap_open", "span", 1);
      token.attrs = [["class", WRAP_CLASS]];
      applyDataAttributes(token, state, parseAttributes(tagInfo));

      if (content) {
        token = state.push("text", "", 0);
        token.content = content;
      }

      state.push("wrap_close", "span", -1);
      return true;
    }

  };

  function setup(helper) {
    helper.registerPlugin(md => {
      md.inline.bbcode.ruler.push("inline-wrap", inlineRule);
      md.block.bbcode.ruler.push("block-wrap", blockRule);
    });
    helper.allowList([`div.${WRAP_CLASS}`, `span.${WRAP_CLASS}`, "span[data-*]"]);
  }
});
define("pretty-text/engines/discourse-markdown/emoji", ["exports", "pretty-text/emoji", "pretty-text/emoji/data"], function (_exports, _emoji, _data) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.resetTranslationTree = resetTranslationTree;
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71f0,"pretty-text/emoji",0,"pretty-text/emoji/data"eaimeta@70e063a35619d71f

  const MAX_NAME_LENGTH = 60;
  let translationTree = null;

  function resetTranslationTree() {
    translationTree = null;
  } // This allows us to efficiently search for aliases
  // We build a data structure that allows us to quickly
  // search through our N next chars to see if any match
  // one of our alias emojis.


  function buildTranslationTree(customEmojiTranslation) {
    let tree = [];
    let lastNode;
    const allTranslations = Object.assign({}, _data.translations, customEmojiTranslation || {});
    Object.keys(allTranslations).forEach(key => {
      let node = tree;

      for (let i = 0; i < key.length; i++) {
        let code = key.charCodeAt(i);
        let found = false;

        for (let j = 0; j < node.length; j++) {
          if (node[j][0] === code) {
            node = node[j][1];
            found = true;
            break;
          }
        }

        if (!found) {
          // code, children, value
          let tmp = [code, []];
          node.push(tmp);
          lastNode = tmp;
          node = tmp[1];
        }
      }

      lastNode[2] = allTranslations[key];
    });
    return tree;
  }

  function imageFor(code, opts) {
    code = code.toLowerCase();
    const url = (0, _emoji.buildEmojiUrl)(code, opts);

    if (url) {
      const title = `:${code}:`;
      const classes = (0, _emoji.isCustomEmoji)(code, opts) ? "emoji emoji-custom" : "emoji";
      return {
        url,
        title,
        classes
      };
    }
  }

  function getEmojiName(content, pos, state, inlineEmoji) {
    if (content.charCodeAt(pos) !== 58) {
      return;
    }

    if (pos > 0) {
      let prev = content.charCodeAt(pos - 1);

      if (!inlineEmoji && !state.md.utils.isSpace(prev) && !state.md.utils.isPunctChar(String.fromCharCode(prev))) {
        return;
      }
    }

    pos++;

    if (content.charCodeAt(pos) === 58) {
      return;
    }

    let length = 0;

    while (length < MAX_NAME_LENGTH) {
      length++;

      if (content.charCodeAt(pos + length) === 58) {
        // check for t2-t6
        if (content.slice(pos + length + 1, pos + length + 4).match(/t[2-6]:/)) {
          length += 3;
        }

        break;
      }

      if (pos + length > content.length) {
        return;
      }
    }

    if (length === MAX_NAME_LENGTH) {
      return;
    }

    return content.slice(pos, pos + length);
  } // straight forward :smile: to emoji image


  function getEmojiTokenByName(name, state) {
    let info;

    if (info = imageFor(name, state.md.options.discourse)) {
      let token = new state.Token("emoji", "img", 0);
      token.attrs = [["src", info.url], ["title", info.title], ["class", info.classes], ["alt", info.title], ["loading", "lazy"], ["width", "20"], ["height", "20"]];
      return token;
    }
  }

  function getEmojiTokenByTranslation(content, pos, state, customEmojiTranslation) {
    translationTree = translationTree || buildTranslationTree(customEmojiTranslation);
    let t = translationTree;
    let start = pos;
    let found = null;

    while (t.length > 0 && pos < content.length) {
      let matched = false;
      let code = content.charCodeAt(pos);

      for (let i = 0; i < t.length; i++) {
        if (t[i][0] === code) {
          matched = true;
          found = t[i][2];
          t = t[i][1];
          break;
        }
      }

      if (!matched) {
        return;
      }

      pos++;
    }

    if (!found) {
      return;
    } // quick boundary check


    if (start > 0) {
      let leading = content.charAt(start - 1);

      if (!state.md.utils.isSpace(leading.charCodeAt(0)) && !state.md.utils.isPunctChar(leading)) {
        return;
      }
    } // check trailing for punct or space


    if (pos < content.length) {
      let trailing = content.charCodeAt(pos);

      if (!state.md.utils.isSpace(trailing)) {
        return;
      }
    }

    let token = getEmojiTokenByName(found, state);

    if (token) {
      return {
        pos,
        token
      };
    }
  }

  function applyEmoji(content, state, emojiUnicodeReplacer, enableShortcuts, inlineEmoji, customEmojiTranslation) {
    let result = null;
    let start = 0;

    if (emojiUnicodeReplacer) {
      content = emojiUnicodeReplacer(content);
    }

    let end = content.length;

    for (let i = 0; i < content.length - 1; i++) {
      let offset = 0;
      let token = null;
      const name = getEmojiName(content, i, state, inlineEmoji);

      if (name) {
        token = getEmojiTokenByName(name, state);

        if (token) {
          offset = name.length + 2;
        }
      }

      if (enableShortcuts && !token) {
        // handle aliases (note: we can't do this in inline cause ; is not a split point)
        const info = getEmojiTokenByTranslation(content, i, state, customEmojiTranslation);

        if (info) {
          offset = info.pos - i;
          token = info.token;
        }
      }

      if (token) {
        result = result || [];

        if (i - start > 0) {
          let text = new state.Token("text", "", 0);
          text.content = content.slice(start, i);
          result.push(text);
        }

        result.push(token);
        end = start = i + offset;
        i += offset - 1;
      }
    }

    if (end < content.length) {
      let text = new state.Token("text", "", 0);
      text.content = content.slice(end);
      result.push(text);
    } // we check for a result <= 5 because we support maximum 3 large emojis
    // EMOJI SPACE EMOJI SPACE EMOJI => 5 tokens


    if (result && result.length > 0 && result.length <= 5) {
      // we ensure line starts and ends with an emoji
      // and has no more than 3 emojis
      if (result[0].type === "emoji" && result[result.length - 1].type === "emoji" && result.filter(r => r.type === "emoji").length <= 3) {
        let onlyEmojiLine = true;
        let index = 0;

        const checkNextToken = t => {
          if (!t) {
            return;
          }

          if (!["emoji", "text"].includes(t.type)) {
            onlyEmojiLine = false;
          } // a text token should always have an emoji before
          // and be a space


          if (t.type === "text" && (result[index - 1] && result[index - 1].type !== "emoji" || t.content !== " ")) {
            onlyEmojiLine = false;
          } // exit as soon as possible


          if (onlyEmojiLine) {
            index += 1;
            checkNextToken(result[index]);
          }
        };

        checkNextToken(result[index]);

        if (onlyEmojiLine) {
          result.forEach(r => {
            if (r.type === "emoji") {
              applyOnlyEmojiClass(r);
            }
          });
        }
      }
    }

    return result;
  }

  function applyOnlyEmojiClass(token) {
    token.attrs.forEach(attr => {
      if (attr[0] === "class") {
        attr[1] = `${attr[1]} only-emoji`;
      }
    });
  }

  function setup(helper) {
    helper.registerOptions((opts, siteSettings, state) => {
      opts.features.emoji = !state.disableEmojis && !!siteSettings.enable_emoji;
      opts.features.emojiShortcuts = !!siteSettings.enable_emoji_shortcuts;
      opts.features.inlineEmoji = !!siteSettings.enable_inline_emoji_translation;
      opts.emojiSet = siteSettings.emoji_set || "";
      opts.customEmoji = state.customEmoji;
      opts.emojiCDNUrl = siteSettings.external_emoji_url;
    });
    helper.registerPlugin(md => {
      md.core.ruler.push("emoji", state => md.options.discourse.helpers.textReplace(state, (c, s) => applyEmoji(c, s, md.options.discourse.emojiUnicodeReplacer, md.options.discourse.features.emojiShortcuts, md.options.discourse.features.inlineEmoji, md.options.discourse.customEmojiTranslation)));
    });
    helper.allowList(["img[class=emoji]", "img[class=emoji emoji-custom]", "img[class=emoji emoji-custom only-emoji]", "img[class=emoji only-emoji]", "img[loading=lazy]", "img[width=20]", "img[height=20]"]);
  }
});
define("pretty-text/engines/discourse-markdown/helpers", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.textReplace = textReplace;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  // since the markdown.it interface is a bit on the verbose side
  // we can keep some general patterns here
  var _default = null; // creates a rule suitable for inline parsing and replacement
  //
  // example:
  // const rule = inlineRegexRule(md, {
  //   start: '#',
  //   matcher: /^#([\w-:]{1,101})/i,
  //   emitter: emitter
  // });
  // based off https://github.com/markdown-it/markdown-it-emoji/blob/master/dist/markdown-it-emoji.js
  //

  _exports.default = _default;

  function textReplace(state, callback, skipAllLinks) {
    let i,
        j,
        l,
        tokens,
        token,
        blockTokens = state.tokens,
        linkLevel = 0;

    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== "inline") {
        continue;
      }

      tokens = blockTokens[j].children; // We scan from the end, to keep position when new tags added.
      // Use reversed logic in links start/end match

      for (i = tokens.length - 1; i >= 0; i--) {
        token = tokens[i];

        if (skipAllLinks) {
          if (token.type === "link_open" || token.type === "link_close") {
            linkLevel -= token.nesting;
          } else if (token.type === "html_inline") {
            const openLink = token.content.slice(0, 2).toLowerCase();

            if (openLink === "<a") {
              if (token.content.match(/^<a(\s.*)?>/i)) {
                linkLevel++;
              }
            } else if (token.content.slice(0, 4).toLowerCase() === "</a>") {
              linkLevel--;
            }
          }
        } else {
          if (token.type === "link_open" || token.type === "link_close") {
            if (token.info === "auto") {
              linkLevel -= token.nesting;
            }
          }
        }

        if (token.type === "text" && linkLevel === 0) {
          let split;

          if (split = callback(token.content, state)) {
            // replace current node
            blockTokens[j].children = tokens = state.md.utils.arrayReplaceAt(tokens, i, split);
          }
        }
      }
    }
  }
});
define("pretty-text/engines/discourse-markdown/html-img", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  // special handling for IMG tags on a line by themselves
  // we always have to handle it as so it is an inline
  // see: https://talk.commonmark.org/t/newline-and-img-tags/2511
  const REGEX = /^<img.*\\?>\s*$/i;

  function rule(state, startLine, endLine) {
    let nextLine,
        token,
        lineText,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine]; // if it's indented more than 3 spaces, it should be a code block

    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }

    if (!state.md.options.html) {
      return false;
    }

    if (state.src.charCodeAt(pos) !== 0x3c
    /* < */
    ) {
      return false;
    }

    let pos1 = state.src.charCodeAt(pos + 1);

    if (pos1 !== 73
    /* I */
    && pos1 !== 105
    /* i */
    ) {
      return false;
    }

    lineText = state.src.slice(pos, max);

    if (!REGEX.test(lineText)) {
      return false;
    }

    let lines = [];
    lines.push(lineText);
    nextLine = startLine + 1;

    for (; nextLine < endLine; nextLine++) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max);

      if (lineText.trim() === "") {
        break;
      }

      if (!REGEX.test(lineText)) {
        break;
      }

      lines.push(lineText);
    }

    state.line = nextLine;
    let oldParentType = state.parentType;
    state.parentType = "paragraph";
    token = state.push("paragraph_open", "p", 1);
    token.map = [startLine, state.line];
    token = state.push("inline", "", 0);
    token.content = lines.join("\n");
    token.map = [startLine, state.line];
    token.children = [];
    state.push("paragraph_close", "p", -1);
    state.parentType = oldParentType;
    return true;
  }

  function setup(helper) {
    helper.registerPlugin(md => {
      md.block.ruler.before("html_block", "html_img", rule, {
        alt: ["fence"]
      });
    });
  }
});
define("pretty-text/engines/discourse-markdown/image-controls", ["exports", "I18n"], function (_exports, _I18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.priority = void 0;
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71f0,"I18n"eaimeta@70e063a35619d71f

  const SCALES = ["100", "75", "50"];

  function isUpload(token) {
    return token.content.includes("upload://");
  }

  function hasMetadata(token) {
    return token.content.match(/(\d{1,4}x\d{1,4})/);
  }

  function appendMetaData(index, token) {
    const sizePart = token.content.split("|").find(x => x.match(/\d{1,4}x\d{1,4}(,\s*\d{1,3}%)?/));
    let selectedScale = sizePart && sizePart.split(",").pop().trim().replace("%", "");
    const overwriteScale = !SCALES.find(scale => scale === selectedScale);

    if (overwriteScale) {
      selectedScale = "100";
    }

    token.attrs.push(["index-image", index]);
    token.attrs.push(["scale", selectedScale]);
  }

  function rule(state) {
    let currentIndex = 0;

    for (let i = 0; i < state.tokens.length; i++) {
      let blockToken = state.tokens[i];
      const blockTokenImage = blockToken.tag === "img";

      if (blockTokenImage && isUpload(blockToken) && hasMetadata(blockToken)) {
        appendMetaData(currentIndex, blockToken);
        currentIndex++;
      }

      if (!blockToken.children) {
        continue;
      }

      for (let j = 0; j < blockToken.children.length; j++) {
        let token = blockToken.children[j];
        const childrenImage = token.tag === "img";

        if (childrenImage && isUpload(blockToken) && hasMetadata(token)) {
          appendMetaData(currentIndex, token);
          currentIndex++;
        }
      }
    }
  }

  function buildScaleButton(selectedScale, scale) {
    const activeScaleClass = selectedScale === scale ? " active" : "";
    return "<span class='scale-btn" + activeScaleClass + "' data-scale='" + scale + "'>" + scale + "%</span>";
  }

  function buildImageShowAltTextControls(altText) {
    return `
  <span class="alt-text-readonly-container">
  <span class="alt-text-edit-btn">
  <svg aria-hidden="true" class="fa d-icon d-icon-pencil svg-icon svg-string"><use href="#pencil-alt"></use></svg>
</span>

  <span class="alt-text" aria-label="${_I18n.default.t("composer.image_alt_text.aria_label")}">${altText}</span>
  </span>
  `;
  }

  function buildImageEditAltTextControls(altText) {
    return `
  <span class="alt-text-edit-container" hidden="true">
    <input class="alt-text-input" type="text" value="${altText}" />
    <button class="alt-text-edit-ok btn-primary">
        <svg class="fa d-icon d-icon-check svg-icon svg-string"><use href="#check"></use></svg>
    </button>
    <button class="alt-text-edit-cancel btn-default">
        <svg class="fa d-icon d-icon-times svg-icon svg-string"><use href="#times"></use></svg>
    </button>
  </span>
  `;
  }

  function buildImageDeleteButton() {
    return `
  <span class="delete-image-button" aria-label="${_I18n.default.t("composer.delete_image_button")}">
  <svg class="fa d-icon d-icon-trash-alt svg-icon svg-string" xmlns="http://www.w3.org/2000/svg">
  <use href="#far-trash-alt"></use>
  </svg>
   </span>
  `;
  } // We need this to load after `upload-protocol` which is priority 0


  const priority = 1;
  _exports.priority = priority;

  function ruleWithImageControls(oldRule) {
    return function (tokens, idx, options, env, slf) {
      const token = tokens[idx];
      const scaleIndex = token.attrIndex("scale");
      const imageIndex = token.attrIndex("index-image");

      if (scaleIndex !== -1) {
        let selectedScale = token.attrs[scaleIndex][1];
        let index = token.attrs[imageIndex][1];
        let result = `<span class="image-wrapper">`;
        result += oldRule(tokens, idx, options, env, slf);
        result += `<span class="button-wrapper" data-image-index="${index}">`;
        result += buildImageShowAltTextControls(token.attrs[token.attrIndex("alt")][1]);
        result += buildImageEditAltTextControls(token.attrs[token.attrIndex("alt")][1]);
        result += `<span class="scale-btn-container">`;
        result += SCALES.map(scale => buildScaleButton(selectedScale, scale)).join("");
        result += `</span>`;
        result += buildImageDeleteButton();
        result += "</span></span>";
        return result;
      } else {
        return oldRule(tokens, idx, options, env, slf);
      }
    };
  }

  function setup(helper) {
    const opts = helper.getOptions();

    if (opts.previewing) {
      helper.allowList(["span.image-wrapper", "span.button-wrapper", "span[class=scale-btn-container]", "span[class=scale-btn]", "span[class=scale-btn active]", "span.separator", "span.scale-btn[data-scale]", "span.button-wrapper[data-image-index]", "span[aria-label]", "span[class=delete-image-button]", "span.alt-text-container", "span.alt-text-readonly-container", "span.alt-text-readonly-container.alt-text", "span.alt-text-readonly-container.alt-text-edit-btn", "svg[class=fa d-icon d-icon-pencil svg-icon svg-string]", "use[href=#pencil-alt]", "use[href=#far-trash-alt]", "span.alt-text-edit-container", "span.delete-image-button", "span[hidden=true]", "input[type=text]", "input[class=alt-text-input]", "button[class=alt-text-edit-ok btn-primary]", "svg[class=fa d-icon d-icon-check svg-icon svg-string]", "use[href=#check]", "button[class=alt-text-edit-cancel btn-default]", "svg[class=fa d-icon d-icon-times svg-icon svg-string]", "svg[class=fa d-icon d-icon-trash-alt svg-icon svg-string]", "use[href=#times]"]);
      helper.registerPlugin(md => {
        const oldRule = md.renderer.rules.image;
        md.renderer.rules.image = ruleWithImageControls(oldRule);
        md.core.ruler.after("upload-protocol", "resize-controls", rule);
      });
    }
  }
});
define("pretty-text/engines/discourse-markdown/mentions", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.mentionRegex = mentionRegex;
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  function addMention(buffer, matches, state) {
    let username = matches[1] || matches[2];
    let tag = "span";
    let className = "mention";
    let token = new state.Token("mention_open", tag, 1);
    token.attrs = [["class", className]];
    buffer.push(token);
    token = new state.Token("text", "", 0);
    token.content = "@" + username;
    buffer.push(token);
    token = new state.Token("mention_close", tag, -1);
    buffer.push(token);
  }

  function setup(helper) {
    helper.registerOptions((opts, siteSettings) => {
      opts.features.mentions = !!siteSettings.enable_mentions;
      opts.features.unicodeUsernames = !!siteSettings.unicode_usernames;
    });
    helper.registerPlugin(md => {
      const rule = {
        matcher: mentionRegex(md.options.discourse.features.unicodeUsernames),
        onMatch: addMention
      };
      md.core.textPostProcess.ruler.push("mentions", rule);
    });
  }

  function mentionRegex(unicodeUsernames) {
    if (unicodeUsernames) {
      try {
        // Create the regex from a string, because Babel doesn't understand
        // Unicode property escapes and completely mangles the regexp.
        const alnum = "\\p{Alphabetic}\\p{Mark}\\p{Decimal_Number}";
        return new RegExp(`@([${alnum}_][${alnum}._-]{0,58}[${alnum}])|@([${alnum}_])`, "u");
      } catch (e) {
        if (!(e instanceof SyntaxError)) {
          throw e;
        } // Fallback for older browsers and MiniRacer.
        // Created with regexpu-core@4.5.4 by executing the following in nodejs:
        //
        // const rewritePattern = require('regexpu-core')
        // new RegExp(rewritePattern(/[\p{Alphabetic}\p{Mark}\p{Decimal_Number}]/u.source, 'u', { 'unicodePropertyEscape': true }))


        const alnum = /(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06DF-\u06E4\u06ED-\u06F9\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABE\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u20D0-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u24B6-\u24E9\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC82-\uDCBA\uDC7F-\uDC82\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF])/.source;
        return new RegExp(`@((?:_|${alnum})(?:[._-]|${alnum}){0,58}${alnum})|@(?:(_|${alnum}))`);
      }
    } else {
      return /@(\w[\w.-]{0,58}[^\W_])|@(\w)/;
    }
  }
});
define("pretty-text/engines/discourse-markdown/newline", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  // see: https://github.com/markdown-it/markdown-it/issues/375
  //
  // we use a custom paragraph rule cause we have to signal when a
  // link starts with a space, so we can bypass a onebox
  // this is a freedom patch, so careful, may break on updates
  function newline(state, silent) {
    let token,
        pmax,
        max,
        ws,
        pos = state.pos;

    if (state.src.charCodeAt(pos) !== 0x0a
    /* \n */
    ) {
      return false;
    }

    pmax = state.pending.length - 1;
    max = state.posMax; // '  \n' -> hardbreak
    // Lookup in pending chars is bad practice! Don't copy to other rules!
    // Pending string is stored in concat mode, indexed lookups will cause
    // conversion to flat mode.

    if (!silent) {
      if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
        if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
          // Find whitespaces tail of pending chars.
          ws = pmax - 1;

          while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 0x20) {
            ws--;
          }

          state.pending = state.pending.slice(0, ws);
          token = state.push("hardbreak", "br", 0);
        } else {
          state.pending = state.pending.slice(0, -1);
          token = state.push("softbreak", "br", 0);
        }
      } else {
        token = state.push("softbreak", "br", 0);
      }
    }

    pos++; // skip heading spaces for next line

    while (pos < max && state.md.utils.isSpace(state.src.charCodeAt(pos))) {
      if (token) {
        token.leading_space = true;
      }

      pos++;
    }

    state.pos = pos;
    return true;
  }

  function setup(helper) {
    helper.registerPlugin(md => {
      md.inline.ruler.at("newline", newline);
    });
  }
});
define("pretty-text/engines/discourse-markdown/onebox", ["exports", "pretty-text/inline-oneboxer", "pretty-text/oneboxer-cache"], function (_exports, _inlineOneboxer, _oneboxerCache) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71f0,"pretty-text/inline-oneboxer",0,"pretty-text/oneboxer-cache"eaimeta@70e063a35619d71f

  const ONEBOX = 1;
  const INLINE = 2;

  function isTopLevel(href) {
    let split = href.split(/https?:\/\/[^\/]+[\/?]/i);
    let hasExtra = split && split[1] && split[1].length > 0;
    return !hasExtra;
  }

  function applyOnebox(state, silent) {
    if (silent || !state.tokens) {
      return;
    }

    for (let i = 1; i < state.tokens.length; i++) {
      let token = state.tokens[i];
      let prev = state.tokens[i - 1];
      let mode = prev.type === "paragraph_open" && prev.level === 0 ? ONEBOX : INLINE;

      if (token.type === "inline") {
        let children = token.children;

        for (let j = 0; j < children.length - 2; j++) {
          let child = children[j];

          if (child.type === "link_open" && child.markup === "linkify" && child.info === "auto") {
            if (j > children.length - 3) {
              continue;
            }

            if (j === 0 && token.leading_space) {
              mode = INLINE;
            } else if (j > 0) {
              let prevSibling = children[j - 1];

              if (prevSibling.tag !== "br" || prevSibling.leading_space) {
                mode = INLINE;
              }
            } // look ahead for soft or hard break


            let text = children[j + 1];
            let close = children[j + 2];
            let lookahead = children[j + 3];

            if (lookahead && lookahead.tag !== "br") {
              mode = INLINE;
            } // check attrs only include a href


            let attrs = child.attrs;

            if (!attrs || attrs.length !== 1 || attrs[0][0] !== "href") {
              continue;
            }

            let href = attrs[0][1]; // edge case ... what if this is not http or protocolless?

            if (!/^http|^\/\//i.test(href)) {
              continue;
            } // we already know text matches cause it is an auto link


            if (!close || close.type !== "link_close") {
              continue;
            }

            if (mode === ONEBOX) {
              // we already determined earlier that 0 0 was href
              let cached = (0, _oneboxerCache.lookupCache)(attrs[0][1]);

              if (cached) {
                // replace link with 2 blank text nodes and inline html for onebox
                child.type = "html_raw";
                child.content = cached;
                child.inline = true;
                child.onebox = true;
                text.type = "html_raw";
                text.content = "";
                text.inline = true;
                close.type = "html_raw";
                close.content = "";
                close.inline = true;
              } else {
                // decorate...
                attrs.push(["class", "onebox"]);
                attrs.push(["target", "_blank"]);
              }
            } else if (mode === INLINE && !isTopLevel(href)) {
              const onebox = (0, _inlineOneboxer.cachedInlineOnebox)(href);

              if (onebox && onebox.title) {
                text.content = onebox.title;
                attrs.push(["class", "inline-onebox"]);
              } else if (!onebox) {
                attrs.push(["class", "inline-onebox-loading"]);
              }
            }
          }
        }
      }
    }
  }

  function setup(helper) {
    helper.registerPlugin(md => {
      md.core.ruler.after("linkify", "onebox", applyOnebox);
    });
  }
});
define("pretty-text/engines/discourse-markdown/paragraph", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  // see: https://github.com/markdown-it/markdown-it/issues/375
  //
  // we use a custom paragraph rule cause we have to signal when a
  // link starts with a space, so we can bypass a onebox
  // this is a freedom patch, so careful, may break on updates
  function paragraph(state, startLine
  /*, endLine*/
  ) {
    let content,
        terminate,
        i,
        l,
        token,
        oldParentType,
        nextLine = startLine + 1,
        terminatorRules = state.md.block.ruler.getRules("paragraph"),
        endLine = state.lineMax,
        hasLeadingSpace = false;
    oldParentType = state.parentType;
    state.parentType = "paragraph"; // jump line-by-line until empty one or EOF

    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.sCount[nextLine] - state.blkIndent > 3) {
        continue;
      } // quirk for blockquotes, this line should already be checked by that rule


      if (state.sCount[nextLine] < 0) {
        continue;
      } // Some tags can terminate paragraph without empty line.


      terminate = false;

      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }

      if (terminate) {
        break;
      }
    } // START CUSTOM CODE


    content = state.getLines(startLine, nextLine, state.blkIndent, false);
    i = 0;
    let contentLength = content.length;

    while (i < contentLength) {
      let chr = content.charCodeAt(i);

      if (chr === 0x0a) {
        hasLeadingSpace = false;
      } else if (state.md.utils.isWhiteSpace(chr)) {
        hasLeadingSpace = true;
      } else {
        break;
      }

      i++;
    }

    content = content.trim(); // END CUSTOM CODE

    state.line = nextLine;
    token = state.push("paragraph_open", "p", 1);
    token.map = [startLine, state.line]; // CUSTOM

    token.leading_space = hasLeadingSpace;
    token = state.push("inline", "", 0);
    token.content = content;
    token.map = [startLine, state.line];
    token.children = []; // CUSTOM

    token.leading_space = hasLeadingSpace;
    state.push("paragraph_close", "p", -1);
    state.parentType = oldParentType;
    return true;
  }

  function setup(helper) {
    helper.registerPlugin(md => {
      md.block.ruler.at("paragraph", paragraph);
    });
  }
});
define("pretty-text/engines/discourse-markdown/quotes", ["exports", "pretty-text/emoji"], function (_exports, _emoji) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71f0,"pretty-text/emoji"eaimeta@70e063a35619d71f

  const rule = {
    tag: "quote",

    before(state, tagInfo) {
      const attrs = tagInfo.attrs;
      let options = state.md.options.discourse;
      let quoteInfo = attrs["_default"];
      let username, postNumber, topicId, avatarImg, primaryGroupName, full, displayName;

      if (quoteInfo) {
        let split = quoteInfo.split(/\,\s*/);
        username = split[0];
        let i;

        for (i = 1; i < split.length; i++) {
          if (split[i].startsWith("post:")) {
            postNumber = parseInt(split[i].slice(5), 10);
            continue;
          }

          if (split[i].startsWith("topic:")) {
            topicId = parseInt(split[i].slice(6), 10);
            continue;
          }

          if (/full:\s*true/.test(split[i])) {
            full = true;
            continue;
          } // if we have the additional attribute of username: because we are prioritizing full name
          // then assign the name to be the displayName


          if (split[i].startsWith("username:")) {
            // return users name by selecting all values from the first index to the post
            // this protects us from when a user has a `,` in their name
            displayName = split.slice(0, split.indexOf(`post:${postNumber}`)); // preserve `,` in a users name if they exist

            if (displayName.length > 1) {
              displayName = displayName.join(", ");
            } // strip key of 'username:' and return username


            username = split[i].slice(9);
            continue;
          }
        }
      }

      if (options.lookupAvatarByPostNumber) {
        // client-side, we can retrieve the avatar from the post
        avatarImg = options.lookupAvatarByPostNumber(postNumber, topicId);
      } else if (options.lookupAvatar) {
        // server-side, we need to lookup the avatar from the username
        avatarImg = options.lookupAvatar(username);
      }

      if (options.lookupPrimaryUserGroupByPostNumber) {
        // client-side, we can retrieve the primary user group from the post
        primaryGroupName = options.lookupPrimaryUserGroupByPostNumber(postNumber, topicId);
      } else if (options.lookupPrimaryUserGroup) {
        // server-side, we need to lookup the primary user group from the username
        primaryGroupName = options.lookupPrimaryUserGroup(username);
      }

      if (options.formatUsername) {
        displayName = displayName || options.formatUsername(username);
      } else {
        displayName = displayName || username;
      }

      let token = state.push("bbcode_open", "aside", 1);
      token.attrs = [];

      if (primaryGroupName && primaryGroupName.length !== 0) {
        token.attrs.push(["class", `quote group-${primaryGroupName}`]);
      } else {
        token.attrs.push(["class", "quote no-group"]);
      }

      if (username) {
        token.attrs.push(["data-username", username]);
      }

      if (postNumber) {
        token.attrs.push(["data-post", postNumber]);
      }

      if (topicId) {
        token.attrs.push(["data-topic", topicId]);
      }

      if (full) {
        token.attrs.push(["data-full", "true"]);
      }

      if (username) {
        let forOtherTopic = options.topicId && topicId !== options.topicId;
        let offTopicQuote = postNumber && options.getTopicInfo && (forOtherTopic || options.forceQuoteLink); // on topic quote

        token = state.push("quote_header_open", "div", 1);
        token.attrs = [["class", "title"]];
        token = state.push("quote_controls_open", "div", 1);
        token.attrs = [["class", "quote-controls"]];
        state.push("quote_controls_close", "div", -1);

        if (avatarImg) {
          token = state.push("html_inline", "", 0);
          token.content = avatarImg;
        }

        if (offTopicQuote) {
          const topicInfo = options.getTopicInfo(topicId);

          if (topicInfo) {
            let href = topicInfo.href;

            if (postNumber > 0) {
              href += "/" + postNumber;
            }

            let title = topicInfo.title;

            if (options.enableEmoji) {
              title = (0, _emoji.performEmojiUnescape)(topicInfo.title, {
                getURL: options.getURL,
                emojiSet: options.emojiSet,
                emojiCDNUrl: options.emojiCDNUrl,
                enableEmojiShortcuts: options.enableEmojiShortcuts,
                inlineEmoji: options.inlineEmoji,
                lazy: true
              });
            }

            token = state.push("link_open", "a", 1);
            token.attrs = [["href", href]];
            token.block = false;
            token = state.push("html_inline", "", 0);
            token.content = title;
            token = state.push("link_close", "a", -1);
            token.block = false;
          }
        } else {
          token = state.push("text", "", 0);
          token.content = ` ${displayName}:`;
        }

        state.push("quote_header_close", "div", -1);
      }

      state.push("bbcode_open", "blockquote", 1);
    },

    after(state) {
      state.push("bbcode_close", "blockquote", -1);
      state.push("bbcode_close", "aside", -1);
    }

  };

  function setup(helper) {
    helper.registerOptions((opts, siteSettings) => {
      opts.enableEmoji = siteSettings.enable_emoji;
      opts.emojiSet = siteSettings.emoji_set;
      opts.emojiCDNUrl = siteSettings.external_emoji_url;
      opts.enableEmojiShortcuts = siteSettings.enable_emoji_shortcuts;
      opts.inlineEmoji = siteSettings.enable_inline_emoji_translation;
    });
    helper.registerPlugin(md => {
      md.block.bbcode.ruler.push("quotes", rule);
    });
    helper.allowList(["img[class=avatar]", "img[loading=lazy]"]);
    helper.allowList({
      custom(tag, name, value) {
        if (tag === "aside" && name === "class") {
          return value === "quote no-group" || !!/^quote group\-(.+)$/.exec(value);
        }
      }

    });
  }
});
define("pretty-text/engines/discourse-markdown/table", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  function setup(helper) {
    helper.registerPlugin(md => {
      md.renderer.rules.table_open = function () {
        return '<div class="md-table">\n<table>\n';
      };

      md.renderer.rules.table_close = function () {
        return "</table>\n</div>";
      };
    }); // we need a custom callback for style handling

    helper.allowList({
      custom(tag, attr, val) {
        if (tag !== "th" && tag !== "td") {
          return false;
        }

        if (attr !== "style") {
          return false;
        }

        return val === "text-align:right" || val === "text-align:left" || val === "text-align:center";
      }

    });
    helper.allowList(["table", "tbody", "thead", "tr", "th", "td", "div.md-table"]);
  }
});
define("pretty-text/engines/discourse-markdown/text-post-process", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.TextPostProcessRuler = void 0;
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  class TextPostProcessRuler {
    constructor() {
      this.rules = [];
    }

    getRules() {
      return this.rules;
    } // TODO error handling


    getMatcher() {
      if (this.matcher) {
        return this.matcher;
      }

      this.matcherIndex = [];
      const rules = [];
      const flags = new Set("g");
      this.rules.forEach(r => {
        const matcher = r.rule.matcher;
        rules.push(`(${matcher.source})`);
        matcher.flags.split("").forEach(f => flags.add(f));
      });
      let i;
      let regexString = "";
      let last = 1; // this code is a bit tricky, our matcher may have multiple capture groups
      // we want to dynamically determine how many

      for (i = 0; i < rules.length; i++) {
        this.matcherIndex[i] = last;

        if (i === rules.length - 1) {
          break;
        }

        if (i > 0) {
          regexString = regexString + "|";
        }

        regexString = regexString + rules[i];
        let regex = new RegExp(regexString + "|(x)");
        last = "x".match(regex).length - 1;
      }

      this.matcher = new RegExp(rules.join("|"), [...flags].join(""));
      return this.matcher;
    }

    applyRule(buffer, match, state) {
      let i;

      for (i = 0; i < this.rules.length; i++) {
        let index = this.matcherIndex[i];

        if (match[index]) {
          this.rules[i].rule.onMatch(buffer, match.slice(index, this.matcherIndex[i + 1]), state);
          break;
        }
      }
    } // TODO validate inputs


    push(name, rule) {
      this.rules.push({
        name,
        rule
      });
      this.matcher = null;
    }

  }

  _exports.TextPostProcessRuler = TextPostProcessRuler;

  function allowedBoundary(content, index, utils) {
    let code = content.charCodeAt(index);
    return utils.isWhiteSpace(code) || utils.isPunctChar(String.fromCharCode(code));
  }

  function textPostProcess(content, state, ruler) {
    let result = null;
    let match;
    let pos = 0;
    const matcher = ruler.getMatcher();

    while (match = matcher.exec(content)) {
      // something is wrong
      if (match.index < pos) {
        break;
      } // check boundary


      if (match.index > 0) {
        if (!allowedBoundary(content, match.index - 1, state.md.utils)) {
          continue;
        }
      } // check forward boundary as well


      if (match.index + match[0].length < content.length) {
        if (!allowedBoundary(content, match.index + match[0].length, state.md.utils)) {
          continue;
        }
      }

      result = result || [];

      if (match.index > pos) {
        let token = new state.Token("text", "", 0);
        token.content = content.slice(pos, match.index);
        result.push(token);
      }

      ruler.applyRule(result, match, state);
      pos = match.index + match[0].length;
    }

    if (result && pos < content.length) {
      let token = new state.Token("text", "", 0);
      token.content = content.slice(pos);
      result.push(token);
    }

    return result;
  }

  function setup(helper) {
    helper.registerPlugin(md => {
      const ruler = md.core.textPostProcess.ruler;

      const replacer = (content, state) => textPostProcess(content, state, ruler);

      md.core.ruler.push("text-post-process", state => md.options.discourse.helpers.textReplace(state, replacer, true));
    });
  }
});
define("pretty-text/engines/discourse-markdown/upload-protocol", ["exports", "xss"], function (_exports, _xss) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71f0,"xss"eaimeta@70e063a35619d71f

  const HTML_TYPES = ["html_block", "html_inline"]; // add image to array if src has an upload

  function addImage(uploads, token) {
    if (token.attrs) {
      for (let i = 0; i < token.attrs.length; i++) {
        const value = token.attrs[i][1];

        if (value?.startsWith("upload://")) {
          uploads.push({
            token,
            srcIndex: i,
            origSrc: value
          });
          break;
        }
      }
    }
  }

  function attr(name, value) {
    if (value) {
      return `${name}="${_xss.default.escapeAttrValue(value)}"`;
    }

    return name;
  }

  function uploadLocatorString(url) {
    return `___REPLACE_UPLOAD_SRC_${url}___`;
  }

  function findUploadsInHtml(uploads, blockToken) {
    // Slightly misusing our HTML sanitizer to look for upload://
    // image src attributes, and replace them with a placeholder.
    // Note that we can't use browser DOM APIs because this needs
    // to run in mini-racer.
    let foundImage = false;
    let allowList;
    const filter = new _xss.default.FilterXSS({
      allowList: [],
      allowCommentTag: true,

      onTag(tag, html, info) {
        // We're not using this for sanitizing, so allow all tags through
        info.isWhite = true;
        allowList[tag] = [];
      },

      onTagAttr(tag, name, value) {
        if (tag === "img" && name === "src" && value.startsWith("upload://")) {
          uploads.push({
            token: blockToken,
            srcIndex: null,
            origSrc: value
          });
          foundImage = true;
          return uploadLocatorString(value);
        }

        return attr(name, value);
      }

    });
    allowList = filter.options.whiteList;
    const newContent = filter.process(blockToken.content);

    if (foundImage) {
      blockToken.content = newContent;
    }
  }

  function processToken(uploads, token) {
    if (token.tag === "img" || token.tag === "a") {
      addImage(uploads, token);
    } else if (HTML_TYPES.includes(token.type)) {
      findUploadsInHtml(uploads, token);
    }

    if (token.children) {
      for (let j = 0; j < token.children.length; j++) {
        const childToken = token.children[j];
        processToken(uploads, childToken);
      }
    }
  }

  function rule(state) {
    let uploads = [];

    for (let i = 0; i < state.tokens.length; i++) {
      let blockToken = state.tokens[i];
      processToken(uploads, blockToken);
    }

    if (uploads.length > 0) {
      let srcList = uploads.map(u => u.origSrc); // In client-side cooking, this lookup returns nothing
      // This means we set data-orig-src, and let decorateCooked
      // lookup the image URLs asynchronously

      let lookup = state.md.options.discourse.lookupUploadUrls;
      let longUrls = lookup && lookup(srcList) || {};
      uploads.forEach(_ref => {
        let {
          token,
          srcIndex,
          origSrc
        } = _ref;
        let mapped = longUrls[origSrc];

        if (HTML_TYPES.includes(token.type)) {
          const locator = uploadLocatorString(origSrc);
          let attrs = [];

          if (mapped) {
            attrs.push(attr("src", mapped.url), attr("data-base62-sha1", mapped.base62_sha1));
          } else {
            attrs.push(attr("src", state.md.options.discourse.getURL("/images/transparent.png")), attr("data-orig-src", origSrc));
          }

          token.content = token.content.replace(locator, attrs.join(" "));
        } else if (token.tag === "img") {
          if (mapped) {
            token.attrs[srcIndex][1] = mapped.url;
            token.attrs.push(["data-base62-sha1", mapped.base62_sha1]);
          } else {
            // no point putting a transparent .png for audio/video
            if (token.content.match(/\|video|\|audio/)) {
              token.attrs[srcIndex][1] = state.md.options.discourse.getURL("/404");
            } else {
              token.attrs[srcIndex][1] = state.md.options.discourse.getURL("/images/transparent.png");
            }

            token.attrs.push(["data-orig-src", origSrc]);
          }
        } else if (token.tag === "a") {
          if (mapped) {
            // when secure media is enabled we want the full /secure-media-uploads/
            // url to take advantage of access control security
            if (state.md.options.discourse.limitedSiteSettings.secureMedia && mapped.url.includes("secure-media-uploads")) {
              token.attrs[srcIndex][1] = mapped.url;
            } else {
              token.attrs[srcIndex][1] = mapped.short_path;
            }
          } else {
            token.attrs[srcIndex][1] = state.md.options.discourse.getURL("/404");
            token.attrs.push(["data-orig-href", origSrc]);
          }
        }
      });
    }
  }

  function setup(helper) {
    const opts = helper.getOptions();

    if (opts.previewing) {
      helper.allowList(["img.resizable"]);
    }

    helper.allowList(["img[data-orig-src]", "img[data-base62-sha1]", "a[data-orig-href]"]);
    helper.registerPlugin(md => {
      md.core.ruler.push("upload-protocol", rule);
    });
  }
});
define("pretty-text/engines/discourse-markdown/watched-words", ["exports", "discourse-common/utils/watched-words"], function (_exports, _watchedWords) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.priority = void 0;
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71f0,"discourse-common/utils/watched-words"eaimeta@70e063a35619d71f

  const MAX_MATCHES = 100;

  function isLinkOpen(str) {
    return /^<a[>\s]/i.test(str);
  }

  function isLinkClose(str) {
    return /^<\/a\s*>/i.test(str);
  }

  function findAllMatches(text, matchers) {
    const matches = [];
    let count = 0;
    matchers.forEach(matcher => {
      let match;

      while ((match = matcher.pattern.exec(text)) !== null && count++ < MAX_MATCHES) {
        matches.push({
          index: match.index + match[0].indexOf(match[1]),
          text: match[1],
          replacement: matcher.replacement,
          link: matcher.link
        });
      }
    });
    return matches.sort((a, b) => a.index - b.index);
  } // We need this to load after mentions and hashtags which are priority 0


  const priority = 1;
  _exports.priority = priority;
  const NONE = 0;
  const MENTION = 1;
  const HASHTAG_LINK = 2;
  const HASHTAG_SPAN = 3;

  function setup(helper) {
    const opts = helper.getOptions();
    helper.registerPlugin(md => {
      const matchers = [];

      if (md.options.discourse.watchedWordsReplace) {
        Object.entries(md.options.discourse.watchedWordsReplace).map(_ref => {
          let [regexpString, options] = _ref;
          const word = (0, _watchedWords.toWatchedWord)({
            [regexpString]: options
          });
          matchers.push({
            pattern: (0, _watchedWords.createWatchedWordRegExp)(word),
            replacement: options.replacement,
            link: false
          });
        });
      }

      if (md.options.discourse.watchedWordsLink) {
        Object.entries(md.options.discourse.watchedWordsLink).map(_ref2 => {
          let [regexpString, options] = _ref2;
          const word = (0, _watchedWords.toWatchedWord)({
            [regexpString]: options
          });
          matchers.push({
            pattern: (0, _watchedWords.createWatchedWordRegExp)(word),
            replacement: options.replacement,
            link: true
          });
        });
      }

      if (matchers.length === 0) {
        return;
      }

      const cache = new Map();
      md.core.ruler.push("watched-words", state => {
        for (let j = 0, l = state.tokens.length; j < l; j++) {
          if (state.tokens[j].type !== "inline") {
            continue;
          }

          let tokens = state.tokens[j].children;
          let htmlLinkLevel = 0; // We scan once to mark tokens that must be skipped because they are
          // mentions or hashtags

          let lastType = NONE;

          for (let i = 0; i < tokens.length; ++i) {
            const currentToken = tokens[i];

            if (currentToken.type === "mention_open") {
              lastType = MENTION;
            } else if ((currentToken.type === "link_open" || currentToken.type === "span_open") && currentToken.attrs && currentToken.attrs.some(attr => attr[0] === "class" && attr[1] === "hashtag")) {
              lastType = currentToken.type === "link_open" ? HASHTAG_LINK : HASHTAG_SPAN;
            }

            if (lastType !== NONE) {
              currentToken.skipReplace = true;
            }

            if (lastType === MENTION && currentToken.type === "mention_close" || lastType === HASHTAG_LINK && currentToken.type === "link_close" || lastType === HASHTAG_SPAN && currentToken.type === "span_close") {
              lastType = NONE;
            }
          } // We scan from the end, to keep position when new tags added.
          // Use reversed logic in links start/end match


          for (let i = tokens.length - 1; i >= 0; i--) {
            const currentToken = tokens[i]; // Skip content of markdown links

            if (currentToken.type === "link_close") {
              i--;

              while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
                i--;
              }

              continue;
            } // Skip content of html tag links


            if (currentToken.type === "html_inline") {
              if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
                htmlLinkLevel--;
              }

              if (isLinkClose(currentToken.content)) {
                htmlLinkLevel++;
              }
            } // Skip content of mentions or hashtags


            if (currentToken.skipReplace) {
              continue;
            }

            if (currentToken.type === "text") {
              const text = currentToken.content;
              let matches;

              if (cache.has(text)) {
                matches = cache.get(text);
              } else {
                matches = findAllMatches(text, matchers);
                cache.set(text, matches);
              } // Now split string to nodes


              const nodes = [];
              let level = currentToken.level;
              let lastPos = 0;
              let token;

              for (let ln = 0; ln < matches.length; ln++) {
                if (matches[ln].index < lastPos) {
                  continue;
                }

                if (matches[ln].index > lastPos) {
                  token = new state.Token("text", "", 0);
                  token.content = text.slice(lastPos, matches[ln].index);
                  token.level = level;
                  nodes.push(token);
                }

                if (matches[ln].link) {
                  const url = state.md.normalizeLink(matches[ln].replacement);

                  if (htmlLinkLevel === 0 && state.md.validateLink(url)) {
                    token = new state.Token("link_open", "a", 1);
                    token.attrs = [["href", url]];

                    if (opts.discourse.previewing) {
                      token.attrs.push(["data-word", ""]);
                    }

                    token.level = level++;
                    token.markup = "linkify";
                    token.info = "auto";
                    nodes.push(token);
                    token = new state.Token("text", "", 0);
                    token.content = matches[ln].text;
                    token.level = level;
                    nodes.push(token);
                    token = new state.Token("link_close", "a", -1);
                    token.level = --level;
                    token.markup = "linkify";
                    token.info = "auto";
                    nodes.push(token);
                  }
                } else {
                  token = new state.Token("text", "", 0);
                  token.content = matches[ln].replacement;
                  token.level = level;
                  nodes.push(token);
                }

                lastPos = matches[ln].index + matches[ln].text.length;
              }

              if (lastPos < text.length) {
                token = new state.Token("text", "", 0);
                token.content = text.slice(lastPos);
                token.level = level;
                nodes.push(token);
              } // replace current node


              state.tokens[j].children = tokens = md.utils.arrayReplaceAt(tokens, i, nodes);
            }
          }
        }
      });
    });
  }
});//# sourceMappingURL=markdown-it-bundle.map

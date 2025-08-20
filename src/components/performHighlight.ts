const actions = [
    "attack",
    "dash",
    "help",
    "grapple",
    "disengage",
    "use object",
    "shove",
    "use shield",
    "use class feature",
    "cast a spell",
    "escape",
    "hide",
    "improvise",
    "dodge",
    "search",
    "ready",
];

const conditions = [
    "blinded",
    "frightened",
    "paralyzed",
    "restrained",
    "charmed",
    "grappled",
    "petrified",
    "stunned",
    "deafened",
    "incapacitated",
    "poisoned",
    "unconscious",
    "exhaustion",
    "invisible",
    "prone",
];

const skills = [
    "Acrobatics",
    "Animal Handling",
    "Arcana",
    "Athletics",
    "Deception",
    "History",
    "Insight",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Sleight of Hand",
    "Stealth",
    "Survival",
];

export interface HighlightSet {
    actions: boolean;
    conditions: boolean;
    skills: boolean;
}

export function performHighlight(input: string, work: HighlightSet): string {
    let working = input;
    if (work.actions) {
        working = swapForTooltip(working, "action", actions);
    }
    if (work.conditions) {
        working = swapForTooltip(working, "condition", conditions);
    }
    if (work.skills) {
        working = swapForTooltip(working, "skill", skills);
    }
    return working;
}

function swapForTooltip(input: string, tooltip: string, words: string[]) {
    words.forEach((e) => {
        var regex = new RegExp(`(${e})`, "gi");
        console.log("Regex: ", regex);
        input = input.replace(regex, `[${tooltip}]$1[/${tooltip}]`);
    });
    return input;
}

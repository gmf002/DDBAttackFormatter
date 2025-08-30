import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { HighlightSet, performHighlight, RulesSet } from "./performHighlight";
import { Checkbox } from "primereact/checkbox";

function SuperHighlight() {
    const [textToHighlight, setTextToHighlight] = useState("");
    const [showActions, setShowActions] = useState(true);
    const [showConditions, setShowConditions] = useState(true);
    const [showSkills, setShowSkills] = useState(true);
    const [showRules, setShowRules] = useState(true);
    const [showCombat, setShowCombat] = useState(true);
    const [showSpellArea, setShowSpellArea] = useState(true);
    const [showMovementAndExploration, setShowMovementAndExploration] =
        useState(true);

    let rulesClass = "";
    const work: HighlightSet = {
        actions: false,
        conditions: false,
        skills: false,
    };

    if (showActions) {
        work.actions = true;
    }
    if (showConditions) {
        work.conditions = true;
    }
    if (showSkills) {
        work.skills = true;
    }

    if (showRules) {
        const rulesSet: RulesSet = {
            combat: false,
            spellArea: false,
            movementAndExploration: false,
        };
        if (showCombat) {
            rulesSet.combat = true;
        }
        if (showSpellArea) {
            rulesSet.spellArea = true;
        }
        if (showMovementAndExploration) {
            rulesSet.movementAndExploration = true;
        }
        work.rules = rulesSet;
    } else {
        rulesClass = "container-disabled"; // defined in App.css
    }

    const result = performHighlight(textToHighlight, work);

    return (
        <>
            <Card title="Overview">
                <div>
                    This page allows you to input some text where you would like
                    the special words to be tagged. This tagging allows them to
                    show up in DDB with the appropriate tooltips. If you don't
                    want a category substituted, then merely uncheck that
                    category. For example, if the skills category is selected it
                    will detect in the text any instance of a skill like
                    'acrobatics' and wrap it in the [skill] tag. Note that the
                    rules section can be disabled entirely or selectively. The
                    result is at the bottom of the page.
                </div>
            </Card>
            <Card title="Selections:">
                <div className="field grid">
                    <label className="col-6 justify-content-end">
                        Substitute for Actions:
                    </label>
                    <div className="col-6 justify-content-start">
                        <Checkbox
                            checked={showActions}
                            onChange={(e) =>
                                setShowActions(e.checked ? true : false)
                            }
                            className="w-4"
                        />
                    </div>
                    <label className="col-6 justify-content-end">
                        Substitute for Conditions:
                    </label>
                    <div className="col-6 justify-content-start">
                        <Checkbox
                            checked={showConditions}
                            onChange={(e) =>
                                setShowConditions(e.checked ? true : false)
                            }
                            className="w-4"
                        />
                    </div>
                    <label className="col-6 justify-content-end">
                        Substitute for Skills:
                    </label>
                    <div className="col-6 justify-content-start">
                        <Checkbox
                            checked={showSkills}
                            onChange={(e) =>
                                setShowSkills(e.checked ? true : false)
                            }
                            className="w-4"
                        />
                    </div>
                    <label className="col-6 justify-content-end">
                        Substitute for Rules:
                    </label>
                    <div className="col-6 justify-content-start">
                        <Checkbox
                            checked={showRules}
                            onChange={(e) =>
                                setShowRules(e.checked ? true : false)
                            }
                            className="w-4"
                        />
                    </div>
                    <div className="col-12">
                        <Card title="Rules" className={rulesClass}>
                            <div className="field grid">
                                <label className="col-6 justify-content-end">
                                    Substitute for Combat Rules:
                                </label>
                                <div className="col-6 justify-content-start">
                                    <Checkbox
                                        checked={showCombat}
                                        onChange={(e) =>
                                            setShowCombat(
                                                e.checked ? true : false,
                                            )
                                        }
                                        className="w-2"
                                    />
                                </div>
                                <label className="col-6 justify-content-end">
                                    Substitute for Spell Area Rules:
                                </label>
                                <div className="col-6 justify-content-start">
                                    <Checkbox
                                        checked={showSpellArea}
                                        onChange={(e) =>
                                            setShowSpellArea(
                                                e.checked ? true : false,
                                            )
                                        }
                                        className="w-4"
                                    />
                                </div>
                                <label className="col-6 justify-content-end">
                                    Substitute for Movement and Exploration Rules:
                                </label>
                                <div className="col-6 justify-content-start">
                                    <Checkbox
                                        checked={showMovementAndExploration}
                                        onChange={(e) =>
                                            setShowMovementAndExploration(
                                                e.checked ? true : false,
                                            )
                                        }
                                        className="w-4"
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                    <p></p>
                    <label className="col-12 mb-2 md:col-2 md:mb-0">
                        Text to Substitute:
                    </label>
                    <div className="col-12 md:col-10">
                        <InputTextarea
                            value={textToHighlight}
                            onChange={(e) => setTextToHighlight(e.target.value)}
                            className="w-12"
                            rows={20}
                        />
                    </div>
                </div>
            </Card>

            <Card title="Output">
                <div>{result}</div>
            </Card>
        </>
    );
}

export default SuperHighlight;

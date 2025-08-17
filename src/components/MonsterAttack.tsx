import { SetStateAction, useState, Dispatch } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { DisplayAttackOutput } from "./DisplayOutput";
import { Card } from "primereact/card";
import { damageTypes } from "./damageTypes";

const attackTypes = ["Melee Weapon Attack", "Ranged Weapon Attack"];

interface Props {
    recharge: Dispatch<SetStateAction<string>>;
}

function Recharge({ recharge }: Props) {
    const [rechargeOn, setRechargeOn] = useState("6");
    const setRecharge = recharge;

    setRecharge(rechargeOn);

    return (
        <>
            {" "}
            <label className="col-12 mb-2 md:col-2 md:mb-0">Recharge on:</label>
            <div className="col-12 md:col-10">
                <InputText
                    value={rechargeOn}
                    onChange={(e) => setRechargeOn(e.target.value)}
                    className="w-4"
                />
            </div>
        </>
    );
}

function MonsterAttack() {
    const [attackName, setAttackName] = useState("Claw");
    const [hasRecharge, setHasRecharge] = useState(false);
    const [attackType, setAttackType] = useState("Melee Weapon Attack");
    const [toHitBonus, setToHitBonus] = useState<number | null>(3);
    const [reach, setReach] = useState("10");
    const [target, setTarget] = useState("one");
    const [fixedDamage, setFixedDamage] = useState<number | null>(5);
    const [randomDamage, setRandomDamage] = useState("1d6+2");
    const [damageType, setDamageType] = useState("slashing");
    const [recharge, setRecharge] = useState<string>("");

    return (
        <>
            <Card title="Scratch pad">
                <InputTextarea autoResize className="w-full h-5rem" />
            </Card>
            <Card title="Selections:">
                <div className="field grid">
                    <label className="col-12 mb-2 md:col-2 md:mb-0">
                        Attack Name:
                    </label>
                    <div className="col-12 md:col-10">
                        <InputText
                            value={attackName}
                            onChange={(e) => setAttackName(e.target.value)}
                            className="w-4"
                        />
                    </div>
                    <label className="col-12 mb-2 md:col-2 md:mb-0">
                        Has Recharge:
                    </label>
                    <div className="col-12 md:col-10">
                        <Checkbox
                            checked={hasRecharge}
                            onChange={(e) =>
                                setHasRecharge(e.checked ? true : false)
                            }
                            className="w-4"
                        />
                    </div>
                    {hasRecharge ? <Recharge recharge={setRecharge} /> : null}
                    <label className="col-12 mb-2 md:col-2 md:mb-0">
                        Attack Type:
                    </label>
                    <div className="col-12 md:col-10">
                        <Dropdown
                            value={attackType}
                            onChange={(e) => setAttackType(e.value)}
                            onFocus={(e) => e.target.select()}
                            options={attackTypes}
                            editable
                            optionLabel="attack type"
                            placeholder="Select an attack type"
                            className="w-4"
                        />
                    </div>
                    <label className="col-12 mb-2 md:col-2 md:mb-0">
                        To Hit Bonus:
                    </label>
                    <div className="col-12 md:col-10">
                        <InputNumber
                            value={toHitBonus}
                            onChange={(e) => setToHitBonus(e.value)}
                            className="w-4"
                        />
                    </div>
                    <label className="col-12 mb-2 md:col-2 md:mb-0">
                        Reach:
                    </label>
                    <div className="col-12 md:col-10">
                        <InputText
                            value={reach}
                            onChange={(e) => setReach(e.target.value)}
                            className="w-4"
                        />
                    </div>
                    <label className="col-12 mb-2 md:col-2 md:mb-0">
                        Target:
                    </label>
                    <div className="col-12 md:col-10">
                        <InputText
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            className="w-4"
                        />
                    </div>
                    <label className="col-12 mb-2 md:col-2 md:mb-0">
                        Fixed Damage:
                    </label>
                    <div className="col-12 md:col-10">
                        <InputNumber
                            value={fixedDamage}
                            onChange={(e) => setFixedDamage(e.value)}
                            className="w-4"
                        />
                    </div>
                    <label className="col-12 mb-2 md:col-2 md:mb-0">
                        Random Damage:
                    </label>
                    <div className="col-12 md:col-10">
                        <InputText
                            value={randomDamage}
                            onChange={(e) => setRandomDamage(e.target.value)}
                            className="w-4"
                        />
                    </div>
                    <label className="col-12 mb-2 md:col-2 md:mb-0">
                        Damage Type:
                    </label>
                    <div className="col-12 md:col-10">
                        <Dropdown
                            value={damageType}
                            onChange={(e) => setDamageType(e.value)}
                            onFocus={(e) => e.target.select()}
                            options={damageTypes}
                            editable
                            optionLabel="damage type"
                            placeholder="Select a damage type"
                            className="w-4"
                        />
                    </div>
                </div>
            </Card>
            <div className="card">
                <DisplayAttackOutput
                    attackName={attackName}
                    attackType={attackType}
                    toHitBonus={toHitBonus}
                    reach={reach}
                    target={target}
                    fixedDamage={fixedDamage}
                    randomDamage={randomDamage}
                    damageType={damageType}
                    hasRecharge={hasRecharge}
                    recharge={recharge}
                />
            </div>
        </>
    );
}

export default MonsterAttack;

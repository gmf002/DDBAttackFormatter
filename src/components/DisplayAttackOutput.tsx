import { Card } from "primereact/card";

interface props {
    attackName: string;
    attackType: string;
    toHitBonus: number | null;
    reach: string;
    target: string;
    fixedDamage: number | null;
    randomDamage: string;
    damageType: string;
    hasRecharge: boolean;
    recharge: string;
}
export function DisplayAttackOutput({
    attackName,
    attackType,
    toHitBonus,
    reach,
    target,
    fixedDamage,
    randomDamage,
    damageType,
    hasRecharge,
    recharge,
}: props) {
    const rechargeNotation = ` [rollable](Recharge ${recharge});{"diceNotation":"1d6","rollType":"recharge","rollAction":"${attackName}"}[/rollable]`;

    const damageNotation = `[rollable]+${toHitBonus};{"diceNotation":"1d20+${toHitBonus}","rollType":"to hit","rollAction":"${attackName}"}[/rollable] to hit, reach ${reach} ft., ${target} target. Hit: ${fixedDamage} [rollable](${randomDamage});{"diceNotation":"${randomDamage}","rollType":"damage","rollAction":"${attackName}","rollDamageType":"${damageType}"}[/rollable] ${damageType} damage.`;
    return (
        <Card title="Generated Output">
            <span>
                <b>
                    {attackName}
                    {hasRecharge ? rechargeNotation : null}.{" "}
                </b>
                <i>{attackType}: </i>
                <span>{damageNotation}</span>
            </span>
        </Card>
    );
}

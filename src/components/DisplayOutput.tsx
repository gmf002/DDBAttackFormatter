interface props {
    attackName: string;
    attackType: string;
    toHitBonus: number;
    reach: string;
    target: string;
    fixedDamage: number;
    randomDamage: string;
    damageType: string;
}
export function DisplayOutput({attackName, attackType, toHitBonus, reach, target, fixedDamage, randomDamage, damageType}: props) {

    const damageNotation = `[rollable]+${toHitBonus};{"diceNotation":"1d20+${toHitBonus}","rollType":"to hit","rollAction":"${attackName}"}[/rollable] to hit, reach ${reach} ft., ${target} target. Hit: ${fixedDamage} [rollable](${randomDamage});{"diceNotation":"${randomDamage}","rollType":"damage","rollAction":"${attackName}","rollDamageType":"${damageType}"}[/rollable] ${damageType} damage.`;
    return (
    <>
    <span><b>{attackName}. </b><i>{attackType}: </i><span>{damageNotation}</span></span>
    </>
    );
}
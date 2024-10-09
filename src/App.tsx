import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";

import { Dropdown } from "primereact/dropdown";

import "./App.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import { DisplayOutput } from "./components/DisplayOutput";
import { Card } from "primereact/card";

const damageTypes = [
  "acid",
  "bludgeoning",
  "cold",
  "fire",
  "force",
  "lightning",
  "necrotic",
  "piercing",
  "poison",
  "psychic",
  "radiant",
  "slashing",
  "thunder",
];

const attackTypes = ["Melee Weapon Attack", "Ranged Weapon Attack"];

function App() {
  const [attackName, setAttackName] = useState("Claw");
  const [attackType, setAttackType] = useState("Melee Weapon Attack");
  const [toHitBonus, setToHitBonus] = useState<number | null>(3);
  const [reach, setReach] = useState("10");
  const [target, setTarget] = useState("one");
  const [fixedDamage, setFixedDamage] = useState<number | null>(5);
  const [randomDamage, setRandomDamage] = useState("1d6+2");
  const [damageType, setDamageType] = useState("slashing");

  return (
    <>
      <Card title="Scratch pad">
        <InputTextarea autoResize className="w-full h-5rem" />
      </Card>
      <Card title="Selections:">
        <div className="field grid">
          <label className="col-12 mb-2 md:col-2 md:mb-0">Attack Name:</label>
          <div className="col-12 md:col-10">
            <InputText
              value={attackName}
              onChange={(e) => setAttackName(e.target.value)}
              className="w-4"
            />
          </div>
          <label className="col-12 mb-2 md:col-2 md:mb-0">Attack Type:</label>
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
          <label className="col-12 mb-2 md:col-2 md:mb-0">To Hit Bonus:</label>
          <div className="col-12 md:col-10">
            <InputNumber
              value={toHitBonus}
              onChange={(e) => setToHitBonus(e.value)}
              className="w-4"
            />
          </div>
          <label className="col-12 mb-2 md:col-2 md:mb-0">Reach:</label>
          <div className="col-12 md:col-10">
            <InputText
              value={reach}
              onChange={(e) => setReach(e.target.value)}
              className="w-4"
            />
          </div>
          <label className="col-12 mb-2 md:col-2 md:mb-0">Target:</label>
          <div className="col-12 md:col-10">
            <InputText
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-4"
            />
          </div>
          <label className="col-12 mb-2 md:col-2 md:mb-0">Fixed Damage:</label>
          <div className="col-12 md:col-10">
            <InputNumber
              value={fixedDamage}
              onChange={(e) => setFixedDamage(e.value)}
              className="w-4"
            />
          </div>
          <label className="col-12 mb-2 md:col-2 md:mb-0">Random Damage:</label>
          <div className="col-12 md:col-10">
            <InputText
              value={randomDamage}
              onChange={(e) => setRandomDamage(e.target.value)}
              className="w-4"
            />
          </div>
          <label className="col-12 mb-2 md:col-2 md:mb-0">Damage Type:</label>
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
        <DisplayOutput
          attackName={attackName}
          attackType={attackType}
          toHitBonus={toHitBonus}
          reach={reach}
          target={target}
          fixedDamage={fixedDamage}
          randomDamage={randomDamage}
          damageType={damageType}
        />
      </div>
    </>
  );
}

export default App;

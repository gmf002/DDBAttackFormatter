import { useState } from "react";
import "./App.css";
import { DisplayOutput } from "./components/DisplayOutput";

function App() {
  const [attackName, setAttackName] = useState("Claw");
  const [attackType, setAttackType] = useState("Melee Weapon Attack");
  const [toHitBonus, setToHitBonus] = useState(3);
  const [reach, setReach] = useState("10");
  const [target, setTarget] = useState("one");
  const [fixedDamage, setFixedDamage] = useState(5);
  const [randomDamage, setRandomDamage] = useState("1d6+2");
  const [damageType, setDamageType] = useState("slashing");
  //const damageType = "slashing";

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          {" "}
          Vite.dev
        </a>
        <a href="https://react.dev" target="_blank">
          {" "}
          React.dev
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div style={{ display: "block" }}>
          <div>
            <span>
              Attack Name:
              <input
                value={attackName}
                onChange={(e) => setAttackName(e.target.value)}
              />
            </span>
          </div>
          <div>
            <span>
              Attack Type:{" "}
              <input
                value={attackType}
                onChange={(e) => setAttackType(e.target.value)}
              />
            </span>
          </div>
          <div>
            <span>
              To Hit Bonus:{" "}
              <input
                type="number"
                value={toHitBonus}
                onChange={(e) => setToHitBonus(Number.parseInt(e.target.value))}
              />
            </span>
          </div>
          <div>
            <span>Reach: </span>
            <input value={reach} onChange={(e) => setReach(e.target.value)} />
          </div>
          <div>
            <span>Target: </span>
            <input value={target} onChange={(e) => setTarget(e.target.value)} />
          </div>
          <div>
            <span>Fixed Damage: </span>
            <input
              value={fixedDamage}
              onChange={(e) => setFixedDamage(Number.parseInt(e.target.value))}
            />
          </div>
          <div>
            <span>Random Damage: </span>
            <input
              value={randomDamage}
              onChange={(e) => setRandomDamage(e.target.value)}
            />
          </div>
          <div>
            <span>Damage Type: </span>
            <input
              value={damageType}
              onChange={(e) => setDamageType(e.target.value)}
            />
          </div>
        </div>
      </div>
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

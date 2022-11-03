import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/Main/Main.css";

//* for unit conversion
const PI: number = 3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364369259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639;
const h: number = 4.135667696 * Math.pow(10, -15);
const hR: number = 6.582119569 * Math.pow(10, -16);
const c: number = 299792458;
//* for unit conversion

//TODO: Implement unit conversion
//! Do not deploy to firebase until this page is functional

export default function UC() {
  const [value, setValue] = useState(0);
  const [unit, setUnit] = useState("eV");
  const navState = useOutletContext();

  return (
    <div className={navState ? "about open" : "about"}>
      <h3 className="title uc">Unit Converter</h3>
      <form action="" className="unitConverter">
        <label htmlFor="value">Enter a value:</label>

        <div className="wrapper">
          <input type="number" name="value" className="value" />
          <select name="unit" className="unit">
            <option value="eV">eV</option>
            <option value="Hz">Hz</option>
            <option value="lambda">λ</option>
          </select>
        </div>
        <button>Convert</button>
        <p className="valueOutput">
          {value},{unit}
        </p>
      </form>
      <img src="/img/aboutBg.webp" alt="" />
    </div>
  );
}

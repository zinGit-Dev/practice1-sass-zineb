import "../app.scss";
import "./index.scss";
import Button from "./Button";
import Picture from "./Picture";
import zorro from "../assets/zorro2.jpg";

export default function Header() {
  return (
    <div className="header">
      <div>
        <Picture picture={zorro} name={zorro} />
      </div>
      <div className="buttons-div">
        <Button />
        <Button text="About" type="about" />
        <Button text="Doc" type="doc" />
      </div>
    </div>
  );
}

// import { createRoot } from "@wordpress/wp-scripts";
import { createRoot, render } from "@wordpress/element";
import "./style.scss";
import Edit from "./Edits";


export default function HqApp() {
  return <Edit />;
}
const doom = document.getElementById("hq-form-admin");
console.log(doom);
createRoot(doom).render(<HqApp />);

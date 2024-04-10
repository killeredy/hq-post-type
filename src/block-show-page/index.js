import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import save from "./save";
import metadata from "./block.json";

import PagesList from "../pageRender/PageList";
registerBlockType(metadata.name, {
  edit: (props) => {
    console.log(props);
    return <h1>Teste edit</h1>;
  },
  save,
});

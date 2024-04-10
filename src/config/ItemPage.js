import { useState } from "@wordpress/element";
import { Button, SelectControl, TextareaControl } from "@wordpress/components";
import MediaUploader from "./MediaUploader";
import "./style-Item.scss";

export default function ItemPage({
  children,
  index,
  page,
  setPage,
  pageOptions,
  removeItem,
  subPage = true,
}) {
  const [list] = useState();
  const handleSetList = () => {
    let add;
    if (subPage) {
      add = { value: "", label: "selecione" };
    } else {
      add = { value: 0, label: "_pagina Inicial" };
    }
    const newList = [...pageOptions];
    newList.unshift(add);
    return newList;
  };

  const handleSetPage = (value, index, typeInter = true) => {
    const newPage = { ...page };
    newPage[index] = typeInter ? parseInt(value) : value;
    setPage(newPage);
  };

  const handleSetPageTitle = (value) => {
    const newPage = { ...page };
    newPage.page_id = parseInt(value);
    if (value != 0) {
      newPage.title = pageOptions.filter((item) => {
        return item.value == value;
      })[0].label;
    }

    setPage(newPage);
  };

  console.log(page);

  return (
    <>
      <div className="container-config">
        <div className="field w-3">
          <SelectControl
            label={"Pagina"}
            value={page.page_id}
            onChange={(value) => {
              handleSetPageTitle(value);
            }}
            options={handleSetList()}
          />
          {children && <div>{children}</div>}
          <div>
            <label>Edit Titulo</label>
            <br />
            <input
              type="text"
              value={page.title}
              onChange={(e) => handleSetPage(e.target.value, "title", false)}
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="field w-3">
          <TextareaControl
            className=""
            label="Descrição"
            rows={8}
            value={page.desc}
            onChange={(txt) => handleSetPage(txt, "desc", false)}
          />
        </div>
        <div className="field w-4 center">
          <label>Imagem Desktop</label>
          <MediaUploader
            imageId={page.img_d}
            setImg={(img_id) => handleSetPage(img_id, "img_d", true)}
          />
        </div>
        <div className="field w-3 center">
          <label>Imagem Mobile</label>
          <MediaUploader
            imageId={page.img_m}
            setImg={(img_id) => handleSetPage(img_id, "img_m", true)}
          />
        </div>
        <div className="field w-3 center" style={{ justifyContent: "center" }}>
          <button
            className="btn-action danger"
            onClick={() => removeItem(index)}
            style={{ width: "60px", height: "60px" }}
          >
            <span
              class="dashicons dashicons-trash"
              style={{ fontSize: "30px", textAlign: "center" }}
            ></span>
          </button>
        </div>
      </div>
    </>
  );
}

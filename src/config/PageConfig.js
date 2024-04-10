import {
  Panel,
  PanelBody,
  Button,
  NavigableMenu,
  SelectControl,
  ColorPicker,
} from "@wordpress/components";

export default function PageCongig({
  pagesList,
  currentPageId,
  setCurrentPageId,
  configuer,
  setConfiguer,
  handleAddPage,
}) {
  return (
    <>
      <PanelBody title="Pages">
        <NavigableMenu cycle>
          {pagesList.map((btn, index) => {
            return (
              <Button
                onClick={() => setCurrentPageId(index)}
                className={`btn-add-pg ${
                  index == currentPageId ? "active" : ""
                }`}
              >
                {index + 1}
              </Button>
            );
          })}
          <Button onClick={(e) => handleAddPage()}>add</Button>
        </NavigableMenu>
        <Panel>
          <div style={{ padding: "0 50px" }}>
            <SelectControl
              label={"Size"}
              value={configuer.page_size}
              onChange={(e) => setConfiguer({ ...configuer, page_size: e })}
              options={[
                { label: "A4", value: "1/1.414" },
                { label: "letter", value: "8.5/11" },
              ]}
            />
            <ColorPicker
              value={configuer.bg_color}
              onChange={(e) => setConfiguer({ ...configuer, bg_color: e })}
            />
          </div>
        </Panel>
      </PanelBody>
    </>
  );
}

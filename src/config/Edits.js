import { useState, useEffect } from "@wordpress/element";
import { configDb, PagesOb, boxOb } from "./object";
import { Panel, PanelBody, Button } from "@wordpress/components";
import BoxesEdit from "./BoxesEdit";
import PageConfig from "./PageConfig";
// import { creatNewPage, Pages, Box } from "../pageRender/PageList";
import { creatNewPage, Pages } from "../pageRender/PageList";

export default function Edit() {
  const { pgs, config } = data;
  const [pagesList, setPagesList] = useState([]);
  const [configuer, setConfiguer] = useState(config);
  const [currentPageId, setCurrentPageId] = useState(0);
  const [currentBoxId, setCurrentBoxId] = useState(0);

  const handleSetBox = ([e, index], pgIndex, boxIndex) => {
    const newPageList = [...pagesList];
    newPageList[pgIndex].boxList[boxIndex][index] = e;
    setPagesList(newPageList);
  };

  useEffect(() => {
    if (pgs == undefined || pgs == "") {
      const newPage = creatNewPage(0);
      setPagesList([newPage]);
    } else {
      setPagesList(pgs);
    }

    if (config != undefined && config != "") {
      setConfiguer(config);
    } else {
      setConfiguer(new configDb());
    }

    setCurrentBoxId(0);
  }, []);

  const handleAddPage = () => {
    const newPgsList = [...pagesList];
    const newId = pagesList.length;
    newPgsList.push(creatNewPage(newId));
    setCurrentPageId(newId);
    setPagesList(newPgsList);
  };

  const handleRemovePage = (id) => {
    const newPgsList1 = pagesList.filter((pg) => {
      return pg.id != currentPageId;
    });

    const newPgsList2 = newPgsList1.map((pg, index) => {
      const newPg = new PagesOb(index);
      newPg.boxList = pg.boxList;

      return newPg;
    });

    let newCurrentPageId = currentPageId;

    if (newPgsList2.length == 0) {
      const newPage = creatNewPage(0);
      setPagesList([newPage]);
      setCurrentPageId(0);
      return;
    }

    if (1 <= newCurrentPageId) {
      newCurrentPageId -= 1;
    } else {
      newCurrentPageId = 1;
    }

    setCurrentPageId(newCurrentPageId);
    setPagesList(newPgsList2);
  };

  const removeBox = () => {
    const newPagList = [...pagesList];
    newPagList[currentPageId].boxList = pagesList[currentPageId].boxList.filter(
      (box) => {
        return box.id != currentBoxId;
      }
    );
    setPagesList(newPagList);
  };

  const handleAddBlock = () => {
    const newPagList = [...pagesList];
    const id = newPagList[currentPageId].boxList.length;
    newPagList[currentPageId].boxList.push(new boxOb(id));
    setPagesList(newPagList);
    setCurrentBoxId(id);
  };

  const handleSalve = () => {
    const request = {
      action: "hq_save_adm",
      pages: JSON.stringify(pagesList),
      config: JSON.stringify(configuer),
    };

    fetch(data.ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(request).toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let txt = "Save Success!";
        if (response.success) {
          txt = "Error to save!";
        }
        alert(txt);
        return;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <>
      <div className="form-hq-content">
        <div className="pagesList-container">
          {pagesList
            .filter((pag, index) => {
              return pag.id == currentPageId;
            })
            .map((page) => {
              return (
                <Pages
                  boxList={page.boxList}
                  config={configuer}
                  setBox={(e) => setCurrentBoxId(e)}
                  currentBoxId={currentBoxId}
                  removePage={() => handleRemovePage()}
                />
              );
            })}
        </div>
        <Panel>
          <Panel header="Config">
            <button
              className="btn-action success"
              onClick={handleSalve}
              style={{
                margin: "auto",
                display: "flex",
                padding: "0.2rem 6rem",
              }}
            >
              Salve
            </button>
          </Panel>
          <div style={{ height: "calc(100vh - 200px)", overflowY: "scroll" }}>
            <PageConfig
              pagesList={pagesList}
              currentPageId={currentPageId}
              setConfiguer={(e) => setConfiguer(e)}
              setCurrentPageId={(e) => setCurrentPageId(e)}
              configuer={configuer}
              handleSalve={(e) => handleSalve(e)}
              handleAddPage={(e) => handleAddPage(e)}
            />
            <Panel header="Page Content">
              <>
                {pagesList[currentPageId]?.boxList.map((bx, bxIndex) => {
                  return (
                    <>
                      {bxIndex == currentBoxId && (
                        <BoxesEdit
                          box={bx}
                          setBox={(e) =>
                            handleSetBox(e, currentPageId, currentBoxId)
                          }
                          remove={() => removeBox()}
                        />
                      )}
                    </>
                  );
                })}
                <PanelBody>
                  <Button
                    className="btn-success"
                    onClick={() => handleAddBlock()}
                  >
                    Add Box
                  </Button>
                </PanelBody>
              </>
            </Panel>
          </div>
        </Panel>
      </div>
    </>
  );
}

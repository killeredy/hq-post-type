import { useState, useEffect } from "@wordpress/element";
import { Button } from "@wordpress/components";

export function Pages({
  boxList,
  setBox,
  currentBoxId,
  config,
  removePage,
  editor = true,
}) {
  return (
    <>
      <div
        className="page-content"
        style={{
          backgroundColor: config.bg_color,
          aspectRatio: config.page_size,
        }}
      >
        {boxList.map((box, bIndex) => {
          return (
            <Box
              box={box}
              onClick={(e) => setBox(bIndex)}
              showBorder={currentBoxId == bIndex}
            />
          );
        })}
      </div>
      {editor && (
        <Button onClick={() => removePage()} className="btn-remove">
          <span class="dashicons dashicons-trash"></span>
        </Button>
      )}
    </>
  );
}

export function Box({ box, onClick, showBorder }) {
  const { pages } = data;
  const [imgSrc, setImgSrc] = useState();

  useEffect(() => {
    const img = pages.filter((pg) => {
      return pg.ID == box.postId;
    })[0];
    if (img) {
      setImgSrc(img["thumbnail"]);
    } else {
      setImgSrc(null);
    }
  });

  return (
    <div
      className="box-content"
      style={{
        gridColumn: `span ${box.width}`,
        gridRow: `span ${box.height}`,
        color: "white",
        fontSize: "5rem",
        border: showBorder ? "3px solid green" : "2px solid black",
      }}
      onClick={(e) => onClick()}
    >
      {imgSrc ? (
        <div
          className="show-img"
          style={{ backgroundImage: `url("${imgSrc}")` }}
        ></div>
      ) : (
        "+"
      )}
    </div>
  );
}

export const creatNewPage = (id) => {
  const newPage = new PagesOb(id);
  for (let i = 0; i < 6; i++) {
    newPage.boxList.push(new boxOb(i));
  }
  return newPage;
};

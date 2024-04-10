import { useState, useEffect } from "@wordpress/element";
import { Button } from "@wordpress/components";
import preview from "./img/preview.png";

const MediaUploader = ({ imageId, setImg }) => {
  const [imageUrl, setImageUrl] = useState();
  const { url } = data;
  const service = `${url}/wp-json/wp/v2/media/${imageId}`;

  useEffect(() => {
    // // Fetch image data from the WordPress REST API
    if (imageId) {
      fetch(service)
        .then((response) => response.json())
        .then((data) => {
          setImageUrl(data.source_url);
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        });
    }
  }, [imageId]);

  const handleOpenMediaUploader = () => {
    const mediaUploader = wp.media({
      title: "Choose Image",
      button: { text: "Select" },
      multiple: false,
    });

    mediaUploader.on("select", () => {
      const attachment = mediaUploader
        .state()
        .get("selection")
        .first()
        .toJSON();
      setImageUrl(attachment.url);
      console.log(attachment);
      setImg(attachment.id);
    });

    mediaUploader.open();
  };

  return (
    <div style={{ position: "relative" }}>
      <Button onClick={handleOpenMediaUploader} className="btn-action  btn-img">
        <span class="dashicons dashicons-edit"></span>
        {imageUrl ? "Update Image" : "Select Image"}
      </Button>
      <input type="hidden" value={imageUrl} readOnly />
      <img src={imageUrl ? imageUrl : preview} className="preview-img" />
    </div>
  );
};

export default MediaUploader;

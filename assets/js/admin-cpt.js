jQuery(document).ready(function ($) {
  let mediaUploader;
  $("#btn-galeia").on("click", function (e) {
    e.preventDefault();
    console.log("teste");
    setupUploadMedia(true);
  });

  function setupUploadMedia(multiple) {
    mediaUploader = wp.media.frames.file_frame = wp.media({
      title: "Upload Image(s)",
      button: {
        text: "UPLOAD",
      },
      multiple: multiple,
    });

    mediaUploader.on("select", function () {
      var attachment = mediaUploader.state().get("selection").toJSON();
      var img_show = $("#my-galery");
      for (let i in attachment) {
        console.log(attachment[i]);
        var url = "url('" + attachment[i].url + "')";
        var div = $('<div class="img-prev-content"></div>');
        var img = $('<img class="img-prev" src="' + attachment[i].url + '"/>');
        var btnLixo = $(
          '<img src="' +
            apagarBtn +
            '" class="btn trash" onclick="this.closest(\'.img-prev-content\').remove(); return false" /> '
        );
        var btnSortle = $(
          '<img src="' + apagarBtn + '" class="btn sortle" /> '
        );
        var input = $(
          '<input type="hidden" value="' +
            attachment[i].id +
            '"  name="linha_hq_galeria[]" />'
        );
        $(div).append(img);
        $(div).append(btnLixo);
        $(div).append(btnSortle);
        $(div).append(input);
        $(img_show).append(div);
      }
    });

    mediaUploader.open();
  }

  $("#my-galery").sortable();
});

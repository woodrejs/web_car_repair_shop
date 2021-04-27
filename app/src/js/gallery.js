const gridGallery = document.getElementById("gridGallery");

export const displayImages = (arr) => {
  const data = arr.data;
  data.forEach(({ plik }) => {
    const { height, width, size, url } = plik;
    if (gridGallery) {
      gridGallery.innerHTML += `<a href="#" class="lightbox-link w-inline-block w-lightbox">
                              <div class="div-block-17 _18" style='background-image: url(${url})'></div>
                              <script type="application/json" class="w-json">{
                              "items": [
                              {
                              "type": "image",
                              "_id": "603de420597ccbf3a774472c",
                              "fileName": "603de420597ccbf3a774472c_about_img.jpg",
                              "origFileName": "about_img.jpg",
                              "width": ${width},
                              "height": ${height},
                              "fileSize": ${size},
                              "url": "${url}"
                              }
                              ],
                              "group": "gallery"
                              }</script>
                              </a>`;
    }
  });
};

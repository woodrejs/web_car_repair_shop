const offersBox = document.getElementById("offersBox");

export const displayOffers = async (arr) => {
  const offers = arr.data;

  offers.forEach((offer, index) => {
    const { cena, nazwa } = offer;
    if (offersBox) {
      offersBox.innerHTML += `<div class="price_list_item">
                                <h5 class="price_number">${index + 1}</h5>
                                <p class="price_list_item_text">${nazwa}</p>
                                <h5 class="red">${cena} pln</h5>
                              </div>`;
    }
  });
};

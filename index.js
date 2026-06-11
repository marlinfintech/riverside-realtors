
document.addEventListener("DOMContentLoaded", () => {

  function setupViewMore(containerClass, itemClass, buttonClass, showText, hideText) {

    document.querySelectorAll(containerClass).forEach(card => {

      const items = card.querySelectorAll(itemClass);
      const btn = card.querySelector(buttonClass);

      if (!btn || items.length === 0) return;

      // Initially hide items after the first six
      items.forEach((item, i) => {
        if (i >= 6) {
          item.classList.add("hidden");
        }
      });

      let expanded = false;

      btn.addEventListener("click", () => {

        expanded = !expanded;

        items.forEach((item, i) => {
          if (i >= 6) {
            item.classList.toggle("hidden", !expanded);
          }
        });

        btn.textContent = expanded
          ? hideText
          : showText;

      });

    });

  }

  // LAND SECTION
  setupViewMore(
    ".category-card-land",
    ".item-card-land",
    ".view-button-land",
    "More Land Deals",
    "Show Less"
  );

  // PROPERTY SECTION
  setupViewMore(
    ".category-card-property",
    ".item-card-property",
    ".view-button-property",
    "More Property Deals",
    "Show Less"
  );

});
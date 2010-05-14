Screw.Unit(function(screw) {
  with (screw) {
    describe("ShoppingCart", function() {
      var content;
      before(function() {
        content = $("#screw_unit_content");
        content.html(
          '<div id="shopping-cart">' +
          '  <div class="container"></div>' +
          '  <div class="total"></div>' +
          '</div>'
        )
        Pets.init("#screw_unit_content");
        ShoppingCart.init(".shopping-cart-link");
      });

      describe("$(.shopping-cart-link).click", function() {
        it("adds the pet name and price to the shopping cart div", function() {
          expect(Pets.all[0].all[0].name).to(equal, "Sideways Glance");
          expect(Pets.all[0].all[0].price).to(equal, 55);
          expect(Pets.all[0].all[1].name).to(equal, "Backend");
          expect(Pets.all[0].all[1].price).to(equal, 10);

          $($(".shopping-cart-link")[0]).click()
          expect($("#shopping-cart").text()).to(match, "Sideways Glance: $55");
          expect($("#shopping-cart").text()).to(match, "Total: $55");

          $($(".shopping-cart-link")[1]).click()
          expect($("#shopping-cart").text()).to(match, "Backend: $10");
          expect($("#shopping-cart").text()).to(match, "Total: $65");
        });
      });
    })
  }
});

Screw.Unit(function(screw) {
  with (screw) {
    describe("Pets", function() {
      var content;
      before(function() {
        content = $("#screw_unit_content");
      });

      describe(".init", function() {
        stubMethod("$", "ready")
        stubMethod("Pets", "render")

        it("calls Pets.render on ready", function() {
          $.ready = function(fn) {
            fn();
          }
          var renderedArgs = null;
          Pets.render = function() {
            renderedArgs = arguments;
          }

          Pets.init("#screw_unit_content");
          expect(renderedArgs).to(equal, ["#screw_unit_content"]);
        });
      });

      describe(".render", function() {
        before(function() {
          Pets.render("#screw_unit_content");
        });
        
        it("generates a div for each pet group", function() {
          expect(
            _(content.find(".pet-group h2")).map(function(h2Element) {
              return $(h2Element).text();
            })).to(equal, [
            "Cats",
            "Dogs",
            "Hamsters",
            "Chickens"
          ]);
        });

        it("generates the name and picture for each pet in each pet group", function() {
          expect(
            _(content.find("#Cats img")).map(function(imgElement) {
              return $(imgElement).attr("src")
            })
          ).to(equal, [
            "/images/cat-1.jpg",
            "/images/cat-2.jpg",
            "/images/cat-3.jpg",
            "/images/cat-4.jpg",
            "/images/cat-5.jpg",
          ]);
        });
      });
    });
  }
})

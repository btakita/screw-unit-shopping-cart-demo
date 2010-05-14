Screw.Specifications.stubMethod = function(objectName, methodName) {
  var originalFn, object;
  with (this) {
    before(function() {
      object = eval(objectName.toString());
      originalFn = object[methodName];
    });

    after(function() {
      if (originalFn) object[methodName] = originalFn;
    });
  }
};

Screw.Unit(function(screw) {
  with (screw) {
    before(function() {
      $("#screw_unit_content").html("")
    });
    after(function() {
      $("#screw_unit_content").html("")
    });
  }
});
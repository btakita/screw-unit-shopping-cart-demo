var ShoppingCart = {
  init: function(linksSelector) {
    $(linksSelector).click(function() {
      var name = $(this).closest(".pet").find(".name")
      var price = $(this).closest(".pet").find(".price")
      $('#shopping-cart .container').append(
        $("<div>").text(name.text() + ": " + price.text())
      )
      var total = _($('#shopping-cart .container div')).inject(0, function(sum, item) {
        return sum += parseInt($(item).text().split(":")[1].replace("$", ""))
      })
      $('#shopping-cart .total').text("Total: $" + total)
    })
  }
}
(function(window) {
  window.Pets = {};

  Pets.init = function(parentSelector) {
    $(function() {
      Pets.render(parentSelector);
    })
  }

  Pets.render = function render(parentSelector) {
    var parent = $(parentSelector);
    _(Pets.all).each(function(petGroup) {
      var b = new XmlBuilder({binding: this});
      with (b) {
        div({id: petGroup.name, 'class': "pet-group"}, function() {
          h2(petGroup.name);
          _(petGroup.all).each(function(pet) {
            div({id: petGroup.name + "-" + pet.id, 'class': 'pet'}, function() {
              div({'class': "image-container"}, function() {
                img({src: pet.img})
              })
              div(pet.name, {'class': "name"})
              div("$" + pet.price, {'class': "price"})
            })
          })
        })
      }
      parent.append($(b.toString()))
    })
  }

  Pets.all = [
    {
      name: "Cats",
      all: [
        {
          id: 1,
          name: "Sideways Glance",
          img: "/images/cat-1.jpg",
          price: 55
        },
        {
          id: 2,
          name: "Backend",
          img: "/images/cat-2.jpg",
          price: 10
        },
        {
          id: 3,
          name: "Shy guy",
          img: "/images/cat-3.jpg",
          price: 25
        },
        {
          id: 4,
          name: "Dark and cute",
          img: "/images/cat-4.jpg",
          price: 40
        },
        {
          id: 5,
          name: "Rock God",
          img: "/images/cat-5.jpg",
          price: 16
        }
      ]
    },

    {
      name: "Dogs",
      all: [
        {
          id: 1,
          name: "Alert",
          img: "/images/dog-1.jpg",
          price: 99
        },
        {
          id: 2,
          name: "Full Package",
          img: "/images/dog-2.jpg",
          price: 23
        },
        {
          id: 3,
          name: "Toy",
          img: "/images/dog-3.jpg",
          price: 3
        },
        {
          id: 4,
          name: "Rough & Tough",
          img: "/images/dog-4.jpg",
          price: 56
        },
        {
          id: 5,
          name: "Tired",
          img: "/images/dog-5.jpg",
          price: 77
        }
      ]
    },

    {
      name: "Hamsters",
      all: [
        {
          id: 1,
          name: "Hercules",
          img: "/images/hamster-1.jpg",
          price: 30
        },
        {
          id: 2,
          name: "Snowflake",
          img: "/images/hamster-2.jpg",
          price: 32
        },
        {
          id: 3,
          name: "Pear",
          img: "/images/hamster-3.jpg",
          price: 12
        },
        {
          id: 4,
          name: "Best Buds",
          img: "/images/hamster-4.jpg",
          price: 56
        },
        {
          id: 5,
          name: "Jazz Trio",
          img: "/images/hamster-5.jpg",
          price: 78
        }
      ]
    },

    {
      name: "Chickens",
      all: [
        {
          id: 1,
          name: "Babies",
          img: "/images/chicken-1.jpg",
          price: 50
        },
        {
          id: 2,
          name: "Connesour",
          img: "/images/chicken-2.jpg",
          price: 89
        },
        {
          id: 3,
          name: "Mohawk",
          img: "/images/chicken-3.jpg",
          price: 73
        },
        {
          id: 4,
          name: "Field Chicken",
          img: "/images/chicken-4.jpg",
          price: 34
        },
        {
          id: 5,
          name: "Back Room Dealer",
          img: "/images/chicken-5.jpg",
          price: 53
        }
      ]
    }
  ];
})(window);

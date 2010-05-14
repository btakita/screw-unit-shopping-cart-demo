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
          name: "Sideways Glance",
          img: "/images/cat-3.jpg",
          price: 55
        },
        {
          id: 4,
          name: "Sideways Glance",
          img: "/images/cat-4.jpg",
          price: 55
        },
        {
          id: 5,
          name: "Sideways Glance",
          img: "/images/cat-5.jpg",
          price: 55
        }
      ]
    },

    {
      name: "Dogs",
      all: [
        {
          id: 1,
          name: "Sideways Glance",
          img: "/images/dog-1.jpg",
          price: 55
        },
        {
          id: 2,
          name: "Sideways Glance",
          img: "/images/dog-2.jpg",
          price: 55
        },
        {
          id: 3,
          name: "Sideways Glance",
          img: "/images/dog-3.jpg",
          price: 55
        },
        {
          id: 4,
          name: "Sideways Glance",
          img: "/images/dog-4.jpg",
          price: 55
        },
        {
          id: 5,
          name: "Sideways Glance",
          img: "/images/dog-5.jpg",
          price: 55
        }
      ]
    },

    {
      name: "Hamsters",
      all: [
        {
          id: 1,
          name: "Sideways Glance",
          img: "/images/hamster-1.jpg",
          price: 55
        },
        {
          id: 2,
          name: "Sideways Glance",
          img: "/images/hamster-2.jpg",
          price: 55
        },
        {
          id: 3,
          name: "Sideways Glance",
          img: "/images/hamster-3.jpg",
          price: 55
        },
        {
          id: 4,
          name: "Sideways Glance",
          img: "/images/hamster-4.jpg",
          price: 55
        },
        {
          id: 5,
          name: "Sideways Glance",
          img: "/images/hamster-5.jpg",
          price: 55
        }
      ]
    },

    {
      name: "Chickens",
      all: [
        {
          id: 1,
          name: "Sideways Glance",
          img: "/images/chicken-1.jpg",
          price: 55
        },
        {
          id: 2,
          name: "Sideways Glance",
          img: "/images/chicken-2.jpg",
          price: 55
        },
        {
          id: 3,
          name: "Sideways Glance",
          img: "/images/chicken-3.jpg",
          price: 55
        },
        {
          id: 4,
          name: "Sideways Glance",
          img: "/images/chicken-4.jpg",
          price: 55
        },
        {
          id: 5,
          name: "Sideways Glance",
          img: "/images/chicken-5.jpg",
          price: 55
        }
      ]
    }
  ];
})(window);

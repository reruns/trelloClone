Trello.Collections.Cards = Backbone.Collection.extend({
  model: Trello.Models.Card,

  url: '/api/cards',

  initialize: function(models, options) {
    this.list = options.list
  },

  comparator: function(card) {
    return card.get('ord');
  }
})

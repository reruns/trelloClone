Trello.Models.List = Backbone.Model.extend({
  urlRoot: '/api/lists',

  cards: function() {
    if (!this._cards) {
      this._cards = new Trello.Collections.Cards([], {list: this});
    }

    return this._cards;
  },

  parse: function(response) {
    var that = this;
    if (response.cards) {
      that.cards().set(response.cards, {parse: true});
      delete response.cards;
    }

    return response;
  }
})

Trello.Collections.Lists = Backbone.Collection.extend({
  model: Trello.Models.List,

  url: '/api/lists',

  initialize: function(models, options) {
    this.board = options.board
  },

  comparator: function(list) {
    return list.get('ord');
  }
})

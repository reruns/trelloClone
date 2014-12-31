Trello.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  lists: function() {
    if (!this._lists) {
      this._lists = new Trello.Collections.Lists([], {board: this});
    }

    return this._lists;
  },

  parse: function(response) {
    var that = this;
    if (response.lists) {
      that.lists().set(response.lists, {parse: true});
      delete response.lists;
    }

    return response;
  }
});
Trello.Views.BoardsListItem = Backbone.View.extend({
  tagName: "li",

  template: JST["board_list_item"],

  render: function() {
    var content = this.template({ board: this.model })
    this.$el.append(content);
    return this;
  },

  events: {
    'click button.really':'deleteBoard'
  },

  deleteBoard: function(event) {
    debugger;
    event.preventDefault();
    this.model.destroy();
    this.remove();
  }
})

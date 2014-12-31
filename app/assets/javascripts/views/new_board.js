Trello.Views.NewBoard = Backbone.View.extend({
  template: JST["new_board"],
  tagName: 'form',

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  events: {
    'click .create-board':'createBoard'
  },

  createBoard: function(event) {
    event.preventDefault();
    var formData = this.$el.serializeJSON().board;
    var board = new Trello.Models.Board();
    board.save(formData,{
      success: function() {
        Trello.boards.add(board);
        this.remove();
        Backbone.history.navigate('/boards/'+board.id)
    }.bind(this)})
  }
});

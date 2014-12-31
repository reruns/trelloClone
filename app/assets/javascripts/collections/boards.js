Trello.Collections.Boards = Backbone.Collection.extend({
  url: "/api/boards",
  model: Trello.Models.Board,

  getOrFetch: function(id) {
    var board = this.get(id);
    var that = this;

    if (board) {
      board.fetch()
    } else {
      board = new Trello.Models.Board({id: id});
      board.fetch({success: function(){
        that.add(board);
      }})
    }
    return board;
  }

})

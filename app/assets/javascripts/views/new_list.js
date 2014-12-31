Trello.Views.NewList = Backbone.View.extend({
  template: JST["new_list"],
  tagName: 'form',

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  events: {
    'click .create-list':'createList'
  },

  createList: function(event) {
    event.preventDefault();
    var formData = this.$el.serializeJSON().list;
    var list = new Trello.Models.List();
    list.set('board_id', this.model.id)
    list.save(formData,{
      success: function() {
        this.model.lists().add(list);
        this.remove();
      }.bind(this)})
    }
  });

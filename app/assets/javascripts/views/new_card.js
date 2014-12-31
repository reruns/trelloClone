Trello.Views.NewCard = Backbone.View.extend({
  template: JST["new_card"],
  tagName: 'form',

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  events: {
    'click .create-card':'createCard'
  },

  createCard: function(event) {
    event.preventDefault();
    var formData = this.$el.serializeJSON().card;
    var card = new Trello.Models.Card();
    card.set('list_id', this.model.id)
    card.save(formData,{
      success: function() {
        this.model.cards().add(card);
        this.remove();
      }.bind(this)})
    }
  });

// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td class="artists">(<%= artist %>)</td><td class="titles"><%= title %></td>'),
  events: {
    'click': function() {
      this.model.dequeue();
    }
  },
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});

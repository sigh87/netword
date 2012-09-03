$(function(){
    var Header = Backbone.Model.extend({

        // Default attributes for the todo item.
        defaults: function() {
            return {
                title: ''
            };
        },

        initialize: function() {
          if (!this.get("title")) {
            this.set({"title": this.defaults().title});
          }
        }
    });
    
    var HeaderView = Backbone.View.extend({
        el: $('#headerBox'),
        
        template: _.template( $('#header_template').html() ),
        
        initialize: function(){
            this.model.on('change', this.render, this);
            this.model.on('destroy', this.remove, this);
        },
        
        render: function(){
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }
    });
    
    //var siteHeader = new Header({title: lang.siteTitle});
    var siteHeader = new Header({title: ''});
    headerView = new HeaderView({model: siteHeader});
    headerView.render();
})

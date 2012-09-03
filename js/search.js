$(function(){
    var Search = Backbone.Model.extend({

        // Default attributes for the todo item.
        defaults: function() {
            return {
                title: ''
            };
        },

        initialize: function() {
        }
    });
    
    var SearchView = Backbone.View.extend({
        el: $('#searchBox'),
        
        template: _.template( $('#search_template').html() ),
        
        initialize: function(){
            this.model.on('change', this.render, this);
            this.model.on('destroy', this.remove, this);
        },
        
        render: function(){
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }
    });
    
    var search = new Search({title: lang.menuSearch});
    searchView = new SearchView({model: search});
    searchView.render();
    $('#searchBox .search').focus(function(){
        $(this).val('');
    });
})

$(function(){
    var NetwordList = Backbone.Model.extend({
    
        // Default attributes for the todo item.
        defaults: function() {
            return {
                word  : '',
                title_meaning : lang.networdList_titleMeaning,
                meaning  : lang.networdList_missingMeaning,
                title_example : lang.networdList_titleExample,
                example  : lang.networdList_missingExample
            };
        },

        initialize: function() {
            if (!this.get("meaning")) {
                this.set({"meaning": this.defaults().meaning});
            }
            if (!this.get("example")) {
                this.set({"example": this.defaults().example});
            }
        }
    });
    
    var NetwordListView = Backbone.View.extend({
        el: $('#networdListBox'),
        
        template: _.template($('#networdList_template').html()),
        
        events:{
        },
        
        initialize: function(){
        },
        
        render: function(){
            console.log(this.model.toJSON());
            this.$el.prepend( this.template( this.model.toJSON() ) );
            return this;
        }
    });
    
    
    var nwl1 = new NetwordList({
        word  : 'TEST',
        meaning : '',
        example : ''
    });
    var nwl2 = new NetwordList({
        word  : 'TEST2',
        meaning : 'Second test',
        example : 'This is TEST2'
    });
    var networdListView = new NetwordListView({model: nwl1});
    networdListView.render();
    networdListView.model = nwl2;
    networdListView.render();
    
    $('#networdListBox .more').val(lang.showMore);
    
});
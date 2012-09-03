$(function(){
    var MenuBtn = Backbone.Model.extend({
    
        // Default attributes for the todo item.
        defaults: function() {
            return {
                btn_id  : '',
                btn_sort: 0,
                btn_text: '',
            };
        },

        initialize: function() {
        }
    });
    
    var MenuBtnView = Backbone.View.extend({
        el: $('#menuBox'),
        
        template: _.template($('#menuBtn_template').html()),
        
        events:{
        },
        
        initialize: function(){
        },
        
        render: function(){
            this.$el.prepend( this.template( this.model.toJSON() ) );
            return this;
        }
    });
    
    
    var menuHome = new MenuBtn({
        btn_id  : 'menuHome',
        btn_sort: 1,
        btn_text: lang.menuHome
    });
    var menuAdd = new MenuBtn({
        btn_id  : 'menuAdd',
        btn_sort: 2,
        btn_text: lang.menuAdd
    });
    var menuAboutUs = new MenuBtn({
        btn_id  : 'menuAboutUs',
        btn_sort: 3,
        btn_text: lang.menuAboutUs
    });
    var menuSearch = new MenuBtn({
        btn_id  : 'menuSearch',
        btn_sort: 4,
        btn_text: lang.menuSearch
    });
    var menuSearchBtnView = new MenuBtnView({model: menuSearch});
    menuSearchBtnView.render();
    var menuAboutUsBtnView = new MenuBtnView({model: menuAboutUs});
    menuAboutUsBtnView.render();
    var menuAddBtnView = new MenuBtnView({model: menuAdd});
    menuAddBtnView.render();
    var menuHomeBtnView = new MenuBtnView({model: menuHome});
    menuHomeBtnView.render();
    
    $('#menuSearch').click(function(){
        $('#searchBox').slideToggle();
    });
    $('#menuHome').addClass('activeMenuBtn');
});
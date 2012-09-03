$(function(){
    var SystemAlertView = Backbone.View.extend({
        el: $('#systemAlertBox'),
        
        template: _.template($('#systemAlert_template').html()),
        
        events:{
            'click .toggleTrigger' : 'toggleDisplaySystemAlertBox',
            'click .systemAlertMsgBg'      : 'hideSystemAlertBox'
        },
        
        initialize: function(){
            this.$el.html( this.template() );
            this.msgBox = this.$('#systemAlertMsgBox');
            this.msg = this.$('.systemAlertMsg').html();
        },
        
        render: function(){
        },
        
        //custom functions
        toggleDisplaySystemAlertBox: function(){
            console.log("initialize");
            this.msgBox.toggleClass('displayNone');
        },
        
        hideSystemAlertBox: function(){
            this.msgBox.fadeOut('1000').addClass('displayNone');
        }
    });
    
    systemAlertView = new SystemAlertView;

})

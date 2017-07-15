define(['myApp', 

        // Layouts
        'layouts/myAppMainLayout'

], function(MyApp, MyLayout){

  var app = new MyApp(),
      layout = new MyLayout();

  app.start();

});

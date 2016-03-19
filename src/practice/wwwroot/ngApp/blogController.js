var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var BlogController = (function () {
            function BlogController(blogUtilities) {
                this.blogUtilities = blogUtilities;
                // ^ bring in the blogUtilities tool box
                // then use the getBlog() tool with in the blogUtilities to add a single blog to this.blog
                this.blog = this.blogUtilities.getBlog();
                //this.blog = {
                //    title: "Learning ASP.NET",
                //    message: "blah blah blah it was super hard but it is also super awesome"
                //}
            }
            return BlogController;
        }());
        Controllers.BlogController = BlogController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//////////////////////blogService.ts////////////////////////////////////////////
var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var BlogService = (function () {
            function BlogService() {
            }
            BlogService.prototype.getBlog = function () {
                // pretend this is coming from the server side
                var singleBlog = {
                    title: "Learning ASP.NET",
                    message: "blah blah blah it was super hard but it is also super awesome"
                };
                return singleBlog;
            };
            return BlogService;
        }());
        Services.BlogService = BlogService;
        angular.module("MyApp").service("blogUtilities", BlogService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=blogController.js.map
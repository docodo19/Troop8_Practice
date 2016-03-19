namespace MyApp.Controllers {

    export class BlogController {
        public blog;

        constructor(private blogUtilities:MyApp.Services.BlogService) {
            // ^ bring in the blogUtilities tool box
            // then use the getBlog() tool with in the blogUtilities to add a single blog to this.blog
            this.blog = this.blogUtilities.getBlog();

            //this.blog = {
            //    title: "Learning ASP.NET",
            //    message: "blah blah blah it was super hard but it is also super awesome"
            //}

        }
    }

}


//////////////////////blogService.ts////////////////////////////////////////////

namespace MyApp.Services {

    export class BlogService {

        getBlog() {
            // pretend this is coming from the server side
            let singleBlog = {
                title: "Learning ASP.NET",
                message: "blah blah blah it was super hard but it is also super awesome"
            }
            return singleBlog;
        }
    }

    angular.module("MyApp").service("blogUtilities", BlogService);
}


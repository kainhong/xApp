using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using xApp.Entity;


namespace xApp.Web.Controllers
{
    public class ApplicationController : ApiController
    {
        public IEnumerable<Application> Get()
        {
            return new Services.ApplicationService().GetApplications();
        }

    }
}

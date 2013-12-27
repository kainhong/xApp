using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using xApp.Web.ViewModel;
using xApp.Web.Models;

namespace xApp.Web.Controllers
{
    public class ApplicationController : ApiController
    {
        public IEnumerable<ViewApplication> Get()
        {
            using (var content = new xAppContext())
            {
                var items = content.Applications.ToArray();

                return items.Select(a => new ViewApplication()
                {
                    Code = a.Code,
                    Name = a.Name,
                    Status = a.Status
                });
            }
        }

    }
}

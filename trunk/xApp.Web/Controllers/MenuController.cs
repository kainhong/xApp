using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using xApp.Entity;
 

namespace xApp.Web
{
    public class MenuController : ApiController
    {
        public IEnumerable<Menu> Get()
        {
            return Get(string.Empty);
        }

        public IEnumerable<Menu> Get(string app)
        {
            return new Services.ApplicationService().GetMenus(app);
        }
    }
}

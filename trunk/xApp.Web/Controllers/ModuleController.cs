using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using xApp.Web.Models;

namespace xApp.Web.Controllers
{
    public class ModuleController : ApiController
    {
        // GET api/module
        public IEnumerable<Models.Module> Get()
        {
            using (var content = new xAppContext())
            {
                return content.Modules.OrderBy(m => m.Name).OrderBy(m => m.Application);
            }
        }

        // GET api/module/5
        public Module Get(int id)
        {
            using (var content = new xAppContext())
            {
                return content.Modules.FirstOrDefault(m => m.Id == id);
            }
        }

        // POST api/module
        public Module Post([FromBody]Module value)
        {
            using (var content = new xAppContext())
            {
                var set = content.CreateObjectSet<Module>();
                set.Attach(value);
                content.SaveChanges();
                return value;
            }
        }

        // PUT api/module/5
        public void Put(int id, [FromBody]Module value)
        {
            using (var content = new xAppContext())
            {
                var set = content.CreateObjectSet<Module>();
                set.Attach(value);
                content.SaveChanges();
            }
        }

        // DELETE api/module/5
        public void Delete(int id)
        {
            using (var content = new xAppContext())
            {
                var item = content.Modules.FirstOrDefault(m => m.Id == id);
                if (item != null)
                {
                    content.Modules.Detach(item);
                    content.SaveChanges();
                }

            }
        }
    }
}

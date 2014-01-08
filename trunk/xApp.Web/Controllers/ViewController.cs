using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using xApp.Entity;

namespace xApp.Web.Controllers
{
    public class ViewController : Controller
    {
        //view/?moduleId=5
        public ActionResult Index(int moduleId)
        {
            return View(new Module() { Id = moduleId });            
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using xApp.Web.Models;
using xApp.Web.ViewModel;

namespace xApp.Web
{
    public class MenuController : ApiController
    {
        public IEnumerable<ViewMenu> Get()
        {
            return Get(string.Empty);
        }

        public IEnumerable<ViewMenu> Get(string appCode)
        {
            Menu[] menus;
            using (var content = new xAppContext())
            {
                var q = content.Menus
                                .OrderBy(m => m.Caption)
                                .OrderBy(m => m.OrderNO)
                                .OrderBy(m => m.ParentId).AsQueryable();

                if (!string.IsNullOrEmpty(appCode))
                    q = q.Where(c => c.Application == appCode);

                menus = q.ToArray();
            }

            var lst = new List<ViewMenu>();
            foreach (var c in menus)
            {
                var item = new ViewMenu();
                item.Id = c.Id;
                item.ModuleId = c.ModuleId;
                item.Text = c.Caption;
                item.Attributes.ParentId = c.ParentId;

                ViewMenu parent = null;
                if (item.Attributes.ParentId > 0)
                    parent = lst.FirstOrDefault(i => i.Id == c.ParentId);

                if (parent != null)
                    parent.Children.Add(item);
                else
                    lst.Add(item); 
            }
            return lst;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using xApp.Entity;
using xApp.Data;

namespace xApp.Services
{
    public class ApplicationService
    {
        public List<Application> GetApplications()
        {
            using (var context = new AppObjectContext())
            {
                var set = context.CreateObjectSet<Application>();
                return set.OrderBy(c => c.Name).ToList();
            }
        }

        public List<Menu> GetMenus(string appCode)
        {
            Menu[] menus;
            using (var content = new AppObjectContext())
            {
                var q = content.CreateObjectSet<Menu>()
                                .OrderBy(m => m.Caption)
                                .OrderBy(m => m.OrderNO)
                                .OrderBy(m => m.ParentId).AsQueryable();

                if (!string.IsNullOrEmpty(appCode))
                    q = q.Where(c => c.Application == appCode);

                menus = q.ToArray();
            }

            var lst = new List<Menu>();
            foreach (var c in menus)
            {
                Menu parent = null;
                if (c.ParentId > 0)
                    parent = lst.FirstOrDefault(i => i.Id == c.ParentId);

                if (parent != null)
                    parent.Children.Add(c);
                else
                    lst.Add(c);
            }
            return lst;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace xApp.Web.ViewModel
{
    [DataContract]
    public class MenuAttributes
    {
        [DataMember(Name = "parentId")]
        public int ParentId { get; set; }

        [DataMember(Name = "moduleId")]
        public int ModuleId { get; set; }

        [DataMember(Name = "systemId")]
        public int SystemId { get; set; }
    }

    [DataContract]
    public class ViewMenu
    {
        [DataMember(Name = "attributes")]
        public MenuAttributes Attributes { get; set; }

        [DataMember(Name = "children")]
        public List<ViewMenu> Children { get; set; }

        public ViewMenu()
        {
            Children = new List<ViewMenu>();
            Attributes = new MenuAttributes();
        }

        [DataMember(Name = "id")]
        public int Id { get; set; }

        [DataMember(Name = "moduleId")]
        public int ModuleId { get; set; }

        [DataMember(Name = "text")]
        public string Text { get; set; }
    }
}
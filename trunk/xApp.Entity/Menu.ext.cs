using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.Serialization;

namespace xApp.Entity
{
    partial class Menu
    {
        public Menu()
        {
            Children = new List<Menu>();
        }
        [DataMember(Name = "children")]
        public List<Menu> Children { get; set; }
        
    }
}

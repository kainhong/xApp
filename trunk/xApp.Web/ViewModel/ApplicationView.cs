using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace xApp.Web.ViewModel
{
    [DataContract]
    public class ViewApplication
    {
        [DataMember(Name="name")]
        public string Name { get; set; }

        [DataMember(Name="code")]
        public string Code { get; set; }

        [DataMember(Name = "status")]
        public int Status { get; set; }
    }
}
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Collections.Specialized;
using System.Runtime.Serialization;

namespace xApp.Web.Models
{
     [DataContract]
    public partial class Role
    {
        #region Primitive Properties
         [DataMember(Name = "code")]
        public virtual string Code
        {
            get;
            set;
        }
         [DataMember(Name = "name")]
        public virtual string Name
        {
            get;
            set;
        }
         [DataMember(Name = "description")]
        public virtual string Description
        {
            get;
            set;
        }
         [DataMember(Name = "application")]
        public virtual string Application
        {
            get;
            set;
        }
         [DataMember(Name = "status")]
        public virtual int Status
        {
            get;
            set;
        }

        #endregion

    }
}

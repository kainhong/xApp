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
    public partial class UserRole
    {
        #region Primitive Properties
         [DataMember(Name = "userId")]
        public virtual int UserId
        {
            get;
            set;
        }
         [DataMember(Name = "roleId")]
        public virtual int RoleId
        {
            get;
            set;
        }

        #endregion

    }
}

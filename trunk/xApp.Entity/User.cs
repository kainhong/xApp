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

namespace xApp.Entity
{
     [DataContract]
    public partial class User
    {
        #region Primitive Properties
         [DataMember(Name = "id")]
        public virtual int Id
        {
            get;
            set;
        }
         [DataMember(Name = "account")]
        public virtual string Account
        {
            get;
            set;
        }
         [DataMember(Name = "firstName")]
        public virtual string FirstName
        {
            get;
            set;
        }
         [DataMember(Name = "lastName")]
        public virtual string LastName
        {
            get;
            set;
        }
         [DataMember(Name = "password")]
        public virtual string Password
        {
            get;
            set;
        }
         [DataMember(Name = "gender")]
        public virtual int Gender
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

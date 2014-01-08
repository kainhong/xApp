using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Objects;

namespace xApp.Data
{
    public class AppObjectContext:ObjectContext,IDisposable
    {
        const string NAMESPACE = "";
        public AppObjectContext()
            : base("name=xappEntities","xApp")
        {
            
        }

        //public ObjectSet<T> CreateObjectSet<T>()
        //{
        //    return base.CreateObjectSet<T>();
        //}
    }
}

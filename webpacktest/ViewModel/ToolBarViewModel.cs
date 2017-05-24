using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webpacktest.ViewModel
{
    public class ToolBarViewModel
    {
        public string ControllerName { get; set; }

        public bool? DisableSearch { get; set; }
        public bool? DisableNew { get; set; }
        public bool? DisableDelete { get; set; }
        public bool? DisableCheck { get; set; }
        public bool? DisableFailed { get; set; }
        public bool? DisableAttach { get; set; }
    }
}
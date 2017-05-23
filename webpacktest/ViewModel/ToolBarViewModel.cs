using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webpacktest.ViewModel
{
    public class ToolBarViewModel
    {
        public string ControllerName { get; set; }

        public bool? DisSearch { get; set; }
        public bool? DisNew { get; set; }
        public bool? DisDelete { get; set; }
        public bool? DisCheck { get; set; }
        public bool? DisFailed { get; set; }
        public bool? DisAttach { get; set; }
    }
}
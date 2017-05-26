﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using webpacktest.ViewModel;

namespace webpacktest.Controllers
{
    public class TestTwoController : Controller
    {
        // GET: TestTwo
        public ActionResult Index()
        {
            return PartialView();
        }


        public ActionResult GetToolBarStatus()
        {
            ToolBarViewModel model = new ToolBarViewModel()
            {
                DisableAttach = true,
                DisableCheck = true,
                DisableDelete = false,
                DisableFailed = false,
                DisableAdd = false,
                DisableSearch = false
            };

            System.Web.Script.Serialization.JavaScriptSerializer objSerializer = new System.Web.Script.Serialization.JavaScriptSerializer();
            return Json(objSerializer.Serialize(model));
        }
    }
}
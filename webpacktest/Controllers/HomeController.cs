﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace webpacktest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult HomePage()
        {
            return View();
        }

        public ActionResult Index()
        {
            return PartialView();
        }

        public void Save(string name, int phone)
        {
            if(String.IsNullOrEmpty(name))
            {
                return;
            }

            return;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace webpacktest.Controllers
{
    public class TestOneController : Controller
    {
        // GET: TestOne
        public ActionResult Index()
        {
            return PartialView();
        }
    }
}
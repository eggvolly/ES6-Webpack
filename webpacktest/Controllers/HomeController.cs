using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using webpacktest.ViewModel;

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


        public ActionResult Search()
        {
            List<HomeDataViewModel> modelList = new List<HomeDataViewModel>();

            modelList.Add(new HomeDataViewModel()
            {
                Name = "Bernice",
                Phone = 0800
            });

            modelList.Add(new HomeDataViewModel()
            {
                Name = "Morris",
                Phone = 0922
            });

            return PartialView("_List", modelList);
        }


        public void Save(string name, int phone)
        {
            if(String.IsNullOrEmpty(name))
            {
                return;
            }

            return;
        }

        public ActionResult Delete()
        {
            return PartialView("_Delete");
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using webpacktest.ViewModel;

namespace webpacktest.Controllers
{
    public class ToolBarController : Controller
    {
        // GET: ToolBar
        public ActionResult Index()
        {
            return View();
        }

        // GET: ToolBar
        public ActionResult ToolBar(string controllerName)
        {
            if (String.IsNullOrEmpty(controllerName))
            {
                return RedirectToAction("Index", "Home");
            }


            //取得該功能能開啟的ToolBar功能
            ToolBarViewModel viewModel = GetFunctionStatus(controllerName);

            //TODO: 登入身分檢核

            return PartialView("_ToolBar", viewModel);
        }


        /// <summary>
        /// 從Service層取得ToolBar狀態
        /// </summary>
        /// <param name="controllerName"></param>
        /// <returns></returns>
        private ToolBarViewModel GetFunctionStatus(string controllerName)
        {
            ToolBarViewModel model = new ToolBarViewModel();
            if (controllerName == "Home")
            {
                model.DisNew = false;
                model.DisFailed = false;
                model.DisDelete = false;
                model.DisCheck = false;
                model.DisAttach = false;
                model.DisSearch = false;
            }

            else if (controllerName == "TestOne")
            {
                model.DisNew = false;
                model.DisFailed = false;
                model.DisDelete = false;
                model.DisCheck = false;
                model.DisAttach = true;
                model.DisSearch = false;
            }

            else
            {
                model.DisNew = false;
                model.DisFailed = false;
                model.DisDelete = false;
                model.DisCheck = false;
                model.DisAttach = false;
                model.DisSearch = false;
            }

            model.ControllerName = controllerName;
            return model;
        }
    }
}
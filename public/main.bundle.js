webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_project_service__ = __webpack_require__("../../../../../src/app/shared/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_letter_service__ = __webpack_require__("../../../../../src/app/shared/services/letter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_portfolio_service__ = __webpack_require__("../../../../../src/app/shared/services/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_guards_is_authenticated_guard__ = __webpack_require__("../../../../../src/app/components/guards/is-authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashbord_dashbord_component__ = __webpack_require__("../../../../../src/app/components/dashbord/dashbord.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_project_project_list_project_list_component__ = __webpack_require__("../../../../../src/app/components/project/project-list/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_project_project_new_project_new_component__ = __webpack_require__("../../../../../src/app/components/project/project-new/project-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_project_project_detail_project_detail_component__ = __webpack_require__("../../../../../src/app/components/project/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_letter_letter_list_letter_list_component__ = __webpack_require__("../../../../../src/app/components/letter/letter-list/letter-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_letter_letter_new_letter_new_component__ = __webpack_require__("../../../../../src/app/components/letter/letter-new/letter-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_letter_letter_detail_letter_detail_component__ = __webpack_require__("../../../../../src/app/components/letter/letter-detail/letter-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_portfolio_portfolio_list_portfolio_list_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio-list/portfolio-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_portfolio_portfolio_new_portfolio_new_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio-new/portfolio-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_portfolio_portfolio_detail_portfolio_detail_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio-detail/portfolio-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_cv_cv_component__ = __webpack_require__("../../../../../src/app/components/cv/cv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_project_project_project_component__ = __webpack_require__("../../../../../src/app/components/project/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_letter_letter_letter_component__ = __webpack_require__("../../../../../src/app/components/letter/letter/letter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_cv_preview_cv_preview_component__ = __webpack_require__("../../../../../src/app/components/cv-preview/cv-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_letter_letter_preview_letter_preview_component__ = __webpack_require__("../../../../../src/app/components/letter/letter-preview/letter-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_project_project_preview_project_preview_component__ = __webpack_require__("../../../../../src/app/components/project/project-preview/project-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_portfolio_portfolio_preview_portfolio_preview_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio-preview/portfolio-preview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_15__components_dashbord_dashbord_component__["a" /* DashbordComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__components_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]]
    },
    { path: 'cv', component: __WEBPACK_IMPORTED_MODULE_31__components_cv_preview_cv_preview_component__["a" /* CvPreviewComponent */] },
    { path: 'project/new', component: __WEBPACK_IMPORTED_MODULE_20__components_project_project_new_project_new_component__["a" /* ProjectNewComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__components_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]]
    },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_33__components_project_project_preview_project_preview_component__["a" /* ProjectPreviewComponent */] },
    { path: 'letter/new', component: __WEBPACK_IMPORTED_MODULE_23__components_letter_letter_new_letter_new_component__["a" /* LetterNewComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__components_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]]
    },
    { path: 'letter/:id', component: __WEBPACK_IMPORTED_MODULE_32__components_letter_letter_preview_letter_preview_component__["a" /* LetterPreviewComponent */] },
    { path: 'portfolio/new', component: __WEBPACK_IMPORTED_MODULE_26__components_portfolio_portfolio_new_portfolio_new_component__["a" /* PortfolioNewComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__components_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]]
    },
    { path: 'portfolio/:id', component: __WEBPACK_IMPORTED_MODULE_34__components_portfolio_portfolio_preview_portfolio_preview_component__["a" /* PortfolioPreviewComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_dashbord_dashbord_component__["a" /* DashbordComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_project_project_list_project_list_component__["a" /* ProjectListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_project_project_new_project_new_component__["a" /* ProjectNewComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_project_project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_letter_letter_list_letter_list_component__["a" /* LetterListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_letter_letter_new_letter_new_component__["a" /* LetterNewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_letter_letter_detail_letter_detail_component__["a" /* LetterDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_portfolio_portfolio_list_portfolio_list_component__["a" /* PortfolioListComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_portfolio_portfolio_new_portfolio_new_component__["a" /* PortfolioNewComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_portfolio_portfolio_detail_portfolio_detail_component__["a" /* PortfolioDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_cv_cv_component__["a" /* CvComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_project_project_project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_letter_letter_letter_component__["a" /* LetterComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_cv_preview_cv_preview_component__["a" /* CvPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_letter_letter_preview_letter_preview_component__["a" /* LetterPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_project_project_preview_project_preview_component__["a" /* ProjectPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_portfolio_portfolio_preview_portfolio_preview_component__["a" /* PortfolioPreviewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_9__shared_services_letter_service__["a" /* LetterService */],
            __WEBPACK_IMPORTED_MODULE_10__shared_services_portfolio_service__["a" /* PortfolioService */],
            __WEBPACK_IMPORTED_MODULE_11__components_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/cv-preview/cv-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (min-width: 600px) {\n  app-cv {\n    width: 70%;\n    float: left;\n  }\n  app-user  {\n    width: 30%;\n    float: left;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cv-preview/cv-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cv [user]=\"user\"></app-cv>\n<app-user [user]=\"user\" (onChange)=\"onChangeUser($event)\"></app-user>\n"

/***/ }),

/***/ "../../../../../src/app/components/cv-preview/cv-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CvPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CvPreviewComponent = (function () {
    function CvPreviewComponent(userService) {
        this.userService = userService;
    }
    CvPreviewComponent.prototype.ngOnInit = function () {
        this.fetchUser();
    };
    CvPreviewComponent.prototype.fetchUser = function () {
        var _this = this;
        this.userService.get().subscribe(function (user) {
            _this.user = user;
        }, function (error) { return console.log(error); });
    };
    CvPreviewComponent.prototype.onChangeUser = function (user) {
        this.user = user;
    };
    return CvPreviewComponent;
}());
CvPreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cv-preview',
        template: __webpack_require__("../../../../../src/app/components/cv-preview/cv-preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cv-preview/cv-preview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], CvPreviewComponent);

var _a;
//# sourceMappingURL=cv-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cv/cv.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.background {\n  width: 100%;\n  overflow: scroll;\n}\ndiv.background::-webkit-scrollbar {\n    background-color: #2e2923;\n}\ndiv.background::-webkit-scrollbar-corner{\n  background-color: #2e2923;\n}\ndiv.paper {\n  width: 420px;\n  height: 600px;\n  background-color: black;\n  margin: 100px auto 20px auto;\n  padding: 10px;\n  color: black;\n\n}\ndiv.header {\n  width: 400px;\n  height: 150px;\n  background-color: white;\n  padding: 40px;\n}\nh2 {\n  width: 260px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  border-bottom: 2px solid black;\n  text-align: center;\n  font-size: 24px;\n  padding-bottom: 10px;\n}\ndiv.info1 {\n  width: 120px;\n  margin-left: 30px;\n  text-align: right;\n  float: left;\n  margin-right: 20px;\n}\ndiv.info2 {\n  width: 120px;\n  text-align: left;\n  float: left;\n\n}\np{\n  font-size: 10px;\n  margin-top: -3px;\n}\ndiv.title {\n  width: 400px;\n  height: 20px;\n  background-color: black;\n  color: grey;\n  font-size: 10px;\n  padding: 7px;\n  text-align: center;\n  vertical-align: middle;\n}\ndiv.body {\n  width: 400px;\n  height: 410px;\n  background-color: white;\n  padding-top: 30px;\n}\ndiv.column1 {\n  width: 150px;\n  height: 360px;\n  margin-left: 40px;\n  margin-right: 10px;\n  /*background-color: lightgrey;*/\n  float: left;\n  display: block;\n}\ndiv.column2 {\n  width: 150px;\n  height: 360px;\n  margin-left: 10px;\n  margin-right: 40px;\n  /*background-color: lightgrey;*/\n  float: left;\n}\nh3 {\n  font-size: 10px;\n  background-color: white;\n  margin-top: -4px;\n}\ndiv.profile, div.education, div.skills {\n  width: 100%;\n  border-top: 1px solid black;\n  margin-bottom: 20px;\n\n}\ndiv.profile > p, div.education > p {\n  text-align: justify;\n  background-color: white;\n}\ndiv.profile > h3 {\n  width: 55px;\n}\ndiv.education > h3 {\n  width: 75px;\n}\ndiv.skills > h3 {\n  width: 45px;\n}\ndiv.job > h3 {\n  margin-top: 7px;\n}\ndiv.job > p {\n  margin-top: -7px;\n  text-align: justify;\n}\nimg {\n  width: 100%;\n  border-radius: 5px;\n}\nspan {\n  margin-left: 5px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border: 1px solid black;\n  float: right;\n}\n\nspan.full {\n  background-color: grey;\n}\n.date {\n  color: grey;\n}\ndiv.education > .date {\n  margin-top: -7px;\n}\napp-user {\n  max-height: 700px;\n  overflow: scroll;\n}\napp-user::-webkit-scrollbar {\n    background-color: #2e2923;\n}\napp-user::-webkit-scrollbar-corner{\n  background-color: #2e2923;\n}\n@media (min-width: 600px) {\n  div.background {\n    /*margin: 20px 1% 20px 2%;*/\n    width: 100%;\n    float: left;\n  }\n  div.paper {\n    margin: 20px auto;\n  }\n  app-user {\n    width: 30%;\n    /*max-height: 900px;*/\n    float: left;\n  }\n  .personalData {\n    width: 100%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cv/cv.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"paper\">\n    <div class=\"header\">\n      <h2> {{user?.firstName}} {{user?.lastName}} </h2>\n      <div class=\"info1\">\n        <p> {{user?.email}} </p>\n        <p> {{user?.url}} </p>\n      </div>\n      <div class=\"info2\">\n        <p> {{user?.phoneNo}} </p>\n        <p> {{user?.address}} </p>\n      </div>\n    </div>\n    <div class=\"title\"> {{ user?.title}} </div>\n    <div class=\"body\">\n      <div class=\"column1\">\n        <div class=\"profile\">\n          <h3><strong> PROFILE </strong></h3>\n          <p> {{user?.profile}} </p>\n        </div>\n        <div class=\"education\">\n          <h3><strong> EDUCATION </strong></h3>\n          <p> {{ user?.education[0].name }} </p>\n          <p class=\"date\">  {{ user?.education[0].from.slice(0, 4) }} - {{ user?.education[0].to.slice(0, 4) }} </p>\n          <p>\n            {{ user?.education[0].description }}\n          </p>\n        </div>\n        <div class=\"skills\">\n          <h3><strong> SKILLS </strong></h3>\n          <p> autoCad\n            <span class=\"full\"> </span>\n            <span class=\"full\"> </span>\n            <span class=\"full\"> </span>\n            <span class=\"empty\"> </span>\n          </p>\n          <p> Revit\n            <span class=\"full\"> </span>\n            <span class=\"full\"> </span>\n            <span class=\"full\"> </span>\n            <span class=\"full\"> </span>\n          </p>\n          <p> 3D Max Studio\n            <span class=\"full\"> </span>\n            <span class=\"full\"> </span>\n            <span class=\"empty\"> </span>\n            <span class=\"emtpy\"> </span>\n          </p>\n          <p> Rhino3D\n            <span class=\"full\"> </span>\n            <span class=\"full\"> </span>\n            <span class=\"full\"> </span>\n            <span class=\"empty\"> </span>\n          </p>\n          <p> Photoshop\n            <span class=\"full\"> </span>\n            <span class=\"full\"> </span>\n            <span class=\"empty\"> </span>\n            <span class=\"empty\"> </span>\n          </p>\n          <p> Ilustrator\n            <span class=\"full\"> </span>\n            <span class=\"full\"> </span>\n            <span class=\"empty\"> </span>\n            <span class=\"empty\"> </span>\n          </p>\n          <p> Presto\n            <span class=\"full\"> </span>\n            <span class=\"empty\"> </span>\n            <span class=\"empty\"> </span>\n            <span class=\"empty\"> </span>\n          </p>\n          <p> Cype\n            <span class=\"full\"> </span>\n            <span class=\"empty\"> </span>\n            <span class=\"empty\"> </span>\n            <span class=\"empty\"> </span>\n          </p>\n          <p> Microsoft Office\n            <span class=\"full\"> </span>\n            <span class=\"full\"> </span>\n            <span class=\"full\"> </span>\n            <span class=\"full\"> </span>\n          </p>\n        </div>\n      </div>\n      <div class=\"column2\">\n        <img src=\"https://images.adsttc.com/media/images/587f/83ec/e58e/ce8d/9300/001a/large_jpg/Zaha_Hadid_by_Brigitte_Lacombe.jpg?1484751845\">\n        <div class=\"job\">\n          <h3><strong> PROFESIONAL EXPERIENCE </strong></h3>\n<br>\n          <p> {{ user?.experience[0].name }} </p>\n          <p>  {{ user?.experience[0].title }} </p>\n          <p class=\"date\"> {{ user?.experience[0].from.slice(0, 4) }} - {{ user?.experience[0].to.slice(0, 4) }} </p>\n          <p> {{ user?.experience[0].description }} </p>\n<br>\n          <p> {{ user?.experience[1].name }} </p>\n          <p>  {{ user?.experience[1].title }} </p>\n          <p class=\"date\">  {{ user?.experience[1].from.slice(0, 4) }} - {{ user?.experience[1].to.slice(0, 4) }} </p>\n          <p> {{ user?.experience[1].description }} </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/cv/cv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CvComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_user_model__ = __webpack_require__("../../../../../src/app/shared/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CvComponent = (function () {
    function CvComponent() {
    }
    return CvComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_user_model__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_models_user_model__["a" /* User */]) === "function" && _a || Object)
], CvComponent.prototype, "user", void 0);
CvComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cv',
        template: __webpack_require__("../../../../../src/app/components/cv/cv.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cv/cv.component.css")]
    })
], CvComponent);

var _a;
//# sourceMappingURL=cv.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashbord/dashbord.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ndiv {\n  float: none;\n  width: 100%;\n  height: 75px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashbord/dashbord.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-user></app-user> -->\n<div></div>\n<app-project-list></app-project-list>\n<app-letter-list></app-letter-list>\n<app-portfolio-list></app-portfolio-list>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashbord/dashbord.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashbordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashbordComponent = (function () {
    function DashbordComponent() {
    }
    DashbordComponent.prototype.ngOnInit = function () {
    };
    return DashbordComponent;
}());
DashbordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashbord',
        template: __webpack_require__("../../../../../src/app/components/dashbord/dashbord.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashbord/dashbord.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashbordComponent);

//# sourceMappingURL=dashbord.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/guards/is-authenticated.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsAuthenticatedGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IsAuthenticatedGuard = (function () {
    function IsAuthenticatedGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    IsAuthenticatedGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    return IsAuthenticatedGuard;
}());
IsAuthenticatedGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], IsAuthenticatedGuard);

var _a, _b;
//# sourceMappingURL=is-authenticated.guard.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  width: 100%;\n  height: 50px;\n  background-color: #2e2923;\n  color: #e9e6c3;\n  margin: 0;\n  padding: 10px 2%;\n}\nimg {\n  width: 100px;\n  position: absolute;\n  left: 20px;\n  top: 50px;\n}\nh1 {\n  font-weight: bolder;\n  font-size: 30px;\n  margin: 0px 0px;\n}\na {\n  color: #e9e6c3;\n  text-decoration: none;\n}\n/* Style The Dropdown Button */\n.dropbtn {\n    border: none;\n    cursor: pointer;\n    background-color: #2e2923;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/menu.png") + ");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: right;\n    border-width: 0px;\n    border-radius: 0px;\n    height: 20px;\n    width: 22px;\n    margin: 0px 0px 0px 0px;\n}\n\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n    position: relative;\n    display: inline-block;\n    float: right;\n    margin-top: -25px;\n\n}\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #e9e6c3;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n    right: 0;\n}\n\n/* Links inside the dropdown */\n.dropdown-content a {\n    color: #2e2923;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #f1f1f1}\n\n/* Show the dropdown menu on hover */\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n\n/* Change the background color of the dropdown button when the dropdown content is shown */\n.dropdown:hover .dropbtn {\n    /*background-color: #2e2923;*/\n}\n@media (min-width: 600px) {\n  img {\n    left: 40px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1><a href=\"/dashboard\"> C U B E </a></h1>\n  <img src=\"images/cubo.gif\">\n  <div class=\"dropdown\">\n    <button class=\"dropbtn\"></button>\n      <div class=\"dropdown-content\">\n        <a *ngIf=\"!user\" (click)=\"register()\">Register</a>\n        <a *ngIf=\"!user\" (click)=\"login()\">Login</a>\n        <a *ngIf=\"user\" href=\"/dashboard\">HOME</a>\n        <a *ngIf=\"user\" href=\"/cv\">CV</a>\n        <a *ngIf=\"user\" (click)=\"logout()\">Logout</a>\n      </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem("user"));
    };
    HeaderComponent.prototype.register = function () { this.router.navigate(['/register']); };
    HeaderComponent.prototype.login = function () { this.router.navigate(['/login']); };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (ok) {
            _this.router.navigate(['/']);
            location.reload();
        }, function (error) { _this.error = error; });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 100%\n}\nh2 {\n  text-align: center;\n  font-size: 20px;\n}\n@media (min-width: 600px) {\n  div{\n    width: 640px;\n    margin: 0 auto;\n  }\n  app-register {\n    float: left;\n  }\n  app-login {\n    float: left;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> WELCOME </h2>\n<h2> Let's start... </h2>\n<div>\n  <app-register></app-register>\n  <app-login></app-login>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/letter/letter-detail/letter-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit {\n  width: 320px;\n  margin: 100px auto;\n}\nlabel {\n  display: block;\n  margin: 5px 0;\n}\ntextarea {\n  width: 300px;\n  height: 20px;\n  background-color: #2e2923;\n  display: block;\n  margin-bottom: 20px;\n  border: none;\n  font-size: 16px;\n  color: #e9e6c3;\n  text-indent: 20px;\n  word-wrap: normal;\n}\ntextarea:focus {\n  border: none;\n}\ntextarea {\n  resize: none;\n}\ntextarea.height300px {\n  height: 300px;\n}\n@media (min-width: 600px) {\n  .edit {\n    width: 100%;\n    float: left;\n    max-height: 700px;\n    overflow: scroll;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/letter/letter-detail/letter-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"edit\">\n      <form (ngSubmit)=\"onSubmitEdit(editForm, letter?._id)\" #editForm=\"ngForm\">\n          <label for=\"title\">Title</label>\n          <textarea (change)=\"editForm.ngSubmit.emit()\" value=\"{{letter?.title}}\" name=\"title\" [(ngModel)]=\"title\"></textarea>\n\n          <label for=\"from\">From</label>\n          <textarea (change)=\"editForm.ngSubmit.emit()\" value=\"{{letter?.from}}\" name=\"from\" [(ngModel)]=\"from\"></textarea>\n\n          <label for=\"to\">To</label>\n          <textarea (change)=\"editForm.ngSubmit.emit()\" value=\"{{letter?.to}}\" name=\"to\" [(ngModel)]=\"to\"></textarea>\n\n          <label for=\"text\">Letter content</label>\n          <textarea class=\"height300px\" (change)=\"editForm.ngSubmit.emit()\" value=\"{{letter?.text}}\" name=\"text\" [(ngModel)]=\"text\"></textarea>\n\n      </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/letter/letter-detail/letter-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_letter_model__ = __webpack_require__("../../../../../src/app/shared/models/letter.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_letter_service__ = __webpack_require__("../../../../../src/app/shared/services/letter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LetterDetailComponent = (function () {
    function LetterDetailComponent(letterService, router, routes) {
        this.letterService = letterService;
        this.router = router;
        this.routes = routes;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LetterDetailComponent.prototype.ngOnInit = function () {
        this.letter = new __WEBPACK_IMPORTED_MODULE_2__shared_models_letter_model__["a" /* Letter */];
    };
    LetterDetailComponent.prototype.onSubmitEdit = function (editForm, id) {
        var _this = this;
        this.letterService.edit(editForm.value, id).subscribe(function (letter) {
            _this.letter = letter;
            _this.onChange.emit(_this.letter);
        }, function (error) { _this.error = error; });
    };
    return LetterDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_models_letter_model__["a" /* Letter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_models_letter_model__["a" /* Letter */]) === "function" && _a || Object)
], LetterDetailComponent.prototype, "letter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], LetterDetailComponent.prototype, "onChange", void 0);
LetterDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-letter-detail',
        template: __webpack_require__("../../../../../src/app/components/letter/letter-detail/letter-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/letter/letter-detail/letter-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_letter_service__["a" /* LetterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_letter_service__["a" /* LetterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], LetterDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=letter-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/letter/letter-list/letter-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n@media (min-width: 600px) {\n  div {\n    margin: 20px 1%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/letter/letter-list/letter-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3> LETTERS </h3>\n  <table>\n    <tr *ngFor=\"let letter of letters\">\n      <th (click)=\"showLetter( letter._id )\"> {{ letter.title }}</th>\n      <th (click)=\"delete( letter._id )\"> X </th>\n    </tr>\n  </table>\n  <button (click)=\"addLetter()\">+</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/letter/letter-list/letter-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_letter_service__ = __webpack_require__("../../../../../src/app/shared/services/letter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LetterListComponent = (function () {
    function LetterListComponent(letterService, router) {
        this.letterService = letterService;
        this.router = router;
        this.letters = [];
    }
    LetterListComponent.prototype.ngOnInit = function () {
        this.fetchList();
    };
    LetterListComponent.prototype.fetchList = function () {
        var _this = this;
        this.letterService.getAll().subscribe(function (letters) { return _this.letters = letters; }, function (error) { return console.log(error); });
    };
    LetterListComponent.prototype.addLetter = function () {
        this.router.navigate(['/letter/new']);
    };
    LetterListComponent.prototype.showLetter = function (id) {
        this.router.navigate(["/letter/" + id]);
    };
    LetterListComponent.prototype.delete = function (id) {
        var _this = this;
        this.letterService.remove(id)
            .subscribe(function (removed) {
            if (removed) {
                _this.letters = _this.letters.filter(function (letter) { return letter._id !== id; });
            }
            else {
                console.log("error: Letter not found");
            }
        }, function (err) { return console.log(err); });
    };
    return LetterListComponent;
}());
LetterListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-letter-list',
        template: __webpack_require__("../../../../../src/app/components/letter/letter-list/letter-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/project-list/project-list.component.css"), __webpack_require__("../../../../../src/app/components/letter/letter-list/letter-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_letter_service__["a" /* LetterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_letter_service__["a" /* LetterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LetterListComponent);

var _a, _b;
//# sourceMappingURL=letter-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/letter/letter-new/letter-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new {\n  width: 320px;\n  margin: 100px auto;\n}\n\nlabel {\n  display: block;\n  margin: 5px 0;\n}\ntextarea {\n  width: 300px;\n  height: 30px;\n  background-color: #e9e6c3;\n  display: block;\n  margin-bottom: 20px;\n  font-size: 16px;\n}\ntextarea.height300px {\n  height: 300px;\n}\nbutton.save {\n  border-radius: 0%;\n  background-color: #e9e6c3;\n  width: 300px;\n  border: none;\n  font-size: 16px;\n  padding: 5px;\n  color: #2e2923;\n}\ntextarea {\n  resize: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/letter/letter-new/letter-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"new\">\n      <form (ngSubmit)=\"onSubmitNew(newForm)\" #newForm=\"ngForm\">\n          <label for=\"title\">Title</label>\n          <textarea name=\"title\" [(ngModel)]=\"title\"></textarea>\n\n          <label for=\"from\">From</label>\n          <textarea name=\"from\" [(ngModel)]=\"from\"></textarea>\n\n          <label for=\"to\">To</label>\n          <textarea name=\"to\" [(ngModel)]=\"to\"></textarea>\n\n          <label for=\"text\">Letter content</label>\n          <textarea class=\"height300px\" name=\"text\" [(ngModel)]=\"text\"></textarea>\n\n          <button type=\"submit\" class=\"save\">Add</button>\n      </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/letter/letter-new/letter-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_letter_service__ = __webpack_require__("../../../../../src/app/shared/services/letter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LetterNewComponent = (function () {
    function LetterNewComponent(letterService, router) {
        this.letterService = letterService;
        this.router = router;
    }
    LetterNewComponent.prototype.ngOnInit = function () { };
    LetterNewComponent.prototype.onSubmitNew = function (newForm) {
        var _this = this;
        this.letterService.create(newForm.value).subscribe(function () {
            newForm.reset();
            _this.router.navigate(['/dashboard']);
        }, function (error) { _this.error = error; });
    };
    return LetterNewComponent;
}());
LetterNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-letter-new',
        template: __webpack_require__("../../../../../src/app/components/letter/letter-new/letter-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/letter/letter-new/letter-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_letter_service__["a" /* LetterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_letter_service__["a" /* LetterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LetterNewComponent);

var _a, _b;
//# sourceMappingURL=letter-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/letter/letter-preview/letter-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (min-width: 600px) {\n  app-letter {\n    width: 70%;\n    float: left;\n  }\n  app-letter-detail  {\n    width: 30%;\n    float: left;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/letter/letter-preview/letter-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<app-letter [user]=\"user\" [letter]=\"letter\"></app-letter>\n<app-letter-detail [letter]=\"letter\" (onChange)=\"onChangeLetter($event)\"></app-letter-detail>\n"

/***/ }),

/***/ "../../../../../src/app/components/letter/letter-preview/letter-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_letter_service__ = __webpack_require__("../../../../../src/app/shared/services/letter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LetterPreviewComponent = (function () {
    function LetterPreviewComponent(letterService, userService, router, routes) {
        this.letterService = letterService;
        this.userService = userService;
        this.router = router;
        this.routes = routes;
    }
    LetterPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchUser();
        this.routes.params.subscribe(function (params) { return _this.fetchLetter(params['id']); });
    };
    LetterPreviewComponent.prototype.fetchLetter = function (id) {
        var _this = this;
        this.letterService.get(id).subscribe(function (letter) { return _this.letter = letter; }, function (error) { return console.log(error); });
    };
    LetterPreviewComponent.prototype.fetchUser = function () {
        var _this = this;
        this.userService.get().subscribe(function (user) {
            _this.user = user;
        }, function (error) { return console.log(error); });
    };
    LetterPreviewComponent.prototype.onChangeLetter = function (letter) {
        this.letter = letter;
    };
    return LetterPreviewComponent;
}());
LetterPreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-letter-preview',
        template: __webpack_require__("../../../../../src/app/components/letter/letter-preview/letter-preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/letter/letter-preview/letter-preview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_letter_service__["a" /* LetterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_letter_service__["a" /* LetterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], LetterPreviewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=letter-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/letter/letter/letter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.background {\n  width: 100%;\n  overflow: scroll;\n}\ndiv.background::-webkit-scrollbar {\n    background-color: #2e2923;\n}\ndiv.background::-webkit-scrollbar-corner{\n  background-color: #2e2923;\n}\ndiv.paper {\n  width: 420px;\n  height: 600px;\n  background-color: black;\n  margin: 100px auto 20px auto;\n  padding: 10px;\n  color: black;\n\n}\ndiv.header {\n  width: 400px;\n  height: 150px;\n  background-color: white;\n  padding: 40px;\n}\nh2 {\n  width: 260px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  border-bottom: 2px solid black;\n  text-align: center;\n  font-size: 24px;\n  padding-bottom: 10px;\n}\ndiv.info1 {\n  width: 120px;\n  margin-left: 30px;\n  text-align: right;\n  float: left;\n  margin-right: 20px;\n}\ndiv.info2 {\n  width: 120px;\n  text-align: left;\n  float: left;\n\n}\np{\n  font-size: 10px;\n  margin-top: -3px;\n}\ndiv.title {\n  width: 400px;\n  height: 20px;\n  background-color: black;\n  color: grey;\n  font-size: 10px;\n  padding: 7px;\n  text-align: center;\n  vertical-align: middle;\n}\ndiv.body {\n  width: 400px;\n  height: 410px;\n  background-color: white;\n  padding: 30px;\n}\n\napp-letter {\n  max-height: 700px;\n  overflow: scroll;\n}\napp-letter::-webkit-scrollbar {\n    background-color: #2e2923;\n}\napp-letter::-webkit-scrollbar-corner{\n  background-color: #2e2923;\n}\n@media (min-width: 600px) {\n  div.background {\n    width: 100%;\n    float: left;\n  }\n  div.paper {\n    margin: 20px auto;\n  }\n  app-letter {\n    width: 30%;\n    float: left;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/letter/letter/letter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"paper\">\n    <div class=\"header\">\n      <h2> {{ user?.firstName }} {{ user?.lastName }}</h2>\n      <div class=\"info1\">\n        <p> {{user?.email}} </p>\n        <p> {{user?.url}} </p>\n      </div>\n      <div class=\"info2\">\n        <p> {{user?.phoneNo}} </p>\n        <p> {{user?.address}} </p>\n      </div>\n    </div>\n\n    <div class=\"title\"> {{ user?.title }} </div>\n\n    <div class=\"body\">\n      <p> Dear {{ letter?.to }} </p>\n      <p>  {{ letter?.text }} </p>\n      <p> Sincerely, </p>\n      <p> {{ letter?.from }} </p>\n    </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/letter/letter/letter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_user_model__ = __webpack_require__("../../../../../src/app/shared/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_letter_model__ = __webpack_require__("../../../../../src/app/shared/models/letter.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LetterComponent = (function () {
    function LetterComponent() {
    }
    return LetterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_user_model__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_models_user_model__["a" /* User */]) === "function" && _a || Object)
], LetterComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_models_letter_model__["a" /* Letter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_models_letter_model__["a" /* Letter */]) === "function" && _b || Object)
], LetterComponent.prototype, "letter", void 0);
LetterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-letter',
        template: __webpack_require__("../../../../../src/app/components/letter/letter/letter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/letter/letter/letter.component.css")]
    })
], LetterComponent);

var _a, _b;
//# sourceMappingURL=letter.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  width: 320px;\n  margin: 100px auto;\n}\n\nlabel {\n  display: block;\n  margin: 5px 0;\n}\ninput {\n  width: 300px;\n  background-color: #e9e6c3;\n  display: block;\n  margin-bottom: 20px;\n}\nbutton {\n  border-radius: 0%;\n  background-color: #e9e6c3;\n  width: 300px;\n  border: none;\n  font-size: 16px;\n  padding: 5px;\n  color: #2e2923;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmitLogin(loginForm)\" #loginForm=\"ngForm\">\n\n    <h1>Login</h1>\n\n      <label for=\"email\">Email: </label>\n      <input type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" required>\n\n      <label for=\"password\">Password: </label>\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required>\n\n    <button type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\n    <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user_model__ = __webpack_require__("../../../../../src/app/shared/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user_model__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmitLogin = function (loginForm) {
        var _this = this;
        this.authService.login(this.user).subscribe(function (user) {
            loginForm.reset();
            _this.router.navigate(['/dashboard']);
            location.reload();
        }, function (error) { _this.error = error; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio-detail/portfolio-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit {\n  width: 320px;\n  margin: 100px auto;\n}\nlabel {\n  display: block;\n  margin: 5px 0;\n}\ninput, textarea {\n  width: 300px;\n  height: 20px;\n  background-color: #2e2923;\n  display: block;\n  margin-bottom: 20px;\n  border: none;\n  font-size: 16px;\n  color: #e9e6c3;\n  text-indent: 20px;\n  word-wrap: normal;\n}\ninput:focus, textarea:focus {\n  border: none;\n}\ntextarea {\n  resize: none;\n}\nbutton {\n  background-color: #2e2923;\n  color: #e9e6c3;\n  font-size: 20px;\n  border: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio-detail/portfolio-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"edit\">\n      <form (ngSubmit)=\"onSubmitEdit(editForm, portfolio?._id )\" #editform=\"ngForm\">\n          <label for=\"title\">Title</label>\n          <textarea (change)=\"editForm.ngSubmit.emit()\" value=\"{{ portfolio?.title }}\" type=\"text\" name=\"title\" [(ngModel)]=\"title\"></textarea>\n\n          <label for=\"projects\">Projects</label>\n          <div *ngFor=\"let project of portfolio?.projects; let i = index\">\n            <button (click)=\"deleteProject(i)\">x</button>\n\n              <p>{{ project.title }}</p>\n          </div>\n          \n          <label for=\"letters\">Letters</label>\n          <div *ngFor=\"let letter of portfolio?.letters; let i = index\">\n            <button (click)=\"deleteLetter(i)\">x</button>\n              <p>{{ letter.title }}</p>\n          </div>\n\n\n      </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio-detail/portfolio-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_portfolio_service__ = __webpack_require__("../../../../../src/app/shared/services/portfolio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioDetailComponent = (function () {
    function PortfolioDetailComponent(portfolioService, router, routes) {
        this.portfolioService = portfolioService;
        this.router = router;
        this.routes = routes;
    }
    PortfolioDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params.subscribe(function (params) { return _this.fetchPortfolio(params['id']); });
    };
    PortfolioDetailComponent.prototype.fetchPortfolio = function (id) {
        var _this = this;
        this.portfolioService.get(id).subscribe(function (portfolio) {
            _this.portfolio = portfolio;
            console.log(_this.portfolio);
        }, function (error) { return _this.error = error; });
    };
    PortfolioDetailComponent.prototype.onSubmitEdit = function (editForm, id) {
        var _this = this;
        this.portfolioService.edit(editForm.value, id).subscribe(function () { }, function (error) { _this.error = error; });
    };
    return PortfolioDetailComponent;
}());
PortfolioDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portfolio-detail',
        template: __webpack_require__("../../../../../src/app/components/portfolio/portfolio-detail/portfolio-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/portfolio/portfolio-detail/portfolio-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_portfolio_service__["a" /* PortfolioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PortfolioDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=portfolio-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio-list/portfolio-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (min-width: 600px) {\n  div {\n    margin: 20px 2% 20px 1%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio-list/portfolio-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3> PORTFOLIOS </h3>\n  <table>\n    <tr *ngFor=\"let portfolio of portfolios\">\n      <th (click)=\"showPortfolio( portfolio._id )\"> {{ portfolio.title }}</th>\n      <th (click)=\"delete( portfolio._id )\"> X </th>\n    </tr>\n  </table>\n  <button (click)=\"addProject()\">+</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio-list/portfolio-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_portfolio_service__ = __webpack_require__("../../../../../src/app/shared/services/portfolio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioListComponent = (function () {
    function PortfolioListComponent(portfolioService, router) {
        this.portfolioService = portfolioService;
        this.router = router;
        this.portfolios = [];
    }
    PortfolioListComponent.prototype.ngOnInit = function () {
        this.fetchList();
    };
    PortfolioListComponent.prototype.fetchList = function () {
        var _this = this;
        this.portfolioService.getAll().subscribe(function (portfolios) { return _this.portfolios = portfolios; }, function (error) { return console.log(error); });
    };
    PortfolioListComponent.prototype.addProject = function () {
        this.router.navigate(['/portfolio/new']);
    };
    PortfolioListComponent.prototype.showPortfolio = function (id) {
        this.router.navigate(["/portfolio/" + id]);
    };
    PortfolioListComponent.prototype.delete = function (id) {
        var _this = this;
        this.portfolioService.remove(id)
            .subscribe(function (removed) {
            if (removed) {
                _this.portfolios = _this.portfolios.filter(function (portfolio) { return portfolio._id !== id; });
            }
            else {
                console.log("error: Portfolio not found");
            }
        }, function (err) { return console.log(err); });
    };
    return PortfolioListComponent;
}());
PortfolioListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portfolio-list',
        template: __webpack_require__("../../../../../src/app/components/portfolio/portfolio-list/portfolio-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/project-list/project-list.component.css"), __webpack_require__("../../../../../src/app/components/portfolio/portfolio-list/portfolio-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_portfolio_service__["a" /* PortfolioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PortfolioListComponent);

var _a, _b;
//# sourceMappingURL=portfolio-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio-new/portfolio-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new {\n  width: 320px;\n  margin: 100px auto;\n}\n\nlabel {\n  display: block;\n  margin: 5px 0;\n}\nselect, input {\n  width: 300px;\n  background-color: #e9e6c3;\n  display: block;\n  margin-bottom: 20px;\n}\nbutton.save {\n  border-radius: 0%;\n  background-color: #e9e6c3;\n  width: 300px;\n  border: none;\n  font-size: 16px;\n  padding: 5px;\n  color: #2e2923;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio-new/portfolio-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"new\">\n      <form (ngSubmit)=\"onSubmitNew(newForm)\" #newForm=\"ngForm\">\n          <label for=\"title\">Title</label>\n          <input type=\"text\" name=\"title\" [(ngModel)]=\"portfolio.title\">\n\n          <label for=\"projects\">Projects</label>\n          <select multiple name=\"projects\" [(ngModel)]=\"portfolio.projects\">\n            <option *ngFor=\"let project of projects\" [value]=\"project._id\">{{ project.title }}</option>\n          </select>\n\n          <label for=\"letters\">Letters</label>\n          <select multiple name=\"letters\" [(ngModel)]=\"portfolio.letters\">\n            <option *ngFor=\"let letter of letters\" [value]=\"letter._id\">{{ letter.title }}</option>\n          </select>\n\n          <button type=\"submit\" class=\"save\">Save</button>\n      </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio-new/portfolio-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_portfolio_model__ = __webpack_require__("../../../../../src/app/shared/models/portfolio.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_portfolio_service__ = __webpack_require__("../../../../../src/app/shared/services/portfolio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortfolioNewComponent = (function () {
    function PortfolioNewComponent(portfolioService, router) {
        this.portfolioService = portfolioService;
        this.router = router;
        this.portfolio = new __WEBPACK_IMPORTED_MODULE_2__shared_models_portfolio_model__["a" /* Portfolio */]();
    }
    PortfolioNewComponent.prototype.ngOnInit = function () {
        this.fetchProjectsList(),
            this.fetchLettersList();
    };
    PortfolioNewComponent.prototype.fetchProjectsList = function () {
        var _this = this;
        this.portfolioService.getProjects().subscribe(function (projects) { return _this.projects = projects; }, function (error) { return console.log(error); });
    };
    PortfolioNewComponent.prototype.fetchLettersList = function () {
        var _this = this;
        this.portfolioService.getLetters().subscribe(function (letters) { return _this.letters = letters; }, function (error) { return console.log(error); });
    };
    PortfolioNewComponent.prototype.onSubmitNew = function (newForm) {
        var _this = this;
        console.log(newForm.value);
        this.portfolioService.create(this.portfolio).subscribe(function () {
            newForm.reset();
            _this.router.navigate(['/dashboard']);
        }, function (error) { _this.error = error; });
    };
    return PortfolioNewComponent;
}());
PortfolioNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portfolio-new',
        template: __webpack_require__("../../../../../src/app/components/portfolio/portfolio-new/portfolio-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/portfolio/portfolio-new/portfolio-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_portfolio_service__["a" /* PortfolioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PortfolioNewComponent);

var _a, _b;
//# sourceMappingURL=portfolio-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio-preview/portfolio-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio-preview/portfolio-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cv [user]=\"portfolio?.author\"></app-cv>\n\n<div *ngFor=\"let letter of portfolio?.letters\">\n  <app-letter [user]=\"portfolio.author\" [letter]=\"letter\"></app-letter>\n</div>\n\n<div *ngFor=\"let project of portfolio?.projects\">\n  <app-project [project]=\"project\"></app-project>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio-preview/portfolio-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_portfolio_service__ = __webpack_require__("../../../../../src/app/shared/services/portfolio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioPreviewComponent = (function () {
    function PortfolioPreviewComponent(portfolioService, router, routes) {
        this.portfolioService = portfolioService;
        this.router = router;
        this.routes = routes;
    }
    PortfolioPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params.subscribe(function (params) { return _this.fetchPortfolio(params['id']); });
    };
    PortfolioPreviewComponent.prototype.fetchPortfolio = function (id) {
        var _this = this;
        this.portfolioService.get(id).subscribe(function (portfolio) {
            _this.portfolio = portfolio;
            console.log(_this.portfolio);
            // this.letters = portfolio['letters'];
            // this.projects = portfolio.projects;
            // this.user = portfolio.author;
        }, function (error) { return _this.error = error; });
    };
    return PortfolioPreviewComponent;
}());
PortfolioPreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portfolio-preview',
        template: __webpack_require__("../../../../../src/app/components/portfolio/portfolio-preview/portfolio-preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/portfolio/portfolio-preview/portfolio-preview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_portfolio_service__["a" /* PortfolioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PortfolioPreviewComponent);

var _a, _b, _c;
//# sourceMappingURL=portfolio-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/project-detail/project-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit {\n  width: 320px;\n  margin: 100px auto;\n}\nlabel {\n  display: block;\n  margin: 5px 0;\n}\ninput, textarea {\n  width: 300px;\n  height: 20px;\n  background-color: #2e2923;\n  display: block;\n  margin-bottom: 20px;\n  border: none;\n  font-size: 16px;\n  color: #e9e6c3;\n  text-indent: 20px;\n  word-wrap: normal;\n}\ninput:focus, textarea:focus {\n  border: none;\n}\ntextarea {\n  resize: none;\n}\ntextarea.height2 {\n  height: 40px;\n}\ntextarea.height7 {\n  height: 140px;\n}\n@media (min-width: 600px) {\n  .edit {\n    width: 100%;\n    float: left;\n    max-height: 700px;\n    overflow: scroll;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/project-detail/project-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"edit\">\n      <form (ngSubmit)=\"onSubmitEdit(editForm, project?._id )\" #editForm=\"ngForm\">\n          <label for=\"title\">Title</label>\n          <textarea class=\"height2\" (change)=\"editForm.ngSubmit.emit()\" value=\"{{project?.title}}\" type=\"text\" name=\"title\" [(ngModel)]=\"title\"></textarea>\n\n          <label for=\"start\">Starting Date</label>\n          <input (change)=\"editForm.ngSubmit.emit()\" value=\"{{project?.start | date:'yyyy-MM-dd' }}\" type=\"date\" name=\"start\" [(ngModel)]=\"start\">\n\n          <label for=\"end\">Ending Date</label>\n          <input (change)=\"editForm.ngSubmit.emit()\" value=\"{{project?.end | date:'yyyy-MM-dd' }}\" type=\"date\" name=\"end\" [(ngModel)]=\"end\">\n\n          <label for=\"surface\">Gross floor area</label>\n          <input (change)=\"editForm.ngSubmit.emit()\" value=\"{{ project?.surface }}\" type=\"number\" name=\"surface\" [(ngModel)]=\"surface\">\n\n          <label for=\"budget\">Total cost</label>\n          <input (change)=\"editForm.ngSubmit.emit()\" value=\"{{ project?.budget }}\" type=\"number\" name=\"budget\" [(ngModel)]=\"budget\">\n\n          <label for=\"client\">Client</label>\n          <input (change)=\"editForm.ngSubmit.emit()\" value=\"{{ project?.client }}\" type=\"text\" name=\"client\" [(ngModel)]=\"client\">\n\n          <label for=\"description\">Project description</label>\n          <textarea class=\"height7\"(change)=\"editForm.ngSubmit.emit()\" value=\"{{ project?.description }}\" type=\"text\" name=\"description\" [(ngModel)]=\"description\"></textarea>\n\n          <label for=\"location\">Project location</label>\n          <textarea class=\"height2\" (change)=\"editForm.ngSubmit.emit()\" value=\"{{ project?.location }}\" type=\"text\" name=\"location\" [(ngModel)]=\"location\"></textarea>\n\n          <label for=\"externalEngineer\">External Collabolator</label>\n          <textarea class=\"height2\" (change)=\"editForm.ngSubmit.emit()\" value=\"{{ project?.externalEngineer }}\" type=\"text\" name=\"externalEngineer\" [(ngModel)]=\"externalEngineer\"></textarea>\n\n          <label for=\"image1\">Photo 1</label>\n          <input (change)=\"editForm.ngSubmit.emit()\" value=\"{{ project?.image1 }}\" type=\"text\" name=\"image1\" [(ngModel)]=\"image1\">\n\n          <label for=\"image2\">Photo 2</label>\n          <input (change)=\"editForm.ngSubmit.emit()\" value=\"{{ project?.image2 }}\" type=\"text\" name=\"image2\" [(ngModel)]=\"image2\">\n\n          <label for=\"image3\">Photo 3</label>\n          <input (change)=\"editForm.ngSubmit.emit()\" value=\"{{ project?.image3 }}\" type=\"text\" name=\"image3\" [(ngModel)]=\"image3\">\n\n          <label for=\"image4\">Photo 4</label>\n          <input (change)=\"editForm.ngSubmit.emit()\" value=\"{{ project?.image4 }}\" type=\"text\" name=\"image4\" [(ngModel)]=\"image4\">\n      </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/project-detail/project-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_project_model__ = __webpack_require__("../../../../../src/app/shared/models/project.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_project_service__ = __webpack_require__("../../../../../src/app/shared/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(projectService, router, routes) {
        this.projectService = projectService;
        this.router = router;
        this.routes = routes;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        this.project = new __WEBPACK_IMPORTED_MODULE_2__shared_models_project_model__["a" /* Project */];
    };
    ProjectDetailComponent.prototype.onSubmitEdit = function (editForm, id) {
        var _this = this;
        this.projectService.edit(editForm.value, id).subscribe(function (project) {
            _this.project = project;
            _this.onChange.emit(_this.project);
        }, function (error) { _this.error = error; });
    };
    return ProjectDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_models_project_model__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_models_project_model__["a" /* Project */]) === "function" && _a || Object)
], ProjectDetailComponent.prototype, "project", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ProjectDetailComponent.prototype, "onChange", void 0);
ProjectDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-detail',
        template: __webpack_require__("../../../../../src/app/components/project/project-detail/project-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/project-detail/project-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_project_service__["a" /* ProjectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], ProjectDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=project-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/project-list/project-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*div {\n  margin: 20px auto;\n  width: 96%;\n  min-height: 100px;\n  border: 1px solid #e9e6c3;\n  padding: 5px;\n}*/\nh3 {\n  margin: 20px auto;\n  text-align: center;\n}\nbutton {\n  background-color: #2e2923;\n  color: #e9e6c3;\n  font-size: 30px;\n  border-width: 0;\n  margin-right: 20px;\n  margin-top: 10px;\n  padding: 0;\n  text-align: left;\n}\ntable {\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n  text-indent: 20px;\n  text-align: center;\n}\ntr {\n  border: 1px solid #26221e;\n  width: 96%;\n  height: 50px;\n  margin: 5px 2%;\n  padding: 10px;\n}\n\nth:last-of-type{\n  width: 15%;\n}\n@media (min-width: 600px) {\n  div {\n    margin: 20px 1% 20px 2%;\n    width: 30.6666%;\n    float: left;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/project-list/project-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3> PROJECTS </h3>\n    <table>\n      <tr *ngFor=\"let project of projects\">\n        <th (click)=\"showProject( project._id )\"> {{ project.title }}</th>\n        <th (click)=\"delete( project._id )\"> X </th>\n      </tr>\n\n    </table>\n    <button class=\"add\" (click)=\"addProject()\">+</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/project-list/project-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_project_service__ = __webpack_require__("../../../../../src/app/shared/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectListComponent = (function () {
    function ProjectListComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
        this.projects = [];
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.fetchList();
    };
    ProjectListComponent.prototype.fetchList = function () {
        var _this = this;
        this.projectService.getAll().subscribe(function (projects) { return _this.projects = projects; }, function (error) { return console.log(error); });
    };
    ProjectListComponent.prototype.addProject = function () {
        this.router.navigate(['/project/new']);
    };
    ProjectListComponent.prototype.showProject = function (id) {
        this.router.navigate(["/project/" + id]);
    };
    ProjectListComponent.prototype.delete = function (id) {
        var _this = this;
        this.projectService.remove(id)
            .subscribe(function (removed) {
            if (removed) {
                _this.projects = _this.projects.filter(function (project) { return project._id !== id; });
            }
            else {
                console.log("error: Project not found");
            }
        }, function (err) { return console.log(err); });
    };
    return ProjectListComponent;
}());
ProjectListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-list',
        template: __webpack_require__("../../../../../src/app/components/project/project-list/project-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/project-list/project-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProjectListComponent);

var _a, _b;
//# sourceMappingURL=project-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/project-new/project-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new {\n  width: 320px;\n  margin: 100px auto;\n}\n\nlabel {\n  display: block;\n  margin: 5px 0;\n}\ninput {\n  width: 300px;\n  background-color: #e9e6c3;\n  display: block;\n  margin-bottom: 20px;\n}\nbutton.save {\n  border-radius: 0%;\n  background-color: #e9e6c3;\n  width: 300px;\n  border: none;\n  font-size: 16px;\n  padding: 5px;\n  color: #2e2923;\n}\nbutton {\n  border-radius: 0%;\n  background-color: #e9e6c3;\n  width: 300px;\n  border: none;\n  font-size: 16px;\n  padding: 5px;\n  color: #2e2923;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/project-new/project-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"new\">\n      <form (ngSubmit)=\"onSubmitNew(newForm)\" #newForm=\"ngForm\">\n          <label for=\"title\">Title</label>\n          <input type=\"text\" name=\"title\" [(ngModel)]=\"title\">\n\n          <label for=\"start\">Starting Date</label>\n          <input type=\"date\" name=\"start\" [(ngModel)]=\"start\">\n\n          <label for=\"end\">Ending Date</label>\n          <input type=\"date\" name=\"end\" [(ngModel)]=\"end\">\n\n          <label for=\"surface\">Gross floor area</label>\n          <input type=\"number\" name=\"surface\" [(ngModel)]=\"surface\">\n\n          <label for=\"budget\">Total cost</label>\n          <input type=\"number\" name=\"budget\" [(ngModel)]=\"budget\">\n\n          <label for=\"client\">Client</label>\n          <input type=\"text\" name=\"client\" [(ngModel)]=\"client\">\n\n          <label for=\"description\">Project description</label>\n          <input type=\"text\" name=\"description\" [(ngModel)]=\"description\">\n\n          <label for=\"location\">Project location</label>\n          <input type=\"text\" name=\"location\" [(ngModel)]=\"location\">\n\n          <label for=\"externalEngineer\">External Collabolator</label>\n          <input type=\"text\" name=\"externalEngineer\" [(ngModel)]=\"externalEngineer\">\n\n          <label for=\"image1\">Photo 1</label>\n          <input type=\"text\" name=\"image1\" [(ngModel)]=\"image1\">\n\n          <label for=\"image2\">Photo 2</label>\n          <input type=\"text\" name=\"image2\" [(ngModel)]=\"image2\">\n\n          <label for=\"image3\">Photo 3</label>\n          <input type=\"text\" name=\"image3\" [(ngModel)]=\"image3\">\n\n          <label for=\"image4\">Photo 4</label>\n          <input type=\"text\" name=\"image4\" [(ngModel)]=\"image4\">\n\n          <button type=\"submit\" class=\"save\">Add</button>\n      </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/project-new/project-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_project_model__ = __webpack_require__("../../../../../src/app/shared/models/project.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_project_service__ = __webpack_require__("../../../../../src/app/shared/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';


var ProjectNewComponent = (function () {
    // public uploader: FileUploader;
    // feedback: string;
    function ProjectNewComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
        this.project = new __WEBPACK_IMPORTED_MODULE_2__shared_models_project_model__["a" /* Project */];
    }
    ProjectNewComponent.prototype.ngOnInit = function () {
        // this.uploader = new FileUploader({
        //         url: '/',
        //         headers: [{name:'Accept', value:'application/json'}],
        //         autoUpload: true,
        // });
        // this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
        // this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
    };
    // onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    //       let data = JSON.parse(response); //success server response
    //   }
    //
    //   onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    //       let error = JSON.parse(response); //error server response
    //   }
    ProjectNewComponent.prototype.onSubmitNew = function (newForm) {
        var _this = this;
        console.log(newForm.value);
        this.projectService.create(newForm.value).subscribe(function () {
            // this.uploader.uploadAll();
            newForm.reset();
            _this.router.navigate(['/dashboard']);
        }, function (error) { _this.error = error; });
    };
    return ProjectNewComponent;
}());
ProjectNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-new',
        template: __webpack_require__("../../../../../src/app/components/project/project-new/project-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/project-new/project-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProjectNewComponent);

var _a, _b;
//# sourceMappingURL=project-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/project-preview/project-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 600px) {\n  app-project {\n    width: 70%;\n    float: left;\n  }\n  app-project-detail  {\n    width: 30%;\n    float: left;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/project-preview/project-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<app-project [project]=\"project\"></app-project>\n<app-project-detail [project]=\"project\" (onChange)=\"onChangeProject($event)\"></app-project-detail>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/project-preview/project-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_project_service__ = __webpack_require__("../../../../../src/app/shared/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectPreviewComponent = (function () {
    function ProjectPreviewComponent(projectService, router, routes) {
        this.projectService = projectService;
        this.router = router;
        this.routes = routes;
    }
    ProjectPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params.subscribe(function (params) { return _this.fetchProject(params['id']); });
    };
    ProjectPreviewComponent.prototype.fetchProject = function (id) {
        var _this = this;
        this.projectService.get(id).subscribe(function (project) {
            _this.project = project;
        }, function (error) { return console.log(error); });
    };
    ProjectPreviewComponent.prototype.onChangeProject = function (project) {
        this.project = project;
    };
    return ProjectPreviewComponent;
}());
ProjectPreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-preview',
        template: __webpack_require__("../../../../../src/app/components/project/project-preview/project-preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/project-preview/project-preview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ProjectPreviewComponent);

var _a, _b, _c;
//# sourceMappingURL=project-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.background {\n  width: 100%;\n  overflow: scroll;\n}\ndiv.background::-webkit-scrollbar {\n    background-color: #2e2923;\n}\ndiv.background::-webkit-scrollbar-corner{\n  background-color: #2e2923;\n}\ndiv.paper {\n  width: 420px;\n  height: 600px;\n  background-color: black;\n  margin: 100px auto 20px auto;\n  padding: 10px;\n  color: black;\n\n}\ndiv.header {\n  width: 400px;\n  height: 150px;\n  background-color: white;\n  padding: 40px;\n  text-align: center;\n\n}\nh2 {\n  width: 260px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  border-bottom: 2px solid black;\n  text-align: center;\n  font-size: 24px;\n  padding-bottom: 10px;\n}\n\np{\n  font-size: 10px;\n  margin-top: -3px;\n}\ndiv.title {\n  width: 400px;\n  height: 20px;\n  background-color: black;\n  color: grey;\n  font-size: 10px;\n  padding: 7px;\n  text-align: center;\n  vertical-align: middle;\n}\ndiv.body {\n  width: 400px;\n  height: 410px;\n  background-color: white;\n  padding-top: 30px;\n}\ndiv.column1 {\n  width: 150px;\n  height: 360px;\n  margin-left: 40px;\n  margin-right: 10px;\n  /*background-color: lightgrey;*/\n  float: left;\n  display: block;\n}\ndiv.column2 {\n  width: 150px;\n  height: 360px;\n  margin-left: 10px;\n  margin-right: 40px;\n  /*background-color: lightgrey;*/\n  float: left;\n}\nh3 {\n  font-size: 10px;\n  background-color: white;\n  margin-top: -4px;\n}\n\nimg {\n  width: 100%;\n  border-radius: 5px;\n}\n.date {\n  color: grey;\n}\n@media (min-width: 600px) {\n  div.background {\n    margin-top: 100px;\n    width: 100%;\n    float: left;\n  }\n  div.paper {\n    margin: 20px auto;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"paper\">\n    <div class=\"header\">\n      <h2> {{ project?.title }} </h2>\n        <p> {{ project?.client }} </p>\n        <p> {{ project?.budget }} euros </p>\n        <p> {{ project?.surface }} sqm </p>\n    </div>\n\n    <div class=\"title\"> {{ project?.location }} </div>\n\n    <div class=\"body\">\n      <div class=\"column1\">\n        <img src= '{{ project?.image1 }}'>\n        <img src= '{{ project?.image2 }}'>\n        <img src= '{{ project?.image3 }}'>\n      </div>\n\n      <div class=\"column2\">\n          <h3><strong> PROJECT INFORMATION </strong></h3>\n<br>\n          <p> {{project?.title}} </p>\n          <p class=\"date\"> {{ project?.start.slice(0, 4) }} - {{ project?.end.slice(0, 4) }} </p>\n          <p> {{ project?.description }} </p>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/project/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_project_model__ = __webpack_require__("../../../../../src/app/shared/models/project.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectComponent = (function () {
    function ProjectComponent() {
    }
    return ProjectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_project_model__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_models_project_model__["a" /* Project */]) === "function" && _a || Object)
], ProjectComponent.prototype, "project", void 0);
ProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project',
        template: __webpack_require__("../../../../../src/app/components/project/project/project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project/project/project.component.css")]
    })
], ProjectComponent);

var _a;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  width: 320px;\n  margin: 100px auto;\n}\n\nlabel {\n  display: block;\n  margin: 5px 0;\n}\ninput {\n  width: 300px;\n  background-color: #e9e6c3;\n  display: block;\n  margin-bottom: 20px;\n}\nbutton {\n  border-radius: 0%;\n  background-color: #e9e6c3;\n  width: 300px;\n  border: none;\n  font-size: 16px;\n  padding: 5px;\n  color: #2e2923;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmitRegister(registerForm)\" #registerForm=\"ngForm\">\n\n    <h1>Register</h1>\n\n      <label for=\"email\">Email: </label>\n      <input type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" required>\n    \n      <label for=\"password\">Password: </label>\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required>\n\n    <button type=\"submit\" [disabled]=\"!registerForm.valid\">Register</button>\n    <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user_model__ = __webpack_require__("../../../../../src/app/shared/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user_model__["a" /* User */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmitRegister = function (registerForm) {
        var _this = this;
        this.authService.register(this.user).subscribe(function (user) {
            registerForm.reset();
            _this.router.navigate(['/dashboard']);
        }, function (error) { _this.error = error; });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clearfix{\n  display: block;\n  float: none;\n}\n.edit {\n  padding-left: 30px;\n}\ndiv.background::-webkit-scrollbar {\n    background-color: #2e2923;\n}\ndiv.background::-webkit-scrollbar-corner{\n  background-color: #2e2923;\n}\n\nlabel {\n  display: block;\n  margin: 5px 0;\n}\ninput, textarea {\n  width: 300px;\n  height: 20px;\n  background-color: #2e2923;\n  display: block;\n  margin-bottom: 20px;\n  border: none;\n  font-size: 16px;\n  color: #e9e6c3;\n  text-indent: 20px;\n  word-wrap: normal;\n}\ninput:focus, textarea:focus {\n  border: none;\n}\ntextarea::-webkit-scrollbar {\n    background-color: #2e2923;\n}\ntextarea::-webkit-scrollbar-corner{\n  background-color: #2e2923;\n}\ntextarea {\n  resize: none;\n}\ntextarea.height2 {\n  height: 40px;\n}\ntextarea.height7 {\n  height: 140px;\n}\nbutton {\n  background-color: #2e2923;\n  color: #e9e6c3;\n  font-size: 20px;\n  border: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"edit\">\n      <form (ngSubmit)=\"onSubmitEdit(editForm)\" #editForm=\"ngForm\">\n        <div class=\"personalData\">\n          <h3> PERSONAL INFORMATION </h3>\n          <label for=\"firstName\">First Name</label>\n          <textarea (change)=\"editForm.ngSubmit.emit()\" name=\"firstName\" [(ngModel)]=\"user.firstName\"></textarea>\n\n          <label for=\"lastName\">Last Name</label>\n          <textarea (change)=\"editForm.ngSubmit.emit()\" name=\"lastName\" [(ngModel)]=\"user.lastName\"></textarea>\n\n          <label for=\"title\">Title</label>\n          <textarea class=\"height2\"(change)=\"editForm.ngSubmit.emit()\" name=\"title\" [(ngModel)]=\"user.title\"></textarea>\n\n          <label for=\"email\">Email</label>\n          <textarea (change)=\"editForm.ngSubmit.emit()\" name=\"email\" [(ngModel)]=\"user.email\"></textarea>\n\n          <label for=\"phoneNo\">Phone No.</label>\n          <textarea (change)=\"editForm.ngSubmit.emit()\" name=\"phoneNo\" [(ngModel)]=\"user.phoneNo\"></textarea>\n\n          <label for=\"address\">Address</label>\n          <textarea (change)=\"editForm.ngSubmit.emit()\" name=\"address\" [(ngModel)]=\"user.address\"></textarea>\n\n          <label for=\"url\">Web</label>\n          <textarea (change)=\"editForm.ngSubmit.emit()\" name=\"url\" [(ngModel)]=\"user.url\"></textarea>\n\n          <label for=\"linkedIn\">LinkedIn</label>\n          <textarea (change)=\"editForm.ngSubmit.emit()\" name=\"linkedIn\" [(ngModel)]=\"user.linkedIn\"></textarea>\n\n          <label for=\"pinterest\">Pinterest</label>\n          <textarea (change)=\"editForm.ngSubmit.emit()\" name=\"pinterest\" [(ngModel)]=\"user.pinterest\"></textarea>\n\n          <label for=\"profile\">Profile</label>\n          <textarea class=\"height7\" (change)=\"editForm.ngSubmit.emit()\"  name=\"profile\" [(ngModel)]=\"user.profile\"></textarea>\n\n          <!-- <label for=\"interests\">Interests</label>\n          <textarea (change)=\"editForm.ngSubmit.emit()\" value=\"{{user?.interests}}\" name=\"interests\" [(ngModel)]=\"interests\"></textarea> -->\n        </div>\n\n        <div class=\"jobAndSchool\">\n\n          <h3> UNIVERSITY EDUCATION </h3>\n          <div *ngFor=\"let education of user?.education; let i = index\">\n            <button (click)=\"deleteEducation(i)\">x</button>\n\n            <p> {{ education.name }} </p>\n            <p> {{ education.title }} </p>\n            <p> {{ education.from | date:'yyyy-MM-dd' }} </p>\n            <p> {{ education.to | date:'yyyy-MM-dd' }} </p>\n            <p> {{ education.description }} </p>\n          </div>\n\n          <button class=\"add\" (click)=\"addEducation()\">+</button>\n\n          <form *ngIf=\"showEducation\"(ngSubmit)=\"onSubmitAddUniversity(addUniversityForm)\" #addUniversityForm=\"ngForm\">\n            <label for=\"name\"> University Name </label>\n            <textarea  name=\"name\" [(ngModel)]=\"name\"></textarea>\n\n            <label for=\"title\"> Title </label>\n            <textarea name=\"title\" [(ngModel)]=\"title\"></textarea>\n\n            <label for=\"from\"> From </label>\n            <input type=\"date\" name=\"from\" [(ngModel)]=\"from\">\n\n            <label for=\"to\"> To </label>\n            <input type=\"date\" name=\"to\" [(ngModel)]=\"to\">\n\n            <label for=\"description\"> Description </label>\n            <textarea name=\"description\" [(ngModel)]=\"description\"></textarea>\n\n            <button type=\"submit\">Add</button>\n          </form>\n\n          <h3> PROFESIONAL EXPERIENCE </h3>\n          <div *ngFor=\"let experience of user?.experience; let i = index\">\n            <button (click)=\"deleteJob(i)\">x</button>\n            <p> {{ experience.name }} </p>\n            <p> {{ experience.title }} </p>\n            <p> {{ experience.from | date:'yyyy-MM-dd' }} </p>\n            <p> {{ experience.to | date:'yyyy-MM-dd' }} </p>\n            <p> {{ experience.description }} </p>\n          </div>\n          <button class=\"add\" (click)=\"addJob()\">+</button>\n\n          <form *ngIf=\"showJob\" (ngSubmit)=\"onSubmitAddJob(addJobForm)\" #addJobForm=\"ngForm\">\n            <label for=\"name\"> Company Name </label>\n            <textarea  name=\"name\" [(ngModel)]=\"name\"></textarea>\n\n            <label for=\"title\"> Job Title </label>\n            <textarea name=\"title\" [(ngModel)]=\"title\"></textarea>\n\n            <label for=\"from\"> From </label>\n            <input type=\"date\" name=\"from\" [(ngModel)]=\"from\">\n\n            <label for=\"to\"> To </label>\n            <input type=\"date\" name=\"to\" [(ngModel)]=\"to\">\n\n            <label for=\"description\"> Job Description </label>\n            <textarea name=\"description\" [(ngModel)]=\"description\"></textarea>\n\n            <button type=\"submit\">Add</button>\n          </form>\n\n        </div>\n        <div class=\"skills\">\n          <h3> COMPLEMENTARY EDUCATION </h3>\n\n        </div>\n      </form>\n</div>\n<div class=\"clearfix\"> </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_user_model__ = __webpack_require__("../../../../../src/app/shared/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(userService, router, routes) {
        this.userService = userService;
        this.router = router;
        this.routes = routes;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showEducation = false;
        this.showJob = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__shared_models_user_model__["a" /* User */]();
    };
    UserComponent.prototype.onSubmitEdit = function (editForm) {
        this.syncUser();
    };
    UserComponent.prototype.onSubmitAddJob = function (addFormJob) {
        this.user['experience'].push(addFormJob.value);
        this.showJob = false;
        addFormJob.reset();
        this.syncUser();
    };
    UserComponent.prototype.onSubmitAddUniversity = function (addUniversityForm) {
        this.user['education'].push(addUniversityForm.value);
        this.showEducation = false;
        addUniversityForm.reset();
        this.syncUser();
    };
    UserComponent.prototype.addJob = function () {
        this.showJob = true;
    };
    UserComponent.prototype.addEducation = function () {
        this.showEducation = true;
    };
    UserComponent.prototype.deleteEducation = function (i) {
        this.user.education.splice(i, 1);
        this.syncUser();
    };
    UserComponent.prototype.deleteJob = function (i) {
        this.user.experience.splice(i, 1);
        this.syncUser();
    };
    UserComponent.prototype.syncUser = function () {
        var _this = this;
        this.userService.edit(this.user).subscribe(function (user) {
            _this.user = user;
            _this.onChange.emit(_this.user);
        }, function (error) { _this.error = error; });
    };
    return UserComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_models_user_model__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_models_user_model__["a" /* User */]) === "function" && _a || Object)
], UserComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], UserComponent.prototype, "onChange", void 0);
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], UserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/letter.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Letter; });
var Letter = (function () {
    function Letter() {
    }
    return Letter;
}());

//# sourceMappingURL=letter.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/portfolio.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Portfolio; });
var Portfolio = (function () {
    function Portfolio() {
    }
    return Portfolio;
}());

//# sourceMappingURL=portfolio.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/project.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
    }
    return Project;
}());

//# sourceMappingURL=project.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_api_service__ = __webpack_require__("../../../../../src/app/shared/services/base-api.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function (_super) {
    __extends(AuthService, _super);
    function AuthService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.user = JSON.parse(localStorage.getItem('user'));
        return _this;
    }
    AuthService.prototype.isAuthenticated = function () {
        // console.log(this.user);
        return this.user ? true : false;
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        var data = {
            email: user.email,
            password: user.password
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__base_api_service__["a" /* BaseApiService */].baseApi + "/login", JSON.stringify(data), __WEBPACK_IMPORTED_MODULE_5__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) {
            _this.authenticate(res.json());
            return _this.user;
        })
            .catch(_super.prototype.handleError);
    };
    AuthService.prototype.register = function (user) {
        var _this = this;
        var data = {
            email: user.email,
            password: user.password
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__base_api_service__["a" /* BaseApiService */].baseApi + "/register", JSON.stringify(data), __WEBPACK_IMPORTED_MODULE_5__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) {
            _this.authenticate(res.json());
            return _this.user;
        })
            .catch(_super.prototype.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__base_api_service__["a" /* BaseApiService */].baseApi + "/logout", null, __WEBPACK_IMPORTED_MODULE_5__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) {
            _this.user = null;
            localStorage.removeItem('user');
            return res.status === 204;
        })
            .catch(_super.prototype.handleError);
    };
    AuthService.prototype.authenticate = function (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        return this.user;
    };
    return AuthService;
}(__WEBPACK_IMPORTED_MODULE_5__base_api_service__["a" /* BaseApiService */]));
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/base-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BaseApiService = BaseApiService_1 = (function () {
    function BaseApiService() {
    }
    BaseApiService.prototype.sortBy = function (items, keys) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash__["orderBy"](items, keys);
    };
    BaseApiService.prototype.handleError = function (error) {
        if (!__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
            console.error(error);
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json());
    };
    return BaseApiService;
}());
BaseApiService.baseApi = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].base_api;
BaseApiService.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
BaseApiService.defaultOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: BaseApiService_1.defaultHeaders, withCredentials: true });
BaseApiService.defaultSort = ['updatedAt'];
BaseApiService = BaseApiService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BaseApiService);

var BaseApiService_1;
//# sourceMappingURL=base-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/letter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_api_service__ = __webpack_require__("../../../../../src/app/shared/services/base-api.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LetterService = LetterService_1 = (function (_super) {
    __extends(LetterService, _super);
    function LetterService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.letters = [];
        return _this;
    }
    LetterService.prototype.getAll = function () {
        return this.http.get(LetterService_1.baseEndPoint, __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    LetterService.prototype.get = function (id) {
        return this.http.get(LetterService_1.baseEndPoint + "/" + id, __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    LetterService.prototype.remove = function (id) {
        return this.http.delete(LetterService_1.baseEndPoint + "/" + id, __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.status === 204; })
            .catch(_super.prototype.handleError);
    };
    LetterService.prototype.create = function (letter) {
        var data = {
            title: letter.title,
            from: letter.from,
            to: letter.to,
            text: letter.text,
        };
        return this.http.post("" + LetterService_1.baseEndPoint, JSON.stringify(data), __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    LetterService.prototype.edit = function (letter, id) {
        var data = {
            title: letter.title,
            from: letter.from,
            to: letter.to,
            text: letter.text,
        };
        return this.http.put(LetterService_1.baseEndPoint + "/" + id, JSON.stringify(data), __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    return LetterService;
}(__WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */]));
LetterService.baseEndPoint = __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].baseApi + "/letter";
LetterService = LetterService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LetterService);

var LetterService_1, _a;
//# sourceMappingURL=letter.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/portfolio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_api_service__ = __webpack_require__("../../../../../src/app/shared/services/base-api.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioService = PortfolioService_1 = (function (_super) {
    __extends(PortfolioService, _super);
    function PortfolioService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.portfolios = [];
        return _this;
    }
    PortfolioService.prototype.getAll = function () {
        return this.http.get(PortfolioService_1.baseEndPoint, __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    PortfolioService.prototype.getProjects = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].baseApi + "/project", __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    PortfolioService.prototype.getLetters = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].baseApi + "/letter", __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    PortfolioService.prototype.get = function (id) {
        return this.http.get(PortfolioService_1.baseEndPoint + "/" + id, __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    PortfolioService.prototype.create = function (portfolio) {
        var data = {
            title: portfolio.title,
            projects: portfolio.projects,
            letters: portfolio.letters
        };
        return this.http.post("" + PortfolioService_1.baseEndPoint, JSON.stringify(data), __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    PortfolioService.prototype.remove = function (id) {
        return this.http.delete(PortfolioService_1.baseEndPoint + "/" + id, __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.status === 204; })
            .catch(_super.prototype.handleError);
    };
    PortfolioService.prototype.edit = function (portfolio, id) {
        var data = {
            title: portfolio.title,
            projects: portfolio.projects,
            letters: portfolio.letters
        };
        return this.http.put(PortfolioService_1.baseEndPoint + "/" + id, JSON.stringify(data), __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    return PortfolioService;
}(__WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */]));
PortfolioService.baseEndPoint = __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].baseApi + "/portfolio";
PortfolioService = PortfolioService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PortfolioService);

var PortfolioService_1, _a;
//# sourceMappingURL=portfolio.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_api_service__ = __webpack_require__("../../../../../src/app/shared/services/base-api.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = ProjectService_1 = (function (_super) {
    __extends(ProjectService, _super);
    function ProjectService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.projects = [];
        return _this;
    }
    ProjectService.prototype.getAll = function () {
        return this.http.get(ProjectService_1.baseEndPoint, __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    ProjectService.prototype.get = function (id) {
        return this.http.get(ProjectService_1.baseEndPoint + "/" + id, __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    ProjectService.prototype.remove = function (id) {
        return this.http.delete(ProjectService_1.baseEndPoint + "/" + id, __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.status === 204; })
            .catch(_super.prototype.handleError);
    };
    ProjectService.prototype.create = function (project) {
        var data = {
            title: project.title,
            start: project.start,
            end: project.end,
            surface: project.surface,
            budget: project.budget,
            externalEngineer: project.externalEngineer,
            client: project.client,
            description: project.description,
            location: project.location,
            image1: project.image1,
            image2: project.image2,
            image3: project.image3,
            image4: project.image4
        };
        return this.http.post("" + ProjectService_1.baseEndPoint, JSON.stringify(data), __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    ProjectService.prototype.edit = function (project, id) {
        var data = {
            title: project.title,
            start: project.start,
            end: project.end,
            surface: project.surface,
            budget: project.budget,
            externalEngineer: project.externalEngineer,
            client: project.client,
            description: project.description,
            location: project.location,
            image1: project.image1,
            image2: project.image2,
            image3: project.image3,
            image4: project.image4
        };
        return this.http.put(ProjectService_1.baseEndPoint + "/" + id, JSON.stringify(data), __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(_super.prototype.handleError);
    };
    return ProjectService;
}(__WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */]));
ProjectService.baseEndPoint = __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].baseApi + "/project";
ProjectService = ProjectService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProjectService);

var ProjectService_1, _a;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_api_service__ = __webpack_require__("../../../../../src/app/shared/services/base-api.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = UserService_1 = (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    UserService.prototype.get = function () {
        var _this = this;
        return this.http.get("" + UserService_1.baseEndPoint, __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) {
            _this.user = res.json();
            return _this.user;
        })
            .catch(_super.prototype.handleError);
    };
    UserService.prototype.edit = function (user) {
        var _this = this;
        return this.http.put("" + UserService_1.baseEndPoint, JSON.stringify(user), __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) {
            _this.user = res.json();
            return _this.user;
        })
            .catch(_super.prototype.handleError);
    };
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */]));
UserService.baseEndPoint = __WEBPACK_IMPORTED_MODULE_2__base_api_service__["a" /* BaseApiService */].baseApi + "/user";
UserService = UserService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var UserService_1, _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/assets/menu.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAYCAYAAABwZEQ3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABISURBVHja7JTBCQAwDAJN6f5LdZdCpzAz9GfgnOBQuXr3WCFZCgowI2C2pKIZYD4/g/SAQXrMhPSYCZgJMGXH/FcNAAD//wMAzRcIxecrkVgAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    base_api: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
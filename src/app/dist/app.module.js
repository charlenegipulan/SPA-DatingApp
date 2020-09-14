"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.tokenGetter = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var router_1 = require("@angular/router");
var angular_jwt_1 = require("@auth0/angular-jwt");
var app_component_1 = require("./app.component");
var nav_component_1 = require("./nav/nav.component");
var auth_service_1 = require("./_services/auth.service");
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var error_interceptor_1 = require("./_services/error.interceptor");
var animations_1 = require("@angular/platform-browser/animations");
var alertify_service_1 = require("./_services/alertify.service");
var member_list_component_1 = require("./members/member-list/member-list.component");
var lists_component_1 = require("./lists/lists.component");
var messages_component_1 = require("./messages/messages.component");
var routes_1 = require("./routes");
var member_card_component_1 = require("./members/member-card/member-card.component");
function tokenGetter() {
    return localStorage.getItem('token');
}
exports.tokenGetter = tokenGetter;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                home_component_1.HomeComponent,
                register_component_1.RegisterComponent,
                member_list_component_1.MemberListComponent,
                lists_component_1.ListsComponent,
                messages_component_1.MessagesComponent,
                member_card_component_1.MemberCardComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                dropdown_1.BsDropdownModule.forRoot(),
                router_1.RouterModule.forRoot(routes_1.appRoutes),
                angular_jwt_1.JwtModule.forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        allowedDomains: ['localhost:5000'],
                        disallowedRoutes: ['localhost:5000/api/auth']
                    }
                }),
            ],
            providers: [error_interceptor_1.ErrorInterceptorProvider, auth_service_1.AuthService, alertify_service_1.AlertifyService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

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
var tabs_1 = require("ngx-bootstrap/tabs");
var datepicker_1 = require("ngx-bootstrap/datepicker");
var router_1 = require("@angular/router");
var angular_jwt_1 = require("@auth0/angular-jwt");
var ngx_gallery_1 = require("@kolkov/ngx-gallery");
var ng2_file_upload_1 = require("ng2-file-upload");
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
var member_detail_component_1 = require("./members/member-detail/member-detail.component");
var auth_guard_1 = require("./_guards/auth.guard");
var user_service_1 = require("./_services/user.service");
var member_detail_resolver_1 = require("./_resolvers/member-detail.resolver");
var member_edit_resolver_1 = require("./_resolvers/member-edit.resolver");
var member_list_resolver_1 = require("./_resolvers/member-list.resolver");
var member_edit_component_1 = require("./members/member-edit/member-edit.component");
var prevent_unsaved_changes_guard_1 = require("./_guards/prevent-unsaved-changes.guard");
var photo_editor_component_1 = require("./members/photo-editor/photo-editor.component");
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
                member_detail_component_1.MemberDetailComponent,
                member_list_component_1.MemberListComponent,
                member_edit_component_1.MemberEditComponent,
                photo_editor_component_1.PhotoEditorComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                dropdown_1.BsDropdownModule.forRoot(),
                datepicker_1.BsDatepickerModule.forRoot(),
                tabs_1.TabsModule.forRoot(),
                router_1.RouterModule.forRoot(routes_1.appRoutes),
                ngx_gallery_1.NgxGalleryModule,
                ng2_file_upload_1.FileUploadModule,
                angular_jwt_1.JwtModule.forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        allowedDomains: ['localhost:5000'],
                        disallowedRoutes: ['localhost:5000/api/auth']
                    }
                }),
            ],
            providers: [
                error_interceptor_1.ErrorInterceptorProvider,
                auth_service_1.AuthService,
                alertify_service_1.AlertifyService,
                auth_guard_1.AuthGuard,
                user_service_1.UserService,
                member_detail_resolver_1.MemberDetailResolver,
                member_list_resolver_1.MemberListResolver,
                member_edit_resolver_1.MemberEditResolver,
                prevent_unsaved_changes_guard_1.PreventUnsavedChanges
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

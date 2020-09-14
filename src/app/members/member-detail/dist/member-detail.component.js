"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MemberDetailComponent = void 0;
var core_1 = require("@angular/core");
var MemberDetailComponent = /** @class */ (function () {
    //activated route allows us access to the id in members/4
    function MemberDetailComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        this.loadUser();
    };
    // members/4
    MemberDetailComponent.prototype.loadUser = function () {
        var _this = this;
        this.userService.getUser(+this.route.snapshot.params['id']).subscribe(function (user) {
            _this.user = user;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-member-detail',
            templateUrl: './member-detail.component.html',
            styleUrls: ['./member-detail.component.css']
        })
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());
exports.MemberDetailComponent = MemberDetailComponent;

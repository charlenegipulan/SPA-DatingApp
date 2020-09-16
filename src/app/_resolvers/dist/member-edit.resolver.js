"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MemberEditResolver = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var MemberEditResolver = /** @class */ (function () {
    function MemberEditResolver(userService, authService, router, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    MemberEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(operators_1.catchError(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/members']);
            return rxjs_1.of(null);
        }));
    };
    MemberEditResolver = __decorate([
        core_1.Injectable()
    ], MemberEditResolver);
    return MemberEditResolver;
}());
exports.MemberEditResolver = MemberEditResolver;

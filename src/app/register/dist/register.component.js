"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
        this.cancelRegister = new core_1.EventEmitter();
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(),
            password: new forms_1.FormControl(),
            confirmPassword: new forms_1.FormControl()
        });
    };
    RegisterComponent.prototype.register = function () {
        // this.authService.register(this.model).subscribe(() => {
        //   this.alertify.success('registration successful');
        // }, error => {
        //   this.alertify.error(error);
        // });
        console.log(this.registerForm.value);
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    __decorate([
        core_1.Output()
    ], RegisterComponent.prototype, "cancelRegister");
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;

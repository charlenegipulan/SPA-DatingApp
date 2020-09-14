"use strict";
exports.__esModule = true;
exports.appRoutes = void 0;
var home_component_1 = require("./home/home.component");
var member_list_component_1 = require("./members/member-list/member-list.component");
var messages_component_1 = require("./messages/messages.component");
var lists_component_1 = require("./lists/lists.component");
var auth_guard_1 = require("./_guards/auth.guard");
var member_detail_component_1 = require("./members/member-detail/member-detail.component");
exports.appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: 'members', component: member_list_component_1.MemberListComponent },
            { path: 'members/:id', component: member_detail_component_1.MemberDetailComponent },
            { path: 'messages', component: messages_component_1.MessagesComponent },
            { path: 'lists', component: lists_component_1.ListsComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

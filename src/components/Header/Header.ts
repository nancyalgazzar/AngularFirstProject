import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component({
    templateUrl: "./Header.html",
    styleUrl: "./Header.css",
    selector: "app-header",
    imports: [ RouterLink]
})

export class Header { }
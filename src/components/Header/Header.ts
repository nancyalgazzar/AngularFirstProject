import { Component } from "@angular/core";
import { Slider } from "../slider/slider";
import { RouterLink } from "@angular/router";


@Component({
    templateUrl: "./Header.html",
    styleUrl: "./Header.css",
    selector: "app-header",
    imports: [Slider, RouterLink]
})

export class Header { }
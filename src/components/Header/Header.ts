import { Component } from "@angular/core";
import { Slider } from "../slider/slider";


@Component({
    templateUrl: "./Header.html",
    styleUrl: "./Header.css",
    selector: "app-header",
    imports: [Slider]
})

export class Header { }
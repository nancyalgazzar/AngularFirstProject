import { Component } from "@angular/core";
import { TaskCard } from "../TaskCard/TaskCard";


@Component({
    templateUrl: "./TaskList.html",
    styleUrl: "./TaskList.css",
    selector: "tasklist-tag",
    imports:[TaskCard]
})

export class TaskList { }
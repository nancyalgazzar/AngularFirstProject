import { Component } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

enum Priority {
    NA, Low, Medium, High
}
enum Category {
    NA, Work, Personal, Study
}
class task {
    title: string;
    description: string;
    priority: Priority;
    date: Date;
    category: Category
    tags: string
    constructor(t: string = "", d: string = "", p: string, date: string = "", c: string, tag: string = "") {
        this.title = t
        this.description = d;

        this.category = Object.values(Category).includes(c) ? Category[c as keyof typeof Category] : Category.NA
        this.date = new Date(date)
        this.priority = Object.values(Priority).includes(c) ? Priority[c as keyof typeof Priority] : Priority.NA
        this.tags = tag
    }
    toString() {
        return ` Title: ${this.title} description: ${this.description}
        category:${this.category}`
    }
}
@Component({
    templateUrl: "./Form.html",
    styleUrl: "./Form.css",
    selector: "form-tag",
    imports: [NgbModule]
})

export class Form {
    title = ""
    des = ""
    date = ""
    cat = ""
    p = ""
    tag = ""
    registeredArr: task[] = []
    register() {
        console.log(this.title, this.des, this.p, this.date, this.cat, this.tag)
        let temp: task = new task(this.title, this.des, this.p, this.date, this.cat, this.tag)
        this.registeredArr.push(temp)
        console.log(this.registeredArr)
    }
    Title(e: string) {
        // const title = e.target as HTMLInputElement
        this.title = e
    }
    P(e: Event) {
        const temp = e.target as HTMLSelectElement
        this.p = temp.value
    }
    C(e: Event) {
        const temp = e.target as HTMLSelectElement
        this.cat = temp.value
    }
    Date(e: Event) {
        const temp = e.target as HTMLInputElement
        this.date = temp.value
    }
    Des(e: Event) {
        const temp = e.target as HTMLTextAreaElement
        this.des = temp.value
    }
    Tag(e: Event) {
        const temp = e.target as HTMLTextAreaElement
        this.tag = temp.value
    }
}
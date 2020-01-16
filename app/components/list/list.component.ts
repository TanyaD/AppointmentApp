import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html"
})
export class ListComponent implements OnInit {
  @Input() aptList;
  @Output() deleteEvt = new EventEmitter();
  @Output() updateEvt = new EventEmitter();

  handleDelete(theApt: object) {
    this.deleteEvt.emit(theApt);
  }

  handleUpdate(theApt: object, labelName: string, newValue: string) {
    this.updateEvt.emit({
      theApt: theApt,
      labelName: labelName,
      newValue: newValue
    });
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
  @Input() orderBy;
  @Input() orderType;
  @Output() queryEvt = new EventEmitter<string>();
  @Output() orderEvt = new EventEmitter();

  handleQuery(query: string) {
    this.queryEvt.emit(query);
  }

  handleSort(orderItems: object) {
    this.orderBy = orderItems.orderBy;
    this.orderType = orderItems.orderType;
    this.orderEvt.emit(orderItems);
  }

  constructor() {}

  ngOnInit() {}
}

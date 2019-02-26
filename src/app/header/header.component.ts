import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //EventEmitter use in directives and components to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance//

  //@Output to make it listenable from the parents component//
  @Output() featureSelected = new EventEmitter<string>();


  // Select method for navigation//
  onSelect(feature: string) {
    this.featureSelected.emit(feature)
  }
  
 ngOnInit() {

 }

}

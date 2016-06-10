import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../../model/address.interface';
@Component({
  moduleId: module.id,
  selector: 'address',
  templateUrl: 'address.component.html'
})
export class AddressComponent implements OnInit {
  @Input("address") public address: Address;

  constructor() { }

  ngOnInit() {
  }

}

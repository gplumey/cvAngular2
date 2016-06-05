import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../domain/address.interface';
@Component({
  moduleId: module.id,
  selector: 'address',
  templateUrl: 'address.component.html',
  styleUrls: ['address.component.css']
})
export class AddressComponent implements OnInit {
  @Input("address") public address: Address;

  constructor() { }

  ngOnInit() {
  }

}

import {Component} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private firestore: AngularFirestore) {
  }

  customers: any[];

  ngOnInit() {

    this.firestore.collection("customers")
      .valueChanges().pipe(
        delay(3000)
      )
      .subscribe(customers => this.customers = customers);

  }

}

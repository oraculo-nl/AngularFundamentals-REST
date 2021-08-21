import { Component, OnInit } from '@angular/core';
import { Person } from '../domain/person';
import { StarWarsService } from '../service/star-wars.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private starWarsService: StarWarsService) { }

  people:any[] = [];

  ngOnInit(): void {
    this.starWarsService.getAllNames().subscribe((data:any) => {this.people = data.results });
  }
  newPerson(name: string): void {
    let person = new Person(name);
    this.starWarsService.createPerson(person).subscribe(() => { console.log('person created') });
  }

}

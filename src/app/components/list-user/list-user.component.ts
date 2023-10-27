import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../../services/list-user.service';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUSERComponent implements OnInit {
  displayedColumns: string[] = ['position']; // Nombres de las columnas
  dataSource = new MatTableDataSource<any>();
  valor: any;
  visible: boolean = false
  items: any = [];
  expandedIndex = 0;
  users: any[] = [];
  combinedData:any
  constructor(public lista: ListUserService) {  }

  ngOnInit() {
  

    this.lista
      .getDate()
      .pipe(
        map((data: any) => {
          data.forEach(
            (item: any) => (item.due_on = new Date(item.due_on).getTime())
          );

          data.sort((a: any, b: any) => b.due_on - a.due_on);

          const top5Data = data.slice(0, 5);

          // Convierte las fechas nuevamente a objetos Date
          top5Data.forEach(
            (item: any) => (item.due_on = new Date(item.due_on))
          );

          return top5Data;
        })
      )
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.items = data;
          console.log(this.items);
         
        },
        error: (e) => {
          console.log(e);
        },
      });

    //post
    this.lista.getPost().subscribe({
      next: (value: any) => {
        this.valor = value;
      },
      error: (e) => {
        console.log(e);
      },
    });

    this.lista.getUser().subscribe({
      next: (a: any) => {
        const newData = a.filter((x: any) => (x.status = 'active'));
        this.dataSource = newData;
        
      },
      error: (e) => {
        console.log(e);
      },
    });

   
  }

  combinedDate() {
    this.visible = true
    console.log(this.valor);
    console.log(this.items);
  
    this.items.forEach((item:any) => {
      const matchingUser = this.valor.find((user:any) => user.user_id === item.user_id);
      if (matchingUser) {
        item.body = matchingUser.body;
      }
    });
  
    console.log(this.items);
  }
  
  
    
  
  
}

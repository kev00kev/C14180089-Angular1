import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  user = 0;
  index = 0;
  a = 0;
  b = 0;
  counter = 1;
  board: string[][] = [
     ["*", "*", "*", "*", "*"],
     ["*", "*", "*", "*", "*"],
     ["*", "*", "*", "*", "*"],
     ["*", "*", "*", "*", "*"],
     ["*", "*", "*", "*", "*"]
];
EventClick(){
  
  if (this.a > 0 && this.a < 6 && this.b > 0 && this.b < 6){
      if(this.board[this.a-1][this.b-1] == "*"){
          alert('Isi yang lain !!!')
      }
      else
      {
            if (this.counter % 2 != 0){
              this.user = 1;
            }
            else
            {
              this.user = 0;

            }
            this.counter = this.counter + 1;
      }
  }

}

}

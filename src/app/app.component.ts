import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = ', You Must Play';
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
      if(this.board[this.a-1][this.b-1] != "*"){
          alert('Isi yang lain !!!')
      }
      else
      {
            if (this.counter % 2 != 0){
              this.board[this.a-1][this.b-1] = "0";
              this.user = 1;
            }
            else
            {
              this.board[this.a-1][this.b-1] = "1";
              this.user = 0;

            }
            this.counter = this.counter + 1;
      }
  }
if(
   this.board[0][0] == "0" &&
   this.board[0][1] == "0" &&
   this.board[0][2] == "0" &&
   this.board[0][3] == "0" ||

   this.board[1][0] == "0" &&
   this.board[1][1] == "0" &&
   this.board[1][2] == "0" &&
   this.board[1][3] == "0" ||

   this.board[2][0] == "0" &&
   this.board[2][1] == "0" &&
   this.board[2][2] == "0" &&
   this.board[2][3] == "0" ||

   this.board[3][0] == "0" &&
   this.board[3][1] == "0" &&
   this.board[3][2] == "0" &&
   this.board[3][3] == "0" ||

   this.board[4][0] == "0" &&
   this.board[4][1] == "0" &&
   this.board[4][2] == "0" &&
   this.board[4][3] == "0" ||

   this.board[0][1] == "0" &&
   this.board[0][2] == "0" &&
   this.board[0][3] == "0" &&
   this.board[0][4] == "0" ||

   this.board[1][1] == "0" &&
   this.board[1][2] == "0" &&
   this.board[1][3] == "0" &&
   this.board[1][4] == "0" ||

   this.board[2][1] == "0" &&
   this.board[2][2] == "0" &&
   this.board[2][3] == "0" &&
   this.board[2][4] == "0" ||

   this.board[3][1] == "0" &&
   this.board[3][2] == "0" &&
   this.board[3][3] == "0" &&
   this.board[3][4] == "0" ||

   this.board[4][1] == "0" &&
   this.board[4][2] == "0" &&
   this.board[4][3] == "0" &&
   this.board[4][4] == "0" ||

   this.board[0][0] == "0" &&
   this.board[1][0] == "0" &&
   this.board[2][0] == "0" &&
   this.board[3][0] == "0" ||

   this.board[0][1] == "0" &&
   this.board[1][1] == "0" &&
   this.board[2][1] == "0" &&
   this.board[3][1] == "0" ||

   this.board[0][2] == "0" &&
   this.board[1][2] == "0" &&
   this.board[2][2] == "0" &&
   this.board[3][2] == "0" ||

   this.board[0][3] == "0" &&
   this.board[1][3] == "0" &&
   this.board[2][3] == "0" &&
   this.board[3][3] == "0" ||

   this.board[0][4] == "0" &&
   this.board[1][4] == "0" &&
   this.board[2][4] == "0" &&
   this.board[3][4] == "0" ||

   this.board[1][0] == "0" &&
   this.board[2][0] == "0" &&
   this.board[3][0] == "0" &&
   this.board[4][0] == "0" ||

   this.board[1][1] == "0" &&
   this.board[2][1] == "0" &&
   this.board[3][1] == "0" &&
   this.board[4][1] == "0" ||

   this.board[1][2] == "0" &&
   this.board[2][2] == "0" &&
   this.board[3][2] == "0" &&
   this.board[4][2] == "0" ||

   this.board[1][3] == "0" &&
   this.board[2][3] == "0" &&
   this.board[3][3] == "0" &&
   this.board[4][3] == "0" ||

   this.board[1][4] == "0" &&
   this.board[2][4] == "0" &&
   this.board[3][4] == "0" &&
   this.board[4][4] == "0" 
  )
  {
    alert("Player 0 Menang !!!");
  }
  

  else if(
   this.board[0][0] == "1" &&
   this.board[0][1] == "1" &&
   this.board[0][2] == "1" &&
   this.board[0][3] == "1" ||

   this.board[1][0] == "1" &&
   this.board[1][1] == "1" &&
   this.board[1][2] == "1" &&
   this.board[1][3] == "1" ||

   this.board[2][0] == "1" &&
   this.board[2][1] == "1" &&
   this.board[2][2] == "1" &&
   this.board[2][3] == "1" ||

   this.board[3][0] == "1" &&
   this.board[3][1] == "1" &&
   this.board[3][2] == "1" &&
   this.board[3][3] == "1" ||

   this.board[4][0] == "1" &&
   this.board[4][1] == "1" &&
   this.board[4][2] == "1" &&
   this.board[4][3] == "1" ||

   this.board[0][1] == "1" &&
   this.board[0][2] == "1" &&
   this.board[0][3] == "1" &&
   this.board[0][4] == "1" ||

   this.board[1][1] == "1" &&
   this.board[1][2] == "1" &&
   this.board[1][3] == "1" &&
   this.board[1][4] == "1" ||

   this.board[2][1] == "1" &&
   this.board[2][2] == "1" &&
   this.board[2][3] == "1" &&
   this.board[2][4] == "1" ||

   this.board[3][1] == "1" &&
   this.board[3][2] == "1" &&
   this.board[3][3] == "1" &&
   this.board[3][4] == "1" ||

   this.board[4][1] == "1" &&
   this.board[4][2] == "1" &&
   this.board[4][3] == "1" &&
   this.board[4][4] == "1" ||

   this.board[0][0] == "1" &&
   this.board[1][0] == "1" &&
   this.board[2][0] == "1" &&
   this.board[3][0] == "1" ||

   this.board[0][1] == "1" &&
   this.board[1][1] == "1" &&
   this.board[2][1] == "1" &&
   this.board[3][1] == "1" ||

   this.board[0][2] == "1" &&
   this.board[1][2] == "1" &&
   this.board[2][2] == "1" &&
   this.board[3][2] == "1" ||

   this.board[0][3] == "1" &&
   this.board[1][3] == "1" &&
   this.board[2][3] == "1" &&
   this.board[3][3] == "1" ||

   this.board[0][4] == "1" &&
   this.board[1][4] == "1" &&
   this.board[2][4] == "1" &&
   this.board[3][4] == "1" ||

   this.board[1][0] == "1" &&
   this.board[2][0] == "1" &&
   this.board[3][0] == "1" &&
   this.board[4][0] == "1" ||

   this.board[1][1] == "1" &&
   this.board[2][1] == "1" &&
   this.board[3][1] == "1" &&
   this.board[4][1] == "1" ||

   this.board[1][2] == "1" &&
   this.board[2][2] == "1" &&
   this.board[3][2] == "1" &&
   this.board[4][2] == "1" ||

   this.board[1][3] == "1" &&
   this.board[2][3] == "1" &&
   this.board[3][3] == "1" &&
   this.board[4][3] == "1" ||

   this.board[1][4] == "1" &&
   this.board[2][4] == "1" &&
   this.board[3][4] == "1" &&
   this.board[4][4] == "1" 
  )
  {
    alert("Player 1 Menang !!!");
  }
else{
  alert("Draw !!!")
}
}

}

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <h1>Welcome to {{name}}</h1>
            <p>Email : {{email}}
            `,
})
export class AppComponent 
 {
    name = 'MyOralVillage'; 
    email = 'oralwiki@gmail.com';

  
}

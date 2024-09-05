import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { CaroselComponent } from './component/carosel/carosel.component';
import { DatabindingComponent } from './component/databinding/databinding.component';
import { BodyComponent } from './component/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,NavbarComponent,CategoriesComponent,CaroselComponent,
    DatabindingComponent,BodyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}

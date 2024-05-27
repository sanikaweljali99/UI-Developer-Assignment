import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProfileComponent, SubscriptionComponent, HeaderComponent]
})



export class AppComponent {
  title = 'angular-assignment';
}

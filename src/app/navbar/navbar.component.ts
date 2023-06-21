import { Component } from '@angular/core';
import { faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faLinkedIn = faLinkedin;
}

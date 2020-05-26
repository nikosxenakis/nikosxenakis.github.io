import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	facebookPage = 'https://www.facebook.com/xenis656';
	twitterPage = 'https://twitter.com/nikolaosxenakis';
	linkedinPage = 'https://www.linkedin.com/in/nikosxenakis';
	instagramPage = 'https://www.instagram.com/nikosxenakis/';

	CVLink = 'https://github.com/nikosxenakis/nikosxenakis-website/blob/master/assets/resume.pdf';
	imageInLexis = 'assets/ImagInLexis/ImagInLexis.zip';
	iceEditor = 'https://github.com/nikosxenakis/ICE_Editor';
}

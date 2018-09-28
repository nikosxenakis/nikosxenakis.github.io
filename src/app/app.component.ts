import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	facebookPage = 'https://www.facebook.com/xenis656';
	twitterPage = 'https://twitter.com/NikosXenakis1?lang=el';
	linkedinPage = 'https://www.linkedin.com/in/nikos-xenakis-875811109/';
	instagramPage = 'https://www.instagram.com/nikosxenakis/';

	CVLink = 'https://github.com/nikosxenakis/cv/blob/master/Xenakis_Nikos_CV.pdf';
	imageInLexis = 'assets/ImagInLexis/ImagInLexis.zip';
	iceEditor = 'https://github.com/nikosxenakis/ICE_Editor';
}

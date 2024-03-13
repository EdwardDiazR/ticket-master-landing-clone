import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FeedPromotionCardComponent } from '../../components/promotions/feed-promotion-card/feed-promotion-card.component';
import { Evento } from '../../Models/evento';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass, formatDate } from '@angular/common';
import { interval } from 'rxjs';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    FeedPromotionCardComponent,
    NgClass,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  constructor(private _titleServie: Title) {
    _titleServie.setTitle('Ticket Master Clone');
  }

  SuggestedEvents: Evento[] = [];
  ActualSuggestedEvent!: Evento;
  ActualIndex: number = 0;
  isInterval: boolean = true;
  today!:Date

  hoveredEvent!: number | null;
  hoverEvent(i: number) {
    this.hoveredEvent = i;
  }

  unhoverEvent(): void {
    this.hoveredEvent = null;
  }
  showNextEvent() {
    // this.ActualSuggestedEvent = this.SuggestedEvents[this.ActualIndex];
    this.ActualIndex += 1;
  }

  sel(i: number) {
    this.ActualIndex = i;
    this.isInterval = false;
  }

  

  ngOnInit(): void {
    

    this.SuggestedEvents.push({
      id: 1,
      eventName: 'Most Wanted Tour',
      eventArtist: 'Bad Bunny',
      imageUrl:
        'https://s1.ticketm.net/dam/a/015/612e515b-30ff-4272-847a-83ed8295d015_SOURCE?auto=webp',
      category: 'Concert',
      description:
        'El #1 Bad Bunny llega con su gira de trap, a botar fuego en el escenario',
    });
    this.SuggestedEvents.push({
      id: 6,
      eventName: 'The Eras Tour',
      eventArtist: 'Taylor Swift',
      imageUrl: 'https://i.ytimg.com/vi/KudedLV0tP0/maxresdefault.jpg',
      category: 'Concert',
      description: 'The Eras Tour By Taylor Swift',
    });
    this.SuggestedEvents.push({
      id: 2,
      eventName: 'Suenos',
      eventArtist: 'Jay Wheeler',
      imageUrl:
        'https://s1.ticketm.net/dam/a/80e/7e7a7182-1eb5-415c-b484-12485af1680e_SOURCE?auto=webp',
      category: 'Concert',
      description: 'Jay Wheeler & todos sus exitos romanticos',
    });
    this.SuggestedEvents.push({
      id: 3,
      eventName: 'Reggaeton de la mata',
      eventArtist: 'Jowell & Randy',
      imageUrl:
        'https://s1.ticketm.net/dam/a/1ea/f803e53a-ba4a-4d2d-aa61-a4cfaf5951ea_SOURCE',
      category: 'Concert',
      description:
        'Jowell & Randy con su tradicional sonido del reggaton original. Estas listo para el perreo?',
    });
    this.SuggestedEvents.push({
      id: 4,
      eventName: 'Los compadres',
      eventArtist: 'Los Tigres Del Norte',
      imageUrl:
        'https://s1.ticketm.net/dam/a/bc8/d2f07a47-3a5a-4d7a-88a6-0c0c47da4bc8_SOURCE',
      category: 'Concert',
      description:
        'Vuelven los tigres del norte con su tradicional sonido, a llevar la musica mexicana hasta RD',
    });
    this.SuggestedEvents.push({
      id: 5,
      eventName: 'Red Sox vs Tampa Bay',
      eventArtist: 'MLB',
      imageUrl:
        'https://adminventas.uepatickets.com/Modules/Ticketing/eventimages/13866_tn.jpg',
      category: 'Sports',
      description:
        'La experiencia MLB llega al Estadio Quisqueya, para el disfrute de todo los amantes del beisbol.',
    });
    this.SuggestedEvents.push({
      id: 7,
      eventName: 'Nets vs Lakers',
      eventArtist: 'NBA',
      imageUrl:
        'https://s1.ticketm.net/dam/a/593/de5707a0-fc3b-4ad8-bdfc-4f880b488593_SOURCE?auto=webp',
      category: 'Sports',
      description:
        'La experiencia NBA',
    });

    if (this.isInterval) {
      setInterval(() => {
        this.showNextEvent();
        if (this.ActualIndex >= this.SuggestedEvents.length) {
          this.ActualIndex = 0;
        }
        console.log(this.ActualIndex, this.SuggestedEvents.length);
      }, 5000);
    }
  }
}

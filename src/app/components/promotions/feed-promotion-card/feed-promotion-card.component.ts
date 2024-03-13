import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Evento } from '../../../Models/evento';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-feed-promotion-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './feed-promotion-card.component.html',
  styleUrl: './feed-promotion-card.component.css',
})
export class FeedPromotionCardComponent implements OnInit ,OnDestroy{
  constructor() {}
  @Input() EventInfo!: Evento;
  a!: String;

  ngOnInit(): void {
    console.log('se monto un nuevo ');

    this.a = `background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5) 50%,
      transparent 80%
    ),url(${this.EventInfo.imageUrl}); object-fit:scale-down`;
  }

  ngOnDestroy(): void {
    
    console.log("se destruyo");
    
  }
}

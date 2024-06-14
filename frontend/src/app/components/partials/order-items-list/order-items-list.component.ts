import { Component, Input } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-items-list',
  standalone: true,
  imports: [CommonModule,RouterLink,NgOptimizedImage],
  templateUrl: './order-items-list.component.html',
  styleUrl: './order-items-list.component.css'
})
export class OrderItemsListComponent {
  @Input() order!: Order;
}

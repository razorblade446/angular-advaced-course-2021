import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  constructor(private sidebarService: SidebarService) {}

  get menuItems() {
    return this.sidebarService.menu;
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Configs, LoadAllConfigsResponse } from '../configs.model';
import { ConfigsService } from '../configs.service';

@Component({
  selector: 'arc-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.scss'],
})
export class ConfigListComponent implements OnInit {
  configList = [] as Configs[];
  constructor(private configsService: ConfigsService) {}

  ngOnInit() {
    this.onLoadAllConfigs();
  }

  async onLoadAllConfigs() {
    this.configsService.loadAllConfigs().subscribe((response) => {
      console.log(response);
      this.configList = response.configList;
      console.log('Configs: ' + this.configList);
    });
  }
}

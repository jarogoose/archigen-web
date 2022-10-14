import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Configs, SaveConfigsRequest } from './configs.model';
import { ConfigsService } from './configs.service';

@Component({
  selector: 'arc-configs',
  templateUrl: './configs.page.html',
  styleUrls: ['./configs.page.scss'],
})
export class ConfigsPage implements OnInit {
  configList = [] as Configs[];

  constructor(private configsService: ConfigsService) {}

  ngOnInit() {
    this.onLoadAllConfigs();
  }

  onLoadAllConfigs() {
    this.configsService.loadAllConfigs().subscribe((response) => {
      console.log(response);
      this.configList = response.configList;
    });
  }
}

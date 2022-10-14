import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaveConfigsRequest } from './configs.model';
import { ConfigsService } from './configs.service';

@Component({
  selector: 'arc-configs',
  templateUrl: './configs.page.html',
  styleUrls: ['./configs.page.scss'],
})
export class ConfigsPage implements OnInit {
  configForm = {} as FormGroup;

  constructor(
    private configsService: ConfigsService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.configForm = this.fb.group({
      projectName: this.fb.control('', Validators.required),
      artefact: this.fb.control('', Validators.required),
      project: this.fb.control('', Validators.required),
      baseDir: this.fb.control('', Validators.required),
      author: this.fb.control('', Validators.required),
    });
  }

  onConfigsSave() {
    const config: SaveConfigsRequest = {
      projectName: this.configForm.value.projectName,
      artefact: this.configForm.value.artefact,
      project: this.configForm.value.project,
      baseDir: this.configForm.value.baseDir,
      author: this.configForm.value.author,
    };
    this.configsService.saveConfigs(config);
  }
}

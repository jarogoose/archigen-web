export interface Configs {
  id: string;
  name: string;
  artefact: string;
  project: string;
  baseDir: string;
  author: string;
}

export interface SaveConfigsRequest {
  projectName: string;
  artefact: string;
  project: string;
  baseDir: string;
  author: string;
}

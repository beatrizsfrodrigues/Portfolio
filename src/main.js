import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import json from "./data.json";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

import { useProjectStore } from "@/stores/Project";

const projectStore = useProjectStore();

let projects = json.projects;

let project = projectStore.getProjects;
projects.forEach((prj) => {
  if (project.find((p) => p.id == prj.id)) {
    console.log("project has already been added");
  } else {
    projectStore.addProject(prj);
  }
});

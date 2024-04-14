import { defineStore } from "pinia";
import { useLocalStorage, useSessionStorage, useStorage } from "@vueuse/core";

export const useProjectStore = defineStore("project", {
  state: () => ({
    projects: useStorage("projects", []),
  }),
  getters: {
    getProjects() {
      return this.projects;
    },

    getProjectsImages() {
      let projects = this.projects;
      let images = [];

      projects.forEach((project) => {
        images.push(project.photo);
      });

      return images;
    },
  },
  actions: {
    addProject(project) {
      this.projects.push(project);
    },
  },
});

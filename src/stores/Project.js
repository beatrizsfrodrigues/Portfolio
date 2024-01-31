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
  },
  actions: {
    addProject(project) {
      this.projects.push(project);
    },
  },
});

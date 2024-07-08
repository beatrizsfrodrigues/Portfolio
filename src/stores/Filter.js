import { defineStore } from "pinia";
import { useLocalStorage, useSessionStorage, useStorage } from "@vueuse/core";

export const useFilterStore = defineStore("filter", {
  state: () => ({
    filters: useStorage("filters", []),
  }),
  getters: {
    getFilters() {
      return this.filters;
    },
  },
  actions: {
    addFilter(filter) {
      this.filters.push(filter);
    },
  },
});

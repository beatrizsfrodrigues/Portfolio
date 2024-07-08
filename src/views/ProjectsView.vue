<template>
  <div id="border">
    <div id="scroll">
      <div v-for="project in this.projects">
        <div class="card">
          <div class="topCard">
            <div class="imgBorder">
              <img :src="project.photo" alt="" class="cardImg" />
            </div>
            <div>
              <h3>{{ project.name }}</h3>
              <div v-for="filter in this.filters">
                <ul v-for="f in project.filter">
                  <li v-if="f == filter.id">{{ filter.name }}</li>
                </ul>
              </div>
            </div>
          </div>
          <router-link
            :to="{
              name: 'project',
              params: {
                id: project.id,
              },
            }"
            ><button class="btnCard">Learn more</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProjectStore } from "@/stores/Project";
import { useFilterStore } from "@/stores/FIlter";
export default {
  setup() {
    const projectStore = useProjectStore();
    const filterStore = useFilterStore();

    return { projectStore, filterStore };
  },

  data() {
    return {
      projects: [],
      filters: [],
    };
  },

  async created() {
    if (this.projects == undefined || this.projects == "") {
      this.projects = this.projectStore.getProjects;
    }

    if (this.filters == undefined || this.filters == "") {
      this.filters = this.filterStore.getFilters;
    }
  },
};
</script>

<style>
@import "../assets/projects.css";
</style>

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
              <ul>
                <li>{{ project.filter }}</li>
              </ul>
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
export default {
  setup() {
    const projectStore = useProjectStore();

    return { projectStore };
  },

  data() {
    return {
      projects: [],
    };
  },

  async created() {
    if (this.projects == undefined || this.projects == "") {
      this.projects = this.projectStore.getProjects;
    }

    let r = document.querySelector(":root");
  },
};
</script>

<style>
@import "../assets/projects.css";
</style>

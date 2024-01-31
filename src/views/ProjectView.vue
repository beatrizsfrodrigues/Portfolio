<template>
  <div id="page">
    <div id="borderP">
      <div id="scrollP">
        <div id="card">
          <h2>{{ this.project.name }}</h2>
          <img :src="project.photo" alt="" />
          <p>{{ this.project }}</p>
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
      project: {},
    };
  },

  async created() {
    if (this.projects == undefined || this.projects == "") {
      this.projects = this.projectStore.getProjects;
    }

    this.project = this.projects.find(
      (project) => project.id == this.$route.params.id
    );

    console.log(this.project.photo);

    let r = document.querySelector(":root");
    r.style.setProperty(
      "--color-background-project",
      `${this.project.colorPage.background}`
    );
    r.style.setProperty(
      "--color-backgroundCard-project",
      `${this.project.colorPage.backgroundCard}`
    );
    r.style.setProperty(
      "--color-shadow-project",
      `${this.project.colorPage.shadow}`
    );
    r.style.setProperty(
      "--color-borderText-project",
      `${this.project.colorPage.borderText}`
    );
  },
};
</script>

<style>
@import "../assets/project.css";
</style>

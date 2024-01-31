<template>
  <div id="border">
    <div id="left">
      <div class="top">
        <div class="borderBox">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg"
            id="profilePic"
          />
        </div>
        <div id="info">
          <h2 id="name">BEATRIZ RODRIGUES</h2>
          <!-- <hr /> -->
          <div id="topBottom">
            <ul>
              <li>Student at ESMAD</li>
              <li>TSIW degree</li>
              <li>19 years old</li>
            </ul>
          </div>
          <!-- <hr id="hrBottom" /> -->
        </div>
      </div>
      <p id="text">
        I'm a 19 year old college student studying web programming and design.
        I'm in my third year of college in the Undergraduate Degree in Web
        Information Systems and Technologies course at ESMAD.
      </p>
      <div id="socialDiv">
        <img
          src="https://static-00.iconduck.com/assets.00/logo-social-media-tiktok-icon-256x256-0vdcnwtl.png"
          alt=""
          class="socialMedia"
        />
        <img
          src="https://static-00.iconduck.com/assets.00/logo-social-media-tiktok-icon-256x256-0vdcnwtl.png"
          alt=""
          class="socialMedia"
        />
        <img
          src="https://static-00.iconduck.com/assets.00/logo-social-media-tiktok-icon-256x256-0vdcnwtl.png"
          alt=""
          class="socialMedia"
        />
      </div>
    </div>

    <div id="right">
      <h2 id="titleRight">GET TO KNOW ME AND MY WORK!</h2>
      <div class="scroll">
        <div class="m-scroll">
          <span
            ><img
              src="https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png"
              class="slideImgs"
          /></span>
          <span
            ><img
              src="https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png"
              class="slideImgs"
          /></span>
          <span
            ><img
              src="https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png"
              class="slideImgs"
          /></span>
          <span
            ><img
              src="https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png"
              class="slideImgs"
          /></span>
        </div>
      </div>
      <div class="scroll">
        <div class="m-scroll m-scroll2">
          <span
            ><img
              src="https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png"
              class="slideImgs"
          /></span>
          <span
            ><img
              src="https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png"
              class="slideImgs"
          /></span>
          <span
            ><img
              src="https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png"
              class="slideImgs"
          /></span>
          <span
            ><img
              src="https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png"
              class="slideImgs"
          /></span>
        </div>
      </div>
      <div class="scroll">
        <div class="m-scroll">
          <span
            ><img
              src="https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png"
              class="slideImgs"
          /></span>
          <span
            ><img
              src="https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png"
              class="slideImgs"
          /></span>
          <span
            ><img
              src="https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png"
              class="slideImgs"
          /></span>
          <span
            ><img
              src="https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png"
              class="slideImgs"
          /></span>
        </div>
      </div>
      <div id="divExplore">
        <h2 id="explore">EXPLORE</h2>

        <div id="exploreButtons">
          <router-link to="/projects"><button>Projects</button></router-link>
          <router-link to="/about"><button>About me</button></router-link>
          <router-link to="/contacts"><button>Contacts</button></router-link>
          <!-- <button>About Me</button>
          <button>Contacts</button> -->
        </div>
      </div>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>
<!-- <script>
import { RouterLink, RouterView } from "vue-router";
</script> -->
<script>
export default {};
</script>

<style>
@import "../assets/home.css";
</style>

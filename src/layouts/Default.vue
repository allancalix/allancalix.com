<template>
  <div class="layout">
    <header class="header">
      <div>
        <g-link class="heading-link" :to="{ name: 'home' }">
          <component :is="titleTag" class="heading">{{ config.siteName }}</component>
        </g-link>
        <span>Software Engineer based of Los Angeles</span>
      </div>
      <div>
        <ul class="contacts">
          <li><a href="https://www.linkedin.com/in/allan-calix/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.github.com/allancalix" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="mailto:contact@allancalix.com">contact@allancalix.com</a></li>
        </ul>
      </div>
    </header>
    <main>
      <p>Hello. My name is Allan and I love to code. <br>Learn more about me at the links above ☝.️</p>
    </main>
  </div>
</template>

<script>
  import config from '~/.temp/config.js';
  export default {
    computed: {
      titleTag () {
        return this.$route.name === 'home' ? 'h1' : 'h6'
      },
      config () {
        return config
      }
    }
  }
</script>


<style lang="css">
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 48px;
    padding: 0;
    margin: 0;
    font-family: "Helvetica Neue";
  }
  h6 {
    font-size: 20px;
  }
  body {
    margin: 0;
    font-size: 16px;
    padding: 0;
  }
  header {
    margin: 3.33333rem 0 0 3.33333rem;
  }
  main {
    margin: 3.33333rem 0 0 3.33333rem;
  }
  .heading-link {
    color: black;
    text-decoration: none;
  }
  .contacts {
    display: flex;
    justify-content: inline-flex;
  }
  .contacts li {
    padding: 0 2.08333rem 0 0;
    list-style: none;
  }
</style>

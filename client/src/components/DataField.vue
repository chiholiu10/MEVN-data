<template>
  <div class="listData">
    <ul class="three">
      <li
        v-for="(post, index) in listData.data"
        :key="index"
        :class="[
            'list-item', 
            'unordered-list ', 
            post.name.toLowerCase(), 
            { active: activeName == post.name }
            ]"
        @click="showInfo(post.name, post.description)"
      >{{ post.name }}</li>
    </ul>

    <div class="side-bar">
      <span @click="deselectNode()" class="close-button">X</span>
      <div>{{this.currentName}}</div>
      <div>{{this.currentDescription}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DataField',
  data () {
    return {
      listData: [],
      currentName: '',
      active: null,
      currentDescription: '',
      activeName: ''
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('http://localhost:8085/').then(response => {
          this.listData = response.data
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    showInfo (name, description) {
      this.currentName = name
      this.currentDescription = description
      this.activeNode(name)
    },
    deselectNode () {
      this.currentName = ''
      this.currentDescription = ''
      this.activeName = ''
    },
    activeNode (name) {
      this.activeName = name
    }
  }
}
</script>

<style lang="scss" scoped>
$grey: grey;
$white: white;
$lightgrey: lightgrey;

.listData {
  .three {
    display: grid;
    grid-template-rows: repeat(7, 100px);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
    width: 44rem;
    grid-template-areas: 
      ".  C  ."
      ".  .  B-1" 
      "A  B  B-2" 
      ".  .  B-3" 
      ".  D  ." 
      ".  .  .";
  }

  .a {
    grid-area: A;
  }

  .b {
    grid-area: B;
  }

  .c {
    grid-area: C;
  }

  .d {
    grid-area: D;
  }

  .b-1 {
    grid-area: B-1;
  }

  .b-2 {
    grid-area: B-2;
  }

  .b-3 {
    grid-area: B-3;
  }

  .a,
  .b {
    &::after {
      content: "";
      position: absolute;
      right: 0;
      transform: translateX(100%);
      display: block;
      background: $grey;
      width: 45px;
      height: 3px;
    }
  }

  .b,
  .b-1,
  .b-2,
  .b-3,
  .c,
  .d {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      display: block;
      background: $grey;
    }
  }

  .b-1,
  .b-3,
  .c,
  .d {
    &::before {
      transform: translateX(-100%);
      width: 20px;
      height: 3px;
    }
  }

  .b,
  .b-2 {
    &::before {
      transform: translateX(-23px);
      width: 3px;
      height: 227px;
    }
  }

  .b::before {
    height: 451px;
    transform: translate(-23px, 0px);
  }


  .list-item {
    width: 200px;
    position: relative;
    border: 2px solid transparent;
    &.unordered-list {
      background-color: $lightgrey;
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.active {
      border: 2px solid $grey;
    }
  }

  .side-bar {
    width: 200px;
    height: 100px;
    padding: 20px;
    position: absolute;
    top: 0;
    background-color: $grey;
    color: $white;
    .close-button {
      float: right;
      z-index: 9999;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>

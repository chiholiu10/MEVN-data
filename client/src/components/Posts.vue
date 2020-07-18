<template>
  <div class="listData">
    <ul class="three">
      <li v-for="(post, index) in listData.data" :key="index" :class="'line unordered-list ' + post.name.toLowerCase()">
        {{ post.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'posts',
  data () {
    return {
      listData: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      axios.get('http://localhost:8085/').then(response => {
        this.listData = response.data
      })
    }
  }
}
</script>
<style scoped>
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

.a::after,
.b::after {
  content: "";
  position: absolute;
  right: 0;
  transform: translateX(100%);
  display: block;
  background: grey;
  width: 45px;
  height: 3px;
}

.b-1::before,
.b-3::before,
.c::before,
.d::before {
  content: "";
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  display: block;
  background: grey;
  width: 20px;
  height: 3px;
}

.b::before,
.b-2::before {
  content: "";
  position: absolute;
  left: 0;
  transform: translateX(-23px);
  display: block;
  background: grey;
  width: 3px;
  height: 235px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.b::before {
  height: 467px;
  transform: translate(-23px, 0px);
}

.unordered-list {
  background-color: lightgreen;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.line {
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 200px;
  position: relative;
}
</style>

<template>
  <Scroll class="content" ref="scroll">
    <ul>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>33</li>
      <li>33</li>
      <li>33</li>
      <li>33</li>
      <li>33</li>
      <li>33</li>
      <li>33</li>
      <li>33</li>
      <li>33</li>
      <li>33</li>
      <li>33</li>
      <li>33</li>
      <li>33</li>
    </ul>
  </Scroll>
</template>

<script>
  import Scroll from '../../components/common/scroll/Scroll'

  export default {
    name: "Profile",
    components: {Scroll},
    Scroll
  }
</script>

<style scoped>
  .content {
    height: 300px;
    overflow: hidden;
    background-color: red;
  }
</style>

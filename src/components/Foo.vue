<template>
  <div>
    <el-alert>ok</el-alert>
    <h1>Foo</h1>
    <p>{{msg}}</p>
  </div>

</template>
<script>
export default {
  name: 'Foo',
  data () {
    return {
      msg: 'Hello Foo'
    }
  }
}
</script>

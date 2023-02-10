<template>
  <div>
    <el-tag v-permission="['admin']">admin</el-tag>

    <el-tag v-permission="['user']">user</el-tag>

    <el-tag v-permission="['editor']">editor</el-tag>

    <el-tag v-permission="['admin','editor']">Both admin or editor can see this</el-tag>
  </div>
</template>

<script>
import permission from '@/directive/buttonPermission/index.js' // 权限判断指令
export default {
  directives: { permission }
}
</script>

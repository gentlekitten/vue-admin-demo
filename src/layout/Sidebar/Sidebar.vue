<template>
  <el-menu
    router
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    background-color="#243B55"
    text-color="#fff"
    active-text-color="#409EFF"
    unique-opened
    :collapse="sidebar"
  >
    <el-menu-item>
      <h3 slot="title">通用权限管理系统</h3>
    </el-menu-item>
    <sidebar-item :add-routes="addRoutes" />
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  data: function() {
    return {}
  },
  computed: {
    ...mapGetters(['addRoutes']),
    sidebar: function() {
      return !this.$store.getters.sidebar.opened
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  created() {},
  methods: {
    reload() {
      //   this.$router.push({
      //     path,
      //     query: {
      //       t: +new Date() // 保证每次点击路由的query项都是不一样的，确保会重新刷新view
      //     }
      //   })
    }
  }
}
</script>

<style scoped>
</style>

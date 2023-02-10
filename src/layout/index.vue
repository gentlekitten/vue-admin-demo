<template>
  <el-container class="app-wrapper">
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" /> -->
    <Sidebar v-if="sidebar1 || device === 'desktop'" />
    <el-container class="app-wrapper">
      <el-header height="50px">
        <NavBar />
      </el-header>
      <el-main class="main-box">
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Sidebar from './Sidebar/Sidebar'
import NavBar from './NavBar.vue'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    NavBar
  },
  mixins: [ResizeMixin],
  data: function() {
    return {}
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    sidebar1() {
      return this.$store.state.app.sidebar.opened
    },
    device() {
      return this.$store.state.app.device
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="less" scoped>
.app-wrapper {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative !important;
}
.bespread {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.main-box {
  background-color: #f2f7fd;
}
.el-header {
  height: 50px;
  width: 100%;
  margin: 0;
  padding: 0;
  background: none;
}
</style>

<template>
  <fragment>
    <fragment v-for="routes in addRoutes" :key="routes.path">
      <template v-if="!routes.hidden && routes.children">
        <el-submenu
          v-if="routes.children.length > 0"
          :key="routes.path"
          :index="routes.path+''"
          popper-append-to-body
        >
          <!-- 模板 -->
          <template slot="title">
            <item :title="routes.meta.title" :icon="routes.meta.icon" />
          </template>
          <!-- 二级菜单栏 -->
          <template>
            <el-menu-item
              v-for="route in routes.children"
              v-show="!route.children"
              :key="route.path"
              :index="route.path"
            >
              <item :title="route.meta.title" />
            </el-menu-item>
          </template>
          <!-- 递归 -->
          <sidebar-item :add-routes="routes.children" />
        </el-submenu>
      </template>
    </fragment>
  </fragment>
</template>

<script>
import Item from './Item'

export default {
  name: 'SidebarItem',
  components: {
    Item
  },
  props: {
    addRoutes: {
      type: Array,
      default: () => []
    }
  }
}
</script>

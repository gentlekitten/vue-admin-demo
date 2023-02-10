<template>
  <div class="nav-box">
    <div class="hamburger-container" @click="toggleClick">
      <i v-if="!sidebar" class="el-icon-s-fold" />
      <i v-if="sidebar" class="el-icon-s-unfold" />
    </div>
    <el-breadcrumb separator="/" class="breadcrumb-container">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item in breadcrumb" :key="item">{{ item }}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
    <div class="right-menu">
      <el-form :inline="true">
        <!-- <el-form-item>
          <template slot="label">
            <i class="el-icon-menu" />
          </template>
          <el-select v-model="systemId" clearable placeholder="请寻找操作的系统">
            <el-option
              v-for="item in systemDataList"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item> -->
        <el-form-item>
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar shape="square" size="medium" :src="user.avatar" />
              <i class="el-icon-caret-bottom el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>密码更新</el-dropdown-item>
              <el-dropdown-item @click.native="logout()">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: function() {
    return {
      user: {
        // avatar: 'http://img5.imgtn.bdimg.com/it/u=183326193,1784969774&fm=26&gp=0.jpg'
      },
      systemDataList: [],
      systemId: null
    }
  },
  computed: {
    sidebar: function() {
      return !this.$store.getters.sidebar.opened
    },
    breadcrumb: function() {
      return this.$store.state.breadcrumb
    }
  },
  methods: {
    toggleClick: function() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      this.$store
        .dispatch('user/logout')
        .then(() => {
          this.$router.push({ path: '/login' }) // 登录成功之后重定向到首页
        })
        .catch(err => {
          this.$message.error(err) // 登录失败提示错误
        })
    }
  }
}
</script>

<style scoped>
.nav-box {
  height: 50px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.hamburger-container {
  line-height: 50px;
  height: 100%;
  float: left;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.breadcrumb-container {
  margin-left: 26px;
  line-height: 50px;
  height: 100%;
  float: left;
  -webkit-tap-highlight-color: transparent;
}

.hamburger-container i {
  font-size: 32px;
  line-height: 50px;
  margin-left: 20px;
}

.right-menu {
  float: right;
  height: 100%;
  margin-right: 20px;
  margin-top: 7px;
}

.el-dropdown-link {
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>

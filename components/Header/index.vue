<template>
  <header class="header">
    <div class="container-sm">
      <div class="header-container">
        <div class="logo_area">
          <nuxt-link to="/">
            <img :src="logo" alt="logo" />
          </nuxt-link>
        </div>
        <div class="navabar">
          <li v-for="navbar in NavbarItems" :key="`${navbar.id}`" class="nvabr_item">
            <span class="navabr_label">
              {{ navbar.name }}
            </span>
            <div class="navbar-submenu" >
              <div class="navbar-submenu-wrapper">
                <div v-for="item in navbar.submenus" :key="`${item.id}`" class="navbar-submenu-item"> 
                  <nuxt-link :to="item.path">
                    {{ item.name }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import './style.scss'
import items from './data.ts'
export default {
  data() {
    return {
      logo: require('@/assets/images/header/fa-filimo-dark-logo.png'),
      NavbarItems: items,
    }
  },
}
</script>
<template lang="html">
    <div class="animate-view">
        <!-- <menu-view :menuList="menuList" root="/animate"></menu-view> -->
        <transition name="slider" mode="out-in">
            <router-view class="animate-container"></router-view>
        </transition>
    </div>
</template>

<script>

// import MenuView from 'components/Menu'

// import menuList from './menuList'


export default {
    name: 'animate',
    data () {
        return {
            // menuList,
        }
    },
    components: {
        // MenuView
    }
}
</script>

<style lang="css" scoped>
.animate-view{
    height: 100%;
    /*background: url(http://res1.eqh5.com/o_1beermqetng27jr1ohe4mkoq99.gif?imageMogr2/auto-orient/thumbnail/347x564%3E);*/
    display:flex;
    width:100%;
    overflow:hidden;
}
.animate-container{
    flex:1;
    overflow:auto;
    padding: 20px 30px;
}
.slider-enter-active, .slider-leave-active {
  transition: transform .3s;
}
.slider-enter, .slider-leave-active {
  transform: translateX(100%);
}
</style>

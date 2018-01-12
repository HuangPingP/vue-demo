<template lang="html">
    <div class="controller-wrapper">
        <div class="btn btn-pre" @click="preClick">
            上一页
        </div>
        <div class="btn btn-next" @click="nextClick">
            下一页
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        routerList: [
            // '/animate/',
            '/animate/basis/1',
            '/animate/basis/2',
            '/animate/basis/3',
            '/animate/frame/0',
            '/animate/frame/1',
            '/animate/frame/2',
            '/animate/frame/3',
            '/animate/frame/4',
            '/animate/tween/0',
            '/animate/tween/1',
            '/animate/tween/2',
            '/animate/tween/3',
            '/animate/pause/0',
            '/animate/pause/1',
            '/animate/pause/2',
            '/animate/pause/3',
            '/animate/rule',
            '/animate/bezier/1',
            '/animate/bezier/2',
            '/animate/smooth/1',
            '/animate/smooth/2',
            '/animate/smooth/3',
            '/animate/smooth/4',
            '/animate/smooth/5',
            '/animate/smooth/6',
            '/animate/smooth/7',
            // '/animate/smooth/8',
            // '/animate/smooth/9',
            // '/animate/smooth/10',
            // '/animate/smooth/11',
            // '/animate/smooth/12',
            '/animate/recommend'
        ],
        index: 0,
    }
  },
  methods: {
    preClick () {
        this.index --
        this.index = this.index < 0 ? this.routerList.length - 1 : this.index
        router.push({
            path: this.routerList[this.index]
        })
    },
    nextClick () {
        this.index ++
        this.index = this.index > this.routerList.length - 1 ? 0 : this.index
        router.push({
            path: this.routerList[this.index]
        })
    }
  },
}
</script>

<style lang="css">
.controller-wrapper{
    position: fixed;
    bottom: 30px;
    right: 20px;
    width: 100px;
    height: 100px;
    color: #fff;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    line-height: 50px;
}
.controller-wrapper .btn{
    cursor: pointer;
    background-color: rgba(0,0,0,.3);
    transition: all .3s;
}
.controller-wrapper .btn:hover{
    background-color: rgba(0,0,0,.5);
}
.controller-wrapper .btn.btn-pre{
    border-bottom: solid 1px #ccc;
}
</style>

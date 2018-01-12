<template>
    <div class="animate-content-view" @click="activeClick()">
        <div class="box-3d" :class="{'active': active}">
            <div>
                <h3>
                    <small>SHARE</small>
                    动<span class="ani-rotate">画</span>
                </h3>
            </div>
            <div>
                <h3>
                    <small>SHARE</small>
                    动<span class="ani-rotate">画</span>
                </h3>
            </div>
            <div class="item"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'animateContent',
    data () {
        return {
            active: false
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            setTimeout(() => {
                vm.active = true
            },1000)
        })
    },
    methods: {
        activeClick () {
            this.active = true
        }
    }
}
</script>
<style scoped>
.animate-content-view{
    display: flex;
    align-items: center;
    justify-content: center;
}
.animate-content-view h3{
    font-size: 100px;
    text-align: center;

}
.animate-content-view h3 small {
    display: block;
    font-size: 36px;
}
.box-3d{
    position: relative;
    margin:-100px;
    width: 220px;
    height: 220px;
    transform: rotateX(0) rotateY(0) rotateZ(0);
    transform-style: preserve-3d;
    transform-origin: center center center;
    transition: all .5s ease;
}
.box-3d.active{
    transform: rotateX(11deg) rotateY(-43deg) rotateZ(0deg);
}
.box-3d>div{
    position: absolute;
    top: 0;
    left: 0;
    width: 220px;
    height: 220px;
    padding: 10px;
    transform-origin: center center;
    background-color: #fff;
    color: pink;
}
.box-3d>div:nth-child(1) {
    transform: translateZ(110px);
}
.box-3d>div:nth-child(2) {
    transform: rotateY(90deg) translateZ(110px);
    background-color: pink;
    color: #fff;
}
.box-3d>div:nth-child(3) {
    transform: rotateX(-90deg) translateZ(110px);
    background-color: rgba(191,182,187,.41);
}

</style>

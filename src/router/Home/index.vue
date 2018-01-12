<template lang="html">
    <div class="home">
        <h2>
            WELCOME <small>to my</small> presentation
        </h2>
        <canvas ></canvas>
    </div>
</template>

<script>
export default {
    name: 'home',
    mounted: function mounted() {
      //do something after mounting vue instance
      this.getDom()
    },
    methods: {
      getDom() {
        document.addEventListener('touchmove', function (e) {
          e.preventDefault()
        })
        var c = document.getElementsByTagName('canvas')[0],
            x = c.getContext('2d'),
            pr = window.devicePixelRatio || 1,
            w = window.innerWidth,
            h = window.innerHeight,
            f = 90,
            q,
            m = Math,
            r = 0,
            u = m.PI*2,
            v = m.cos,
            z = m.random
        c.width = w*pr
        c.height = h*pr
        x.scale(pr, pr)
        x.globalAlpha = 0.6
        function i(){
            x.clearRect(0,0,w,h)
            q=[{x:0,y:h*.7+f},{x:0,y:h*.7-f}]
            while(q[1].x<w+f) d(q[0], q[1])
        }
        function d(i,j){
            x.beginPath()
            x.moveTo(i.x, i.y)
            x.lineTo(j.x, j.y)
            var k = j.x + (z()*2-0.25)*f,
                n = y(j.y)
            x.lineTo(k, n)
            x.closePath()
            r-=u/-50
            x.fillStyle = '#'+(v(r)*127+128<<16 | v(r+u/3)*127+128<<8 | v(r+u/3*2)*127+128).toString(16)
            x.fill()
            q[0] = q[1]
            q[1] = {x:k,y:n}
        }
        function y(p){
            var t = p + (z()*2-1.1)*f
            return (t>h||t<0) ? y(p) : t
        }
        document.onclick = i
        document.ontouchstart = i
        i()
      }
    }
}
</script>

<style lang="css" scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  }
.home{
  width: 100%;
  height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../../assets/bg.gif');
}
.home h2 {
  font-family: "Montserrat","Helvetica Neue",Arial,sans-serif;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: #ee61a5;
}
.home h2 small {
    display: block;
    font-size: 30px;
}
</style>

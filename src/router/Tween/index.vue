<template lang="html">
    <div class="tween-view">
        <div class="tween-wrapper"
        :style="{
            'transform':'translateX(-'+ 25 * $route.params.p +'%)'
        }">
            <div class="tween-content">
              <h3>补间动画</h3>
              <p>
                  是指认为设定动画的关键状态，也就是关键帧，而关键帧之间的过渡过程只需要由计算机处理渲染完成。
              <p>
                  前端实现补间动画的形式：
              </p>
            </div>
            <div class="tween-content">
              <h3>通过 <span class="code">animation</span>属性在每个关键帧之间插入补间动画</h3>
               <iframe height='265' scrolling='no' title='mMmeXY' src='//codepen.io/doubleWong/embed/preview/mMmeXY/?height=265&theme-id=light&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/doubleWong/pen/mMmeXY/'>mMmeXY</a> by 公子岳 (<a href='https://codepen.io/doubleWong'>@doubleWong</a>) on <a href='https://codepen.io'>CodePen</a>.
               </iframe>
            </div>
            <div class="tween-content">
              <h3>通过 <span class="code">transition</span>，该属性只能设定初始与结束时刻的两个关键帧状态 </h3>
              <iframe height='265' scrolling='no' title='wqdKxK' src='//codepen.io/doubleWong/embed/wqdKxK/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/doubleWong/pen/wqdKxK/'>wqdKxK</a> by 公子岳 (<a href='https://codepen.io/doubleWong'>@doubleWong</a>) on <a href='https://codepen.io'>CodePen</a>.
              </iframe>
            </div>
            <div class="tween-content">
              <h3>利用JS实现补间动画，该方式与逐帧动画实现类似，或采用成熟的动画库(TweenJS)提供运动算法支持。</h3>
              <iframe height='265' scrolling='no' title='补间动画js' src='//codepen.io/doubleWong/embed/preview/JyNYma/?height=265&theme-id=light&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/doubleWong/pen/JyNYma/'>补间动画js</a> by 公子岳 (<a href='https://codepen.io/doubleWong'>@doubleWong</a>) on <a href='https://codepen.io'>CodePen</a>.
              </iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tween'
}
</script>

<style lang="css" scoped>
.tween-view{
    width: 100%;
    height: 100%;
    background: url('../../assets/11.gif');
    overflow: hidden;
}
.tween-wrapper{
    width: 400%;
    height: 100%;
    display: flex;
    justify-content:space-around;
    align-items: center;
    transform: translateX(0);
    transition: all .3s ease-in;
}
.tween-content{
    width: 80%;
    margin: 0 2%;
}
.tween-content h3{
    color: #fff;
    /*background: #fff;*/
    font-size: 36px;
    text-align: center;
}
.tween-content p{
    color:  #fff;
    font-size: 24px;
    padding: 10px 0;
    line-height: 1.5;
    text-indent: 2em;
    text-align: center;
}
.tween-content iframe{
    margin-top: 50px;
}
</style>

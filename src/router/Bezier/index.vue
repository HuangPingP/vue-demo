<template>
    <div class="bezier-view">
        <div class="bezier-content" :class="{
            'active': $route.params.p == 1
        }">
            <h3>贝塞尔曲线</h3>
            <section>
                <p>如何让动画更加的自然？ 时间函数（animation-timing-function）的设计绝对是举足轻重的一环。我们先来看看下面这站图片。 <br>
                    <img src="https://isux.tencent.com/wp-content/uploads/2014/08/20140807143647366.png" alt="" />
                </p>
                <p>
                    这张图片，是常见的界面动画的动画曲线。他们表述了动画变化的程度与时间的管子。通过合理利用动画曲线背后的原理，可以让动画看起来更加真实。
                </p>
                <p>
                    那么如何让动画更加自然？ 其实，只要遵循客官物理规律以及人的视觉经验，动画就会看上去真实自然。
                </p>
            </section>
            <section>
                <p>
                    在CSS动画属性中，我们使用的曲线是贝塞尔曲线，包括 <span class="code">ease</span>、<span class="code">linear</span>、<span class="code">ease-out</span>等属性名称，都是特定的贝塞尔曲线的别名。利用默认的贝塞尔曲线，可以让我们制作出自然的动画效果，但是，我们如何自定义我们的贝塞尔曲线呢？ 这里我安利一个工具：
                    <br>地址： <a href="http://cubic-bezier.com">贝塞尔曲线工具</a>
                </p>
            </section>
        </div>
        <div class="bezier-content iframe" :class="{
            'active': $route.params.p == 2
        }">
            <iframe src="http://cubic-bezier.com/#.17,.67,.83,.67" width="100%" height="500px" frameborder='no' allowtransparency='true' allowfullscreen='true' scrolling='no'></iframe>
            <iframe src="https://jeremyckahn.github.io/stylie/" width="100%" height="700px" frameborder='no' allowtransparency='true' allowfullscreen='true' scrolling='no'></iframe>
        </div>
    </div>
</template>
<script>
export default{
    name: 'Bezier',
}
</script>
<style scoped>
.bezier-view{
    position: relative;
}
.bezier-view h3{
    font-size: 36px;
}
.bezier-content{
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    padding: 30px;
    background-color: #fff;
    font-size: 18px;
    line-height: 1.5;
    opacity: 0;
    transition: all .5s ease;
}
.bezier-content.active{
    opacity: 1;
}
.bezier-content p{
    padding: 5px 0;
    line-height: 1.5;
}
.bezier-content iframe{
    margin-top: 50px;
}
</style>

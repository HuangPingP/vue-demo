<template lang="html">
    <div class="recommend-view">
        <div class="recommend-wrapper">
            <div class="recommend-content">
              <h2>以上就是今天的所有分享啦，谢谢大家！</h2>
                <!-- <h3>是时候安利一波了</h3>
                <p>
                    1.代码高亮工具 <a href="http://codepen.io/">code pen</a>
                </p>
                <p>
                    2.动画在线生成工具： <a href="http://bouncejs.com/">bounceJs</a>
                </p>
                <p>
                    3.图片托管工具： <a href="http://www.tietuku.com/">贴图库</a>
                </p>
                <p>
                    4.贝塞尔在线调试工具： <a href="http://cubic-bezier.com">贝塞尔曲线</a>
                </p>
                <p>
                    5. <a href="https://csstriggers.com">CSS Triggers</a>
                </p> -->

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Recommend'
}
</script>

<style lang="css" scoped>
.recommend-view,
.recommend-wrapper{
    width: 100%;
    height: 100%;
    background: url('../../assets/bg.gif');
}
.recommend-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
}
.recommend-content h3{
    font-size: 36px;
    padding: 10px 0;
    text-align: center;
}
.recommend-content p {
    font-size: 20px;
    line-height: 1.5;
}
h2{
  color: #ee61a5;
  font-weight: bolder;
  font-size: 46px;
  /*text-shadow: 2px 2px 2px yellow*/
}
</style>

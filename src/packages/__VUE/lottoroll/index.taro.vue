<template>
  <div class="nutbig-lotto-roll">
    <div class="lotto-roll-wrap" v-for="(s, index) of [1, 2, 3]" :key="index">
      <div class="lotto-roll-content">
        <div
          class="lotto-wrap"
          :style="{ transform: `translateY(${distanceObj[index]}px)` }"
        >
          <div
            class="lotto-item"
            v-for="(item, idx) in [...list, ...list]"
            :key="`'lotto'-${index}-${idx}`"
          >
            <div class="lotto-item-image" v-if="item.imagePath">
              <img
                class="lotto-item-img"
                v-if="item.imagePath"
                :src="item.imagePath"
              />
            </div>
            <!-- <div class="lotto-item-content" v-if="item.text">
              {{ item.text }}
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 待设计补充，做成开关装置 -->
  <!-- <nut-button type="danger" @click="start" style="margin-top: 20px;">抽奖</nut-button> -->
</template>

<script lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import Taro, {
  eventCenter,
  getCurrentInstance as getCurrentInstanceTaro,
} from "@tarojs/taro";
import { createComponent } from "../../utils/create";
const { create } = createComponent("lotto-roll");

export default create({
  props: {
    prizeList: {
      type: Array,
      default: () => [],
    },
    turnsTime: {
      type: Number,
      default: 19990,
    },
    turnsNumber: {
      type: Number,
      default: 0,
    },
    prizeIndex: {
      type: Number,
      default: -1,
    },
  },
  emits: ["click", "start-turns", "end-turns"],
  setup(props, { emit }) {
    const prize = ref(props.prizeIndex);
    watch(
      () => props.prizeIndex,
      (val, prevVal) => {
        prize.value = val;
      }
    );

    // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame
    const animationFun: any =
      window.requestAnimationFrame ||
      (window as any).webkitRequestAnimationFrame ||
      (window as any).mozRequestAnimationFrame ||
      (window as any).msRequestAnimationFrame ||
      (window as any).oRequestAnimationFrame ||
      function (cb) {
        window.setTimeout(cb, 1000 / 60);
      };

    const list = ref(props.prizeList); // 奖品列表
    const options = ref(); // 可视区域每列展示的奖品数
    const startTime = ref();
    const lock = ref(false); //上锁

    const lottoRollWrap: any = ref();
    const lottoWrap = ref();
    onMounted(() => {
      eventCenter.once((getCurrentInstanceTaro() as any).router.onReady, () => {
        const query = Taro.createSelectorQuery();
        query.selectAll(".lotto-roll-wrap").boundingClientRect();
        query.selectAll(".lotto-wrap").boundingClientRect();
        query.exec((res) => {
          lottoRollWrap.value = res[0];
          lottoWrap.value = res[1];
        });
      });
    });

    const distanceObj = ref<any>([]);

    const animateRun = (timestamp: number) => {
      // const timestamp = 0;
      if (!options.value) {
        return false;
      }
      // timestamp 当前的方法持续的毫秒数
      if (startTime.value == null) {
        startTime.value = timestamp; // 动画初始时间
      }
      const timeDiff = timestamp - startTime.value; //动画持续的时间
      options.value.forEach((item: any, index: number) => {
        if (item.isFinished) {
          return;
        }
        const time = Math.max(item.duration - timeDiff, 0); // 总的持续时间 - 动画持续时间 = 剩下的时间, 0 表示结束
        const power = 3;
        // Math.pow(time, power)表示: time 的 3 次幂;
        const offset =
          (Math.pow(time, power) / Math.pow(item.duration, power)) *
          item.rollTimes;

        const distance =
          -1 * Math.floor((offset + item.location) % item.height);

        // 指定到同一个位置中奖
        // if (time == 0) {
        // let oneHeight = item.height / list.length;
        // console.log(-1 * item.height + distance + Math.abs(distance - prize.value * oneHeight));
        // console.log(distance, prize.value * oneHeight);
        // }
        // item.el.transform = "translateY(" + distance + "px)";
        // distanceObj.value["lottoWrap" + index] = {
        //   transform: `translateY(${distance}px)`,
        // };
        distanceObj.value[index] = distance;
        if (timeDiff > item.duration) {
          item.isFinished = true;
        }
      });
      if (options.value.every((m) => m.isFinished)) {
        emit("end-turns");
        lock.value = false;
        options.value = null;
        startTime.value = null;
      } else {
        animationFun(animateRun);
      }
    };

    const startRoll = () => {
      emit("start-turns");
      lock.value = true;
      if (options.value) {
        // 增加动画过程中，再次点击开始，立即结束动画，且置为对应中位置
        options.value.forEach((item) => {
          item.isFinished = true;
          const v = -item.location;
          item.el.style.transform = "translateY(" + v + "px)";
        });
        return;
      }
      options.value = Array.from(lottoRollWrap.value).map((data, i) => {
        // const dom = lottoRollWrap.value[i];
        const itemHeight = lottoWrap.value[0]["height"] || 100;
        // document.getElementsByClassName("lotto-item")[0].offsetHeight
        let prizeIdx = prize.value; // 中奖编号
        if (prizeIdx < 0) {
          prizeIdx = Math.floor(Math.random() * list.value.length);
        }
        // const prizeIndex = Math.floor(Math.random() * list.length); // 随机生成整数，测试用
        const opts = {
          el: lottoWrap.value[i], //指向奖项元素的父级
          location: prizeIdx * itemHeight, // 奖品滚动到指定的位置
          rollTimes:
            2000 + Math.random() * 500 + i * 500 + 1000 * props.turnsNumber, // 转圈数
          height: list.value.length * itemHeight, // 总的高度
          duration: 6000 + i * 2000 + props.turnsTime, // 动画时间，毫秒数
          isFinished: false,
        };
        return opts;
      });
      animationFun(animateRun);
    };

    const start = () => {
      if (lock.value) {
        return false;
      }
      setTimeout(() => {
        startRoll();
      }, 300);
    };
    return {
      distanceObj,
      list,
      start,
    };
  },
});
</script>
<style lang="scss">
@import "./index.scss";
</style>

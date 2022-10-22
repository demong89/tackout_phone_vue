<template>
  <div>
    <HeadTop signin-up="home">
      <span slot="logo" class="head_logo">ele.me</span>
    </HeadTop>
    <nav class="city_nav">
      <div class="city_tip">
        <span @click="reload">当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link :to="'/city/' + guessCityid" class="guess_city">
        <span>{{ guessCity }}</span>
        <svg class="arrow_right">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#arrow-right"
          />
        </svg>
      </router-link>
    </nav>
    <section id="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylistul clear">
        <router-link
          tag="li"
          v-for="item in hotcity"
          :to="'/city/' + item.id"
          :key="item.id"
          >{{ item.name }}</router-link
        >
      </ul>
    </section>
    <section class="group_city_container">
      <ul class="letter_classify">
        <li
          v-for="(value, key, index) in sortgroupcity"
          :key="key"
          class="letter_classify_li"
        >
          <h4 class="city_title">
            {{ key }}
            <span v-if="index == 0">（按字母排序）</span>
          </h4>
          <ul class="groupcity_name_container citylistul clear">
            <router-link
              tag="li"
              v-for="item in value"
              :to="'/city/' + item.id"
              :key="item.id"
              class="ellipsis"
              >{{ item.name }}</router-link
            >
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import HeadTop from "../../components/header/head";
import {
  cityGuess,
  hotcity as getHotCity,
  groupcity as getGroupCity,
} from "../../service/getData";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, computed, reactive, watch } from "vue";

const guessCity = ref(""); //当前城市
const guessCityid = ref(""); //当前城市id
let hotcity = ref(); //热门城市列表
let groupcity = ref({}); //所有城市列表

const store = useStore();
const route = useRoute(); //路由信息
const router = useRouter(); // 路由跳转

onMounted(() => {
  // 获取当前城市
  cityGuess().then((res) => {
    guessCity.value = res.name;
    guessCityid.value = res.id;
  });

  //获取热门城市
  getHotCity().then((res) => {
    hotcity.value = res;
  });

  //获取所有城市
  getGroupCity().then((res) => {
    groupcity.value = res;
  });
});

const sortgroupcity = computed(() => {
  let sortobj = {};
  for (let i = 65; i <= 90; i++) {
    if (groupcity.value[String.fromCharCode(i)]) {
      sortobj[String.fromCharCode(i)] = groupcity.value[String.fromCharCode(i)];
    }
  }
  return sortobj;
});
const reload = () => {
  window.location.reload();
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin";
.head_logo {
  left: 0.4rem;
  font-weight: 400;
  @include sc(0.7rem, #fff);
  @include wh(2.3rem, 0.7rem);
  @include ct;
}
.city_nav {
  padding-top: 2.35rem;
  border-top: 1px solid $bc;
  background-color: #fff;
  margin-bottom: 0.4rem;
  .city_tip {
    @include fj;
    line-height: 1.45rem;
    padding: 0 0.45rem;
    span:nth-of-type(1) {
      @include sc(0.55rem, #666);
    }
    span:nth-of-type(2) {
      font-weight: 900;
      @include sc(0.475rem, #9f9f9f);
    }
  }
  .guess_city {
    @include fj;
    align-items: center;
    height: 1.8rem;
    padding: 0 0.45rem;
    border-top: 1px solid $bc;
    border-bottom: 2px solid $bc;
    @include font(0.75rem, 1.8rem);
    span:nth-of-type(1) {
      color: $blue;
    }
    .arrow_right {
      @include wh(0.6rem, 0.6rem);
      fill: #999;
    }
  }
}
#hot_city_container {
  background-color: #fff;
  margin-bottom: 0.4rem;
}
.citylistul {
  a {
    float: left;
    text-align: center;
    color: $blue;
    border-bottom: 0.025rem solid $bc;
    border-right: 0.025rem solid $bc;
    @include wh(25%, 1.75rem);
    @include font(0.6rem, 1.75rem);
  }
  a:nth-of-type(4n) {
    border-right: none;
  }
}
.city_title {
  color: #666;
  font-weight: 400;
  text-indent: 0.45rem;
  border-top: 2px solid $bc;
  border-bottom: 1px solid $bc;
  @include font(0.55rem, 1.45rem, "Helvetica Neue");
  span {
    @include sc(0.475rem, #999);
  }
}

.letter_classify_li {
  margin-bottom: 0.4rem;
  background-color: #fff;
  border-bottom: 1px solid $bc;
  .groupcity_name_container {
    li {
      color: #666;
    }
  }
}
</style>

<template>
  <div class="min-h-screen flex items-center justify-center bg-[#d1e3f5]">
    <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

      <!-- 分頁按鈕（卡片左上角） -->
      <div class="flex gap-2 mb-4">
        <button
          :class="tab === 'intro' ? 'bg-[#5b86b0] text-white' : 'bg-gray-100 text-gray-500'"
          class="px-4 py-1 rounded-md font-semibold"
          @click="tab = 'intro'"
        >
          INTRO
        </button>
        <button
          :class="tab === 'photo' ? 'bg-[#5b86b0] text-white' : 'bg-gray-100 text-gray-500'"
          class="px-4 py-1 rounded-md font-semibold"
          @click="tab = 'photo'"
        >
          Photo
        </button>
      </div>

      <!-- INTRO 頁面內容 -->
      <div v-if="tab === 'intro'">
        <!-- 標題 -->
        <h1 class="text-2xl font-bold text-center mb-6 text-[#1c3b5a]">
          編輯個人資料
        </h1>

        <!-- 自我介紹 -->
        <div class="mb-4">
          <label class="block text-[#1c3b5a] mb-1">自我介紹</label>
          <textarea
            v-model="bio"
            class="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            rows="4"
            placeholder="寫一些關於你自己..."
          ></textarea>
        </div>

        <!-- 年齡 -->
        <div class="mb-4">
          <label class="block text-[#1c3b5a] mb-1">年齡</label>
          <input
            type="number"
            v-model="age"
            class="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="請輸入年紀"
            min="1"
          />
        </div>

        <!-- 居住地 -->
        <div class="mb-6">
          <label class="block text-[#1c3b5a] mb-1">居住地</label>
          <select
            v-model="location"
            class="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"  >
            <option value="">請選擇地區</option>
            <option value="taipei">台北市</option>
            <option value="taoyuan">桃園市</option>
            <option value="taichung">台中市</option>
            <option value="tainan">台南市</option>
            <option value="other">其他</option>
          </select>
        </div>

        <!-- 星座 / MBTI / 工作選單 -->
<div class="space-y-3 mb-6">
  <div
    v-for="(item, index) in cards"
    :key="index"
    class="border rounded-xl shadow-sm"
  >
    <!-- 按鈕 -->
    <button
      class="flex justify-between items-center w-full p-4 text-left text-[#1c3b5a] font-semibold"
      @click="toggle(index)"
    >
      <span>{{ item.title }}</span>
      <i
        class="fas fa-chevron-right transform transition-transform duration-300"
        :class="{ 'rotate-90': activeIndex === index }"
      ></i>
    </button>

    <!-- 展開內容區塊（動畫 + 不撐開） -->
<div
  class="px-4 overflow-hidden transition-[max-height,padding] duration-700 ease-in-out text-sm text-gray-600"
  :class="activeIndex === index ? 'max-h-64 py-3' : 'max-h-0 py-0'"
>
  <div class="overflow-y- max-h-60 w-full">
      <ZodiacSelector v-show="index === 0" v-model="selectedZodiac" />
        <MbtiSelector v-show="index === 1" v-model="selectedMbti" />
        <JobSelector v-show="index === 2" v-model="selectedJob" />
  </div>
</div>
  </div>
</div>

        <!-- 送出按鈕 -->
        <button @click="submit" class="w-full bg-[#789fc6] hover:bg-[#5b86b0] text-white font-semibold py-2 rounded-lg transition" >
          儲存變更
        </button>
      </div>

      <!-- PHOTO 頁面內容 -->
      <div v-else-if="tab === 'photo'">
        <h1 class="text-2xl font-bold text-center mb-6 text-[#1c3b5a]">
          上傳照片
        </h1>
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="n in 6"
            :key="n"
            class="border border-dashed rounded-xl aspect-square flex items-center justify-center text-2xl text-gray-400"
          >
            +
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ZodiacSelector from './components/ZodiacSelector.vue'
import MbtiSelector from './components/MbtiSelector.vue'
import JobSelector from './components/JobSelector.vue'

const tab = ref('intro') 
const bio = ref('')
const age = ref('')
const gender = ref('')
const location = ref('')
const selectedZodiac = ref('')
const selectedMbti = ref('')
const selectedJob = ref('')

const cards = [
  { title: '星座', content: '請選擇你的星座，例如天蠍座、獅子座等' },
  { title: 'MBTI', content: '例如：INTJ / ENFP 等性格測驗' },
  { title: '工作行業', content: '請輸入你目前的工作領域，例如設計 / 教育 / 醫療' }
]

const activeIndex = ref(null)
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const submit = () => {
  alert(`介紹：${bio.value}
年齡：${age.value}
性別：${gender.value}
居住地：${location.value}
星座：${selectedZodiac.value}
MBTI：${selectedMbti.value}
工作：${selectedJob.value}`)
}
</script>

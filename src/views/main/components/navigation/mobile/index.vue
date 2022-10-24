<template>
  <div>2132</div>
</template>

<script setup>
import { getRecommendPic } from '@/api/picture'

const getRecommendPicData = async () => {
  const res = await getRecommendPic()
  console.log(res)
}

getRecommendPicData()
</script>
<style lang="scss" scoped></style>

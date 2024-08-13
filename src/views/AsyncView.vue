<template>
  <h2>Async Function</h2>
</template>
<script setup>
import axios from 'axios'
console.log(axios)
//methods: get , post , delete, put, patch

//基本寫法＝＝＝
// axios
//   .get('https://randomuser.me/api/')
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

//Async Function 結構
async function getDATA() {
  const response = await axios.get('https://randomuser.me/api/')
  console.log(response)

  try {
    //正確的流程
    const response2 = await axios.get('https://randomuser.me/api/')
    console.log(response2)
  } catch (error) {
    //錯誤的流程
    console.log(error)
  }
}

getDATA()
</script>

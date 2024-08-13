<template>
  <section>
    <div class="addProduct">
      <input type="text" v-model="newName" placeholder="name" class="mb-2" />{{ newName }}
      <br />
      <input type="number" v-model="newPrice" placeholder="0" />{{ newPrice }}
      <button type="button" @click="addData()">新增</button>
    </div>

    {{ data }}

    <br />
    <br />
    <br />
    <h2 class="mb-4">商品列表</h2>
    <table class="mb-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>NewPrice</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="td in data" :key="td.id">
          <td>{{ td?.name }}</td>
          <td>{{ td?.price }}</td>
          <td><input type="number" v-model="td.price" /></td>
          <td><button type="button" @click="delProduct(td?.id)">X</button></td>
        </tr>
      </tbody>
    </table>
    <h3>
      <span class="p-5">總計：{{ sum }}</span>
    </h3>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const newName = ref('')
const newPrice = ref(0)
const data = ref([])

const addData = () => {
  const pdNum = data.value.length + 1
  data.value.push({
    id: pdNum,
    name: newName.value,
    price: newPrice.value
  })
  newName.value = ''
  newPrice.value = ''
}

const delProduct = (id) => {
  const index = data.value.findIndex((item) => item.id === id)
  data.value.splice(index, 1)
}

//基本寫法 ＝＝＝
// const sum = computed(() => {
//   let priceSUM = 0
//   data.value.forEach((item) => {
//     priceSUM = item.price + priceSUM
//   })
//   return priceSUM
// })

//reduce寫法＝＝＝
// const sum = computed(() => {
//   const priceSUM = data.value.reduce((pre, item) => {
//     return pre + item.price
//   }, 0)
//   return priceSUM
// })

//reduce簡寫＝＝＝
const sum = computed(() => {
  return data.value.reduce((pre, item) => pre + item.price, 0)
})

onMounted(() => {
  setTimeout(() => {
    data.value = [
      {
        id: 1,
        name: '珍珠奶茶',
        price: 50
      },
      {
        id: 2,
        name: '冬瓜檸檬',
        price: 45
      },
      {
        id: 3,
        name: '翡翠檸檬',
        price: 55
      },
      {
        id: 4,
        name: '四季春茶',
        price: 45
      },
      {
        id: 5,
        name: '阿薩姆奶茶',
        price: 50
      },
      {
        id: 6,
        name: '檸檬冰茶',
        price: 45
      },
      {
        id: 7,
        name: '芒果綠茶',
        price: 55
      },
      {
        id: 8,
        name: '抹茶拿鐵',
        price: 60
      }
    ]
  }, 1000)
})
</script>

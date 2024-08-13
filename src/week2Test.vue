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
        <tr v-for="td in pdData" :key="td.id">
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
import { computed, ref } from 'vue'

const newName = ref('')
const newPrice = ref(0)
const data = [
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

const pdData = ref(data)
// console.log(pdData.value)

const addData = () => {
  // console.log('addData')
  const pdNum = pdData.value.length + 1
  // console.log(pdNum)

  pdData.value.push({
    id: pdNum,
    name: newName.value,
    price: newPrice.value
  })
  // console.log(pdData)

  newName.value = ''
  newPrice.value = ''
}

const delProduct = (id) => {
  const index = pdData.value.findIndex((item) => item.id === id)
  // console.log(id)
  pdData.value.splice(index, 1)
}

//基本寫法
const sum = computed(() => {
  console.log(pdData.value)

  let priceSUM = 0
  pdData.value.forEach((item) => {
    priceSUM = item.price + priceSUM
  })

  return priceSUM
})
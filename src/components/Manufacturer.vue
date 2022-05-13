<template>
  <div class="grid border-black font-black">
    <div class="ml-10 mr-5">
      <h1 class="mb-6 mt-5" style="text-align: center">Manufacturer</h1>
      <ul v-for="m in manufacturers" :key="m.id" class="border border-black">
        <li>
          <button @click="changeManufacturerId(m.id)">
            <img
              :src="require(`../assets/${m.Title}.png`)"
              :alt="m.Title"
              width="100%"
            />
          </button>
        </li>
      </ul>
      <div v-show="false">
        <img src="../assets/ACER.png" width="25%" />
        <img src="../assets/ASUS.png" width="25%" />
        <img src="../assets/DELL.png" width="25%" />
        <img src="../assets/HP.png" width="25%" />
        <img src="../assets/LENOVO.png" width="25%" />
        <img src="../assets/MICROSOFT.png" width="25%" />
        <img src="../assets/SAMSUNG.png" width="25%" />
        <img src="../assets/SONY.png" width="25%" />
        <img src="../assets/TOSHIBA.png" width="25%" />
      </div>
    </div>
    <div>
      <slot :factId="currentManufactId"></slot>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    currentManufactId: 0,
    manufacturers: [
      { id: 1, Title: "ASUS" },
      { id: 2, Title: "DELL" },
    ],
  }),
  created() {
    axios.get(`https://localhost:7265/api/manufacturers`).then((res) => {
      this.manufacturers = res.data;
    });
  },
  methods: {
    changeManufacturerId(id) {
      this.currentManufactId = id;
      console.log(`id : ${id}`);
    },
  },
};
</script>

<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
}
</style>
<template>
  <div class="container text-center mt-5">
    <h1>Device ID : {{ this.id }}</h1>
    <p>----------------------</p>
    <p>{{ device.Title }}</p>
    <p>{{ device.Processor }}</p>
    <p>Price : ${{ device.Price }}</p>
    <!-- <img class="block mx-auto" :src="device.Photo" /> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "detail",
  props: {
    id: Number,
  },
  data: () => ({
    device: [
      {
        Title: "",
        Processor: "",
        Price: "",
      },
    ],
  }),
  created() {
    axios
      .get(`https://localhost:7265/api/devices/(id)?id=${this.id}`)
      .then((res) => {
        this.device = res.data;
        console.log(this.device);
      });
  },
};
</script>
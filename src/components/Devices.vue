<template>
  <div class="grid border-black font-black" style="width: 300px">
    <div class="ml-5 mr-10">
      <h1 class="mb-6 mt-5" style="text-align: center">Devices</h1>
      <ul v-for="d in devices" :key="d.id" class="border border-black">
        <li>
          <router-link
            :to="{
              name: 'device',
              query: { id: d.id },
            }"
          >
            {{ d.Title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    manufacturerId: Number,
  },
  data: () => ({
    devices: [
      { id: 1, Title: "Asus ROG" },
      { id: 2, Title: "Dell XP13" },
    ],
  }),
  created() {
    console.log("factId:", this.manufacturerId);
    if (this.manufacturerId !== 0) {
      axios
        .get(
          `https://localhost:7265/api/devices/manufacturer/(id)?id=${this.manufacturerId}`
        )
        .then((res) => {
          this.devices = res.data;
        });
    } else {
      axios.get(`https://localhost:7265/api/devices`).then((res) => {
        this.devices = res.data;
      });
    }
  },
  watch: {
    manufacturerId: function (newId, oldId) {
      // watch it
      console.log("Prop changed: ", newId, " | was: ", oldId);
      this.getDeviceByManufacturer(newId);
    },
  },
  methods: {
    getDeviceByManufacturer(id) {
      axios
        .get(
          `https://localhost:7265/api/devices/manufacturer/(id)?id=${this.manufacturerId}`
        )
        .then((res) => {
          this.devices = res.data;
        });
    },
  },
};
</script>
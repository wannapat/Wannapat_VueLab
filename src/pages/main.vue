<template>
  <div class="container" style="width: 100%">
    <manufacturer v-slot="data" style="display: flex">
      <devices :manufacturerId="data.factId"></devices>
    </manufacturer>
  </div>
</template>

<script>
import Manufacturer from "@/components/Manufacturer.vue";
import Devices from "@/components/Devices.vue";
export default {
  components: {
    Manufacturer: Manufacturer,
    Devices: Devices,
  },
};
</script>
<template>
  <div>
    <BtCss />
    <FntsOp />
    <FntsOpBold />
    <FntsCp />
  </div>
</template>

<script>
import BtCss from "./BtCss.vue";
import FntsOp from "../fonts/FtOpenSans.vue";
import FntsOpBold from "../fonts/FtOpenSansBold.vue";
import FntsCp from "../fonts/FtComportaa.vue";
export default {
  components: { BtCss, FntsOp, FntsCp, FntsOpBold }
};
</script>
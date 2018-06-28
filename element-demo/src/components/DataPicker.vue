<template>
    <el-date-picker class="data-picker" v-model="value" type="date" placeholder="选择日期">
    </el-date-picker>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style>
.data-picker {
  margin-top: 20px;
}
</style>
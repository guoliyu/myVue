<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <myButton></myButton>
    <DataPicker></DataPicker>
    <UpLoad></UpLoad>
  </div>
</template>

<script>
import myButton from "./components/myButton";
import DataPicker from "./components/DataPicker";
import UpLoad from "./components/UpLoad";
export default {
  name: "app",
  data() {
    return {
      msg: "欢迎来到Vue"
    };
  },
  components: {
    myButton,
    DataPicker,
    UpLoad
  }
};
</script>


import { ref } from "vue";

const date = ref(new Date());

window.setInterval(() => {
  date.value = new Date();
}, 1000);

export default function useCurrentDate() {
  return {
    date,
  };
}

import CropIcon from "@/components/icons/CropIcon.vue";
import RotateIcon from "@/components/icons/RotateIcon.vue";
import ResizeIcon from "@/components/icons/ResizeIcon.vue";
import AdjustIcon from "@/components/icons/AdjustIcon.vue";
import ColorIcon from "@/components/icons/ColorIcon.vue";
import CropInner from "@/components/partials/CropInner.vue";
import RotateInner from "@/components/partials/RotateInner.vue";
import ResizeInner from "@/components/partials/ResizeInner.vue";
import AdjustInner from "@/components/partials/AdjustInner.vue";
import ColorInner from "@/components/partials/ColorInner.vue";

import { shallowRef, computed } from "vue";

const state = shallowRef({
  sections: [
    {
      title: "crop",
      icon: CropIcon,
      $child: CropInner,
    },
    {
      title: "rotate",
      icon: RotateIcon,
      $child: RotateInner,
    },
    {
      title: "resize",
      icon: ResizeIcon,
      $child: ResizeInner,
    },
    {
      title: "basic adjust",
      icon: AdjustIcon,
      $child: AdjustInner,
    },
    {
      title: "color",
      icon: ColorIcon,
      $child: ColorInner,
    },
  ],
});

export const sections = computed(() => {
  return state.value.sections;
});

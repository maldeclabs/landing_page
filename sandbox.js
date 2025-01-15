import { inView, animate } from "https://cdn.jsdelivr.net/npm/motion@11.18.0/+esm";

// animate header on load
animate(".bg", { opacity: [0, 1], y: [-50, 0] }, { duration: 1 });
animate(".title", { opacity: [0, 1], y: [-50, 0] }, { duration: 1.2 });
animate(".btn", { opacity: [0, 1], y: [-50, 0] }, { duration: 1.4 });

// animate platforms when in view
inView(".platform-item", ({ target }) => {
  animate(target, { opacity: 1, y: [50, 0] }, { duration: 0.8 });
});

// animate features when in view
inView(".feature-item", ({ target }) => {
  // animate the left text
  const leftText = target.querySelector(".feature-text.left");
  if (leftText) {
    animate(leftText, { opacity: [0, 1], x: [-100, 0] }, { duration: 0.8 });
  }

  // animate the right text
  const rightText = target.querySelector(".feature-text.right");
  if (rightText) {
    animate(rightText, { opacity: [0, 1], x: [100, 0] }, { duration: 0.8 });
  }
});

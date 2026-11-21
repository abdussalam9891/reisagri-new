/* Imperative rAF animations ported from the original hero (features/hero). */

const EASE = (t) => 1 - Math.pow(1 - t, 4);

function animate({ delay = 0, duration, draw }) {
  let start = null;
  function frame(time) {
    if (!start) start = time;
    const elapsed = time - start;
    if (elapsed < delay) {
      requestAnimationFrame(frame);
      return;
    }
    const progress = Math.min((elapsed - delay) / duration, 1);
    draw(EASE(progress));
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

export function animateImageEnter(image, delay = 0) {
  if (!image) return;
  image.style.opacity = 0;
  image.style.transform = "translateY(-180px) scale(1.15)";
  animate({
    delay,
    duration: 1200,
    draw(p) {
      image.style.opacity = p;
      image.style.transform = `translateY(${-180 + p * 180}px) scale(${1.15 - p * 0.15})`;
    },
  });
}

export function animateImageZoom(image, delay = 0) {
  if (!image) return undefined;
  return setTimeout(() => {
    image.animate(
      [{ transform: "translateY(0) scale(1)" }, { transform: "translateY(0) scale(1.08)" }],
      { duration: 5200, easing: "linear", fill: "forwards" }
    );
  }, delay);
}

export function animateTitleLine(line, delay = 0) {
  line.style.opacity = 0;
  line.style.transform = "translateY(80px)";
  animate({
    delay,
    duration: 900,
    draw(p) {
      line.style.opacity = p;
      line.style.transform = `translateY(${80 - p * 80}px)`;
    },
  });
}

export function animateDescription(element, delay = 0) {
  if (!element) return;
  element.style.opacity = 0;
  element.style.filter = "blur(8px)";
  element.style.transform = "translateY(40px)";
  animate({
    delay,
    duration: 900,
    draw(p) {
      element.style.opacity = p;
      element.style.filter = `blur(${8 - p * 8}px)`;
      element.style.transform = `translateY(${40 - p * 40}px)`;
    },
  });
}

export function animateButton(button, delay = 0) {
  if (!button) return;
  button.style.opacity = 0;
  button.style.transform = "translateY(50px) scale(.92)";
  animate({
    delay,
    duration: 800,
    draw(p) {
      button.style.opacity = p;
      button.style.transform = `translateY(${50 - p * 50}px) scale(${0.92 + p * 0.08})`;
    },
  });
}

/** Pausable progress timeline driving the slide indicators. */
export function createTimeline() {
  let rafId = null;
  let running = false;
  let duration = 6500;
  let startTime = 0;
  let elapsed = 0;
  let onProgress = () => {};
  let onComplete = () => {};

  function tick(timestamp) {
    if (!running) return;
    if (!startTime) startTime = timestamp - elapsed;
    elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    onProgress(progress);
    if (progress >= 1) {
      running = false;
      rafId = null;
      elapsed = 0;
      startTime = 0;
      onComplete();
      return;
    }
    rafId = requestAnimationFrame(tick);
  }

  function cancel() {
    running = false;
    if (rafId !== null) cancelAnimationFrame(rafId);
    rafId = null;
    startTime = 0;
    elapsed = 0;
    onProgress = () => {};
    onComplete = () => {};
  }

  return {
    start({ slideDuration, progress, complete }) {
      cancel();
      duration = slideDuration;
      running = true;
      onProgress = progress;
      onComplete = complete;
      rafId = requestAnimationFrame(tick);
    },
    pause() {
      if (!running) return;
      running = false;
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
    },
    resume() {
      if (running) return;
      running = true;
      startTime = 0;
      rafId = requestAnimationFrame(tick);
    },
    cancel,
  };
}

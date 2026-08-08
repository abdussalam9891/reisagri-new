import {
  ABOUT_PREVIEW,
} from "../../constants/home.js";

import {
  createAboutPreviewCard,
} from "../../components/common/AboutPreviewCard.js";

import {
  initAboutCounters,
} from "./aboutCounters.js";


export function renderAboutPreview() {

  const container =
    document.getElementById(
      "aboutPreviewSection"
    );

  if (!container) return;


  container.innerHTML = `

    <div
      class="
        mx-auto
        w-full
        max-w-7xl

        px-5

        py-12

        sm:px-6
        sm:py-14

        lg:px-8
        lg:py-20

        xl:px-10
        xl:py-24
      "
    >

      ${createAboutPreviewCard(
        ABOUT_PREVIEW
      )}

    </div>

  `;


  window.lucide?.createIcons();


  // Counters must initialize AFTER
  // the component has been inserted.

  initAboutCounters();

}


export function initAboutVideo() {

  const video =
    document.querySelector(
      "[data-about-video]"
    );


  const toggle =
    document.querySelector(
      "[data-video-toggle]"
    );


  if (!video || !toggle) return;


  const playIcon =
    toggle.querySelector(
      "[data-video-play-icon]"
    );


  const pauseIcon =
    toggle.querySelector(
      "[data-video-pause-icon]"
    );


  function updateButton() {

    const isPlaying =
      !video.paused;


    playIcon.classList.toggle(
      "hidden",
      isPlaying
    );


    pauseIcon.classList.toggle(
      "hidden",
      !isPlaying
    );


    toggle.setAttribute(
      "aria-label",

      isPlaying
        ? "Pause video"
        : "Play video"
    );

  }


  toggle.addEventListener(
    "click",
    () => {

      if (video.paused) {

        video.play();

      } else {

        video.pause();

      }

    }
  );


  video.addEventListener(
    "play",
    updateButton
  );


  video.addEventListener(
    "pause",
    updateButton
  );


  updateButton();

}

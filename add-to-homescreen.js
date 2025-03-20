@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);
.adhs-container {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  z-index: 999999;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;
  font-family: "Roboto", sans-serif;
  color: #212121;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.adhs-container.visible {
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 1;
}

.adhs-container .adhs-modal {
  background-color: #f5f5f5;
  border-radius: 7px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  left: 50%;
  margin: auto;
  max-width: 400px;
  padding: 49px 19px 32px 19px;
  position: absolute;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  line-height: normal;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 90%;
}

@keyframes adhs-bounce-modal {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(-50%) translateX(-50%);
  }

  40% {
    transform: translateY(-40%) translateX(-50%);
  }

  60% {
    transform: translateY(-55%) translateX(-50%);
  }
}

.adhs-container.visible .adhs-modal {
  opacity: 1;
  animation: adhs-bounce-modal 0.5s;
}

.adhs-container .adhs-logo {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  height: 80px;
  width: 80px;
  top: -45px;
  z-index: 1000000;
}

.adhs-container .adhs-logo img {
  width: 80px;
  height: 80px;
  border-radius: 12px;
}

.adhs-container .adhs-modal .adhs-title {
  font-size: 27px;
  font-weight: 700;
  padding: 0px 0px 18px 0px;
  text-align: justify;
  word-spacing: -0.1em;
}

.adhs-container .adhs-modal .adhs-error-title {
  font-size: 24px;
  font-weight: 700;
  margin: 5px 10px 15px 10px;
  text-align: justify;
}

.adhs-container .adhs-modal .adhs-error-body {
  font-size: 20px;
  margin: 0px 10px 20px 10px;
  text-align: justify;
}

.adhs-container .adhs-modal .adhs-error-copy-link-button {
  background-color: white;
  border: 1px solid;
  border-radius: 4px;
  font-size: 19px;
  padding: 5px;
}

.adhs-container .adhs-modal .adhs-list {
  display: flex;
  flex-direction: column;
}

.adhs-container .adhs-modal .adhs-list .adhs-emphasis {
  font-weight: 700;
  font-size: 20px;
}

.adhs-container .adhs-modal .adhs-list .adhs-your-app-icon {
  height: 40px;
  margin: 0px 5px -13px 5px;
  border-radius: 6px;
}

.adhs-container .adhs-modal .adhs-list .adhs-list-item {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: flex-start;
  margin: 0px 0px 10px 0px;
}

.adhs-container .adhs-modal .adhs-list .adhs-list-item .adhs-number-container {
  flex-direction: column;
  display: flex;
  /* margin: 0px 5px 0px 0px; */
}

.adhs-container.adhs-desktop
  .adhs-modal
  .adhs-list
  .adhs-list-item
  .adhs-number-container {
  margin: 0px 5px 0px 0px;
}

.adhs-container.adhs-mobile
  .adhs-modal
  .adhs-list
  .adhs-list-item
  .adhs-number-container {
  margin: 5px 5px 0px 0px;
}

.adhs-container .adhs-modal .adhs-list .adhs-list-item .adhs-circle {
  font-size: 30px;
  height: 32px;
  width: 32px;
  border-radius: 100px;
  background-color: #000000;
}

.adhs-container .adhs-modal .adhs-list .adhs-list-item .adhs-number {
  padding: 6px 0px 0px 11px;
  color: white;
  font-size: 17px;
  font-weight: 100;
}

[dir="rtl"]
  .adhs-container
  .adhs-modal
  .adhs-list
  .adhs-list-item
  .adhs-number {
  padding: 6px 11px 0px 11px;
}

.adhs-container .adhs-modal .adhs-list .adhs-list-item .adhs-instruction {
  font-size: 19px;
  line-height: 27px;
  padding: 0px 5px 0px 5px;
  /* text-align: justify; */
}

.adhs-container.adhs-mobile
  .adhs-modal
  .adhs-list
  .adhs-list-item
  .adhs-instruction:has(.adhs-list-button) {
  padding-top: 5px;
}

.adhs-container .adhs-modal .adhs-list .adhs-list-item .adhs-list-button {
  display: inline-block;
  /* border: 0.5px solid lightgrey; */
  border-radius: 4px;
  box-shadow: 1px 1px 2px gray;
  margin-right: 3px;
  padding: 2px 8px;
  white-space: nowrap;
}

.adhs-container
  .adhs-modal
  .adhs-list
  .adhs-list-item
  .adhs-list-button:has(.adhs-list-button-image-only) {
  display: inline-block;
  padding: 1px 8px;
}

.adhs-container
  .adhs-modal
  .adhs-list
  .adhs-list-item
  .adhs-list-button
  .adhs-list-button-text {
  display: inline;
  font-size: 16px;
  position: relative;
  top: -1px;
}

.adhs-container
  .adhs-modal
  .adhs-list
  .adhs-list-item
  .adhs-list-button
  .adhs-list-button-image-only {
  display: inline;
  position: relative;
  left: 0px;
  top: 3px;
}

.adhs-container
  .adhs-modal
  .adhs-list
  .adhs-list-item
  .adhs-list-button
  .adhs-list-button-image-left {
  display: inline;
  position: relative;
  margin: 0 5px 0 0;
  top: 2px;
}

.adhs-container
  .adhs-modal
  .adhs-list
  .adhs-list-item
  .adhs-list-button
  .adhs-list-button-image-right {
  display: inline;
  position: relative;
  margin: 0 0 0 5px;
  top: 2px;
}

/* IOS Safari */
.adhs-container.adhs-ios.adhs-safari
  .adhs-modal
  .adhs-list
  .adhs-ios-safari-sharing-api-button {
  height: 35px;
  margin: 0px 5px -7px 5px;
  box-shadow: 1px 1px 2px gray;
  border-radius: 4px;
  background-color: #ffffff;
}

.adhs-container.adhs-ios.adhs-safari
  .adhs-modal
  .adhs-list
  .adhs-ios-safari-add-to-home-screen-button {
  height: 33px;
  margin: 0px 5px -7px 5px;
  box-shadow: 1px 1px 2px gray;
  border-radius: 4px;
  background-color: #ffffff;
}

@keyframes adhs-ios-safari-bouncing-arrow-animation {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-30px);
  }

  60% {
    transform: translateY(-15px);
  }
}

@keyframes adhs-ios-ipad-safari-bouncing-arrow-animation {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) rotate(180deg);
  }

  40% {
    transform: translateY(30px) rotate(180deg);
  }

  60% {
    transform: translateY(15px) rotate(180deg);
  }
}

.adhs-container.adhs-ios.adhs-safari
  .adhs-ios-safari-bouncing-arrow-container
  img {
  height: 60px;
  position: absolute;
  top: calc(100dvh - 60px);
  left: 0;
  right: 0;
  margin: auto;
  animation: adhs-ios-safari-bouncing-arrow-animation 2s infinite;
}

.adhs-container.adhs-ios.adhs-safari
  .adhs-ios-ipad-safari-bouncing-arrow-container
  img {
  height: 60px;
  position: absolute;
  top: 0;
  right: 120px;
  animation: adhs-ios-ipad-safari-bouncing-arrow-animation 2s infinite;
}

/* IOS Chrome */
@keyframes adhs-ios-chrome-bouncing-arrow-animation {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(20px);
  }

  60% {
    transform: translateY(5px);
  }
}

.adhs-container.adhs-ios.adhs-chrome
  .adhs-modal
  .adhs-list
  .adhs-ios-chrome-more-button {
  height: 35px;
  margin: 0px 5px -7px 5px;
  box-shadow: 1px 1px 2px gray;
  border-radius: 4px;
  background-color: #ffffff;
}

.adhs-container.adhs-ios.adhs-chrome
  .adhs-ios-chrome-bouncing-arrow-container
  img {
  height: 40px;
  position: absolute;
  top: 0;
  right: 18px;
  animation: adhs-ios-chrome-bouncing-arrow-animation 1.5s infinite;
}

.adhs-container.adhs-ios.adhs-chrome
  .adhs-modal
  .adhs-list
  .adhs-ios-chrome-add-to-home-screen-button {
  height: 35px;
  margin: 0px 5px -7px 5px;
  box-shadow: 1px 1px 2px gray;
  border-radius: 4px;
  background-color: #ffffff;
}

/* Android Chrome */
@keyframes adhs-android-chrome-bouncing-arrow-animation {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(20px);
  }

  60% {
    transform: translateY(5px);
  }
}

.adhs-container.adhs-android.adhs-chrome
  .adhs-android-chrome-bouncing-arrow-container
  img {
  height: 40px;
  position: absolute;
  top: 0;
  right: 15px;
  animation: adhs-android-chrome-bouncing-arrow-animation 1.5s infinite;
}

.adhs-container.adhs-android.adhs-chrome
  .adhs-modal
  .adhs-list
  .adhs-android-chrome-more-button {
  height: 30px;
  background: white;
  margin: 0px 5px -7px 5px;
  box-shadow: 1px 1px 2px gray;
  border-radius: 4px;
}

.adhs-container.adhs-android.adhs-chrome
  .adhs-modal
  .adhs-list
  .adhs-android-chrome-add-to-homescreen-button {
  height: 30px;
  background: white;
  margin: 0px 5px -9px 5px;
  box-shadow: 1px 1px 2px gray;
  border-radius: 4px;
  padding: 0px 7px 0px 4px;
}

.adhs-container.adhs-android.adhs-chrome
  .adhs-modal
  .adhs-list
  .adhs-android-chrome-install-app {
  height: 30px;
  background: white;
  margin: 10px 5px -10px 5px;
  box-shadow: 1px 1px 2px gray;
  border-radius: 4px;
  padding: 0px;
}

.adhs-container.adhs-android.adhs-chrome
  .adhs-modal
  .adhs-list
  .adhs-list-item
  .adhs-instruction {
  line-height: 34px;
}

/* In-App System Browser */
.adhs-container.adhs-inappbrowser-openinsystembrowser .adhs-modal .adhs-title {
  padding: 0px 0px 9px 0px;
}

.adhs-container.adhs-inappbrowser-openinsystembrowser
  .adhs-modal
  .adhs-list
  .adhs-emphasis {
  padding: 6px 8px;
  border-radius: 5px;
  margin: 0px 0px 0px 5px;
  box-shadow: 1px 1px 2px gray;
  background: white;
  width: fit-content;
  font-weight: 500;
}

.adhs-container.adhs-inappbrowser-openinsystembrowser
  .adhs-modal
  .adhs-list
  .adhs-list-item {
  margin: 6px 0px 9px 0px;
}

.adhs-container.adhs-inappbrowser-openinsystembrowser
  .adhs-modal
  .adhs-list
  .adhs-list-item
  .adhs-instruction {
  padding: 0px 0px 2px 9px;
  line-height: 42px;
}

@keyframes adhs-inappbrowser-openinsystembrowser-bouncing-arrow-animation {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(20px);
  }

  60% {
    transform: translateY(5px);
  }
}

.adhs-container.adhs-inappbrowser-openinsystembrowser
  .adhs-inappbrowser-openinsystembrowser-bouncing-arrow-container
  img {
  height: 40px;
  position: absolute;
  top: 0;
  right: 6px;
  animation: adhs-inappbrowser-openinsystembrowser-bouncing-arrow-animation 1.5s
    infinite;
}

.adhs-container.adhs-inappbrowser-openinsystembrowser
  .adhs-modal
  .adhs-list
  .adhs-more-button {
  height: 35px;
  background: white;
  margin: 0px 5px -11px 5px;
  box-shadow: 1px 1px 2px gray;
  border-radius: 4px;
}

/* In-App Safari Browser */
.adhs-container.adhs-inappbrowser-openinsafari .adhs-modal .adhs-title {
  padding: 0px 0px 9px 0px;
}

.adhs-container.adhs-inappbrowser-openinsafari
  .adhs-modal
  .adhs-list
  .adhs-emphasis {
  padding: 6px 8px;
  border-radius: 5px;
  margin: 0px 0px 0px 5px;
  box-shadow: 1px 1px 2px gray;
  background: white;
  width: fit-content;
  font-weight: 500;
}

.adhs-container.adhs-inappbrowser-openinsafari
  .adhs-modal
  .adhs-list
  .adhs-list-item {
  margin: 6px 0px 9px 0px;
}

.adhs-container.adhs-inappbrowser-openinsafari
  .adhs-modal
  .adhs-list
  .adhs-list-item
  .adhs-instruction {
  padding: 0px 0px 0px 9px;
  line-height: 34px;
  margin: 4px 0px 0px 0px;
}

@keyframes adhs-inappbrowser-openinsafari-bouncing-arrow-animation {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-5px);
  }
}

.adhs-container.adhs-inappbrowser-openinsafari
  .adhs-inappbrowser-openinsafari-bouncing-arrow-container
  img {
  height: 40px;
  position: absolute;
  top: calc(100dvh - 40px);
  right: 15px;
  animation: adhs-inappbrowser-openinsafari-bouncing-arrow-animation 1.5s
    infinite;
}

.adhs-container.adhs-inappbrowser-openinsafari
  .adhs-modal
  .adhs-list
  .adhs-more-button {
  height: 35px;
  background: white;
  margin: 0px 5px -11px 5px;
  box-shadow: 1px 1px 2px gray;
  border-radius: 4px;
}

.adhs-container.adhs-desktop .adhs-modal {
  background-color: #f5f5f5;
  border-radius: 7px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 45px 45px 28px 40px;
  margin: auto;
  max-width: 400px;
}

.adhs-container .adhs-modal .adhs-install-app {
  /* font-size: 22px; */
  font-weight: 600;
  text-align: center;
  /* margin: 0px 0px 0px 0px; */
  padding: 0px;
}

.adhs-container.adhs-desktop .adhs-modal .adhs-install-app {
  font-size: 22px;
  margin: 0px 0px 0px 0px;
}

.adhs-container.adhs-mobile .adhs-modal .adhs-install-app {
  font-size: 23px;
  margin: -2px 0px 0px 0px;
}

.adhs-container .adhs-modal .adhs-app-name {
  /* font-size: 22px; */
  font-weight: 600;
  margin: 5px auto 1px auto;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.adhs-container.adhs-desktop .adhs-modal .adhs-app-name {
  font-size: 22px;
  margin: 0px auto 1px auto;
}

.adhs-container.adhs-mobile .adhs-modal .adhs-app-name {
  font-size: 23px;
  margin: 0px auto 18px auto;
}

.adhs-container .adhs-modal .adhs-app-url {
  font-size: 13px;
  font-weight: 300;
  margin: 0 auto 24px auto;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.adhs-container.adhs-desktop-chrome .adhs-modal .adhs-app-url {
  margin-bottom: 18px;
}

.adhs-container.adhs-desktop-safari .adhs-modal .adhs-app-url {
  margin-bottom: 24px;
}

.adhs-container.adhs-mobile .adhs-modal .adhs-app-url {
  margin: 0 auto 20px auto;
}
.adhs-container .adhs-modal .adhs-blurb {
  font-size: 13px;
  font-weight: 400;
  margin: 0px 0px 14px 0px;
}

.adhs-container.adhs-mobile .adhs-modal .adhs-blurb {
  font-size: 15px;
  margin: 13px 0px 5px 0px;
}

.adhs-container.adhs-desktop-chrome .adhs-modal .adhs-blurb {
  margin-top: 0px;
}

.adhs-container.adhs-desktop-safari .adhs-modal .adhs-blurb {
  margin-top: 12px;
}

.adhs-container .adhs-modal .adhs-button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 11px;
}
.adhs-container .adhs-modal .adhs-button {
  background-color: #1d64f0;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  border: none;
  padding: 10px 33px;
  border-radius: 9px;
}

.adhs-container.adhs-desktop-safari
  .adhs-desktop-safari-bouncing-arrow-container
  img {
  height: 40px;
  position: absolute;
  top: 0;
  right: 88px;
  animation: adhs-ios-chrome-bouncing-arrow-animation 1.5s infinite;
}

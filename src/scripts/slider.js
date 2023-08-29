const slider = document.querySelector('.slider');
const leftBtn = document.querySelector('.button__left');
const rightBtn = document.querySelector('.button__right');

function getSliderTransitionX() {
  return +getComputedStyle(slider).transform.slice(7, -1).split(',')[4];
}

function setButtonActive(button) {
  button.classList.remove('button_disabled');
  button.classList.add('button_active');
}

function setButtonDisabled(button) {
  button.classList.remove('button_active');
  button.classList.add('button_disabled');
}

function disabledBtn() {
  leftBtn.disabled = true;
  rightBtn.disabled = true;
}

function unDisabledBtn() {
  setTimeout(() => {
    leftBtn.disabled = false;
    rightBtn.disabled = false;
  }, 500);
}

rightBtn.addEventListener('click', () => {
  const currentPosition = getSliderTransitionX();
  disabledBtn();
  unDisabledBtn();
  if (currentPosition > -1080) {
    slider.style.transform = `translateX(${getSliderTransitionX() - 360}px)`;
    if (leftBtn.classList.contains('button_disabled')) {
      setButtonActive(leftBtn);
    }
    if (getSliderTransitionX() === -720) {
      setButtonDisabled(rightBtn);
    }
  }
});

leftBtn.addEventListener('click', () => {
  const currentPosition = getSliderTransitionX();
  disabledBtn();
  unDisabledBtn();
  if (currentPosition < 0) {
    slider.style.transform = `translateX(${getSliderTransitionX() + 360}px)`;
  }
  if (rightBtn.classList.contains('button_disabled')) {
    setButtonActive(rightBtn);
  }

  if (getSliderTransitionX() === -360) {
    setButtonDisabled(leftBtn);
  }
});

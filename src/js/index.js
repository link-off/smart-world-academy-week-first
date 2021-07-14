import Splide from "@splidejs/splide";
import smoothscroll from 'smoothscroll-polyfill';

// Burger Menu

document.querySelector('.burger').addEventListener('click', function () {
  document.querySelector('.burger span').classList.toggle('active');
  document.querySelector('.nav__list').classList.toggle('active');
})

// Slider

const handleSlider = () => {
  let slider = document.querySelector('[data-slider="slider"]')
  new Splide(slider, {
    type: 'slide',
    rewind: true,
    perPage: 1,
    arrows: false,
    autoWidth: true
  }).mount();
}
document.addEventListener('DOMContentLoaded', handleSlider);

// Scroll


const scrollUp = 'Up'
const scrollDown = 'Down'
//Fix smooth scroll in Safari and Microsoft Edge
smoothscroll.polyfill();

class ButtonScroll {
  constructor($button, scrollType) {
    this._button = document.querySelector($button)
    this._scrollType = scrollType
    this._addListener()
  }

  _handleButtonScrollUp() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }

  _handleButtonScrollDown() {
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    window.scroll({
      top: scrollHeight,
      behavior: "smooth"
    })
  }

  _addListener() {
    if (this._scrollType === 'Up') {
     this._button.addEventListener('click', this._handleButtonScrollUp)
    }

    if (this._scrollType === 'Down') {
      return this._button.addEventListener('click', this._handleButtonScrollDown)
    }

  }

}

const buttonUp = new ButtonScroll('[data-button="scrollUp"]', scrollUp)
const buttonDown = new ButtonScroll('[data-button="scrollDown"]', scrollDown)






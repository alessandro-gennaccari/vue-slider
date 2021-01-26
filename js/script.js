var slider = new Vue({
  el : '#slider',
  data : {
    imgs: [
      'img/1.jpg',
      'img/2.jpg',
      'img/3.jpg',
      'img/4.jpg',
      'img/5.jpg'
    ],
    counter: 0
  },
  // Al Keydown dei stati direzionali destra e sinistra lo slider eseguira le funzioni
  created() {
    addEventListener('keydown', function(e) {
      (e.key == 'ArrowLeft') ? slider.goPrev() : '';
      (e.key == 'ArrowRight') ? slider.goNext() : '';
    });
  },
  methods: {
    goNext(){
      (this.counter == (this.imgs.length - 1)) ? this.counter = 0 : this.counter++;
    },
    goPrev(){
      (this.counter == 0) ? this.counter = 4 : this.counter--;
    },
    pointClick(position){
      this.counter = position;
    }
  }
});
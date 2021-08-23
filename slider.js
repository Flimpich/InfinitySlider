class slider {
  constructor(doc) {
    this.rigth = doc.querySelector(".right");
    this.left = doc.querySelector(".left");
    this.element = doc.querySelectorAll(".element");
    this.flexGo = doc.querySelector(".flex-go");
    this.line = doc.querySelector(".header__slider-flex").offsetWidth;
    this.index = 0;
    this.shift = true;
    this.posInit;
  }

  clone () {
    this.cloneFirstElement = this.flexGo.firstElementChild.cloneNode(true);
    this.cloneLastElement = this.flexGo.lastElementChild.cloneNode(true);
  }

  cloneNode() {
    this.flexGo.append(this.cloneFirstElement);
    this.flexGo.prepend(this.cloneLastElement);
  }

  dvig(count) {
    this.flexGo.classList.add("shifting");
    if (this.shift) {
      this.posInit = this.flexGo.offsetLeft;
      if (count === 1) {
        this.flexGo.style.left = this.posInit - this.line + "px";
        this.index++;
      }
      if (count === -1) {
        this.flexGo.style.left = this.posInit + this.line + "px";
        this.index--;
      }
    }
    this.shift = false;
  }

  chek() {
    this.flexGo.classList.remove("shifting");
    if (this.index === -1) {
        this.flexGo.style.left = -(this.element.length * this.line) + "px";
        this.index = this.element.length - 1;
    }
    if (this.index === this.element.length) {
        this.flexGo.style.left = -this.line + "px";
        this.index = 0;
    }
    this.shift = true;
  }

    events() {
        this.rigth.addEventListener("click", function () {
            this.dvig(1);
        }.bind(this));
        this.left.addEventListener("click", function () {
            this.dvig(-1);
        }.bind(this));
        this.flexGo.addEventListener("transitionend", this.chek.bind(this));
    }

}

const infinity = new slider(document);
infinity.clone(); 
infinity.cloneNode();
infinity.events();





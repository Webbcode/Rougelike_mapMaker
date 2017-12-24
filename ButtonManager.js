function ButtonManager(){
  this.buttons = [];
  
  this.addButton = function(b){
    this.buttons[this.buttons.length] = b;
  }
  
  this.mouseClicked = function(){
    for (var i = 0; i < this.buttons.length;i++){
      this.buttons[i].mouseClicked();
    }
  }
  
  this.render = function(){ 
    for (var i = 0; i < this.buttons.length;i++){
      if (this.buttons[i]){
        this.buttons[i].render();
      }
    }
  }
}

function Button(x, y, w, h, t, f){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.t = t;
  this.f = f;
  
  this.render = function(){
    rect(this.x, this.y, this.w, this.h);
    textAlign(CENTER, CENTER);
    text(t, this.x, this.y, this.w, this.h);
  }
  this.mouseClicked = function(){
    if(contains(mouseX, mouseY, this.x, this.y, this.w, this.h)){
      f();
    }
  }
}
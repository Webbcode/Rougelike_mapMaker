function TileSelector(ssM, x, y, w, h){
  this.ssM = ssM;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.hover = false;
  this.id = 0;
  this.tileS = this.ssM.spriteSize;
  
  
  
  this.render = function(){
    for(var i = 0; i < ceil((h - 40) / (this.ssM.spriteSize));i++){
      rect(this.x, this.y + i * this.ssM.spriteSize, this.w, this.ssM.spriteSize);
      if(this.id + i < this.ssM.idMin){
        this.id = this.id + i + this.ssM.idMax;
      }else if(this.id + i >= this.ssM.idMax){
        this.ssM.renderSprite((this.id + i) % this.ssM.idMax, this.x, this.y + i * this.ssM.spriteSize, 64, 64);
      }else{
        this.ssM.renderSprite(this.id + i, this.x, this.y + i * this.ssM.spriteSize, 64, 64);
      }
    }
  }
  
  this.mouseClicked = function(){
    if(contains(mouseX, mouseY, this.x, this.y, this.w, this.h)){
      if(contains(mouseX, mouseY, this.x, this.y, this.w, this.h - 40)){
        mM.idS = floor(mouseY / this.tileS) + this.id;
      }
    }
  }
  
  this.mouseMoved = function(){
    
  }
  
  this.mouseWheel = function(){
    this.id += abs(event.delta) / event.delta;
  }
}
function SpriteSheetManager(spriteSheet, spriteSize){
  this.spriteSheet = loadImage(spriteSheet);
  this.spriteSize = spriteSize;
  this.SSTW = 5;
  this.SSTH = 10;
  this.idMin = 0;
  this.idMax = 29;
  
  this.renderSprite = function(id, x, y, w, h){
    if(id < this.idMax && id >= this.idMin){
      if(w && h){
        image(this.spriteSheet, x, y, w, h, (id % this.SSTW) * this.spriteSize, floor(id / this.SSTW) * this.spriteSize, this.spriteSize, this.spriteSize);
      }else{
        image(this.spriteSheet, x, y, this.spriteSize, this.spriteSize, (id % this.SSTW) * this.spriteSize, floor(id / this.SSTW) * this.spriteSize, this.spriteSize, this.spriteSize);
      }
    }
  }
  
}

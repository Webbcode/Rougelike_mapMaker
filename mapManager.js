function MapManager(x, y, w, h, tW, tH, ssM){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.idS = 0;
  this.tileLayout = [];
  this.tileLayoutObjects = [];
  this.tileType = [];
  this.mode = 0;
  this.ssM = ssM;
  this.tW = tW;
  this.tH = tH
  this.prevTile = [-1, -1];
  
  
  if(w <= h){
    this.tileS = (w / tW)
  }else{
    this.tileS = (h / tH)
  }
  
  for(var x = 0; x < tW;x++){
    toPush = [];
    toPushA = [];
    toPushB = [];
    for(var y = 0; y < tH;y++){
      toPush.push(-1.1);
      toPushB.push(-1.2);
      toPushA.push(3);
    }
    this.tileLayout.push(toPush);
    this.tileLayoutObjects.push(toPushB);
    this.tileType.push(toPushA);
  }
  
  this.setTile = function(mode, x, y){
    while (this.idS >= this.ssM.idMax && this.idS !== -1.1){
      this.idS -= this.ssM.idMax
    }
    while (this.idS < this.ssM.idMin && this.idS !== -1.1){
      this.idS += this.ssM.idMax
    }
    if(mode === "MOUSE"){
      tX = floor((x - this.x) / (this.tileS));
      tY = floor((y - this.y) / (this.tileS));
      if(this.mode === 0){
        this.tileLayout[tX][tY] = this.idS;
      }else if(this.mode === 1){
        this.tileLayoutObjects[tX][tY] = this.idS;
      }
    }else{
      if(this.mode === 0){
        this.tileLayout[x][y] = this.idS;
      }else if(this.mode === 1){
        this.tileLayoutObjects[x][y] = this.idS;
      }
    }
  }

  this.toggleSolid = function(mode, x, y){
    if(mode === "MOUSE"){
      tX = floor((x - this.x) / (this.tileS));
      tY = floor((y - this.y) / (this.tileS));
      this.tileType[tX][tY]++;
      if(this.tileType[tX][tY] > 3){
        this.tileType[tX][tY] = 0;
      }
    }else{
      this.tileType[x][y]++;
      if(this.tileType[x][y] > 3){
        this.tileType[x][y] = 0;
      }
    }
  }
  
  this.render = function(){
    if(!mouseIsPressed){
      this.mode = 0;
    }
    for(var x = 0; x < tW;x++){
      for(var y = 0; y < tW;y++){
        if(this.tileLayout[x][y] !== -1.1 && this.tileLayout[x][y] !== -1.2){
          this.ssM.renderSprite(this.tileLayout[x][y], x * this.tileS + this.x, y * this.tileS + this.y, this.tileS, this.tileS);
        }
      }
    }
    
    for(var x = 0; x < tW;x++){
      for(var y = 0; y < tW;y++){
        if(this.tileLayoutObjects[x][y] !== -1.1 && this.tileLayoutObjects[x][y] !== -1.2){
          this.ssM.renderSprite(this.tileLayoutObjects[x][y], x * this.tileS + this.x, y * this.tileS + this.y, this.tileS, this.tileS);
        }
        if(this.tileType[x][y] === 0){
          fill(255, 0, 0, 255 / 5);
          rect(x * this.tileS + this.x, y * this.tileS + this.y, this.tileS, this.tileS)
          fill(255);
        }else if(this.tileType[x][y] === 1){
          fill(0, 255, 0, 255 / 5);
          rect(x * this.tileS + this.x, y * this.tileS + this.y, this.tileS, this.tileS)
          fill(255);
        }else if(this.tileType[x][y] === 2){
          fill(0, 0, 255, 255 / 5);
          rect(x * this.tileS + this.x, y * this.tileS + this.y, this.tileS, this.tileS)
          fill(255);
        }
      }
    }
  }
  
  this.mouseClicked = function(){
    if(contains(mouseX, mouseY, this.x, this.y, this.tileS * this.tW, this.tileS * this.tH)){
      if(mouseButton !== CENTER){
        if(mouseButton === RIGHT){
          this.mode = 1;
        }
        this.setTile("MOUSE", mouseX, mouseY);
      }
    }
  }
  this.mouseDragged = function(){
    if(mouseIsPressed){
      if(contains(mouseX, mouseY, this.x, this.y, this.tileS * this.tW, this.tileS * this.tH)){
        if(mouseButton !== CENTER){
          if(mouseButton === RIGHT){
            this.mode = 1;
          }
          this.setTile("MOUSE", mouseX, mouseY);
        }else{
          if(this.prevTile[0] !== floor((mouseX - this.x) / this.tileS) || this.prevTile[1] !== floor((mouseY - this.y) / this.tileS)){
            this.prevTile = [floor((mouseX - this.x) / this.tileS), floor((mouseY - this.y) / this.tileS)];
            this.toggleSolid("MOUSE", mouseX, mouseY);
          }
        }
      }
    }
  }
  this.mouseReleased = function(){
    this.prevTile = [-1, -1]
  }
  
  this.downloadMapS = function(){
    mapData = "addMap([";
    for(var i = 0; i < this.tileLayout.length;i++){
      for (var j = 0; j < this.tileLayout[0].length;j++){
        if(i < this.tileLayout.length - 1 || j < this.tileLayout[0].length - 1){
          mapData = mapData + this.tileLayout[i][j] + ",";
        }else{
          mapData = mapData + this.tileLayout[i][j] + "],[";
        }
      }
    }
    for(var i = 0; i < this.tileLayoutObjects.length;i++){
      for (var j = 0; j < this.tileLayoutObjects[0].length;j++){
        if(i < this.tileLayoutObjects.length - 1 || j < this.tileLayoutObjects[0].length - 1){
          mapData = mapData + this.tileLayoutObjects[i][j] + ",";
        }else{
          mapData = mapData + this.tileLayoutObjects[i][j] + "],[";
        }
      }
    }
    for(var i = 0; i < this.tileType.length;i++){
      for (var j = 0; j < this.tileType[0].length;j++){
        if(i < this.tileType.length - 1 || j < this.tileType[0].length - 1){
          mapData = mapData + this.tileType[i][j] + ",";
        }else{
          mapData = mapData + this.tileType[i][j] + "]);";
        }
      }
    }
    console.log(mapData);
    download(mapData, "map.js", "text/javascript");
  }
  
  this.downloadButton = new Button(width - this.ssM.spriteSize * 2 , 0, this.ssM.spriteSize, 40, "Download Map", function(){mM.downloadMapS()});
  bm.addButton(this.downloadButton);
}
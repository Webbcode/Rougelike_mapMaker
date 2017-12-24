var ssM, mM;
var ts, bm;
var c = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ssM = new SpriteSheetManager("tileset.png", 64);
  bm = new ButtonManager();
  ts = new TileSelector(ssM, width - 64, 0, 64, height);
  mM = new MapManager(0, 0, width - ssM.spriteSize * 3, height, 16, 16, ssM);
}

function draw() {
  background(c);
  
  ts.render();
  bm.render();
  mM.render();
  fill(255, 0, 0, 255 / 5);
  rect(width - 64 * 2, 40, 64, 64);
  fill(0, 255, 0, 255 / 5);
  rect(width - 64 * 2, 40 + 64, 64, 64);
  fill(0, 0, 255, 255 / 5);
  rect(width - 64 * 2, 40 + 64 * 2, 64, 64);
  fill(0, 255, 255, 255 / 5);
  rect(width - 64 * 2, 40 + 64 * 3, 64, 64);
  fill(255, 0, 255, 255 / 5);
  rect(width - 64 * 2, 40 + 64 * 4, 64, 64);
  fill(255);
  textAlign(RIGHT, CENTER);
  text("Solid",width - 64 * 3, 40, 64, 64);
  text("Player Spawn",width - 64 * 3, 40 + 64, 64, 64);
  text("Player Entry",width - 64 * 3, 40 + 64 * 2, 64, 64);
  text("Enemy Spawn",width - 64 * 3, 40 + 64 * 3, 64, 64);
  text("Boss Spawn",width - 64 * 3, 40 + 64 * 4, 64, 64);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Download Map", width - this.ssM.spriteSize * 2, 0, 64, 40);
  fill(255);
}

function keyPressed(){
  
}

function mouseClicked(){
  ts.mouseClicked();
  bm.mouseClicked();
  mM.mouseClicked();
}

function mouseDragged(){
  mM.mouseDragged();
}

function mouseWheel(){
  ts.mouseWheel();
}

function mouseReleased(){
  mM.mouseReleased();
}
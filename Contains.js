function contains(mx, my, x, y, w, h){
  return !(mx < x || my < y || mx > x + w || my > y + h);
}
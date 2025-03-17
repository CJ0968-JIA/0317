function setup() {
  //createCanvas(400, 400);
  //產生一個寬高為視窗寬與高的畫布
  createCanvas(windowWidth, windowHeight);
  //設定背景色
  background("#cbf3f0");

  // 加入 iframe
  let iframe = createElement('iframe');
  iframe.attribute('src', 'https://www.et.tku.edu.tw/');
  iframe.attribute('width', '80%');
  iframe.attribute('height', '80%');
  iframe.style('border', 'none');
  iframe.position(windowWidth * 0.1, windowHeight * 0.1);
}

let angle = 0;

function draw() {
  background("#cbf3f0");

  let seaweedCount = Math.floor(windowWidth / 50); // 減少線條數量
  for (let i = 0; i < seaweedCount; i++) {
    let colorValue = map(i, 0, seaweedCount, 0, 255);
    drawSeaweed(i * 50, windowHeight, angle, colorValue); // 調整間隔
  }
  
  drawFish();
  
  angle += 0.05;

  // 加入超連結
  fill(0);
  noStroke();
  textSize(16);
  textAlign(CENTER);
  text("https://www.et.tku.edu.tw/", windowWidth / 2, windowHeight - 20);
}

function drawFish() {
  fill(255, 100, 100);
  noStroke();
  
  // 畫幾隻魚
  for (let i = 0; i < 5; i++) {
    let x = (frameCount * 2 + i * 100) % windowWidth;
    let y = windowHeight / 2 + sin(frameCount * 0.05 + i) * 50;
    ellipse(x, y, 30, 15); // 魚的身體
    triangle(x - 15, y, x - 25, y - 5, x - 25, y + 5); // 魚的尾巴
  }
}

function drawSeaweed(baseX, baseY, angle, colorValue) {
  let x = baseX + sin(angle) * 5;
  let y1 = baseY;
  let y2 = baseY - 400;
  
  strokeWeight(30); // 寬度改為 30
  noFill();
  
  stroke(colorValue, 100, 150, 150); // 設定顏色，增加透明度
  beginShape();
  vertex(baseX, y1);
  for (let i = 0; i <= 10; i++) {
    let interX = lerp(baseX, x, i / 10.0);
    let interY = lerp(y1, y2, i / 10.0);
    vertex(interX + sin(angle + i * 0.5) * 20, interY);
  }
  endShape();
}

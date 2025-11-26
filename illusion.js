// 착시 이미지 세트 구성
// bottom = 밑 이미지
// top = 겹쳐지는 공통 템플릿
// thumb = 썸네일 (bottom과 동일하게 사용)

const illusions = [
  { bottom: "round.jpg",   top: "template.png", thumb: "round.jpg" },
  { bottom: "dino.jpg",    top: "template.png", thumb: "dino.jpg" },
  { bottom: "maze.jpg",    top: "template.png", thumb: "maze.jpg" },
  { bottom: "geer.jpg",    top: "template.png", thumb: "geer.jpg" },
  { bottom: "creeper.jpg", top: "template.png", thumb: "creeper.jpg" },
  { bottom: "super.jpg",   top: "template.png", thumb: "super.jpg" }
];

const grid = document.getElementById("illusionGrid");
const modal = document.getElementById("illusionModal");
const bottomImg = document.getElementById("bottomImg");
const topImg = document.getElementById("topImg");
const slider = document.getElementById("slider");
const closeBtn = document.getElementById("closeModal");

// 🔹 랜덤하게 떠다니는 썸네일 생성
illusions.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "illusion-thumb floating";
  div.style.backgroundImage = `url(${item.thumb})`;

  // 랜덤한 위치/각도 적용
  div.style.transform = `translate(${Math.random() * 40 - 20}px, ${
    Math.random() * 40 - 20
  }px) rotate(${Math.random() * 10 - 5}deg)`;

  div.onclick = () => openIllusion(index);
  grid.appendChild(div);
});

// 🔹 모달 열기
function openIllusion(i) {
  modal.style.display = "flex";

  bottomImg.src = illusions[i].bottom;
  topImg.src = illusions[i].top;

  // 슬라이더를 0으로 초기화
  slider.value = 0;

  // top 이미지를 왼쪽 화면 밖에서 시작
  topImg.style.transform = "translateX(-100%)";
}

// 🔹 슬라이더로 top 이미지 이동
slider.addEventListener("input", () => {
  const v = parseInt(slider.value);

  // 0 → -100%, 50 → 0%, 100 → +100%
  const moveX = (v - 50) * 2;

  topImg.style.transform = `translateX(${moveX}%)`;
});

// 🔹 닫기 버튼
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// 🔹 배경 클릭 시 닫기
modal.onclick = e => {
  if (e.target === modal) modal.display = "none";
};

// 키 - 값 쌍이 자주 추가되거나 삭제되는 경우
// 키가 문자열이 아닌 경우

const { filter } = require("async");

const dogs = [
  {
    이름: "맥스",
    크기: "소형견",
    견종: "보스턴테리어",
    색상: "검정색",
  },
  {
    이름: "대니",
    크기: "대형견",
    견종: "레브라도레트리버",
    색상: "검정색",
  },
  {
    이름: "섀도",
    크기: "중형견",
    견종: "래브라도레트리버",
    색상: "갈색",
  },
];

let filters = {};

// 필터링 조건 추가
// 필터링 조건 삭제
// 모든 조건 제거

function addFilter(filters, key, value) {
  filters[key] = value;
}

function deleteFilters(filters, key) {
  delete filters[key];
}

function clearFilters(filters) {
  filters = {};
  return filters;
}

// 맵은 객체와 다르게 키-값 쌍을 자주 변경하는 경우에 적합하도록 특별히 설계되었다.
// 메서드는 예측 가능한 이름을 가지고 있다.

// let mapFilters = new Map();
// mapFilters.set("견종", "래브라도레트리버");

// console.log(mapFilters.get("견종"));

// 메서드 체이닝이 가능
// let mapFilters = new Map() //
//   .set("견종", "래브라도레트리버")
//   .set("크기", "대형견")
//   .set("색상", "갈색");

let mapFilters = new Map([
  ["견종", "래브라도레트리버"],
  ["크기", "대형견"],
  ["색상", "갈색"],
]);

// console.log(mapFilters.get("색상"));
// console.log(mapFilters.delete("색상"));

mapFilters.clear();

console.log(mapFilters.get("견종"));

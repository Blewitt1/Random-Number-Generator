const minInput = document.getElementById("minNum");
const maxInput = document.getElementById("maxNum");
const output = document.getElementById("output");

document.getElementById("generate").addEventListener("click", function () {
  let minNum = parseInt(minInput.value);
  let maxNum = parseInt(maxInput.value);

  // Swap if needed
  if (maxNum < minNum) {
    [minNum, maxNum] = [maxNum, minNum];
    minInput.value = minNum;
    maxInput.value = maxNum;
  }

  const range = maxNum - minNum + 1;
  const randomNum = Math.floor(Math.random() * range + minNum);

  output.value = randomNum;

  chrome.storage.local.set({
    minNum: minNum,
    maxNum: maxNum,
    lastOutput: randomNum
  });
});

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["minNum", "maxNum", "lastOutput"], (data) => {
    if (data.minNum !== undefined) minInput.value = data.minNum;
    if (data.maxNum !== undefined) maxInput.value = data.maxNum;
    if (data.lastOutput !== undefined) output.value = data.lastOutput;
  });
});

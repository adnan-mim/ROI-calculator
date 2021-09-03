function ROI(noOfFTE, avgSalaryPerFTE) {
  return {
    roi: Math.floor(
      ((avgSalaryPerFTE * 1.28 * noOfFTE * 5 - 50000 * 6) / (50000 * 6)) * 100
    ),
    payback: Math.floor((50000 / (avgSalaryPerFTE * noOfFTE - 50000)) * 12),
  };
}

const updateResult = () => {
  const noOfFTE = parseInt(document.querySelector('#fte').value);
  const avgSalaryPerFTE = parseInt(document.querySelector('#amount').value);

  document.querySelector('#selected-fte').innerHTML = noOfFTE;
  document.querySelector('#selected-amount').innerHTML = new Intl.NumberFormat('en-US').format(avgSalaryPerFTE);

  const { roi, payback } = ROI(noOfFTE, avgSalaryPerFTE);
  document.querySelector('#roi').innerHTML = roi;
  document.querySelector('#payback').innerHTML = payback;

  console.log({ roi, payback });
};

window.addEventListener('load', updateResult);

document.querySelector('#fte').addEventListener('input', updateResult);

document.querySelector('#amount').addEventListener('input', updateResult);

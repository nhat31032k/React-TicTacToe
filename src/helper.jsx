export function caculateWinner(cells) {
  // tạo các trường hợp chiến thnag81
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //tính toán bằng vòng lặp
  for (let index = 0; index < lines.length; index++) {
    // dùng distructuring để lấy ra các giá trị của lines[index] liền kề
    const [a, b, c] = lines[index];
    //   nếu chọn được 3 ô liền kề thì trả về giá trị của ô đó
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

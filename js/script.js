document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah form dari reload halaman

  // Ambil nilai dari form
  const berat = parseFloat(document.getElementById('berat').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value) / 100; // Konversi cm ke meter

  // Hitung BMI
  const bmi = berat / (tinggi * tinggi);

  // Tentukan kategori BMI
  let category;
  if (bmi < 18.5) {
    category = 'kekurangan berat badan';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'normal (ideal)';
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = 'kelebihan berat badan';
  } else {
    category =
      'kegemukan (Obesitas). Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.';
  }

  // Tampilkan hasil
  document.getElementById('bmiResult').innerText = `${bmi.toFixed(1)}`;
  document.getElementById(
    'bmiCategory'
  ).innerText = `Anda berada dalam kategori ${category}`;

  // Tampilkan div hasil
  const resultDiv = document.querySelector('.result');
  resultDiv.style.display = 'block';

  // Auto scroll ke bagian hasil
  resultDiv.scrollIntoView({ behavior: 'smooth' });
});

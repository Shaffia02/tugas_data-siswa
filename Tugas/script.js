document.addEventListener('DOMContentLoaded', function() {
    // Data siswa (contoh, bisa diambil dari API atau database nanti)
    const students = [
        { no: 1, nama: "Andi", kelas: "X-A", nilaiAkhir: 85 },
        { no: 2, nama: "Budi", kelas: "X-B", nilaiAkhir: 78 },
        { no: 3, nama: "Citra", kelas: "X-A", nilaiAkhir: 90 },
        { no: 4, nama: "Dinda", kelas: "X-C", nilaiAkhir: 88 },
        { no: 5, nama: "Eko", kelas: "X-B", nilaiAkhir: 75 },
        { no: 6, nama: "Fany", kelas: "X-C", nilaiAkhir: 100 },
        { no: 7, nama: "Gita", kelas: "X-A", nilaiAkhir: 92 },
        { no: 8, nama: "Hendra", kelas: "X-B", nilaiAkhir: 65 },
        { no: 9, nama: "Indah", kelas: "X-C", nilaiAkhir: 70 },
        { no: 10, nama: "Joko", kelas: "X-A", nilaiAkhir: 81 },
    ];

    const searchInput = document.getElementById('searchInput');
    const showGradesButton = document.getElementById('showGradesButton');
    const studentTableBody = document.querySelector('#studentTable tbody');

    // Fungsi untuk menampilkan data siswa di tabel
    function displayStudents(filteredStudents) {
        studentTableBody.innerHTML = ''; // Kosongkan tabel sebelum mengisi ulang
        filteredStudents.forEach(student => {
            const row = studentTableBody.insertRow();
            row.insertCell(0).textContent = student.no;
            row.insertCell(1).textContent = student.nama;
            row.insertCell(2).textContent = student.kelas;
            row.insertCell(3).textContent = student.nilaiAkhir;
        });
    }

    // Tampilan data siswa saat halaman pertama kali dimuat
    displayStudents(students);

    // Event listener untuk input pencarian
    searchInput.addEventListener('keyup', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredStudents = students.filter(student =>
            student.nama.toLowerCase().includes(searchTerm)
        );
        displayStudents(filteredStudents);
    });

    // Event listener untuk tombol "Tampilkan Nilai >"
    showGradesButton.addEventListener('click', function() {
        const minGrade = parseInt(prompt("Tampilkan siswa dengan nilai di atas berapa?"), 10);
        if (!isNaN(minGrade)) {
            const filteredStudents = students.filter(student => student.nilaiAkhir > minGrade);
            displayStudents(filteredStudents);
        } else {
            alert("Masukkan angka yang valid untuk nilai minimal.");
        }
    });
});
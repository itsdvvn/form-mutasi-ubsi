import React, { useState, useRef } from "react";
import { Printer, Download, FileText, User, MapPin, Send } from "lucide-react";

const App = () => {
  const [formData, setFormData] = useState({
    tanggal: new Date().toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    nama: "",
    nim: "",
    kelas: "",
    email: "",
    noHp: "",
    periodeAsal: "Maret 2025",
    kampusAsal: "",
    jenjangAsal: "S1",
    prodiAsal: "",
    waktuAsal: "",
    alasan: "",
    periodeTujuan: "Maret 2025",
    kampusTujuan: "",
    jenjangTujuan: "S1",
    prodiTujuan: "",
    waktuTujuan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans print:p-0 print:bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* FORM SECTION - Hidden during print */}
        <div className="w-full lg:w-1/2 space-y-6 print:hidden">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Form Pengajuan Mutasi
            </h2>

            {/* Data Pribadi */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <User className="w-4 h-4" /> Data Pribadi & Asal
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Nama Lengkap</label>
                  <input
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">NIM</label>
                  <input
                    name="nim"
                    value={formData.nim}
                    onChange={handleChange}
                    placeholder="Nomor Induk Mahasiswa"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Kelas</label>
                  <input
                    name="kelas"
                    value={formData.kelas}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">No Handphone</label>
                  <input
                    name="noHp"
                    value={formData.noHp}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">
                    Periode Kuliah Asal
                  </label>
                  <select
                    name="periodeAsal"
                    value={formData.periodeAsal}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="Maret 2025">Maret 2025</option>
                    <option value="September 2025">September 2025</option>
                  </select>
                </div>
                <div className="col-span-full space-y-1">
                  <label className="text-sm font-medium">
                    Kampus UBSI Cabang Asal
                  </label>
                  <input
                    name="kampusAsal"
                    value={formData.kampusAsal}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Jenjang Study</label>
                  <div className="flex gap-4 p-2 border rounded-lg">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="jenjangAsal"
                        value="S1"
                        checked={formData.jenjangAsal === "S1"}
                        onChange={handleChange}
                      />{" "}
                      S1
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="jenjangAsal"
                        value="D3"
                        checked={formData.jenjangAsal === "D3"}
                        onChange={handleChange}
                      />{" "}
                      D3
                    </label>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">
                    Program Studi Asal
                  </label>
                  <input
                    name="prodiAsal"
                    value={formData.prodiAsal}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">
                    Waktu Kuliah Asal
                  </label>
                  <input
                    name="waktuAsal"
                    value={formData.waktuAsal}
                    onChange={handleChange}
                    placeholder="Pagi / Sore / Malam"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Alasan */}
            <div className="mt-8 space-y-4">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <Send className="w-4 h-4" /> Alasan Mutasi
              </h3>
              <div className="space-y-1">
                <textarea
                  name="alasan"
                  value={formData.alasan}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Sebutkan alasan perpindahan Anda..."
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Data Tujuan */}
            <div className="mt-8 space-y-4">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Data Tujuan Mutasi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium">
                    Periode Kuliah Tujuan
                  </label>
                  <select
                    name="periodeTujuan"
                    value={formData.periodeTujuan}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="Maret 2025">Maret 2025</option>
                    <option value="September 2025">September 2025</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">
                    Kampus UBSI Cabang Tujuan
                  </label>
                  <input
                    name="kampusTujuan"
                    value={formData.kampusTujuan}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Jenjang Study</label>
                  <div className="flex gap-4 p-2 border rounded-lg">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="jenjangTujuan"
                        value="S1"
                        checked={formData.jenjangTujuan === "S1"}
                        onChange={handleChange}
                      />{" "}
                      S1
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="jenjangTujuan"
                        value="D3"
                        checked={formData.jenjangTujuan === "D3"}
                        onChange={handleChange}
                      />{" "}
                      D3
                    </label>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">
                    Program Studi Tujuan
                  </label>
                  <input
                    name="prodiTujuan"
                    value={formData.prodiTujuan}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">
                    Waktu Kuliah Tujuan
                  </label>
                  <input
                    name="waktuTujuan"
                    value={formData.waktuTujuan}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handlePrint}
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Printer className="w-5 h-5" /> Cetak Surat (PDF)
            </button>
          </div>
        </div>

        {/* PREVIEW SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="sticky top-8 w-full max-w-[210mm] aspect-[210/297] bg-white shadow-2xl overflow-hidden print:shadow-none print:w-full print:sticky-none">
            {/* The Document Area */}
            <div
              id="letter-document"
              className="p-[20mm] h-full text-[12pt] leading-relaxed text-black font-serif"
            >
              <div className="text-right mb-8 font-sans">
                Jakarta,{" "}
                {formData.tanggal ||
                  "..................................................."}
              </div>

              <div className="mb-8 font-sans">
                Kepada YTH.
                <br />
                Ketua Penerimaan Mahasiswa Baru
                <br />
                Universitas Bina Sarana Informatika
                <br />
                Di Tempat
              </div>

              <div className="font-bold mb-8 font-sans uppercase">
                Perihal : Pengajuan Mutasi
              </div>

              <div className="mb-4 text-justify font-sans">
                Saya yang bertanda tangan dibawah ini, telah terdaftar di
                Universitas Bina Sarana Informatika. Dan Akan mengajukan mutasi.
                Adapun data saya sebagai berikut :
              </div>

              <table className="w-full mb-6 font-sans">
                <tbody>
                  <tr>
                    <td className="w-48 py-1">Nama</td>
                    <td className="py-1">
                      :{" "}
                      {formData.nama ||
                        "...................................................................................."}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">NIM</td>
                    <td className="py-1">
                      :{" "}
                      {formData.nim ||
                        "...................................................................................."}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">Kelas</td>
                    <td className="py-1">
                      :{" "}
                      {formData.kelas ||
                        "...................................................................................."}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">Email</td>
                    <td className="py-1">
                      :{" "}
                      {formData.email ||
                        "...................................................................................."}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">No Handphone</td>
                    <td className="py-1">
                      :{" "}
                      {formData.noHp ||
                        "...................................................................................."}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">Periode kuliah</td>
                    <td className="py-1 font-bold">: {formData.periodeAsal}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Kampus UBSI cabang</td>
                    <td className="py-1">
                      :{" "}
                      {formData.kampusAsal ||
                        "...................................................................................."}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">Jenjang Study</td>
                    <td className="py-1 font-bold">: {formData.jenjangAsal}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Program Studi</td>
                    <td className="py-1">
                      :{" "}
                      {formData.prodiAsal ||
                        "...................................................................................."}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">Waktu Kuliah</td>
                    <td className="py-1">
                      :{" "}
                      {formData.waktuAsal ||
                        "...................................................................................."}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mb-6 text-justify font-sans">
                Dengan ini mengajukan perpindahan / mutasi dikarenakan{" "}
                <span className="font-medium">
                  {formData.alasan ||
                    ".........................................."}
                </span>
                . Adapun data pengajuan mutasi sebagai berikut :
              </div>

              <div className="font-bold underline mb-4 font-sans">
                Mengajukan Pindah ke :
              </div>
              <table className="w-full mb-8 font-sans">
                <tbody>
                  <tr>
                    <td className="w-48 py-1">Periode kuliah</td>
                    <td className="py-1 font-bold">
                      : {formData.periodeTujuan}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">Kampus UBSI cabang</td>
                    <td className="py-1">
                      :{" "}
                      {formData.kampusTujuan ||
                        "...................................................................................."}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">Jenjang Study</td>
                    <td className="py-1 font-bold">
                      : {formData.jenjangTujuan}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">Program Studi</td>
                    <td className="py-1">
                      :{" "}
                      {formData.prodiTujuan ||
                        "...................................................................................."}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">Waktu Kuliah</td>
                    <td className="py-1">
                      :{" "}
                      {formData.waktuTujuan ||
                        "...................................................................................."}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mb-12 font-sans">
                Demikian surat pengajuan mutasi ini dibuat. Tanpa ada unsur
                paksaan dari pihak manapun. Atas perhatian dan kebijaksanaannya.
                Kami mengucapkan banyak terima kasih.
              </div>

              <div className="flex flex-col items-start gap-20 font-sans">
                <div>Hormat Saya</div>
                <div className="font-bold underline uppercase">
                  ( {formData.nama || "Nama Lengkap"} )
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-slate-400 text-sm print:hidden">
            *Pratinjau di atas menyesuaikan dengan ukuran kertas A4
          </p>
        </div>
      </div>

      {/* Styles for print */}
      <style>{`
        @media print {
          body {
            background: white !important;
            margin: 0;
            padding: 0;
          }
          .print\\:hidden {
            display: none !important;
          }
          #letter-document {
            padding: 0;
            margin: 0;
            width: 100%;
            height: auto;
          }
          @page {
            size: A4;
            margin: 20mm;
          }
        }
      `}</style>
    </div>
  );
};

export default App;

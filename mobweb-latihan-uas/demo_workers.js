self.addEventListener('message', function(e){
	var data = e.data;
	var temp = data.lokasiAwal +" | "+ data.lokasiAkhir +" | " + data.berat +" | " + data.jenisKirim;
	if(data.lokasiAwal>data.lokasiAkhir){
		temp = (data.lokasiAwal-data.lokasiAkhir) * 10000 * data.jenisKirim * data.berat;
	}else{
		temp = (data.lokasiAkhir-data.lokasiAwal) * 10000 * data.jenisKirim * data.berat;
	}
	
	self.postMessage(temp);
}, false);


let nimetus = '', kettad = '', cpu = '', ram = '', hind = '';

setForm = (nimi, kettas, protsessor, malu, makse) => {
  nimetus = nimi;
  kettad = kettas;
  cpu = protsessor;
  ram = malu;
  hind = makse;
  return false;
};

setLegend = () => {
    var nim = document.getElementById('nim'),
      ket = document.getElementById('ket'),
      prots = document.getElementById('cpu'),
      malu = document.getElementById('ram'),
      hnd = document.getElementById('hind');
    return function renderLegend() {
        nim.textContent = nimetus;
        ket.textContent = kettad;
        prots.textContent = cpu;
        malu.textContent = ram;
        hnd.textContent = hind;
        return true;
    }
};

let eesnimi = '', perenimi = '', meiliaadress = '', aadress = '', makseviis = '';

isikjamaksSubmit = () => {
  let submit = document.getElementById("isik-ja-maks-form");
  eesnimi = submit.elements["eesnimi"].value;
  perenimi = submit.elements["perekonnanimi"].value;
  meiliaadress = submit.elements["meiliaadress"].value;
  aadress = submit.elements["aadress"].value;
  makseviis = submit.elements["makseviis"].value;
  console.log(".aaaa");
  return true;
};


// let a = 'undefined';
a = document.getElementById("algaja-server");

if(a!=='undefined'){
  // a.onclick=setForm('Algaja', 'SoftRAID 2x2TB HDD', 'Intel core i5', '4GB', '25');
  nimetus = "Algaja";
  kettad = "SoftRAID 2x2TB HDD";
  cpu = "Intel core i5";
  ram = "4GB";
  hind = "25";
}

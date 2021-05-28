// const cameraButton = document.getElementById("start-button");
const videoBox = document.getElementById("video-box");
const cameraInfo = document.getElementById("camera-info");
const downloadButton = document.getElementById("button-download");
const gtLinkButton = document.getElementById("button-getlink");
const dateBox = document.getElementById("date");
const repeatVideo = document.getElementById("repeat-video");

startButton.innerHTML = "COMENZAR";
repeatVideo.style.display = "none";
downloadButton.style.display = "none";
gtLinkButton.style.display = "none";

// const apiKey = "9P4km8pnyUnE8G052TCp83ChV6qMyjLw";

// Gifo ID 
// 0WjH5IDMn4Ah30a6Al


function init(){
  h = 0;
  m = 0;
  s = 0;
  dateBox.innerHTML="00:00:00";
}         
function cronometrar(){
  escribir();
  id = setInterval(escribir,1000);
}
function escribir(){
  var hAux, mAux, sAux;
  s++;
  if (s>59){m++;s=0;}
  if (m>59){h++;m=0;}
  if (h>24){h=0;}

  if (s<10){sAux="0"+s;}else{sAux=s;}
  if (m<10){mAux="0"+m;}else{mAux=m;}
  if (h<10){hAux="0"+h;}else{hAux=h;}

  dateBox.innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
  clearInterval(id);
}
function reiniciar(){
  clearInterval(id);
  dateBox.innerHTML="00:00:00";
  h=0;m=0;s=0;
}

async function getCamera() {
  let stream = null;
  try {
    return stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
  } catch (error) {
    console.log('Get Media Error', error);
  }
}

async function uploadGif(options){
  try {
      return elPost = await fetch(`http://upload.giphy.com/v1/gifs/?api_key=${apiKey}`, options)
      .then(response => response.json());
  }
  catch(error) {
      console.log('Upload Gif Error', error);
  }
}

async function searchById(id){
  try {
      const elFetch = await fetch(`http://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`);
      data = await elFetch.json();
      return data;
  }
  catch(error) {
      console.log('Fetch search by Id Error', error);
  }
}

// repeatVideo.addEventListener("click", async function (ev) {
//   startButton.style.visibility = "visible";
//   document.getElementById("repeat-video").style.display = "none";
//   btn = 0
// });

let btn = 0;
startButton.addEventListener("click", async function (ev) {
  
  startButton.style.visibility = "hidden";
  document.getElementById("create-gifo__h2").innerHTML = "¿Nos das acceso <br> a tu cámara?";
  document.getElementById("create-gifo__p").innerHTML = `El acceso a tu camara será válido sólo <br>
  por el tiempo en el que estés creando el GIFO.`;

  // stepOneGifo.style.backgroundColor = "#572EE5";
  // stepOneGifo.style.color = "#FFFFFF";
  // stepTwoGifo.style.backgroundColor = "#FFFFFF";
  // stepTwoGifo.style.color = "#572EE5";
  // stepThreeGifo.style.backgroundColor = "#FFFFFF";
  // stepThreeGifo.style.color = "#572EE5";
  
  if (btn == 0) {
    stream = await getCamera();
    console.log(stream)
    
    if (stream.active == true) {
      btn = 1;
      console.log("Paso 1");

      videoBox.srcObject = stream;
      videoBox.play();      

      startButton.innerHTML = "GRABAR";
      startButton.style.visibility = "visible";
      

      stepOneGifo.style.backgroundColor = "#FFFFFF";
      stepOneGifo.style.color = "#572EE5";
      stepTwoGifo.style.backgroundColor = "#572EE5";
      stepTwoGifo.style.color = "#FFFFFF";
      stepThreeGifo.style.backgroundColor = "#FFFFFF";
      stepThreeGifo.style.color = "#572EE5";
    }
  }
  else {
    if (btn == 1) {
      btn = 2;
      console.log("Paso 2");

      recorder = RecordRTC(stream, {type: 'gif'});
      recorder.startRecording();
      
      init();
      cronometrar();

      startButton.style.visibility = "visible";
      startButton.innerHTML = "FINALIZAR";

      dateBox.style.display = "block";
      repeatVideo.style.display = "none";

      stepOneGifo.style.backgroundColor = "#FFFFFF";
      stepOneGifo.style.color = "#572EE5";
      stepTwoGifo.style.backgroundColor = "#572EE5";
      stepTwoGifo.style.color = "#FFFFFF";
      stepThreeGifo.style.backgroundColor = "#FFFFFF";
      stepThreeGifo.style.color = "#572EE5";
    }
    else {
      if (btn == 2) {
        btn = 3;
        console.log("Paso 3");

        await recorder.stopRecording(function() {
          blob = recorder.getBlob();
        });
        
        parar();
        
        startButton.style.visibility = "visible";
        startButton.innerHTML = "SUBIR GIFO";

        dateBox.style.display = "none";
        repeatVideo.style.display = "block";

        stepOneGifo.style.backgroundColor = "#FFFFFF";
        stepOneGifo.style.color = "#572EE5";
        stepTwoGifo.style.backgroundColor = "#572EE5";
        stepTwoGifo.style.color = "#FFFFFF";
        stepThreeGifo.style.backgroundColor = "#FFFFFF";
        stepThreeGifo.style.color = "#572EE5";

        repeatVideo.addEventListener("click", async function (ev) {
          btn = 0;
          startButton.click();
          // startButton.innerHTML = "GRABAR";
          startButton.style.visibility = "visible";
          repeatVideo.style.display = "none";
          // dateBox.style.display = "block";
          reiniciar();
          await recorder.reset();
        });
        // repeatVideo.style.display = "block";
        
      }
      else {
        if (btn == 3) {
          let form = new FormData();
          form.append('file', blob, 'myGif.gif');
          // form.append('apk', apiKey);
          console.log(form.get('file'))
          downloadButton.style.display = "block";
          gtLinkButton.style.display = "block";
          repeatVideo.style.display = "none";

          stepOneGifo.style.backgroundColor = "#FFFFFF";
          stepOneGifo.style.color = "#572EE5";
          stepTwoGifo.style.backgroundColor = "#FFFFFF";
          stepTwoGifo.style.color = "#572EE5";
          stepThreeGifo.style.backgroundColor = "#572EE5";
          stepThreeGifo.style.color = "#FFFFFF";
          
          // Fix styles gifo recorded
          // Hide repetir captura
          
          // url = recorder.toURL();
          // console.log(url)
          // console.log(recorder.getDataURL(url))
          let options = {
            method: 'POST',
            body: form,
            redirect: 'follow'
          }
          // window.localStorage.clear();
          urll = `http://upload.giphy.com/v1/gifs?api_key=${apiKey}`
          // uploadGif(options)
          fetch(urll, options)
            .then(res => res.json())
            .then(res =>  {
              id = res.data.id;
                
              const gif = async () => {
                const gifoInfo = await searchById(id);
                console.log(gifoInfo);
                const gifoId = gifoInfo.data.url;
                console.log(gifoId);
              };
              gif();
              
              // console.log(searchById(id));
              // async function() {
              // searchById(res.data.id);
              }
              // console.log(res.data)}}
            // }
            
              );
              
              // const idProps = await searchById(id);
              // console.log(idProps)
              
          downloadButton.addEventListener("click", async function (ev) {
            invokeSaveAsDialog(blob);
            console.log(blob)
          });
        }
      } 
    }
    // Else para cuando no se activa la cámara
  }

})
  
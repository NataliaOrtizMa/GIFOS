// const cameraButton = document.getElementById("start-button");
const videoBox = document.getElementById("video-box");
const videoInfo = document.getElementById("video-info");
const videoStatus = document.getElementById("video-status");
const downloadButton = document.getElementById("button-download");
const gtLinkButton = document.getElementById("button-getlink");
const dateBox = document.getElementById("date");
const repeatVideo = document.getElementById("repeat-video");

startButton.innerHTML = "COMENZAR";
repeatVideo.style.display = "none";
downloadButton.style.display = "none";
gtLinkButton.style.display = "none";

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
      return elPost = await fetch(`https://upload.giphy.com/v1/gifs/?api_key=${apiKey}`, options)
      .then(response => response.json());
  }
  catch(error) {
      console.log('Upload Gif Error', error);
  }
}

async function searchById(id){
  try {
      const elFetch = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`);
      data = await elFetch.json();
      return data;
  }
  catch(error) {
      console.log('Fetch search by Id Error', error);
  }
}

let btn = 0;
// Que cuando oprima + ponga btn = 0
// Agregar mis gifos a vista (guardar Id en local storage, traer info)
// Poner night mode b numeros
// Arreglar local type: my gifos/my favs
// Agregar hover my-gifos con btn delete
// Agregar max en my gifos
startButton.addEventListener("click", async function (ev) {
  startButton.style.visibility = "hidden";
  document.getElementById("create-gifo__h2").innerHTML = "¿Nos das acceso <br> a tu cámara?";
  document.getElementById("create-gifo__p").innerHTML = `El acceso a tu camara será válido sólo <br> por el tiempo en el que estés creando el GIFO.`;
 
  stepOneGifo.classList.add("create-gifo-step-selected");

  if (btn == 0) {
    stream = await getCamera();
    console.log(stream);

    if (stream.active == true) {
      btn = 1;
      console.log("Paso 1");

      videoBox.srcObject = stream;
      videoBox.play();

      startButton.innerHTML = "GRABAR";
      startButton.style.visibility = "visible";

      stepOneGifo.classList.remove("create-gifo-step-selected");
      stepTwoGifo.classList.add("create-gifo-step-selected");
    } else {
      stream = await getCamera();
    }
  } else {
    if (btn == 1) {
      btn = 2;
      console.log("Paso 2");

      recorder = RecordRTC(stream, { type: "gif" });
      recorder.startRecording();

      init();
      cronometrar();

      startButton.style.visibility = "visible";
      startButton.innerHTML = "FINALIZAR";

      dateBox.style.display = "block";
      repeatVideo.style.display = "none";

      stepOneGifo.classList.remove("create-gifo-step-selected");
    } else {
      if (btn == 2) {
        btn = 3;
        console.log("Paso 3");

        await recorder.stopRecording(function () {
          blob = recorder.getBlob();
        });

        parar();

        startButton.style.visibility = "visible";
        startButton.innerHTML = "SUBIR GIFO";

        dateBox.style.display = "none";
        repeatVideo.style.display = "block";

        stepOneGifo.classList.remove("create-gifo-step-selected");

        repeatVideo.addEventListener("click", async function (ev) {
          btn = 0;
          startButton.click();
          startButton.style.visibility = "visible";
          repeatVideo.style.display = "none";
          stepOneGifo.classList.toggle("create-gifo-step-selected");
          reiniciar();
          await recorder.reset();
        });
      } else {
        if (btn == 3) {
          let form = new FormData();
          form.append("file", blob, "myGif.gif");
          // form.append('apk', apiKey);
          console.log(form.get("file"));

          repeatVideo.style.display = "none";
          videoInfo.style.display = "block";
          videoStatus.style.display = "inline-block";
          videoStatus.style.backgroundImage = "url('./img/loader.svg')";

          stepOneGifo.classList.remove("create-gifo-step-selected");
          stepTwoGifo.classList.remove("create-gifo-step-selected");
          stepThreeGifo.classList.add("create-gifo-step-selected");

          // Fix styles gifo recorded

          // url = recorder.toURL();
          // console.log(url)
          // console.log(recorder.getDataURL(url))
          let options = {
            method: "POST",
            body: form,
            redirect: "follow",
          };
          // window.localStorage.clear();
          urll = `https://upload.giphy.com/v1/gifs?api_key=${apiKey}`;
          // uploadGif(options)
          fetch(urll, options)
            .then((res) => res.json())
            .then((res) => {
              console.log(res)
              id = res.data.id;

              const gifInfo = gif();
              console.log(gifInfo);


              downloadButton.style.display = "block";
              gtLinkButton.style.display = "block";

              videoStatus.style.backgroundImage = "url('./img/check.svg')";
              document.getElementById("video-text-status").innerHTML = "GIFO subido con éxito";
            });

          gtLinkButton.addEventListener("click", async function (ev) {
            
          // Poner Gif Url
          });
          downloadButton.addEventListener("click", async function (ev) {
            invokeSaveAsDialog(blob);
            console.log(blob);
          });
        }
      }
    }
    // Else para cuando no se activa la cámara
  }
});

const gif = async () => {
  const gifoInfo = await searchById(id);
  let Gif = {
    source: gifoInfo.data.images.fixed_width_still.url,
    sourceQuality: gifoInfo.data.images.fixed_width.webp,
    downloadUrl: gifoInfo.data.images.original.url,
    gifUserName: gifoInfo.data.username ? gifoInfo.data.username : 'No Username',
    gifName: gifoInfo.data.title ? gifoInfo.data.title : 'No Title',
    gifId: gifoInfo.data.id,
    isMine: true
  };
  const gifInfo = JSON.stringify(Gif);
  localStorage.setItem(Gif.gifId, gifInfo);
  // console.log(gifoInfo);
  const gifoId = gifoInfo.data.url;
  console.log(gifoId);
  window.open(gifoId, "_blank");
};
  
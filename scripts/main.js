function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const downloadGifBtn = document.getElementById("button-download");

window.addEventListener("load", downloadImageUsingLinkAndBlob);

        function downloadImageUsingLinkAndBlob(){
            // const image = document.querySelector("#img");
            downloadGifBtn.addEventListener("click", (event) => { //El click no va aquí, coger url de imagen
                const url = event.target.src;
                getImage(url);
            });
            // ev.target.info.gifUserName

            async function getImage(url) {
                const imageFetch = await fetch(url);
                const file = await imageFetch.blob();

                const a = document.createElement("a");
                a.download = "myImage";

                const urlBlob = URL.createObjectURL(file);
                // console.log(urlBlob);

                a.href = urlBlob;
                a.textContent = "Download";
                
                console.log(imageFetch);
                console.log(urlBlob);

                URL.revokeObjectURL(urlBlob);
                document.body.appendChild(a);
            }
        }
const descargar = document.getElementById ("descargar")
 descargar.addEventListener("click", () => {
    const link= document.createElement("a");
    link.href = "file:///C:/Users/APRENDIZ/Desktop/portafolio/PORTAFOLIO.pdf";
    link.download = "AndreaNiño";
    link.target ="_blank";
    link.click();
 })

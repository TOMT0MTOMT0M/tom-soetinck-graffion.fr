pdfjsLib.getDocument("public/img/cv.pdf").promise.then(doc => {
    console.log(doc._pdfInfo.numPages)
    doc.getPage(1).then(page => {
        let canvas = document.querySelector("#canvasPDF");
        let context = canvas.getContext("2d");
        let viewport = page.getViewport(1);
        canvas.style.width = viewport.width;
        canvas.style.height = viewport.height;
        console.log(viewport)
        console.log(canvas)
        console.log(context)
        page.render({
            canvasContext: context,
            viewport: viewport
        })
    });
});
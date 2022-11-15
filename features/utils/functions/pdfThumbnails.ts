import * as pdfjsLib from 'pdfjs-dist'

export async function getPDFThumbnail(url: string){
  const loadingTask = pdfjsLib.getDocument(url)
  const pdf = await loadingTask.promise
  const page = await pdf.getPage(1)
  const scale = 1
  const viewport = page.getViewport({ scale })
  const canvas = document.createElement("canvas") as HTMLCanvasElement
  const context = canvas.getContext("2d")
  canvas.height = viewport.height
  canvas.width = viewport.width

 const renderContext = {
    canvasContext: context ?? {},
    viewport: viewport,
  };
  return page.render(renderContext).promise.then(function (){
    return canvas.toDataURL()
  })
}

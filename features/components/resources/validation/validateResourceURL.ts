export function validateResourceURL (url: string) {
  const validExtensions = ['pdf']
  const urlSplit = url.split('.')
  const extension = urlSplit[urlSplit.length - 1]
  if (validExtensions.includes(extension)){
    return true
  }
  return false
}

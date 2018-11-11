export const downloadFromResponse = (response) => {
    const fileName = (response.headers["content-disposition"].split('=')[1]).replace(/"/g, '');
    let bytes = base64ToArrayBuffer(response.data);
  
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.style = "display: none";
    link.setAttribute('download', fileName);
    var blob = new Blob([bytes], {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),
    url = window.URL.createObjectURL(blob);
    link.href = url;
    link.click();
    window.URL.revokeObjectURL(url);
  };
  
function base64ToArrayBuffer(input) {
    let binaryString = window.atob(input);
    let binaryLength = binaryString.length;
    let bytes = new Uint8Array(binaryLength);
    for (var i = 0; i < binaryLength; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}
// server address
let url = 'http://ajax-json.cione.vn/api/v1/products';
// XMLHttpRequest: tạo 1 request lên server(kiến thức JS)
let xhr = new XMLHttpRequest();
// output hiện thị kết quả trả về
let ouput = document.getElementById('output');
// gọi hàm handleResult khi có sự thay đổi trạng thái của request
xhr.onreadystatechange = handleResult;
// Chỉ định định dạng gửi request là GET với url như trên
//  mở kết nối tới server
xhr.open('GET', url);
// gửi request
xhr.send();

function handleResult() {
    if(xhr.readyState === XMLHttpRequest.DONE) {
        ouput.innerHTML = xhr.responseText
    }
}
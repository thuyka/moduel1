function getData() {
    // Lấy giá trị trong ô chat
    let data = document.getElementById('inputBox').value;
    // Đặt giá trị khởi tạo cho câu trả lời bằng rỗng
    let answer = '';
    // Chạy vòng lặp để tìm câu hỏi giống với câu hỏi đầu vào
    for (var i = 0; i < questions.length; i++) {
        // Nếu tìm thấy thì tìm câu trả lời tương ứng
        if (questions[i].indexOf(data) != -1) { //indexOf là trả về vị trí phần tử trong mảng.
            answer = answers[i][0];
            break;
        } else {
            // Nếu không tìm thấy câu hỏi thì sẽ hiển thị ra là tôi không biết
            answer = alternative[0][0];
        }
    }
    setData(data, answer);
    // Sau khi có câu trả lời thì xóa giá trị trong ô chat
    document.getElementById('inputBox').value = '';
}
// Hàm để hiển trị câu trả lời lên ô chat
function setData(question, answer) {
    // Lấy khu vực hiển thị chat
    let messagesField = document.getElementById('messagesField');
    // Tạo khu vực để hiển thị chat cho người dùng
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = '<div class="me"><p>' + question + '</p></div>';
    messagesField.appendChild(userDiv);
    // Tạo khu vực để hiển thị chat cho bot
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = '<div class="you"><p>' + answer + '</p></div>';
    messagesField.appendChild(botDiv);
}
/*bật tắt màn hình 
display: hiển thị
none: không hiển thị
block: hiển thị*/
function getScreen(){
    let screen= document.getElementById("blackField");
    if (screen.style.display=="none"){
        screen.style.display = "block";
    }else{
        screen.style.display = "none";
    }
}
// Vd: let a = 1>2 ? 1 : 2;

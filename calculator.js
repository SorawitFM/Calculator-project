function totalText(i) {
    document.getElementById('myouput').innerHTML = i
    document.getElementById('Namee').innerHTML = ''

}
//----------------------Number&dot--------------------------
document.getElementById('dot').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '.'
    totalText(input)
})
document.getElementById('Numb0').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '0'
    totalText(input)
})
document.getElementById('Numb1').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '1'
    totalText(input)
})
document.getElementById('Numb2').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '2'
    totalText(input)
})
document.getElementById('Numb3').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '3'
    totalText(input)
})
document.getElementById('Numb4').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '4'
    totalText(input)
})
document.getElementById('Numb5').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '5'
    totalText(input)
})
document.getElementById('Numb6').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '6'
    totalText(input)
})
document.getElementById('Numb7').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '7'
    totalText(input)
})
document.getElementById('Numb8').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '8'
    totalText(input)
})
document.getElementById('Numb9').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '9'
    totalText(input)
})
//----------------------Operator--------------------------
document.getElementById('plus').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '+'
    totalText(input)
})
document.getElementById('minus').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '-'
    totalText(input)
})
document.getElementById('multiplication').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '*'
    totalText(input)
})
document.getElementById('division').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '/'
    totalText(input)
})
//----------------------Controler--------------------------
document.getElementById('equal').addEventListener('click', () => {
    try {
        const result = eval(document.getElementById('myouput').innerHTML);
        if (isNaN(result) || !isFinite(result)) {
            document.getElementById('myouput').innerHTML = 'Error';
        } else {
            // ตรวจสอบว่าผลลัพท์เป็นจำนวนเต็มหรือไม่
            const isInteger = Number.isInteger(result);

            // กำหนดทศนิยมไม่เกิน 4 ตำแหน่งหากไม่ใช่จำนวนเต็ม
            let formattedResult = isInteger ? result : parseFloat(result.toFixed(4));

            // หากผลลัพท์มากกว่า 9999999999 แสดงในรูปแบบ 9.999e+10
            if (Math.abs(formattedResult) > 9999999999) {
                formattedResult = formattedResult.toExponential(3);
            }

            document.getElementById('myouput').innerHTML = formattedResult.toString();
        }
    } catch (error) {
        document.getElementById('myouput').innerHTML = 'JavaScript Syntax Error';
    }
    randomBackground()
})
document.getElementById('delete').addEventListener('click', () => {
    var deleteItem = document.getElementById('myouput').innerHTML
    var arrDelete = deleteItem.split('')
    arrDelete.pop()
    document.getElementById('myouput').innerHTML = arrDelete.join('')
})
document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('myouput').innerHTML = ''
    document.getElementById('Namee').innerHTML = "Thank you!!!"

})

function randomBackground() {
    var numbers = [];
    // สร้างสุ่มเลข 1 - 10 แล้วเพิ่มลงในอาร์เรย์
    for (var i = 1; i <= 10; i++) {
        var randomNum = Math.floor(Math.random() * 10) + 1; // สุ่มเลข 1 - 10
        numbers.push(randomNum); // เพิ่มเลขลงในอาร์เรย์
    }
    // สุ่มค่าเดียวจากอาร์เรย์
    var randomValue = numbers[Math.floor(Math.random() * numbers.length)];


    if (randomValue == 1) {
        // เลือกอิลิเมนต์ที่คุณต้องการเปลี่ยนพื้นหลัง
        var element = document.getElementById('border-Outside');
        // เปลี่ยนพื้นหลังโดยกำหนดสีเป็นตัวอย่าง
        element.style.backgroundImage = 'url(https://images.unsplash.com/photo-1696418800033-07294b6045f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80)'
    }
    if (randomValue == 2) {
        // เลือกอิลิเมนต์ที่คุณต้องการเปลี่ยนพื้นหลัง
        var element = document.getElementById('border-Outside');
        // เปลี่ยนพื้นหลังโดยกำหนดสีเป็นตัวอย่าง
        element.style.backgroundImage = 'url(https://images.unsplash.com/photo-1696096685498-0ee0d487c01c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)'
    }
    if (randomValue == 3) {
        // เลือกอิลิเมนต์ที่คุณต้องการเปลี่ยนพื้นหลัง
        var element = document.getElementById('border-Outside');
        // เปลี่ยนพื้นหลังโดยกำหนดสีเป็นตัวอย่าง
        element.style.backgroundImage = 'url(https://images.unsplash.com/photo-1695747137192-fa5107a579dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)'
    }
    if (randomValue == 4) {
        // เลือกอิลิเมนต์ที่คุณต้องการเปลี่ยนพื้นหลัง
        var element = document.getElementById('border-Outside');
        // เปลี่ยนพื้นหลังโดยกำหนดสีเป็นตัวอย่าง
        element.style.backgroundImage = 'url(https://images.unsplash.com/photo-1695829078492-6c88a9d1aa36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)'
    }
    if (randomValue == 5) {
        // เลือกอิลิเมนต์ที่คุณต้องการเปลี่ยนพื้นหลัง
        var element = document.getElementById('border-Outside');
        // เปลี่ยนพื้นหลังโดยกำหนดสีเป็นตัวอย่าง
        element.style.backgroundImage = 'url(https://images.unsplash.com/photo-1695968699604-defce4d13128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80)'
    }
    if (randomValue == 6) {
        // เลือกอิลิเมนต์ที่คุณต้องการเปลี่ยนพื้นหลัง
        var element = document.getElementById('border-Outside');
        // เปลี่ยนพื้นหลังโดยกำหนดสีเป็นตัวอย่าง
        element.style.backgroundImage = 'url(https://images.unsplash.com/photo-1693753310466-bd53501ba2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1893&q=80)'
    }
    if (randomValue == 7) {
        // เลือกอิลิเมนต์ที่คุณต้องการเปลี่ยนพื้นหลัง
        var element = document.getElementById('border-Outside');
        // เปลี่ยนพื้นหลังโดยกำหนดสีเป็นตัวอย่าง
        element.style.backgroundImage = 'url(https://images.unsplash.com/photo-1682547096264-8a4e7cd3830e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)'
    }
    if (randomValue == 8) {
        // เลือกอิลิเมนต์ที่คุณต้องการเปลี่ยนพื้นหลัง
        var element = document.getElementById('border-Outside');
        // เปลี่ยนพื้นหลังโดยกำหนดสีเป็นตัวอย่าง
        element.style.backgroundImage = 'url(https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1871&q=80)'
    }
    if (randomValue == 9) {
        // เลือกอิลิเมนต์ที่คุณต้องการเปลี่ยนพื้นหลัง
        var element = document.getElementById('border-Outside');
        // เปลี่ยนพื้นหลังโดยกำหนดสีเป็นตัวอย่าง
        element.style.backgroundImage = 'url(https://images.unsplash.com/photo-1640074130674-146cf793baac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80)'
    }
    if (randomValue == 10) {
        // เลือกอิลิเมนต์ที่คุณต้องการเปลี่ยนพื้นหลัง
        var element = document.getElementById('border-Outside');
        // เปลี่ยนพื้นหลังโดยกำหนดสีเป็นตัวอย่าง
        element.style.backgroundImage = 'url(https://images.unsplash.com/photo-1476111021705-ac3b3304fe20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)'
    }

}


let currentBalance = 1000;

function updateDisplay() {
    document.getElementById("balance").innerText = currentBalance;
}

function showMessage(msg, isError = false) {
    const messageElement = document.getElementById("message");
    messageElement.innerText = msg;
    messageElement.style.color = isError ? "#f87171" : "#4ade80";
}

function addHistory(action, amount) {
    const historyList = document.getElementById("historyList");
    const li = document.createElement("li");
    li.innerText = `${action}: ${amount} RWF`;
    historyList.prepend(li);
}

function deposit() {
    const input = document.getElementById("amountInput");
    const amount = Number(input.value);

    if (amount <= 0 || isNaN(amount)) {
        showMessage("الرجاء أدخل مبلغ صحيح للإيداع!", true);
        return;
    }

    currentBalance += amount;
    updateDisplay();
    addHistory("إيداع", amount);
    showMessage(`تم إيداع ${amount} RWF بنجاح!`);
    input.value = "";
}

function withdraw() {
    const input = document.getElementById("amountInput");
    const amount = Number(input.value);

    if (amount <= 0 || isNaN(amount)) {
        showMessage("الرجاء أدخل مبلغ صحيح للسحب!", true);
        return;
    }

    if (amount > currentBalance) {
        showMessage("عذراً، رصيدك غير كافٍ لهذه العملية!", true);
        return;
    }

    currentBalance -= amount;
    updateDisplay();
    addHistory("سحب", amount);
    showMessage(`تم سحب ${amount} RWF بنجاح!`);
    input.value = "";
}
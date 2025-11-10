document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const successMessage = document.getElementById("successMessage");

  // 新增一個用來顯示會員資料的容器
  const memberInfo = document.createElement("div");
  memberInfo.id = "memberInfo";
  memberInfo.style.marginTop = "20px";
  document.querySelector("main").appendChild(memberInfo);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // 清除錯誤訊息
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    let isValid = true;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const plan = form.plan.value;

    if (!name) {
      document.getElementById("nameError").textContent = "請輸入姓名";
      isValid = false;
    }

    const phoneRegex = /^09\d{8}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById("phoneError").textContent = "請輸入正確的手機號碼（09開頭，共10碼）";
      isValid = false;
    }

    if (!email.includes("@")) {
      document.getElementById("emailError").textContent = "請輸入有效的電子郵件";
      isValid = false;
    }

    if (!plan) {
      document.getElementById("planError").textContent = "請選擇會員方案";
      isValid = false;
    }

    if (isValid) {
      // 顯示成功訊息
      successMessage.hidden = false;

      // 顯示會員資料
      memberInfo.innerHTML = `
        <h3>🎉 會員資料確認</h3>
        <p><strong>姓名：</strong> ${name}</p>
        <p><strong>電話：</strong> ${phone}</p>
        <p><strong>電子郵件：</strong> ${email}</p>
        <p><strong>會員方案：</strong> ${
          plan === "monthly"
            ? "月繳方案"
            : plan === "quarterly"
            ? "季繳方案"
            : "年繳方案"
        }</p>
      `;

      // 清空表單
      form.reset();

      // 自動隱藏成功訊息（但保留會員資料）
      setTimeout(() => (successMessage.hidden = true), 4000);
    } else {
      // 若驗證未通過，清除舊的會員資料
      memberInfo.innerHTML = "";
    }
  });
});

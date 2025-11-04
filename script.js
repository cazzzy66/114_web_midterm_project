document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const successMessage = document.getElementById("successMessage");

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
      form.reset();
      successMessage.hidden = false;
      setTimeout(() => (successMessage.hidden = true), 4000);
    }
  });
});

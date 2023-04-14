export function showSucess() {
  const successToastBtn = document.getElementById("successToastBtn");
  const successToast = document.getElementById("successToast");

  if (successToastBtn) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(successToast);
    successToastBtn.addEventListener("click", () => {
      toastBootstrap.show();
    });
  }
}

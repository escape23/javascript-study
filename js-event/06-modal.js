/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackDropClick);

function onOpenModal(event) {
  document.body.classList.add("show-modal");
  window.addEventListener("keydown", onEscKeyDown);
}

function onCloseModal(event) {
  window.removeEventListener("keydown", onEscKeyDown);
  document.body.classList.remove("show-modal");
}

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    console.log("click on backdrop");
    onCloseModal();
  }
}

function onEscKeyDown(event) {
  const ESC_KEY_CODE = "Escape";

  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}

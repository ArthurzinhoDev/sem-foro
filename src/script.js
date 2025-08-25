function criarSemaforo() {
  const semaforo = document.getElementById("semaforo");

  const cores = ["red", "yellow", "green"];
  const luzes = [];

  cores.forEach(cor => {
    let luz = document.createElement("div");
    luz.classList.add("luz");
    luz.dataset.color = cor;
    semaforo.appendChild(luz);
    luzes.push(luz);
  });

  let index = 0;
  setInterval(() => {
    luzes.forEach(luz => luz.style.background = "gray");
    luzes[index].style.background = cores[index];
    index = (index + 1) % cores.length;
  }, 2000);
}

criarSemaforo();
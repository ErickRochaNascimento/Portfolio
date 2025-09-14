var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Alternar entre adicionar e remover a classe "active", para destacar o botão que controla o painel */
    this.classList.toggle("active");
	
    /* Alternar entre ocultar e mostrar o painel ativo */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

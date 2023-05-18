const numMembrosInput = document.getElementById("numMembros")
const idadesDiv = document.getElementById("idades")
const calcularBtn = document.getElementById("calcular")
const resultado = document.getElementById("resultado")
 let idades =[]

numMembrosInput.addEventListener("input", () => {
  const numMembros = numMembrosInput.value;
  idadesDiv.innerHTML = ""; // Limpa o conteudo do div de idades
  idades = []; // Limpa o array de idades
  for (let i = 0; i < numMembros; i++){
    const input = document.createElement("input");
    input.type = "number";
    input.setAttribute('id','nova')
    input.placeholder = `Idade ${i + 1}`;
    idadesDiv.appendChild(input);
    idades.push(input);
  }
});

calcularBtn.addEventListener("click", () => {
  const idadesArray = idades.map((input) => Number(input.value));
  const mediaIdades = idadesArray.reduce((acc, idade) => acc + idade, 0) / idadesArray.length;
   console.log(`A média das idades é ${mediaIdades}.`);
  resultado.innerHTML = `A média das idades é: ${mediaIdades.toFixed(2)}.`
});
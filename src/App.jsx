import './App.css'

function App() {
  const matrizNumerosInteiros = [[12, 20, 35, 4], [58, 60, 7, 81], [97, 100, 115, 120], [135, 145, 155, 160]];
  const numerosPares = matrizNumerosInteiros.flat().filter((element) => element % 2 === 0);
  const soma = numerosPares.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

  return (
    <>
      <h1>Teste de Soma de Números Pares em React</h1>
      <div>
        <p>A soma dos números pares é: {soma}</p>
      </div>
    </>
  )
}

export default App

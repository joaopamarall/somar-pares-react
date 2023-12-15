import './App.css'

function SomaNumerosPares({ numerosInteiros }) {

  const numerosPares = numerosInteiros.flat().filter((element) => element % 2 === 0);

  const soma = numerosPares.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
  return (
    <div>
      <p>A soma dos números pares é: {soma}</p>
    </div>
  );
}

function App() {
  const matrizNumerosInteiros = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

  return (
    <>
    <h1>Teste de Soma de Números Pares em React</h1>
      <SomaNumerosPares numerosInteiros={matrizNumerosInteiros} />
    </>
  )
}

export default App

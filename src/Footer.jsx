import "../assets/estilo.css";

export default function App() {
  return (
    <div>
      <h2>Hola, Mundo</h2>
    </div>
  );
}

export function Footer(){
    return(
        <div id="footer" style={{display: 'flex', justifyContent: 'center', alignItems: "center",
          fontWeight: 'bold', width: '100%', height: '10vh', backgroundColor: 'white'}}>
            <p>&copy; 2026 - Creado y Diseñado por Benjamín, César y Paula</p>
        </div>
    );

}

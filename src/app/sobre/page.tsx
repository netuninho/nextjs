import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Sobre',
    description: 'Essa é a página sobre',
}

export default function SobrePage() {
    return (
        <main>
            <h1>Sobre</h1>
            <h2 style={{margin: '1600px 0'}} id="empresa">A Empresa</h2>
        </main>
    )
}
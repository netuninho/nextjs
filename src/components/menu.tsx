import Link from "next/link";

export default function Menu() {
    return(
        <ul className="menu">
            {/* prefetch é automaticamente true, ele carrega as outras páginas em segundo plano deixando a navegação mais fluida */}
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sobre#empresa">Sobre</Link></li>
            <li><Link href="/contato">Contato</Link></li>
            <li><Link href="/imc">IMC</Link></li>
        </ul>
    )
}
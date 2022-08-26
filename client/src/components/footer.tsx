type Props = {
    copyright?: string
}

export const Footer = ({ copyright }: Props)  => {

    return (
        <footer>
            <h4>{copyright}</h4>
        </footer>
    )
}

export default Footer;

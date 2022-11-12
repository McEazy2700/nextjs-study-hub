import Link from "next/link"

interface PrimaryLinkProps {
  children?: React.ReactNode,
  href: string;
  download?: boolean;
}

export const PrimaryLink = (props: PrimaryLinkProps)=>{
  const { href, children, download } = props
  return (
    <Link
    className="bg-primary/90 p-2 px-4 rounded-3xl absolute top-0 right-3 z-20"
    target='_blank' download={download} href={href}>{children}</Link>
  )
}

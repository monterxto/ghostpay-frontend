
export const Identifier = ({ identifier }: { identifier: string }) => {
  return (
    <div className="text-center">
      <p className="text-footer-text">Identificador:</p>
      <span className="text-custom-text font-extrabold text-base">{identifier}</span>
    </div>
  )
}
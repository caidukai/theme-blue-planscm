
const TopHeader = ({ children, title }: any) => {
  return (
    <div className="flex justify-between items-center pb-6">
      <h1 className="text-3xl">{title}</h1>
      <div>
        {children}
      </div>
    </div>
  )
}

export default TopHeader
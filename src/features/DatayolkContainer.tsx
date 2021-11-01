import useFetchDatayolkContent from "./hooks/Datayolk/useFetchDatayolkContent"

const DatayolkContainer: React.FC = () => {
  const datayolkQuery = useFetchDatayolkContent()

  return (
    <>Datayolk</>
  )
}

export default DatayolkContainer

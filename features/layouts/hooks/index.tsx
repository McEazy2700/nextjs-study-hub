import WithSidebar from "../with-sidebar"

export const getSideBarLayout = (page: React.ReactElement) => {
  return (
    <WithSidebar>{page}</WithSidebar>
  )
}

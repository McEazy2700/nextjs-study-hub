import WithSidebar from "@layouts/with-sidebar/SideBarLayout"

export const getSideBarLayout = (page: React.ReactElement) => {
  return (
    <WithSidebar>{page}</WithSidebar>
  )
}

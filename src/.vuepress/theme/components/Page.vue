<template>
  <body class="page">
    <slot name="top" />
    <SearchBox> </SearchBox>
    <Content class="theme-default-content" >
    </Content>

    <PageEdit />


    <slot name="bottom" />
  </body>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import SearchBox from '@SearchBox'


export default {
  name: 'Page',

  components: { PageEdit, PageNav, SearchBox},
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  padding-top 3.6rem !important
  display block
.search-box
  flex 0 0 auto
  width 100% !important
  text-align right
  max-width 100%
  top 3.6rem !important

</style>

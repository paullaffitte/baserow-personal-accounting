<template>
  <SidebarApplication
    :group="group"
    :application="application"
    @selected="selected"
    href="/accounting-reports"
  >
  </SidebarApplication>
</template>

<script>
import { notifyIf } from '@baserow/modules/core/utils/error'
import SidebarApplication from '@baserow/modules/core/components/sidebar/SidebarApplication'

export default {
  name: 'Sidebar',
  components: { SidebarApplication },
  props: {
    application: {
      type: Object,
      required: true,
    },
    group: {
      type: Object,
      required: true,
    },
  },
  computed: {
  },
  methods: {
    async selected(application) {
      try {
        await this.$store.dispatch('application/select', application)
        this.$nuxt.$router.push({ name: 'accounting-dashboard' });
      } catch (error) {
        notifyIf(error, 'group')
      }
    },
  },
}
</script>

<template>
  <div>
    <h1>Personal Accounting Dashboard</h1>
    <p v-if="loaded">
      {{ data }}
    </p>
    <p v-else>
      Loading...
    </p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  components: {},
  computed: {
    ...mapState({
      data: (state) => state.dashboard.data,
    }),
    ...mapGetters({
      loaded: 'dashboard/isLoaded',
    })
  },
  methods: {
  },
  created() {
    this.$store.dispatch('dashboard/fetchAll', 253);
  },
  layout: 'app',
}
</script>

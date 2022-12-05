<template>
  <div
    class="text-field tool"
    style="height: 19px; display: flex; align-items: end"
  >
    <input
      type="text"
      v-model="text"
      v-if="(isActive || justMounted) && !isCreator"
      :style="style"
      class="input-annotation"
      placeholder="Type here..."
    />
    <p v-else :style="style">{{ text || 'Type here...' }}</p>
  </div>
</template>

<script>
import TeamAccess from '~/models/TeamAccess'

export default {
  props: {
    isActive: Boolean,
    fontSize: Number,
    value: String,
    file: Object,
    justMounted: Boolean
  },
  data: () => ({
    text: null
  }),
  created () {
    this.text = this.value
  },
  watch: {
    value (v) {
      if (this.text != v) this.text = v
    },
    text (v) {
      if (this.value != v) this.$emit('input', v)
    }
  },
  computed: {
    isCreator () {
      return (
        this.file.userId == this.$auth.user.id ||
        (this.$auth.user.teamAccess == TeamAccess.COMPANY_FILE &&
          this.$auth.user.teamId == this.file.userId)
      )
    },
    style () {
      return {
        fontSize: `${this.fontSize || 12}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  border-left: 1px solid #5FA348;
  border-bottom: 1px solid #5FA348;
  background-color: transparent;
}

.input-annotation:focus {
  border: 1px solid #5FA348;
}

.input-annotation:blur {
  border: transparent;
}
</style>

<template>
  <div class="rounded-2xl min-w-[300px] overflow-x-auto custom-scrollbar relative mt-4 bg-white">
    <table class="custom-table py-2">
      <thead class="text-[#414142]">
        <tr>
          <!-- <th class="w-12 text-center fixed-col left">No</th> -->
          <th class="text-left font-[700] ">File name </th>

          <th class="hidden lg:table-cell">Action</th>
          <th class="hidden lg:table-cell">Privacy</th>
          <th class=" font-[700]  right">

          </th>
        </tr>
      </thead>
      <tbody class="text-[#505050]">
        <tr v-for="(item, i) in currentFolder.files" :key="i">
          <!-- <td class="w-12 text-center fixed-col left">{{ i + 1 }}</td> -->
          <td class="row">
            <div class="flex  items-center">
              <img src="/icon.png" class="mr-3" width="23" height="23" />
              <div class="">
                <p class="text-[#414142] whitespace-nowrap truncate text-[15px]">
                <p @click="routeToFileManager(`/pdf/${item.paperLink}`, item.filePrivacy, item.id, item)"
                  class="cursor-pointer capitalize">
                  {{ ((item || {}).fileName || ' ') | removeExtension }}
                </p>


                <div class="flex  lg:hidden items-center mt-1 text-[0.65rem] text-[#707070]">
                  <p v-show="((item || {}).fileAction) != 'doNotPost'" class="capitalize"> {{ ((item || {}).fileAction
                    ||
                    '') }}</p>

                  <div class="w-1 h-1 mx-2 rounded-[50%] bg-black"></div>

                  <p class="capitalize  ">
                    {{ ((item || {}).filePrivacy || '') }}
                  </p>
                </div>
                </p>
              </div>
            </div>
          </td>
          <td class="hidden lg:table-cell">
            <p v-show="((item || {}).fileAction) != 'doNotPost'" class="capitalize"> {{ ((item || {}).fileAction ||
              '') }}</p>
          </td>
          <td>
            <p class="capitalize hidden lg:table-cell">
              {{ ((item || {}).filePrivacy || '') }}
            </p>
          </td>
          <td class=" ">
            <div @click="shareLinkFF(item.paperLink, item.fileName)" class="flex  w-full justify-end cursor-pointer">
              <ShareOutlineIcon />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ShareOutlineIcon from '~/components/svg-icons/ShareOutlineIcon.vue'
import FilePrivacy from '~/models/FilePrivacy';

export default {
  components: {
    ShareOutlineIcon
  },
  filters: {
    removeExtension(filename) {
      return (filename || "").replace(/\.[^\/.]+$/, '');
    }
  },
  props: ['currentFolder'],
  methods: {
    shareLinkFF(val, type) {
      let link = `${window.location.origin}/pdf/${val}`
      this.$emit("handleShareInFolderFile", link, type)
    },
    routeToFileManager(val, privacy, id, item) {
      this.fileId = id
      if (privacy == FilePrivacy.PRIVATE) this.$emit('emitPrivateModal', item)
      else {
        localStorage.setItem('store_public_profile_path', this.$route.fullPath)
        this.$router.push(val)
        localStorage.setItem("from_publicpage", JSON.stringify({ fromBusiness: true }))
      }
    },
    shareLink(val, type) {
      this.link = val
      this.type = type
      this.showShareCompanyName = true
    },
  },
}
</script>

<style lang="scss" scoped></style>
<template>
    <div>
     <draggable v-model="FilesInFolerContent.files" group="paperlink" @change="onChange" class="px-0">
         <div v-for="(file, i) in FilesInFolerContent.files" :key="file.id" class="py-2 border-b-[1px] border-gray-200 list-none px-0 flex items-center  min-w-[700px] w-full">
           <div class="w-1/12 inline-flex justify-center"><button><DragIcon/></button></div>
           <div class="text-left inline-block w-3/12 truncate">
             <div class="flex items-center gap-3 max-w-[100px] sm:min-w-[150px] sm:max-w-[400px]">
               <div class="max-sm:w-24">
                 <p class="max-sm:truncate capitalize text-base font-normal text-left sm:ml-1">
                   <span class="cursor-pointer" @click="routeToFileManager(`/pdf/${file.paperLink}`)">
                     {{ file.fileName | removeExtension }}
                   </span>
                 </p>
               </div>
             </div>
           </div>
           <div class="text-center  px-1 inline-block w-1/12 text-xs">
           {{ file.pages }}
           </div>
           <div class="text-sm text-center capitalize inline-block w-2/12"
             :class="
               file.fileAction === FileAction.COMPLETE ? 'text-paperdazgreen-400' :
               file.fileAction === FileAction.SIGNED ? 'text-blue-400' :
               file.fileAction === FileAction.CONFIRM ? 'text-purple-400' : ''
             "
           >{{ file.fileAction && file.fileAction !== FileAction.SHARED ? file.fileAction : "" }}</div>
           <div class="text-sm text-center capitalize inline-block w-2/12 cursor-pointer" 
           @click="file.filePrivacy == 'private'  && $emit('showPermission', true, file.id)">{{ (file || {}).filePrivacy }}</div>
           <div class="text-center  px-1 inline-block w-2/12 text-xs">
             {{ formatDateTime(file.updatedAt) }}
           </div>
           <div class="fixed-col right sm:w-[50px] text-center inline-block w-1/12">
             <div class="w-full h-full grid place-items-center">
               <button class="sm:hidden w-8 h-8 cursor-pointer grid place-items-center rounded-full"
                 :class="[createdByTeamMember(file.uploadedBy) && isTeam ? 'bg-paperdazgreen-300/20' : '']"
                 @click="actionFile = file">
                 <ellipsis-icon-vertical-icon />
               </button>
               <el-dropdown trigger="click">
                 <button class="hidden el-dropdown-link w-8 h-8 cursor-pointer sm:grid place-items-center rounded-full"
                   :class="[createdByTeamMember(file.uploadedBy) && isTeam ? 'bg-paperdazgreen-300/20' : '']">
                   <ellipsis-icon-vertical-icon />
                 </button>
                 <el-dropdown-menu slot="dropdown" class="table-menu-dropdown-menu hidden sm:block">
                   <ul class="min-w-[150px]">
                   
                     <li class="dropdown-item" @click="showEditCompanyFileFunc(file)">
                       <div class="flex justify-between w-full border-t border-gray-200">
                         <PenIcon width="16" height="16" class="inline-block float-left" />
                         <span class="ml-1">Edit</span>
                       </div>
                     </li>
 
                     <li class="dropdown-item" @click="showShareCompanyFileFunc(file)" divided>
                       <div class="flex justify-between w-full">
                         <share-icon width="16" height="16" class="inline-block float-left" />
                         <span>Share</span>
                       </div>
                     </li>
 
 
                     <li class="dropdown-item" @click="showMoveCompanyFileFunc(file)" divided>
                       <div class="flex justify-between w-full">
                         <MoveIcon width="16" height="16" class="inline-block float-left" />
                         <span>Move</span>
                       </div>
                     </li>
                    
                     <li class="dropdown-item" @click="showRemoveCompanyFileFunc(file)">
                       <div class="flex justify-between w-full border-t border-gray-200">
                         <trash-can-icon width="16" height="16" class="inline-block float-left" />
                         <span>Remove</span>
                       </div>
                     </li>
                   </ul>
                 </el-dropdown-menu>
               </el-dropdown>
             </div>
           </div>
         </div>
        </draggable>
    </div>
 </template>
 
 <script>
 import draggable from 'vuedraggable'
 import FileAction from '~/models/FileAction';
 import dateFormat from 'dateformat';
 import UserTypeEnum from '~/models/UserTypeEnum';
 
     export default {
      components: {
         draggable
      }   ,
      props: ['FilesInFolerContent'],
      methods: {
         onChange(){
           //
         },
     formatDateTime(dateVal) {
       let date = dateFormat(dateVal,  this.$store?.getters?.getDateFormat )
       let time =  dateFormat(dateVal,  this.$store?.getters?.getTimeFormat )
       return `${date}, ${time}`
       // return `${DateFormatter.getDateString(
       //   dateVal
       // )}  ${DateFormatter.getFormattedTime(dateVal)}`
     },
     createdByTeamMember(val) {
       switch (this.$auth.user.role) {
         case (UserTypeEnum.TEAM):
           if (this.$auth.user.teamAccess == TeamAccess.COMPANY_FILE)
             return true
           else if (this.$auth.user.teamAccess == TeamAccess.OWN_FILE)
             return (this.$auth.user.id == val)
         case (UserTypeEnum.PAID):
           return true
       }
     },
      },
     }
 </script>
 
 <style lang="scss" scoped>
 
 </style>
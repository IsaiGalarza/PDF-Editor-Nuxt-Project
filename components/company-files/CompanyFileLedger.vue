<template>
  <div>
    <!-- Start:: header -->
    <header class="flex flex-col xs:flex-row xs:items-center justify-between whitespace-nowrap px-2 mt-3 mb-2">
      <h5 class="text-lg font-semibold text-[#272727] hidden sm:inline-flex w-full items-center gap-2 my-2">
        Company Files
        <a :href="`/public/profile/${mainUserLink}`" target="_blank">
          <!-- <company-icon /> -->
          <img src="../../assets/img/company-icon.png" class="lg:w-[30px] w-[20px]" />
        </a>
        <img src="../../assets/img/users-icon.png" @click="showCreateTeamFunc" class="lg:w-[44px] w-[35px] cursor-pointer" />
      </h5>
      <div class="w-full text-white flex items-center my-2 pl-2">
        <div action="" class="flex-1 text-xs font-medium flex items-center relative justify-end mr-2"
          @submit.prevent="$event.preventDefault()">
          <span class="el-dropdown-link left-roll1 flex-1">
            <input type="text"
              class="w-full search-input h-10 pl-4 ml-2 mr-2 text-black bg-transparent flex-1 border-[1px] border-paperdazgreen-400 rounded-lg focus:border-paperdazgreen-700 outline-none float-right"
              placeholder="Search Files" v-model="folderSearch" />
          </span>
          <button
            class="circle circle-18 bg-paperdazgreen-400 text-white hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150">
            <search-icon width="16" height="16" currentcolor="white" />
          </button>
        </div>
        <button @click="showCreateCompanyFolderFunc"
          class="hidden sm:circle sm:circle-18 bg-paperdazgreen-400 text-xl hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150">
          <folder-plus-icon />
        </button>
        <button @click="showUploadModalFunction"
          class="hidden sm:circle sm:circle-18 p-2 ml-2 bg-paperdazgreen-400 text-xl hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150">
          <plus-icon />
        </button>
      </div>
    </header>
    <!-- End:: header -->
    <transition name="fade" mode="out-in" :duration="100">
      <!-- <empty-file-ledger class="min-h-[55vh]" v-if="pdfUser < 1" :isPaidUser= "isPaidUser"/> -->
      <div class="bg-white rounded h-full sm:rounded-3xl pb-4 text-[#272727] overflow-hidden">
        <div class="flex sm:hidden items-center justify-between px-4 py-3 border-b border-gray-100">
          <div class="flex items-center bg-gray-100 rounded text-sm" v-if="!folderSelected">
            <div class="flex items-center justify-center h-8 w-24 cursor-pointer" :class="{'text-white bg-gray-500 rounded': !showFolders}" @click="showFolders = false">Files</div>
            <div class="flex items-center justify-center h-8 w-24 cursor-pointer" :class="{'text-white bg-gray-500 rounded': showFolders}" @click="showFolders = true">Folders</div>
          </div>
          <div v-else
            class="font-medium flex items-center">
            <div class="" @click="backFolder">
              <arrow-down-icon class="h-2 w-3 rotate-90" />
            </div>
            <h2 class="font-bold pl-4">{{ FilesInFolerContent.name }}</h2>
          </div>
          <button @click="showFolders && !folderSelected ? showCreateCompanyFolderFunc() : showUploadModalFunction()"
            class="circle circle-18 p-2 ml-2 bg-paperdazgreen-400 text-xl text-white hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150">
            <plus-icon />
          </button>
        </div>
        <!-- Start:: Folders -->
        <div v-if="(folders.length > 0 && !folderSelected)" class="hidden sm:block">
          <h4 class="text-xl text-paperdazgreen-400 font-medium px-5 border-b border-gray-100 h-16 hidden sm:flex items-center">
            Folders
          </h4>
          <div class="overflow-x-auto custom-scrollbar relative">
            <!-- START: spinner container -->
            <div v-if="folderSpinner"
              class="absolute z-10 w-full h-full bg-white top-0 left-0 rounded-lg flex justify-center items-center">
              <spinner-dotted-icon class="text-paperdazgreen-400 animate-spin" />
            </div>
            <div
              class="my-12 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-4 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-2 sm:gap-x-[3.5rem] gap-y-6 px-[3rem]">
              <div class="items-center border-2 py-[15px] pl-[15px] rounded-[16px] border-[#909090]"
                v-for="(content, i) in folders" :key="i">
                <div class="overflow-hidden px-[10px] flex justify-between">
                  <div class="float-left flex">
                    <span class="border-none inline-block	float-left pt-[4px]">
                      <img class="w-[28px]" src="~/assets/img/Vector.png" />
                    </span>
                    <p @click="showFolderFilesFunc(content)"
                      class="text-base font-medium text-center text-[#414142] truncate cursor-pointer inline-block ml-[27px]">
                      {{ content.name }}
                    </p>
                  </div>
                  <div class="float-right flex">
                    <span>{{ content.files.length }}</span>
                    <div class="grid place-items-center -mt-1">
                      <el-dropdown trigger="click">
                        <button class="el-dropdown-link w-8 h-8 cursor-pointer grid place-items-center rounded-full"
                          :class="[createdByTeamMember(content.createdBy) && isTeam ? 'bg-paperdazgreen-300/20' : '']">
                          <ellipsis-icon-vertical-icon />
                        </button>
                        <el-dropdown-menu slot="dropdown" class="table-menu-dropdown-menu">
                          <div class="no-access" v-if="!createdByTeamMember(content.createdBy)">no access right</div>
                          <ul v-else class="min-w-[150px]">
                            <li class="dropdown-item" @click="showEditCompanyFolderFunc(content)">
                              <span>Edit</span>
                            </li>
                            <li class="dropdown-item" @click="showDeleteCompanyFolderFunc(content)">
                              <span>Remove</span>
                            </li>
                            <li class="dropdown-item" @click="showAddCompanyFolderFunc(content)">
                              <span>Add Files</span>
                            </li>
                          </ul>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FilePagination :totalFile="totalFolder" @setPage="setFolderPage" />
        </div>
        <!-- Mobile Folder -->
        <div v-if="showFolders" class="sm:hidden">
          <div v-if="folderSpinner"
            class="absolute z-10 w-full h-full bg-white top-0 left-0 rounded-lg flex justify-center items-center">
            <spinner-dotted-icon class="text-paperdazgreen-400 animate-spin" />
          </div>
          <table class="custom-table"  v-else-if="(folders.length > 0 && !folderSelected)">
            <thead class="text-[#414142]">
              <tr>
                <th class="w-12 text-left fixed-col left">No</th>
                <th class="text-left">Folder name</th>
                <th class="text-center fixed-col right"></th>
              </tr>
            </thead>
            <tbody class="text-[#505050]">
              <tr v-for="(content, i) in folders" :key="i">
                <td class="fixed-col left">{{ i + 1 }}</td>
                <td class="text-left overflow-hidden">
                  <div class="float-left flex items-center">
                    <span class="border-none inline-block	float-left pt-[4px]">
                      <img class="w-[24px]" src="~/assets/img/Vector.png" />
                    </span>
                    <p @click="showFolderFilesFunc(content)"
                      class="text-sm text-center text-[#414142] truncate cursor-pointer inline-block ml-3">
                      {{ content.name }}
                    </p>
                  </div>
                </td>
                <td class="fixed-col right w-4 sm:w-[50px]">
                  <div class="w-full h-full grid place-items-center">
                    <button class="w-8 h-8 cursor-pointer grid place-items-center rounded-full"
                      :class="[createdByTeamMember(content.createdBy) && isTeam ? 'bg-paperdazgreen-300/20' : '']"
                      @click="actionFolder = content">
                      <ellipsis-icon-vertical-icon />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else-if="!fileSpinner" class="sm:hidden text-center text-sm p-4" :class="{'hidden': !showFolders || folderSelected}">
            No Folders
          </div>
          <FilePagination :totalFile="totalFolder" @setPage="setFolderPage" />
        </div>
        <!-- End:: Folders -->
        <!-- Start:: Files -->
        <div :class="{'hidden sm:block': showFolders && !folderSelected}">
          <h4 class="text-xl text-paperdazgreen-400 font-medium px-5 border-b border-gray-100 h-16 hidden sm:flex items-center"
            v-if="folders.length > 0 && !folderSelected">
            Files
          </h4>
          <div v-if="folderSelected"
            class="text-xl text-paperdazgreen-400 font-medium px-5 border-b border-gray-100 h-16 hidden sm:flex items-center">
            <button class="bg-paperdazgreen-400 p-2 text-white text-lg rounded-lg" @click="backFolder">Back</button>
            <h2 class="text-paperdazgreen-400 font-bold w-5/6 text-center">{{ FilesInFolerContent.name }}</h2>
          </div>
          <div class="overflow-x-auto custom-scrollbar relative">
            <!-- START: spinner container -->
            <div v-if="fileSpinner"
              class="absolute z-10 w-full h-full bg-white top-0 left-0 rounded-lg flex justify-center items-center">
              <spinner-dotted-icon class="text-paperdazgreen-400 animate-spin" />
            </div>
            <!-- END: spinner container -->
            <empty-file-ledger class="min-h-[55vh]" v-if="(pdfUser.length < 1) && !fileSpinner" :isPaidUser="isPaidUser" />
            <!--START: No files container-->
            <table class="custom-table" v-else>
              <thead class="text-[#414142]">
                <tr>
                  <th class="w-12 text-left fixed-col left">No</th>
                  <th class="text-left sm:!pl-16">File name</th>
                  <th class="text-center">Action</th>
                  <th class="text-center">Privacy</th>
                  <th class="text-center">Date &amp; Time</th>
                  <th class="text-center fixed-col right"></th>
                </tr>
              </thead>
              <tbody class="text-[#505050]">
                <tr v-for="(file, i) in pdfUser" :key="i">
                  <td class="fixed-col left">{{ i + 1 + returnedDataPage }}</td>
                  <td class="text-left overflow-hidden">
                    <div class="flex items-center gap-3 whitespace-nowrap max-w-[100px] sm:min-w-[150px] sm:max-w-[400px]">
                      <div class="p-0.5 border border-paperdazgreen-400 hidden sm:block"
                        :class="[
                          (file.role == userType.PAID && $auth.user.id != file.userId)
                            ? 'rounded-md w-9 h-9 min-w-[36px] min-h-[36px]'
                            : 'hidden sm:circle sm:circle-17']"
                      >
                        <img :src="
                          (file.user || {}).profile_picture ||
                          '/img/placeholder_picture.png'
                        " alt=""
                          :class="[file.role == userType.PAID ? 'w-full h-full rounded-md' : 'w-full h-full rounded-full']" />
                      </div>
                      <div class="max-sm:w-24">
                        <p class="max-sm:truncate max-sm:text-xs sm:text-base font-medium text-left sm:ml-1">
                          <nuxt-link :to="`/pdf/${file.paperLink}`">
                            {{ file.fileName | removeExtension }}
                          </nuxt-link>
                        </p>
                        <p class="text-xs text-[#878686] truncate hidden sm:block">
                          {{ file.userName }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-center capitalize"
                    :class="
                      file.fileAction === FileAction.COMPLETE ? 'text-paperdazgreen-400' :
                      file.fileAction === FileAction.SIGNED ? 'text-blue-400' :
                      file.fileAction === FileAction.CONFIRM ? 'text-purple-400' : ''
                    "
                  >{{ file.fileAction && file.fileAction !== FileAction.SHARED ? file.fileAction : "-" }}</td>
                  <td class="text-sm text-center capitalize">{{ (file || {}).filePrivacy }}</td>
                  <td class="text-center whitespace-normal px-1">
                    {{ formatDateTime(file.updatedAt) }}
                  </td>
                  <td class="fixed-col right w-4 sm:w-[50px]">
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
                          <div class="no-access" v-if="!createdByTeamMember(file.uploadedBy)">no access right</div>
                          <ul class="min-w-[150px]" v-else>
                            <li class="dropdown-item" @click="showShareCompanyFileFunc(file)" divided>
                              <div class="flex justify-between w-full">
                                <share-icon width="16" height="16" class="inline-block float-left" />
                                <span>Share</span>
                              </div>
                            </li>
                            <li @click="showRequestModalFunc(file)" class="dropdown-item">
                              <div class="flex justify-between w-full border-t border-gray-200">
                                <request-icon width="20" height="20" class="inline-block float-left" />
                                <span>Request</span>
                              </div>
                            </li>
                            <li class="dropdown-item" @click="showPapertagsModalFunc(file)">
                              <div class="flex justify-between w-full border-t border-gray-200" >
                                <span width="20" height="20" class="inline-block float-left">#</span>
                                <span>Paper Tag</span>
                              </div>
                            </li>
                            <li class="dropdown-item" @click="showCCFlowModalFunc(file)">
                              <div class="flex justify-between w-full border-t border-gray-200">
                                <FileSolidIcon width="16" height="16" class="inline-block float-left" />
                                <span class="ml-1">Carbon Copy</span>
                              </div>
                            </li>
                            <li class="dropdown-item" @click="showEditCompanyFileFunc(file)">
                              <div class="flex justify-between w-full border-t border-gray-200">
                                <PenIcon width="16" height="16" class="inline-block float-left" />
                                <span class="ml-1">Edit</span>
                              </div>
                            </li>
                            <li class="dropdown-item" @click="showMoveCompanyFileFunc(file)">
                              <div class="flex justify-between w-full border-t border-gray-200">
                                <MoveIcon width="16" height="16" class="inline-block float-left" />
                                <span class="ml-1">Move</span>
                              </div>
                            </li>
                            <li class="dropdown-item" @click="showQrCodeFunc(file)">
                              <div class="flex justify-between w-full border-t border-gray-200">
                                <QrcodeIcon width="16" height="16" class="inline-block float-left" />
                                <span class="ml-1">QR Code</span>
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <FilePagination :totalFile="totalFile" @setPage="setPage" />
        </div>
        <!-- End:: Files -->
      </div>
    </transition>
    <upload-document-modal @resetUserFolder="resetUserFolder" :folder="fileProps" v-model="showUploadDocumentModal" />
    <CreateCompanyFolder @refresh="setRefresh" :userFile="userFile" @resetUserFile="resetUserFile"
      v-model="showCreateCompanyFolder" />
    <EditCompanyFolder @refresh="setRefresh" :file="fileProps" v-model="showEditCompanyFolder" />
    <EditCompanyFile @refresh="setRefresh" :file="fileProps" v-model="showEditCompanyFile" />
    <QrCode @refresh="setRefresh" :file="fileProps" v-model="showQrCode" />
    <DeleteCompanyFolder @refresh="setRefresh" :file="fileProps" v-model="showDeleteCompanyFolder" />
    <CreateTeam @refresh="setRefresh" v-model="showCreateTeam" />
    <DeleteCompanyFolder @refresh="setRefresh" :file="fileProps" v-model="showDeleteCompanyFolder" />
    <RemoveCompanyFile @refresh="setRefresh" :userFile="userFile" v-model="showRemoveCompanyFiles" />
    <PdfPapertagsModal @refresh="setRefresh" :file="userFile" v-model="showPapertagsModal" />
    <MoveCompanyFiles @refresh="setRefresh" :userFile="userFile" @resetUserFile="resetUserFile"
      @createFolderEmit="showCreateCompanyFolderFunc" v-model="showMoveCompanyFiles" />
    <ShareFilesModal @refresh="setRefresh" :userFile="userFile" @qrLoad="showQrcodeFileFunc"
      v-model="showShareCompanyFiles" />
    <RequestModal @refresh="setRefresh" :userFile="userFile" @qrLoad="showQrcodeFileFunc" v-model="showRequestModal" />
    <AddCompanyfiles @refresh="setRefresh" :file="fileProps" :totalFile="totalFile"
      @createFile="showUploadDocumentModal = true" v-model="showAddCompanyFiles" />
    <FilesInFolder :folder="FilesInFolerContent" v-model="showFilesInFolder" />
    <QrcodeShare :userFile="userFile" v-model="showQrcodeFiles" />
    <MaxPaperlinkModal v-model="showMaxPaperlinkModal" :totalFile="totalFile" />
    <PdfCCFlowModal :file="userFile" v-model="showCCFlowModal" />
    <!-- File Bottom Dialog -->
    <el-dialog :visible.sync="actionFile" :append-to-body="true" :show-close="false" center width="100%" top="100vh" custom-class="-translate-y-full sm:hidden bottom-sm-modal"
      class="bottom-0 overflow-hidden sm:hidden">
      <div class="w-full flex flex-col p-0 -mt-8 -mb-4" v-if="actionFile">
        <div class="flex flex-col items-center justify-center gap-1 pb-5">
          <div class="p-0.5 border border-paperdazgreen-400 w-20 h-20"
            :class="[
              (actionFile.role == userType.PAID)
                ? 'rounded-md'
                : 'circle']"
          >
            <img :src="
              actionFile.user?.profile_picture ||
              '/img/placeholder_picture.png'
            " alt=""
              :class="[actionFile.role == userType.PAID ? 'w-full h-full rounded-md' : 'w-full h-full rounded-full']" />
          </div>
          <p class="font-bold">{{ actionFile.role == userType.PAID ? 'Paid user' : 'Free user' }}</p>
          <p class="font-bold text-lg mt-2 mb-0">
            {{ actionFile.fileName | removeExtension }}
          </p>
          <p class="font-bold mb-0">
            {{ formatDateTime(actionFile.updatedAt) }}
          </p>
          <p class="font-bold mt-2">
            <nuxt-link :to="`/pdf/${actionFile.paperLink}`">
              <span class="flex items-center gap-2">Sign <EyeIcon /></span>
            </nuxt-link>
          </p>
        </div>
        <div class="no-access" v-if="!createdByTeamMember(actionFile.uploadedBy)">no access right</div>
        <ul class="min-w-[150px]" v-else>
          <li class="dropdown-item" @click="showShareCompanyFileFunc(actionFile)" divided>
            <div class="flex justify-between items-center w-full py-2">
              <div class="flex items-center">
                <div class="w-6 flex items-center justify-start">
                  <share-icon width="16" height="16" class="inline-block float-left" />
                </div>
                <span>Share</span>
              </div>
              <arrow-down-icon class="h-2 w-3 -rotate-90" />
            </div>
          </li>
          <li @click="showRequestModalFunc(actionFile)" class="dropdown-item">
            <div class="flex justify-between items-center w-full border-t border-gray-200 py-2">
              <div class="flex items-center">
                <div class="w-6 flex items-center justify-start">
                  <request-icon width="20" height="20" class="inline-block float-left" />
                </div>
                <span>Request</span>
              </div>
              <arrow-down-icon class="h-2 w-3 -rotate-90" />
            </div>
          </li>
          <li class="dropdown-item" @click="showPapertagsModalFunc(actionFile)">
            <div class="flex justify-between items-center w-full border-t border-gray-200 py-2" >
              <div class="flex items-center">
                <div width="20" height="20" class="float-left w-6 flex items-center justify-start">#</div>
                <span>Paper Tag</span>
              </div>
              <arrow-down-icon class="h-2 w-3 -rotate-90" />
            </div>
          </li>
          <li class="dropdown-item" @click="showCCFlowModalFunc(actionFile)">
            <div class="flex justify-between items-center w-full border-t border-gray-200 py-2">
              <div class="flex items-center">
                <div class="w-6 flex items-center justify-start">
                  <FileSolidIcon width="16" height="16" class="inline-block float-left" />
                </div>
                <span class="ml-1">Carbon Copy</span>
              </div>
              <arrow-down-icon class="h-2 w-3 -rotate-90" />
            </div>
          </li>
          <li class="dropdown-item" @click="showEditCompanyFileFunc(actionFile)">
            <div class="flex justify-between items-center w-full border-t border-gray-200 py-2">
              <div class="flex items-center">
                <div class="w-6 flex items-center justify-start">
                  <PenIcon width="16" height="16" class="inline-block float-left" />
                </div>
                <span class="ml-1">Edit</span>
              </div>
              <arrow-down-icon class="h-2 w-3 -rotate-90" />
            </div>
          </li>
          <li class="dropdown-item" @click="showMoveCompanyFileFunc(actionFile)">
            <div class="flex justify-between items-center w-full border-t border-gray-200 py-2">
              <div class="flex items-center">
                <div class="w-6 flex items-center justify-start">
                  <MoveIcon width="16" height="16" class="inline-block float-left" />
                </div>
                <span class="ml-1">Move</span>
              </div>
              <arrow-down-icon class="h-2 w-3 -rotate-90" />
            </div>
          </li>
          <li class="dropdown-item" @click="showQrCodeFunc(actionFile)">
            <div class="flex justify-between items-center w-full border-t border-gray-200 py-2">
              <div class="flex items-center">
                <div class="w-6 flex items-center justify-start">
                  <QrcodeIcon width="16" height="16" class="inline-block float-left" />
                </div>
                <span class="ml-1">QR Code</span>
              </div>
              <arrow-down-icon class="h-2 w-3 -rotate-90" />
            </div>
          </li>
          <li class="dropdown-item" @click="showRemoveCompanyFileFunc(actionFile)">
            <div class="flex justify-between items-center w-full border-t border-gray-200 py-2">
              <div class="flex items-center">
                <div class="w-6 flex items-center justify-start">
                  <trash-can-icon width="16" height="16" class="inline-block float-left" />
                </div>
                <span>Remove</span>
              </div>
              <arrow-down-icon class="h-2 w-3 -rotate-90" />
            </div>
          </li>
        </ul>
      </div>
    </el-dialog>
    <!-- Folder Bottom Dialog -->
    <el-dialog :visible.sync="actionFolder" :append-to-body="true" :show-close="false" center width="100%" top="100vh" custom-class="-translate-y-full sm:hidden bottom-sm-modal"
      class="bottom-0 overflow-hidden sm:hidden">
      <div class="w-full flex flex-col p-0 -mt-8 -mb-4" v-if="actionFolder">
        <div class="no-access" v-if="!createdByTeamMember(actionFolder.createdBy)">no access right</div>
        <ul v-else class="min-w-[150px]">
          <li class="dropdown-item" @click="showEditCompanyFolderFunc(actionFolder)">
            <div class="flex justify-center items-center w-full py-2 text-center">
              <span>Edit</span>
            </div>
          </li>
          <li class="dropdown-item" @click="showDeleteCompanyFolderFunc(actionFolder)">
            <div class="flex justify-center items-center w-full border-t border-gray-200 py-2 text-center">
              <span>Remove</span>
            </div>
          </li>
          <li class="dropdown-item" @click="showAddCompanyFolderFunc(actionFolder)">
            <div class="flex justify-center items-center w-full border-t border-gray-200 py-2 text-center">
              <span>Add Files</span>
            </div>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Vue from 'vue'
import UploadDocumentModal from '../dashboard/UploadDocumentModal.vue'
import CompanyIcon from '../svg-icons/CompanyIcon.vue'
import EllipsisIconVerticalIcon from '../svg-icons/EllipsisIconVerticalIcon.vue'
import HeartOutlineIcon from '../svg-icons/HeartOutlineIcon.vue'
import SearchIcon from '../svg-icons/SearchIcon.vue'
import QrcodeIcon from '../svg-icons/QrcodeIcon.vue'
import PenIcon from '../svg-icons/PenIcon.vue'
import ShareOutlineIcon from '../svg-icons/ShareOutlineIcon.vue'
import ExportIcon from '../svg-icons/ExportIcon.vue'
import MoveIcon from '../svg-icons/MoveIcon.vue'
import ShareIcon from '../svg-icons/ShareIcon.vue'
import FileSolidIcon from '../svg-icons/FileSolidIcon.vue'
import RequestIcon from '../svg-icons/RequestIcon.vue'
import CopyIcon from '../svg-icons/CopyIcon.vue'
import TrashCanIcon from '../svg-icons/TrashCanIcon.vue'
import PdfPapertagsModal from '../pdf/modals/PdfPapertagsModal.vue'
import PdfCCFlowModal from '../pdf/modals/PdfCCFlowModal.vue'
import EmptyFileLedger from '../widgets/EmptyFileLedger.vue'
import FloatingActionButton from '../widgets/FloatingActionButton.vue'
import CreateCompanyFolder from './Tabs/CreateCompanyFolder.vue'
import CreateTeam from './Tabs/CreateTeam.vue'
import EditCompanyFolder from './Tabs/EditCompanyFolder.vue'
import EditCompanyFile from './Tabs/EditCompanyFile.vue'
import QrCode from './Tabs/QrCode.vue'
import DeleteCompanyFolder from './Tabs/DeleteCompanyFolder.vue'
import AddCompanyfiles from './Tabs/AddCompanyfiles.vue'
import RemoveCompanyFile from './Tabs/RemoveCompanyFile.vue'
import MoveCompanyFiles from './Tabs/MoveCompanyFiles.vue'
import ShareFilesModal from './Tabs/ShareFilesModal.vue'
import FolderPlusIcon from '../svg-icons/FolderPlusIcon.vue'
import PlusIcon from '../svg-icons/PlusIcon.vue'
import { mapState } from 'vuex'
import DateFormatter from '~/utils/DateFormatter'
import SpinnerDottedIcon from '../svg-icons/SpinnerDottedIcon.vue'
import QrcodeShare from './Tabs/QrcodeShare.vue'
import FilePagination from '../pagination/FilePagination.vue'
import UserTypeEnum from '~/models/UserTypeEnum'
import RequestModal from './Tabs/RequestModal.vue'
import TeamAccess from '~/models/TeamAccess'
import FilesInFolder from './Tabs/FilesInFolder.vue'
import MaxPaperlinkModal from './Tabs/MaxPaperlinkModal.vue'
import FileAction from '~/models/FileAction'
import ArrowDownIcon from '../svg-icons/ArrowDownIcon.vue'
import EyeIcon from '../svg-icons/EyeIcon.vue'
export default Vue.extend({
  components: {
    EmptyFileLedger,
    FloatingActionButton,
    UploadDocumentModal,
    SearchIcon,
    ExportIcon,
    ShareIcon,
    PdfCCFlowModal,
    CopyIcon,
    FileSolidIcon,
    TrashCanIcon,
    CompanyIcon,
    RequestIcon,
    PlusIcon,
    MoveIcon,
    PenIcon,
    FolderPlusIcon,
    EllipsisIconVerticalIcon,
    HeartOutlineIcon,
    ShareOutlineIcon,
    CreateCompanyFolder,
    PdfPapertagsModal,
    CreateTeam,
    EditCompanyFolder,
    EditCompanyFile,
    QrCode,
    DeleteCompanyFolder,
    AddCompanyfiles,
    RemoveCompanyFile,
    MoveCompanyFiles,
    SpinnerDottedIcon,
    ShareFilesModal,
    QrcodeShare,
    FilePagination,
    RequestModal,
    FilesInFolder,
    MaxPaperlinkModal,
    QrcodeIcon,
    ArrowDownIcon,
    EyeIcon,
  },
  name: 'CompanyFileLedger',
  data() {
    return {
      showUploadDocumentModal: false,
      searchParam: '',
      returnedDataPage: 0,
      totalFile: null,
      showCreateCompanyFolder: false,
      showCreateTeam: false,
      showQrCode:false,
      showEditCompanyFolder: false,
      showEditCompanyFile:false,
      showDeleteCompanyFolder: false,
      folderProperty: '',
      showAddCompanyFiles: false,
      showRemoveCompanyFiles: false,
      showMoveCompanyFiles: false,
      showShareCompanyFiles: false,
      showQrcodeFiles: false,
      showCCFlowModal: false,
      showRequestModal: false,
      fileSpinner: true,
      folderSpinner: true,
      showPapertagsModal: false,
      folders: [],
      fileProps: {},
      userFile: {},
      refresh: false,
      show: false,
      folderSearch: '',
      returnedFolderPage: 0,
      totalFolder: null,
      showFilesInFolder: false,
      FilesInFolerContent: {},
      showUploadIcon: false,
      totalRegisteredPaperlink: null,
      showMaxPaperlinkModal: false,
      folderSelected: false,
      showFolders: false,
      actionFile: null,
      actionFolder: null,
      FileAction,
    }
  },
  methods: {
    async maxFileUpload() {
      this.$auth.user.subscriptionId && await this.$axios.get(`/subscriptions/${this.$auth.user.subscriptionId}`)
        .then((response) => {
          this.totalRegisteredPaperlink = response?.data?.paperlink
        })
        .finally(() => { this.showUploadIcon = true })
    },
    showUploadModalFunction() {
      if (!this.showUploadIcon) return
      if (this.totalFile >= this.totalRegisteredPaperlink)
        this.showMaxPaperlinkModal = true
      else
        this.showUploadDocumentModal = true
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
    backFolder() {
      this.folderSelected = false;
      this.setRefresh();
    },
    showFolderFilesFunc(val) {
      this.FilesInFolerContent = val
      this.folderSelected = true;
      // this.showFilesInFolder = true
      this.$store.commit('ADD_USER', this.FilesInFolerContent.files || [])
    },
    resetUserFolder() {
      this.fileProps = {}
    },
    resetUserFile() {
      this.userFile = {}
    },
    setFolderPage(val) {
      this.returnedFolderPage = val
    },
    setPage(page) {
      this.returnedDataPage = page
    },
    setRefresh() {
      this.refresh = !this.refresh
    },
    showCreateCompanyFolderFunc() {
      this.showCreateCompanyFolder = true
    },
    showCreateTeamFunc() {
      this.showCreateTeam = true
    },
    showEditCompanyFolderFunc(file) {
      this.fileProps = file
      this.showEditCompanyFolder = true
      this.actionFolder = null
    },
    showEditCompanyFileFunc(file) {
      this.fileProps = file
      this.showEditCompanyFile = true
      this.actionFile = null
    },
    showQrCodeFunc(file) {
      this.fileProps = file
      this.showQrCode = true
      this.actionFile = null
    },
    showDeleteCompanyFolderFunc(file) {
      this.fileProps = file
      this.showDeleteCompanyFolder = true
      this.actionFolder = null
    },
    showAddCompanyFolderFunc(file) {
      this.fileProps = file
      this.showAddCompanyFiles = true
      this.actionFolder = null
    },
    showRemoveCompanyFileFunc(file) {
      this.userFile = file
      this.showRemoveCompanyFiles = true
      this.actionFile = null
    },
    showMoveCompanyFileFunc(file) {
      this.userFile = file
      this.showMoveCompanyFiles = true
      this.actionFile = null
    },
    showShareCompanyFileFunc(file) {
      console.log(file)
      this.userFile = file
      this.showShareCompanyFiles = true
      this.actionFile = null
    },
    showPapertagsModalFunc(file) {
      this.userFile = file
      this.showPapertagsModal = true
      this.actionFile = null
    },
    showCCFlowModalFunc(file) {
      this.userFile = file
      this.showCCFlowModal = true
      this.actionFile = null
    },
    showRequestModalFunc(file) {
      this.userFile = file
      this.showRequestModal = true
      this.actionFile = null
    },
    showQrcodeFileFunc() {
      this.showQrcodeFiles = true
    },
    formatDateTime(dateVal) {
      return `${DateFormatter.getDateString(
        dateVal
      )}  ${DateFormatter.getFormattedTime(dateVal)}`
    },
    async fetchFiles(page, search) {
      //---- checking the user role ---
      let paramsId = (this.$auth.user.role == UserTypeEnum.TEAM ? this.$auth.user.teamId : this.$auth.user.id)
      //<------------------- START: fetching of folder ------------>>
      await this.$axios.$get(`/files/?userId=${paramsId}&fileName[$like]=${search}%&$skip=${page}&$sort[updatedAt]=-1`, {
        params: {
          isEditing: 0
        }
      })
        .then((response) => {
          const filesData = response.data.map((el) => {
            return el
          })
          // set the data.file
          this.files = filesData
          // push files to store
          this.$store.commit('ADD_USER', this.files)
          // to stop spinner
          this.fileSpinner = false
          this.totalFile = response.total
        })
        .finally(() => {
          this.fileSpinner = false
        })
      //<------------------- START: fetching of folder ------------>>
    },
    async fetchFolder(page, search) {
      //---- checking the user role ---
      let paramsId = this.$auth.user.role == UserTypeEnum.TEAM ? this.$auth.user.teamId : this.$auth.user.id
      //<------------------- START: fetching of folder ------------>>
      await this.$axios
        .$get(`/folders/?userId=${paramsId}&name[$like]=${search}%&$sort[updatedAt]=-1&$skip=${page}`)
        .then((response) => {
          const filesData = response.data.map((el) => {
            return el
          })
          this.totalFolder = response.total
          // set the data.file
          this.folders = filesData
          // to stop spinner
          this.folderSpinner = false
        })
        .finally(() => {
          this.folderSpinner = false
        })
      //<------------------- START: fetching of folder ------------>>
    },
  },
  mounted() {
    this.fetchFiles(this.returnedDataPage, this.folderSearch)
    this.fetchFolder(this.returnedFolderPage, this.folderSearch)
    this.maxFileUpload()
  },
  filters: {
    removeExtension(filename) {
      return filename.replace(/\.[^\/.]+$/, '');
    }
  },
  computed: {
    // getting state from the store
    ...mapState(['filterUser', 'pdfUser']),
    userType() {
      return (UserTypeEnum)
    },
    isPaidUser() {
      switch (this.$auth?.user?.role) {
        case UserTypeEnum.PAID:
          return true
        case UserTypeEnum.TEAM:
          return true
        case UserTypeEnum.FREE:
          return false
      }
    },
    teamMemberCanAccess() {
      switch (this.$auth.user.role + this.$auth.user.teamAccess) {
        case (UserTypeEnum.TEAM + TeamAccess.OWN_FILE):
          return false
        case (UserTypeEnum.TEAM + TeamAccess.COMPANY_FILE):
          return true
      }
    },
    isTeam() {
      return (this.$auth.user.role == UserTypeEnum.TEAM)
    },
    mainUserLink() {
      switch (this.$auth?.user?.role) {
        case UserTypeEnum.PAID:
          return (this.$auth.user || {}).id
        case UserTypeEnum.TEAM:
          return (this.$auth.user || {}).mainAccountId
      }
      (this.$auth.user || {}).id
    }
  },
  watch: {
    refresh: function () {
      this.$nuxt.refresh()
      this.fetchFiles(this.returnedDataPage, this.folderSearch)
      this.fetchFolder(this.returnedFolderPage, this.folderSearch)
    },
    returnedDataPage: function () {
      this.fileSpinner = true
      this.fetchFiles(this.returnedDataPage, this.folderSearch)
    },
    returnedFolderPage: function () {
      this.folderSpinner = true
      this.fetchFolder(this.returnedFolderPage, this.folderSearch)
    },
    folderSearch: function () {
      this.folderSpinner = true
      this.fetchFolder(this.returnedFolderPage, this.folderSearch)
      this.fileSpinner = true
      this.fetchFiles(this.returnedDataPage, this.folderSearch)
    },
    "$auth.user": function () {
      this.fetchFiles(this.returnedDataPage, this.folderSearch)
      this.fetchFolder(this.returnedFolderPage, this.folderSearch)
      this.maxFileUpload()
    }
  },
})
</script>
<style lang="postcss" scoped>
.no-access {
  @apply p-2 text-[14px] capitalize;
}
.dropdown-item {
  border-top: 1px
}
.custom-table {
  height: fit-content;
  --background: white;
  @apply max-sm:text-xs sm:text-base w-full whitespace-nowrap;
  border-collapse: separate;
  border-spacing: 0px 0px;
  height: fit-content;
  & tr {
    @apply border-b border-gray-100;
    transition: all 0.2s ease-in-out;
    &.highlight {
      --background: rgba(233, 254, 219, 0.46);
    }
  }
  & th {
    @apply max-sm:pt-4 max-sm:pb-1 sm:pt-8 sm:pb-3 max-sm:text-xs sm:text-base;
    background: var(--background);
  }
  & td {
    @apply py-3 max-sm:text-xs sm:text-base;
  }
  & td,
  & th {
    @apply px-1 border-b border-gray-100;
    transition: all 0.2s ease-in-out;
    background: var(--background);
    &:first-child {
      @apply pl-5;
    }
    &:last-child {
      @apply pr-5;
    }
    &.fixed-col {
      position: sticky;
      background: white;
      background: var(--background);
      &.left {
        left: -0.1px;
      }
      &.right {
        right: -0.1px;
      }
    }
  }
}
</style>

<!-- 

import { HooksObject } from '@feathersjs/feathers';
import {PDFDocument, rgb, scale, StandardFonts, degrees} from 'pdf-lib';
import {writeFile} from 'fs/promises';
import FormData from 'form-data';
import axios from 'axios';
import fs from 'fs'
import fetch from 'node-fetch'
import app from '../../app';
import { DEFAULT_VALUES } from '../../utils/constants';
import BorderStyle from 'pdf-lib/cjs/core/annotation/BorderStyle';

const PdfGenerator = async (context: any)=>{
       const {pdf_url, data, pdfWidth, pdfHeight} = context.data
        const pdf = await fetch(pdf_url).then(res => res.arrayBuffer())
        const pdfDoc = await PDFDocument.load(pdf)
        // console.log(pdfDoc);
        let numPages:any = pdfDoc.getPages.length
        pdfDoc.getPages().map((page:any) =>{
          // page.setSize( pdfWidth, pdfHeight)
          console.log(page.getSize())
        })
        // for (let index = 0; index < pdfDoc.getPages.length; index++) {
        //   // const element = array[index];
         
        // }

        console.log("number of pages ="+(parseInt(numPages)+1))


        const form = pdfDoc.getForm()
        const fields = form.getFields()
        console.log(`${fields.length} fields found`)
        // try {
          fields.forEach(async field => {
            const type = field.constructor.name
            const name = field.getName()
            // console.log(`${type}: ${name}`)

            data.map(async (el:any) => {
              //if text
              if(el.type == "PDFTextField"){
                if(el.fieldName == name){
                  await form.getTextField(name).setText(el.value);
                  console.log(`${type}: ${name}`)
                }
              }
              else if(el.type == "PDFDropdown"){
                if(el.fieldName == name){
                  form.getDropdown(name).select(el.value);
                }
              }
              else if(el.type == "PDFCheckBox"){
                if(el.fieldName == name){
                  if(el.isCheck){
                    form.getCheckBox(name).check();
                  }
                }
              }
              else if(el.type == "PDFRadioGroup"){
                if(el.fieldName == name){
                 form.getRadioGroup(name).select(el.value)
                }
              }
            })


          })
          // loop Annotations
          data.map(async (el:any) => {
            let _page = pdfDoc.getPages()[el.page_number]; 
            if(el.type == "Annotation"){
              if(el.option === DEFAULT_VALUES.svgOption.FILL){
                _page.drawSvgPath(el.svgPath, {x: (el.axisX*_page.getWidth())/pdfWidth, y: (_page.getHeight() - (el.axisY*_page.getHeight())/pdfHeight) , color: rgb(0, 0, 0), scale: Number(el.elemScale * 1.17) },)
              }else if(el.option === DEFAULT_VALUES.svgOption.DOT){
                _page.drawSvgPath(el.svgPath, {x: (el.axisX*_page.getWidth())/pdfWidth, y:  (_page.getHeight() - (el.axisY*_page.getHeight())/pdfHeight) , color: rgb(0, 0, 0), scale: Number(el.elemScale * 0.63) },)
              }else if(el.option === DEFAULT_VALUES.svgOption.OPACITY){
                _page.drawRectangle({
                  x: (el.axisX*_page.getWidth())/pdfWidth,
                  y: (_page.getHeight() - (el.axisY*_page.getHeight())/pdfHeight) - 11,
                  width: (el.length*_page.getWidth())/pdfWidth,
                  height: 11,
                  color: rgb(1, 1, 0.),
                  opacity: 0.4,
                })
              }else{
                let _page:any =  pdfDoc.getPages()[el.page_number];
                const image = await pdfDoc.embedPng(el.svgImagePath);
                 await _page.drawImage(image, {
                    x: (((el.axisX)*_page.getWidth())/pdfWidth),
                    y:  (_page.getHeight() - (el.axisY*_page.getHeight())/pdfHeight) - (el.svgHeight*_page.getHeight())/pdfHeight, //added a proportional calculation to get the page height and divide by the movement along the y-axis 
                    width:  (el.svgWidth*_page.getWidth())/pdfWidth,
                    height: (el.svgHeight*_page.getHeight())/pdfHeight,
                    scale: 1
                  });
              } 
            }
            else if(el.type == "Image"){
              console.log(el)
              let _page:any =  pdfDoc.getPages()[el.page_number];
              const image = await pdfDoc.embedPng(el.base64);
               await _page.drawImage(image, {
                  x: (((el.axisX)*_page.getWidth())/pdfWidth),
                  y: (_page.getHeight() - (el.axisY*_page.getHeight())/pdfHeight) - ((el.axisY2)*_page.getHeight())/pdfHeight, //added a proportional calculation to get the page height and divide by the movement along the y-axis 
                  width:  ((el.axisX2)*_page.getHeight())/pdfHeight,
                  height: ((el.axisY2)*_page.getHeight())/pdfHeight,
                  scale: 1* Number(el.elemScale)
                });
            }
            else if(el.type == "DrawTextImage"){
              let _page:any =  pdfDoc.getPages()[el.page_number];
              const image = await pdfDoc.embedPng(el.textImageContent);
               await _page.drawImage(image, {
                  x: (((el.left)*_page.getWidth())/pdfWidth),
                  y: _page.getHeight() - (((el.top)*_page.getHeight())/pdfHeight)  - el.height, //added a proportional calculation to get the page height and divide by the movement along the y-axis 
                  width:  ((el.width)*_page.getHeight())/pdfHeight,
                  height: ((el.height)*_page.getHeight())/pdfHeight,
                  scale: 1* Number(el.elemScale)
                });
            }
            else if(el.type == "confirm"){
               if(el.option == 'sign'){
                let _page:any =  pdfDoc.getPages()[el.page_number];
                const image = await pdfDoc.embedPng(el.signaturePath)
                 await _page.drawImage(image, {
                    x: 25,
                    y: 10, //added a proportional calculation to get the page height and divide by the movement along the y-axis 
                    width:  40,
                    height: 20,
                    rotate: degrees(90),
                  });
               }
               else{
                  let _page:any = pdfDoc.getPages()[el.page_number];
                _page.drawText(el.text, {
                  x: 20,  
                  y: 55,
                  size:9,
                  rotate: degrees(90),
                });
               }
            }
            else if(el.type == "DrawText"){
              let _page = pdfDoc.getPages()[el.page_number];
              _page.drawText(el.text, {
                x: (el.axisX*_page.getWidth())/pdfWidth,  
                 y: el.isLabel ? (_page.getHeight() - (el.axisY*_page.getHeight())/pdfHeight) - el.size + 3 : _page.getHeight() - (((el.top)*_page.getHeight())/pdfHeight) - el.size + 3,
                 size: el.size - 2.5 - (1.6 * ((el.size-12)/12) ) })
            }
            else if(el.type == "DrawLine"){
              let _page:any =  pdfDoc.getPages()[el.page_number];
                const image = await pdfDoc.embedPng(el.svgImagePath);
                 await _page.drawImage(image, {
                    x: (((el.left)*_page.getWidth())/pdfWidth),
                    y:   _page.getHeight() - (((el.top)*_page.getHeight())/pdfHeight) - el.svgHeight + (el.svgHeight/7)*2, //added a proportional calculation to get the page height and divide by the movement along the y-axis 
                    width:  (el.svgWidth*_page.getWidth())/pdfWidth,
                    height: (el.svgHeight*_page.getHeight())/pdfHeight,
                    scale: 1
                  })
              }
          })
 
          const pdfBytes = await pdfDoc.save();
          await writeFile("./src/services/pdf-generator/output.pdf", pdfBytes);

          console.log('PDF created!');
         // @ts-ignore
          var datax = new FormData();
          //@ts-ignore
          datax.append('upload', fs.createReadStream('./src/services/pdf-generator/output.pdf'));
          datax.append('type', 'pdf');
          // console.log(datax);
          var configData = {
            method: 'post',
            url: `${app.get('base_url')}/files`,
            // headers: {
            //   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NTc5NjU2NDQsImV4cCI6MTY1ODA1MjA0NCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiMSIsImp0aSI6IjJmZjk5YjdjLTk5YjYtNGRmMC04MGZiLWY4YWRlYzUyNGZiMCJ9.6j3ciiu8uGs4tfgoppCeMimJISg-Bvq3XMDfPUwNgMU',
            // },
            data : datax
          };

        await axios(configData)
          .then(function (response) {
            // console.log(response.data);
            context.data.fileName = response.data.originalname
            context.data.key = response.data.key
            context.data.downloadLink = response.data.location
            console.log(context.data.downloadLink);
          })
          .catch(function (error) {
            console.log(error);
            throw new Error(error)
          });

    return context
}

const processLedgerAndRequest =async (context: any)=>{
  //  await app.services.ledger.create(
  //       {
  //         "userId": 330,
  //         "fileName": context.result.fileName,
  //         "action": "complete",
  //         "fileId": 31,
  //         "fileOwnerId": 352,
  //         "fileOwner": 0
  //     }
  //  );

  //  await app.services.request.create({
  //   "action": "complete",
  //   "userId": 330,
  //   "link": "https://paperdazfile.nyc3.digitaloceanspaces.com/uploaded-pdfs/1680363555353output.pdf",
  //   "fileId": 31
  // })

  return context
}



export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [PdfGenerator],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}; -->

<template>
  <section class="bg-paperdazgreen-300 pt-10">
    <div class="flex flex-wrap p-3 justify-around items-center">
      <div class="w-full sm:w-6/12 md:w-5/12">
        <message-alert-widget
          :message="errorMessageUser"
          v-show="errorMessageUser"
          type="error"
          class="my-2 w-[80%] ml-[0%]"
        />
        <p class=" md:text-[2rem] text-white">Account Information</p>
        <span class="text-[0.9rem] mb-10 text-white"
          >Enter the required information to continue</span
        >
        <div class="mt-8">
          <el-input
            :disabled="loading"
            class="text-input"
            placeholder="Business name"
            required
            v-model="business_email"
          />
          <el-input
            :disabled="loading"
            class="text-input"
            placeholder="Contact name"
            required
            v-model="contact_name"
          />
          <el-input
            :disabled="loading"
            class="text-input"
            placeholder="Email address"
            required
            v-model="business_email"
          />
          <el-input
            :disabled="loading"
            class="text-input"
            placeholder="Contact number"
            required
            v-model="business_number"
          />
        </div>
      </div>

      <div class="w-full sm:w-6/12 md:w-5/12 px-2 md:px-3 bg-white pb-3 rounded-[1.1rem] shadow-lg">
        <div class="w-full p-3">
          <form class="">
            <div class="form-group group-label">
              <label>Total due</label>
              <label class="text-xl" for=""
                >$
                {{
                  packageInfo.isMonthly
                    ? packageInfo.monthlyPrice
                    : packageInfo.yearlyPrice
                }}
                <abbr class="text-xs">{{
                  packageInfo.isMonthly ? 'monthly' : 'yearly'
                }}</abbr>
              </label>
            </div>
            <div class="h-[1px] bg-gray-300"></div>
            <div class="h-4"></div>
            <div class="grid mb-6">
              <label class="font-[500] flex items-center justify-between" for="">
                Credit Card
                <div class="row flex items-center">
                  <img
                  class="w-[70px] mr-[-15px]"
                  src="~/assets/icons/Mastercard.svg"
                />
                <img
                  class="w-[70px] mr-[-15px]"
                  src="~/assets/icons/Visa.svg"
                />
                <img
                  class="w-[70px] mr-[-15px]"
                  src="~/assets/icons/Amex.svg"
                />
                <img
                  class="w-[70px]"
                  src="~/assets/icons/Discover.svg"
                />
                </div>
              </label>
            </div>
            <message-alert-widget
              class="mb-7"
              :message="errorMessage"
              v-if="errorMessage"
              :type="'error'"
            />

            <div class="form-group mb-3">
              <label class="input-label" for="">Name of card holder</label>
              <el-input
                placeholder="Name Surname"
                required
                v-model="card_name"
              />
            </div>
            <div class="form-group mb-3">
              <label class="input-label" for="">Card Number</label>
              <el-input
                placeholder="0000-0000-0000-0000"
                :value="cardNumberWithDashes"
                @input="inputCardNumber"
                required
              />
            </div>
            <div class="grid gap-5 grid-cols-2">
              <div class="form-group">
                <label class="input-label" for="">Expiration Date</label>
                <el-input
                  :disabled="loading"
                  placeholder="MM/YY"
                  required
                  :value="expirationDateWithSlashes"
                  @input="inputExpirationDate"
                />
              </div>
              <div class="form-group">
                <label class="input-label" for="">CVC</label>
                <el-input
                  :disabled="loading"
                  placeholder="000"
                  required
                  v-model="cvv"
                  type="password"
                  maxlength="3"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="w-full flex justify-center mt-12">
        <button
          @click="submit"
          :class="[
            isLoading || !checkFilledInput
              ? 'opacity-60 cursor-not-allowed'
              : 'opacity-100',
          ]"
          :disabled="isLoading || !checkFilledInput"
          class="w-[50%] sm:w-[320px] py-2 bg-white rounded-[0.7rem] flex justify-center items-center"
        >
          <span class="mr-2">Next</span>

          <spinner-dotted-icon
            v-show="isLoading"
            height="20"
            width="20"
            class="animate-spin ml-1"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import SpinnerDottedIcon from '~/components/svg-icons/SpinnerDottedIcon.vue'
import MessageAlertWidget from '~/components/widgets/MessageAlertWidget.vue'
import { ErrorHandler } from '~/types/ErrorFunction'

export default Vue.extend({
  name: 'RegisterPage',
  auth: false,
  layout: 'landing',
  components: { SpinnerDottedIcon, MessageAlertWidget },
  data() {
    return {
      isLoading: false,
      errorMessage: '',
      cardNumberWithDashes: '',
      card_name: '',
      cvv: '',
      cardId: undefined,
      expirationDateWithSlashes: '',
      companyName: '',
      business_name: '',
      contact_name: '',
      business_email: '',
      business_number: '',
      errorMessageUser: '',
    }
  },
  computed: {
    checkFilledInput() {
      return (
        this.business_email &&
        this.contact_name &&
        this.business_number &&
        this.business_name &&
        this.cardNumber &&
        this.card_name &&
        this.cvv
      )
    },
    userPayload() {
      return {
        email: this.business_email.trim(),
        firstName: this.contact_name,
        lastName: '',
        phone: this.business_number,
        companyName: this.business_name,
      }
    },
    cardPayload() {
      return {
        card_holder_name: this.card_name,
        card_number: this.cardNumber,
        exp_month: this.expMonth,
        exp_year: this.expYear,
        cvv: this.cvv,
        userId: this.$auth.user?.id,
      }
    },
    subscriptionPayload() {
      let {
        companyLedger,
        name,
        paperlink,
        publicProfile,
        teamMembers,
        cc,
        isMonthly,
      } = this.$store.getters.getPackageInfo

      return {
        action: 'subscribe',
        plan: isMonthly ? 'monthly' : 'yearly',
        custom: {
          companyLedger,
          name,
          paperlink,
          publicProfile,
          teamMembers,
          cc,
        },
        userId: this.$auth.user?.id,
      }
    },
    packageInfo() {
      return this.$store?.getters?.getPackageInfo
    },
    cardNumber() {
      return this.cardNumberWithDashes.replace(/-+/g, '')
    },
    expirationDateString() {
      return this.expirationDateWithSlashes.split('/').join('') || ''
    },
    expYear() {
      return this.expirationDateString.split('').splice(2, 4).join('')
    },
    expMonth() {
      return this.expirationDateString.split('').splice(0, 2).join('')
    },
  },
  methods: {
    setBusinessName(val){
      console.log(val)
      this.business_name = val.replace(/\s/g, '')
    },
    async createUser() {
      this.isLoading = true
      try {
        await this.$_server
          .post('/users', this.userPayload)
          .then((response) => {
            this.$auth.setUser(response.data)
            this.createCard()
          })
      } catch ({ response }) {
        console.log(response)
        this.isLoading = false
        this.errorMessageUser = this.$_ErrorHandler(response)
      }
    },
    async testCard() {
      this.isLoading = true
      try {
        let clonePayload = this.cardPayload
        clonePayload.action = 'testCard'
        delete clonePayload.userId

        await this.$_server.post('/cards', clonePayload).then((res) => {
          this.createUser()
        })
      } catch ({ response }) {
        this.isLoading = false
        this.errorMessage = this.$_ErrorHandler(response)
      }
    },
    async createCard() {
      await this.$axios
        .post('/cards', this.cardPayload)
        .then(() => this.createSubscription())
        .catch((err) => (this.errorMessage = err))
    },
    async createSubscription() {
      await this.$axios
        .post('/subscriptions', this.subscriptionPayload)
        .then((res) =>{
          this.toggleToast({
            msg: 'Thank you for going paperless! We have sent a receipt with instructions to verify your email!',
            active: true,
          })
          this.$nuxt.$router.push('/')
        }
        )
        .catch((err) => {
          this.isLoading = false
          this.errorMessage = err
        })
        .finally(() => (this.isLoading = false))
    },
    async submit() {
      this.testCard()
    },
    inputCardNumber(val) {
      if (val.length > 19) return
      let temp = val.replace(/(-+)|([^0-9]+)/g, '')
      this.cardNumberWithDashes = (temp.match(/.{1,4}/g) || []).join('-')
    },
    inputExpirationDate(val) {
      let temp = val.replace(/\/+|[^0-9]+/g, '')
      if (temp.length > 4) return

      // Check if the month is greater than 12
      if (temp.length === 2) {
        if (Number(temp) > 12) temp = '0' + temp
        if (Number(temp) == 0) temp = '01'
      }

      if (temp.length == 4 && Number(temp.substring(2, 4)) == 0) {
        temp = temp.substring(0, 2) + '01'
      }

      let finalVal = (temp.match(/.{1,2}/g) || []).join('/')
      this.expirationDateWithSlashes = finalVal
    },
  },
  mounted() {
    console.log('>>>>>>>>', this.packageInfo)
  },
})
</script>
<style lang="scss" scoped>
.input-label {
  @apply text-xs px-1 my-2;
}
.group-label {
  @apply flex justify-between items-center py-2;
}
.dropdown {
  @apply absolute top-[100%] left-0 w-full bg-white;
  max-height: 150px;
  overflow-y: scroll;
  margin-top: 5px;
  border-radius: 5px;
  box-shadow: 1px 3px 5px rgba(203, 206, 206, 0.692);
}
.dropdown::-webkit-scrollbar {
  width: 5px;
  height: 3px;
  cursor: pointer;
}
.dropdown::-webkit-scrollbar-thumb {
  @apply bg-paperdazgreen-400;
  width: 5px;
  border-radius: 50px;
  cursor: pointer;
}

.dropdown::-webkit-scrollbar-track {
  cursor: pointer;
  @apply border-[1px] border-transparent;
}
.dropdown > li {
  list-style-type: none;
  @apply py-2 px-1;
}
.custom-input {
  @apply w-12 text-center outline-none rounded-lg border-[1px] border-paperdazgray-200 mr-2;
}
.width-full {
  width: 100%;
  text-align: left;
}
.text-input {
  @apply  py-3 border-none outline-none rounded-[0.6rem] w-full;
}
</style>

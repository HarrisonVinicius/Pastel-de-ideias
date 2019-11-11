<template>
    <div>
        <v-layout row wrap style="display: flex; justify-content: center;">
            <v-flex xs4 style="margin-top: 40px; margin-bottom: 30px;">
                <v-card flat style="background-color: transparent;">
                    <img src="../assets/Logo.svg" alt="Minha Figura" style="width: 100%;">
                </v-card>
            </v-flex>
        </v-layout>
        <div class="form-shaddow-box" style="max-width: 970px; margin: 0 auto;">
            <v-layout row wrap style="display: flex; justify-content: center;">
                <v-flex xs12>
                    <v-card class="form-card">
                        <img class="pastel-paralax-img" src="../assets/pastel-paralax.png" alt="Minha Figura">
                        <img class="hidden-md-and-down pasteis-img" src="../assets/pasteis-img.png" alt="Minha Figura">
                        <v-switch
                            class="hidden-md-and-down form-switch"
                            v-model="switchData"
                            label="Bebida"
                        ></v-switch>
                        <v-layout class="form-header" row wrap>
                            <v-flex xs12>
                                <h3 class="form-title-decoration"> Monte aqui o seu cardápio. o que está esperando?</h3>
                            </v-flex>
                        </v-layout>
                        <v-form class="form" ref="form" @submit.prevent="validate">
                            <v-layout class="form-row-1" row wrap>
                                <v-flex xs12 md12 lg4>
                                    <v-card flat style="border-radius: 15px;">
                                        <v-text-field
                                        solo
                                        v-model="title"
                                        :rules="titleRules"
                                        label="Título do pedido"
                                        type='text'
                                        required
                                        ></v-text-field>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md12 lg4>
                                    <v-card style="border-radius: 15px;" flat>
                                        <v-text-field
                                        solo
                                        v-model="flavor"
                                        :rules="flavorRules"
                                        label="Sabor"
                                        type='text'
                                        required
                                        ></v-text-field>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md12 lg2>
                                    <v-card  style="border-radius: 15px;" flat>
                                        <v-text-field
                                            solo
                                            v-model="amount"
                                            :rules="amountRules"
                                            value=""
                                            prefix="R$"
                                            type="number"
                                            required
                                        ></v-text-field>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            <v-layout class="form-row-2" row wrap>
                                <v-flex xs12>
                                    <v-textarea
                                        style="border-radius: 15px;"
                                        solo
                                        v-model="details"
                                        name="input-7-4"
                                        label="Descrição"
                                    ></v-textarea>
                                </v-flex>
                            </v-layout>
                            <v-layout class="form-row-3" row wrap>
                                <v-flex xs12>
                                    <v-card flat style="border-radius: 15px; border: 1px solid #E43636;" @click="$refs.imgInput.click()">
                                        <div id="preview">
                                            <img v-if="url" :src="url" />
                                        </div>
                                        <v-card-text class="text--primary" style="display: flex; justify-content: center;">
                                            <div style=" color: #A03400;">Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta</div>
                                        </v-card-text>
                                        <input class="form-img-input" type="file" @change="imgSelected" ref="imgInput">
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            <v-layout class="form-row-4" row wrap>
                                <v-flex xs12 md2 lg2 style="position: relative; margin: 0 2em;">
                                    <v-btn
                                    dark
                                    large
                                    color="#E43636"
                                    class="mr-4"
                                    @click="reset"
                                    style="border-radius: 25px; width: 100%; position: absolute; bottom: -30px;"
                                    >
                                    LIMPAR
                                    </v-btn>
                                </v-flex>
                                <v-flex xs12 md2 lg2 style="position: relative; margin: 0 2em;">
                                    <v-btn
                                    type="submit" 
                                    block 
                                    large 
                                    :loading="loading"
                                    style="border-radius: 25px; width: 100%; color: #A03400; background-color: #FFCA00; position: absolute; bottom: -30px;"
                                    >
                                    CADASTRAR
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-form>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>
        <v-layout row wrap style="margin-top: 90px; display: flex; justify-content: center;">
            <v-flex class="hidden-md-and-down" xs4>
                <div style="height: 15px; width: 100%; border-bottom: 1px solid #E43636"></div>
            </v-flex>
            <v-flex xs12 md4 lg4 style="z-index: 1; position: relative;">
                <div style="display: flex; justify-content: center; padding-bottom: 25px;">
                    <h2 style="color: #A03400; font-family: roboto; font-style: italic; font-weight: bold;"> Veja como será apresentado ao cliente </h2>
                </div>
            </v-flex>
            <v-flex class="hidden-md-and-down" xs4>
                <div style="height: 15px; width: 100%; border-bottom: 1px solid #E43636"></div>
            </v-flex>
        </v-layout>
        <div  class="order-shaddow-box" style="max-width: 970px; margin: 0 auto;">
            <v-layout class="order-area" row wrap v-for="(item , i) in reversedItems" :key="i">
                <v-flex xs12 >
                    <v-card class="order-item-card" transition="scale-transition" elevation="2">
                        <img class="hidden-md-and-down order-img" :src="item.image" alt="Minha Figura">                    
                        <v-layout class="order-row-1" row wrap>
                            <v-flex xs10>
                                <h2 class="order-title-decoration"> "{{item.title}}"</h2>
                            </v-flex>
                            <v-flex xs2>
                                <h2 class="order-amount-decoration"> R$ {{item.amount}} </h2>
                            </v-flex>
                        </v-layout>
                        <v-layout class="order-row-2" row wrap>
                            <v-flex xs12 md2 lg2>
                                <span class="order-flavor-label-decoration"> Sabor: </span>
                            </v-flex>
                            <v-flex xs12 md10 lg10>
                                <span class="order-flavor-decoration"> {{item.flavor}} </span>
                            </v-flex>
                        </v-layout>
                        <v-layout class="order-row-3" row wrap>
                            <v-flex xs12 md2 lg2>
                                <span class="order-details-label-decoration"> Descrição: </span>
                            </v-flex>
                            <v-flex xs12 md10 lg10>
                                <span class="order-details-decoration"> {{item.details}} </span>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>
        <v-dialog
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
        >
            <v-card>
                <v-card-text>
                    Insira uma Imagem do produto
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog
        v-model="dialog2"
        hide-overlay
        persistent
        width="300"
        >
            <v-card>
                <v-card-text>
                    Um novo produto foi adicionado ao cardápio
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog
        v-model="dialog3"
        hide-overlay
        persistent
        width="300"
        >
            <v-card>
                <v-card-text>
                    Erro ao cadastrar produto
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        data () {
            return {
                /* this property controls the loading animation */
                loading: false, 
                
                /* this property controls the registration button  */
                disable: true,
                
                /* this property gets the value of the title field  */
                title: '',
                
                /* this property controls the rules of the title field  */
                titleRules: [
                    v => !!v || 'campo obrigatório',
                    v => (v && v.length <= 60 && v.length >= 3) || 'o título precisa ter entre 3 e 60 caracteres',
                ],
                
                /* this property gets the value of the flavor field  */
                flavor: '',
                
                /* this property controls the rules of the flavor field  */                
                flavorRules: [
                    v => !!v || 'campo obrigatório',
                    v => (v && v.length <= 60 && v.length >= 3) || 'o sabor precisa ter entre 3 e 60 caracteres',
                ],
                
                /* this property gets the value of the amount field  */
                amount: '',
                
                /* this property controls the rules of the amount field  */                                
                amountRules: [
                    v => !!v || 'campo obrigatório',
                ],
                
                /* this property gets the value of the details field  */                
                details: '',
                
                /* The following is the array of items registered in the menu that is shown on the screen below the form.  */
                items: [
                    {
                        title: "Suco de Goiaba",
                        flavor: "Goiaba",
                        amount: 5,
                        details: "Um mero suco de goiaba. Tem sachet no balcão...",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMeu2OdcVCRwTQ3hTZ4siCl_lNEVOZD6Ajn1B0MWhjeSxj0B9Y",
                    },
                ],
                
                /* this property gets the value of the switch */                                
                switchData: '',

                /* this property the selected image */                                
                selectedImg: null,

                /* this property controls de visibility of the image preview */                
                url: null,
                
                /* this property controls de visibility of the image feedback dialog */                
                dialog: false,
                
                /* this property controls de visibility of the menu feedback dialog */                
                dialog2: false,
                
                /* this property controls de visibility of the error feedback dialog */                
                dialog3: false

            }
        },
    
        /* Here are the methods used to make the component dynamic.*/
        methods: {
        
            /*  This function is responsible for validating form information and then adding an item to the array of items. */   
            validate() {
                if(this.$refs.form.validate()) {
                    if(this.selectedImg === null){
                        this.dialog = true
                        return 
                    }
                    this.imgUpload()
                }
            },
            
            /* This function is responsible for adding an item to the array. This function is called in the above function if the data is valid. */
            addItem(data) {
                this.items.push(data)
            },
            
            /* This function is responsible for resetting the form fields. */
            reset () {
                this.$refs.form.reset()
                this.url = null
            },

            /* This function is responsible for selecting the image and controls the visibility of the image preview */
            imgSelected (event) {
                this.selectedImg = event.target.files[0]
                this.url = URL.createObjectURL(this.selectedImg);
            },

            /* This function is responsible for uploading the image to an api, creating an object with form data and adding an item to the menu. */
            imgUpload () {
                const img = new FormData();
                this.loading = true
                img.append('image', this.selectedImg, this.selectedImg.name)
                axios.post('https://api.imgur.com/3/image', img, {
                    headers: {
                        "Authorization": "Client-ID bb421f40c6ec4f7" 
                    },
                    onUploadProgress: uploadEvent => {
                        console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
                    }
                })
                
                .then( res => {                 
                    if(res.data.data && res.data.data.link){
                        let data = {
                            title: this.title,
                            flavor: this.flavor,
                            amount: this.amount,
                            details: this.details,
                            image: res.data.data.link
                        }
                        console.log(data)
                        this.addItem(data)
                        this.dialog2 = true
                    }
                }) 

                .catch ( error => {
                    this.dialog3 = true
                })
                
                .finally (() => {
                    this.loading = false
                }) 
            }


        },

        /* Here are the computed methods*/
        computed: {
            /* This function is responsible for reversing the array of items and returning an inverted copy. */
            reversedItems: function () {
                var newArray = [];
                for (var i = this.items.length - 1; i >= 0; i--) {
                    newArray.push(this.items[i]);
                }
                return newArray;
            }
        },

        /* The watchers below are controls the visibility of the feedback dialogs */
        watch: {
            dialog (val) {
                if (!val) return

                setTimeout(() => (this.dialog = false), 2000)
            },

            dialog2 (val) {
                if (!val) return

                setTimeout(() => (this.dialog2 = false), 2000)
            },

            dialog3 (val) {
                if (!val) return

                setTimeout(() => (this.dialog3 = false), 2000)
            }
        }

    }   
</script>

<style>
    #preview {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #preview img {
        max-width: 100%;
        max-height: 500px;
    }
    
    .order-details-decoration {
        font-family: roboto; 
        font-style: regular; 
        font-size: 24px; 
        color: #A03400;
    }
    
    .order-details-label-decoration {
        font-family: roboto; 
        font-style: italic; 
        font-weight: bold; 
        font-size: 24px; 
        color: #A03400; 
        margin-right: 1px;
    }
    
    .order-row-3 {
        padding-left: 55px; 
        padding-right: 55px; 
        margin-top: 30px;
    }
    
    .order-flavor-decoration {
        font-family: roboto; 
        font-style: regular; 
        font-size: 24px; 
        color: #A03400;
    }

    .order-flavor-label-decoration {
        font-family: roboto; 
        font-style: italic; 
        font-weight: bold; 
        font-size: 24px; 
        color: #A03400; 
        margin-right: 1px;
    }
    
    .order-row-2 {
        padding-left: 55px; 
        padding-right: 55px; 
        margin-top: 30px;
    }

    .order-amount-decoration {
        color: #FFF; 
        font-family: roboto; 
        font-style: italic; 
        font-weight: bold;
    }

    .order-title-decoration {
        margin-left: 25px; 
        color: #FFCA00; 
        font-family: roboto; 
        font-style: italic; 
        font-weight: bold;
    }

    .order-row-1 {
        background-color: #E43636; 
        padding: 25px; 
        padding-bottom: 35px; 
        border-top-left-radius: 25px; 
        border-top-right-radius: 25px; 
    }
    
    .order-img {
        z-index: 1; 
        position: absolute; 
        height: 190px; 
        width: 190px; 
        left: -155px;
        top: 25px;
        object-fit: cover;
        border-radius: 25px;
        
    }
    
    .order-item-card {
        border-radius: 25px; 
        z-index: 0; 
        position: relative; 
        min-height: 240px;
    }
    
    .order-area {
        display: flex; 
        justify-content: center; 
        margin-top: 40px;
    }
    
    .pasteis-img {
        width: 100%; 
        z-index: -1; 
        position: absolute; 
        height: 200px; 
        width: 250px; 
        top: -100px;  
        right: 0;
    }
    
    .pastel-paralax-img {
        width: 340px; 
        z-index: 1; 
        position: absolute; 
        height: 310px; 
        top: -150px; 
        left: -185px;
    }
    
    .form {
        width: 100%; 
        z-index: 1; 
        position: relative
    }

    .form-img-input {
        z-index: 1;
        position: absolute;
        top: 65px;
        left: 320px;
        border-radius: 0px;
        display: none;
    }
    
    .form-switch {
        z-index: 1;
        position: absolute;
        top: 5px;
        right: 19px;
    }

    .form-switch .v-input__slot {
        border: none;
    }

    .form-row-1 {
        display: flex; 
        justify-content: space-around; 
        margin-top: -25px;
    }

    .form-row-2 {
        display: flex; 
        justify-content: center; 
        padding-left: 30px; 
        padding-right: 30px;
    }

    .form-row-3 {
        display: flex; 
        justify-content: center; 
        padding-left: 30px; 
        padding-right: 30px;
    }

    .form-row-4 {
        display: flex; 
        justify-content: center; 
        min-height: 100px;
    }
    
    .form-card {
        border-radius: 25px; 
        z-index: 0; 
        position: relative; 
    }

    .form-header {
        background-color: #FFCA00; 
        padding: 25px; 
        padding-bottom: 35px; 
        border-top-left-radius: 25px; 
        border-top-right-radius: 25px;
    }

    .form-title-decoration {
        margin-left: 25px; 
        color: #A03400; 
        font-family: roboto; 
        font-style: italic; 
        font-weight: bold;
    }
    
    .form-shaddow-box {
        -webkit-box-shadow: 0px 121px 87px 40px rgba(255,255,255,1);
        -moz-box-shadow: 0px 121px 87px 40px rgba(255,255,255,1);
        box-shadow: 0px 121px 87px 40px rgba(255,255,255,1);
    }

    .order-shaddow-box {
        -webkit-box-shadow: 0px 0px 126px 64px rgba(255,255,255,1);
        -moz-box-shadow: 0px 0px 126px 64px rgba(255,255,255,1);
        box-shadow: 0px 0px 126px 64px rgba(255,255,255,1);
        background-color: white;
    }
    
/*     The following classes are standard vuetify framework classes.
 
*/
    .v-input__slot {
        border-radius: 10px !important;
        border: 1px solid #E43636;
        box-shadow: none !important;
    }

    .v-label {
        color: #A03400 !important;
    }

    .v-text-field__prefix {
        color: #A03400 !important;
    }

</style>

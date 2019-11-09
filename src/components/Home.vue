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
                                    <v-card flat style="border-radius: 15px; border: 1px solid #E43636;">
                                        <v-card-text class="text--primary" style="display: flex; justify-content: center;">
                                            <div style=" color: #A03400;">Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta</div>
                                        </v-card-text>
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
                        <img class="hidden-md-and-down order-img" src="../assets/pastel-img.png" alt="Minha Figura">                    
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
        
    </div>
</template>

<script>
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
                        img: "",
                    },
                ],
                
                /* this property gets the value of the switch */                                
                switchData: ''
            }
        },
    
        /* Here are the methods used to make the component dynamic.*/
        methods: {
        
            /*  This function is responsible for validating form information and then adding an item to the array of items. */   
            validate() {
                this.loading = true
                let data = {
                    title: this.title,
                    flavor: this.flavor,
                    amount: this.amount,
                    details: this.details
                }
                if(this.$refs.form.validate()) {
                    this.addItem(data)
                    this.loading = false
                }
                this.loading = false
            },
            
            /* This function is responsible for adding an item to the array. This function is called in the above function if the data is valid. */
            addItem(data) {
                this.items.push(data)
            },
            
            /* This function is responsible for resetting the form fields. */
            reset () {
                this.$refs.form.reset()
            },

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
        }

    }   
</script>

<style>
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
        width: 100%; 
        z-index: 1; 
        position: absolute; 
        height: 235px; 
        width: 235px; 
        left: -155px;
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

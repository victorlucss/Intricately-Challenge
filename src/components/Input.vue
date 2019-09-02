<template>
  <div class="input-group" :class="{'has-error': error.hasError, 'is-fullwidth': fullwidth}">
    <input class="input" :type="type" :placeholder="placeholder" @blur="validateMask()" v-model="inputValue" v-if="type != 'currency' && type != 'textarea'">
    <textarea class="input" :placeholder="placeholder" @blur="validateMask()" v-model="inputValue" v-if="type == 'textarea'"></textarea>
    <input class="input" type="currency" :placeholder="placeholder" @blur="validateMask()" v-model="inputValue" v-if="type == 'currency'">
    <span class="label">{{label}}</span>
    <span class="error" v-if="error.hasError">{{error.message}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    props: ['type', 'placeholder', 'value', 'required', 'label', 'min', 'max', 'fullwidth'],

    data() {
      return {
        inputValue: this.value || '',
        minValue: parseInt(this.min),
        maxValue: parseInt(this.max),
        error: {
          hasError: false,
          message: '' 
        }
      }
    },

    watch: {
      value(val){
        if(this.type !== 'currency'){
          this.inputValue = value;
        }else this.inputValue = parseInt(value)
      },

      inputValue(val){
        this.validate();
      },
    },

    methods: {
      validateMask(){
        this.validate();
        
        if(!this.error.hasError){
          
        }
      },

      validate(){
        if(this.required && this.inputValue === ''){
          this.error = {
            hasError: true,
            message: `The input is required!`
          };  
        }else if(this.type === 'currency'){
          if(this.inputValue < this.minValue){
            this.error = {
              hasError: true,
              message: `The value must be greater than ${this.minValue}`
            };
          }else if(this.inputValue > this.maxValue){
            this.error = {
              hasError: true,
              message: `The value must be smaller than ${this.maxValue}`
            };
          } else this.error = {hasError: false}
        }else this.error = {hasError: false}
      }
    }

  }
</script>